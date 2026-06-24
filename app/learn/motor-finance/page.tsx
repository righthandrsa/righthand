export default function MotorFinance() {
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
        <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{color:'#1a5ea5'}}>Motor Vehicle · Module</p>
        <h1 className="text-3xl font-bold mb-3" style={{color:'#1a2340'}}>Vehicle Finance and Insurance, Decoded</h1>
        <p className="text-sm text-gray-400 mb-8">14 minute read · Motor Vehicle section · Last reviewed: June 2026</p>
        <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#e8f0fa',borderLeft:'4px solid #1a5ea5'}}>
          <p className="font-bold text-sm mb-2" style={{color:'#1a2340'}}>What you will learn</p>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>How vehicle finance agreements actually work and what you are signing</li>
            <li>The difference between a deposit, balloon payment, and residual value</li>
            <li>What comprehensive insurance covers and what it does not</li>
            <li>Your rights if a vehicle is written off while under finance</li>
          </ul>
        </div>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>1. How vehicle finance works</h2>
        <p className="text-gray-700 mb-4">When you finance a vehicle, you are entering into an instalment sale agreement. The bank or finance house purchases the vehicle and you pay them back over an agreed term — usually 48 to 72 months — with interest. You only become the legal owner once the final payment is made.</p>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>2. Key terms you must understand</h2>
        <div className="space-y-3 mb-6">
          {[{num:"1",title:"Deposit",desc:"An upfront payment that reduces the amount you need to finance. A larger deposit means lower monthly payments and less interest paid overall."},{num:"2",title:"Balloon payment",desc:"A large lump sum due at the end of your finance term. It reduces monthly payments but means you owe a significant amount at the end — which many buyers are not prepared for."},{num:"3",title:"Interest rate",desc:"Linked to the prime lending rate. Always ask whether your rate is fixed or linked to prime, as a linked rate means your payments can increase if the prime rate rises."}].map((p) => (
            <div key={p.num} className="flex gap-4 p-4 rounded-xl border border-gray-100">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#1a5ea5'}}>{p.num}</div>
              <div><p className="font-semibold text-sm mb-1" style={{color:'#1a2340'}}>{p.title}</p><p className="text-sm text-gray-600">{p.desc}</p></div>
            </div>
          ))}
        </div>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>3. What insurance actually covers</h2>
        <p className="text-gray-700 mb-4">Comprehensive insurance covers your vehicle for accidents, theft, and third-party damage. However, it does not automatically cover the outstanding finance balance if your vehicle is written off. The insurance payout is based on market value — which is often less than what you still owe.</p>
        <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
          <p className="font-bold text-sm mb-1" style={{color:'#854F0B'}}>The gap that catches people out</p>
          <p className="text-sm text-gray-700">If your car is worth R180,000 but you still owe R220,000 on finance, the insurer pays R180,000 and you are still responsible for the R40,000 shortfall. Credit shortfall insurance covers this gap — ask your dealer or insurer about it.</p>
        </div>
        <div className="rounded-lg p-5 mb-12" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
          <p className="font-bold text-sm mb-2" style={{color:'#0F6E56'}}>Remember these four things</p>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
            <li>You do not own the vehicle until the final finance payment is made.</li>
            <li>A balloon payment reduces monthly costs but creates a large debt at the end of your term.</li>
            <li>Insurance pays market value — not necessarily what you still owe on finance.</li>
            <li>Credit shortfall insurance protects you if your car is written off while still under finance.</li>
          </ol>
        </div>
        <div className="border-t border-gray-100 pt-8 text-xs text-gray-400 space-y-2">
          <p><strong>Legislation:</strong> National Credit Act 34 of 2005; Consumer Protection Act 68 of 2008</p>
          <p>This module is for educational purposes only and does not constitute legal or financial advice.</p>
        </div>
      </article>
    </main>
  );
}
