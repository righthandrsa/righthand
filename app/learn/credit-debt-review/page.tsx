import PaywallGate from '../../components/PaywallGate';
export default function CreditDebtReview() {
  return (
    <PaywallGate>
    <main>
      <div style={{backgroundColor:'#1a5ea5',padding:'48px 0 40px'}}>
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:'rgba(255,255,255,0.65)'}}>Credit · Module 2 of 4</p>
          <h1 className="text-3xl font-bold mb-3" style={{color:'#ffffff'}}>Getting Out of Debt Review: The Only Real Way Out</h1>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:'0.88rem'}}>Approx. 14 min read · Last reviewed June 2026</p>
        </div>
      </div>
      <div style={{backgroundColor:'#ffffff'}}>
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 lg:gap-12" style={{alignItems:'start'}}>
            <article style={{minWidth:0,color:'#1a1a1a'}}>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>What you will learn</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>Why you cannot simply opt out of debt review once a court order is granted, even if your finances improve</li>
                  <li>The exact legal criteria you must meet to qualify for a Clearance Certificate</li>
                  <li>The one important exception that applies if you have a home loan included in your debt review</li>
                  <li>How to spot and avoid scam operations promising a quick exit from debt review</li>
                  <li>What happens once your Clearance Certificate is issued and how fast the flag must be removed</li>
                </ul>
              </div>

              <div className="rounded-lg p-4 mb-8" style={{backgroundColor:'#F5F4F0'}}>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:'#888780'}}>In this module</p>
                <ol className="text-sm space-y-1 list-decimal list-inside" style={{color:'#0C447C'}}>
                  <li>Why debt review can feel like a trap</li>
                  <li>The legal reality: why you cannot just walk away</li>
                  <li>The only true escape: the Clearance Certificate</li>
                  <li>What you must do to qualify</li>
                  <li>Avoiding the scams</li>
                  <li>Key takeaways</li>
                </ol>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>1. Why debt review can feel like a trap</h2>
              <p className="text-gray-700 mb-4">For thousands of South Africans drowning in monthly instalments, entering debt review feels like a life jacket. But once the initial relief wears off, many consumers find themselves in a highly restrictive legal position. Years pass, their financial situation improves, yet the under debt review flag remains firmly attached to their credit profile, blocking them from buying a home, upgrading a vehicle, or even opening a simple cellphone account.</p>
              <p className="text-gray-700 mb-4">If you feel stuck under debt review, you might be tempted to look for a shortcut. The internet is full of operators promising to remove the flag away for a fee. Here is the hard truth: there is only one legal, reliable way out of debt review, and it is worth understanding exactly how it works before you spend money chasing alternatives that do not exist.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>2. The legal reality: why you cannot just walk away</h2>
              <p className="text-gray-700 mb-4">To understand how to get out, you first need to understand how the system actually works. Debt review is not an informal agreement between you and your creditors. It is a magistrate or consumer tribunal court order. Once a magistrate grants that restructuring order, your debt counsellor loses the power to simply cancel it because your finances have improved.</p>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FBEAF0',borderLeft:'4px solid #993556'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#993556'}}>The myth that catches people out</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Many consumers mistakenly believe that if their salary increases, they can simply resume paying creditors directly and ask to be removed from debt review. It does not work that way. The National Credit Act is strict on this point: you cannot voluntarily withdraw from debt review once a court order has been issued, no matter how much more money you are now making.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>3. The only true escape: the Clearance Certificate</h2>
              <p className="text-gray-700 mb-4">The only legitimate way to lift the debt review flag and reclaim your financial freedom is to obtain a Form 19 Clearance Certificate from your debt counsellor.</p>
              <p className="text-gray-700 mb-4">Once your debt counsellor receives all the required paid-up letters from your creditors, they are legally required to issue your Clearance Certificate and submit it to the National Credit Regulator and all major credit bureaus.</p>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0F6E56'}}>How fast the flag comes off</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>By law, once the Clearance Certificate is submitted, the credit bureaus must remove the debt review indicator from your profile within days, not months. This is one of the few parts of the process that moves quickly once you have actually qualified.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>4. What you must do to qualify</h2>
              <p className="text-gray-700 mb-4">To legally qualify for a Clearance Certificate, you must meet specific, non-negotiable criteria:</p>
              <div className="space-y-3 mb-6">
                {[
                  {n:'1',t:'Pay off all restructured unsecured debts in full',d:'Every single credit card, store account, and personal loan included in your debt review must be settled completely. Partial settlement is not sufficient.'},
                  {n:'2',t:'Obtain official paid-up letters from every single creditor',d:'Verbal confirmation or an account showing R0 is not enough. You need a formal paid-up letter from each creditor, on their letterhead, confirming the account is fully settled.'},
                  {n:'3',t:'Submit all paid-up letters to your debt counsellor',d:'Once they have every letter, they are legally obligated to process your clearance. If your debt counsellor delays without reason, you can escalate to the NCR.'},
                ].map(p=>(
                  <div key={p.n} className="flex gap-4 p-4 rounded-xl" style={{border:'1px solid #E2E0D8'}}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#185FA5'}}>{p.n}</div>
                    <div><p className="font-semibold text-sm mb-1" style={{color:'#0C447C'}}>{p.t}</p><p className="text-sm" style={{color:'#374151'}}>{p.d}</p></div>
                  </div>
                ))}
              </div>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>The home loan exception</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>The law has one important piece of flexibility. If you have a home loan included in your debt review, you do not have to pay off the entire house to qualify for a Clearance Certificate. As long as all your other short-term unsecured debts are completely settled, and your home loan account is fully up to date and meeting the original agreement terms, you can still be issued a clearance certificate. Your mortgage simply continues under its normal terms going forward.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>5. Avoiding the scams</h2>
              <p className="text-gray-700 mb-4">Because the debt review flag is so frustrating to live with, a market of operators has sprung up promising shortcuts. Be extremely cautious of any business offering a court application to rescind debt review while you still owe money.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#FBEAF0',borderLeft:'4px solid #993556'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#993556'}}>Why these promises do not hold up</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Since landmark court rulings in recent years, courts will not overturn a debt review order unless you can prove you were fraudulently placed under review in the first place. If you genuinely entered debt review because you needed the protection, no court application is going to remove that order while debt remains outstanding, regardless of what an agency promises you for a fee.</p>
              </div>
              <p className="text-gray-700 mb-8">The only real way out is straight through. Tighten your belt, throw any extra cash or bonuses at your smallest debts to build a snowball effect, and pay the accounts off systematically. It takes discipline, but walking the legal path is the only way to genuinely clear your name and rebuild your financial life on solid ground.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>6. Key takeaways</h2>
              <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0F6E56'}}>Remember these five things</p>
                <ol className="text-sm space-y-2 list-decimal list-inside" style={{color:'#1a1a1a'}}>
                  <li>You cannot voluntarily exit debt review once a court order is in place, even if your income improves significantly.</li>
                  <li>The only legal exit is a Form 19 Clearance Certificate, issued once all restructured unsecured debts are paid in full.</li>
                  <li>If you have a home loan in your debt review, it does not need to be paid off. It just needs to be fully up to date.</li>
                  <li>Once your debt counsellor submits your Clearance Certificate, credit bureaus must remove the debt review flag within days.</li>
                  <li>Be very wary of any operator promising to remove your debt review flag while you still owe money. This is not legally possible unless fraud is proven.</li>
                </ol>
              </div>

              <div className="text-xs space-y-2" style={{borderTop:'1px solid #E2E0D8',paddingTop:'24px',color:'#888780'}}>
                <p><strong style={{color:'#0C447C'}}>Primary legislation:</strong> National Credit Act 34 of 2005 (debt review provisions)</p>
                <p>This module is for educational purposes only and does not constitute legal or financial advice. Debt review processes and outcomes depend on individual circumstances. Always consult a registered debt counsellor before making decisions about your debt review status.</p>
              </div>

            </article>

            <aside style={{position:'sticky',top:'80px'}}>
              <div className="rounded-2xl overflow-hidden" style={{border:'1px solid #c5d8ef'}}>
                <div style={{backgroundColor:'#1a2340',padding:'14px 18px'}}>
                  <p className="text-xs font-bold tracking-widest uppercase" style={{color:'#8fa8cc'}}>Content contributor</p>
                </div>
                <div style={{backgroundColor:'#f0f5fc',padding:'20px'}}>
                  <div className="inline-block text-xs font-bold tracking-wide uppercase px-3 py-1 rounded mb-3" style={{backgroundColor:'#1a2340',color:'#b3d0f0'}}>Your Debt Friend</div>
                  <p className="font-bold text-sm mb-1" style={{color:'#1a2340'}}>Ferial Theunissen</p>
                  <p className="text-xs mb-3" style={{color:'#1a5ea5'}}>NCR-registered debt counsellors</p>
                  <div className="space-y-2 text-xs" style={{color:'#4a5568'}}>
                    <div><a href="mailto:info@yourdebtfriend.co.za" style={{color:'#1a5ea5'}}>info@yourdebtfriend.co.za</a></div>
                    <div><a href="https://yourdebtfriend.co.za" target="_blank" rel="noopener noreferrer" style={{color:'#1a5ea5'}}>yourdebtfriend.co.za</a></div>
                  </div>
                  <div className="mt-4 pt-4 text-xs leading-relaxed" style={{borderTop:'1px solid #c5d8ef',color:'#718096'}}>
                    Content provided for educational purposes only. Contact Your Debt Friend directly for personal debt review guidance.
                  </div>
                </div>
              </div>
              <a href="/learn" className="flex items-center gap-2 mt-4 text-sm font-medium" style={{color:'#1a5ea5'}}>← Back to all modules</a>
              <div className="rounded-xl mt-4 p-4" style={{backgroundColor:'#1a2340'}}>
                <p className="text-xs font-bold mb-2" style={{color:'#8fa8cc'}}>Next in Credit</p>
                <a href="/learn/credit-prescription" className="text-sm font-medium" style={{color:'#ffffff'}}>The Ghost Debt Trap →</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
    </PaywallGate>
  );
}