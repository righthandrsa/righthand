export default function BankSaving() {
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
        <h1 className="text-3xl font-bold mb-3" style={{color:'#1a2340'}}>Saving vs Investing: The Difference That Matters</h1>
        <p className="text-sm text-gray-400 mb-8">12 minute read · Banking section · Last reviewed: June 2026</p>
        <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#e8f0fa',borderLeft:'4px solid #1a5ea5'}}>
          <p className="font-bold text-sm mb-2" style={{color:'#1a2340'}}>What you will learn</p>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>The real difference between saving and investing</li>
            <li>How compound growth actually works and why starting early matters</li>
            <li>When to save and when to invest depending on your goals</li>
            <li>The most common mistakes that quietly cost people thousands</li>
          </ul>
        </div>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>1. Saving vs investing — not the same thing</h2>
        <p className="text-gray-700 mb-4">Saving means putting money aside in a safe, accessible place — like a savings account — where it earns modest interest. Investing means putting money into assets like shares, unit trusts, or property with the expectation of higher returns over time, accepting that the value can go up or down.</p>
        <div className="space-y-3 mb-6">
          {[{num:"1",title:"Save for short-term goals",desc:"Emergency funds, a planned purchase within 1-3 years, or money you cannot afford to lose. Use a savings account or money market account."},{num:"2",title:"Invest for long-term goals",desc:"Retirement, building wealth over 5+ years, or growing money beyond what inflation erodes. Use unit trusts, ETFs, or a retirement annuity."}].map((p) => (
            <div key={p.num} className="flex gap-4 p-4 rounded-xl border border-gray-100">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#1a5ea5'}}>{p.num}</div>
              <div><p className="font-semibold text-sm mb-1" style={{color:'#1a2340'}}>{p.title}</p><p className="text-sm text-gray-600">{p.desc}</p></div>
            </div>
          ))}
        </div>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>2. How compound growth works</h2>
        <p className="text-gray-700 mb-4">Compound growth means you earn returns not just on your original money, but also on the returns you have already earned. Over time, this creates a snowball effect that accelerates the growth of your money significantly.</p>
        <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#e8f0fa',borderLeft:'4px solid #1a5ea5'}}>
          <p className="font-bold text-sm mb-1" style={{color:'#1a2340'}}>Why starting early makes a massive difference</p>
          <p className="text-sm text-gray-700">Someone who invests R500 a month from age 25 will accumulate significantly more by retirement than someone who invests R1,000 a month from age 40 — even though the late starter puts in more money. Time is the most powerful ingredient in compound growth.</p>
        </div>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>3. Common mistakes to avoid</h2>
        <p className="text-gray-700 mb-4">Keeping all your money in a cheque account means inflation quietly erodes its value every year. Investing money you might need within a year exposes you to market volatility at the wrong time. Waiting until you have a large amount before starting means losing years of compound growth.</p>
        <div className="rounded-lg p-5 mb-12" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
          <p className="font-bold text-sm mb-2" style={{color:'#0F6E56'}}>Remember these four things</p>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
            <li>Saving is for short-term goals and safety. Investing is for long-term growth.</li>
            <li>Compound growth rewards those who start early — even with small amounts.</li>
            <li>Money sitting in a cheque account loses value to inflation every year.</li>
            <li>Match the tool to the goal: savings account for emergencies, investments for the future.</li>
          </ol>
        </div>
        <div className="border-t border-gray-100 pt-8 text-xs text-gray-400 space-y-2">
          <p>This module is for educational purposes only and does not constitute financial advice.</p>
        </div>
      </article>
    </main>
  );
}
