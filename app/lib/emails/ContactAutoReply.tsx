import { Hr, Link, Text } from '@react-email/components';
import * as React from 'react';
import Layout from './Layout';

const h1 = { color: '#1a2340', fontSize: '24px', fontWeight: '700', margin: '0 0 8px', letterSpacing: '-0.02em' };
const p = { color: '#4a5568', fontSize: '15px', lineHeight: '1.7', margin: '0 0 16px' };
const hr = { borderColor: '#e8f0fa', margin: '24px 0' };
const quoteBox = { backgroundColor: '#e8f0fa', borderRadius: '8px', padding: '16px 20px', margin: '0 0 24px', borderLeft: '3px solid #1a5ea5' };

interface Props {
  name: string;
  subject: string;
  message: string;
}

export default function ContactAutoReply({ name, subject, message }: Props) {
  return (
    <Layout preview="We received your message — Right Hand will be in touch.">
      <Text style={h1}>We got your message.</Text>
      <Text style={p}>
        Hi {name}, thanks for reaching out. We have received your message and will get back to you within 1–2 business days.
      </Text>

      <Text style={{ ...p, fontWeight: '600', color: '#1a2340', marginBottom: '8px' }}>Your message:</Text>
      <div style={quoteBox}>
        {subject && <Text style={{ ...p, fontWeight: '600', fontSize: '13px', margin: '0 0 6px' }}>{subject}</Text>}
        <Text style={{ ...p, fontSize: '14px', margin: '0', whiteSpace: 'pre-wrap' }}>{message}</Text>
      </div>

      <Hr style={hr} />

      <Text style={{ ...p, fontSize: '13px', color: '#718096', marginBottom: '0' }}>
        If your matter is urgent, you can also reach us at <Link href="mailto:info@righthand.org.za" style={{ color: '#1a5ea5' }}>info@righthand.org.za</Link>. Please note that Right Hand is an educational platform and cannot provide legal advice or act on your behalf.
      </Text>
    </Layout>
  );
}
