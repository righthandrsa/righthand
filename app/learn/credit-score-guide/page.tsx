import PaywallGate from '../../components/PaywallGate';

export default function CreditScoreGuide() {
  return (
    <PaywallGate>
    <main>
      <div style={{backgroundColor:'#1a5ea5',padding:'48px 0 40px'}}>
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:'rgba(255,255,255,0.65)'}}>Credit &amp; Debt · Module 7 of 7</p>
          <h1 className="text-3xl font-bold mb-3" style={{color:'#ffffff'}}>Your Credit Score: What Builds It, What Breaks It, and How to Take Control</h1>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:'0.88rem'}}>Approx. 14 min read · Last reviewed August 2026</p>
        </div>
      </div>

      <div style={{backgroundColor:'#ffffff'}}>
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 lg:gap-12" style={{alignItems:'start'}}>
            <article style={{minWidth:0,color:'#1a1a1a'}}>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>What you will learn</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>The five pillars credit bureaus use to calculate your score — and how much each one counts</li>
                  <li>Exactly which habits build your score and which ones destroy it</li>
                  <li>How debt review affects your credit profile and what Section 88(3) means in practice</li>
                  <li>The most common credit score myths — and the truth behind each one</li>
                  <li>A four-phase action plan to clean up and maintain your credit profile</li>
                </ul>
              </div>

              <div className="rounded-lg p-4 mb-8" style={{backgroundColor:'#F5F4F0'}}>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:'#888780'}}>In this module</p>
                <ol className="text-sm space-y-1 list-decimal list-inside" style={{color:'#0C447C'}}>
                  <li>How credit scores are calculated</li>
                  <li>What builds your score</li>
                  <li>What damages your score</li>
                  <li>Debt review and your credit profile</li>
                  <li>Common myths — busted</li>
                  <li>Four-phase action plan</li>
                  <li>Quick-reference summary</li>
                </ol>
              </div>

              <p className="text-gray-700 mb-4">Your credit score is one of the most powerful numbers in your financial life — a three-digit summary that tells banks, landlords, cell phone providers, and insurers how risky you are as a borrower. A high score opens doors to lower interest rates and smoother approvals. A low score can mean rejection, or paying thousands more in interest over your lifetime.</p>
              <p className="text-gray-700 mb-4">The good news: your credit score is simply a reflection of financial behaviour. It is dynamic, predictable, and entirely within your control once you understand the rules.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>1. How Credit Scores Are Calculated</h2>
              <p className="text-gray-700 mb-4">In South Africa, credit providers report your payment behaviour to the major bureaus — Experian, TransUnion, XDS, and Compuscan. Each bureau uses its own algorithm, but the scoring model generally looks at five core pillars:</p>

              <div className="rounded-lg overflow-hidden mb-6" style={{border:'1px solid #E2E0D8'}}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{backgroundColor:'#1a2340',color:'#ffffff'}}>
                      <th className="text-left p-3 font-semibold">Pillar</th>
                      <th className="text-left p-3 font-semibold">Weight</th>
                      <th className="text-left p-3 font-semibold">What it measures</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Payment history','~35%','Do you pay on time, every time?'],
                      ['Credit utilisation','~30%','How much of your available credit are you using?'],
                      ['Length of credit history','~15%','How long have your accounts been open?'],
                      ['Credit mix','~10%','Do you have a healthy blend of credit types?'],
                      ['New credit enquiries','~10%','How often are you applying for new debt?'],
                    ].map(([pillar, weight, desc], i) => (
                      <tr key={i} style={{backgroundColor: i % 2 === 0 ? '#f9fafb' : '#E6F1FB'}}>
                        <td className="p-3 font-medium" style={{color:'#0C447C'}}>{pillar}</td>
                        <td className="p-3 font-bold" style={{color:'#1a2340'}}>{weight}</td>
                        <td className="p-3" style={{color:'#374151'}}>{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>2. What Builds Your Score</h2>
              <p className="text-gray-700 mb-4">Building a strong credit score is not about avoiding debt entirely. Never borrowing leaves you with a "thin file" — bureaus have no data to judge you on, which can be as problematic as bad credit. The goal is to use credit as a strategic tool.</p>

              {[
                {
                  t:'Flawless payment consistency',
                  d:'Pay at least the minimum amount on every account, every month, exactly on time. Every on-time payment logs a positive record. Over 12 to 24 months, this builds a powerful history of reliability. Set up debit orders — if one fails due to a weekend or a late salary, make a manual payment immediately. Even a few days late can show as a missed payment.',
                },
                {
                  t:'Keeping utilisation below 30%',
                  d:'If you have a credit card with a R10 000 limit and your balance is R3 000, your utilisation is 30%. Maxing out credit cards — even if you pay the full balance monthly — signals financial distress. Keeping balances low shows discipline.',
                },
                {
                  t:'Keeping old accounts open',
                  d:'The age of your oldest account matters. If you have an old credit card or retail account you no longer use, keep it open. Use it occasionally for a small purchase and clear the balance immediately. The long history anchors your score.',
                },
                {
                  t:'Managing a healthy mix of credit types',
                  d:'Revolving credit (credit cards, store accounts, overdrafts) combined with instalment credit (vehicle finance, home loans) demonstrates versatile money management. A card managed perfectly alongside a vehicle finance agreement is a strong combination.',
                },
                {
                  t:'Paying more than the minimum',
                  d:'Paying extra reduces your total outstanding debt faster, which directly lowers your utilisation ratio. Paying the minimum keeps you in good standing; paying extra makes your score climb faster.',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-lg p-4 mb-3" style={{backgroundColor:'#E1F5EE',border:'1px solid #A7D7C5'}}>
                  <p className="font-bold text-sm mb-1" style={{color:'#0F6E56'}}>{item.t}</p>
                  <p className="text-sm" style={{color:'#374151'}}>{item.d}</p>
                </div>
              ))}

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>3. What Damages Your Score</h2>

              {[
                {
                  t:'Missed, late, or short payments',
                  d:'A single 30-day delinquency can wipe significant points off a high score. Short payments hurt too — paying R450 on a R500 minimum is still flagged as a short payment. The algorithm registers that you did not fulfil your contractual obligation.',
                },
                {
                  t:'Maxing out credit facilities',
                  d:'High utilisation (over 75%) implies financial distress. Even if you never miss a payment deadline, consistently maintaining a high balance causes your score to drift downward.',
                },
                {
                  t:'Too many hard enquiries in a short window',
                  d:'Applying for multiple credit products in a short period signals desperation. The safe exception: when rate-shopping for a major asset like a house or car, multiple enquiries within 14 to 30 days are typically treated as a single enquiry.',
                },
                {
                  t:'Default listings and court judgments',
                  d:'A default listing ("handed over" or "written off") stays on your profile for up to two years or until settled. A court judgment remains legally active for 30 years under the Prescription Act and stays on your profile for up to five years, making mainstream financing very difficult during that period.',
                },
                {
                  t:'Ignoring active service agreements',
                  d:'Gym contracts, cell phone accounts, and medical bills are contractual obligations. Stopping payment without formally terminating the agreement results in the provider handing you over to collections — and an adverse listing on your profile.',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-lg p-4 mb-3" style={{backgroundColor:'#FEF3F2',border:'1px solid #FECACA'}}>
                  <p className="font-bold text-sm mb-1" style={{color:'#B91C1C'}}>{item.t}</p>
                  <p className="text-sm" style={{color:'#374151'}}>{item.d}</p>
                </div>
              ))}

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>4. Debt Review and Your Credit Profile</h2>
              <p className="text-gray-700 mb-4">When debt becomes unmanageable, the National Credit Act provides a legal process — Debt Review — to protect over-indebted consumers from asset repossession and creditor harassment. But entering this process has specific implications for your credit profile.</p>

              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>The Debt Review indicator</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>The moment you apply, a formal "Under Debt Review" flag is placed on your credit profile. By law, while this flag is active, you are strictly prohibited from entering into any new credit agreements or active service agreements. This is a protective guardrail — not a punishment.</p>
              </div>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FEF3F2',borderLeft:'4px solid #B91C1C'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#B91C1C'}}>Section 88(3) of the NCA — the termination risk</p>
                <p className="text-sm mb-2" style={{color:'#1a1a1a'}}>A debt review process can only succeed if payments are kept strictly up to date according to your rearranged payment plan. If a consumer records multiple payment defaults while under debt review — even with a valid NCT Consent Order — the credit provider has the legal right to terminate the debt review agreement under Section 88(3).</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>When a bank terminates due to non-payment, all legal protections evaporate. The creditor can immediately pursue legal action, which may lead to repossession of assets.</p>
              </div>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-1" style={{color:'#0C447C'}}>Voluntary surrender vs forced repossession</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>If you cannot pay for an asset like a car, a voluntary surrender under Section 127 of the NCA is vastly different from a court-ordered repossession. With voluntary surrender, the bank sells the vehicle at auction to clear your balance — if there is a shortfall, you remain liable, but it avoids the severe long-term legal trauma of a forced repossession. Keep communication open with your debt counsellor and providers.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>5. Common Myths — Busted</h2>

              {[
                {
                  myth:'Checking my own credit score will lower it.',
                  truth:'Checking your own score is a soft enquiry. You can check it ten times a day with zero impact. You are legally entitled to one free comprehensive credit report from every major bureau once a year. Use it.',
                },
                {
                  myth:'Closing old accounts instantly boosts your score.',
                  truth:'Closing an old paid-off account can actually lower your score. It reduces the average age of your credit history and shrinks your total available credit limit, which can spike your utilisation ratio.',
                },
                {
                  myth:'A poor credit score lasts forever.',
                  truth:'Your credit profile is a living history, not a life sentence. Most negative information has a legal expiration date. Once a default or judgment is settled, the negative listing must be removed according to regulatory timelines.',
                },
                {
                  myth:'Debt collectors can chase ancient debt forever.',
                  truth:'Under the Prescription Act, a consumer debt is legally prescribed (extinguished) if 36 consecutive months pass where the creditor did not demand payment or serve a formal summons, you did not acknowledge the debt in writing or verbally, and you did not make a single payment. If a collector contacts you for a debt silent for over three years, you can state: "This debt has prescribed under the Prescription Act. I request a formal prescription letter." Once prescribed, it is unlawful to collect on it.',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-lg p-4 mb-4" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                  <p className="text-sm font-bold mb-1" style={{color:'#B91C1C'}}>Myth: &ldquo;{item.myth}&rdquo;</p>
                  <p className="text-sm" style={{color:'#374151'}}><span className="font-semibold" style={{color:'#0F6E56'}}>Truth: </span>{item.truth}</p>
                </div>
              ))}

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>6. Four-Phase Action Plan</h2>

              {[
                {
                  phase:'Phase 1 — The Audit (Immediate)',
                  steps:[
                    'Download your free credit reports from TransUnion, Experian, and XDS.',
                    'Check every line item for accounts that do not belong to you, paid-off accounts still showing as open, or old debts that should have prescribed.',
                    'Log a formal dispute with the relevant bureau for any inaccuracy. They are legally mandated to investigate and resolve within 20 business days if the credit provider cannot produce evidence.',
                  ],
                },
                {
                  phase:'Phase 2 — Triage and Stabilisation (Months 1–3)',
                  steps:[
                    'Contact any credit providers where you are behind on payments. Work out an emergency arrangement to bring the accounts up to date.',
                    'Always prioritise essential accounts and asset-backed facilities first.',
                    'Set up scheduled debit orders for the day after your salary hits your account.',
                  ],
                },
                {
                  phase:'Phase 3 — Optimisation and Debt Reduction (Months 4–12)',
                  steps:[
                    'Focus on paying down credit cards or retail accounts sitting near their limits — bring them below 30%.',
                    'Use the Snowball method (smallest debt first for psychological wins) or Avalanche method (highest interest first to save the most money).',
                    'Stop applying for new debt to let hard enquiries expire naturally.',
                  ],
                },
                {
                  phase:'Phase 4 — Long-Term Maintenance (Ongoing)',
                  steps:[
                    'Ensure credit providers always have your current contact details — missing an important warning because a bank has outdated details can cause unexpected defaults.',
                    'Check your credit score at least once a quarter to confirm no fraudulent accounts have been opened in your name.',
                  ],
                },
              ].map((item, i) => (
                <div key={i} className="rounded-lg p-5 mb-4" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                  <p className="font-bold text-sm mb-3" style={{color:'#0C447C'}}>{item.phase}</p>
                  {item.steps.map((step, j) => (
                    <div key={j} className="flex gap-3 mb-2">
                      <span className="text-sm font-bold shrink-0 mt-0.5" style={{color:'#1a5ea5'}}>{j + 1}.</span>
                      <p className="text-sm" style={{color:'#374151'}}>{step}</p>
                    </div>
                  ))}
                </div>
              ))}

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>7. Quick-Reference Summary</h2>
              <div className="rounded-lg overflow-hidden mb-8" style={{border:'1px solid #E2E0D8'}}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{backgroundColor:'#1a2340',color:'#ffffff'}}>
                      <th className="text-left p-3 font-semibold">Action</th>
                      <th className="text-left p-3 font-semibold">Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Paying on time','Highly positive — the single most important factor'],
                      ['Keeping balances under 30%','Highly positive — shows discipline'],
                      ['Keeping old accounts open','Positive — preserves your credit history length'],
                      ['Missing payments','Severely negative — a single 30-day default drops your score immediately'],
                      ['Maxing out credit limits','Cumulative negative — signals financial distress'],
                      ['Multiple credit applications','Cumulative negative — looks desperate to lenders'],
                      ['Ignoring old debt (3+ years)','Prescription Act may apply — confirm before paying'],
                      ['Defaulting under Debt Review','Severe legal risk — triggers Section 88(3) termination'],
                    ].map(([action, impact], i) => (
                      <tr key={i} style={{backgroundColor: i % 2 === 0 ? '#f9fafb' : '#ffffff'}}>
                        <td className="p-3 font-medium" style={{color:'#1a2340'}}>{action}</td>
                        <td className="p-3" style={{color:'#374151'}}>{impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="text-xs space-y-2" style={{borderTop:'1px solid #E2E0D8',paddingTop:'24px',color:'#888780'}}>
                <p><strong style={{color:'#0C447C'}}>Primary legislation:</strong> National Credit Act 34 of 2005 · Prescription Act 68 of 1969</p>
                <p>This module is for educational purposes only and does not constitute legal or financial advice. Consult a registered debt counsellor for advice specific to your circumstances.</p>
              </div>

            </article>

            <aside style={{position:'sticky',top:'80px'}}>
              <div className="rounded-2xl overflow-hidden" style={{border:'1px solid #c5d8ef'}}>
                <div style={{backgroundColor:'#1a2340',padding:'14px 18px'}}>
                  <p className="text-xs font-bold tracking-widest uppercase" style={{color:'#8fa8cc'}}>Content contributor</p>
                </div>
                <div style={{backgroundColor:'#f0f5fc',padding:'20px'}}>
                  <p className="font-bold text-sm mb-1" style={{color:'#1a2340'}}>Sumaya Fredericks</p>
                  <p className="text-xs font-semibold mb-1" style={{color:'#1a5ea5'}}>Your Debt Friend</p>
                  <p className="text-xs mb-3" style={{color:'#4a5568'}}>Registered Debt Counsellor · NCRDC1211</p>
                  <div className="mt-4 pt-4 text-xs leading-relaxed" style={{borderTop:'1px solid #c5d8ef',color:'#718096'}}>
                    Content provided for educational purposes only. Consult a registered debt counsellor for advice specific to your circumstances.
                  </div>
                </div>
              </div>
              <a href="/learn" className="flex items-center gap-2 mt-4 text-sm font-medium" style={{color:'#1a5ea5'}}>← Back to all modules</a>
              <div className="rounded-xl mt-4 p-4" style={{backgroundColor:'#1a2340'}}>
                <p className="text-xs font-bold mb-2" style={{color:'#8fa8cc'}}>Previous in Credit &amp; Debt</p>
                <a href="/learn/credit-debt-fraud" className="text-sm font-medium" style={{color:'#ffffff'}}>← Fraudulent Debt Review</a>
              </div>
              <div className="rounded-xl mt-3 p-4" style={{backgroundColor:'#1a2340'}}>
                <p className="text-xs font-bold mb-2" style={{color:'#8fa8cc'}}>Next in Credit &amp; Debt</p>
                <a href="/learn/credit-section-127" className="text-sm font-medium" style={{color:'#ffffff'}}>The Vehicle Shortfall Trap →</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
    </PaywallGate>
  );
}
