import { NextResponse } from 'next/server';
import { clerkClient } from '@clerk/nextjs/server';
import { render } from '@react-email/render';
import { resend, FROM } from '../../../lib/resend';
import RenewalReminder from '../../../lib/emails/RenewalReminder';

// Called by Netlify scheduled function daily — sends 7-day renewal warnings to annual subscribers
export async function POST(request: Request) {
  const secret = request.headers.get('x-internal-secret');
  if (secret !== process.env.INTERNAL_API_SECRET) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  const client = await clerkClient();
  const { data: users } = await client.users.getUserList({ limit: 500 });

  const sevenDaysFromNow = Date.now() + 7 * 24 * 60 * 60 * 1000;
  const windowStart = sevenDaysFromNow - 12 * 60 * 60 * 1000; // ±12 hour window
  const windowEnd = sevenDaysFromNow + 12 * 60 * 60 * 1000;

  const toRemind = users.filter((u) => {
    if (u.publicMetadata?.subscribed !== true) return false;
    if (u.publicMetadata?.subscriptionPlan !== 'annual') return false;
    const subscribedAt = u.publicMetadata?.subscribedAt as string | undefined;
    if (!subscribedAt) return false;
    const subDate = new Date(subscribedAt).getTime();
    // Annual renewal: same day next year
    const renewal = new Date(subDate);
    renewal.setFullYear(renewal.getFullYear() + 1);
    return renewal.getTime() >= windowStart && renewal.getTime() <= windowEnd;
  });

  const results = await Promise.allSettled(
    toRemind.map((user) => {
      const email = user.primaryEmailAddress?.emailAddress;
      if (!email) return Promise.resolve();
      const subscribedAt = user.publicMetadata?.subscribedAt as string;
      const renewal = new Date(new Date(subscribedAt).setFullYear(new Date(subscribedAt).getFullYear() + 1));
      const renewalDate = renewal.toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' });
      return resend.emails.send({
        from: FROM,
        to: email,
        subject: 'Your Right Hand annual subscription renews in 7 days',
        html: render(RenewalReminder({
          firstName: user.firstName || '',
          renewalDate,
          amount: 'R799',
          plan: 'annual',
        })) as unknown as string,
      });
    })
  );

  const sent = results.filter((r) => r.status === 'fulfilled').length;
  return NextResponse.json({ sent, total: toRemind.length });
}
