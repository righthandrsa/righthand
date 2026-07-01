import { Button, Hr, Link, Text } from '@react-email/components';
import * as React from 'react';
import Layout from './Layout';

const h1 = { color: '#1a2340', fontSize: '24px', fontWeight: '700', margin: '0 0 8px', letterSpacing: '-0.02em' };
const p = { color: '#4a5568', fontSize: '15px', lineHeight: '1.7', margin: '0 0 16px' };
const btn = { backgroundColor: '#1a5ea5', borderRadius: '8px', color: '#ffffff', fontSize: '14px', fontWeight: '600', padding: '12px 24px', textDecoration: 'none', display: 'inline-block' };
const pill = { backgroundColor: '#e8f0fa', borderRadius: '6px', color: '#1a5ea5', fontSize: '13px', fontWeight: '600', padding: '8px 14px', margin: '4px 4px 4px 0', display: 'inline-block' };
const hr = { borderColor: '#e8f0fa', margin: '24px 0' };

interface Props {
  firstName: string;
}

export default function Welcome({ firstName }: Props) {
  return (
    <Layout preview="Welcome to Right Hand — know your consumer rights.">
      <Text style={h1}>Welcome to Right Hand{firstName ? `, ${firstName}` : ''}.</Text>
      <Text style={p}>
        You now have access to plain-language guides covering your most important consumer rights in South Africa. Start with any free module below — no subscription needed.
      </Text>

      <Text style={{ ...p, fontWeight: '600', color: '#1a2340', marginBottom: '8px' }}>Free modules to start with:</Text>
      <div>
        <span style={pill}>Motor Rights</span>
        <span style={pill}>Credit Report</span>
        <span style={pill}>Bank Saving</span>
        <span style={pill}>Renting &amp; RHT</span>
      </div>

      <Hr style={hr} />

      <Button href="https://righthand.org.za/learn" style={btn}>
        Start reading →
      </Button>

      <Hr style={hr} />

      <Text style={{ ...p, fontSize: '13px', color: '#718096' }}>
        Want full access to all modules? <Link href="https://righthand.org.za/pricing" style={{ color: '#1a5ea5' }}>View pricing</Link> — from R99/month or R799/year.
      </Text>
      <Text style={{ ...p, fontSize: '13px', color: '#718096', marginBottom: '0' }}>
        Questions? Reply to this email or contact us at <Link href="mailto:info@righthand.org.za" style={{ color: '#1a5ea5' }}>info@righthand.org.za</Link>.
      </Text>
    </Layout>
  );
}
