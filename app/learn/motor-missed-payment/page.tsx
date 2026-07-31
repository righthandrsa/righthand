import PaywallGate from '../../components/PaywallGate';

export default function MotorMissedPayment() {
  return (
    <PaywallGate>
    <main>
      <div style={{backgroundColor:'#1a5ea5',padding:'48px 0 40px'}}>
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:'rgba(255,255,255,0.65)'}}>Motor Rights · Module 3 of 4</p>
          <h1 className="text-3xl font-bold mb-3" style={{color:'#ffffff'}}>Missed a Car Payment? Here&apos;s What Happens and What to Do</h1>
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
                  <li>Exactly what happens the moment a debit order bounces</li>
                  <li>What a Section 129 notice is and why you must not ignore it</li>
                  <li>The truth about repossession — what the bank can and cannot do</li>
                  <li>Who to call, what to say, and why acting fast works in your favour</li>
                </ul>
              </div>

              <div className="rounded-lg p-4 mb-8" style={{backgroundColor:'#F5F4F0'}}>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:'#888780'}}>In this module</p>
                <ol className="text-sm space-y-1 list-decimal list-inside" style={{color:'#0C447C'}}>
                  <li>What actually happens when you miss a payment</li>
                  <li>The Section 129 notice — what it is and what it means</li>
                  <li>The repossession misconception</li>
                  <li>Who to call</li>
                  <li>What to say when you call</li>
                  <li>Key takeaways</li>
                </ol>
              </div>

              <p className="text-gray-700 mb-4">So the debit order bounced. Maybe money was tight this month. Maybe the debit ran the day before your salary landed. Doesn&apos;t matter how it happened — you&apos;re one instalment behind, and that knot in your stomach is real.</p>
              <p className="text-gray-700 mb-4">One missed payment is not the end of the world. But what you do in the next few days is what really matters.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>1. What actually happens when you miss a payment</h2>
              <p className="text-gray-700 mb-4">The bank retries the debit. Then the calls start. The SMSes start. And interest begins running on the amount you&apos;re behind.</p>
              <p className="text-gray-700 mb-4">Then there is your credit profile — and this is the part most people don&apos;t think about. Banks report your payment behaviour to the credit bureaus every single month. Miss one payment and it shows up. It doesn&apos;t disappear next month either. It sits on your record for years, quietly waiting to affect the next time you apply for finance.</p>

              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>The longer you stay behind, the worse it gets</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Stay behind long enough and the outstanding balance attracts compounding interest. The gap between what you owe and what you have to pay grows every month you do nothing.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>2. The Section 129 notice — what it is and what it means</h2>
              <p className="text-gray-700 mb-4">If you stay behind for long enough, you will receive a Section 129 notice. This is the formal letter required under the National Credit Act telling you the account is in default.</p>
              <p className="text-gray-700 mb-4">The notice gives you options: catch up on arrears, make a payment arrangement, or go see a debt counsellor. It is not junk mail. It is the legal step the bank must take before they can pursue court action. Treat it seriously and respond to it.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>Your options when you receive a Section 129 notice</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>Pay the full arrears and bring the account up to date</li>
                  <li>Contact the bank to negotiate a catch-up arrangement</li>
                  <li>Approach a registered debt counsellor to discuss debt review</li>
                  <li>Refer the matter to a consumer court, ombud, or alternative dispute resolution agent</li>
                </ul>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>3. The repossession misconception</h2>
              <p className="text-gray-700 mb-4">Here is a misconception that comes up constantly: "The bank is just going to come and take my car."</p>
              <p className="text-gray-700 mb-4">In South Africa, a bank cannot repossess your vehicle without a court order — unless you voluntarily hand it back yourself. If someone arrives at your door demanding your keys and they do not have a court order, they are trying their luck.</p>

              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>But the worst-case scenario is still bad</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>If the matter goes all the way to court and the car is repossessed, it gets sold at auction — usually for less than you owe. You still have to pay the shortfall. You lose the car and keep the debt. That is the outcome everyone should be working to avoid.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>4. Who to call</h2>
              <p className="text-gray-700 mb-4">Not the branch. Not the dealership where you bought the car. Phone the bank that financed the vehicle directly and ask for their collections or customer assist department — the team that handles exactly this situation.</p>
              <p className="text-gray-700 mb-4">The number is on your monthly statement and in your banking app. Use it. These departments exist for exactly this reason, and they have heard a lot worse than one missed payment.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>5. What to say when you call</h2>
              <p className="text-gray-700 mb-4">Be honest. Don&apos;t spin a story. Tell them what happened, when you can pay, and what you can realistically afford — not what you wish you could afford, but what you can actually manage right now.</p>
              <p className="text-gray-700 mb-4">Then ask what options are available. Depending on your situation, the bank may be able to set up a catch-up plan spread over a few months, restructure the agreement, or offer short-term breathing room.</p>

              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0F6E56'}}>Write everything down</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Record the date, time, name of the person you spoke to, and exactly what was agreed. If there is ever a dispute later, that record is invaluable. Ask for confirmation in writing or via email if possible.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>6. Key takeaways</h2>
              <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0F6E56'}}>What to remember</p>
                <ul className="text-sm space-y-2 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>One missed payment is not the end — but silence makes it worse every day</li>
                  <li>Your credit profile is affected immediately, so act before the next reporting cycle if possible</li>
                  <li>A Section 129 notice is a legal document — respond to it, do not ignore it</li>
                  <li>A bank cannot repossess your vehicle without a court order</li>
                  <li>Call the bank&apos;s collections department directly — not the branch, not the dealership</li>
                  <li>Be honest about what you can afford; banks prefer a workable arrangement over repossession</li>
                  <li>Record everything: date, time, name of agent, and what was agreed</li>
                </ul>
              </div>

              <div className="text-xs space-y-2" style={{borderTop:'1px solid #E2E0D8',paddingTop:'24px',color:'#888780'}}>
                <p><strong style={{color:'#0C447C'}}>Primary legislation:</strong> National Credit Act 34 of 2005 (Section 129)</p>
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
                <p className="text-xs font-bold mb-2" style={{color:'#8fa8cc'}}>Next in Motor Rights</p>
                <a href="/learn/motor-settle-early" className="text-sm font-medium" style={{color:'#ffffff'}}>Settling Your Car Early →</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
    </PaywallGate>
  );
}
