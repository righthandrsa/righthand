import PaywallGate from '../../components/PaywallGate';
export default function PPRA() {
  return (
    <PaywallGate>
    <main>
      <div style={{backgroundColor:'#1a5ea5',padding:'48px 0 40px'}}>
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:'rgba(255,255,255,0.65)'}}>Home · Module 2 of 2</p>
          <h1 className="text-3xl font-bold mb-3" style={{color:'#ffffff'}}>The PPRA Explained: How to Use It and When to Complain</h1>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:'0.88rem'}}>Approx. 15 min read · Last reviewed June 2026</p>
        </div>
      </div>
      <div style={{backgroundColor:'#ffffff'}}>
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 lg:gap-12" style={{alignItems:'start'}}>
            <article style={{minWidth:0,color:'#1a1a1a'}}>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>What you will learn</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>What the PPRA is and why it replaced the old Estate Agency Affairs Board</li>
                  <li>What a Fidelity Fund Certificate is and why you must ask to see one before signing anything</li>
                  <li>What property practitioners are legally required to disclose to you before you sign</li>
                  <li>How to lodge a formal complaint with the PPRA and what happens after you do</li>
                  <li>How to claim from the Fidelity Fund if a practitioner has caused you financial loss</li>
                  <li>Red flags that should make you stop and verify before proceeding</li>
                </ul>
              </div>

              <div className="rounded-lg p-4 mb-8" style={{backgroundColor:'#F5F4F0'}}>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:'#888780'}}>In this module</p>
                <ol className="text-sm space-y-1 list-decimal list-inside" style={{color:'#0C447C'}}>
                  <li>What is the PPRA?</li>
                  <li>The Fidelity Fund Certificate</li>
                  <li>What practitioners must disclose before you sign</li>
                  <li>How to lodge a complaint</li>
                  <li>How to claim from the Fidelity Fund</li>
                  <li>Red flags to watch for</li>
                  <li>Key takeaways</li>
                </ol>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>1. What is the PPRA?</h2>
              <p className="text-gray-700 mb-4">The Property Practitioners Regulatory Authority (PPRA) is the statutory body that regulates everyone who earns a commission or fee from property transactions in South Africa. This includes estate agents, rental agents, bond originators, home inspectors, and property managers.</p>
              <p className="text-gray-700 mb-4">The PPRA replaced the old Estate Agency Affairs Board (EAAB) following the commencement of the Property Practitioners Act 22 of 2019. The change was significant: the new Act broadened the definition of who counts as a property practitioner, introduced stricter compliance requirements, and gave the PPRA stronger enforcement powers.</p>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>Why this matters to you as a consumer</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Before the Property Practitioners Act, many consumers who lost money due to dishonest agents had limited recourse. The PPRA now maintains a Fidelity Fund specifically to compensate consumers who suffer financial loss because of a practitioner's dishonest conduct. Knowing how to use this system could recover significant money if something goes wrong in a property transaction.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>2. The Fidelity Fund Certificate</h2>
              <p className="text-gray-700 mb-4">Every property practitioner who is legally allowed to operate must hold a valid Fidelity Fund Certificate (FFC). This certificate is issued annually by the PPRA and confirms that the practitioner is registered, has paid their levy, and is in good standing.</p>
              <p className="text-gray-700 mb-4">Crucially, a practitioner without a valid FFC has no legal right to earn a commission or fee from any property transaction. If you pay commission to an unregistered practitioner, that commission may be unrecoverable, and you lose all the protections the Fidelity Fund provides.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#FBEAF0',borderLeft:'4px solid #993556'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#993556'}}>Always ask to see the FFC before proceeding</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>This is not a rude request. It is your legal right, and any legitimate practitioner will produce it without hesitation. You can also verify a practitioner's registration status directly on the PPRA website at theppra.org.za. Do this before signing any mandate, offer to purchase, or lease agreement facilitated by an agent.</p>
              </div>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>Note on attorneys</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Attorneys who handle property transactions, such as conveyancers, are not regulated by the PPRA. They fall under the Legal Practice Council. If your complaint is about a conveyancing attorney, contact the Legal Practice Council, not the PPRA.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>3. What practitioners must disclose before you sign</h2>
              <h3 className="text-lg font-bold mt-6 mb-2" style={{color:'#185FA5'}}>Section 67: the mandatory disclosure form</h3>
              <p className="text-gray-700 mb-4">Before showing you a property or presenting any offer, a property practitioner is legally required to provide you with a mandatory disclosure form. This form discloses the practitioner's registration details, any conflicts of interest, and the basis on which they are acting (for the seller, for the buyer, or for both).</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0F6E56'}}>What happens if the disclosure form is missing</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>If a practitioner fails to provide the mandatory disclosure form before you sign an offer to purchase, the law treats this as if no defects in the property were disclosed at all. This can actually work in your favour as a buyer, as it strengthens your position if hidden defects are discovered after transfer. It also constitutes a breach by the practitioner that can be reported to the PPRA.</p>
              </div>
              <h3 className="text-lg font-bold mt-6 mb-2" style={{color:'#185FA5'}}>Section 49 of the CPA: no hidden clauses</h3>
              <p className="text-gray-700 mb-4">The Consumer Protection Act also applies to property transactions. Any clause in a mandate or sale agreement that limits the agent's liability or transfers risk to you must be brought to your explicit attention before you sign. It must be in plain language and you must have enough time to understand it. A clause buried in fine print that you were not told about is likely unenforceable.</p>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>Pressure to sign before receiving the disclosure form</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Being asked to sign an offer or a mandate before receiving the disclosure form is a clear procedural violation under section 67 of the Property Practitioners Act. Do not sign anything until you have received, read, and understood the disclosure form. This is your right, and any legitimate agent will respect it.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>4. How to lodge a complaint with the PPRA</h2>
              <p className="text-gray-700 mb-4">If you have a complaint about a property practitioner's conduct, you can lodge it directly with the PPRA. The process is online and free.</p>
              <div className="space-y-3 mb-6">
                {[
                  {n:'1',t:'Gather your documentation',d:'Collect all relevant documents: the mandate, sale agreement, disclosure form (or evidence that it was not provided), correspondence with the agent, proof of any payments made, and a clear written description of what happened.'},
                  {n:'2',t:'Lodge the complaint online',d:'Go to theppra.org.za and use the online complaint portal. Describe the conduct clearly and upload your supporting documents. You will receive a reference number.'},
                  {n:'3',t:'Investigation',d:'The PPRA will investigate the complaint. They may request additional information from you or the practitioner. The practitioner is given an opportunity to respond to your complaint.'},
                  {n:'4',t:'Disciplinary hearing',d:'If the investigation finds grounds for a hearing, the matter proceeds to the PPRA\'s disciplinary committee. Both parties present their case.'},
                  {n:'5',t:'Sanctions',d:'If the practitioner is found guilty, sanctions can include fines, suspension of their FFC, or in serious cases cancellation of their registration. Criminal matters can result in imprisonment of up to 10 years under the Property Practitioners Act.'},
                ].map(p=>(
                  <div key={p.n} className="flex gap-4 p-4 rounded-xl" style={{border:'1px solid #E2E0D8'}}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#185FA5'}}>{p.n}</div>
                    <div><p className="font-semibold text-sm mb-1" style={{color:'#0C447C'}}>{p.t}</p><p className="text-sm" style={{color:'#374151'}}>{p.d}</p></div>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>5. How to claim from the Fidelity Fund</h2>
              <p className="text-gray-700 mb-4">The Fidelity Fund exists to compensate consumers who suffer financial loss as a direct result of a property practitioner's dishonest conduct. This includes theft of trust monies, fraud, and misappropriation of funds held on your behalf.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>Two things must happen before a Fidelity Fund claim is processed</p>
                <ol className="text-sm space-y-2 list-decimal list-inside" style={{color:'#1a1a1a'}}>
                  <li>You must have lodged a formal complaint with the PPRA against the practitioner</li>
                  <li>You must have opened a criminal case against the practitioner at a South African Police Service station</li>
                </ol>
                <p className="text-sm mt-3" style={{color:'#1a1a1a'}}>Both steps are required. Neither can be skipped. The PPRA has a responsibility to protect the Fund against fraudulent or unsubstantiated claims, so the sequencing exists to protect the fund itself.</p>
              </div>
              <div className="space-y-3 mb-6">
                {[
                  {n:'1',t:'Lodge a formal complaint with the PPRA',d:'As described in the section above. Keep your reference number.'},
                  {n:'2',t:'Open a criminal case at your nearest SAPS station',d:'Report the practitioner\'s dishonest conduct to the police. Get your case number in writing.'},
                  {n:'3',t:'Submit your Fidelity Fund claim to the PPRA',d:'Include your PPRA complaint reference number, your SAPS case number, all supporting documentation, and a clear calculation of your financial loss.'},
                  {n:'4',t:'Await the outcome',d:'The PPRA will assess your claim. If successful, compensation is paid from the Fidelity Fund up to the prescribed limits.'},
                ].map(p=>(
                  <div key={p.n} className="flex gap-4 p-4 rounded-xl" style={{border:'1px solid #E2E0D8'}}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#185FA5'}}>{p.n}</div>
                    <div><p className="font-semibold text-sm mb-1" style={{color:'#0C447C'}}>{p.t}</p><p className="text-sm" style={{color:'#374151'}}>{p.d}</p></div>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>6. Red flags to watch for</h2>
              <ul className="text-gray-700 mb-4 space-y-3 list-disc list-inside">
                <li>No "Registered with the PPRA" wording on the agent's letterhead, business card, or marketing material</li>
                <li>Refusal or hesitation to show you a current Fidelity Fund Certificate when asked directly</li>
                <li>No mandatory disclosure form provided before you are asked to make an offer on a property</li>
                <li>Pressure to sign before you have received and read the disclosure form, which is a clear procedural violation under section 67</li>
                <li>Unsolicited emails demanding payment claiming to be from the old EAAB. The PPRA has specifically warned about correspondence purporting to be from the EAAB demanding outstanding debt payments, which should be treated as suspicious</li>
                <li>An agent who cannot confirm their registration number when you ask</li>
              </ul>
              <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>Verify before you sign anything</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Go to theppra.org.za and use the practitioner search to verify your agent's registration before signing any document. It takes less than a minute and protects you from the consequences of dealing with an unregistered practitioner.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>7. Key takeaways</h2>
              <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0F6E56'}}>Remember these five things</p>
                <ol className="text-sm space-y-2 list-decimal list-inside" style={{color:'#1a1a1a'}}>
                  <li>Always ask to see your agent's current Fidelity Fund Certificate before proceeding with any property transaction. It is a legal requirement, not a courtesy.</li>
                  <li>A missing mandatory disclosure form can actually work in your favour legally. The law treats it as if no defects were disclosed at all.</li>
                  <li>Complaints to the PPRA are lodged online and can lead to real disciplinary consequences, including fines and in serious cases imprisonment of up to 10 years.</li>
                  <li>A Fidelity Fund claim requires two things first: a formal complaint with the PPRA and an open criminal case against the practitioner. Neither step can be skipped.</li>
                  <li>Attorneys are not covered by the PPRA. Complaints about conveyancing attorneys go to the Legal Practice Council instead.</li>
                </ol>
              </div>

              <div className="text-xs space-y-2" style={{borderTop:'1px solid #E2E0D8',paddingTop:'24px',color:'#888780'}}>
                <p><strong style={{color:'#0C447C'}}>Primary legislation:</strong> Property Practitioners Act 22 of 2019 (sections 55, 67, 69); Property Practitioners Act Regulations (Regulation 36)</p>
                <p><strong style={{color:'#0C447C'}}>Primary sources:</strong> Official PPRA website (theppra.org.za); PPRA Code of Conduct (1 February 2022); PPRA Practice Note and Guidance Note on Mandatory Disclosure Forms</p>
                <p><strong style={{color:'#0C447C'}}>Secondary sources:</strong> Cliffe Dekker Hofmeyr; SD Law Cape Town Attorneys; Barter McKellar; Thomson Wilks; VDM Attorneys</p>
                <p>This module is for educational purposes only and does not constitute legal advice. Always verify current requirements directly with the PPRA at theppra.org.za before relying on specific procedural details, as PPRA systems and processes are subject to ongoing change. For advice specific to your situation, consult a qualified South African attorney.</p>
              </div>

            </article>

            <aside style={{position:'sticky',top:'80px'}}>
              <div className="rounded-2xl overflow-hidden" style={{border:'1px solid #c5d8ef'}}>
                <div style={{backgroundColor:'#1a2340',padding:'14px 18px'}}>
                  <p className="text-xs font-bold tracking-widest uppercase" style={{color:'#8fa8cc'}}>Relevant authority</p>
                </div>
                <div style={{backgroundColor:'#f0f5fc',padding:'20px'}}>
                  <div className="inline-block text-xs font-bold tracking-wide uppercase px-3 py-1 rounded mb-3" style={{backgroundColor:'#1a2340',color:'#b3d0f0'}}>PPRA</div>
                  <p className="font-bold text-sm mb-1" style={{color:'#1a2340'}}>Property Practitioners Regulatory Authority</p>
                  <p className="text-xs mb-3" style={{color:'#1a5ea5'}}>Statutory regulatory body</p>
                  <div className="space-y-2 text-xs" style={{color:'#4a5568'}}>
                    <div><a href="mailto:info@ppra.org.za" style={{color:'#1a5ea5'}}>info@ppra.org.za</a></div>
                    <div><a href="https://theppra.org.za" target="_blank" rel="noopener noreferrer" style={{color:'#1a5ea5'}}>theppra.org.za</a></div>
                  </div>
                  <div className="mt-4 pt-4 text-xs leading-relaxed" style={{borderTop:'1px solid #c5d8ef',color:'#718096'}}>
                    Content compiled from publicly available PPRA sources. Verify current requirements directly at theppra.org.za.
                  </div>
                </div>
              </div>
              <a href="/learn" className="flex items-center gap-2 mt-4 text-sm font-medium" style={{color:'#1a5ea5'}}>← Back to all modules</a>
              <div className="rounded-xl mt-4 p-4" style={{backgroundColor:'#1a2340'}}>
                <p className="text-xs font-bold mb-2" style={{color:'#8fa8cc'}}>You have completed all modules</p>
                <a href="/learn" className="text-sm font-medium" style={{color:'#ffffff'}}>Browse all topics →</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
    </PaywallGate>
  );
}