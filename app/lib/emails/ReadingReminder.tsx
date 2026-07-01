import { Button, Hr, Link, Text } from '@react-email/components';
import * as React from 'react';
import Layout from './Layout';

const h1 = { color: '#1a2340', fontSize: '24px', fontWeight: '700', margin: '0 0 8px', letterSpacing: '-0.02em' };
const p = { color: '#4a5568', fontSize: '15px', lineHeight: '1.7', margin: '0 0 16px' };
const btn = { backgroundColor: '#1a5ea5', borderRadius: '8px', color: '#ffffff', fontSize: '14px', fontWeight: '600', padding: '12px 24px', textDecoration: 'none', display: 'inline-block' };
const hr = { borderColor: '#e8f0fa', margin: '24px 0' };
const pill = { backgroundColor: '#e8f0fa', borderRadius: '6px', color: '#1a5ea5', fontSize: '13px', fontWeight: '600', padding: '8px 14px', margin: '4px 4px 4px 0', display: 'inline-block' };

interface Props {
  firstName: string;
  moduleTitle: string;
  moduleSlug: string;
  sectionTitle: string;
}

export default function ReadingReminder({ firstName, moduleTitle, moduleSlug, sectionTitle }: Props) {
  return (
    <Layout preview={`Keep going — ${moduleTitle} is waiting for you on Right Hand.`}>
      <Text style={h1}>You have modules waiting.</Text>
      <Text style={p}>
        Hi {firstName || 'there'}, you have not visited Right Hand in a while. Your full access subscription is active — make the most of it.
      </Text>

      <Text style={{ ...p, fontWeight: '600', color: '#1a2340', marginBottom: '8px' }}>Pick up where you left off:</Text>
      <div style={{ marginBottom: '24px' }}>
        <span style={pill}>{sectionTitle}</span>
        <Text style={{ ...p, marginBottom: '0', marginTop: '12px' }}>{moduleTitle}</Text>
      </div>

      <Button href={`https://righthand.org.za/learn/${moduleSlug}`} style={btn}>
        Continue reading →
      </Button>

      <Hr style={hr} />

      <Text style={{ ...p, fontSize: '13px', color: '#718096', marginBottom: '0' }}>
        Browse all modules at <Link href="https://righthand.org.za/learn" style={{ color: '#1a5ea5' }}>righthand.org.za/learn</Link>. To stop receiving these reminders, <Link href="https://righthand.org.za/account" style={{ color: '#1a5ea5' }}>manage your preferences</Link>.
      </Text>
    </Layout>
  );
}
