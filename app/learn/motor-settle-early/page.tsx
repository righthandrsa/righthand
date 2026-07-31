import PaywallGate from '../../components/PaywallGate';

export default function MotorSettleEarly() {
  return (
    <PaywallGate>
    <main>
      <div style={{backgroundColor:'#1a5ea5',padding:'48px 0 40px'}}>
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:'rgba(255,255,255,0.65)'}}>Motor Rights · Module 4 of 4</p>
          <h1 className="text-3xl font-bold mb-3" style={{color:'#ffffff'}}>Settling Your Car Early: What It Costs and How to Avoid Penalties</h1>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:'0.88rem'}}>Approx. 8 min read · Last reviewed July 2026</p>
        </div>
      </div>

      <div style={{backgroundColor:'#ffffff'}}>
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 lg:gap-12" style={{alignItems:'start'}}>
            <article style={{minWidth:0,color:'#1a1a1a'}}>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>What you will learn</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>Your legal right to settle vehicle finance early under the NCA</li>
                  <li>Exactly when early termination penalties apply — and when they don&apos;t</li>
                  <li>The one simple step that eliminates the penalty entirely</li>
                  <li>How extra payments work and which instruction to give your bank</li>
                </ul>
              </div>

              <div className="rounded-lg p-4 mb-8" style={{backgroundColor:'#F5F4F0'}}>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:'#888780'}}>In this module</p>
                <ol className="text-sm space-y-1 list-decimal list-inside" style={{color:'#0C447C'}}>
                  <li>Your right to settle early</li>
                  <li>When penalty fees apply</li>
                  <li>The notice trick that eliminates the penalty</li>
                  <li>Extra payments — how they work and what to tell the bank</li>
                  <li>Key takeaways</li>
                </ol>
              </div>

              <p className="text-gray-700 mb-4">Got a bonus? An inheritance? A good month? The idea of paying off your car early and being done with it is tempting. But most people have no idea how early settlement actually works — when penalties apply, how much they can cost, and crucially, how to avoid them entirely.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>1. Your right to settle early</h2>
              <p className="text-gray-700 mb-4">The National Credit Act gives you the right to settle your vehicle finance at any time. The bank cannot say no. You request a settlement letter — most banking apps generate one instantly — and it shows your outstanding capital, interest calculated to the settlement date, and any applicable fees.</p>

              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>Two things to know about settlement letters</p>
                <ul className="text-sm space-y-2 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li><strong>Balloon payments are included.</strong> If your deal has a balloon payment, it is part of the settlement figure. It does not disappear — it is owed now, as a lump sum.</li>
                  <li><strong>The letter expires quickly.</strong> Usually within a week, because interest accrues daily. Request it close to when you intend to pay.</li>
                </ul>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>2. When penalty fees apply</h2>
              <p className="text-gray-700 mb-4">Whether you pay an early termination charge comes down to the size of your original finance agreement. That is it.</p>

              <div className="rounded-lg overflow-hidden mb-6" style={{border:'1px solid #E2E0D8'}}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{backgroundColor:'#1a2340',color:'#ffffff'}}>
                      <th className="text-left p-3 font-semibold">Original amount financed</th>
                      <th className="text-left p-3 font-semibold">Early termination penalty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{backgroundColor:'#E1F5EE'}}>
                      <td className="p-3 font-medium" style={{color:'#0F6E56'}}>R250,000 or less</td>
                      <td className="p-3" style={{color:'#374151'}}>No penalty. Pay the capital plus interest to date and you are done.</td>
                    </tr>
                    <tr style={{backgroundColor:'#FEF3F2'}}>
                      <td className="p-3 font-medium" style={{color:'#B91C1C'}}>More than R250,000</td>
                      <td className="p-3" style={{color:'#374151'}}>Bank can charge up to approximately three months&apos; worth of interest on the outstanding balance. On a large deal, this is not small change.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-1" style={{color:'#854F0B'}}>The R250,000 threshold catches more people than it used to</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>With current vehicle prices, most car finance agreements now exceed this threshold. If you financed your vehicle in the last few years, check your original agreement to confirm the amount — do not assume you fall below it.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>3. The notice trick that eliminates the penalty</h2>
              <p className="text-gray-700 mb-4">Here is what most people do not know: the early termination penalty shrinks based on how much notice you give the bank. Give written notice today that you intend to settle in three months&apos; time, and by the time you actually pay, the penalty is gone.</p>

              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0F6E56'}}>One email. Zero penalty.</p>
                <p className="text-sm mb-3" style={{color:'#1a1a1a'}}>Send your bank a written notice that reads something like:</p>
                <div className="rounded p-3 text-sm italic" style={{backgroundColor:'#ffffff',border:'1px solid #A7D7C5',color:'#374151'}}>
                  &ldquo;I hereby give written notice of my intention to settle vehicle finance account number [X] within 90 days.&rdquo;
                </div>
                <p className="text-sm mt-3" style={{color:'#1a1a1a'}}>That one line can save you three months&apos; interest on a large deal. It costs nothing. The bank will not volunteer this information — you have to know to ask.</p>
              </div>

              <p className="text-gray-700 mb-4">If you are not in a rush to settle, give the notice first. Wait out the period. Then settle. Same result, no penalty.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>4. Extra payments — how they work and what to tell the bank</h2>
              <p className="text-gray-700 mb-4">You do not have to choose between settling in full and doing nothing. Paying extra — whether a lump sum or an additional amount each month — chips away at your capital. Because interest is calculated daily on your outstanding balance, every rand you pay in early starts saving you interest from that day forward.</p>
              <p className="text-gray-700 mb-4">But you must tell the bank what you want the extra money to do. You generally have two choices:</p>

              {[
                {t:'Shorten the term, keep the instalment the same',d:'The bank applies the extra payment to reduce your capital, which means you finish the deal earlier. This saves you the most interest overall — sometimes months or years of payments. Best option if you can maintain your current monthly amount.'},
                {t:'Keep the term, reduce the instalment',d:'The bank recalculates a lower monthly payment based on your reduced capital. You save less interest overall, but your monthly obligation becomes easier to manage. Useful if cash flow is tight.'},
              ].map((item,i) => (
                <div key={i} className="rounded-lg p-4 mb-3" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                  <p className="font-bold text-sm mb-1" style={{color:'#0C447C'}}>{item.t}</p>
                  <p className="text-sm" style={{color:'#374151'}}>{item.d}</p>
                </div>
              ))}

              <div className="rounded-lg p-5 mb-4 mt-2" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-1" style={{color:'#854F0B'}}>Give the instruction explicitly</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>If you pay in extra without giving an instruction, some banks park that money as prepaid future instalments rather than reducing your capital. This helps you far less than actually bringing the balance down. One call or written instruction to your bank sorts it out — do not leave it to chance.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>5. Key takeaways</h2>
              <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0F6E56'}}>What to remember</p>
                <ul className="text-sm space-y-2 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>The NCA gives you the unconditional right to settle early — the bank cannot refuse</li>
                  <li>No penalty applies if your original finance amount was R250,000 or less</li>
                  <li>If your deal was over R250,000, the bank can charge up to three months&apos; interest as an early termination fee</li>
                  <li>Give three months&apos; written notice of your intention to settle and the penalty falls away — the bank will not tell you this unprompted</li>
                  <li>Settlement letters expire quickly (usually within a week) — request one close to your payment date</li>
                  <li>Balloon payments are included in your settlement figure — they do not disappear</li>
                  <li>When making extra payments, tell the bank explicitly whether to shorten the term or reduce the instalment</li>
                  <li>If you have higher-rate debt (credit cards, personal loans), consider settling that first before your car finance</li>
                </ul>
              </div>

              <div className="text-xs space-y-2" style={{borderTop:'1px solid #E2E0D8',paddingTop:'24px',color:'#888780'}}>
                <p><strong style={{color:'#0C447C'}}>Primary legislation:</strong> National Credit Act 34 of 2005</p>
                <p>This module is for educational purposes only and does not constitute legal or financial advice. Consult a registered finance professional for advice specific to your circumstances.</p>
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
                    <div><a href="https://kylepengelly.co.za" target="_blank" rel="noopener noreferrer" style={{color:'#1a5ea5'}}>kylepengelly.co.za</a></div>
                  </div>
                  <div className="mt-4 pt-4 text-xs leading-relaxed" style={{borderTop:'1px solid #c5d8ef',color:'#718096'}}>
                    Content provided for educational purposes only. Contact Pengelly Autos directly for vehicle finance and insurance guidance.
                  </div>
                </div>
              </div>
              <a href="/learn" className="flex items-center gap-2 mt-4 text-sm font-medium" style={{color:'#1a5ea5'}}>← Back to all modules</a>
              <div className="rounded-xl mt-4 p-4" style={{backgroundColor:'#1a2340'}}>
                <p className="text-xs font-bold mb-2" style={{color:'#8fa8cc'}}>Previous in Motor Rights</p>
                <a href="/learn/motor-missed-payment" className="text-sm font-medium" style={{color:'#ffffff'}}>← Missed a Car Payment?</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
    </PaywallGate>
  );
}
