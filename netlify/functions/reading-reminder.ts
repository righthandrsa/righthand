import type { Config } from '@netlify/functions';

export default async function handler() {
  const base = process.env.URL ?? 'https://righthand.org.za';
  await fetch(`${base}/api/emails/reading-reminder`, {
    method: 'POST',
    headers: { 'x-internal-secret': process.env.INTERNAL_API_SECRET ?? '' },
  });
}

export const config: Config = {
  schedule: '0 8 * * 1', // Every Monday at 08:00 UTC
};
