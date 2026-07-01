import { NextResponse } from 'next/server';
import { render } from '@react-email/components';
import { resend, FROM, SUPPORT } from '../../lib/resend';
import ContactAutoReply from '../../lib/emails/ContactAutoReply';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await Promise.all([
      // Notify the team
      resend.emails.send({
        from: FROM,
        to: SUPPORT,
        replyTo: email,
        subject: `Right Hand contact: ${subject || 'General enquiry'} — from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      }),
      // Auto-reply to sender
      resend.emails.send({
        from: FROM,
        to: email,
        subject: 'We received your message — Right Hand',
        html: await render(ContactAutoReply({ name, subject: subject || '', message })),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact route error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
