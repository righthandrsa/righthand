export default function DebtPrescription() {
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
        <h1 className="text-3xl font-bold mb-3" style={{color:'#1a2340'}}>The Ghost Debt Trap: How Old Debt Expires</h1>
        <p className="text-sm text-gray-400 mb-8">12 minute read · Credit section · Last reviewed: June 2026</p>
        <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#e8f0fa',borderLeft:'4px solid #1a5ea5'}}>
          <p className="font-bold text-sm mb-2" style={{color:'#1a2340'}}>What you will learn</p>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>What prescription of debt means and why most debts expire after 3 years</li>
            <li>The three strict rules that must all be true for a debt to legally expire</li>
            <li>How a single payment or phone call can reset the entire 3-year clock</li>
            <li>Your legal right to refuse collectors chasing an expired debt</li>
          </ul>
        </div>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>1. What is prescription of debt?</h2>
        <p className="text-gray-700 mb-4">Prescription means a debt has an expiration date. The law says a creditor only has a certain amount of time to collect what you owe. If they wait too long and never take proper action, the debt legally expires — it is wiped out, and you no longer owe a single cent.</p>
        <div className="rounded-lg p-5 mb-6 text-center" style={{backgroundColor:'#e8f0fa'}}>
          <p className="text-4xl font-bold" style={{color:'#1a2340'}}>3 years</p>
          <p className="text-sm text-gray-600 mt-1">expiration timer for credit cards, store accounts, personal loans, and cellphone contracts</p>
        </div>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>2. Rule 1 — You do not pay a single cent</h2>
        <div className="flex gap-4 p-4 rounded-xl border border-gray-100 mb-4">
          <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#1a5ea5'}}>1</div>
          <div><p className="font-semibold text-sm mb-1" style={{color:'#1a2340'}}>No payments, ever — not even a small one</p><p className="text-sm text-gray-600">If you pay even R50 toward that old account, you instantly reset the timer. The law treats a payment as you admitting the debt is yours.</p></div>
        </div>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>3. Rule 2 — You do not admit to the debt</h2>
        <div className="flex gap-4 p-4 rounded-xl border border-gray-100 mb-4">
          <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#1a5ea5'}}>2</div>
          <div><p className="font-semibold text-sm mb-1" style={{color:'#1a2340'}}>No acknowledgement — in writing or out loud</p><p className="text-sm text-gray-600">Saying yes to a debt on a recorded call, sending a WhatsApp asking for a discount, or asking about a payment plan all reset the clock to zero.</p></div>
        </div>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>4. Rule 3 — The creditor does not take you to court</h2>
        <div className="flex gap-4 p-4 rounded-xl border border-gray-100 mb-6">
          <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#1a5ea5'}}>3</div>
          <div><p className="font-semibold text-sm mb-1" style={{color:'#1a2340'}}>No formal legal action within 3 years</p><p className="text-sm text-gray-600">Phone calls and letters do NOT stop the timer. Only a court summons physically delivered by a sheriff pauses the clock.</p></div>
        </div>
        <div className="rounded-lg p-5 mb-12" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
          <p className="font-bold text-sm mb-2" style={{color:'#0F6E56'}}>Remember these five things</p>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
            <li>Most everyday debts expire after 3 years of complete inactivity.</li>
            <li>Paying even a small amount resets the entire 3-year clock.</li>
            <li>Admitting the debt verbally or in writing also resets the clock.</li>
            <li>Only a formal court summons delivered by a sheriff pauses the clock.</li>
            <li>Once a debt has prescribed, collectors have no legal right to pursue it.</li>
          </ol>
        </div>
        <div className="border-t border-gray-100 pt-8 text-xs text-gray-400 space-y-2">
          <p><strong>Contributor:</strong> Your Debt Friend — NCR-registered debt management firm</p>
          <p><strong>Legislation:</strong> Prescription Act 68 of 1969</p>
          <p>This module is for educational purposes only and does not constitute legal advice.</p>
        </div>
      </article>
    </main>
  );
}
