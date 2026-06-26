'use client';

import { useAuth, useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PaystackButton from './PaystackButton';

export default function PaywallGate({ children }: { children: React.ReactNode }) {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  const isSubscribed = user?.publicMetadata?.subscribed === true;

  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) {
      router.push('/sign-up');
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) return null;
  if (!isSignedIn) return null;
  if (isSubscribed) return <>{children}</>;

  // Signed in but not subscribed
  return (
    <main>
      <div style={{backgroundColor: '#1a5ea5', padding: '48px 0 40px'}}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: 'rgba(255,255,255,0.65)'}}>Members Only</p>
          <h1 className="text-3xl font-bold mb-3" style={{color: '#ffffff'}}>This module requires Full Access</h1>
          <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem'}}>Unlock all modules for R99/month. Cancel anytime.</p>
        </div>
      </div>
      <div style={{backgroundColor: '#ffffff'}}>
        <div className="max-w-xl mx-auto px-5 sm:px-8 py-16 text-center">
          <div className="rounded-2xl p-8" style={{backgroundColor: '#1a2340'}}>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#8fa8cc'}}>Unlock everything</p>
            <h2 className="text-2xl font-bold mb-3" style={{color: '#ffffff'}}>Full Access</h2>
            <div className="flex items-baseline justify-center gap-1 my-4">
              <span className="text-sm font-semibold" style={{color: '#ffffff'}}>R</span>
              <span className="text-5xl font-bold" style={{color: '#ffffff'}}>99</span>
              <span className="text-sm" style={{color: '#8fa8cc'}}>/month</span>
            </div>
            <ul className="text-sm space-y-2 mb-8 text-left" style={{color: '#8fa8cc'}}>
              {['All modules unlocked', 'All 4 topic areas', 'New modules as added', 'Cancel anytime'].map(f => (
                <li key={f} className="flex items-center gap-2">
                  <span style={{color: '#1a5ea5', fontWeight: 700}}>✓</span> {f}
                </li>
              ))}
            </ul>
            <PaystackButton />
          </div>
          <a href="/learn" className="inline-block mt-6 text-sm" style={{color: '#4a5568'}}>← Back to modules</a>
        </div>
      </div>
    </main>
  );
}
