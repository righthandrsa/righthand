import { NextResponse } from 'next/server';
import { auth, clerkClient } from '@clerk/nextjs/server';

export async function POST() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
    }

    const client = await clerkClient();
    const user = await client.users.getUser(userId);
    const subscriptionCode = user.publicMetadata?.paystackSubscriptionCode as string;

    if (!subscriptionCode) {
      return NextResponse.json({ error: 'No subscription found' }, { status: 400 });
    }

    // Disable subscription in Paystack
    const res = await fetch(`https://api.paystack.co/subscription/disable`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code: subscriptionCode, token: user.publicMetadata?.paystackEmailToken }),
    });

    const data = await res.json();

    if (!data.status) {
      console.error('Paystack cancel error:', data);
      return NextResponse.json({ error: 'Failed to cancel' }, { status: 500 });
    }

    // Update user metadata
    await client.users.updateUserMetadata(userId, {
      publicMetadata: {
        subscribed: false,
        subscriptionStatus: 'cancelled',
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Cancel error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
