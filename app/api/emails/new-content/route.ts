import { NextResponse } from 'next/server';
import { clerkClient } from '@clerk/nextjs/server';
import { render } from '@react-email/render';
import { resend, FROM } from '../../../lib/resend';
import NewContent from '../../../lib/emails/NewContent';

// Called manually when a new module is published
// POST body: { moduleTitle, moduleSlug, sectionTitle, contributorName?, teaser }
export async function POST(request: Request) {
  const secret = request.headers.get('x-internal-secret');
  if (secret !== process.env.INTERNAL_API_SECRET) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  const { moduleTitle, moduleSlug, sectionTitle, contributorName, teaser } = await request.json();
  if (!moduleTitle || !moduleSlug || !sectionTitle || !teaser) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const client = await clerkClient();
  const { data: users } = await client.users.getUserList({ limit: 500 });
  const subscribers = users.filter((u) => u.publicMetadata?.subscribed === true);

  const results = await Promise.allSettled(
    subscribers.map((user) => {
      const email = user.primaryEmailAddress?.emailAddress;
      if (!email) return Promise.resolve();
      return resend.emails.send({
        from: FROM,
        to: email,
        subject: `New on Right Hand: ${moduleTitle}`,
        html: render(NewContent({
          firstName: user.firstName || '',
          moduleTitle,
          moduleSlug,
          sectionTitle,
          contributorName,
          teaser,
        })) as unknown as string,
      });
    })
  );

  const sent = results.filter((r) => r.status === 'fulfilled').length;
  return NextResponse.json({ sent, total: subscribers.length });
}
