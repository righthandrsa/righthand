import { NextResponse } from 'next/server';
import { createHmac } from 'crypto';
import { clerkClient } from '@clerk/nextjs/server';

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-paystack-signature');

    // Verify the webhook is genuinely from Paystack
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
        // One-time or recurring payment succeeded
        const userId = event.data?.metadata?.userId;
        if (!userId) break;

        await client.users.updateUserMetadata(userId, {
          publicMetadata: {
            subscribed: true,
            subscribedAt: new Date().toISOString(),
            subscriptionStatus: 'active',
            paystackCustomerCode: event.data?.customer?.customer_code,
            paystackSubscriptionCode: event.data?.subscription_code,
          },
        });
        break;
      }

      case 'subscription.disable':
      case 'subscription.not_renew': {
        // Subscription cancelled or failed to renew
        const customerCode = event.data?.customer?.customer_code;
        if (!customerCode) break;

        // Find user by Paystack customer code
        const users = await client.users.getUserList({ limit: 500 });
        const user = users.data.find(
          (u) => u.publicMetadata?.paystackCustomerCode === customerCode
        );
        if (!user) break;

        await client.users.updateUserMetadata(user.id, {
          publicMetadata: {
            subscribed: false,
            subscriptionStatus: 'cancelled',
          },
        });
        break;
      }

      case 'invoice.payment_failed': {
        // Recurring payment failed
        const customerCode = event.data?.customer?.customer_code;
        if (!customerCode) break;

        const users = await client.users.getUserList({ limit: 500 });
        const user = users.data.find(
          (u) => u.publicMetadata?.paystackCustomerCode === customerCode
        );
        if (!user) break;

        await client.users.updateUserMetadata(user.id, {
          publicMetadata: {
            subscribed: false,
            subscriptionStatus: 'payment_failed',
          },
        });
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook error' }, { status: 500 });
  }
}
