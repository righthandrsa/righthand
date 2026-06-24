export default function MotorRights() {
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
        <h1 className="text-3xl font-bold mb-3" style={{color:'#1a2340'}}>Your Rights When Buying a Vehicle</h1>
        <p className="text-sm text-gray-400 mb-8">16 minute read · Motor Vehicle section · Last reviewed: June 2026</p>
        <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#e8f0fa',borderLeft:'4px solid #1a5ea5'}}>
          <p className="font-bold text-sm mb-2" style={{color:'#1a2340'}}>What you will learn</p>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>What the Consumer Protection Act entitles you to when buying a vehicle</li>
            <li>The right to return a defective vehicle and what qualifies as a defect</li>
            <li>How the implied warranty of quality works on all vehicle purchases</li>
            <li>What to do when a dealer refuses to acknowledge a defect</li>
          </ul>
        </div>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>1. The Consumer Protection Act protects you</h2>
        <p className="text-gray-700 mb-4">The Consumer Protection Act 68 of 2008 gives every South African consumer the right to receive goods that are safe, in good working order, and free from defects. This applies fully to vehicle purchases — whether new or used — from a registered dealer.</p>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>2. The implied warranty of quality</h2>
        <p className="text-gray-700 mb-4">Every vehicle sold by a dealer comes with an implied warranty of quality under the CPA. This means the vehicle must be reasonably suitable for the purpose it was intended for, be of good quality and free from defects, and comply with any applicable standards.</p>
        <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#e8f0fa',borderLeft:'4px solid #1a5ea5'}}>
          <p className="font-bold text-sm mb-1" style={{color:'#1a2340'}}>This applies even without a written warranty</p>
          <p className="text-sm text-gray-700">The implied warranty exists by law. A dealer cannot contract out of it, and it applies whether or not you were given a separate written warranty document.</p>
        </div>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>3. Your right to return a defective vehicle</h2>
        <p className="text-gray-700 mb-4">If a vehicle has a defect within 6 months of purchase, you have the right to return it and choose between a full refund, repair, or replacement. The dealer cannot simply insist on a repair if you prefer a refund.</p>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>4. What to do when a dealer refuses</h2>
        <div className="space-y-3 mb-6">
          {[{num:"1",title:"Document everything",desc:"Keep records of all communication, inspection reports, and any written responses from the dealer."},{num:"2",title:"Lodge a complaint with the Motor Industry Ombudsman",desc:"The MIOSA resolves disputes between consumers and motor industry members for free."},{num:"3",title:"Approach the National Consumer Commission",desc:"The NCC can investigate and act against dealers who violate the Consumer Protection Act."}].map((p) => (
            <div key={p.num} className="flex gap-4 p-4 rounded-xl border border-gray-100">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#1a5ea5'}}>{p.num}</div>
              <div><p className="font-semibold text-sm mb-1" style={{color:'#1a2340'}}>{p.title}</p><p className="text-sm text-gray-600">{p.desc}</p></div>
            </div>
          ))}
        </div>
        <div className="rounded-lg p-5 mb-12" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
          <p className="font-bold text-sm mb-2" style={{color:'#0F6E56'}}>Remember these four things</p>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
            <li>Every vehicle from a dealer comes with an implied warranty of quality under the CPA.</li>
            <li>If a defect appears within 6 months, you can choose a refund, repair, or replacement.</li>
            <li>A dealer cannot force you to accept a repair if you want a refund.</li>
            <li>The Motor Industry Ombudsman resolves disputes for free.</li>
          </ol>
        </div>
        <div className="border-t border-gray-100 pt-8 text-xs text-gray-400 space-y-2">
          <p><strong>Legislation:</strong> Consumer Protection Act 68 of 2008</p>
          <p>This module is for educational purposes only and does not constitute legal advice.</p>
        </div>
      </article>
    </main>
  );
}
