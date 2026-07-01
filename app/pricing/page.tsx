'use client';

import { useAuth } from '@clerk/nextjs';
import { useState } from 'react';
import PaystackButton from '../components/PaystackButton';
import { sections, totalModules } from '../lib/modules';

export default function Pricing() {
  const { isSignedIn } = useAuth();
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  const features = [
    'All Modules Unlocked',
    ...sections.map(s => `${s.title} (${s.modules.length} module${s.modules.length !== 1 ? 's' : ''})`),
    'New modules as they are added',
    'Cancel anytime, no contracts',
  ];

  return (
    <main>

      {/* Header */}
      <section style={{backgroundColor: '#1a2340', padding: '64px 0 56px'}}>
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1 rounded-full" style={{backgroundColor: 'rgba(26,94,165,0.25)', border: '1px solid rgba(26,94,165,0.5)', color: '#b3d0f0'}}>
            Pricing
          </div>
          <h1 className="text-4xl font-bold mb-4" style={{color: '#ffffff', letterSpacing: '-0.02em'}}>
            Start free. Upgrade when you're ready.
          </h1>
          <p className="text-lg" style={{color: '#8fa8cc', maxWidth: '480px', margin: '0 auto'}}>
            First module in every section is always free. No contracts, cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section style={{backgroundColor: '#e8f0fa', borderBottom: '1px solid #c5d8ef', padding: '72px 0'}}>
        <div className="max-w-6xl mx-auto px-8">

          {/* Billing toggle */}
          <div className="flex justify-center mb-10">
            <div className="flex items-center rounded-xl p-1" style={{backgroundColor: '#ffffff', border: '1px solid #c5d8ef'}}>
              <button
                onClick={() => setBilling('monthly')}
                className="px-5 py-2 rounded-lg text-sm font-semibold transition-all"
                style={{
                  backgroundColor: billing === 'monthly' ? '#1a5ea5' : 'transparent',
                  color: billing === 'monthly' ? '#ffffff' : '#4a5568',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling('annual')}
                className="px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2"
                style={{
                  backgroundColor: billing === 'annual' ? '#1a5ea5' : 'transparent',
                  color: billing === 'annual' ? '#ffffff' : '#4a5568',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Annual
                <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{backgroundColor: billing === 'annual' ? 'rgba(255,255,255,0.2)' : '#e8f0fa', color: billing === 'annual' ? '#ffffff' : '#1a5ea5'}}>
                  Save R389
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto" style={{maxWidth: '680px'}}>

            {/* Free */}
            <div className="rounded-2xl p-8 bg-white" style={{border: '1px solid #c5d8ef'}}>
              <h2 className="font-bold text-lg mb-1" style={{color: '#1a2340'}}>Free</h2>
              <div className="flex items-baseline gap-1 my-3">
                <span className="text-sm font-semibold" style={{color: '#1a2340'}}>R</span>
                <span className="text-5xl font-bold" style={{color: '#1a2340'}}>0</span>
              </div>
              <div className="text-xs mb-6" style={{color: '#718096'}}>forever</div>
              <ul className="space-y-3 mb-8">
                {[
                  'First module in every section',
                  'Motor Rights: Module 1',
                  'Credit: Credit Report module',
                  'Banking: Bank Saving module',
                  'Tenant Rights: Renting & RHT module',
                  'Free account required',
                  'Read at your own pace',
                ].map((f) => (
                  <li key={f} className="text-sm flex items-start gap-2" style={{color: '#4a5568'}}>
                    <span style={{color: '#1a5ea5', fontWeight: 700}}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="/learn" className="block text-center py-3 rounded-lg font-semibold text-sm" style={{backgroundColor: '#e8f0fa', color: '#1a5ea5', border: '1px solid #c5d8ef'}}>
                Start reading
              </a>
            </div>

            {/* Full Access */}
            <div className="rounded-2xl p-8 bg-white" style={{border: '2px solid #1a5ea5'}}>
              <div className="inline-block text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full mb-4" style={{backgroundColor: '#1a5ea5', color: '#ffffff'}}>
                Most popular
              </div>
              <h2 className="font-bold text-lg mb-1" style={{color: '#1a2340'}}>Full Access</h2>
              {billing === 'monthly' ? (
                <>
                  <div className="flex items-baseline gap-1 my-3">
                    <span className="text-sm font-semibold" style={{color: '#1a2340'}}>R</span>
                    <span className="text-5xl font-bold" style={{color: '#1a2340'}}>99</span>
                  </div>
                  <div className="text-xs mb-6" style={{color: '#718096'}}>per month · cancel anytime</div>
                </>
              ) : (
                <>
                  <div className="flex items-baseline gap-1 my-3">
                    <span className="text-sm font-semibold" style={{color: '#1a2340'}}>R</span>
                    <span className="text-5xl font-bold" style={{color: '#1a2340'}}>799</span>
                  </div>
                  <div className="text-xs mb-6" style={{color: '#718096'}}>per year · save R389 vs monthly</div>
                </>
              )}
              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="text-sm flex items-start gap-2" style={{color: '#4a5568'}}>
                    <span style={{color: '#1a5ea5', fontWeight: 700}}>✓</span> {f}
                  </li>
                ))}
              </ul>
              {isSignedIn ? (
                <PaystackButton plan={billing} />
              ) : (
                <a href="/sign-up" className="block text-center py-3 rounded-lg font-semibold text-sm" style={{backgroundColor: '#1a5ea5', color: '#ffffff'}}>
                  Get full access
                </a>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{backgroundColor: '#ffffff', padding: '72px 0'}}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#1a5ea5'}}>FAQ</div>
            <h2 className="text-3xl font-bold" style={{color: '#1a2340'}}>Common questions</h2>
          </div>
          <div className="mx-auto space-y-4" style={{maxWidth: '640px'}}>
            {[
              {
                q: 'Which modules are free?',
                a: 'The first module in each of the four topic areas is always free — no sign-up needed. That gives you Motor Rights (Module 1), Credit Report, Bank Saving, and Renting & the RHT.',
              },
              {
                q: 'What does Full Access include?',
                a: `All ${totalModules} modules across every topic area: ${sections.map(s => `${s.modules.length} ${s.title}`).join(', ')}. Plus any new modules added in future.`,
              },
              {
                q: 'What is the difference between monthly and annual?',
                a: 'Both plans give you identical access to all modules. Annual billing costs R799 once a year instead of R99 per month — saving you R389 over 12 months.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes. No contracts, no cancellation fees. Cancel from your account at any time and you will not be charged again.',
              },
              {
                q: 'Is this legal advice?',
                a: 'No. Right Hand provides consumer rights education for informational purposes only. For advice specific to your situation, consult a qualified South African attorney.',
              },
            ].map((item) => (
              <div key={item.q} className="rounded-xl p-6" style={{border: '1px solid #c5d8ef'}}>
                <p className="font-semibold mb-2" style={{color: '#1a2340'}}>{item.q}</p>
                <p className="text-sm leading-relaxed" style={{color: '#4a5568'}}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
