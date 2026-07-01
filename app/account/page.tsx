'use client';

import { useUser, useClerk } from '@clerk/nextjs';
import { useState } from 'react';

export default function Account() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const [cancelling, setCancelling] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const [error, setError] = useState('');

  const isSubscribed = user?.publicMetadata?.subscribed === true;
  const subscribedAt = user?.publicMetadata?.subscribedAt as string | undefined;
  const status = user?.publicMetadata?.subscriptionStatus as string | undefined;
  const plan = (user?.publicMetadata?.subscriptionPlan as string | undefined) ?? 'monthly';
  const isAnnual = plan === 'annual';

  function nextBillingDate(from: string): string {
    const date = new Date(from);
    const now = new Date();
    if (isAnnual) {
      date.setFullYear(date.getFullYear() + 1);
      while (date < now) date.setFullYear(date.getFullYear() + 1);
    } else {
      date.setMonth(date.getMonth() + 1);
      while (date < now) date.setMonth(date.getMonth() + 1);
    }
    return date.toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  async function handleCancel() {
    if (!confirm('Are you sure you want to cancel your subscription? You will lose access to paid modules at the end of your billing period.')) return;
    setCancelling(true);
    setError('');
    try {
      const res = await fetch('/api/paystack/cancel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (res.ok) {
        setCancelled(true);
        await user?.reload();
      } else {
        setError('Something went wrong. Please email billing@righthand.org.za to cancel.');
      }
    } catch {
      setError('Something went wrong. Please email billing@righthand.org.za to cancel.');
    }
    setCancelling(false);
  }

  if (!user) return null;

  return (
    <main>
      <div style={{backgroundColor: '#1a5ea5', padding: '56px 0 48px'}}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: 'rgba(255,255,255,0.65)'}}>Right Hand</p>
          <h1 className="text-4xl font-bold mb-2" style={{color: '#ffffff'}}>Your Account</h1>
          <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem'}}>{user.primaryEmailAddress?.emailAddress}</p>
        </div>
      </div>

      <div style={{backgroundColor: '#ffffff'}}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12">
          <div className="space-y-6">

            {/* Subscription status */}
            <div className="rounded-2xl p-6" style={{border: '1px solid #c5d8ef'}}>
              <h2 className="font-bold text-lg mb-4" style={{color: '#1a2340'}}>Subscription</h2>

              {cancelled ? (
                <div className="rounded-lg p-4" style={{backgroundColor: '#e8f0fa', borderLeft: '4px solid #1a5ea5'}}>
                  <p className="font-semibold text-sm mb-1" style={{color: '#1a2340'}}>Cancellation requested</p>
                  <p className="text-sm" style={{color: '#4a5568'}}>Your subscription has been cancelled. You will retain access until the end of your current billing period. No further charges will be made.</p>
                </div>
              ) : isSubscribed ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{backgroundColor: '#e8f0fa', color: '#1a5ea5'}}>Active</span>
                    <span className="text-sm font-semibold" style={{color: '#1a2340'}}>
                      {isAnnual ? 'Full Access — R799/year' : 'Full Access — R99/month'}
                    </span>
                  </div>
                  {subscribedAt && (
                    <div className="space-y-1">
                      <p className="text-xs" style={{color: '#718096'}}>
                        Subscribed since {new Date(subscribedAt).toLocaleDateString('en-ZA', {day: 'numeric', month: 'long', year: 'numeric'})}
                      </p>
                      <p className="text-xs" style={{color: '#718096'}}>
                        Next billing date: <strong style={{color: '#1a2340'}}>{nextBillingDate(subscribedAt)}</strong>
                      </p>
                    </div>
                  )}
                  <div style={{borderTop: '1px solid #e2e8f0', paddingTop: '16px'}}>
                    <p className="text-sm mb-4" style={{color: '#4a5568'}}>Need to cancel? Your access will continue until the end of your current billing period.</p>
                    {error && (
                      <div className="rounded-lg p-3 mb-4 text-sm" style={{backgroundColor: '#FBEAF0', color: '#993556'}}>
                        {error}
                      </div>
                    )}
                    <button
                      onClick={handleCancel}
                      disabled={cancelling}
                      className="text-sm px-5 py-2 rounded-lg font-semibold"
                      style={{backgroundColor: cancelling ? '#e2e8f0' : '#FBEAF0', color: cancelling ? '#718096' : '#993556', border: '1px solid #993556', cursor: cancelling ? 'not-allowed' : 'pointer'}}
                    >
                      {cancelling ? 'Cancelling...' : 'Cancel subscription'}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{backgroundColor: '#f5f4f0', color: '#888780'}}>Free plan</span>
                    {status === 'payment_failed' && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full" style={{backgroundColor: '#FBEAF0', color: '#993556'}}>Payment failed</span>
                    )}
                  </div>
                  <p className="text-sm" style={{color: '#4a5568'}}>Upgrade to access all modules.</p>
                  <a href="/pricing" className="inline-block px-5 py-2 rounded-lg font-semibold text-sm" style={{backgroundColor: '#1a5ea5', color: '#ffffff'}}>
                    Get full access
                  </a>
                </div>
              )}
            </div>

            {/* Account details */}
            <div className="rounded-2xl p-6" style={{border: '1px solid #c5d8ef'}}>
              <h2 className="font-bold text-lg mb-4" style={{color: '#1a2340'}}>Account details</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{color: '#718096'}}>Name</p>
                  <p className="text-sm" style={{color: '#1a2340'}}>{user.fullName || '—'}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{color: '#718096'}}>Email</p>
                  <p className="text-sm" style={{color: '#1a2340'}}>{user.primaryEmailAddress?.emailAddress}</p>
                </div>
              </div>
            </div>

            {/* Sign out */}
            <div className="rounded-2xl p-6" style={{border: '1px solid #c5d8ef'}}>
              <h2 className="font-bold text-lg mb-4" style={{color: '#1a2340'}}>Sign out</h2>
              <button
                onClick={() => signOut({ redirectUrl: '/' })}
                className="text-sm px-5 py-2 rounded-lg font-semibold"
                style={{backgroundColor: '#f5f4f0', color: '#1a2340', border: '1px solid #e2e8f0', cursor: 'pointer'}}
              >
                Sign out
              </button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
