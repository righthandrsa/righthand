export default function ComingSoon() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#1a2340', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>

      {/* Shield icon */}
      <div style={{ marginBottom: '32px' }}>
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36 4L8 16v20c0 18.6 12.1 36 28 40 15.9-4 28-21.4 28-40V16L36 4z" fill="#1a5ea5"/>
          <path d="M30 46l-10-10 2.8-2.8L30 40.4l19.2-19.2L52 24 30 46z" fill="white"/>
        </svg>
      </div>

      {/* Wordmark */}
      <div style={{ marginBottom: '8px' }}>
        <span style={{ fontSize: '2rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', fontFamily: 'system-ui, sans-serif' }}>righthand</span>
      </div>
      <div style={{ marginBottom: '48px' }}>
        <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', color: '#8fa8cc', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif' }}>Know Your Rights</span>
      </div>

      {/* Message */}
      <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#ffffff', textAlign: 'center', marginBottom: '16px', letterSpacing: '-0.02em', fontFamily: 'system-ui, sans-serif' }}>
        Something good is coming.
      </h1>
      <p style={{ fontSize: '1rem', color: '#8fa8cc', textAlign: 'center', maxWidth: '420px', lineHeight: 1.7, marginBottom: '48px', fontFamily: 'system-ui, sans-serif' }}>
        RightHand is a plain-language guide to your consumer rights in South Africa — covering motor, credit, banking, and tenant rights.
      </p>

      {/* Divider */}
      <div style={{ width: '48px', height: '2px', backgroundColor: '#1a5ea5', marginBottom: '48px', borderRadius: '2px' }} />

      {/* Contact */}
      <p style={{ fontSize: '0.85rem', color: '#8fa8cc', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
        Questions?{' '}
        <a href="mailto:info@righthand.org.za" style={{ color: '#b3d0f0', textDecoration: 'none', fontWeight: 600 }}>
          info@righthand.org.za
        </a>
      </p>

    </main>
  );
}
