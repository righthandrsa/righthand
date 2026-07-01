import { Button, Hr, Link, Text, Section } from '@react-email/components';
import * as React from 'react';
import Layout from './Layout';

const h1 = { color: '#1a2340', fontSize: '24px', fontWeight: '700', margin: '0 0 8px', letterSpacing: '-0.02em' };
const p = { color: '#4a5568', fontSize: '15px', lineHeight: '1.7', margin: '0 0 16px' };
const btn = { backgroundColor: '#1a5ea5', borderRadius: '8px', color: '#ffffff', fontSize: '14px', fontWeight: '600', padding: '12px 24px', textDecoration: 'none', display: 'inline-block' };
const hr = { borderColor: '#e8f0fa', margin: '24px 0' };
const infoBox = { backgroundColor: '#e8f0fa', borderRadius: '8px', padding: '20px 24px', margin: '0 0 24px' };

interface Props {
  firstName: string;
  renewalDate: string;
  amount: string;
  plan: 'monthly' | 'annual';
}

export default function RenewalReminder({ firstName, renewalDate, amount, plan }: Props) {
  return (
    <Layout preview={`Your Right Hand ${plan} subscription renews on ${renewalDate}.`}>
      <Text style={h1}>Your subscription renews soon.</Text>
      <Text style={p}>
        Hi {firstName || 'there'}, just a heads up — your Right Hand {plan === 'annual' ? 'annual' : 'monthly'} subscription will renew automatically on <strong>{renewalDate}</strong>.
      </Text>

      <Section style={infoBox}>
        <Text style={{ ...p, fontWeight: '600', color: '#1a2340', margin: '0 0 4px' }}>Renewal amount: {amount}</Text>
        <Text style={{ ...p, fontSize: '13px', color: '#4a5568', margin: '0' }}>
          No action needed — your access continues uninterrupted.
        </Text>
      </Section>

      <Button href="https://righthand.org.za/account" style={btn}>
        Manage subscription →
      </Button>

      <Hr style={hr} />

      <Text style={{ ...p, fontSize: '13px', color: '#718096', marginBottom: '0' }}>
        If you do not want to renew, cancel before {renewalDate} from your <Link href="https://righthand.org.za/account" style={{ color: '#1a5ea5' }}>account page</Link>. Questions? Email <Link href="mailto:billing@righthand.org.za" style={{ color: '#1a5ea5' }}>billing@righthand.org.za</Link>.
      </Text>
    </Layout>
  );
}
