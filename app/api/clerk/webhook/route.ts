import { NextResponse } from 'next/server';
import { Webhook } from 'svix';
import { render } from '@react-email/render';
import { resend, FROM } from '../../../lib/resend';
import Welcome from '../../../lib/emails/Welcome';

export async function POST(request: Request) {
  try {
    const secret = process.env.CLERK_WEBHOOK_SECRET;
    if (!secret) {
      console.error('CLERK_WEBHOOK_SECRET not set');
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
    }

    const payload = await request.text();
    const headers = {
      'svix-id': request.headers.get('svix-id') ?? '',
      'svix-timestamp': request.headers.get('svix-timestamp') ?? '',
      'svix-signature': request.headers.get('svix-signature') ?? '',
    };

    let event: { type: string; data: { email_addresses: { email_address: string }[]; first_name?: string } };
    try {
      event = new Webhook(secret).verify(payload, headers) as typeof event;
    } catch {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    if (event.type !== 'user.created') {
      return NextResponse.json({ received: true });
    }

    const email = event.data.email_addresses?.[0]?.email_address;
    const firstName = event.data.first_name || '';

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
