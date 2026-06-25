export default function CreditReport() {
  return (
    <main>
      <div style={{backgroundColor:'#1a5ea5',padding:'48px 0 40px'}}>
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:'rgba(255,255,255,0.65)'}}>Credit · Module 1 of 4</p>
          <h1 className="text-3xl font-bold mb-3" style={{color:'#ffffff'}}>Decoding Your Credit Report: How It Works and Why It Matters</h1>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:'0.88rem'}}>Approx. 13 min read · Last reviewed June 2026</p>
        </div>
      </div>
      <div style={{backgroundColor:'#ffffff'}}>
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div style={{display:'grid',gridTemplateColumns:'1fr 260px',gap:'48px',alignItems:'start'}}>
            <article style={{minWidth:0,color:'#1a1a1a'}}>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>What you will learn</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>What a credit report actually is, and what it deliberately does not show</li>
                  <li>The four sections every South African credit report is divided into</li>
                  <li>How your day-to-day financial behaviour directly shapes this living document</li>
                  <li>Why checking your report regularly is one of the most valuable financial habits you can build</li>
                </ul>
              </div>

              <div className="rounded-lg p-4 mb-8" style={{backgroundColor:'#F5F4F0'}}>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:'#888780'}}>In this module</p>
                <ol className="text-sm space-y-1 list-decimal list-inside" style={{color:'#0C447C'}}>
                  <li>What exactly is a credit report?</li>
                  <li>The four pillars of a credit report</li>
                  <li>How your behaviour affects the report</li>
                  <li>Why you should check it regularly</li>
                  <li>Key takeaways</li>
                </ol>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>1. What exactly is a credit report?</h2>
              <p className="text-gray-700 mb-4">Think of your credit report as a financial report card. Just like a school report card tracks your grades over time, a credit report tracks how responsibly you manage money and debt. Businesses use this document to decide whether to lend you money, rent you an apartment, or even offer you a job.</p>
              <p className="text-gray-700 mb-4">A credit report is a detailed history of your borrowing and repayment habits. It is compiled by independent companies called credit bureaus. These bureaus collect information from your creditors, including banks, retail stores, and mobile network providers, to build a master file of your financial behaviour.</p>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>What your credit report does not show</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Your credit report does not show how much money you have in savings, and it does not show your salary. It focuses entirely on your relationship with debt, what you owe, to whom, and how reliably you have paid it back.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>2. The four pillars of a credit report</h2>
              <p className="text-gray-700 mb-4">Most South African credit reports are divided into four main sections:</p>
              {[
                {n:'1',t:'Personal information',d:'Your full name, ID number, current and past addresses, and employment history. This section exists purely to verify that the report belongs to you. It has no bearing on your creditworthiness itself.'},
                {n:'2',t:'Account history',d:'This is the core of your report. It lists every credit account you hold, including credit cards, personal loans, mortgages, and clothing accounts. For each one, it shows when you opened it, your credit limit, and whether you pay on time every month. This section carries the most weight in how lenders assess you.'},
                {n:'3',t:'Public records',d:'This section lists serious financial legal matters, including bankruptcies, court judgments, and administration orders. These records stay on your report for several years and heavily impact your credit standing. This is the section most worth proactively protecting yourself from.'},
                {n:'4',t:'Inquiries',d:'Every time a lender looks at your report because you have applied for credit, a log is created. Too many inquiries in a short space of time signals to lenders that you may be desperate for money, and this directly impacts your credit score, even if every application was for legitimate reasons.'},
              ].map(p=>(
                <div key={p.n} className="rounded-lg p-4 mb-3" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#185FA5'}}>{p.n}</div>
                    <p className="font-bold text-sm" style={{color:'#0C447C'}}>{p.t}</p>
                  </div>
                  <p className="text-sm" style={{color:'#374151'}}>{p.d}</p>
                </div>
              ))}

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>3. How your behaviour affects the report</h2>
              <p className="text-gray-700 mb-4">Your credit report is a living document. It updates monthly. When you pay your bills on time, your creditors report a positive payment history, which builds a strong, healthy file over time.</p>
              <p className="text-gray-700 mb-4">On the flip side, missing a payment, paying late, or ignoring a bill entirely creates a negative entry. If an account goes unpaid for months, the creditor may sell the debt to a collection agency or take legal action. Both of these outcomes severely damage your record.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0C447C'}}>Behaviours that build your report vs behaviours that damage it</p>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px'}}>
                  <div className="rounded-lg p-3" style={{backgroundColor:'#E1F5EE'}}>
                    <p className="font-bold text-xs mb-2" style={{color:'#0F6E56'}}>Builds your report</p>
                    <ul className="text-xs space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                      <li>Paying every account on time every month</li>
                      <li>Keeping credit card balances well below the limit</li>
                      <li>Maintaining long-standing accounts in good standing</li>
                      <li>Limiting new credit applications</li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-3" style={{backgroundColor:'#FBEAF0'}}>
                    <p className="font-bold text-xs mb-2" style={{color:'#993556'}}>Damages your report</p>
                    <ul className="text-xs space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                      <li>Missing payments or paying late</li>
                      <li>Defaulting on any account</li>
                      <li>Having judgments or administration orders granted</li>
                      <li>Applying for multiple credit products in a short period</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>4. Why you should check it regularly</h2>
              <p className="text-gray-700 mb-4">Your credit report directly determines your credit score, a number that summarises your overall creditworthiness. A clean report means a higher score, which unlocks lower interest rates on loans and can save you thousands of rands over your lifetime.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0F6E56'}}>Errors happen, and you need to catch them</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>A bureau might accidentally mix your information with someone who has a similar name, or a paid-off account might still incorrectly show as open. By checking your report annually, you can spot and dispute these mistakes before they cost you a better interest rate. Regularly reviewing your report is also the fastest way to catch identity theft if someone has tried to open accounts in your name without your knowledge.</p>
              </div>
              <p className="text-gray-700 mb-4">Every South African is entitled to one free credit report per year from each registered credit bureau. The major bureaus are TransUnion, Experian, Compuscan, and XDS. You can request your report directly from their websites. Checking your own report does not count as an inquiry and does not affect your score.</p>
              <p className="text-gray-700 mb-8">Managing your credit report does not require a finance degree. By paying bills on time, keeping your debt levels low, and checking your file regularly, you can make sure your financial report card is always working for you, not against you.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>5. Key takeaways</h2>
              <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0F6E56'}}>Remember these four things</p>
                <ol className="text-sm space-y-2 list-decimal list-inside" style={{color:'#1a1a1a'}}>
                  <li>Your credit report tracks your relationship with debt, not your savings or salary.</li>
                  <li>It is built from four sections: personal information, account history, public records, and inquiries. Account history and public records carry the most weight.</li>
                  <li>The report updates monthly based on your real behaviour. On-time payments build it up. Missed payments damage it.</li>
                  <li>Check your report at least annually. Errors happen, and catching them early can protect both your score and your interest rates. You are entitled to one free report per year from each registered bureau.</li>
                </ol>
              </div>

              <div className="text-xs space-y-2" style={{borderTop:'1px solid #E2E0D8',paddingTop:'24px',color:'#888780'}}>
                <p><strong style={{color:'#0C447C'}}>Primary legislation:</strong> National Credit Act 34 of 2005 (credit bureau provisions)</p>
                <p>This module is for educational purposes only and does not constitute financial advice. Contact a registered debt counsellor or credit bureau directly for advice specific to your situation.</p>
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
                    Content provided for educational purposes only. Contact Your Debt Friend directly for personal credit and debt guidance.
                  </div>
                </div>
              </div>
              <a href="/learn" className="flex items-center gap-2 mt-4 text-sm font-medium" style={{color:'#1a5ea5'}}>← Back to all modules</a>
              <div className="rounded-xl mt-4 p-4" style={{backgroundColor:'#1a2340'}}>
                <p className="text-xs font-bold mb-2" style={{color:'#8fa8cc'}}>Next in Credit</p>
                <a href="/learn/credit-debt-review" className="text-sm font-medium" style={{color:'#ffffff'}}>Getting Out of Debt Review →</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}