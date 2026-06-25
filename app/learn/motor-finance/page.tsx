export default function MotorFinance() {
  return (
    <main>
      <div style={{backgroundColor:'#1a5ea5',padding:'48px 0 40px'}}>
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:'rgba(255,255,255,0.65)'}}>Motor · Module 2 of 2</p>
          <h1 className="text-3xl font-bold mb-3" style={{color:'#ffffff'}}>Vehicle Finance, Warranties and Insurance: What the Industry Won't Always Tell You</h1>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:'0.88rem'}}>Approx. 22 min read · Last reviewed June 2026</p>
        </div>
      </div>
      <div style={{backgroundColor:'#ffffff'}}>
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div style={{display:'grid',gridTemplateColumns:'1fr 260px',gap:'48px',alignItems:'start'}}>
            <article style={{minWidth:0,color:'#1a1a1a'}}>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>What you will learn</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>The difference between a warranty, a service plan, and a maintenance plan</li>
                  <li>How vehicle finance actually works and what you are signing</li>
                  <li>What comprehensive insurance covers and what it does not</li>
                  <li>How your credit score directly affects your interest rate</li>
                  <li>Why balloon payments can trap you and what to do instead</li>
                  <li>What a Finance and Insurance manager does and how to use them correctly</li>
                </ul>
              </div>

              <div className="rounded-lg p-4 mb-8" style={{backgroundColor:'#F5F4F0'}}>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:'#888780'}}>In this module</p>
                <ol className="text-sm space-y-1 list-decimal list-inside" style={{color:'#0C447C'}}>
                  <li>Warranties, service plans, and maintenance plans</li>
                  <li>How vehicle finance works</li>
                  <li>Your credit score and your interest rate</li>
                  <li>Balloon payments</li>
                  <li>Comprehensive insurance explained</li>
                  <li>Credit shortfall insurance</li>
                  <li>The Finance and Insurance manager</li>
                  <li>The true cost of owning a vehicle</li>
                  <li>Key takeaways</li>
                </ol>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>1. Warranties, service plans, and maintenance plans</h2>
              <p className="text-gray-700 mb-4">These three products are frequently confused, and dealers do not always explain the differences clearly. Understanding what each one covers could save you tens of thousands of rands.</p>

              <h3 className="text-lg font-bold mt-6 mb-2" style={{color:'#185FA5'}}>Warranty</h3>
              <p className="text-gray-700 mb-4">A warranty covers the cost of repairing or replacing components that fail due to a manufacturing defect or faulty materials. It does not cover normal wear and tear, accident damage, or negligent use. Most new vehicles come with a manufacturer's warranty. Used vehicles may have a remaining portion of the original warranty, a dealer warranty (which can be very limited), or no warranty at all.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>Warranty vs CPA implied warranty</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>A manufacturer or dealer warranty is a separate contractual product. Your CPA implied warranty (section 56) exists independently of it and gives you six months of statutory protection regardless of what any written warranty says. The two exist simultaneously. Never let a dealer tell you your only recourse is the written warranty.</p>
              </div>

              <h3 className="text-lg font-bold mt-6 mb-2" style={{color:'#185FA5'}}>Service plan</h3>
              <p className="text-gray-700 mb-4">A service plan covers the cost of scheduled, routine servicing, such as oil changes, filters, and inspections at specified intervals. It does not cover repairs. If your engine fails, a service plan pays nothing. Its value is convenience and cost certainty for predictable maintenance events.</p>

              <h3 className="text-lg font-bold mt-6 mb-2" style={{color:'#185FA5'}}>Maintenance plan</h3>
              <p className="text-gray-700 mb-4">A maintenance plan is broader than a service plan. It covers both scheduled services and certain wear and tear items such as brake pads, wiper blades, and tyres, depending on the specific plan. It still does not cover accident damage or mechanical failures caused by defects, which fall under warranty. A maintenance plan is particularly valuable on high-kilometre vehicles where wear components cost more to replace.</p>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>The gap that catches buyers out</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>A warranty does not cover wear. A service plan does not cover repairs. A maintenance plan covers some wear but not defects. For complete protection you typically need all three, or a combined product. Always ask the dealer to list exactly what is and is not covered in writing before signing.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>2. How vehicle finance works</h2>
              <p className="text-gray-700 mb-4">When you finance a vehicle, you are entering into an instalment sale agreement. The bank or finance house purchases the vehicle and you pay them back over an agreed term, usually 48 to 72 months, with interest. You only become the legal owner once the final payment is made.</p>
              <p className="text-gray-700 mb-4">Until that final payment, the bank owns the vehicle. This has practical consequences: the bank can repossess the vehicle if you default on payments, and your comprehensive insurance must name the bank as an interested party.</p>
              <div className="space-y-3 mb-6">
                {[
                  {n:'1',t:'Deposit',d:'An upfront payment that reduces the amount you need to finance. A larger deposit means lower monthly payments and less interest paid overall. Banks generally require a minimum deposit of 10%, though this varies.'},
                  {n:'2',t:'Balloon payment',d:'A large lump sum due at the end of your finance term. It reduces monthly payments significantly but means you owe a substantial amount at the end. Many buyers are not financially prepared for this.'},
                  {n:'3',t:'Interest rate',d:'Linked to the prime lending rate. Always ask whether your rate is fixed or linked to prime. A linked rate means your payments can increase if the prime rate rises. A fixed rate provides certainty but may be slightly higher at the outset.'},
                  {n:'4',t:'Total cost of credit',d:'The NCA requires every credit provider to show you the total cost of credit before you sign. This is the total amount you will repay including all interest and fees. Always review this figure, not just the monthly instalment.'},
                ].map(p=>(
                  <div key={p.n} className="flex gap-4 p-4 rounded-xl" style={{border:'1px solid #E2E0D8'}}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#185FA5'}}>{p.n}</div>
                    <div><p className="font-semibold text-sm mb-1" style={{color:'#0C447C'}}>{p.t}</p><p className="text-sm" style={{color:'#374151'}}>{p.d}</p></div>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>3. Your credit score and your interest rate</h2>
              <p className="text-gray-700 mb-4">Your credit score is one of the most powerful factors determining what interest rate a bank will offer you on vehicle finance. A higher score signals lower risk to the lender, and lower risk means a lower interest rate. Even a 2% to 3% difference in your interest rate translates to more than R20,000 in additional interest on a typical vehicle finance deal over 60 months.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0C447C'}}>Credit score ranges (South African context)</p>
                <div style={{overflowX:'auto'}}>
                  <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.8rem'}}>
                    <thead>
                      <tr style={{backgroundColor:'#185FA5',color:'#fff'}}>
                        <th style={{padding:'8px 12px',textAlign:'left'}}>Score range</th>
                        <th style={{padding:'8px 12px',textAlign:'left'}}>Rating</th>
                        <th style={{padding:'8px 12px',textAlign:'left'}}>Likely outcome</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['767 and above','Excellent','Best available rates, fast approval'],
                        ['681 to 766','Good','Competitive rates, likely approval'],
                        ['614 to 680','Fair','Approval possible, higher rate likely'],
                        ['583 to 613','Below average','Limited lender options, significantly higher rate'],
                        ['527 to 582','Poor','Unlikely to be approved by major banks'],
                      ].map(([score,rating,outcome],i)=>(
                        <tr key={score} style={{backgroundColor: i%2===0 ? '#fff' : '#F5F4F0'}}>
                          <td style={{padding:'8px 12px',borderBottom:'1px solid #E2E0D8',color:'#1a1a1a'}}>{score}</td>
                          <td style={{padding:'8px 12px',borderBottom:'1px solid #E2E0D8',color:'#1a1a1a'}}>{rating}</td>
                          <td style={{padding:'8px 12px',borderBottom:'1px solid #E2E0D8',color:'#1a1a1a'}}>{outcome}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Before applying for vehicle finance, check your credit report for errors. Dispute any incorrect negative information. Pay down existing debt where possible. Avoid applying for multiple credit products in the weeks before your vehicle finance application, as each inquiry leaves a mark on your report.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>4. Balloon payments</h2>
              <p className="text-gray-700 mb-4">A balloon payment is an arrangement where a portion of the vehicle's purchase price, typically 20% to 30%, is deferred to the end of the finance term. This reduces your monthly instalment but creates a large lump sum liability at the end.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#FBEAF0',borderLeft:'4px solid #993556'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#993556'}}>What happens at the end of the balloon term</p>
                <p className="text-sm mb-2" style={{color:'#1a1a1a'}}>When the balloon payment falls due, you have three options: pay it in cash, refinance it (taking on a new loan with new interest), or trade in the vehicle and use the equity to settle it. If the vehicle has depreciated more than expected, you may find yourself in negative equity, meaning the car is worth less than you owe.</p>
              </div>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>The balloon trap</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Balloon payments are often used to make an unaffordable vehicle appear affordable. If you cannot comfortably afford the vehicle without the balloon payment reducing the instalment, you likely cannot afford the vehicle. Never use a balloon payment to stretch into a vehicle outside your budget.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>5. Comprehensive insurance explained</h2>
              <p className="text-gray-700 mb-4">Comprehensive insurance covers your vehicle against accidents, theft, fire, and certain natural disasters. It also covers third-party liability for damage your vehicle causes to other people's property. What it does not cover is mechanical failure, which falls under warranty, or wear and tear items.</p>
              <p className="text-gray-700 mb-4">Most banks require you to hold comprehensive insurance for the full duration of any finance agreement. This is a condition of the loan, not optional. If you allow your insurance to lapse, the bank can take action against you for breach of the finance agreement.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0C447C'}}>Insured value: agreed value vs retail value vs market value</p>
                <div style={{overflowX:'auto'}}>
                  <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.8rem'}}>
                    <thead>
                      <tr style={{backgroundColor:'#185FA5',color:'#fff'}}>
                        <th style={{padding:'8px 12px',textAlign:'left'}}>Type</th>
                        <th style={{padding:'8px 12px',textAlign:'left'}}>What it means</th>
                        <th style={{padding:'8px 12px',textAlign:'left'}}>Best for</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Agreed value','A fixed payout amount agreed at policy inception, regardless of market value at claim time','Older or classic vehicles with stable value'],
                        ['Retail value','The amount a dealer would charge for the vehicle at time of claim','Most consumers, gives highest payout'],
                        ['Market value','The private sale value at time of claim, typically lower than retail','Lower premiums, lower payout'],
                      ].map(([type,meaning,best],i)=>(
                        <tr key={type} style={{backgroundColor: i%2===0 ? '#fff' : '#F5F4F0'}}>
                          <td style={{padding:'8px 12px',borderBottom:'1px solid #E2E0D8',fontWeight:600,color:'#0C447C'}}>{type}</td>
                          <td style={{padding:'8px 12px',borderBottom:'1px solid #E2E0D8',color:'#1a1a1a'}}>{meaning}</td>
                          <td style={{padding:'8px 12px',borderBottom:'1px solid #E2E0D8',color:'#1a1a1a'}}>{best}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>6. Credit shortfall insurance</h2>
              <p className="text-gray-700 mb-4">Credit shortfall insurance, sometimes called gap cover, covers the difference between what your comprehensive insurer pays out on a write-off and what you still owe the bank on your finance agreement.</p>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>The gap that catches people out</p>
                <p className="text-sm mb-2" style={{color:'#1a1a1a'}}>Example: your car is written off in an accident. Your insurer pays out R180,000 based on market value. You still owe R220,000 to the bank. Your insurer's payment goes directly to the bank, leaving you personally responsible for the remaining R40,000. Without credit shortfall insurance, you owe R40,000 for a car you no longer have.</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Credit shortfall insurance covers that R40,000 gap. It is particularly important in the first two to three years of a finance agreement, when depreciation is steepest and the gap between insurance payout and finance balance is largest.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>7. The Finance and Insurance manager</h2>
              <p className="text-gray-700 mb-4">Every franchised dealership employs a Finance and Insurance (F and I) manager. This person handles the financing application, structures the deal, and presents additional products such as warranties, service plans, maintenance plans, insurance, and credit shortfall cover.</p>
              <p className="text-gray-700 mb-4">A good F and I manager is a valuable resource. They have access to multiple lenders simultaneously, can negotiate rates on your behalf, and can structure a finance deal that genuinely works for your financial position. They are also registered financial service providers (FSPs) regulated by the FSCA, which means they have legal obligations around disclosure and advice.</p>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>Your rights in the F and I office</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>You are entitled to a full written quotation for every product presented before you sign anything</li>
                  <li>You are entitled to take documents home and read them before signing</li>
                  <li>No product other than comprehensive insurance (as required by the bank) is compulsory</li>
                  <li>You are entitled to ask for alternative quotes on insurance products from your own broker</li>
                  <li>The F and I manager must disclose all fees and commissions earned on products sold to you</li>
                </ul>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>8. The true cost of owning a vehicle</h2>
              <p className="text-gray-700 mb-4">The monthly instalment is only one component of what a vehicle actually costs you each month. Many buyers focus on the instalment and ignore the full picture, which leads to vehicles that genuinely strain household budgets.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0C447C'}}>Example: full monthly cost of a R300,000 vehicle</p>
                <div style={{overflowX:'auto'}}>
                  <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.8rem'}}>
                    <thead>
                      <tr style={{backgroundColor:'#185FA5',color:'#fff'}}>
                        <th style={{padding:'8px 12px',textAlign:'left'}}>Cost</th>
                        <th style={{padding:'8px 12px',textAlign:'left'}}>Monthly amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Finance instalment','R5,200'],
                        ['Comprehensive insurance','R1,600'],
                        ['Fuel (est. 1,500km per month)','R2,100'],
                        ['Maintenance (no plan, averaged)','R600'],
                        ['Licence (annualised)','R150'],
                      ].map(([cost,amount],i)=>(
                        <tr key={cost} style={{backgroundColor: i%2===0 ? '#fff' : '#F5F4F0'}}>
                          <td style={{padding:'8px 12px',borderBottom:'1px solid #E2E0D8',color:'#1a1a1a'}}>{cost}</td>
                          <td style={{padding:'8px 12px',borderBottom:'1px solid #E2E0D8',color:'#1a1a1a'}}>{amount}</td>
                        </tr>
                      ))}
                      <tr style={{backgroundColor:'#E6F1FB'}}>
                        <td style={{padding:'8px 12px',fontWeight:700,color:'#0C447C'}}>Total monthly vehicle cost</td>
                        <td style={{padding:'8px 12px',fontWeight:700,color:'#0C447C'}}>R9,650</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-gray-700 mb-4">R9,650 per month represents 32% of a R30,000 take-home salary, well beyond the recommended 20%. And this does not include unexpected repairs on a vehicle outside its manufacturer cover. The instalment looked affordable. The vehicle was not.</p>
              <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0F6E56'}}>The pre-purchase calculation every consumer should do</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Before committing to any vehicle, add up the full monthly cost: instalment, insurance, fuel, maintenance, and licence. If the total pushes you beyond 20% of take-home pay, you either need to rethink the vehicle or ensure your cover eliminates the risk of unexpected repair costs hitting you on top of everything else.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>9. Key takeaways</h2>
              <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0F6E56'}}>Remember these seven things</p>
                <ol className="text-sm space-y-2 list-decimal list-inside" style={{color:'#1a1a1a'}}>
                  <li>A warranty, service plan, and maintenance plan are completely different products. Know what each covers before you decide what you need.</li>
                  <li>Comprehensive insurance covers accidents, theft, and disasters, not mechanical failures. You need both a warranty and insurance for complete protection.</li>
                  <li>If your vehicle is written off and insured at market value, the payout may not cover what you still owe. Ask your broker whether you should be insured at agreed or retail value.</li>
                  <li>Your credit score directly affects your interest rate. A 2 to 3% difference translates to R20,000 or more in additional interest on a typical vehicle finance deal. Protect and improve your score before you apply.</li>
                  <li>A balloon payment defers cost, it does not eliminate it. Never use finance structures to make an unaffordable vehicle seem affordable.</li>
                  <li>Total vehicle costs should not exceed 20% of your take-home pay. The instalment is only one component. Add insurance, fuel, and maintenance before you decide.</li>
                  <li>A good F and I manager is on your side. They can access multiple lenders simultaneously, negotiate rates, and structure a deal that works for your actual financial position.</li>
                </ol>
              </div>

              <div className="text-xs space-y-2" style={{borderTop:'1px solid #E2E0D8',paddingTop:'24px',color:'#888780'}}>
                <p><strong style={{color:'#0C447C'}}>Primary legislation:</strong> National Credit Act 34 of 2005; Consumer Protection Act 68 of 2008</p>
                <p>This module is for educational purposes only and does not constitute financial, legal, or insurance advice. Always obtain personalised advice from a registered financial services provider before making financial commitments.</p>
              </div>

            </article>

            <aside style={{position:'sticky',top:'80px'}}>
              <div className="rounded-2xl overflow-hidden" style={{border:'1px solid #c5d8ef'}}>
                <div style={{backgroundColor:'#1a2340',padding:'14px 18px'}}>
                  <p className="text-xs font-bold tracking-widest uppercase" style={{color:'#8fa8cc'}}>Content contributor</p>
                </div>
                <div style={{backgroundColor:'#f0f5fc',padding:'20px'}}>
                  <div className="inline-block text-xs font-bold tracking-wide uppercase px-3 py-1 rounded mb-3" style={{backgroundColor:'#1a2340',color:'#b3d0f0'}}>Pengelly Autos</div>
                  <p className="font-bold text-sm mb-1" style={{color:'#1a2340'}}>Kyle Pengelly</p>
                  <p className="text-xs mb-3" style={{color:'#1a5ea5'}}>Finance and Insurance Specialist</p>
                  <div className="space-y-2 text-xs" style={{color:'#4a5568'}}>
                    <div><a href="mailto:kyle@pengellyautos.co.za" style={{color:'#1a5ea5'}}>kyle@pengellyautos.co.za</a></div>
                    <div><a href="https://pengellyautos.co.za" target="_blank" rel="noopener noreferrer" style={{color:'#1a5ea5'}}>pengellyautos.co.za</a></div>
                  </div>
                  <div className="mt-4 pt-4 text-xs leading-relaxed" style={{borderTop:'1px solid #c5d8ef',color:'#718096'}}>
                    Content provided for educational purposes only. Contact Pengelly Autos directly for vehicle finance and insurance guidance.
                  </div>
                </div>
              </div>
              <a href="/learn" className="flex items-center gap-2 mt-4 text-sm font-medium" style={{color:'#1a5ea5'}}>← Back to all modules</a>
              <div className="rounded-xl mt-4 p-4" style={{backgroundColor:'#1a2340'}}>
                <p className="text-xs font-bold mb-2" style={{color:'#8fa8cc'}}>Next module</p>
                <a href="/learn/bank-saving" className="text-sm font-medium" style={{color:'#ffffff'}}>Saving vs Investing →</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}