import PaywallGate from '../../components/PaywallGate';

export default function TaxObjectionsDisputes() {
  return (
    <PaywallGate>
    <main>
      <div style={{backgroundColor:'#1a5ea5',padding:'48px 0 40px'}}>
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:'rgba(255,255,255,0.65)'}}>Tax · Module 5 of 5</p>
          <h1 className="text-3xl font-bold mb-3" style={{color:'#ffffff'}}>Objections, Disputes, and What to Do When SARS Gets It Wrong</h1>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:'0.88rem'}}>Approx. 16 min read · Last reviewed September 2026</p>
        </div>
      </div>

      <div style={{backgroundColor:'#ffffff'}}>
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 lg:gap-12" style={{alignItems:'start'}}>
            <article style={{minWidth:0,color:'#1a1a1a'}}>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>What you will learn</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>How to identify which type of problem you have — and which remedy fits it</li>
                  <li>The difference between a correction, a remission request, and a formal objection</li>
                  <li>How to write a strong Notice of Objection with the right evidence</li>
                  <li>The "pay now, argue later" rule and how to request suspension of payment</li>
                  <li>What happens after you submit — including appeals and ADR</li>
                  <li>The most common mistakes that weaken a taxpayer&apos;s case</li>
                </ul>
              </div>

              <div className="rounded-lg p-4 mb-8" style={{backgroundColor:'#F5F4F0'}}>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:'#888780'}}>In this module</p>
                <ol className="text-sm space-y-1 list-decimal list-inside" style={{color:'#0C447C'}}>
                  <li>Start by identifying the type of problem</li>
                  <li>Correction, reasons, and reduced assessment</li>
                  <li>Penalties and requests for remission</li>
                  <li>The Notice of Objection</li>
                  <li>Evidence, tone, and the value of professional help</li>
                  <li>Payment while a dispute is underway</li>
                  <li>Worked example: SARS disallows freelance expenses</li>
                  <li>Late objections, appeals, and ADR</li>
                  <li>What happens after a dispute is submitted</li>
                  <li>Linking the dispute process to previous lessons</li>
                  <li>Common mistakes that weaken a taxpayer&apos;s case</li>
                  <li>Practical checklist</li>
                </ol>
              </div>

              <p className="text-gray-700 mb-4">Have you ever received a tax assessment you did not agree with? Perhaps SARS reduced your refund, disallowed an expense, added a penalty, or said you owed money when you expected a refund. That can be worrying, especially if the assessment is difficult to understand.</p>
              <p className="text-gray-700 mb-4">The good news is that an assessment is not always the end of the matter. South African taxpayers have formal ways to ask for an explanation, correct an error, request remission of a penalty, object to an assessment, and appeal an unfavourable decision.</p>
              <p className="text-gray-700 mb-4">A dispute is not an angry complaint. It is a structured administrative and legal process with prescribed forms, deadlines, reasons, evidence, and consequences. The safest approach is to identify the problem first and then choose the remedy that fits it.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>1. Start by Identifying the Type of Problem</h2>
              <p className="text-gray-700 mb-4">Before selecting a button on eFiling, ask: <em>"What exactly is wrong?"</em></p>

              <div className="rounded-lg overflow-hidden mb-6" style={{border:'1px solid #E2E0D8'}}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{backgroundColor:'#1a2340',color:'#ffffff'}}>
                      <th className="text-left p-3 font-semibold">Document from SARS</th>
                      <th className="text-left p-3 font-semibold">What it is</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Verification letter','A request for supporting information — not a final outcome'],
                      ['Statement of account','Records transactions and balances — may not explain why an assessment changed'],
                      ['Notice of assessment (ITA34)','Records the assessed result for personal income tax'],
                      ['Penalty assessment','Deals with non-compliance — normally follows a remission route before objection'],
                    ].map(([doc, desc], i) => (
                      <tr key={i} style={{backgroundColor: i % 2 === 0 ? '#f9fafb' : '#E6F1FB'}}>
                        <td className="p-3 font-medium" style={{color:'#0C447C'}}>{doc}</td>
                        <td className="p-3" style={{color:'#374151'}}>{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-3">Correct diagnosis prevents filing an objection when a simpler correction or response would solve the problem:</p>
              <ul className="text-sm space-y-2 list-disc list-inside mb-6" style={{color:'#374151'}}>
                <li>If you made a mistake on a submitted return → <strong>Request for Correction</strong></li>
                <li>If SARS&apos;s reasons are unclear → <strong>Request for Reasons</strong></li>
                <li>If the issue is an administrative penalty → <strong>Remission request first</strong></li>
                <li>If you are aggrieved by an assessment or objectionable SARS decision → <strong>Notice of Objection</strong></li>
                <li>If SARS disallows your objection in full or in part → <strong>Notice of Appeal</strong></li>
              </ul>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>2. Correction, Reasons, and Reduced Assessment</h2>

              {[
                {
                  t: 'Request for Correction',
                  d: 'Allows you to submit a complete corrected return where you made an error and the functionality remains available on eFiling. Typical examples: capturing a figure incorrectly, omitting allowable information, or selecting the wrong answer. The correction facility is generally not available after an audit or verification has been completed. If the "Request Correction" option is greyed out, do not force the issue — an objection or another prescribed route may be required. The corrected return must be complete, not merely a schedule of differences.',
                },
                {
                  t: 'Request for Reasons',
                  d: 'A revised assessment should ordinarily explain what SARS changed, but sometimes the explanation is too brief to formulate proper grounds of objection. A Request for Reasons asks SARS to explain the basis of the assessment or decision. It is not the objection itself and should not be used to ask for general advice or to follow up on a refund. A valid request must generally be delivered within 30 business days from the assessment or decision. It extends the objection period accordingly.',
                },
                {
                  t: 'Request for Reduced Assessment (RRA)',
                  d: 'Under section 93 of the Tax Administration Act, SARS may reduce an assessment in limited circumstances. The RRA01 process applies to individuals; RRA02 to companies or trusts. These forms offer a less formal mechanism for a readily apparent, undisputed error in a return or assessment, and for specified third-party or SARS processing errors. They do not replace objection and appeal rights. Do not treat an RRA as a general second chance to argue a disputed interpretation.',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-lg p-4 mb-4" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                  <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>{item.t}</p>
                  <p className="text-sm" style={{color:'#374151'}}>{item.d}</p>
                </div>
              ))}

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>3. Penalties and Requests for Remission</h2>
              <p className="text-gray-700 mb-4">Where SARS imposes an administrative non-compliance penalty, submit a Request for Remission before lodging an objection. An objection against the penalty may be premature if SARS has not yet considered remission. Also correct the underlying non-compliance immediately — if a return is outstanding, filing it can stop recurring monthly penalties from accumulating.</p>

              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>What makes a strong remission request</p>
                <p className="text-sm mb-2" style={{color:'#1a1a1a'}}>The request should identify the penalty, explain the relevant facts, show that the non-compliance has been remedied, and attach proof. Relevant factors under the Tax Administration Act include:</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>Whether it was your first incidence of non-compliance</li>
                  <li>Whether the duration was limited and the amount involved was small</li>
                  <li>Whether you had generally been compliant</li>
                  <li>Whether exceptional circumstances existed (serious illness, natural disaster, financial system failure)</li>
                </ul>
              </div>

              <div className="rounded-lg p-4 mb-6" style={{backgroundColor:'#FEF3F2',border:'1px solid #FECACA'}}>
                <p className="text-sm" style={{color:'#374151'}}><strong style={{color:'#B91C1C'}}>Weak explanation:</strong> &ldquo;I forgot&rdquo; or &ldquo;I was busy.&rdquo; <strong style={{color:'#0F6E56'}}>Strong submission:</strong> Gives dates, explains the cause, shows when you became aware, records corrective steps taken, and supplies evidence such as hospital records, affidavits, system incident reports, or proof of filing.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>4. The Notice of Objection</h2>
              <p className="text-gray-700 mb-4">A Notice of Objection is the prescribed formal statement that you are aggrieved by an assessment or an objectionable SARS decision.</p>

              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-1" style={{color:'#0C447C'}}>Key deadline</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>An objection must generally be submitted within <strong>80 business days</strong> after the date of the assessment or decision. Where valid reasons were requested, the 80-business-day period generally runs from the notice that adequate reasons have been provided. Calculate the deadline from the applicable notice — do not rely on a telephone conversation.</p>
              </div>

              <p className="text-gray-700 mb-3">The objection must:</p>
              <ul className="text-sm space-y-1 list-disc list-inside mb-4" style={{color:'#374151'}}>
                <li>Identify the assessment and the specific items disputed</li>
                <li>State the grounds in full</li>
                <li>Explain the result you seek</li>
                <li>Be submitted through the prescribed channel and form</li>
              </ul>
              <p className="text-gray-700 mb-4">A submission that merely says &ldquo;I disagree&rdquo; does not tell SARS what factual or legal error must be corrected. Uploading a bundle of documents without explaining what each proves creates unnecessary uncertainty.</p>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0F6E56'}}>A strong objection sets out</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>The assessment year or tax period and amount assessed</li>
                  <li>Each adjustment being challenged</li>
                  <li>Your proposed treatment and a clear calculation</li>
                  <li>The relevant facts and applicable tax rule</li>
                  <li>An indexed set of supporting documents</li>
                </ul>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>5. Evidence, Tone, and the Value of Professional Help</h2>
              <p className="text-gray-700 mb-4">The best evidence is organised evidence. Create a simple schedule linking each disputed item to the relevant invoice, certificate, bank entry, contract, calculation, or explanation. File names should be meaningful, documents should be readable, and totals should reconcile to the return.</p>
              <p className="text-gray-700 mb-4">The tone should remain factual and respectful. SARS does not need a description of how frustrating the matter feels — it needs a clear account of what happened, what SARS decided, why that decision is incorrect, and what evidence supports the requested change. Never alter, recreate, or backdate supporting records.</p>
              <p className="text-gray-700 mb-4">Registered tax practitioners can save you time and stress by managing correspondence, monitoring deadlines, checking calculations, and communicating with SARS under a power of attorney. A good practitioner will also say when a case is strong, when more evidence is needed, and when the cost of continuing may exceed the likely benefit.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>6. Payment While a Dispute Is Underway</h2>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FEF3F2',borderLeft:'4px solid #B91C1C'}}>
                <p className="font-bold text-sm mb-1" style={{color:'#B91C1C'}}>&ldquo;Pay now, argue later&rdquo;</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Lodging an objection does not automatically suspend the obligation to pay the assessed tax. A taxpayer who intends to dispute the liability may request suspension of payment through eFiling. SARS considers statutory factors when deciding whether to suspend — approval is not automatic. If suspension is granted, monitor the matter: SARS may withdraw it if you fail to pursue the objection or appeal.</p>
              </div>

              <p className="text-gray-700 mb-4">When requesting suspension, explain: the dispute, the amount involved, the effect of immediate payment, the prospects of recovery, and any risk factors relevant to SARS.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>7. Worked Example: SARS Disallows Freelance Expenses</h2>
              <p className="text-gray-700 mb-4">A taxpayer earned freelance income and claimed expenses. SARS selected the return for verification. The taxpayer uploaded invoices and a spreadsheet, but SARS issued a revised assessment disallowing most of the claim because the information did not establish that the expenses were incurred in producing taxable income.</p>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0C447C'}}>How to approach the objection</p>
                {[
                  'Read the assessment and verification outcome carefully. If SARS\'s reason is unclear, request reasons first.',
                  'Prepare an objection that separates expense categories and describes the business purpose of each one.',
                  'Reconcile amounts to invoices and bank statements — payments on a bank statement prove money moved, not that the expense was deductible.',
                  'Internet costs may require a business-use apportionment. Equipment may need to be treated as a capital asset rather than an immediate operating expense.',
                  'Travel claims need dates, destinations, business purposes, and supporting records.',
                  'Deal honestly with private use. The explanation must connect the payment to the income-producing activity.',
                ].map((step, i) => (
                  <div key={i} className="flex gap-3 mb-2">
                    <span className="text-sm font-bold shrink-0 mt-0.5" style={{color:'#1a5ea5'}}>{i + 1}.</span>
                    <p className="text-sm" style={{color:'#374151'}}>{step}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>8. Late Objections, Appeals, and ADR</h2>

              {[
                {
                  t: 'Late objections',
                  d: 'If the objection is late, you must request condonation and explain the delay. The explanation should cover the full period of delay, provide evidence, and address why the matter should still be entertained. Acting promptly once the problem is discovered is important.',
                },
                {
                  t: 'Notice of Appeal',
                  d: 'If SARS disallows the objection in full or in part, you may appeal. The appeal must generally be lodged within 30 business days after delivery of the objection outcome. Do not simply repeat the objection — the notice of appeal must identify the disputed findings and maintain a coherent factual and legal case.',
                },
                {
                  t: 'Alternative Dispute Resolution (ADR)',
                  d: 'ADR may be selected at appeal stage where the matter is suitable. It is less formal than litigation and allows you and SARS to explore whether the dispute can be resolved. It does not guarantee a compromise. Any resolution must be properly recorded; if the dispute is not resolved, the appeal may proceed to the tax board or tax court.',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-lg p-4 mb-4" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                  <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>{item.t}</p>
                  <p className="text-sm" style={{color:'#374151'}}>{item.d}</p>
                </div>
              ))}

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>9. What Happens After a Dispute Is Submitted</h2>
              <p className="text-gray-700 mb-4">Submitting an objection is an important step, but it is not the end of the process. Keep the eFiling submission confirmation, note the case or reference number, and save an exact copy of every document supplied.</p>
              <p className="text-gray-700 mb-4">SARS may issue an acknowledgement, ask for further supporting material, notify you that the objection is invalid, allow or disallow the objection, or issue a revised assessment. Read each communication as soon as it arrives — it may contain a new deadline or require corrective action.</p>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>Invalid objection ≠ rejected objection</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>An invalid objection may mean the prescribed form was incomplete, the grounds were not stated properly, the assessment was not identified, or a procedural requirement was missed. The notice will explain the defect. Address it directly rather than resubmitting the same material.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>10. Linking the Dispute Process to Previous Lessons</h2>
              <p className="text-gray-700 mb-4">The earlier modules on filing and supporting documents are not separate from the dispute process — they are its foundation. An accurate return gives SARS a clear starting point. Complete supporting documents make verification easier. A careful response to a verification request may prevent an adverse revised assessment. If a disagreement still arises, the same records become the evidence needed for objection, appeal, or ADR.</p>
              <p className="text-gray-700 mb-4">Consider a taxpayer who claims a deduction but keeps only a bank statement. The statement may prove payment, yet it may not show what was purchased or whether the expense related to taxable income. If the taxpayer also keeps the supplier invoice, contract, business-use calculation, and a brief explanation, the claim is easier to verify and defend.</p>
              <p className="text-gray-700 mb-4">Create a simple annual tax file containing returns, assessments, certificates, invoices, proof of payment, correspondence, calculations, and submission confirmations. Digital documents should have clear file names and be grouped by tax year and category.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>11. Common Mistakes That Weaken a Taxpayer&apos;s Case</h2>

              {[
                'Responding to the wrong document — a verification request needs supporting information, while an adverse assessment may require reasons or an objection.',
                'Missing the deadline because you wait for a telephone call or assume SARS will send another reminder.',
                'Submitting broad statements without calculations or evidence.',
                'Claiming amounts that include a private element without explaining a reasonable apportionment.',
                'Allowing the grounds of dispute to change from one stage to the next without explanation — the objection should present the case fully and clearly.',
                'Assuming that an eFiling status of "submitted" means SARS has accepted the merits of the case. It confirms transmission, not success.',
                'Not checking a reduced assessment line by line against your objection to confirm that every accepted item was implemented.',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 mb-3">
                  <span className="text-sm font-bold shrink-0 mt-0.5" style={{color:'#B91C1C'}}>✗</span>
                  <p className="text-sm" style={{color:'#374151'}}>{item}</p>
                </div>
              ))}

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>12. Practical Checklist</h2>
              <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                {[
                  'Download the assessment, outcome letter, statement of account, and all related notices.',
                  'Record the date of every notice and calculate the relevant business-day deadline.',
                  'Identify whether the matter is a taxpayer error, an unexplained SARS adjustment, a penalty, an objectionable assessment, or a readily apparent undisputed error.',
                  'Check whether Request for Correction is available and appropriate.',
                  'If reasons are inadequate, submit a valid Request for Reasons in time.',
                  'For a remittable penalty or interest item, use the remission process first and correct the underlying non-compliance.',
                  'Prepare grounds of objection that address each adjustment separately.',
                  'Attach readable, indexed evidence and reconcile every amount.',
                  'Consider a suspension-of-payment request where tax is payable and a dispute will be pursued.',
                  'Save submission confirmations and monitor eFiling correspondence.',
                  'Read any reduced or revised assessment line by line to confirm every accepted item was implemented.',
                  'If the objection is disallowed or partly allowed, assess the merits, cost, evidence, and 30-business-day appeal deadline promptly.',
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 mb-2">
                    <span className="text-sm font-bold shrink-0 mt-0.5" style={{color:'#0F6E56'}}>✓</span>
                    <p className="text-sm" style={{color:'#1a1a1a'}}>{item}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>The bottom line</p>
                <p className="text-sm" style={{color:'#374151'}}>When SARS gets something wrong, taxpayers have rights — but those rights work best when used calmly, accurately, and on time. The strongest response begins with understanding the notice and choosing the correct process. The dispute system is structured, with a correction route, reasons process, remission procedure, objection, appeal, ADR, and — in suitable cases — a reduced assessment. Knowing which option applies at each stage helps avoid unnecessary cost and stress.</p>
              </div>

              <div className="text-xs space-y-2" style={{borderTop:'1px solid #E2E0D8',paddingTop:'24px',color:'#888780'}}>
                <p><strong style={{color:'#0C447C'}}>Primary legislation:</strong> Tax Administration Act 28 of 2011 (sections 93, 104–107) · Income Tax Act 58 of 1962</p>
                <p>This module is for educational purposes only and does not constitute legal or tax advice. Consult a registered tax practitioner for advice specific to your circumstances.</p>
              </div>

            </article>

            <aside style={{position:'sticky',top:'80px'}}>
              <div className="rounded-2xl overflow-hidden" style={{border:'1px solid #c5d8ef'}}>
                <div style={{backgroundColor:'#1a2340',padding:'14px 18px'}}>
                  <p className="text-xs font-bold tracking-widest uppercase" style={{color:'#8fa8cc'}}>Content contributor</p>
                </div>
                <div style={{backgroundColor:'#f0f5fc',padding:'20px'}}>
                  <div className="inline-block text-xs font-bold tracking-wide uppercase px-3 py-1 rounded mb-3" style={{backgroundColor:'#1a2340',color:'#b3d0f0'}}>Swarts Capital</div>
                  <p className="font-bold text-sm mb-1" style={{color:'#1a2340'}}>Alston Swarts</p>
                  <p className="text-xs mb-3" style={{color:'#1a5ea5'}}>Professional Accountant &amp; Tax Practitioner (SA)</p>
                  <div className="space-y-2 text-xs" style={{color:'#4a5568'}}>
                    <div><a href="https://swartscapital.com" target="_blank" rel="noopener noreferrer" style={{color:'#1a5ea5'}}>swartscapital.com</a></div>
                  </div>
                  <div className="mt-4 pt-4 text-xs leading-relaxed" style={{borderTop:'1px solid #c5d8ef',color:'#718096'}}>
                    Content provided for educational purposes only. Consult a registered tax practitioner for advice specific to your circumstances.
                  </div>
                </div>
              </div>
              <a href="/learn" className="flex items-center gap-2 mt-4 text-sm font-medium" style={{color:'#1a5ea5'}}>← Back to all modules</a>
              <div className="rounded-xl mt-4 p-4" style={{backgroundColor:'#1a2340'}}>
                <p className="text-xs font-bold mb-2" style={{color:'#8fa8cc'}}>Previous in Tax</p>
                <a href="/learn/tax-medical-credits" className="text-sm font-medium" style={{color:'#ffffff'}}>← Medical Tax Credits</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
    </PaywallGate>
  );
}
