import type { Config } from '@netlify/functions';

export default async function handler() {
  const base = process.env.URL ?? 'https://righthand.org.za';
  await fetch(`${base}/api/emails/renewal-reminder`, {
    method: 'POST',
    headers: { 'x-internal-secret': process.env.INTERNAL_API_SECRET ?? '' },
  });
}

export const config: Config = {
  schedule: '0 7 * * *', // Every day at 07:00 UTC
};
