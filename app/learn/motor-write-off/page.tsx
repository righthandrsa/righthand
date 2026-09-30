import PaywallGate from '../../components/PaywallGate';

export default function MotorWriteOff() {
  return (
    <PaywallGate>
    <main>
      <div style={{backgroundColor:'#1a5ea5',padding:'48px 0 40px'}}>
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:'rgba(255,255,255,0.65)'}}>Motor Vehicles · Module 8 of 8</p>
          <h1 className="text-3xl font-bold mb-3" style={{color:'#ffffff'}}>When Your Car Gets Written Off: Insurance Payouts, Finance Gaps, and Shortfall Cover</h1>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:'0.88rem'}}>Approx. 6 min read · Last reviewed September 2026</p>
        </div>
      </div>

      <div style={{backgroundColor:'#ffffff'}}>
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 lg:gap-12" style={{alignItems:'start'}}>
            <article style={{minWidth:0,color:'#1a1a1a'}}>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>What you will learn</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>How insurers decide a car is a write-off — and the threshold most use</li>
                  <li>Why you can still owe money on a car you no longer have</li>
                  <li>The difference between trade, market, and retail value payouts</li>
                  <li>What shortfall cover is, what it does, and what to check in the fine print</li>
                </ul>
              </div>

              <div className="rounded-lg p-4 mb-8" style={{backgroundColor:'#F5F4F0'}}>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:'#888780'}}>In this module</p>
                <ol className="text-sm space-y-1 list-decimal list-inside" style={{color:'#0C447C'}}>
                  <li>How a car becomes a write-off</li>
                  <li>What happens next — step by step</li>
                  <li>Why the gap exists</li>
                  <li>The numbers: a worked example</li>
                  <li>What shortfall cover does</li>
                  <li>Key takeaways</li>
                </ol>
              </div>

              <p className="text-gray-700 mb-4">It is 4:40 on a wet Tuesday. The car in front stops. You stop. The car behind you does not. You are fine. The car is not. A few days later your insurer phones with a payout figure. You look at the number. Then you look at your finance statement. Then you look at the number again.</p>
              <p className="text-gray-700 mb-4">This happens to sensible people every week. Most of them never saw the gap coming.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>1. How a Car Becomes a Write-Off</h2>
              <p className="text-gray-700 mb-4">Nobody stamps &ldquo;WRITE OFF&rdquo; on your bonnet. The insurer&apos;s assessor compares the repair bill to what the car is worth. If repairs eat up too big a proportion of the value, it is cheaper for the insurer to pay you out. Most draw that line somewhere around 60% to 70% of the car&apos;s value — but each insurer has its own formula, and they must tell you what it is when you sign up.</p>
              <p className="text-gray-700 mb-4">It is not only big crashes. Fire, severe weather, and cars recovered in poor condition after theft can also result in write-offs.</p>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-1" style={{color:'#854F0B'}}>Check your policy now, not on a Tuesday afternoon</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Find the clause in your policy that explains how your insurer decides a car is a write-off, and what value basis they use to pay out. Most people have never read this page. Go and read yours.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>2. What Happens Next</h2>
              {[
                {t:'Phone your insurer and your bank the same day', d:'Until the claim is settled and the finance is cleared, the car still belongs to the bank in a real sense. They should hear it from you first.'},
                {t:'Keep paying your instalment', d:'Unless your bank tells you otherwise in writing, the contract keeps running until the finance is settled. Missing payments during a claim turns a bad week into a bad year.'},
                {t:'The insurer makes you an offer', d:'It is the value of the car just before the accident, less your excess. The key word is value — depending on how you insured the vehicle, your policy pays either the trade, market, or retail value.'},
                {t:'The bank gets paid first', d:'If the car is financed, the payout goes to the bank before it reaches you. Anything left over is yours. If it is not enough, you carry the gap. Your bank does not write off your loan just because your car got written off.'},
                {t:'The insurer keeps the wreck', d:'Once they pay you, the damaged car generally becomes theirs and they sell it for salvage. Some insurers let you buy it back, but they deduct the salvage value from your payout — it is rarely the bargain it sounds like.'},
              ].map((item, i) => (
                <div key={i} className="flex gap-3 mb-4">
                  <span className="text-sm font-bold shrink-0 mt-0.5" style={{color:'#1a5ea5'}}>{i + 1}.</span>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{color:'#1a2340'}}>{item.t}</p>
                    <p className="text-sm" style={{color:'#374151'}}>{item.d}</p>
                  </div>
                </div>
              ))}

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>3. Why the Gap Exists</h2>
              <p className="text-gray-700 mb-4">The loan and the car shrink at different speeds. In the early years, most of your instalment goes toward interest, so the outstanding balance barely moves. The car, meanwhile, loses value quickly. For the first two to three years of most deals — and the entire term if there is a balloon payment — you owe more than the car is worth.</p>
              <p className="text-gray-700 mb-4">Insurance pays what the car is worth. It does not pay what you owe.</p>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>Trade, market, and retail value — what is the difference?</p>
                <ul className="text-sm space-y-2 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li><strong>Retail value</strong> — what a dealer would sell the car for. Usually the highest of the three.</li>
                  <li><strong>Market value</strong> — a midpoint between trade and retail, based on what similar cars are actually selling for.</li>
                  <li><strong>Trade value</strong> — what a dealer would pay for the car. Usually the lowest of the three.</li>
                </ul>
                <p className="text-sm mt-3" style={{color:'#374151'}}>If you have a choice, retail usually results in a higher payout. Check your policy to see which basis applies to you.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>4. The Numbers: A Worked Example</h2>
              <p className="text-gray-700 mb-4">R350 000 car, 72-month loan at 12% interest, no deposit. Two years in:</p>

              <div className="rounded-lg overflow-hidden mb-6" style={{border:'1px solid #E2E0D8'}}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{backgroundColor:'#1a2340',color:'#ffffff'}}>
                      <th className="text-left p-3 font-semibold">Item</th>
                      <th className="text-right p-3 font-semibold">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{backgroundColor:'#FEF3F2'}}>
                      <td className="p-3" style={{color:'#374151'}}>What you still owe the bank</td>
                      <td className="p-3 text-right font-bold" style={{color:'#B91C1C'}}>R259 839</td>
                    </tr>
                    <tr style={{backgroundColor:'#f9fafb'}}>
                      <td className="p-3" style={{color:'#374151'}}>Insurer pays out (retail value)</td>
                      <td className="p-3 text-right font-bold" style={{color:'#374151'}}>R235 000</td>
                    </tr>
                    <tr style={{backgroundColor:'#FEF3F2'}}>
                      <td className="p-3 font-semibold" style={{color:'#B91C1C'}}>Your gap (before excess)</td>
                      <td className="p-3 text-right font-bold" style={{color:'#B91C1C'}}>R24 839</td>
                    </tr>
                    <tr style={{backgroundColor:'#E1F5EE'}}>
                      <td className="p-3 font-semibold" style={{color:'#0F6E56'}}>Your gap with shortfall cover</td>
                      <td className="p-3 text-right font-bold" style={{color:'#0F6E56'}}>R0</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-6">That R24 839 is a debt due immediately, on a car you can no longer drive. Your excess comes off the payout too, so the real gap is larger. If your policy pays market value instead of retail, the gap grows further. You will also need another car this month. Nobody budgets for that.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>5. What Shortfall Cover Does</h2>
              <p className="text-gray-700 mb-4">Shortfall cover — also called credit shortfall, top-up, or gap cover — is an add-on that pays the difference between what your insurer pays and what you still owe the bank. In the table above, it is the last row. The gap simply disappears.</p>
              <p className="text-gray-700 mb-4">It is worth raising with every client. The day you need it is the worst day of your year.</p>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>Read the fine print before you buy</p>
                <ul className="text-sm space-y-2 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>Some products have a maximum cover limit — confirm it covers your likely gap</li>
                  <li>Extras and accessories not listed on your insurance policy may not be covered</li>
                  <li>Some providers have a claim deadline — do not sit on it once your insurer has settled</li>
                  <li>Some products offer extras like covering your excess or providing a deposit towards your next car — worth asking about</li>
                </ul>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>6. Key Takeaways</h2>
              <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0F6E56'}}>What to do now, before it happens</p>
                <ul className="text-sm space-y-2 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>Find out how your insurer values a write-off — retail usually pays more than market or trade</li>
                  <li>Read the clause explaining how they decide a car is a write-off</li>
                  <li>If you owe more than the car is worth (most financed cars in the first 2–3 years, and the whole term with a balloon), add shortfall cover</li>
                  <li>Check the shortfall cover limits, accessory exclusions, and any claim deadline</li>
                  <li>Save your insurer&apos;s claims number and your bank&apos;s contact details in your phone</li>
                  <li>If it happens: phone your insurer and bank the same day, and keep paying your instalment until the bank confirms the account is settled</li>
                </ul>
              </div>

              <div className="rounded-lg p-4 mb-8" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                <p className="text-sm italic" style={{color:'#374151'}}>&ldquo;A write off doesn&apos;t have to be a disaster. If the paperwork lines up it&apos;s a few weeks of admin and a new car. It only gets ugly when the numbers don&apos;t match and nobody warned you.&rdquo;</p>
                <p className="text-xs mt-2 font-medium" style={{color:'#1a5ea5'}}>— Kyle Pengelly, Finance and Insurance Specialist</p>
              </div>

              <div className="text-xs space-y-2" style={{borderTop:'1px solid #E2E0D8',paddingTop:'24px',color:'#888780'}}>
                <p><strong style={{color:'#0C447C'}}>Primary legislation:</strong> Short-Term Insurance Act 53 of 1998 · National Credit Act 34 of 2005</p>
                <p>This module is for educational purposes only and does not constitute legal or financial advice. Consult a registered finance or insurance professional for advice specific to your circumstances.</p>
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
                <p className="text-xs font-bold mb-2" style={{color:'#8fa8cc'}}>Previous in Motor Vehicles</p>
                <a href="/learn/motor-third-party-finance" className="text-sm font-medium" style={{color:'#ffffff'}}>← Third Party Finance</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
    </PaywallGate>
  );
}
