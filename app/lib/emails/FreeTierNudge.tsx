import { Button, Hr, Link, Text } from '@react-email/components';
import * as React from 'react';
import Layout from './Layout';

const h1 = { color: '#1a2340', fontSize: '24px', fontWeight: '700', margin: '0 0 8px', letterSpacing: '-0.02em' };
const p = { color: '#4a5568', fontSize: '15px', lineHeight: '1.7', margin: '0 0 16px' };
const btn = { backgroundColor: '#1a5ea5', borderRadius: '8px', color: '#ffffff', fontSize: '14px', fontWeight: '600', padding: '12px 24px', textDecoration: 'none', display: 'inline-block' };
const hr = { borderColor: '#e8f0fa', margin: '24px 0' };
const lockedBox = { backgroundColor: '#f8faff', border: '1px solid #c5d8ef', borderRadius: '8px', padding: '20px 24px', margin: '0 0 24px' };

interface Props {
  firstName: string;
  sectionTitle: string;
  nextModuleTitle: string;
}

export default function FreeTierNudge({ firstName, sectionTitle, nextModuleTitle }: Props) {
  return (
    <Layout preview={`You have finished the free ${sectionTitle} module — unlock the rest.`}>
      <Text style={h1}>You finished the free module.</Text>
      <Text style={p}>
        Hi {firstName || 'there'}, great work reading the free {sectionTitle} module. There is more waiting for you.
      </Text>

      <div style={lockedBox}>
        <Text style={{ ...p, fontWeight: '600', color: '#1a2340', margin: '0 0 4px' }}>Next up in {sectionTitle}:</Text>
        <Text style={{ ...p, margin: '0 0 12px' }}>{nextModuleTitle}</Text>
        <Text style={{ ...p, fontSize: '13px', color: '#718096', margin: '0' }}>
          + all other modules across Motor Rights, Credit &amp; Debt, Banking, and Tenant Rights.
        </Text>
      </div>

      <Button href="https://righthand.org.za/pricing" style={btn}>
        Unlock full access →
      </Button>

      <Hr style={hr} />

      <Text style={{ ...p, fontSize: '13px', color: '#718096', marginBottom: '0' }}>
        Full access from R99/month or R799/year. Cancel anytime, no contracts. <Link href="https://righthand.org.za/pricing" style={{ color: '#1a5ea5' }}>See pricing</Link>.
      </Text>
    </Layout>
  );
}
