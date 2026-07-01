import AuthGate from '../../components/AuthGate';

export default function RentingRHT() {
  return (
    <AuthGate>
    <main>
      <div style={{backgroundColor:'#1a5ea5',padding:'48px 0 40px'}}>
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:'rgba(255,255,255,0.65)'}}>Home · Module 1 of 2</p>
          <h1 className="text-3xl font-bold mb-3" style={{color:'#ffffff'}}>Renting in South Africa: Your Rights and the Rental Housing Tribunal</h1>
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
                  <li>What rights you have as a tenant, and what your landlord is legally required to do</li>
                  <li>How deposits work, and what happens to yours when you move out</li>
                  <li>What the Rental Housing Tribunal is, when to use it, and how it is completely free</li>
                  <li>What to do if your landlord will not fix something or will not return your deposit</li>
                  <li>Real cases showing how the Tribunal has ruled in practice</li>
                </ul>
              </div>

              <div className="rounded-lg p-4 mb-8" style={{backgroundColor:'#F5F4F0'}}>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:'#888780'}}>In this module</p>
                <ol className="text-sm space-y-1 list-decimal list-inside" style={{color:'#0C447C'}}>
                  <li>Why this matters</li>
                  <li>Key terms you need to know</li>
                  <li>Your rights as a tenant</li>
                  <li>Your responsibilities as a tenant</li>
                  <li>What your landlord must do</li>
                  <li>The Rental Housing Tribunal</li>
                  <li>How to lodge a complaint</li>
                  <li>Special situations</li>
                  <li>Frequently asked questions</li>
                  <li>Key takeaways</li>
                  <li>Where to get help</li>
                </ol>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>1. Why this matters</h2>
              <p className="text-gray-700 mb-4">If you are renting in South Africa, whether it is your first apartment, a room in a shared house, or a family home, you are protected by one of the most tenant-friendly pieces of legislation in the country: the Rental Housing Act 50 of 1999, as amended by the Rental Housing Amendment Act 35 of 2014.</p>
              <p className="text-gray-700 mb-4">Most tenants never read this legislation, and most landlords do not either. That gap is where unfair practices happen: illegal lock changes, deposits that never get refunded, landlords who will not fix a leaking roof for months. The good news is that South Africa has a free, government-run dispute resolution body specifically for these situations: the Rental Housing Tribunal.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>2. Key terms you need to know</h2>
              <div className="rounded-lg overflow-hidden mb-6" style={{border:'1px solid #E2E0D8'}}>
                <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.82rem'}}>
                  <thead>
                    <tr style={{backgroundColor:'#185FA5',color:'#fff'}}>
                      <th style={{padding:'10px 14px',textAlign:'left',width:'35%'}}>Term</th>
                      <th style={{padding:'10px 14px',textAlign:'left'}}>What it means</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Landlord','The owner of the property, or their authorised agent such as a rental agency, or anyone with the legal right to lease the property to you.'],
                      ['Tenant','Anyone who leases a dwelling, including houses, flats, rooms, hostels, garages, and even a parking space if it is part of your lease.'],
                      ['Lease','An agreement between you and your landlord for renting the dwelling. It does not have to be written down to be legally binding, but verbal agreements are far harder to enforce.'],
                      ['Unfair practice','Any action or failure to act by a landlord or tenant that unreasonably affects the rights of the other party. This is the legal trigger for a Tribunal complaint.'],
                      ['The Tribunal (RHT)','A free, government-appointed body that resolves disputes between tenants and landlords. Its rulings carry the same legal weight as a Magistrate\'s Court order.'],
                    ].map(([term,meaning],i)=>(
                      <tr key={term} style={{backgroundColor:i%2===0?'#fff':'#F5F4F0'}}>
                        <td style={{padding:'10px 14px',borderBottom:'1px solid #E2E0D8',fontWeight:600,color:'#0C447C',verticalAlign:'top'}}>{term}</td>
                        <td style={{padding:'10px 14px',borderBottom:'1px solid #E2E0D8',color:'#1a1a1a',verticalAlign:'top'}}>{meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>3. Your rights as a tenant</h2>
              <p className="text-gray-700 mb-4">Since the 2014 amendment, your rights and your landlord's obligations are set out clearly in the law.</p>

              <h3 className="text-lg font-bold mt-6 mb-2" style={{color:'#185FA5'}}>The right to a written receipt</h3>
              <p className="text-gray-700 mb-4">Every time you pay rent, a deposit, or any other charge, your landlord must give you a written receipt. The receipt must show the date, the address of the dwelling, the amount and what it was for, and the period it covers. If you pay by EFT, your bank deposit slip or proof of payment counts as the receipt.</p>
              <div className="rounded-lg p-4 mb-4" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-xs mb-1" style={{color:'#854F0B'}}>Red flag</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>If your landlord refuses to give you a receipt or written statement when asked, that is itself an unfair practice and you can raise it with the Tribunal.</p>
              </div>

              <h3 className="text-lg font-bold mt-6 mb-2" style={{color:'#185FA5'}}>The right to privacy</h3>
              <p className="text-gray-700 mb-4">During your lease, you have the right to privacy. Your landlord can only inspect the property after giving you reasonable notice, and must do so in a reasonable manner. Your landlord cannot search your home or your belongings without a court order, seize your possessions without a Tribunal ruling or court order, or interfere with your private communications.</p>

              <h3 className="text-lg font-bold mt-6 mb-2" style={{color:'#185FA5'}}>The right to a habitable home</h3>
              <p className="text-gray-700 mb-4">Your landlord must provide you with a dwelling that is habitable, meaning it has adequate space, protects you from the elements, is physically safe, and is structurally sound. Your landlord must also maintain the existing structure and, where possible, ensure you have access to basic services.</p>

              <h3 className="text-lg font-bold mt-6 mb-2" style={{color:'#185FA5'}}>Your deposit rights</h3>
              <p className="text-gray-700 mb-4">Your landlord must deposit your rental deposit into an interest-bearing account. The deposit plus interest belongs to you unless there is documented damage beyond normal wear and tear. Your landlord must return it within 7 days of the end of your lease if there is no damage, or within 21 days if deductions are made, with a full written breakdown of any amounts withheld.</p>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>Always do a joint inspection</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Always do a move-in inspection with your landlord and document everything in writing. Photograph any existing damage. Do the same when you move out. This protects you from being charged for damage you did not cause. If your landlord refuses to do the inspection with you, do it yourself, date-stamp your photos, and send them to your landlord in writing immediately.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>4. Your responsibilities as a tenant</h2>
              <ul className="text-gray-700 mb-6 space-y-2 list-disc list-inside">
                <li>Pay your rent in full and on time every month</li>
                <li>Use the property in a reasonable manner and for its intended purpose</li>
                <li>Maintain the property in a clean and hygienic condition</li>
                <li>Report any defects or maintenance issues to your landlord promptly in writing</li>
                <li>Do not make alterations to the property without written consent from your landlord</li>
                <li>Never withhold rent as a tool to force maintenance, even if your landlord is in the wrong. This weakens your legal position significantly</li>
              </ul>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>5. What your landlord must do</h2>
              <ul className="text-gray-700 mb-6 space-y-2 list-disc list-inside">
                <li>Provide you with a written lease agreement (required since the 2014 amendment)</li>
                <li>Give you a copy of the lease before or at the time of signing</li>
                <li>Place your deposit in an interest-bearing account within a reasonable time of receiving it</li>
                <li>Maintain the property in a habitable condition throughout the lease</li>
                <li>Give you reasonable notice before entering the property for inspections</li>
                <li>Not discriminate against you on any prohibited grounds</li>
                <li>Not change the locks, cut utilities, or remove your possessions to force you out without a court order</li>
              </ul>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FBEAF0',borderLeft:'4px solid #993556'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#993556'}}>Illegal eviction</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>A landlord cannot evict you without a court order, full stop. Changing locks, removing doors, cutting electricity or water, or removing your belongings without a court order is illegal and constitutes an unfair practice. If this happens to you, contact the Tribunal or a legal aid office immediately.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>6. The Rental Housing Tribunal</h2>
              <p className="text-gray-700 mb-4">The Rental Housing Tribunal is a free government service that resolves disputes between tenants and landlords. You do not need a lawyer. The Tribunal can handle complaints about unfair lease terms, deposit disputes, illegal evictions, failure to maintain the property, harassment, illegal lock-outs, and illegal utility disconnections.</p>
              <p className="text-gray-700 mb-4">A decision by the RHT carries the same weight as a court order but the process is usually quicker and costs nothing. Tribunals operate provincially, so your complaint goes to the Tribunal in the province where the property is located.</p>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0F6E56'}}>Important protection while your complaint is being heard</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>If you have already made a complaint at the Rental Housing Tribunal, your landlord cannot start eviction proceedings in court against you for three months, or until the Tribunal has made a decision in your matter. This gives you meaningful protection while the process runs its course.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>7. How to lodge a complaint</h2>
              <div className="space-y-3 mb-6">
                {[
                  {n:'1',t:'Submit a complaint form',d:'Complete a complaint form at your nearest Rental Housing Tribunal office. Describe the problem clearly and attach any supporting documents, such as your lease, receipts, photographs, and written correspondence.'},
                  {n:'2',t:'Case file opened',d:'After Tribunal staff receive your complaint they open a case file and give it a reference number. Both you and your landlord will receive a letter confirming receipt. Use your reference number to track your complaint.'},
                  {n:'3',t:'Preliminary investigation',d:'Tribunal staff check whether your complaint qualifies as an unfair practice. If they need more details, they can ask both parties for more information. They can also send an inspector to inspect the property.'},
                  {n:'4',t:'Conciliation',d:'The Tribunal will first attempt to resolve the dispute through conciliation, a structured conversation between you and your landlord facilitated by a Tribunal officer. Many disputes are resolved at this stage.'},
                  {n:'5',t:'Formal hearing',d:'If conciliation fails, a formal hearing is held. Both parties present their case and the Tribunal makes a ruling that is legally binding on both parties.'},
                  {n:'6',t:'Ruling and enforcement',d:'The Tribunal\'s ruling is enforceable. If your landlord refuses to comply, you can approach a court to have it enforced under the Magistrate\'s Court Act.'},
                ].map(p=>(
                  <div key={p.n} className="flex gap-4 p-4 rounded-xl" style={{border:'1px solid #E2E0D8'}}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#185FA5'}}>{p.n}</div>
                    <div><p className="font-semibold text-sm mb-1" style={{color:'#0C447C'}}>{p.t}</p><p className="text-sm" style={{color:'#374151'}}>{p.d}</p></div>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>8. Special situations</h2>
              <h3 className="text-lg font-bold mt-6 mb-2" style={{color:'#185FA5'}}>What if my landlord sells the property?</h3>
              <p className="text-gray-700 mb-4">Your lease remains valid and binding on the new owner. This is the legal principle of "huur gaat voor koop", meaning rent before sale. A sale does not cancel your lease. The new owner steps into the shoes of your previous landlord and is bound by all the same obligations.</p>
              <h3 className="text-lg font-bold mt-6 mb-2" style={{color:'#185FA5'}}>What if I need to end my lease early?</h3>
              <p className="text-gray-700 mb-4">You can end a fixed-term lease early, but you may be liable for a reasonable cancellation penalty. The Consumer Protection Act (section 14) limits what landlords can charge for early cancellation. They can only recover reasonable costs, not the full remaining rent for the balance of the lease.</p>
              <h3 className="text-lg font-bold mt-6 mb-2" style={{color:'#185FA5'}}>What if my landlord will not return my deposit?</h3>
              <p className="text-gray-700 mb-6">First, send a formal written demand by email or registered post, giving your landlord 7 days to respond. If they do not comply, lodge a complaint with the Rental Housing Tribunal. Keep all proof of payment of the original deposit and all correspondence.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>9. Frequently asked questions</h2>
              {[
                {q:'Are verbal lease agreements legally binding?',a:'Yes. The moment you take occupation of a dwelling, an agreement exists between you, whether or not it is written down. However, since the 2014 amendment, landlords are required to put leases in writing. A verbal agreement is much harder to enforce.'},
                {q:'Does it cost anything to use the Tribunal?',a:'No. All Tribunal services are completely free for both tenants and landlords. The only cost that could arise is sheriff\'s fees if a ruling needs to be enforced through the courts, and this is outside the Tribunal process itself.'},
                {q:'Can I go to court and the Tribunal at the same time?',a:'No. You must choose one. If proceedings have already started in a court, the Tribunal will not take up the same dispute, and vice versa.'},
                {q:'Can my landlord increase the rent at any time?',a:'No. Rent can only be increased in accordance with the terms of your lease, and your landlord must give you proper notice. Arbitrary or sudden increases mid-lease are not permitted.'},
              ].map(f=>(
                <div key={f.q} className="mb-4 p-4 rounded-xl" style={{border:'1px solid #E2E0D8'}}>
                  <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>{f.q}</p>
                  <p className="text-sm" style={{color:'#374151'}}>{f.a}</p>
                </div>
              ))}

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>10. Key takeaways</h2>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0F6E56'}}>Remember these five things</p>
                <ol className="text-sm space-y-2 list-decimal list-inside" style={{color:'#1a1a1a'}}>
                  <li>Your lease does not need to be in writing to be legally binding, but landlords must now provide one in writing under the 2014 amendment.</li>
                  <li>Your deposit must earn interest, and must be refunded within 7 days if there is no damage, or 21 days if deductions are made, with a full written breakdown.</li>
                  <li>The Rental Housing Tribunal is completely free, and its rulings carry the same weight as a Magistrate's Court order.</li>
                  <li>Document everything: photographs, written notices, receipts. This is your evidence if a dispute escalates.</li>
                  <li>Never withhold rent as leverage, even if your landlord is in the wrong. It weakens your legal position significantly.</li>
                </ol>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>11. Where to get help</h2>
              <p className="text-gray-700 mb-4">Rental Housing Tribunals operate provincially. Contact the Tribunal in the province where the property is located. The national Department of Human Settlements can direct you to your local Tribunal.</p>
              <div className="rounded-lg overflow-hidden mb-8" style={{border:'1px solid #E2E0D8'}}>
                <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.82rem'}}>
                  <thead>
                    <tr style={{backgroundColor:'#185FA5',color:'#fff'}}>
                      <th style={{padding:'10px 14px',textAlign:'left'}}>Contact</th>
                      <th style={{padding:'10px 14px',textAlign:'left'}}>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['National call centre','0860 106 166'],
                      ['National email','info@dhs.gov.za'],
                      ['National website','www.dhs.gov.za'],
                      ['Gauteng Tribunal','011 355 4000 / 012 483 5020'],
                      ['Western Cape (Cape Town)','6th Floor, Norton Rose House, 8 Riebeek Street, Cape Town'],
                    ].map(([contact,detail],i)=>(
                      <tr key={contact} style={{backgroundColor:i%2===0?'#fff':'#F5F4F0'}}>
                        <td style={{padding:'10px 14px',borderBottom:'1px solid #E2E0D8',fontWeight:600,color:'#0C447C',verticalAlign:'top'}}>{contact}</td>
                        <td style={{padding:'10px 14px',borderBottom:'1px solid #E2E0D8',color:'#1a1a1a',verticalAlign:'top'}}>{detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="text-xs space-y-2" style={{borderTop:'1px solid #E2E0D8',paddingTop:'24px',color:'#888780'}}>
                <p><strong style={{color:'#0C447C'}}>Primary legislation:</strong> Rental Housing Act 50 of 1999; Rental Housing Amendment Act 35 of 2014</p>
                <p>This module is for educational purposes only and does not constitute legal advice. For complex disputes, consult a qualified attorney or your provincial Rental Housing Tribunal directly.</p>
              </div>

            </article>

            <aside style={{position:'sticky',top:'80px'}}>
              <div className="rounded-2xl overflow-hidden" style={{border:'1px solid #c5d8ef'}}>
                <div style={{backgroundColor:'#1a2340',padding:'14px 18px'}}>
                  <p className="text-xs font-bold tracking-widest uppercase" style={{color:'#8fa8cc'}}>Relevant authority</p>
                </div>
                <div style={{backgroundColor:'#f0f5fc',padding:'20px'}}>
                  <div className="inline-block text-xs font-bold tracking-wide uppercase px-3 py-1 rounded mb-3" style={{backgroundColor:'#1a2340',color:'#b3d0f0'}}>Rental Housing Tribunal</div>
                  <p className="font-bold text-sm mb-1" style={{color:'#1a2340'}}>Dept. of Human Settlements</p>
                  <p className="text-xs mb-3" style={{color:'#1a5ea5'}}>Free government dispute resolution</p>
                  <div className="space-y-2 text-xs" style={{color:'#4a5568'}}>
                    <div><a href="mailto:info@dhs.gov.za" style={{color:'#1a5ea5'}}>info@dhs.gov.za</a></div>
                    <div><a href="https://www.dhs.gov.za" target="_blank" rel="noopener noreferrer" style={{color:'#1a5ea5'}}>www.dhs.gov.za</a></div>
                  </div>
                  <div className="mt-4 pt-4 text-xs leading-relaxed" style={{borderTop:'1px solid #c5d8ef',color:'#718096'}}>
                    The Rental Housing Tribunal is a free government service. No lawyer needed. Rulings carry the same weight as a Magistrate's Court order.
                  </div>
                </div>
              </div>
              <a href="/learn" className="flex items-center gap-2 mt-4 text-sm font-medium" style={{color:'#1a5ea5'}}>← Back to all modules</a>
              <div className="rounded-xl mt-4 p-4" style={{backgroundColor:'#1a2340'}}>
                <p className="text-xs font-bold mb-2" style={{color:'#8fa8cc'}}>Next module</p>
                <a href="/learn/ppra" className="text-sm font-medium" style={{color:'#ffffff'}}>The PPRA Explained →</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
    </AuthGate>
  );
}