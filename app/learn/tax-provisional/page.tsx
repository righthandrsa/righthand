import PaywallGate from '../../components/PaywallGate';

export default function TaxProvisional() {
  return (
    <PaywallGate>
    <main>
      <div style={{backgroundColor:'#1a5ea5',padding:'48px 0 40px'}}>
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:'rgba(255,255,255,0.65)'}}>Tax · Module 2 of 2</p>
          <h1 className="text-3xl font-bold mb-3" style={{color:'#ffffff'}}>Provisional Tax for Individuals: Freelancers, Side Hustles and Rental Income</h1>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:'0.88rem'}}>Approx. 15 min read · Last reviewed July 2026</p>
        </div>
      </div>

      <div style={{backgroundColor:'#ffffff'}}>
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 lg:gap-12" style={{alignItems:'start'}}>
            <article style={{minWidth:0,color:'#1a1a1a'}}>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>What you will learn</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>What provisional tax is, why it exists, and who it affects</li>
                  <li>Why August is a critical month for freelancers, landlords, and side-hustle earners</li>
                  <li>How to prepare a reasonable IRP6 estimate that is supported by actual records</li>
                  <li>Common mistakes that lead to penalties, and how to avoid them</li>
                </ul>
              </div>

              <div className="rounded-lg p-4 mb-8" style={{backgroundColor:'#F5F4F0'}}>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:'#888780'}}>In this module</p>
                <ol className="text-sm space-y-1 list-decimal list-inside" style={{color:'#0C447C'}}>
                  <li>Why people struggle with provisional tax</li>
                  <li>What the rule means in plain English</li>
                  <li>Who should pay attention in August</li>
                  <li>Step-by-step action plan for the first IRP6</li>
                  <li>Case studies</li>
                  <li>Common mistakes to avoid</li>
                  <li>Cash-flow planning for provisional tax</li>
                  <li>Key takeaways</li>
                </ol>
              </div>

              {/* Intro */}
              <p className="text-gray-700 mb-4">Many South Africans think tax is only something their employer handles through PAYE. That is true for many salary earners, but not for everyone. If you earn income that is not fully taxed before it reaches you, SARS may expect you to estimate and pay tax during the year. This is where provisional tax becomes important — and why August is a critical month for many individuals.</p>
              <p className="text-gray-700 mb-4">Provisional tax is not a separate tax. It is a method of paying normal income tax in advance so that the taxpayer does not face one large bill only after assessment.</p>

              {/* Section 1 */}
              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>1. Why people struggle with provisional tax</h2>
              <p className="text-gray-700 mb-4">The difficulty is not only the calculation. The bigger problem is that many people do not realise they are provisional taxpayers. A weekend business may start informally. A room may be rented out to help with the bond. A freelancer may receive payments without tax being deducted. A commission earner may have fluctuating income. By the time SARS asks questions, the taxpayer may have no proper records, no estimate, and no money set aside for tax.</p>
              <p className="text-gray-700 mb-4">Provisional tax also requires forward thinking. PAYE is deducted from a salary as the salary is paid, but provisional tax asks you to look at the full year and make a reasonable estimate before the year is finished. This can be difficult where income is seasonal, clients pay late, rental vacancies occur, or a side business grows faster than expected.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>The estimate does not need to be perfect</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>It must be reasonable and supported by the information available at the time. A deliberately low estimate to reduce the August payment can result in penalties when the annual assessment is finalised.</p>
              </div>

              {/* Section 2 */}
              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>2. What the rule means in plain English</h2>
              <p className="text-gray-700 mb-4">If tax is not being collected properly through PAYE, SARS may require you to pay estimated tax during the year. You complete an IRP6 provisional tax return, estimate your taxable income for the year, and pay the required amount by the due date. When your annual income tax return is assessed, your provisional payments are credited against the final tax liability.</p>
              <p className="text-gray-700 mb-4">A provisional taxpayer generally makes two payments during the tax year: the first payment six months into the year of assessment and the second payment at the end of the year. A voluntary third payment may also be made after year-end to reduce possible interest where the first two payments were too low.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>Key dates for individuals with a February year-end</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li><strong>First IRP6 payment:</strong> 31 August (six months into the tax year)</li>
                  <li><strong>Second IRP6 payment:</strong> Last day of February (end of the tax year)</li>
                  <li>If a due date falls on a weekend or public holiday, the practical deadline moves to the last business day before that date</li>
                </ul>
              </div>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>Late-payment penalty: 10%</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Missing the deadline can trigger an automatic late-payment penalty of 10% of the provisional tax amount not paid on time — even where the taxpayer is only late by a short period. A R10,000 payment can quickly become R11,000 simply because it was made after the cut-off.</p>
              </div>

              {/* Section 3 */}
              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>3. Who should pay attention in August</h2>
              <p className="text-gray-700 mb-4">The key question is whether you receive income that is not ordinary remuneration from a registered employer with PAYE deducted correctly. If the answer is yes, provisional tax should be considered.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0C447C'}}>You may be a provisional taxpayer if you are:</p>
                <ul className="text-sm space-y-2 list-disc list-inside" style={{color:'#374151'}}>
                  <li>A freelancer who invoices clients directly</li>
                  <li>A side-hustle earner who sells products or offers services for payment</li>
                  <li>A landlord who receives rental income from a room, flat, or property</li>
                  <li>A commission earner whose PAYE may not fully match actual annual income</li>
                  <li>A person with foreign-paid remuneration where the employer does not withhold South African PAYE</li>
                  <li>A person with meaningful investment or interest income outside normal salary</li>
                  <li>A taxpayer who was told by SARS that they are a provisional taxpayer</li>
                </ul>
              </div>
              <p className="text-gray-700 mb-4">Freelancers and side-hustle earners should be particularly careful. A person who designs logos after work, sells baked goods, tutors learners, repairs appliances, drives for a platform, runs an online shop, or provides bookkeeping services may still be earning taxable income. The fact that the activity is part-time, home-based, or paid into a personal bank account does not automatically remove the obligation to declare the income or consider provisional tax.</p>

              {/* Section 4 */}
              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>4. Step-by-step action plan for the first IRP6</h2>
              <p className="text-gray-700 mb-4">Build your estimate from the bottom up — start with actual income received, add a realistic forecast, then deduct allowable expenses.</p>
              {[
                {n:'1',t:'List every source of income expected for the full tax year',d:'Include salary, freelance income, rental income, commission, investment income, and any other source.'},
                {n:'2',t:'Separate salary income from income without PAYE withheld',d:'PAYE income and untaxed income are handled differently in the estimate.'},
                {n:'3',t:'Estimate gross income realistically',d:'Use actual income received to date and a sensible forecast for the remaining months of the tax year.'},
                {n:'4',t:'List allowable expenses and keep proof',d:'Only expenses actually connected to earning income that can be supported with documents. Separate private spending from business expenses — only the business portion counts.'},
                {n:'5',t:'Estimate taxable income for the full year',d:'Not only for the first six months — the IRP6 estimate covers the entire tax year.'},
                {n:'6',t:'Account for PAYE already deducted',d:'PAYE deducted from a salary reduces the amount still payable. The IRP6 should look at total taxable income and recognise all credits.'},
                {n:'7',t:'Complete the IRP6 on eFiling',d:'Review pre-populated details carefully before submitting.'},
                {n:'8',t:'Submit and pay by the due date',d:'Allow enough time for payment to clear. Save the IRP6, proof of payment, and calculation notes.'},
              ].map(step => (
                <div key={step.n} className="rounded-lg p-4 mb-3" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#185FA5'}}>{step.n}</div>
                    <p className="font-bold text-sm" style={{color:'#0C447C'}}>{step.t}</p>
                  </div>
                  <p className="text-sm" style={{color:'#374151'}}>{step.d}</p>
                </div>
              ))}
              <div className="rounded-lg p-5 mb-4 mt-4" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>Allowable expenses — common examples</p>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px'}}>
                  <div>
                    <p className="font-bold text-xs mb-1" style={{color:'#0C447C'}}>Freelancer</p>
                    <p className="text-xs" style={{color:'#374151'}}>Business internet, software subscriptions, stationery, advertising, professional fees, bank charges, travel directly linked to earning income</p>
                  </div>
                  <div>
                    <p className="font-bold text-xs mb-1" style={{color:'#0C447C'}}>Landlord</p>
                    <p className="text-xs" style={{color:'#374151'}}>Municipal charges, levies, repairs, insurance, agent fees, and interest on the bond where applicable</p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>5. Case studies</h2>
              {[
                {n:'1',t:'Bradley — salary only, no provisional tax',d:'Bradley earns one salary and his employer deducts PAYE every month. He has no rental income, no freelance income, and no other taxable income outside his salary. He is usually not dealing with provisional tax because his employer is already paying tax over to SARS through PAYE.'},
                {n:'2',t:'Nandi — salary, freelance bookkeeping, and rental income',d:'Nandi has a salary but also earns R8,000 a month from bookkeeping clients and receives rental income from a flat. PAYE is deducted from her salary but not from the freelance or rental income. In August, she estimates her total taxable income for the year, subtracts allowable expenses and PAYE already deducted, and prepares the first provisional payment. If she waits until annual filing season, she may face a large tax debt and possible penalties or interest.'},
                {n:'3',t:'Graphic designer — evening and weekend freelance income',d:'A designer works full time during the week but earns additional income from design work on evenings and weekends. By August, she has already earned R48,000 from freelance projects and expects another R60,000 before February. She also pays for design software, advertising, and business-related internet usage. Her provisional tax estimate includes the expected full-year freelance income, deducts allowable expenses, and combines the result with her salary income and PAYE already deducted.'},
                {n:'4',t:'Yusuf — rental income used immediately for the bond',d:'Yusuf rents out a garden flat for R6,500 a month. The rent helps him pay the bond, so he assumes there is no tax issue because the money is immediately used. This is a common mistake. The rental income must still be considered, and allowable expenses must be identified separately. If the property produces taxable rental profit after allowable deductions, Yusuf may need to include that amount in his provisional tax estimate.'},
                {n:'5',t:'Thabo — two employers, both deducting PAYE',d:'Thabo works for two employers during the same tax year and both deduct PAYE from the salary they pay him. Each employer calculates PAYE only on the income it pays, without seeing the income from the other employer. When Thabo submits his annual return, SARS combines the two IRP5 certificates and calculates tax on his total income. The combined income may place him in a higher bracket, leaving an amount payable even though PAYE was deducted every month. Taxpayers with more than one income source should not assume that PAYE has fully covered their tax liability.'},
                {n:'6',t:'Lerato — irregular commission income',d:'Lerato earns commission in some months and very little in others. Her PAYE may not always match the final annual tax position because her income changes during the year. For the August IRP6, she should not use the highest month or the lowest month in isolation. A better method is to review actual commission earned to date, confirmed pipeline income, expected seasonal patterns, and prior-year results — then keep a note explaining how the estimate was calculated.'},
              ].map(c => (
                <div key={c.n} className="rounded-lg p-4 mb-3" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#185FA5'}}>{c.n}</div>
                    <p className="font-bold text-sm" style={{color:'#0C447C'}}>{c.t}</p>
                  </div>
                  <p className="text-sm" style={{color:'#374151'}}>{c.d}</p>
                </div>
              ))}

              {/* Section 6 */}
              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>6. Common mistakes to avoid</h2>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#854F0B'}}>These mistakes lead to penalties, interest, or unexpected tax bills</p>
                <ul className="text-sm space-y-2 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>Assuming a small side hustle is automatically tax-free</li>
                  <li>Using bank deposits as income records without explaining what each deposit relates to</li>
                  <li>Forgetting rental income because it is used immediately to pay the bond</li>
                  <li>Assuming PAYE is enough where income comes from more than one employer or source</li>
                  <li>Claiming private expenses as business expenses</li>
                  <li>Estimating too low to reduce the August payment</li>
                  <li>Submitting the IRP6 but forgetting to make the payment</li>
                  <li>Missing the 31 August deadline and triggering an automatic 10% late-payment penalty</li>
                  <li>Paying at the last minute without allowing enough time for bank processing</li>
                  <li>Failing to keep calculation notes that explain how the estimate was reached</li>
                </ul>
              </div>
              <p className="text-gray-700 mb-4">One of the most serious mistakes is deliberately estimating too low to protect short-term cash flow. This may feel helpful in August, but it can create a larger problem later. If the annual assessment shows that the estimate was not reasonable, the taxpayer may face penalties and interest.</p>
              <p className="text-gray-700 mb-4">Another common mistake is treating record-keeping as something to fix at year-end. By the time annual filing season arrives, receipts may be missing, bank descriptions may be unclear, and you may no longer remember which deposits were customer payments, reimbursements, loans, or transfers between accounts. Good provisional tax preparation starts with monthly records.</p>

              {/* Section 7 */}
              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>7. Cash-flow planning for provisional tax</h2>
              <p className="text-gray-700 mb-4">Provisional tax is not only a compliance issue — it is also a cash-flow issue. A taxpayer who receives untaxed income should consider setting aside a percentage of each payment for tax before spending the balance. The correct percentage will depend on the taxpayer's full income level, deductions, rebates, credits, and PAYE already deducted, but the habit of reserving funds is important.</p>
              <p className="text-gray-700 mb-4">Freelancers and landlords should also remember that taxable profit is not the same as cash available. A client may pay late, a tenant may skip rent, repairs may arise suddenly, or business costs may increase. It is sensible to review the estimate before submission and test whether the payment is affordable. If the amount appears unaffordable, the solution should be to review the calculation and cash-flow plan — not to submit an unrealistic estimate.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0F6E56'}}>A practical habit</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Each time you receive untaxed income, set aside a portion for tax into a separate savings account. This prevents the August and February payments from feeling like unexpected bills, even though they relate to income already earned.</p>
              </div>

              {/* Section 8 */}
              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>8. Key takeaways</h2>
              <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0F6E56'}}>August provisional tax checklist</p>
                <ul className="text-sm space-y-2 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>Decide whether you may be a provisional taxpayer</li>
                  <li>List all income sources for the full tax year</li>
                  <li>Separate PAYE-taxed salary from untaxed income</li>
                  <li>Prepare a realistic annual taxable-income estimate</li>
                  <li>Keep proof for business, rental, freelance, or commission expenses</li>
                  <li>Submit the IRP6 on time if provisional tax applies</li>
                  <li>Deadline: 31 August for the first period; last day of February for the second — move to the preceding business day if it falls on a weekend or public holiday</li>
                  <li>Pay on time and save proof of payment</li>
                  <li>Ask a registered tax practitioner for help if income is irregular, foreign, or difficult to estimate</li>
                </ul>
              </div>
              <p className="text-gray-700 mb-4">August is an important checkpoint for individuals who earn income outside ordinary PAYE-taxed employment. The safest approach is to identify all income sources, estimate the full year honestly, deduct only allowable and supported expenses, account for PAYE already paid, submit the IRP6 on time, and keep calculation notes.</p>
              <p className="text-gray-700 mb-8">A reasonable August estimate gives you better control over cash flow, reduces the risk of penalties and interest, and supports a smoother annual tax assessment. Where the facts are complicated, professional advice should be obtained before the deadline — not after SARS has raised queries.</p>

              <div className="text-xs space-y-2" style={{borderTop:'1px solid #E2E0D8',paddingTop:'24px',color:'#888780'}}>
                <p><strong style={{color:'#0C447C'}}>Primary legislation:</strong> Income Tax Act 58 of 1962 · Tax Administration Act 28 of 2011</p>
                <p>This module is for educational purposes only and does not constitute tax or financial advice. Consult a registered tax practitioner for advice specific to your circumstances.</p>
              </div>

            </article>

            <aside style={{position:'sticky',top:'80px'}}>
              <a href="/learn" className="flex items-center gap-2 mt-4 text-sm font-medium" style={{color:'#1a5ea5'}}>← Back to all modules</a>
              <div className="rounded-xl mt-4 p-4" style={{backgroundColor:'#1a2340'}}>
                <p className="text-xs font-bold mb-2" style={{color:'#8fa8cc'}}>Tax · Module 1</p>
                <a href="/learn/tax-sars-profile" className="text-sm font-medium" style={{color:'#ffffff'}}>← Getting SARS-Ready</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
    </PaywallGate>
  );
}
