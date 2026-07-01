import { NextResponse } from 'next/server';
import { render } from '@react-email/render';
import { resend, FROM } from '../../../lib/resend';
import Welcome from '../../../lib/emails/Welcome';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Verify the webhook secret
    const secret = request.headers.get('x-clerk-webhook-secret') || request.headers.get('svix-secret');
    if (process.env.CLERK_WEBHOOK_SECRET && secret !== process.env.CLERK_WEBHOOK_SECRET) {
      return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
    }

    if (body.type !== 'user.created') {
      return NextResponse.json({ received: true });
    }

    const user = body.data;
    const email = user.email_addresses?.[0]?.email_address;
    const firstName = user.first_name || '';

    if (!email) {
      return NextResponse.json({ received: true });
    }

    await resend.emails.send({
      from: FROM,
      to: email,
      subject: 'Welcome to Right Hand — know your consumer rights',
      html: await render(Welcome({ firstName })),
    });

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Clerk webhook error:', error);
    return NextResponse.json({ error: 'Webhook error' }, { status: 500 });
  }
}
