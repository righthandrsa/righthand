import { Button, Hr, Link, Text, Section } from '@react-email/components';
import * as React from 'react';
import Layout from './Layout';

const h1 = { color: '#1a2340', fontSize: '24px', fontWeight: '700', margin: '0 0 8px', letterSpacing: '-0.02em' };
const p = { color: '#4a5568', fontSize: '15px', lineHeight: '1.7', margin: '0 0 16px' };
const btn = { backgroundColor: '#1a5ea5', borderRadius: '8px', color: '#ffffff', fontSize: '14px', fontWeight: '600', padding: '12px 24px', textDecoration: 'none', display: 'inline-block' };
const hr = { borderColor: '#e8f0fa', margin: '24px 0' };
const receiptBox = { backgroundColor: '#e8f0fa', borderRadius: '8px', padding: '20px 24px', margin: '16px 0 24px' };
const receiptLabel = { color: '#718096', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' as const, margin: '0 0 2px' };
const receiptValue = { color: '#1a2340', fontSize: '15px', fontWeight: '600', margin: '0 0 12px' };

interface Props {
  firstName: string;
  plan: 'monthly' | 'annual';
  amount: string;
  reference: string;
  date: string;
}

export default function PaymentReceipt({ firstName, plan, amount, reference, date }: Props) {
  return (
    <Layout preview={`Payment confirmed — your Right Hand ${plan} subscription is active.`}>
      <Text style={h1}>You're in.</Text>
      <Text style={p}>
        Hi {firstName || 'there'}, your payment was successful and your Right Hand full access subscription is now active. All modules are unlocked.
      </Text>

      <Section style={receiptBox}>
        <Text style={receiptLabel}>Plan</Text>
        <Text style={receiptValue}>{plan === 'annual' ? 'Full Access — Annual' : 'Full Access — Monthly'}</Text>

        <Text style={receiptLabel}>Amount</Text>
        <Text style={receiptValue}>{amount}</Text>

        <Text style={receiptLabel}>Date</Text>
        <Text style={receiptValue}>{date}</Text>

        <Text style={receiptLabel}>Reference</Text>
        <Text style={{ ...receiptValue, marginBottom: '0', fontSize: '13px', fontFamily: 'monospace' }}>{reference}</Text>
      </Section>

      <Button href="https://righthand.org.za/learn" style={btn}>
        Start reading →
      </Button>

      <Hr style={hr} />

      <Text style={{ ...p, fontSize: '13px', color: '#718096', marginBottom: '0' }}>
        You can manage or cancel your subscription at any time from your <Link href="https://righthand.org.za/account" style={{ color: '#1a5ea5' }}>account page</Link>. Questions? Email <Link href="mailto:billing@righthand.org.za" style={{ color: '#1a5ea5' }}>billing@righthand.org.za</Link>.
      </Text>
    </Layout>
  );
}
