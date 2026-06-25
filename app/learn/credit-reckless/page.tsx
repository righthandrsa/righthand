export default function CreditReckless() {
  return (
    <main>
      <div style={{backgroundColor:'#1a5ea5',padding:'48px 0 40px'}}>
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:'rgba(255,255,255,0.65)'}}>Credit · Module 4 of 4</p>
          <h1 className="text-3xl font-bold mb-3" style={{color:'#ffffff'}}>Reckless Lending and Your Credit Rights in South Africa</h1>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:'0.88rem'}}>Approx. 20 min read · Last reviewed June 2026</p>
        </div>
      </div>
      <div style={{backgroundColor:'#ffffff'}}>
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div style={{display:'grid',gridTemplateColumns:'1fr 260px',gap:'48px',alignItems:'start'}}>
            <article style={{minWidth:0,color:'#1a1a1a'}}>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>What you will learn</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>How South Africa moved from "let the buyer beware" to statutory consumer protection in credit</li>
                  <li>What reckless lending is, and the three situations where a credit agreement can be set aside</li>
                  <li>What banks are legally required to do before giving you credit, and what happens when they do not</li>
                  <li>How unlawful contract clauses and supplementary agreements work, and why they are void</li>
                  <li>The landmark Ludick v FNB case, and what it means for every South African borrower</li>
                  <li>The 2025 NCR reckless lending guidelines and what debt counsellors must now do</li>
                </ul>
              </div>

              <div className="rounded-lg p-4 mb-8" style={{backgroundColor:'#F5F4F0'}}>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:'#888780'}}>In this module</p>
                <ol className="text-sm space-y-1 list-decimal list-inside" style={{color:'#0C447C'}}>
                  <li>The old world vs the new: why the NCA matters</li>
                  <li>What is reckless lending?</li>
                  <li>Sections 80 and 81: the legal mechanics</li>
                  <li>What happens when reckless lending is proven</li>
                  <li>The 2025 NCR investigation guidelines</li>
                  <li>Unlawful contract clauses: sections 90 and 91</li>
                  <li>Case study: Annet Ludick v First National Bank</li>
                  <li>What to do if you think you were given reckless credit</li>
                  <li>Key takeaways</li>
                </ol>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>1. The old world vs the new: why the NCA matters</h2>
              <p className="text-gray-700 mb-4">For decades, the South African credit market operated on a simple and brutal principle: if you signed, you were bound. Credit providers frequently extended large loans to people who clearly could not afford to repay them, and when those people collapsed under the debt, they had almost no legal recourse.</p>
              <p className="text-gray-700 mb-4">The consequences were severe. South Africa's household debt reached 76.3% of disposable income by September 2012, according to the South African Reserve Bank. Millions of consumers were trapped in debt spirals they had no means to escape.</p>
              <p className="text-gray-700 mb-4">The National Credit Act 34 of 2005 changed the fundamental rules. For the first time, the burden of responsible lending shifted from the consumer to the credit provider. The NCA does not just give you rights after the fact. It imposes proactive legal duties on every bank, retailer, and credit provider before they can give you credit.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>2. What is reckless lending?</h2>
              <p className="text-gray-700 mb-4">Reckless lending occurs when a credit provider gives you credit without properly assessing whether you can afford it, without ensuring you understand what you are agreeing to, or when the evidence clearly shows the credit will make you over-indebted.</p>
              <p className="text-gray-700 mb-4">This is not just unfair practice. It is illegal under the NCA. And when it is proven, the consequences for the credit provider are severe: the agreement can be set aside entirely, and you may be absolved of further liability for the debt.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>3. Sections 80 and 81: the legal mechanics</h2>
              <h3 className="text-lg font-bold mt-6 mb-2" style={{color:'#185FA5'}}>Section 81: the mandatory affordability assessment</h3>
              <p className="text-gray-700 mb-4">Before entering into any credit agreement with you, a credit provider is legally required to conduct a thorough, equitable, and impartial affordability assessment. This assessment must cover your current financial position, income, and expenses, your existing debt obligations and repayment history, and your financial prospects going forward.</p>
              <p className="text-gray-700 mb-4">This is not optional, and it is not a box-ticking exercise. A credit provider that fails to conduct this assessment properly, or at all, is in breach of the NCA before a single cent changes hands.</p>
              <h3 className="text-lg font-bold mt-6 mb-2" style={{color:'#185FA5'}}>Section 80: the three types of reckless credit</h3>
              <p className="text-gray-700 mb-3">Section 80 defines exactly when a credit agreement is reckless. A credit agreement is reckless in any of the following three situations:</p>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:'10px',margin:'16px 0 24px'}}>
                {[
                  {title:'Type 1: failure to assess',desc:'The credit provider skipped the affordability assessment entirely. The agreement is automatically reckless, regardless of whether you could actually afford it. The procedural failure alone is enough.'},
                  {title:'Type 2: lack of understanding',desc:'The credit provider completed the assessment but the evidence showed you did not understand the risks, costs, or obligations of the credit, yet they signed the agreement anyway.'},
                  {title:'Type 3: induced over-indebtedness',desc:'The credit provider did the assessment, and the results showed clearly that this credit would make you mathematically over-indebted, but they approved it anyway.'},
                ].map(c=>(
                  <div key={c.title} className="rounded-lg p-4" style={{backgroundColor:'#FBEAF0',border:'1px solid #E2E0D8'}}>
                    <p className="font-bold text-xs mb-2" style={{color:'#993556'}}>{c.title}</p>
                    <p className="text-xs" style={{color:'#1a1a1a'}}>{c.desc}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>The documentation rule</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Credit providers are required to keep records proving they conducted the affordability assessment. If a credit provider cannot produce this documentation when challenged, it is legally treated as equivalent to having never conducted the assessment at all. This is the exact finding in the Ludick v FNB case below. FNB could not produce the records, and their entire defence collapsed.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>4. What happens when reckless lending is proven</h2>
              <p className="text-gray-700 mb-4">When reckless lending is established before a Magistrate's Court or the National Consumer Tribunal, the adjudicator has significant powers under section 83 of the NCA:</p>
              <div className="space-y-3 mb-6">
                {[
                  {n:'1',t:'Set aside the agreement entirely',d:'All your rights and obligations under the credit agreement are cancelled, and you are absolved of further liability for the debt.'},
                  {n:'2',t:'Set aside part of the agreement',d:'Only the reckless portion of the credit or the over-indebtedness element is cancelled, while the remainder of the agreement continues.'},
                  {n:'3',t:'Suspend the agreement',d:'During the suspension period, you are not required to make payments, the credit provider cannot charge interest or fees, and they cannot take legal action or repossess the asset.'},
                ].map(p=>(
                  <div key={p.n} className="flex gap-4 p-4 rounded-xl" style={{border:'1px solid #E2E0D8'}}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#185FA5'}}>{p.n}</div>
                    <div><p className="font-semibold text-sm mb-1" style={{color:'#0C447C'}}>{p.t}</p><p className="text-sm" style={{color:'#374151'}}>{p.d}</p></div>
                  </div>
                ))}
              </div>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0F6E56'}}>The full consequence of reckless lending</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>If a credit agreement is set aside for recklessness, the credit provider may be ordered to write off the outstanding balance entirely and refund all payments, interest, and fees already paid. This is not a theoretical outcome. It happened to FNB in the Ludick case, where they were ordered to write off loans exceeding R150,000 and credit back all amounts charged from the date of the reckless agreements.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>5. The 2025 NCR reckless lending investigation guidelines</h2>
              <p className="text-gray-700 mb-4">In November 2025, the National Credit Regulator released updated Suspected Reckless Lending Investigation Guidelines (Guideline 005/2025). These guidelines operationalise the fight against predatory lending and set clear procedural standards for the entire industry.</p>
              <ul className="text-gray-700 mb-4 space-y-2 list-disc list-inside">
                <li>Strict timelines: investigations must be started and documentation submitted within a maximum of seven working days</li>
                <li>Comprehensive documentation lists: the guidelines specify exactly what documents a debt counsellor can require from a credit provider at each stage</li>
                <li>Mathematical comparison requirement: debt counsellors reviewing your case must compare the credit granted against your actual recorded income and expenses at the exact moment the loan was approved</li>
                <li>Protection against abuse: the guidelines also protect credit providers from vague or baseless reckless lending accusations intended purely to obstruct debt enforcement</li>
              </ul>
              <h3 className="text-lg font-bold mt-6 mb-2" style={{color:'#185FA5'}}>The role of your debt counsellor</h3>
              <p className="text-gray-700 mb-6">If you apply for debt review, your registered debt counsellor is now legally required to actively examine every credit agreement, request documentation of affordability assessments, and conduct a mathematical affordability analysis for each loan. If reckless lending is found, the debt counsellor has the legal authority to refer the matter directly to the NCT or Magistrate's Court under section 83.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>6. Unlawful contract clauses: sections 90 and 91</h2>
              <h3 className="text-lg font-bold mt-6 mb-2" style={{color:'#185FA5'}}>Section 90: 30 categories of prohibited clauses</h3>
              <p className="text-gray-700 mb-4">Predatory lending is not just about giving you too much credit. It also operates through the terms inside credit agreements, such as harsh, one-sided clauses designed to strip away your rights. Section 90 of the NCA lists 30 specific categories of prohibited clauses. It is illegal to include any clause in a credit agreement that undermines the goals of the NCA, misleads the consumer about the nature or terms of the agreement, facilitates fraudulent activity, or compels the consumer to give up a right they have under common law.</p>
              <p className="text-gray-700 mb-4">Any unlawful clause is void from the outset. It has no legal effect, even if you signed it. A court or tribunal can strike the clause out entirely, or, if the clause is so fundamental that the agreement cannot survive without it, declare the entire agreement void.</p>
              <h3 className="text-lg font-bold mt-6 mb-2" style={{color:'#185FA5'}}>Section 91: supplementary agreements used to bypass the NCA</h3>
              <p className="text-gray-700 mb-4">Credit providers are expressly prohibited from using supplementary agreements to circumvent the NCA's protections. This became particularly important in the context of Power of Attorney and Acknowledgment of Debt documents that major banks pressured consumers into signing when they fell behind on payments.</p>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FBEAF0',borderLeft:'4px solid #993556'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#993556'}}>Forced signatures on supplementary agreements</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>The Supreme Court of Appeal ruled in Barko Financial Services v National Credit Regulator that threatening disastrous legal action to force a signature on an AOD containing unlawful terms constitutes unlawful inducement under section 91(2). If you were pressured into signing a supplementary agreement under threat of immediate legal action, that agreement may be challengeable.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>7. Case study: Annet Ludick v First National Bank</h2>
              <p className="text-gray-700 mb-4">This is the most important reckless lending case in South African legal history. It demonstrates both the power of the NCA and the critical role of the NCT as a backstop when the main regulator fails.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                <span className="inline-block text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-full mb-3" style={{backgroundColor:'#E6F1FB',color:'#0C447C'}}>Landmark · National Consumer Tribunal</span>
                <p className="font-bold mb-3" style={{color:'#0C447C',fontSize:'0.9rem'}}>Annet Ludick v First National Bank</p>
                <p className="text-sm mb-2" style={{color:'#374151'}}><strong style={{color:'#0C447C'}}>What happened:</strong> In 2015, FNB approved multiple overlapping credit facilities for Ludick, including an overdraft facility raised to R80,000, a revolving loan of R10,000, and a credit card limit raised to R61,000. By 2016, Ludick's monthly living expenses and existing debt obligations vastly exceeded her actual income.</p>
                <p className="text-sm mb-2" style={{color:'#374151'}}><strong style={{color:'#0C447C'}}>The regulatory failure:</strong> Ludick filed a reckless lending complaint with the NCR. Shockingly, the NCR investigated and found no reckless lending. Under the old system, this would have been the end of the road.</p>
                <p className="text-sm mb-2" style={{color:'#374151'}}><strong style={{color:'#0C447C'}}>The safety net:</strong> Under section 141(1) of the NCA combined with section 75 of the CPA, Ludick was able to take her case directly to the NCT after receiving the non-referral notice.</p>
                <p className="text-sm mb-2" style={{color:'#374151'}}><strong style={{color:'#0C447C'}}>FNB's fatal flaw:</strong> Before the Tribunal, FNB claimed it always conducts affordability assessments. However, FNB could not produce a single document proving those assessments were actually conducted for Ludick's specific accounts.</p>
                <p className="text-sm mb-3" style={{color:'#374151'}}><strong style={{color:'#0C447C'}}>The NCT's ruling:</strong> The Tribunal applied a fundamental principle: a large financial institution is legally required to maintain proper records of its assessments. Failure to produce those records is treated as equivalent to never having conducted the assessment.</p>
                <p className="text-sm font-semibold" style={{color:'#0F6E56',borderTop:'1px solid #E2E0D8',paddingTop:'10px'}}>Outcome: All of Ludick's rights and obligations under the multiple credit agreements were set aside. FNB was ordered to write off loan amounts exceeding R150,000 and to credit her accounts with all payments, interest, and fees levied from September 2015.</p>
              </div>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>The lesson from Ludick</p>
                <ul className="text-sm space-y-2 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>If a credit provider cannot produce documentation of your affordability assessment, they have effectively admitted to reckless lending, regardless of what they claim their internal policies require</li>
                  <li>The NCT exists as a powerful backstop when the NCR fails. A non-referral notice from the NCR is not the end of the road. It is the key to accessing the Tribunal</li>
                </ul>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>8. What to do if you think you were given reckless credit</h2>
              <div className="space-y-3 mb-6">
                {[
                  {n:'1',t:'Gather your documentation',d:'Your credit agreement, any correspondence with the credit provider, your payslips and bank statements from the time the credit was granted, and records of any affordability information you provided.'},
                  {n:'2',t:'Contact a registered debt counsellor',d:'Under the 2025 NCR guidelines, your debt counsellor is now required to investigate potential reckless lending as part of a debt review. Request that they specifically examine whether the affordability assessment was properly conducted.'},
                  {n:'3',t:'Request the affordability assessment documentation from your credit provider',d:'Do this in writing. If they cannot produce it within a reasonable period, that failure is itself evidence of reckless lending.'},
                  {n:'4',t:'Lodge a complaint with the NCR',d:'If reckless lending is identified, the debt counsellor can refer the matter, or you can lodge directly with the NCR via their online complaint portal.'},
                  {n:'5',t:'If the NCR issues a non-referral, do not stop',d:'Use the notice to apply to the NCT directly under section 141(1) of the NCA. The Ludick case proves the NCT can and will overturn NCR decisions where the evidence supports it.'},
                ].map(p=>(
                  <div key={p.n} className="flex gap-4 p-4 rounded-xl" style={{border:'1px solid #E2E0D8'}}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#185FA5'}}>{p.n}</div>
                    <div><p className="font-semibold text-sm mb-1" style={{color:'#0C447C'}}>{p.t}</p><p className="text-sm" style={{color:'#374151'}}>{p.d}</p></div>
                  </div>
                ))}
              </div>
              <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>Act within three years</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Claims under the NCA must generally be brought within three years of the conduct that gave rise to the complaint. If you believe you were given reckless credit, start the process as soon as possible. Delays can affect your ability to access the NCT.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>9. Key takeaways</h2>
              <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0F6E56'}}>Remember these five things</p>
                <ol className="text-sm space-y-2 list-decimal list-inside" style={{color:'#1a1a1a'}}>
                  <li>Every credit provider is legally required to conduct a proper affordability assessment before giving you credit. If they skip it, the agreement may be reckless, regardless of whether you could afford it.</li>
                  <li>If a credit agreement is found reckless, it can be set aside entirely, meaning you may be absolved of the debt and entitled to a refund of all payments made.</li>
                  <li>A credit provider that cannot produce documentation of your affordability assessment is treated as having never conducted it. Always request this documentation in writing.</li>
                  <li>A non-referral notice from the NCR is not the end. It is the key to accessing the National Consumer Tribunal directly.</li>
                  <li>Unlawful clauses in credit agreements, including those in supplementary AOD or POA documents signed under pressure, are void from the outset and have no legal effect.</li>
                </ol>
              </div>

              <div className="text-xs space-y-2" style={{borderTop:'1px solid #E2E0D8',paddingTop:'24px',color:'#888780'}}>
                <p><strong style={{color:'#0C447C'}}>Primary legislation:</strong> National Credit Act 34 of 2005 (sections 80, 81, 83, 86, 90, 91, 141); Consumer Protection Act 68 of 2008 (section 75)</p>
                <p><strong style={{color:'#0C447C'}}>Regulatory guidelines:</strong> NCR Suspected Reckless Lending Investigation Guidelines 005/2025 (November 2025)</p>
                <p><strong style={{color:'#0C447C'}}>Key cases:</strong> Annet Ludick v First National Bank (NCT); Barko Financial Services v National Credit Regulator (SCA)</p>
                <p>This module is for educational purposes only and does not constitute legal advice. For advice specific to your situation, consult a qualified South African attorney or registered debt counsellor.</p>
              </div>

            </article>

            <aside style={{position:'sticky',top:'80px'}}>
              <div className="rounded-2xl overflow-hidden" style={{border:'1px solid #c5d8ef'}}>
                <div style={{backgroundColor:'#1a2340',padding:'14px 18px'}}>
                  <p className="text-xs font-bold tracking-widest uppercase" style={{color:'#8fa8cc'}}>Content contributor</p>
                </div>
                <div style={{backgroundColor:'#f0f5fc',padding:'20px'}}>
                  <div className="inline-block text-xs font-bold tracking-wide uppercase px-3 py-1 rounded mb-3" style={{backgroundColor:'#1a2340',color:'#b3d0f0'}}>Before You Sign</div>
                  <p className="font-bold text-sm mb-1" style={{color:'#1a2340'}}>Mxolisi Mkhonza</p>
                  <p className="text-xs mb-3" style={{color:'#1a5ea5'}}>Consumer Rights Specialist</p>
                  <div className="space-y-2 text-xs" style={{color:'#4a5568'}}>
                    <div><a href="mailto:admin@beforeyousign.co.za" style={{color:'#1a5ea5'}}>admin@beforeyousign.co.za</a></div>
                    <div><a href="https://beforeyousign.co.za" target="_blank" rel="noopener noreferrer" style={{color:'#1a5ea5'}}>beforeyousign.co.za</a></div>
                  </div>
                  <div className="mt-4 pt-4 text-xs leading-relaxed" style={{borderTop:'1px solid #c5d8ef',color:'#718096'}}>
                    Content provided for educational purposes only. Contact Before You Sign directly for credit dispute assistance.
                  </div>
                </div>
              </div>
              <a href="/learn" className="flex items-center gap-2 mt-4 text-sm font-medium" style={{color:'#1a5ea5'}}>← Back to all modules</a>
              <div className="rounded-xl mt-4 p-4" style={{backgroundColor:'#1a2340'}}>
                <p className="text-xs font-bold mb-2" style={{color:'#8fa8cc'}}>Next module</p>
                <a href="/learn/renting-rht" className="text-sm font-medium" style={{color:'#ffffff'}}>Renting and the Rental Housing Tribunal →</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}