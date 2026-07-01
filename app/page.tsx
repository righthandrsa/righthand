import { totalModules } from './lib/modules';

export default function Home() {
  return (
    <main>

      {/* Hero */}
      <section style={{backgroundColor: '#1a2340', padding: '64px 0 56px'}}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12" style={{alignItems: 'center'}}>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1 rounded-full" style={{backgroundColor: 'rgba(26,94,165,0.25)', border: '1px solid rgba(26,94,165,0.5)', color: '#b3d0f0'}}>
                South African Consumer Rights
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight" style={{color: '#ffffff', letterSpacing: '-0.02em'}}>
                Know your rights.<br />
                <span style={{color: '#b3d0f0'}}>Stand your ground.</span>
              </h1>
              <p className="text-lg mb-8 leading-relaxed" style={{color: '#8fa8cc', maxWidth: '460px'}}>
                Right Hand turns South African consumer law into plain-language lessons covering motor, credit, banking, and tenant rights.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="/learn" className="px-7 py-3 rounded-lg font-semibold" style={{backgroundColor: '#1a5ea5', color: '#ffffff'}}>
                  Explore modules →
                </a>
                <a href="#how" className="px-7 py-3 rounded-lg font-semibold" style={{color: '#ffffff', border: '2px solid rgba(255,255,255,0.3)'}}>
                  How it works
                </a>
              </div>
              <div className="flex gap-8 mt-10 pt-8" style={{borderTop: '1px solid #2d4a6e'}}>
                <div>
                  <div className="text-2xl font-bold" style={{color: '#b3d0f0'}}>{totalModules}</div>
                  <div className="text-xs mt-1" style={{color: '#8fa8cc'}}>modules available</div>
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{color: '#b3d0f0'}}>4</div>
                  <div className="text-xs mt-1" style={{color: '#8fa8cc'}}>topic areas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{color: '#b3d0f0'}}>Free</div>
                  <div className="text-xs mt-1" style={{color: '#8fa8cc'}}>to start</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Motor Rights', title: "Defective vehicle? Here's what the CPA says." },
                { label: 'Credit & Debt', title: 'What counts as reckless lending under the NCA?' },
                { label: 'Tenant Rights', title: 'Deposit rules your landlord must follow.' },
              ].map((card) => (
                <div key={card.label} className="rounded-xl p-5" style={{backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)'}}>
                  <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{color: '#8fa8cc'}}>{card.label}</div>
                  <div className="font-semibold" style={{color: '#ffffff', fontSize: '0.95rem'}}>{card.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Topics band */}
      <section style={{backgroundColor: '#1a5ea5', padding: '64px 0'}}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: 'rgba(255,255,255,0.6)'}}>What you will learn</div>
            <h2 className="text-3xl font-bold" style={{color: '#ffffff'}}>Four areas of consumer rights</h2>
            <p className="mt-2 text-sm" style={{color: 'rgba(255,255,255,0.65)'}}>Every topic grounded in South African law: the CPA, NCA, RHA, PPRA, and more.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🚗', title: 'Motor Rights', desc: 'CPA rights, defects, finance and dealer obligations.', href: '/learn#motor-rights' },
              { icon: '💳', title: 'Credit & Debt', desc: 'Reckless lending, credit reports and debt review.', href: '/learn#credit-debt' },
              { icon: '🏦', title: 'Banking & Saving', desc: 'TFSA accounts and savings products.', href: '/learn#banking-saving' },
              { icon: '🏠', title: 'Tenant Rights', desc: 'Tenant rights, deposits, the RHT and the PPRA.', href: '/learn#tenant-rights' },
            ].map((topic) => (
              <a key={topic.title} href={topic.href} className="block rounded-2xl p-6 transition" style={{backgroundColor: 'rgba(255,255,255,0.11)', border: '1px solid rgba(255,255,255,0.18)'}}>
                <div className="text-2xl mb-3">{topic.icon}</div>
                <h3 className="font-bold mb-1" style={{color: '#ffffff', fontSize: '0.95rem'}}>{topic.title}</h3>
                <p className="text-xs leading-relaxed" style={{color: 'rgba(255,255,255,0.65)'}}>{topic.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" style={{backgroundColor: '#ffffff', padding: '72px 0'}}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#1a5ea5'}}>Simple process</div>
            <h2 className="text-3xl font-bold" style={{color: '#1a2340'}}>Learn in four steps</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: '1', title: 'Choose a topic', desc: 'Pick the area that affects you: motor, credit, banking, or tenant rights.' },
              { n: '2', title: 'Learn YOUR Rights', desc: 'Clear modules written in plain language, no legal jargon.' },
              { n: '3', title: 'Know THEIR Obligations', desc: 'Understand exactly what dealers, creditors, and landlords must do.' },
              { n: '4', title: 'Act with confidence', desc: 'Use our knowledge to stand up for yourself.' },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold" style={{backgroundColor: '#e8f0fa', border: '2px solid #c5d8ef', color: '#1a5ea5'}}>
                  {step.n}
                </div>
                <h4 className="font-bold mb-2" style={{color: '#1a2340'}}>{step.title}</h4>
                <p className="text-sm leading-relaxed" style={{color: '#4a5568'}}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing strip */}
      <section style={{backgroundColor: '#e8f0fa', borderTop: '1px solid #c5d8ef', borderBottom: '1px solid #c5d8ef', padding: '72px 0'}}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#1a5ea5'}}>Pricing</div>
            <h2 className="text-3xl font-bold" style={{color: '#1a2340'}}>Start free. Upgrade when you are ready.</h2>
            <p className="mt-2 text-sm" style={{color: '#4a5568'}}>First module in every section is always free. No contracts, cancel anytime.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-auto" style={{maxWidth: '640px'}}>
            {[
              {
                name: 'Free',
                amount: '0',
                period: 'forever',
                features: ['First module in every section', 'Free account required', 'Read at your own pace'],
                cta: 'Start reading',
                href: '/learn',
                featured: false,
              },
              {
                name: 'Full Access',
                amount: '99',
                period: 'per month',
                features: ['All Modules Unlocked', 'All topic areas included', 'Cancel anytime'],
                cta: 'Get full access',
                href: '/sign-up',
                featured: true,
                badge: 'Most popular',
              },
            ].map((plan) => (
              <div key={plan.name} className="rounded-2xl p-7 bg-white" style={{border: plan.featured ? '2px solid #1a5ea5' : '1px solid #c5d8ef'}}>
                {plan.badge && (
                  <div className="inline-block text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full mb-4" style={{backgroundColor: '#1a5ea5', color: '#ffffff'}}>
                    {plan.badge}
                  </div>
                )}
                <h3 className="font-bold text-lg mb-1" style={{color: '#1a2340'}}>{plan.name}</h3>
                <div className="flex items-baseline gap-1 my-3">
                  <span className="text-sm font-semibold" style={{color: '#1a2340'}}>R</span>
                  <span className="text-4xl font-bold" style={{color: '#1a2340'}}>{plan.amount}</span>
                </div>
                <div className="text-xs mb-5" style={{color: '#718096'}}>{plan.period}</div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm flex items-start gap-2" style={{color: '#4a5568'}}>
                      <span style={{color: '#1a5ea5', fontWeight: 700}}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href={plan.href} className="block text-center py-3 rounded-lg font-semibold text-sm" style={{backgroundColor: '#1a5ea5', color: '#ffffff'}}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
