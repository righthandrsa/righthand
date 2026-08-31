import PaywallGate from '../../components/PaywallGate';

export default function TaxMedicalCredits() {
  return (
    <PaywallGate>
    <main>
      <div style={{backgroundColor:'#1a5ea5',padding:'48px 0 40px'}}>
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:'rgba(255,255,255,0.65)'}}>Tax · Module 4 of 4</p>
          <h1 className="text-3xl font-bold mb-3" style={{color:'#ffffff'}}>Medical Tax Credits and Out-of-Pocket Medical Expenses Explained</h1>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:'0.88rem'}}>Approx. 12 min read · Last reviewed August 2026</p>
        </div>
      </div>

      <div style={{backgroundColor:'#ffffff'}}>
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 lg:gap-12" style={{alignItems:'start'}}>
            <article style={{minWidth:0,color:'#1a1a1a'}}>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>What you will learn</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>The difference between a medical tax credit and a deduction — and why it matters</li>
                  <li>Which medical expenses can be claimed and which cannot</li>
                  <li>How disability-related cost claims work and what documentation is required</li>
                  <li>What SARS typically asks for during a medical expense verification</li>
                  <li>How to build a record-keeping system that survives an audit</li>
                </ul>
              </div>

              <div className="rounded-lg p-4 mb-8" style={{backgroundColor:'#F5F4F0'}}>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:'#888780'}}>In this module</p>
                <ol className="text-sm space-y-1 list-decimal list-inside" style={{color:'#0C447C'}}>
                  <li>What the rule means in plain English</li>
                  <li>Why people struggle with medical claims</li>
                  <li>What SARS usually needs</li>
                  <li>Step-by-step action plan</li>
                  <li>Examples and mini case studies</li>
                  <li>How the medical credit system works in practice</li>
                  <li>Qualifying expenses: what to check before claiming</li>
                  <li>Disability and physical impairment claims</li>
                  <li>Common mistakes that delay refunds</li>
                  <li>Recommended record-keeping system</li>
                  <li>Final checklist before filing</li>
                </ol>
              </div>

              <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#1a2340'}}>Opening scenario: the claim that failed verification</p>
                <p className="text-sm" style={{color:'#374151'}}>Michael belongs to a medical scheme and pays for himself, his spouse, and two children. During the year he also paid for dental treatment, prescription spectacles, specialist consultations, and medication not fully covered by the scheme. At filing season, he enters several amounts as medical expenses and expects a larger refund. SARS requests supporting documents. Michael has some receipts, but others are missing, and several bank payments do not clearly show what was bought or whether the medical scheme declined the claim. Some expenses are allowed, some are queried, and the refund is delayed. His problem is not that medical expenses can never help — his problem is weak documentation and uncertainty about what qualifies.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>1. What the Rule Means in Plain English</h2>
              <p className="text-gray-700 mb-4">South Africa uses medical tax credits, not a simple deduction for every medical rand spent. A tax credit reduces normal tax payable directly. This is different from a deduction, which reduces taxable income before tax is calculated.</p>

              <div className="rounded-lg overflow-hidden mb-6" style={{border:'1px solid #E2E0D8'}}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{backgroundColor:'#1a2340',color:'#ffffff'}}>
                      <th className="text-left p-3 font-semibold">Type of relief</th>
                      <th className="text-left p-3 font-semibold">How it works</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{backgroundColor:'#E6F1FB'}}>
                      <td className="p-3 font-medium" style={{color:'#0C447C'}}>Medical Scheme Fees Tax Credit</td>
                      <td className="p-3" style={{color:'#374151'}}>Fixed monthly credit linked to contributions paid to a registered medical scheme for the taxpayer and dependants. Reduces tax payable — not a cash grant.</td>
                    </tr>
                    <tr style={{backgroundColor:'#f9fafb'}}>
                      <td className="p-3 font-medium" style={{color:'#0C447C'}}>Out-of-pocket medical expenses</td>
                      <td className="p-3" style={{color:'#374151'}}>Expenses paid by the taxpayer that were not recovered from the medical scheme, medical savings account, insurer, or another source. Subject to qualifying rules and formulas.</td>
                    </tr>
                    <tr style={{backgroundColor:'#E6F1FB'}}>
                      <td className="p-3 font-medium" style={{color:'#0C447C'}}>Disability-related costs</td>
                      <td className="p-3" style={{color:'#374151'}}>Requires a completed ITR-DD confirmation form from a registered medical practitioner. The expense must be linked to the disability and fall within the qualifying rules.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-1" style={{color:'#854F0B'}}>If the taxpayer&apos;s tax payable is too low</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>If normal tax payable is lower than the available Medical Scheme Fees Tax Credit, the unused portion is not refunded separately or carried forward. This affects pensioners, low-income earners, students, and unemployed people who pay medical aid contributions but do not have enough taxable income to absorb the credit.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>2. Why People Struggle With Medical Claims</h2>
              {[
                {t:'Language',d:'Taxpayers hear "medical deduction" and assume every medical expense reduces taxable income. In reality, the system uses credits and formulas.'},
                {t:'Proof',d:'A receipt is useful, but it may not be enough if it does not show the patient, provider, service, date, and amount paid. A bank statement alone may prove that money left the account, but not necessarily that the expense qualifies.'},
                {t:'Timing',d:'Expenses normally matter in the year of assessment in which they are actually paid. Waiting until filing season to reconstruct the year can be frustrating.'},
                {t:'Family support',d:'The tax treatment depends on whether the person is a qualifying dependant under the relevant rules and whether the taxpayer has the necessary supporting documents. Good intentions do not replace documentary evidence.'},
              ].map((item, i) => (
                <div key={i} className="rounded-lg p-4 mb-3" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                  <p className="font-bold text-sm mb-1" style={{color:'#0C447C'}}>{item.t}</p>
                  <p className="text-sm" style={{color:'#374151'}}>{item.d}</p>
                </div>
              ))}

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>3. What SARS Usually Needs</h2>
              <ul className="text-sm space-y-2 mb-4 list-disc list-inside" style={{color:'#374151'}}>
                <li>Medical scheme tax certificate for the year</li>
                <li>Proof of medical scheme contributions paid by the taxpayer</li>
                <li>Schedule of out-of-pocket medical expenses</li>
                <li>Invoices or statements from doctors, hospitals, dentists, optometrists, pharmacies, therapists, or other qualifying providers</li>
                <li>Proof of payment — receipts or bank confirmations</li>
                <li>Proof that the expense was not recovered from the medical scheme, medical savings account, insurer, employer, or another party</li>
                <li>Prescription or medical motivation where relevant</li>
                <li>ITR-DD confirmation form and disability-related supporting documents where a disability claim is involved</li>
                <li>Clear records showing which dependant or patient each expense relates to</li>
              </ul>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-1" style={{color:'#0F6E56'}}>Always submit to medical aid first — even if you expect it to be declined</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>This creates a trail of evidence that the claim was not covered by the medical aid, which is required to claim the expense as an out-of-pocket medical expense. Without this paper trail, SARS may query whether the scheme ever paid.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>4. Step-by-Step Action Plan</h2>
              {[
                'Download the medical scheme tax certificate and check the membership months and dependants.',
                'Compare the certificate to payslips or bank statements to confirm who paid the contributions.',
                'Make a list of all out-of-pocket medical expenses paid during the tax year.',
                'Remove expenses that were refunded by the medical scheme, insurer, medical savings account, employer, or another party.',
                'Match each remaining expense to an invoice, receipt, statement, or proof of payment.',
                'Separate ordinary medical expenses from disability-related expenses.',
                'For disability-related claims, confirm that the ITR-DD and medical diagnosis documents are valid and retained.',
                'Do not estimate or inflate expenses — claim only what can be supported.',
                'Save the calculation schedule and supporting documents in the tax folder before filing.',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 mb-3">
                  <span className="text-sm font-bold shrink-0 mt-0.5" style={{color:'#1a5ea5'}}>{i + 1}.</span>
                  <p className="text-sm" style={{color:'#374151'}}>{item}</p>
                </div>
              ))}

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>5. Examples and Mini Case Studies</h2>
              {[
                {
                  name:'Thandi — Medical aid contributions only',
                  body:'Thandi is employed and belongs to a registered medical scheme. Her employer deducts her monthly contribution from her salary and reflects the medical scheme tax credit in the PAYE calculation. She has no out-of-pocket expenses for the year. The main tax relief is the monthly Medical Scheme Fees Tax Credit. Thandi should still keep her medical scheme certificate, because SARS may compare the certificate to the information on her return and to the PAYE information submitted by the employer.',
                },
                {
                  name:'Michael — Out-of-pocket expenses partly allowed',
                  body:'Michael paid R18 000 in medical expenses during the year. His medical scheme refunded R10 000 and declined R8 000. He may not claim the full R18 000 — only the unpaid or unrecovered portion can be considered. He must keep the medical scheme statement showing rejected claims, the invoices from the providers, and proof that he personally paid the accounts. If the records only show bank transfers without proper invoices, SARS may query the claim.',
                },
                {
                  name:'A parent with a child with a disability',
                  body:'A parent pays for therapy, assistive equipment, travel to specialist appointments, and specialised learning support for a child with a confirmed disability. The parent must be able to show that the child meets the disability definition, that the relevant ITR-DD confirmation form is available, and that each expense is necessarily linked to the disability or impairment. A general school fee, ordinary clothing purchase, or convenience item will not automatically become a disability expense simply because the household includes a person with a disability.',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-lg p-5 mb-4" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                  <p className="font-bold text-sm mb-2" style={{color:'#1a2340'}}>{item.name}</p>
                  <p className="text-sm" style={{color:'#374151'}}>{item.body}</p>
                </div>
              ))}

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>6. How the Medical Credit System Works in Practice</h2>
              <p className="text-gray-700 mb-4">The Medical Scheme Fees Tax Credit is a non-refundable rebate that reduces normal tax payable and cannot be carried forward if it is not used in the current year of assessment. It is a tax reduction — not a cash grant and not SARS reimbursing the full medical aid premium.</p>
              <p className="text-gray-700 mb-4">Additional medical expense relief is more fact-sensitive. The amount depends on the taxpayer category, the amount of qualifying unrecovered medical expenses, the medical scheme contributions paid, and the relevant formula for the year of assessment. Taxpayers aged 65 or older, or those with a qualifying disability situation, may be treated differently. Because the calculation can change based on age, disability status, taxable income, and payment details, taxpayers should avoid rough estimates and prepare a clear schedule before submitting.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>7. Qualifying Expenses: What to Check Before Claiming</h2>
              <p className="text-gray-700 mb-4">A practical four-question test before claiming any expense:</p>
              {[
                'Was the expense actually paid during the year of assessment?',
                'Was it paid for the taxpayer or a qualifying dependant?',
                'Does the expense relate to medical care, treatment, prescribed medicine, disability-related support, or another qualifying category?',
                'Was the amount not recovered from a medical scheme, medical savings account, insurer, employer, or another party?',
              ].map((q, i) => (
                <div key={i} className="flex gap-3 mb-3">
                  <span className="text-sm font-bold shrink-0 mt-0.5" style={{color:'#1a5ea5'}}>{i + 1}.</span>
                  <p className="text-sm" style={{color:'#374151'}}>{q}</p>
                </div>
              ))}

              <div className="rounded-lg p-5 mb-6 mt-4" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>Common expenses that create confusion</p>
                <p className="text-sm mb-2" style={{color:'#1a1a1a'}}>Vitamins, over-the-counter medicine, gym fees, wellness programmes, cosmetic procedures, transport, caregiver costs, educational support, and assistive technology. Some of these may qualify in limited circumstances — especially where there is a disability — but they should not be treated as automatically deductible. The taxpayer must connect the expense to a qualifying medical need and retain the supporting medical motivation.</p>
                <p className="text-sm font-medium" style={{color:'#854F0B'}}>Invoice ≠ proof of payment. SARS may require both. The strongest evidence package includes the provider invoice, the medical scheme claim statement, and proof of payment by the taxpayer.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>8. Disability and Physical Impairment Claims</h2>
              <p className="text-gray-700 mb-4">A registered medical practitioner must normally confirm the nature, duration, and severity of the condition on the required ITR-DD form. A disability confirmation does not convert every household cost into a qualifying expense — the cost should be directly connected to the disability and necessary in the circumstances.</p>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>What a good disability record includes</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>Completed ITR-DD medical confirmation</li>
                  <li>Invoices and proof of payment for each expense</li>
                  <li>Prescriptions or therapy reports where relevant</li>
                  <li>A schedule with columns for: date, patient, provider, description, amount paid, amount recovered, and reason for qualification</li>
                </ul>
                <p className="text-sm mt-3" style={{color:'#374151'}}>This explanation does not need to be complicated. A clear schedule makes the SARS verification process easier and faster.</p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>9. Common Mistakes That Delay Refunds</h2>
              {[
                'Claiming expenses that were already refunded by the medical scheme or paid from a medical savings account.',
                'Entering annual totals without keeping a detailed schedule of the underlying invoices and payments.',
                'Treating ordinary family support payments as medical expenses without checking whether the person is a qualifying dependant.',
                'Claiming disability-related expenses without a valid ITR-DD form or without linking the expense to the disability.',
                'Using bank statements alone where the description does not prove the medical nature of the expense.',
                'Forgetting expenses paid late in the year, or incorrectly including expenses paid after the year of assessment ended.',
                'Assuming that the amount on the medical scheme certificate is always complete and not checking separate cash payments made directly to providers.',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 mb-2">
                  <span className="text-sm font-bold shrink-0 mt-0.5" style={{color:'#B91C1C'}}>✕</span>
                  <p className="text-sm" style={{color:'#374151'}}>{item}</p>
                </div>
              ))}

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>10. Recommended Record-Keeping System</h2>
              <p className="text-gray-700 mb-4">Create one folder for the tax year and divide it into medical scheme certificates, out-of-pocket invoices, proof of payment, medical scheme claim statements, disability forms, prescriptions, and calculation schedules. Name digital copies clearly — for example: <em>"2026-01-15 Dentist Invoice Child A"</em> or <em>"2026-02-02 Pharmacy Proof of Payment"</em>.</p>
              <p className="text-gray-700 mb-4">Keep a spreadsheet that reconciles the claim: date, provider, patient, amount charged, amount paid by the scheme, amount paid from medical savings, amount paid personally, and the amount claimed. Where an expense is disability-related, add a column explaining the link to the disability. This schedule makes a SARS verification request much easier to respond to.</p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>11. Final Checklist Before Filing</h2>
              <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0F6E56'}}>What to remember</p>
                <ul className="text-sm space-y-2 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>Confirm the correct year of assessment and make sure every expense was actually paid in that year</li>
                  <li>Check the medical scheme certificate against payslips, bank statements, and membership records</li>
                  <li>Remove all expenses that were refunded, reversed, or paid by another party</li>
                  <li>Confirm that each patient is the taxpayer or a qualifying dependant</li>
                  <li>Attach the strongest available proof for each material amount — invoice, claim statement, and proof of payment</li>
                  <li>For disability claims, retain the ITR-DD confirmation form and supporting motivation</li>
                  <li>Keep the calculation schedule even if it is not uploaded immediately — SARS may request it later</li>
                  <li>Do not claim estimates, unsupported amounts, or expenses that merely feel health-related but do not meet the rules</li>
                </ul>
              </div>

              <div className="text-xs space-y-2" style={{borderTop:'1px solid #E2E0D8',paddingTop:'24px',color:'#888780'}}>
                <p><strong style={{color:'#0C447C'}}>Primary legislation:</strong> Income Tax Act 58 of 1962 · Section 6A and 6B (medical credits)</p>
                <p>This module is for educational purposes only and does not constitute legal or tax advice. Consult a registered tax practitioner for advice specific to your circumstances.</p>
              </div>

            </article>

            <aside style={{position:'sticky',top:'80px'}}>
              <div className="rounded-2xl overflow-hidden" style={{border:'1px solid #c5d8ef'}}>
                <div style={{backgroundColor:'#1a2340',padding:'14px 18px'}}>
                  <p className="text-xs font-bold tracking-widest uppercase" style={{color:'#8fa8cc'}}>Content contributor</p>
                </div>
                <div style={{backgroundColor:'#f0f5fc',padding:'20px'}}>
                  <p className="font-bold text-sm mb-1" style={{color:'#1a2340'}}>Alston Swarts</p>
                  <p className="text-xs font-semibold mb-1" style={{color:'#1a5ea5'}}>Swarts Capital</p>
                  <p className="text-xs mb-3" style={{color:'#4a5568'}}>Professional Accountant (SA) · Professional Tax Practitioner (SA) · Eligible AGA(SA)</p>
                  <a href="https://swartscapital.com" target="_blank" rel="noopener noreferrer" className="text-xs font-medium" style={{color:'#1a5ea5'}}>swartscapital.com →</a>
                  <div className="mt-4 pt-4 text-xs leading-relaxed" style={{borderTop:'1px solid #c5d8ef',color:'#718096'}}>
                    Content provided for educational purposes only. Consult a registered tax practitioner for advice specific to your circumstances.
                  </div>
                </div>
              </div>
              <a href="/learn" className="flex items-center gap-2 mt-4 text-sm font-medium" style={{color:'#1a5ea5'}}>← Back to all modules</a>
              <div className="rounded-xl mt-4 p-4" style={{backgroundColor:'#1a2340'}}>
                <p className="text-xs font-bold mb-2" style={{color:'#8fa8cc'}}>Previous in Tax</p>
                <a href="/learn/tax-auto-assessment" className="text-sm font-medium" style={{color:'#ffffff'}}>← Auto-Assessment to Verification</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
    </PaywallGate>
  );
}
