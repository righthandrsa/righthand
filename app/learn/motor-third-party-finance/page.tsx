import PaywallGate from '../../components/PaywallGate';

export default function MotorThirdPartyFinance() {
  return (
    <PaywallGate>
    <main>
      <div style={{backgroundColor:'#1a5ea5',padding:'48px 0 40px'}}>
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:'rgba(255,255,255,0.65)'}}>Motor Vehicles · Module 7 of 8</p>
          <h1 className="text-3xl font-bold mb-3" style={{color:'#ffffff'}}>Signing for Someone Else&apos;s Car: What Your Finance Contract Actually Says</h1>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:'0.88rem'}}>Approx. 5 min read · Last reviewed September 2026</p>
        </div>
      </div>

      <div style={{backgroundColor:'#ffffff'}}>
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 lg:gap-12" style={{alignItems:'start'}}>
            <article style={{minWidth:0,color:'#1a1a1a'}}>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>What you will learn</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>What third party finance actually is — and what your contract says you are agreeing to</li>
                  <li>Why banks treat it as a fraud risk even when everyone means well</li>
                  <li>What happens to your credit record and finances if payments stop</li>
                  <li>What to do instead of signing for someone else</li>
                </ul>
              </div>

              <div className="rounded-lg p-4 mb-8" style={{backgroundColor:'#F5F4F0'}}>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:'#888780'}}>In this module</p>
                <ol className="text-sm space-y-1 list-decimal list-inside" style={{color:'#0C447C'}}>
                  <li>What third party finance is</li>
                  <li>What your finance contract actually says</li>
                  <li>Why the bank cares</li>
                  <li>What happens to you if it goes wrong</li>
                  <li>It is no better for the person driving</li>
                  <li>What to do instead</li>
                </ol>
              </div>

              <p className="text-gray-700 mb-4">Your cousin&apos;s credit record is a mess. He has found a bakkie he loves. You have a steady salary and a clean record. He says: &ldquo;Just sign for me, I&apos;ll pay the instalment every month. It&apos;s basically my car anyway.&rdquo;</p>
              <p className="text-gray-700 mb-4">It sounds like family helping family. It feels like a formality. In a finance office, this is the conversation worth having before anyone picks up a pen.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>1. What Third Party Finance Is</h2>
              <p className="text-gray-700 mb-4">Third party finance is when one person takes out vehicle finance in their own name for a car that somebody else will drive and usually pay for. The person who signs gets the debt, the legal liability, and the credit record. The person who drives gets the car.</p>
              <p className="text-gray-700 mb-4">The bank is told one story. The car lives another. That gap is the problem.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>2. What Your Finance Contract Actually Says</h2>
              <p className="text-gray-700 mb-4">Every instalment sale agreement differs slightly, but these obligations appear consistently:</p>

              {[
                {t:'The bank owns the car until the last instalment', d:'On the registration papers, the bank is the titleholder. Until the account is paid off, the car is not freely yours to pass around.'},
                {t:'You cannot transfer it to someone else', d:'You cannot sell, rent out, lend, pledge, or transfer the car to another person without the bank\'s written approval. You also cannot transfer your rights and obligations under the agreement.'},
                {t:'The bank must know who has the car', d:'You must tell the bank the name and address of the person who permanently has possession of it. Giving false or misleading information about where the car is or who has it is an offence under the National Credit Act.'},
                {t:'The driver must be licensed and the car must be insured', d:'Cover must be for at least what you still owe, and the bank\'s interest must be protected on the policy.'},
                {t:'What you tell the bank must be true', d:'You sign a declaration that all information you provided is true and correct. A misleading statement before signing counts as a breach of the agreement.'},
              ].map((item, i) => (
                <div key={i} className="flex gap-3 mb-4">
                  <span className="text-sm font-bold shrink-0 mt-0.5" style={{color:'#1a5ea5'}}>{i + 1}.</span>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{color:'#1a2340'}}>{item.t}</p>
                    <p className="text-sm" style={{color:'#374151'}}>{item.d}</p>
                  </div>
                </div>
              ))}

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>3. Why the Bank Cares</h2>
              {[
                {t:'The approval is built on you', d:'The bank looked at your income, expenses, and credit record. The law requires it to confirm you can afford the credit. If the person actually paying is someone else, that assessment tells the bank nothing — they lent money based on a picture that is not real.'},
                {t:'The car is the bank\'s security', d:'If things go wrong, the car is what the bank falls back on. They need to know who has it, where it is, and that it is roadworthy and insured. Some agreements allow the bank to activate a tracker if you breach the contract.'},
                {t:'Insurance assumes you are the driver', d:'Your insurer prices the policy on who uses the car. An insurer can decline a claim if it was given incorrect facts. The bank will still want its money regardless.'},
                {t:'It looks exactly like fraud', d:'Banks see people using a clean name to get credit for someone who would not qualify. Even when everyone means well, the paperwork cannot tell the difference.'},
              ].map((item, i) => (
                <div key={i} className="rounded-lg p-4 mb-3" style={{backgroundColor:'#FAEEDA',border:'1px solid #F5C57C'}}>
                  <p className="font-bold text-sm mb-1" style={{color:'#854F0B'}}>{item.t}</p>
                  <p className="text-sm" style={{color:'#374151'}}>{item.d}</p>
                </div>
              ))}

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>4. What Happens to You If It Goes Wrong</h2>
              <p className="text-gray-700 mb-4">If your cousin pays on time for 72 months, nothing happens. But here is what happens when he does not:</p>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FEF3F2',borderLeft:'4px solid #B91C1C'}}>
                <ul className="text-sm space-y-3 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li><strong>The bank only knows you.</strong> Missed payments land on your credit record and the bank collects from you.</li>
                  <li><strong>You carry the shortfall.</strong> If it ends in repossession and the car sells for less than you owe, the agreement allows the bank to pursue you for the difference — through court if necessary. Your cousin&apos;s promise to pay you back is not something the bank recognises.</li>
                  <li><strong>The bank can treat it as a breach.</strong> If the bank discovers the car is not with you, it can demand the full outstanding balance or repossess the car immediately.</li>
                  <li><strong>Traffic fines land on you.</strong> As the registered owner, fines go to your name.</li>
                  <li><strong>It counts against your next application.</strong> That instalment sits on your name when you apply for your own home loan or car, because the bank counts it as yours.</li>
                </ul>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>5. It Is No Better for the Person Driving</h2>
              <p className="text-gray-700 mb-4">Your cousin has no legal claim to the car. On paper it belongs to the bank and to you. If the two of you fall out, the car is not his. Family arrangements that depend on everybody staying on good terms have a way of not lasting 72 months.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>6. What to Do Instead</h2>
              <p className="text-gray-700 mb-4">If someone you care about cannot qualify on their own, there are honest ways to help:</p>
              {[
                'A larger deposit can bring the repayment down to something they qualify for.',
                'A cheaper vehicle may be within their reach without anyone else signing.',
                'Some people simply need time to sort out their credit record first — a few months of clean payment history makes a real difference.',
                'Sit with an F&I manager before anyone signs anything. There is usually a realistic route once you know what they actually qualify for.',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 mb-3">
                  <span className="text-sm font-bold shrink-0 mt-0.5" style={{color:'#0F6E56'}}>✓</span>
                  <p className="text-sm" style={{color:'#374151'}}>{item}</p>
                </div>
              ))}

              <div className="rounded-lg p-5 mt-6 mb-8" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0F6E56'}}>The bottom line</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Signing for someone else is lending them your name, your credit record, and your money — with nothing on paper to protect you. Even the best of intentions cannot change what the contract says. Understand what you are agreeing to before you sign it.</p>
              </div>

              <div className="text-xs space-y-2" style={{borderTop:'1px solid #E2E0D8',paddingTop:'24px',color:'#888780'}}>
                <p><strong style={{color:'#0C447C'}}>Primary legislation:</strong> National Credit Act 34 of 2005 · Consumer Protection Act 68 of 2008</p>
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
                <p className="text-xs font-bold mb-2" style={{color:'#8fa8cc'}}>Previous in Motor Vehicles</p>
                <a href="/learn/motor-dealer-warranty" className="text-sm font-medium" style={{color:'#ffffff'}}>← Dealer vs Private &amp; Warranties</a>
              </div>
              <div className="rounded-xl mt-3 p-4" style={{backgroundColor:'#1a2340'}}>
                <p className="text-xs font-bold mb-2" style={{color:'#8fa8cc'}}>Next in Motor Vehicles</p>
                <a href="/learn/motor-write-off" className="text-sm font-medium" style={{color:'#ffffff'}}>When Your Car Gets Written Off →</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
    </PaywallGate>
  );
}
