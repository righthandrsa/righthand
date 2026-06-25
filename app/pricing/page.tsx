export default function Pricing() {
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
                  'No sign-up required',
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
              <div className="flex items-baseline gap-1 my-3">
                <span className="text-sm font-semibold" style={{color: '#1a2340'}}>R</span>
                <span className="text-5xl font-bold" style={{color: '#1a2340'}}>99</span>
              </div>
              <div className="text-xs mb-6" style={{color: '#718096'}}>per month · cancel anytime</div>
              <ul className="space-y-3 mb-8">
                {[
                  'All Modules Unlocked',
                  'Motor Rights (2 modules)',
                  'Credit & Debt (4 modules)',
                  'Banking & Saving (2 modules)',
                  'Tenant Rights (2 modules)',
                  'New modules as they are added',
                  'Cancel anytime, no contracts',
                ].map((f) => (
                  <li key={f} className="text-sm flex items-start gap-2" style={{color: '#4a5568'}}>
                    <span style={{color: '#1a5ea5', fontWeight: 700}}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#" className="block text-center py-3 rounded-lg font-semibold text-sm" style={{backgroundColor: '#1a5ea5', color: '#ffffff'}}>
                Get full access
              </a>
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
                a: 'All 10 modules across every topic area: 2 Motor, 4 Credit & Debt, 2 Banking, and 2 Tenant Rights. Plus any new modules added in future.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes. No contracts, no cancellation fees. Cancel from your account at any time and you will not be charged again.',
              },
              {
                q: 'Is this legal advice?',
                a: 'No. RightHand provides consumer rights education for informational purposes only. For advice specific to your situation, consult a qualified South African attorney.',
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
