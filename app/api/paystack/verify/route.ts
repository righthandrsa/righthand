import { NextResponse } from 'next/server';
import { auth, clerkClient } from '@clerk/nextjs/server';

export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
    }

    const { reference } = await request.json();
    if (!reference) {
      return NextResponse.json({ error: 'Missing reference' }, { status: 400 });
    }

    // Attempt to verify with Paystack
    const res = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` },
    });

    const data = await res.json();
    const verified = data.status && data.data?.status === 'success';

    if (verified) {
      // Update metadata immediately if we can verify now
      const client = await clerkClient();
      await client.users.updateUserMetadata(userId, {
        publicMetadata: {
          subscribed: true,
          subscribedAt: new Date().toISOString(),
          paystackReference: reference,
        },
      });
    }

    // Always return success — the charge.success webhook is the reliable
    // activation path for subscriptions and fires within seconds regardless
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Paystack verify error:', error);
    // Still redirect — webhook will activate access
    return NextResponse.json({ success: true });
  }
}
