import { Button, Hr, Link, Text } from '@react-email/components';
import * as React from 'react';
import Layout from './Layout';

const h1 = { color: '#1a2340', fontSize: '24px', fontWeight: '700', margin: '0 0 8px', letterSpacing: '-0.02em' };
const p = { color: '#4a5568', fontSize: '15px', lineHeight: '1.7', margin: '0 0 16px' };
const btn = { backgroundColor: '#1a5ea5', borderRadius: '8px', color: '#ffffff', fontSize: '14px', fontWeight: '600', padding: '12px 24px', textDecoration: 'none', display: 'inline-block' };
const hr = { borderColor: '#e8f0fa', margin: '24px 0' };
const moduleCard = { backgroundColor: '#e8f0fa', borderRadius: '8px', padding: '20px 24px', margin: '0 0 24px', borderLeft: '4px solid #1a5ea5' };
const pill = { backgroundColor: '#1a5ea5', borderRadius: '6px', color: '#ffffff', fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase' as const, padding: '4px 10px', display: 'inline-block', marginBottom: '10px' };

interface Props {
  firstName: string;
  moduleTitle: string;
  moduleSlug: string;
  sectionTitle: string;
  contributorName?: string;
  teaser: string;
}

export default function NewContent({ firstName, moduleTitle, moduleSlug, sectionTitle, contributorName, teaser }: Props) {
  return (
    <Layout preview={`New on Right Hand: ${moduleTitle}`}>
      <Text style={h1}>New module available.</Text>
      <Text style={p}>
        Hi {firstName || 'there'}, a new module has just been published on Right Hand — included in your full access subscription.
      </Text>

      <div style={moduleCard}>
        <span style={pill}>{sectionTitle}</span>
        <Text style={{ ...p, fontWeight: '700', color: '#1a2340', fontSize: '17px', margin: '0 0 8px' }}>{moduleTitle}</Text>
        {contributorName && (
          <Text style={{ ...p, fontSize: '12px', color: '#718096', margin: '0 0 8px' }}>By {contributorName}</Text>
        )}
        <Text style={{ ...p, fontSize: '14px', margin: '0' }}>{teaser}</Text>
      </div>

      <Button href={`https://righthand.org.za/learn/${moduleSlug}`} style={btn}>
        Read now →
      </Button>

      <Hr style={hr} />

      <Text style={{ ...p, fontSize: '13px', color: '#718096', marginBottom: '0' }}>
        View all modules at <Link href="https://righthand.org.za/learn" style={{ color: '#1a5ea5' }}>righthand.org.za/learn</Link>. To stop receiving new content notifications, <Link href="https://righthand.org.za/account" style={{ color: '#1a5ea5' }}>manage your preferences</Link>.
      </Text>
    </Layout>
  );
}
