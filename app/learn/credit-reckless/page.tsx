export default function RecklessLending() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
        <a href="/" className="flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 100 100" fill="none"><path d="M50 5 L90 20 L90 55 C90 75 70 90 50 97 C30 90 10 75 10 55 L10 20 Z" fill="#1a5ea5"/><path d="M35 50 L46 62 L67 40" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
          <span style={{color:'#1a2340'}} className="text-xl font-bold tracking-tight">righthand</span>
        </a>
        <a href="/learn" className="text-sm text-gray-500 hover:text-gray-900">Back to modules</a>
      </nav>
      <article className="max-w-2xl mx-auto px-8 py-16">
        <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{color:'#1a5ea5'}}>Credit · Module</p>
        <h1 className="text-3xl font-bold mb-3" style={{color:'#1a2340'}}>Reckless Lending and Your Rights</h1>
        <p className="text-sm text-gray-400 mb-8">11 minute read · Credit section · Last reviewed: June 2026</p>
        <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#e8f0fa',borderLeft:'4px solid #1a5ea5'}}>
          <p className="font-bold text-sm mb-2" style={{color:'#1a2340'}}>What you will learn</p>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>What reckless lending means under the National Credit Act</li>
            <li>What a lender is legally required to check before approving credit</li>
            <li>How to identify if you were a victim of reckless lending</li>
            <li>What you can do if a court finds your credit agreement was reckless</li>
          </ul>
        </div>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>1. What is reckless lending?</h2>
        <p className="text-gray-700 mb-4">Reckless lending occurs when a credit provider grants you credit without properly assessing whether you can afford to repay it. The National Credit Act places a legal duty on every lender to conduct a thorough affordability assessment before approving any credit agreement.</p>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>2. What lenders must do before approving credit</h2>
        <div className="space-y-3 mb-6">
          {[{num:"1",title:"Assess your income",desc:"The lender must verify your actual income — not just accept what you declare."},{num:"2",title:"Assess your existing debt obligations",desc:"They must check all your existing credit commitments to understand your real financial position."},{num:"3",title:"Assess your living expenses",desc:"Reasonable monthly living costs must be factored in before approving more credit."}].map((p) => (
            <div key={p.num} className="flex gap-4 p-4 rounded-xl border border-gray-100">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#1a5ea5'}}>{p.num}</div>
              <div><p className="font-semibold text-sm mb-1" style={{color:'#1a2340'}}>{p.title}</p><p className="text-sm text-gray-600">{p.desc}</p></div>
            </div>
          ))}
        </div>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>3. What happens if lending was reckless</h2>
        <p className="text-gray-700 mb-4">If a court finds that a credit agreement was reckless, it has the power to suspend the agreement and set aside all or part of your obligations under it. This means you may not be required to repay the full amount — or any amount — depending on how reckless the lending was.</p>
        <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
          <p className="font-bold text-sm mb-1" style={{color:'#854F0B'}}>This requires a court process</p>
          <p className="text-sm text-gray-700">A finding of reckless lending does not happen automatically. You need to raise it as a defence — either when a creditor takes you to court, or by approaching the National Consumer Tribunal yourself.</p>
        </div>
        <div className="rounded-lg p-5 mb-12" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
          <p className="font-bold text-sm mb-2" style={{color:'#0F6E56'}}>Remember these four things</p>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
            <li>Lenders are legally required to assess your affordability before granting credit.</li>
            <li>If they failed to do this properly, the lending may be classified as reckless.</li>
            <li>A court can suspend or set aside a reckless credit agreement.</li>
            <li>You need to raise reckless lending as a formal defence — it does not apply automatically.</li>
          </ol>
        </div>
        <div className="border-t border-gray-100 pt-8 text-xs text-gray-400 space-y-2">
          <p><strong>Contributor:</strong> Your Debt Friend — NCR-registered debt management firm</p>
          <p><strong>Legislation:</strong> National Credit Act 34 of 2005</p>
          <p>This module is for educational purposes only and does not constitute legal advice.</p>
        </div>
      </article>
    </main>
  );
}
