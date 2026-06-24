export default function DebtReview() {
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
        <h1 className="text-3xl font-bold mb-3" style={{color:'#1a2340'}}>Getting Out of Debt Review — The Only Real Way Out</h1>
        <p className="text-sm text-gray-400 mb-8">14 minute read · Credit section · Last reviewed: June 2026</p>
        <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#e8f0fa',borderLeft:'4px solid #1a5ea5'}}>
          <p className="font-bold text-sm mb-2" style={{color:'#1a2340'}}>What you will learn</p>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>Why you cannot simply opt out of debt review once a court order is granted</li>
            <li>The exact legal criteria you must meet to qualify for a Clearance Certificate</li>
            <li>The important exception that applies if you have a home loan in your debt review</li>
            <li>How to spot and avoid scam operations promising a quick exit</li>
            <li>What happens once your Clearance Certificate is issued</li>
          </ul>
        </div>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>1. Why debt review can feel like a trap</h2>
        <p className="text-gray-700 mb-4">For thousands of South Africans drowning in monthly instalments, entering debt review feels like a life jacket. But once the initial relief wears off, many consumers find themselves in a highly restrictive legal position. Years pass, their financial situation improves, yet the under debt review flag remains firmly attached to their credit profile.</p>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>2. The legal reality — why you cannot just walk away</h2>
        <p className="text-gray-700 mb-4">Debt review is not an informal agreement — it is a magistrate court order. Once granted, your debt counsellor loses the power to simply cancel it because your finances have improved.</p>
        <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FBEAF0',borderLeft:'4px solid #993556'}}>
          <p className="font-bold text-sm mb-1" style={{color:'#993556'}}>The myth that catches people out</p>
          <p className="text-sm text-gray-700">Many consumers believe that if their salary increases, they can resume paying creditors directly and ask to be removed from debt review. The National Credit Act is strict: you cannot voluntarily withdraw from debt review once a court order has been issued.</p>
        </div>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>3. The only true escape: the Clearance Certificate</h2>
        <p className="text-gray-700 mb-4">The only legitimate way to lift the debt review flag is to obtain a Form 19 Clearance Certificate from your debt counsellor. Once issued, credit bureaus must remove the debt review indicator within days.</p>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>4. What you must do to qualify</h2>
        <div className="space-y-3 mb-6">
          {[{num:"1",title:"Pay off all restructured unsecured debts in full",desc:"Every credit card, store account, and personal loan included in your debt review must be settled completely."},{num:"2",title:"Obtain official paid-up letters from every creditor",desc:"Verbal confirmation is not enough — you need a formal paid-up letter from each one."},{num:"3",title:"Submit all letters to your debt counsellor",desc:"Once they have every letter, they are legally obligated to process your clearance."}].map((p) => (
            <div key={p.num} className="flex gap-4 p-4 rounded-xl border border-gray-100">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#1a5ea5'}}>{p.num}</div>
              <div><p className="font-semibold text-sm mb-1" style={{color:'#1a2340'}}>{p.title}</p><p className="text-sm text-gray-600">{p.desc}</p></div>
            </div>
          ))}
        </div>
        <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#e8f0fa',borderLeft:'4px solid #1a5ea5'}}>
          <p className="font-bold text-sm mb-1" style={{color:'#1a2340'}}>The home loan exception</p>
          <p className="text-sm text-gray-700">If you have a home loan in your debt review, you do not have to pay off the entire house to qualify for a Clearance Certificate. As long as all other unsecured debts are settled and your home loan is fully up to date, you can still be issued a clearance certificate.</p>
        </div>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>5. Avoiding the scams</h2>
        <p className="text-gray-700 mb-4">Be extremely cautious of any business offering a court application to rescind debt review while you still owe money. Courts will not overturn a debt review order unless you can prove you were fraudulently placed under review in the first place.</p>
        <div className="rounded-lg p-5 mb-12" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
          <p className="font-bold text-sm mb-2" style={{color:'#0F6E56'}}>Remember these five things</p>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
            <li>You cannot voluntarily exit debt review once a court order is in place.</li>
            <li>The only legal exit is a Form 19 Clearance Certificate.</li>
            <li>A home loan does not need to be paid off — just kept up to date.</li>
            <li>Credit bureaus must remove the flag within days of your certificate being submitted.</li>
            <li>Be wary of anyone promising to remove the flag while you still owe money.</li>
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
