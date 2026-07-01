import { Button, Hr, Link, Text } from '@react-email/components';
import * as React from 'react';
import Layout from './Layout';

const h1 = { color: '#1a2340', fontSize: '24px', fontWeight: '700', margin: '0 0 8px', letterSpacing: '-0.02em' };
const p = { color: '#4a5568', fontSize: '15px', lineHeight: '1.7', margin: '0 0 16px' };
const btn = { backgroundColor: '#1a5ea5', borderRadius: '8px', color: '#ffffff', fontSize: '14px', fontWeight: '600', padding: '12px 24px', textDecoration: 'none', display: 'inline-block' };
const hr = { borderColor: '#e8f0fa', margin: '24px 0' };
const alertBox = { backgroundColor: '#fff5f5', border: '1px solid #fed7d7', borderRadius: '8px', padding: '16px 20px', margin: '0 0 24px' };

interface Props {
  firstName: string;
}

export default function PaymentFailed({ firstName }: Props) {
  return (
    <Layout preview="Action needed — your Right Hand payment could not be processed.">
      <Text style={h1}>Payment unsuccessful.</Text>
      <Text style={p}>
        Hi {firstName || 'there'}, we were unable to process your Right Hand subscription payment. This is usually due to insufficient funds or an expired card.
      </Text>

      <div style={alertBox}>
        <Text style={{ ...p, color: '#c53030', fontWeight: '600', margin: '0 0 4px' }}>Your access has been paused.</Text>
        <Text style={{ ...p, fontSize: '13px', color: '#742a2a', margin: '0' }}>
          Update your payment details to restore full access to all modules.
        </Text>
      </div>

      <Button href="https://righthand.org.za/account" style={btn}>
        Update payment details →
      </Button>

      <Hr style={hr} />

      <Text style={{ ...p, fontSize: '13px', color: '#718096', marginBottom: '0' }}>
        If you believe this is an error or need help, email us at <Link href="mailto:billing@righthand.org.za" style={{ color: '#1a5ea5' }}>billing@righthand.org.za</Link> and we will sort it out.
      </Text>
    </Layout>
  );
}
