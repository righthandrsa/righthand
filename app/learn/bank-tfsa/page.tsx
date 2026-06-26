import PaywallGate from '../../components/PaywallGate';
export default function BankTFSA() {
  return (
    <PaywallGate>
    <main>
      <div style={{backgroundColor:'#1a5ea5',padding:'48px 0 40px'}}>
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:'rgba(255,255,255,0.65)'}}>Banking · Module 2 of 2</p>
          <h1 className="text-3xl font-bold mb-3" style={{color:'#ffffff'}}>Tax-Free Savings Accounts: The Complete Guide</h1>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:'0.88rem'}}>Approx. 18 min read · Last reviewed June 2026</p>
        </div>
      </div>
      <div style={{backgroundColor:'#ffffff'}}>
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 lg:gap-12" style={{alignItems:'start'}}>
            <article style={{minWidth:0,color:'#1a1a1a'}}>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>What you will learn</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>What a TFSA is, what it can invest in, and why it is structured to be low-risk by law</li>
                  <li>The exact contribution limits and the costly mistakes that trigger a 40% tax penalty</li>
                  <li>Why cash often does not belong in a TFSA, and what assets make the tax benefit worth it</li>
                  <li>Whether opening a TFSA for your child makes sense, and when it does not</li>
                  <li>How to check your TFSA is correctly reflected on your tax return</li>
                  <li>What happens to a TFSA when the account holder dies</li>
                </ul>
              </div>

              <div className="rounded-lg p-4 mb-8" style={{backgroundColor:'#F5F4F0'}}>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:'#888780'}}>In this module</p>
                <ol className="text-sm space-y-1 list-decimal list-inside" style={{color:'#0C447C'}}>
                  <li>What is a TFSA?</li>
                  <li>Contribution limits: the rules you cannot afford to get wrong</li>
                  <li>The tax benefits explained</li>
                  <li>Should you hold cash or growth assets in your TFSA?</li>
                  <li>TFSAs for children</li>
                  <li>Reporting your TFSA on your tax return</li>
                  <li>What happens to a TFSA when you die</li>
                  <li>Key takeaways</li>
                </ol>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>1. What is a Tax-Free Savings Account?</h2>
              <p className="text-gray-700 mb-4">A Tax-Free Savings Account (TFSA) is an investment account where all growth, including interest, dividends, and capital gains, is completely exempt from tax. You pay no tax on what your money earns inside the account, ever. This makes it one of the most powerful long-term savings tools available to South Africans.</p>
              <p className="text-gray-700 mb-4">TFSAs were introduced in South Africa on 1 March 2015 under section 12T of the Income Tax Act. They are available from banks, insurance companies, unit trust companies, and stockbrokers. Not all TFSAs are equal, and the product you choose inside the TFSA wrapper matters significantly for your long-term returns.</p>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>What you can and cannot hold in a TFSA</p>
                <p className="text-sm mb-2" style={{color:'#1a1a1a'}}>By law, TFSAs may only hold certain approved investments: ETFs listed on a South African exchange, unit trusts (collective investment schemes), fixed deposits, and RSA Government Retail Savings Bonds. You cannot hold individual shares, foreign currency accounts, or cryptocurrency inside a TFSA. This restriction is intentional: it limits the risk profile of the product to protect consumers from total capital loss inside a tax-advantaged vehicle.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>2. Contribution limits: the rules you cannot afford to get wrong</h2>
              <div style={{display:'flex',gap:'12px',margin:'16px 0',flexWrap:'wrap'}}>
                {[
                  {num:'R36,000',label:'Maximum contribution per tax year across all your TFSAs combined'},
                  {num:'R500,000',label:'Maximum lifetime contribution regardless of withdrawals made'},
                ].map(s=>(
                  <div key={s.num} style={{flex:1,minWidth:'140px',backgroundColor:'#E6F1FB',borderRadius:'8px',padding:'14px',textAlign:'center'}}>
                    <div className="font-bold" style={{fontSize:'1.3rem',color:'#0C447C'}}>{s.num}</div>
                    <div className="text-xs mt-1" style={{color:'#185FA5',lineHeight:1.4}}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#FBEAF0',borderLeft:'4px solid #993556'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#993556'}}>The over-contribution penalty</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>If you contribute more than R36,000 in a tax year, SARS will tax the excess at 40%. This is a significant penalty and easy to accidentally trigger if you have multiple TFSAs at different institutions. Each institution reports independently to SARS, so you must track your total contributions across all accounts yourself. Do not rely on your bank to stop you.</p>
              </div>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>The withdrawal trap</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>You can withdraw from a TFSA at any time with no tax consequences. However, the amount you withdraw does not get added back to your annual contribution limit. If you contribute R36,000 and then withdraw R20,000, you cannot top it back up that same year. You have already used your full annual allowance. Withdrawals also count permanently against your R500,000 lifetime limit. Plan very carefully before making any withdrawal.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>3. The tax benefits explained</h2>
              <p className="text-gray-700 mb-4">Outside a TFSA, investment returns are subject to three different taxes depending on their nature.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                <div style={{overflowX:'auto'}}>
                  <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.8rem'}}>
                    <thead>
                      <tr style={{backgroundColor:'#185FA5',color:'#fff'}}>
                        <th style={{padding:'8px 12px',textAlign:'left'}}>Return type</th>
                        <th style={{padding:'8px 12px',textAlign:'left'}}>Outside TFSA</th>
                        <th style={{padding:'8px 12px',textAlign:'left'}}>Inside TFSA</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Interest','Taxed as income above R23,800 annual exemption','Completely tax-free'],
                        ['Dividends','Subject to 20% Dividends Tax','Completely tax-free'],
                        ['Capital gains','Included in income at 40% inclusion rate','Completely tax-free'],
                      ].map(([type,outside,inside],i)=>(
                        <tr key={type} style={{backgroundColor:i%2===0?'#fff':'#F5F4F0'}}>
                          <td style={{padding:'8px 12px',borderBottom:'1px solid #E2E0D8',fontWeight:600,color:'#0C447C'}}>{type}</td>
                          <td style={{padding:'8px 12px',borderBottom:'1px solid #E2E0D8',color:'#993556'}}>{outside}</td>
                          <td style={{padding:'8px 12px',borderBottom:'1px solid #E2E0D8',color:'#0F6E56'}}>{inside}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-gray-700 mb-6">The compounding effect of eliminating these taxes over decades is substantial. Every rand that would otherwise go to SARS stays in your account, earning further returns. Over a 30 to 40 year period, the difference between a taxed and a tax-free investment of the same amount can be hundreds of thousands of rands.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>4. Should you hold cash or growth assets in your TFSA?</h2>
              <p className="text-gray-700 mb-4">This is one of the most important decisions TFSA holders face. Many South Africans open a TFSA at their bank and put it in a cash or fixed deposit product, because it feels familiar and safe. In most cases, this is a significant missed opportunity.</p>
              <p className="text-gray-700 mb-4">South African taxpayers already have a separate annual interest exemption of R23,800 (or R34,500 for those over 65). This means most people pay no tax on their cash interest anyway, making the TFSA's tax benefit on cash returns largely redundant.</p>
              <p className="text-gray-700 mb-4">The TFSA's tax shelter is most valuable on assets that would otherwise attract the highest tax: capital gains and dividends from equity investments. This is where the TFSA earns its keep over the long term.</p>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px',margin:'16px 0'}}>
                <div className="rounded-lg p-4" style={{backgroundColor:'#E1F5EE'}}>
                  <p className="font-bold text-xs mb-2" style={{color:'#0F6E56'}}>Cash can be appropriate in a TFSA if:</p>
                  <ul className="text-xs space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                    <li>You are nearing retirement and need stability</li>
                    <li>The money is needed within the next 3 to 5 years</li>
                    <li>You cannot tolerate market declines</li>
                  </ul>
                </div>
                <div className="rounded-lg p-4" style={{backgroundColor:'#FBEAF0'}}>
                  <p className="font-bold text-xs mb-2" style={{color:'#993556'}}>Growth assets are usually the better default because:</p>
                  <ul className="text-xs space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                    <li>Your interest exemption already covers most cash tax-free</li>
                    <li>Equity returns over decades far outpace cash</li>
                    <li>The TFSA tax shelter is most valuable on assets that would otherwise be heavily taxed</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>5. TFSAs for children</h2>
              <p className="text-gray-700 mb-4">A child's greatest financial advantage is time. Even relatively small contributions made during childhood can compound tax-free for decades before the child even reaches working age.</p>
              <p className="text-gray-700 mb-4">A TFSA can also be a genuinely practical tool to teach children about saving, investing, compound growth, and long-term financial planning. By adulthood, a child with an early TFSA may already have a meaningful investment portfolio and a real understanding of how investing works.</p>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px',margin:'16px 0 24px'}}>
                <div className="rounded-lg p-4" style={{backgroundColor:'#E1F5EE'}}>
                  <p className="font-bold text-xs mb-2" style={{color:'#0F6E56'}}>A child's TFSA is attractive when:</p>
                  <ul className="text-xs space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                    <li>Parents have already maximised their own TFSAs</li>
                    <li>The money is intended to stay invested for decades</li>
                    <li>The investments are growth assets such as equity ETFs, not cash</li>
                    <li>The child is unlikely to need the funds for early-life expenses</li>
                  </ul>
                </div>
                <div className="rounded-lg p-4" style={{backgroundColor:'#FBEAF0'}}>
                  <p className="font-bold text-xs mb-2" style={{color:'#993556'}}>A child's TFSA may be less attractive when:</p>
                  <ul className="text-xs space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                    <li>Parents still have unused TFSA capacity of their own</li>
                    <li>The investment horizon is relatively short</li>
                    <li>The money will likely be withdrawn for university costs</li>
                    <li>The investment is primarily cash or money market funds</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>The real question to ask yourself</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>When opening a TFSA for a child, the biggest question is often whether you are comfortable eventually handing control of the account to a young adult. If your goal is to help fund university, a first car, or a gap year, a TFSA may not be the ideal vehicle, because withdrawals permanently erode valuable contribution room that can never be recovered. If your goal is genuine long-term wealth creation and a head start on retirement savings, starting a TFSA early can be extremely powerful.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>6. Reporting your TFSA on your tax return</h2>
              <p className="text-gray-700 mb-4">The financial institution holding your TFSA will issue you a tax certificate called an IT3(s). This certificate contains the details you need for your tax return, including your contributions, interest, dividends, and other relevant amounts for the year.</p>
              <p className="text-gray-700 mb-4">The institution also sends this same information directly to SARS, who will typically pre-populate it onto your ITR12 under the section called Tax Free Investments on eFiling.</p>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>Always verify the pre-populated figures</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>You must check that the pre-populated information in your ITR12 matches the figures on your IT3(s) tax certificate exactly. Do not assume SARS's pre-population is automatically correct. Discrepancies do happen, and it is your responsibility to catch them before submitting. If you have multiple TFSAs at different institutions, make sure all of them appear correctly.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>7. What happens to a TFSA when you die</h2>
              <p className="text-gray-700 mb-4">All proceeds of a Tax-Free Savings Account, including the deposits you made plus all returns earned prior to death, form part of your estate as defined in the Estate Duty Act.</p>
              <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#FBEAF0',borderLeft:'4px solid #993556'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#993556'}}>TFSAs are not exempt from Estate Duty</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>While your TFSA is shielded from income tax, capital gains tax, and dividends tax during your lifetime, that protection does not extend to Estate Duty. Following the death of the account holder, Estate Duty will be levied on the full value of the TFSA as part of the deceased estate. This is an important consideration in broader estate planning. Discuss this with an estate planning specialist if the value of your TFSA forms a significant part of your overall assets.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>8. Key takeaways</h2>
              <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0F6E56'}}>Remember these six things</p>
                <ol className="text-sm space-y-2 list-decimal list-inside" style={{color:'#1a1a1a'}}>
                  <li>You can only invest in ETFs, unit trusts, fixed deposits, and RSA Government Bonds in a TFSA, never individual shares.</li>
                  <li>The R500,000 limit is on lifetime contributions, not your account balance. Growth above that figure is expected and welcome.</li>
                  <li>Withdrawals do not free up contribution room. Once contributed, that amount counts against your lifetime limit permanently.</li>
                  <li>Unused annual contribution room is forfeited every year. It never rolls over to the following year.</li>
                  <li>Holding cash in a TFSA often wastes valuable tax-free capacity. Your separate R23,800 annual interest exemption already covers most cash returns tax-free. Growth assets like ETFs typically make better use of the TFSA's tax shelter.</li>
                  <li>A TFSA is not exempt from Estate Duty. The full value forms part of your estate when you die.</li>
                </ol>
              </div>

              <div className="text-xs space-y-2" style={{borderTop:'1px solid #E2E0D8',paddingTop:'24px',color:'#888780'}}>
                <p><strong style={{color:'#0C447C'}}>Primary legislation:</strong> Income Tax Act 58 of 1962 (section 12T); Estate Duty Act</p>
                <p><strong style={{color:'#0C447C'}}>Primary sources:</strong> South African Revenue Service (SARS) Tax-Free Savings Account rules and regulations</p>
                <p>This module is for educational purposes only and does not constitute tax, financial, or investment advice. Tax rules, contribution limits, and exemption thresholds are subject to change. Always confirm current limits and obtain personalised advice from a registered tax practitioner or financial advisor before making contribution decisions.</p>
              </div>

            </article>

            <aside style={{position:'sticky',top:'80px'}}>
              <div className="rounded-2xl overflow-hidden" style={{border:'1px solid #c5d8ef'}}>
                <div style={{backgroundColor:'#1a2340',padding:'14px 18px'}}>
                  <p className="text-xs font-bold tracking-widest uppercase" style={{color:'#8fa8cc'}}>Content contributor</p>
                </div>
                <div style={{backgroundColor:'#f0f5fc',padding:'20px'}}>
                  <div className="inline-block text-xs font-bold tracking-wide uppercase px-3 py-1 rounded mb-3" style={{backgroundColor:'#1a2340',color:'#b3d0f0'}}>Soul Financial</div>
                  <p className="font-bold text-sm mb-1" style={{color:'#1a2340'}}>Rochelle Warries</p>
                  <p className="text-xs mb-3" style={{color:'#1a5ea5'}}>Chartered Accountant CA(SA)</p>
                  <div className="space-y-2 text-xs" style={{color:'#4a5568'}}>
                    <div><a href="mailto:rrwarries@gmail.com" style={{color:'#1a5ea5'}}>rrwarries@gmail.com</a></div>
                    <div><a href="https://soulfinancial.co.za" target="_blank" rel="noopener noreferrer" style={{color:'#1a5ea5'}}>soulfinancial.co.za</a></div>
                  </div>
                  <div className="mt-4 pt-4 text-xs leading-relaxed" style={{borderTop:'1px solid #c5d8ef',color:'#718096'}}>
                    Content provided for educational purposes only. Contact Soul Financial directly for personal financial coaching and mentorship.
                  </div>
                </div>
              </div>
              <a href="/learn" className="flex items-center gap-2 mt-4 text-sm font-medium" style={{color:'#1a5ea5'}}>← Back to all modules</a>
              <div className="rounded-xl mt-4 p-4" style={{backgroundColor:'#1a2340'}}>
                <p className="text-xs font-bold mb-2" style={{color:'#8fa8cc'}}>Next module</p>
                <a href="/learn/credit-report" className="text-sm font-medium" style={{color:'#ffffff'}}>Decoding Your Credit Report →</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
    </PaywallGate>
  );
}