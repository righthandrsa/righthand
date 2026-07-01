import { Button, Hr, Link, Text } from '@react-email/components';
import * as React from 'react';
import Layout from './Layout';

const h1 = { color: '#1a2340', fontSize: '24px', fontWeight: '700', margin: '0 0 8px', letterSpacing: '-0.02em' };
const p = { color: '#4a5568', fontSize: '15px', lineHeight: '1.7', margin: '0 0 16px' };
const btn = { backgroundColor: '#1a5ea5', borderRadius: '8px', color: '#ffffff', fontSize: '14px', fontWeight: '600', padding: '12px 24px', textDecoration: 'none', display: 'inline-block' };
const hr = { borderColor: '#e8f0fa', margin: '24px 0' };

interface Props {
  firstName: string;
}

export default function SubscriptionCancelled({ firstName }: Props) {
  return (
    <Layout preview="Your Right Hand subscription has been cancelled.">
      <Text style={h1}>Subscription cancelled.</Text>
      <Text style={p}>
        Hi {firstName || 'there'}, your Right Hand full access subscription has been cancelled. You will not be charged again.
      </Text>
      <Text style={p}>
        You can still access the free modules in each section at any time — no account needed.
      </Text>
      <Text style={p}>
        If you cancelled by mistake or change your mind, you are welcome back anytime.
      </Text>

      <Button href="https://righthand.org.za/pricing" style={btn}>
        Resubscribe →
      </Button>

      <Hr style={hr} />

      <Text style={{ ...p, fontSize: '13px', color: '#718096', marginBottom: '0' }}>
        Questions or feedback? We would genuinely like to know why you left — email us at <Link href="mailto:info@righthand.org.za" style={{ color: '#1a5ea5' }}>info@righthand.org.za</Link>.
      </Text>
    </Layout>
  );
}
