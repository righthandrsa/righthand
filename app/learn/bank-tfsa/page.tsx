export default function BankTFSA() {
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
        <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{color:'#1a5ea5'}}>Banking · Module</p>
        <h1 className="text-3xl font-bold mb-3" style={{color:'#1a2340'}}>Tax-Free Savings Accounts: The Rules That Actually Matter</h1>
        <p className="text-sm text-gray-400 mb-8">11 minute read · Banking section · Last reviewed: June 2026</p>
        <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#e8f0fa',borderLeft:'4px solid #1a5ea5'}}>
          <p className="font-bold text-sm mb-2" style={{color:'#1a2340'}}>What you will learn</p>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>What a Tax-Free Savings Account is and how it works</li>
            <li>The annual and lifetime contribution limits you must know</li>
            <li>The costly mistake of over-contributing and how to avoid it</li>
            <li>How to choose the right TFSA for your goals</li>
          </ul>
        </div>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>1. What is a Tax-Free Savings Account?</h2>
        <p className="text-gray-700 mb-4">A Tax-Free Savings Account (TFSA) is an investment account where all growth — interest, dividends, and capital gains — is completely exempt from tax. You pay no tax on what your money earns inside the account, ever. This makes it one of the most powerful long-term savings tools available to South Africans.</p>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>2. The limits you must know</h2>
        <div className="space-y-3 mb-6">
          {[{num:"1",title:"Annual limit: R36,000 per year",desc:"You may contribute a maximum of R36,000 per tax year across all your TFSAs. This limit applies even if you withdraw money during the year."},{num:"2",title:"Lifetime limit: R500,000",desc:"Over your lifetime, you may contribute a total of R500,000 into TFSAs. Once you reach this limit, you cannot contribute further, even if you have made withdrawals."}].map((p) => (
            <div key={p.num} className="flex gap-4 p-4 rounded-xl border border-gray-100">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#1a5ea5'}}>{p.num}</div>
              <div><p className="font-semibold text-sm mb-1" style={{color:'#1a2340'}}>{p.title}</p><p className="text-sm text-gray-600">{p.desc}</p></div>
            </div>
          ))}
        </div>
        <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FBEAF0',borderLeft:'4px solid #993556'}}>
          <p className="font-bold text-sm mb-1" style={{color:'#993556'}}>The over-contribution penalty</p>
          <p className="text-sm text-gray-700">If you contribute more than R36,000 in a tax year, SARS will tax the excess at 40%. This is a significant penalty and easy to accidentally trigger if you have multiple TFSAs. Track your contributions carefully.</p>
        </div>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>3. Withdrawals — the rule that surprises people</h2>
        <p className="text-gray-700 mb-4">You can withdraw from a TFSA at any time. However, the amount you withdraw does not get added back to your annual contribution limit. If you contribute R36,000 and withdraw R10,000, you cannot top it back up that same year — you have already used your full annual allowance.</p>
        <div className="rounded-lg p-5 mb-12" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
          <p className="font-bold text-sm mb-2" style={{color:'#0F6E56'}}>Remember these four things</p>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
            <li>All growth inside a TFSA is completely tax-free — interest, dividends, and capital gains.</li>
            <li>You may contribute a maximum of R36,000 per year and R500,000 over your lifetime.</li>
            <li>Over-contributing triggers a 40% tax penalty from SARS on the excess amount.</li>
            <li>Withdrawals do not restore your annual contribution limit — plan carefully before withdrawing.</li>
          </ol>
        </div>
        <div className="border-t border-gray-100 pt-8 text-xs text-gray-400 space-y-2">
          <p><strong>Legislation:</strong> Income Tax Act 58 of 1962 (Section 12T)</p>
          <p>This module is for educational purposes only and does not constitute financial advice.</p>
        </div>
      </article>
    </main>
  );
}
