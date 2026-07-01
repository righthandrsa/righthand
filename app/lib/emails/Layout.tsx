import {
  Body, Container, Head, Html, Img, Preview, Section, Text, Hr, Link,
} from '@react-email/components';
import * as React from 'react';

const base = {
  backgroundColor: '#f4f7fc',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};
const card = {
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: '40px 40px 32px',
  maxWidth: '560px',
  margin: '0 auto',
};
const header = {
  backgroundColor: '#1a2340',
  borderRadius: '12px 12px 0 0',
  padding: '24px 40px',
  marginBottom: '0',
};
const wordmark = {
  color: '#ffffff',
  fontSize: '20px',
  fontWeight: '700',
  margin: '0',
  letterSpacing: '-0.02em',
};
const tagline = {
  color: '#8fa8cc',
  fontSize: '11px',
  fontWeight: '600',
  letterSpacing: '0.1em',
  textTransform: 'uppercase' as const,
  margin: '4px 0 0',
};
const footer = {
  color: '#8fa8cc',
  fontSize: '11px',
  textAlign: 'center' as const,
  marginTop: '24px',
  lineHeight: '1.6',
};
const footerLink = {
  color: '#8fa8cc',
  textDecoration: 'underline',
};

interface Props {
  preview: string;
  children: React.ReactNode;
}

export default function Layout({ preview, children }: Props) {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={base}>
        <Container style={{ maxWidth: '560px', margin: '40px auto', padding: '0 16px' }}>
          {/* Header */}
          <Section style={header}>
            <Text style={wordmark}>Right Hand</Text>
            <Text style={tagline}>Know Your Rights · righthand.org.za</Text>
          </Section>

          {/* Content card */}
          <Section style={{ ...card, borderRadius: '0 0 12px 12px', paddingTop: '32px' }}>
            {children}
          </Section>

          {/* Footer */}
          <Text style={footer}>
            Right Hand (Pty) Ltd · righthand.org.za
            {'\n'}
            <Link href="https://righthand.org.za/privacy" style={footerLink}>Privacy Policy</Link>
            {' · '}
            <Link href="https://righthand.org.za/terms" style={footerLink}>Terms of Use</Link>
            {' · '}
            <Link href="https://righthand.org.za/contact" style={footerLink}>Contact</Link>
            {'\n\n'}
            Right Hand is an educational platform. Nothing in this email constitutes legal advice.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export { base, card };
