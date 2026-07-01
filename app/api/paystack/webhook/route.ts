import { NextResponse } from 'next/server';
import { createHmac } from 'crypto';
import { clerkClient } from '@clerk/nextjs/server';
import { render } from '@react-email/render';
import { resend, FROM } from '../../../lib/resend';
import PaymentReceipt from '../../../lib/emails/PaymentReceipt';
import PaymentFailed from '../../../lib/emails/PaymentFailed';
import SubscriptionCancelled from '../../../lib/emails/SubscriptionCancelled';

function getFirstName(user: { firstName?: string | null }): string {
  return user.firstName || '';
}

function formatAmount(kobo: number): string {
  return `R${(kobo / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' });
}

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-paystack-signature');

    const hash = createHmac('sha512', process.env.PAYSTACK_SECRET_KEY!)
      .update(body)
      .digest('hex');

    if (hash !== signature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    const event = JSON.parse(body);
    const client = await clerkClient();

    switch (event.event) {
      case 'charge.success': {
        const userId = event.data?.metadata?.userId;
        if (!userId) break;

        const planCode = event.data?.plan?.plan_code ?? '';
        const isAnnual = planCode === process.env.NEXT_PUBLIC_PAYSTACK_ANNUAL_PLAN_CODE;

        await client.users.updateUserMetadata(userId, {
          publicMetadata: {
            subscribed: true,
            subscribedAt: new Date().toISOString(),
            subscriptionStatus: 'active',
            subscriptionPlan: isAnnual ? 'annual' : 'monthly',
            paystackCustomerCode: event.data?.customer?.customer_code,
            paystackSubscriptionCode: event.data?.subscription_code,
          },
        });

        const user = await client.users.getUser(userId);
        const email = user.primaryEmailAddress?.emailAddress;
        if (email) {
          await resend.emails.send({
            from: FROM,
            to: email,
            subject: 'Payment confirmed — your Right Hand subscription is active',
            html: await render(PaymentReceipt({
              firstName: getFirstName(user),
              plan: isAnnual ? 'annual' : 'monthly',
              amount: formatAmount(event.data?.amount ?? 0),
              reference: event.data?.reference ?? '',
              date: formatDate(event.data?.paid_at ?? new Date().toISOString()),
            })),
          });
        }
        break;
      }

      case 'subscription.disable':
      case 'subscription.not_renew': {
        const customerCode = event.data?.customer?.customer_code;
        if (!customerCode) break;

        const users = await client.users.getUserList({ limit: 500 });
        const user = users.data.find(
          (u) => u.publicMetadata?.paystackCustomerCode === customerCode
        );
        if (!user) break;

        await client.users.updateUserMetadata(user.id, {
          publicMetadata: { subscribed: false, subscriptionStatus: 'cancelled' },
        });

        const email = user.primaryEmailAddress?.emailAddress;
        if (email) {
          await resend.emails.send({
            from: FROM,
            to: email,
            subject: 'Your Right Hand subscription has been cancelled',
            html: await render(SubscriptionCancelled({ firstName: getFirstName(user) })),
          });
        }
        break;
      }

      case 'invoice.payment_failed': {
        const customerCode = event.data?.customer?.customer_code;
        if (!customerCode) break;

        const users = await client.users.getUserList({ limit: 500 });
        const user = users.data.find(
          (u) => u.publicMetadata?.paystackCustomerCode === customerCode
        );
        if (!user) break;

        await client.users.updateUserMetadata(user.id, {
          publicMetadata: { subscribed: false, subscriptionStatus: 'payment_failed' },
        });

        const email = user.primaryEmailAddress?.emailAddress;
        if (email) {
          await resend.emails.send({
            from: FROM,
            to: email,
            subject: 'Action needed — your Right Hand payment could not be processed',
            html: await render(PaymentFailed({ firstName: getFirstName(user) })),
          });
        }
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook error' }, { status: 500 });
  }
}
