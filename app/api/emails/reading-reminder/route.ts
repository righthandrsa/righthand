import { NextResponse } from 'next/server';
import { clerkClient } from '@clerk/nextjs/server';
import { render } from '@react-email/render';
import { resend, FROM } from '../../../lib/resend';
import ReadingReminder from '../../../lib/emails/ReadingReminder';
import { sections } from '../../../lib/modules';

// Called by Netlify scheduled function weekly
export async function POST(request: Request) {
  const secret = request.headers.get('x-internal-secret');
  if (secret !== process.env.INTERNAL_API_SECRET) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  const client = await clerkClient();
  const { data: users } = await client.users.getUserList({ limit: 500 });

  // Target active subscribers who haven't logged in within 7 days
  const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const inactive = users.filter((u) => {
    const subscribed = u.publicMetadata?.subscribed === true;
    const lastActive = u.lastActiveAt ?? 0;
    return subscribed && lastActive < sevenDaysAgo;
  });

  // Default module to feature — first paywalled module in each section rotated by week
  const weekIndex = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000)) % sections.length;
  const section = sections[weekIndex];
  const mod = section.modules.find((m) => !m.free) ?? section.modules[0];

  const results = await Promise.allSettled(
    inactive.map((user) => {
      const email = user.primaryEmailAddress?.emailAddress;
      if (!email) return Promise.resolve();
      return resend.emails.send({
        from: FROM,
        to: email,
        subject: `You have modules waiting — Right Hand`,
        html: render(ReadingReminder({
          firstName: user.firstName || '',
          moduleTitle: mod.title,
          moduleSlug: mod.slug,
          sectionTitle: section.title,
        })) as unknown as string,
      });
    })
  );

  const sent = results.filter((r) => r.status === 'fulfilled').length;
  return NextResponse.json({ sent, total: inactive.length });
}
