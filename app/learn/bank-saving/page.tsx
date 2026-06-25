export default function BankSaving() {
  return (
    <main>
      <div style={{backgroundColor:'#1a5ea5',padding:'48px 0 40px'}}>
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:'rgba(255,255,255,0.65)'}}>Banking · Module 1 of 2</p>
          <h1 className="text-3xl font-bold mb-3" style={{color:'#ffffff'}}>Saving vs Investing: Building Long-Term Wealth</h1>
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
                  <li>The real difference between saving and investing, and why inflation makes this distinction matter</li>
                  <li>How compounding works, with real numbers showing how dramatically time changes your returns</li>
                  <li>How to understand your own risk profile before choosing where to put your money</li>
                  <li>The six major asset classes and what each actually offers</li>
                  <li>What diversification really does, and what it cannot do</li>
                  <li>How dividends work and how they are taxed in South Africa</li>
                </ul>
              </div>

              <div className="rounded-lg p-4 mb-8" style={{backgroundColor:'#F5F4F0'}}>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:'#888780'}}>In this module</p>
                <ol className="text-sm space-y-1 list-decimal list-inside" style={{color:'#0C447C'}}>
                  <li>Saving vs investing</li>
                  <li>The power of compounding</li>
                  <li>Understanding your risk profile</li>
                  <li>The six major asset classes</li>
                  <li>Shares and ETFs explained</li>
                  <li>Diversification</li>
                  <li>Dividends and how they are taxed</li>
                  <li>Key takeaways</li>
                </ol>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>1. Saving vs investing</h2>
              <p className="text-gray-700 mb-4">Saving and investing are not the same thing, and using the wrong tool for the job is one of the most common and costly financial mistakes South Africans make.</p>
              <p className="text-gray-700 mb-4">Saving means putting money aside in a safe, accessible place, like a savings account or money market account, where it earns modest, predictable interest. The value of your savings does not go down. The trade-off is that the returns are low, often below inflation.</p>
              <p className="text-gray-700 mb-4">Investing means putting money into assets, such as shares, unit trusts, property, or bonds, with the expectation of higher returns over time. Unlike saving, investing carries risk. The value of investments can go down as well as up. The reward for accepting that risk, over long periods, is significantly higher returns.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0C447C'}}>Saving vs investing: which tool for which goal</p>
                <div style={{overflowX:'auto'}}>
                  <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.8rem'}}>
                    <thead>
                      <tr style={{backgroundColor:'#185FA5',color:'#fff'}}>
                        <th style={{padding:'8px 12px',textAlign:'left'}}>Goal</th>
                        <th style={{padding:'8px 12px',textAlign:'left'}}>Time horizon</th>
                        <th style={{padding:'8px 12px',textAlign:'left'}}>Right tool</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Emergency fund','Immediate access needed','Savings account or money market'],
                        ['Planned purchase within 1 to 3 years','Short term','Savings account or fixed deposit'],
                        ['Children\'s education in 10 years','Medium term','Unit trusts or ETFs'],
                        ['Retirement in 20 or more years','Long term','Retirement annuity, ETFs, TFSA'],
                      ].map(([goal,time,tool],i)=>(
                        <tr key={goal} style={{backgroundColor:i%2===0?'#fff':'#F5F4F0'}}>
                          <td style={{padding:'8px 12px',borderBottom:'1px solid #E2E0D8',color:'#1a1a1a'}}>{goal}</td>
                          <td style={{padding:'8px 12px',borderBottom:'1px solid #E2E0D8',color:'#1a1a1a'}}>{time}</td>
                          <td style={{padding:'8px 12px',borderBottom:'1px solid #E2E0D8',color:'#1a1a1a'}}>{tool}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>The inflation problem with saving</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>If inflation runs at 6% per year and your savings account pays 4%, you are losing 2% of purchasing power every year, even though your balance is growing. Money that does not outpace inflation is quietly losing value. This is why saving alone is not a long-term wealth strategy.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>2. The power of compounding</h2>
              <p className="text-gray-700 mb-4">Compounding means earning returns not just on your original money, but also on the returns you have already earned. Over time, this creates a snowball effect that accelerates the growth of your money significantly. Albert Einstein reportedly called compound interest the eighth wonder of the world. Whether or not he said it, the mathematics are undeniable.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0C447C'}}>What R1,000 per month grows to at 10% per year</p>
                <div style={{overflowX:'auto'}}>
                  <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.8rem'}}>
                    <thead>
                      <tr style={{backgroundColor:'#185FA5',color:'#fff'}}>
                        <th style={{padding:'8px 12px',textAlign:'left'}}>Years invested</th>
                        <th style={{padding:'8px 12px',textAlign:'left'}}>Total contributed</th>
                        <th style={{padding:'8px 12px',textAlign:'left'}}>Total value</th>
                        <th style={{padding:'8px 12px',textAlign:'left'}}>Growth from compounding</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['10 years','R120,000','R204,000','R84,000'],
                        ['20 years','R240,000','R765,000','R525,000'],
                        ['30 years','R360,000','R2,260,000','R1,900,000'],
                        ['40 years','R480,000','R6,370,000','R5,890,000'],
                      ].map(([years,contributed,value,growth],i)=>(
                        <tr key={years} style={{backgroundColor:i%2===0?'#fff':'#F5F4F0'}}>
                          <td style={{padding:'8px 12px',borderBottom:'1px solid #E2E0D8',color:'#1a1a1a'}}>{years}</td>
                          <td style={{padding:'8px 12px',borderBottom:'1px solid #E2E0D8',color:'#1a1a1a'}}>{contributed}</td>
                          <td style={{padding:'8px 12px',borderBottom:'1px solid #E2E0D8',fontWeight:600,color:'#0C447C'}}>{value}</td>
                          <td style={{padding:'8px 12px',borderBottom:'1px solid #E2E0D8',color:'#0F6E56'}}>{growth}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0F6E56'}}>Why starting early makes a massive difference</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Someone who invests R500 per month from age 25 will accumulate significantly more by retirement than someone who invests R1,000 per month from age 40, even though the late starter puts in more money each month. Time is the most powerful ingredient in compound growth. Starting early, even with small amounts, beats starting late with large amounts almost every time.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>3. Understanding your risk profile</h2>
              <p className="text-gray-700 mb-4">Your risk profile is a measure of how much investment volatility you can tolerate without making panicked decisions. It is shaped by two things: your ability to take risk (your financial situation, time horizon, and income stability) and your willingness to take risk (your emotional response to seeing your portfolio fall in value).</p>
              <p className="text-gray-700 mb-4">A 30-year-old with stable income, no debt, and a 30-year investment horizon can afford to take significant risk because they have time to recover from downturns. A 58-year-old approaching retirement with limited other assets cannot, because a major market drop at the wrong moment could permanently impair their retirement income.</p>
              <div className="space-y-3 mb-6">
                {[
                  {n:'1',t:'Conservative',d:'Prioritises capital preservation over growth. Suited to investors close to needing the money, or those who cannot tolerate any possibility of loss. Typically holds mostly cash and bonds. Returns will likely be modest, possibly below inflation over long periods.'},
                  {n:'2',t:'Moderate',d:'Balances growth and stability. A mix of equities and fixed income. Accepts some short-term volatility in exchange for better long-term returns. Suited to medium-term goals of five to fifteen years.'},
                  {n:'3',t:'Aggressive',d:'Prioritises maximum long-term growth. Holds mostly equities and accepts significant short-term volatility. Suited to long investment horizons of fifteen or more years and investors who will not panic-sell during downturns.'},
                ].map(p=>(
                  <div key={p.n} className="flex gap-4 p-4 rounded-xl" style={{border:'1px solid #E2E0D8'}}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#185FA5'}}>{p.n}</div>
                    <div><p className="font-semibold text-sm mb-1" style={{color:'#0C447C'}}>{p.t}</p><p className="text-sm" style={{color:'#374151'}}>{p.d}</p></div>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>4. The six major asset classes</h2>
              <p className="text-gray-700 mb-4">An asset class is a category of investment with similar characteristics and behaviour. Different asset classes perform differently under different economic conditions, which is the foundation of diversification.</p>
              {[
                {name:'Cash and cash equivalents',risk:'Low risk',riskColor:'#0F6E56',riskBg:'#E1F5EE',desc:'Savings accounts, money market funds, and fixed deposits. Your capital is protected and returns are predictable but modest. Inflation is the primary enemy. Cash is appropriate for emergency funds and short-term goals, not long-term wealth building.'},
                {name:'Bonds (fixed income)',risk:'Low to medium risk',riskColor:'#854F0B',riskBg:'#FAEEDA',desc:'Loans made to governments or companies that pay a fixed interest rate over a set period. More stable than equities but with lower long-term returns. South African government bonds (RSA Retail Savings Bonds) are a common option for conservative investors.'},
                {name:'Real estate',risk:'Medium risk',riskColor:'#854F0B',riskBg:'#FAEEDA',desc:'Physical property or listed property funds (REITs). Provides rental income and potential capital growth. Illiquid if held directly. REITs offer property exposure without needing to own physical property, and trade on the stock exchange like shares.'},
                {name:'Commodities',risk:'Medium to high risk',riskColor:'#993556',riskBg:'#FBEAF0',desc:'Gold, silver, oil, agricultural products. Prices are driven by global supply and demand and can be highly volatile. Often used as a hedge against inflation and currency weakness. South African investors frequently access commodities through ETFs.'},
                {name:'Cryptocurrencies',risk:'High risk',riskColor:'#993556',riskBg:'#FBEAF0',desc:'Digital assets using blockchain technology. Bitcoin and Ethereum are the best-known examples. Extremely high price volatility, regulatory uncertainty, and no underlying cash flows make these speculative rather than investment-grade assets. Approach with caution and treat as a small, speculative allocation within a diversified portfolio, not a core holding.'},
                {name:'Equities (shares and stocks)',risk:'Medium to high risk',riskColor:'#993556',riskBg:'#FBEAF0',desc:'Partial ownership in companies. The highest-returning asset class over long periods, but also the most volatile in the short term. The JSE All Share Index has historically delivered returns well above inflation over 20-year periods. Equities are the primary driver of long-term wealth in most diversified portfolios.'},
              ].map(a=>(
                <div key={a.name} className="rounded-lg p-4 mb-3" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                  <div className="flex items-center gap-3 mb-2">
                    <p className="font-bold text-sm" style={{color:'#0C447C'}}>{a.name}</p>
                    <span className="text-xs font-bold px-2 py-1 rounded-full" style={{backgroundColor:a.riskBg,color:a.riskColor}}>{a.risk}</span>
                  </div>
                  <p className="text-sm" style={{color:'#374151'}}>{a.desc}</p>
                </div>
              ))}

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>5. Shares and ETFs explained</h2>
              <h3 className="text-lg font-bold mt-6 mb-2" style={{color:'#185FA5'}}>What are shares?</h3>
              <p className="text-gray-700 mb-4">A share represents partial ownership in a company. When you buy shares, you are not simply purchasing a ticker symbol or betting on a price movement. You are becoming a part-owner of a real business. Your investment's value is linked to that company's ability to grow profits, generate cash flow, and create value over time.</p>
              <p className="text-gray-700 mb-4">Shareholders benefit in two ways: through capital growth if the share price increases, and through dividends if the company distributes a portion of its profits. Successful investing means evaluating the quality and long-term prospects of a company, not just watching short-term price movements.</p>
              <h3 className="text-lg font-bold mt-6 mb-2" style={{color:'#185FA5'}}>Exchange Traded Funds (ETFs)</h3>
              <p className="text-gray-700 mb-4">An ETF is an investment fund that holds a collection of assets, such as shares, bonds, or property, and trades on a stock exchange like an ordinary share. Instead of investing in a single company, an ETF gives you exposure to many companies or assets through one investment.</p>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0F6E56'}}>Why ETFs are a strong starting point</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>ETFs are popular among beginner investors because they are simple, cost-effective, and provide instant access to a broad range of markets and sectors in a single purchase. For many investors, ETFs are an excellent foundation for building a diversified long-term portfolio without needing to research and select individual companies.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>6. Diversification</h2>
              <p className="text-gray-700 mb-4">Diversification means spreading your investments across different assets, sectors, geographic regions, and investment types rather than concentrating everything in a single investment. The purpose is to reduce risk so that the poor performance of one investment does not disproportionately damage your overall portfolio.</p>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>What diversification can and cannot do</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Diversification cannot eliminate investment risk or prevent losses during broad market downturns. When markets fall significantly, most asset classes are affected to some degree. What it can do is reduce portfolio volatility and improve the consistency of your long-term returns. For beginner investors, diversification is one of the most effective tools for managing risk while staying invested toward long-term goals.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>7. Dividends and how they are taxed in South Africa</h2>
              <p className="text-gray-700 mb-4">A dividend is a portion of a company's profits paid to shareholders, typically in cash. Not all companies pay dividends. Some choose to reinvest profits back into the business to fund growth instead. Mature, profitable, cash-generative companies are more likely to pay regular dividends.</p>
              <p className="text-gray-700 mb-4">For investors, dividends provide an additional source of return alongside any share price growth. Reinvesting dividends to buy additional shares can significantly enhance your returns over long periods through compounding.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>Dividends tax in South Africa</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Dividends paid by most South African companies are generally subject to Dividends Tax at 20%, usually withheld before the dividend reaches you, meaning you typically receive the net amount after tax. However, dividends earned within a Tax-Free Savings Account (TFSA) are not subject to Dividends Tax, making the TFSA a particularly attractive vehicle for dividend-paying investments.</p>
              </div>
              <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#FBEAF0',borderLeft:'4px solid #993556'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#993556'}}>The high dividend yield trap</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Many investors are drawn to shares with high dividend yields, but a high yield does not always indicate a good investment. In some cases, an unusually high yield signals that investors are worried about the company's future prospects. The share price has fallen, which mathematically inflates the yield percentage. Always evaluate a dividend-paying share based on the overall quality and financial strength of the underlying business, not the yield number alone.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>8. Key takeaways</h2>
              <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0F6E56'}}>Remember these six things</p>
                <ol className="text-sm space-y-2 list-decimal list-inside" style={{color:'#1a1a1a'}}>
                  <li>Saving and investing are different tools for different jobs. Saving protects money you need soon. Investing grows money you will not need for years.</li>
                  <li>Inflation erodes purchasing power. If your money is not growing faster than inflation, you are losing wealth even if your balance is increasing.</li>
                  <li>Never disturb compounding. Time in the market, not timing the market, is the single biggest driver of long-term investment growth.</li>
                  <li>Your risk profile should guide your asset allocation, not your emotions or what is trending. The best strategy is the one you can stick to consistently.</li>
                  <li>ETFs are an excellent, low-cost way for beginners to access diversified markets without picking individual shares.</li>
                  <li>A high dividend yield is not automatically a good sign. It can indicate a falling share price. Always assess the underlying business quality.</li>
                </ol>
              </div>

              <div className="text-xs space-y-2" style={{borderTop:'1px solid #E2E0D8',paddingTop:'24px',color:'#888780'}}>
                <p><strong style={{color:'#0C447C'}}>Primary sources:</strong> General investment principles and South African tax treatment of dividends; historical market return data</p>
                <p>This module is for educational purposes only and does not constitute financial or investment advice. All investments carry risk, including the potential loss of capital. Always obtain personalised advice from a registered financial services provider before making investment decisions.</p>
              </div>

            </article>

            <aside style={{position:'sticky',top:'80px'}}>
              <div className="rounded-2xl overflow-hidden" style={{border:'1px solid #c5d8ef'}}>
                <div style={{backgroundColor:'#1a2340',padding:'14px 18px'}}>
                  <p className="text-xs font-bold tracking-widest uppercase" style={{color:'#8fa8cc'}}>Content contributor</p>
                </div>
                <div style={{backgroundColor:'#f0f5fc',padding:'20px'}}>
                  <div className="rounded-xl flex items-center justify-center mb-4" style={{backgroundColor:'#000000',border:'1px solid #c5d8ef',height:'80px',padding:'12px'}}>
                    <p className="text-xs font-bold text-center" style={{color:'#f97316'}}>SOUL FINANCIAL<br/><span style={{color:'#888780',fontWeight:400}}>logo placeholder</span></p>
                  </div>
                  <p className="font-bold text-sm mb-1" style={{color:'#1a2340'}}>Soul Financial</p>
                  <p className="text-xs mb-3" style={{color:'#1a5ea5'}}>Rochelle Warries, CA(SA)</p>
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
                <p className="text-xs font-bold mb-2" style={{color:'#8fa8cc'}}>Next in Banking</p>
                <a href="/learn/bank-tfsa" className="text-sm font-medium" style={{color:'#ffffff'}}>Tax-Free Savings Accounts →</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}