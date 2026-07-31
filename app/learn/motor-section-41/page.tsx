import PaywallGate from '../../components/PaywallGate';

export default function MotorSection41() {
  return (
    <PaywallGate>
    <main>
      <div style={{backgroundColor:'#1a5ea5',padding:'48px 0 40px'}}>
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:'rgba(255,255,255,0.65)'}}>Motor Rights · Module 5 of 5</p>
          <h1 className="text-3xl font-bold mb-3" style={{color:'#ffffff'}}>Section 41 of the CPA: What Dealerships Cannot Say or Hide</h1>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:'0.88rem'}}>Approx. 12 min read · Last reviewed July 2026</p>
        </div>
      </div>

      <div style={{backgroundColor:'#ffffff'}}>
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 lg:gap-12" style={{alignItems:'start'}}>
            <article style={{minWidth:0,color:'#1a1a1a'}}>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>What you will learn</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>What Section 41 of the CPA prohibits — and why silence counts as a misrepresentation</li>
                  <li>How a dealership&apos;s marketing legally sets the standard for the vehicle you receive</li>
                  <li>The death of the voetstoots defence in consumer transactions</li>
                  <li>Three landmark cases and exactly what the courts ordered</li>
                  <li>How to escalate a complaint through MIOSA, the NCC, and the NCT</li>
                </ul>
              </div>

              <div className="rounded-lg p-4 mb-8" style={{backgroundColor:'#F5F4F0'}}>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:'#888780'}}>In this module</p>
                <ol className="text-sm space-y-1 list-decimal list-inside" style={{color:'#0C447C'}}>
                  <li>What Section 41 prohibits</li>
                  <li>The duty to disclose — silence is actionable</li>
                  <li>How marketing sets the legal standard for quality</li>
                  <li>Three landmark cases</li>
                  <li>Dispute resolution — MIOSA and the courts</li>
                  <li>Key takeaways</li>
                </ol>
              </div>

              <p className="text-gray-700 mb-4">The Consumer Protection Act 68 of 2008 permanently shifted the balance of power in vehicle sales. Under the old common law principle of <em>caveat emptor</em> — let the buyer beware — the burden was largely on you to spot problems before signing. The CPA replaced this with <em>caveat venditor</em>: let the seller beware. Every advertisement, website listing, verbal assurance, and specification sheet is now a legal representation that can be enforced against the dealer.</p>
              <p className="text-gray-700 mb-4">At the centre of this shift is Section 41, which prohibits false, misleading, and deceptive representations in the marketing of goods and services. Understanding it protects you before you sign — and gives you a powerful legal tool if something goes wrong after you do.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>1. What Section 41 prohibits</h2>
              <p className="text-gray-700 mb-4">Section 41 applies to every form of promotion — websites, social media posts, banner ads, printed spec sheets, verbal claims by salespeople, and even the SEO metadata on a dealership&apos;s webpage. If a dealership or anyone acting on its behalf makes a representation to a consumer, Section 41 governs it.</p>
              <p className="text-gray-700 mb-3">The Act expressly forbids a supplier from directly or indirectly:</p>

              {[
                'Making a false, misleading, or deceptive statement about a material fact',
                'Using exaggeration, insinuation, or ambiguity about a material fact in a way that deceives',
                'Withholding a material fact if doing so would amount to deception',
                'Failing to correct a consumer\'s obvious misapprehension',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 mb-2">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5" style={{backgroundColor:'#185FA5'}}>{i+1}</span>
                  <p className="text-sm" style={{color:'#374151'}}>{item}</p>
                </div>
              ))}

              <div className="rounded-lg p-5 mt-4 mb-4" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>Specific misrepresentations expressly prohibited under Section 41(3)</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#374151'}}>
                  <li>Claiming a vehicle has performance characteristics, accessories, or qualities it does not possess</li>
                  <li>Claiming a vehicle is of a particular standard, quality, grade, or model when it is not</li>
                  <li>Claiming a vehicle is new or unused when it has been previously used</li>
                  <li>Claiming a vehicle has been reconditioned, rebuilt, or reclaimed when that is factually untrue</li>
                </ul>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>2. The duty to disclose — silence is actionable</h2>
              <p className="text-gray-700 mb-4">Under the old common law, a dealer was largely protected by the <em>voetstoots</em> (as-is) clause and was not required to point out defects — the buyer was expected to inspect the vehicle. Section 41 eliminates this protection in consumer transactions by placing a positive, active obligation on the dealership.</p>
              <p className="text-gray-700 mb-4">If a dealership knows a vehicle has a rebuilt engine, a tampered odometer, or a history of structural accident damage, and the consumer clearly assumes they are purchasing an uncompromised vehicle, the dealership&apos;s silence to secure the sale constitutes a deceptive representation. The legal standard shifts entirely from passive non-interference to active, documented transparency.</p>

              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-1" style={{color:'#854F0B'}}>Read alongside Sections 22 and 29</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Section 29 prohibits marketing that is fraudulent or deceptive across any channel. Section 22 requires that disclosures be written in plain language accessible to a consumer with average literacy. A vehicle accident history buried in technical legalese at the bottom of a webpage violates both Section 22 and Section 41.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>3. How marketing sets the legal standard for quality</h2>
              <p className="text-gray-700 mb-4">Section 41 does not operate in isolation from the rest of the CPA. Marketing legally defines the baseline of the consumer&apos;s reasonable expectations — and those expectations are then protected by the statutory warranties in Sections 55 and 56.</p>

              <div className="rounded-lg overflow-hidden mb-6" style={{border:'1px solid #E2E0D8'}}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{backgroundColor:'#1a2340',color:'#ffffff'}}>
                      <th className="text-left p-3 font-semibold">Section</th>
                      <th className="text-left p-3 font-semibold">What it does</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {s:'Section 55',d:'Guarantees your right to receive goods that are of good quality, in good working order, and suitable for the purposes for which they are normally intended. The marketing claims set the benchmark for what "good quality" means for that specific vehicle.'},
                      {s:'Section 56',d:'Provides an automatic implied six-month warranty on all consumer goods. If the vehicle does not meet the Section 55 standard within six months of delivery, you have the right to return it and choose your remedy — repair, replacement, or a full refund. The choice is yours, not the dealer\'s.'},
                    ].map((row,i) => (
                      <tr key={i} style={{backgroundColor: i%2===0 ? '#F5F4F0' : '#ffffff'}}>
                        <td className="p-3 font-semibold" style={{color:'#0C447C',whiteSpace:'nowrap'}}>{row.s}</td>
                        <td className="p-3" style={{color:'#374151'}}>{row.d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-1" style={{color:'#0C447C'}}>Your remedy is your choice</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Dealerships often try to avoid refund obligations by insisting on repairs or offering "goodwill gestures." The law is clear: when a vehicle fails within six months, you decide whether you want a repair, a replacement, or a refund. The dealer does not get to make that decision for you.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>4. Three landmark cases</h2>
              <p className="text-gray-700 mb-4">Courts and the National Consumer Tribunal have consistently taken a firm stance on Section 41 violations. These three cases illustrate exactly what the consequences look like.</p>

              {[
                {
                  n:'1',
                  title:'Ramangwa v Pro-Quick — the deception of silence',
                  paras:[
                    'Ramangwa purchased a pre-owned vehicle that developed severe problems within two months of delivery. An independent inspection revealed the car had been in a major collision before the sale, was inadequately repaired, and had suffered a significant loss in value. The dealership had known about the crash history and said nothing.',
                    'The Tribunal found that failing to correct a consumer\'s obvious assumption about a vehicle\'s condition is a misrepresentation under Section 41. The dealership\'s silence — its deliberate decision not to disclose the accident history — was ruled an act of deception. The Tribunal also found a breach of Section 25(1), which requires suppliers of rebuilt or reconditioned goods to clearly mark them as such.',
                  ],
                  lesson:'Marketing a rebuilt or previously crashed vehicle as a standard pre-owned vehicle, without any written lie, is still an actionable misrepresentation. Negative vehicle histories must be actively disclosed.',
                },
                {
                  n:'2',
                  title:'Schoeman v Village Auto — verbal guarantees carry full legal weight',
                  paras:[
                    'Schoeman bought a 2010 Jeep Grand Cherokee after a salesperson explicitly assured him the vehicle was in excellent condition, completely roadworthy, and had never been in an accident. Shortly after purchase, the vehicle failed independent roadworthy tests due to serious mechanical faults, and inspections confirmed it had in fact been in a serious collision. The dealer refused a refund.',
                    'The NCT found the dealership guilty of making misleading representations under Section 41(1)(b) and of breaching the Section 56 implied warranty by refusing the refund. The Tribunal ordered a full refund of the purchase price within 15 business days.',
                  ],
                  lesson:'A salesperson\'s verbal assurance in the showroom carries the same legal weight as a written advertisement. Dealerships are fully accountable for the claims their employees make.',
                },
                {
                  n:'3',
                  title:'Sbuyile Transport v Edan — the death of voetstoots and the shifting burden of proof',
                  paras:[
                    'A buyer purchased a used truck after a salesperson verbally guaranteed it was "very strong and in good condition." The truck broke down at the dealership gate during the test drive and continued to break down repeatedly. The dealership defended itself by relying on the voetstoots (as-is) clause and a restricted one-month warranty.',
                    'The Full Court of the High Court in Johannesburg rejected both defences. The verbal guarantee qualified as a material misrepresentation under Section 41, and the dealership\'s conduct — knowingly presenting an unsuitable vehicle to a first-time buyer as a "good option" — was found to violate Section 40(2) (Unconscionable Conduct). The Court ordered a full refund plus punitive attorney-and-client costs.',
                    'Critically, the Court also confirmed a shifting burden of proof: once a buyer shows that mechanical problems arose shortly after delivery, the burden shifts entirely to the supplier to prove the defects did not exist at the time of sale.',
                  ],
                  lesson:'The voetstoots defence is dead in consumer transactions. If problems appear shortly after delivery, the dealer must prove the vehicle was sound at handover — not the other way around.',
                },
              ].map(c => (
                <div key={c.n} className="rounded-lg p-5 mb-4" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#185FA5'}}>{c.n}</div>
                    <p className="font-bold text-sm" style={{color:'#0C447C'}}>{c.title}</p>
                  </div>
                  {c.paras.map((p,i) => <p key={i} className="text-sm mb-2" style={{color:'#374151'}}>{p}</p>)}
                  <div className="rounded p-3 mt-2" style={{backgroundColor:'#E6F1FB'}}>
                    <p className="text-xs font-semibold mb-1" style={{color:'#0C447C'}}>Key principle</p>
                    <p className="text-xs" style={{color:'#374151'}}>{c.lesson}</p>
                  </div>
                </div>
              ))}

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>5. Dispute resolution — MIOSA and the courts</h2>
              <p className="text-gray-700 mb-4">The South African Automotive Industry Code of Conduct designates the Motor Industry Ombudsman of South Africa (MIOSA) as the industry&apos;s official alternative dispute resolution body. All dealerships are required to be registered with MIOSA.</p>

              {[
                {n:'1',t:'Exhaust internal remedies first',d:'Raise the complaint formally with the dealership in writing. Give them a reasonable opportunity to respond.'},
                {n:'2',t:'Escalate to MIOSA',d:'If the dealership does not resolve the matter, refer it to MIOSA for conciliation or mediation. This step is typically required before approaching the NCC or NCT.'},
                {n:'3',t:'Approach the NCC or NCT',d:'If MIOSA mediation fails, MIOSA issues a certificate allowing you to refer the dispute to the National Consumer Commission or National Consumer Tribunal. The NCT can order refunds, impose fines, and award punitive costs.'},
                {n:'4',t:'Civil court for damages',d:'The High Court confirmed in Ramangwa that a claim for common-law damages based on a Section 41 breach does not have to wait for all CPA institutional processes to conclude. You can pursue damages in court while relying on Section 41 as the standard violated.'},
              ].map(step => (
                <div key={step.n} className="rounded-lg p-4 mb-3" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#185FA5'}}>{step.n}</div>
                    <p className="font-bold text-sm" style={{color:'#0C447C'}}>{step.t}</p>
                  </div>
                  <p className="text-sm" style={{color:'#374151'}}>{step.d}</p>
                </div>
              ))}

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>6. Key takeaways</h2>
              <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0F6E56'}}>What to remember</p>
                <ul className="text-sm space-y-2 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>Every advertisement, website listing, spec sheet, and verbal claim by a salesperson is a legal representation governed by Section 41</li>
                  <li>A dealer&apos;s silence about accident damage, a rebuilt engine, or a tampered odometer is itself a deceptive representation — there does not need to be a written lie</li>
                  <li>What a dealer says in marketing sets the legal benchmark for the quality you are entitled to receive</li>
                  <li>If the vehicle fails within six months, you choose the remedy — repair, replacement, or full refund — not the dealer</li>
                  <li>The voetstoots defence does not apply in consumer transactions under the CPA</li>
                  <li>If problems arise shortly after delivery, the burden shifts to the dealer to prove the vehicle was sound at handover</li>
                  <li>Verbal guarantees by salespeople carry the same legal weight as written advertising</li>
                  <li>Escalation path: dealership → MIOSA → NCC/NCT → civil court for damages</li>
                </ul>
              </div>

              <div className="text-xs space-y-2" style={{borderTop:'1px solid #E2E0D8',paddingTop:'24px',color:'#888780'}}>
                <p><strong style={{color:'#0C447C'}}>Primary legislation:</strong> Consumer Protection Act 68 of 2008 (Sections 22, 25, 29, 40, 41, 55, 56)</p>
                <p><strong style={{color:'#0C447C'}}>Case law:</strong> Ramangwa v Pro-Quick (Pty) Ltd · Schoeman v Village Auto Used Vehicles CC · Sbuyile Transport (Pty) Ltd v Edan</p>
                <p>This module is for educational purposes only and does not constitute legal advice. Consult a consumer rights specialist for advice specific to your circumstances.</p>
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
                    Content provided for educational purposes only. Contact Before You Sign directly for dispute resolution assistance.
                  </div>
                </div>
              </div>
              <a href="/learn" className="flex items-center gap-2 mt-4 text-sm font-medium" style={{color:'#1a5ea5'}}>← Back to all modules</a>
              <div className="rounded-xl mt-4 p-4" style={{backgroundColor:'#1a2340'}}>
                <p className="text-xs font-bold mb-2" style={{color:'#8fa8cc'}}>Previous in Motor Rights</p>
                <a href="/learn/motor-settle-early" className="text-sm font-medium" style={{color:'#ffffff'}}>← Settling Your Car Early</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
    </PaywallGate>
  );
}
