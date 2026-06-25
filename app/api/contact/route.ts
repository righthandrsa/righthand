import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'RightHand Contact Form <noreply@send.righthand.org.za>',
        to: 'contact@righthand.org.za',
        reply_to: email,
        subject: `RightHand contact: ${subject || 'General enquiry'} — from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      }),
    });

    if (res.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorBody = await res.json();
      console.error('Resend error:', errorBody);
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
    }
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}