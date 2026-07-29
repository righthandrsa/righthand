import AuthGate from '../../components/AuthGate';

export default function TaxSarsProfile() {
  return (
    <AuthGate>
    <main>
      <div style={{backgroundColor:'#1a5ea5',padding:'48px 0 40px'}}>
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:'rgba(255,255,255,0.65)'}}>Tax · Module 1 of 2</p>
          <h1 className="text-3xl font-bold mb-3" style={{color:'#ffffff'}}>Getting SARS-Ready: Your Profile, eFiling, and Document Readiness</h1>
          <p style={{color:'rgba(255,255,255,0.7)',fontSize:'0.88rem'}}>Approx. 16 min read · Last reviewed July 2026</p>
        </div>
      </div>

      <div style={{backgroundColor:'#ffffff'}}>
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 lg:gap-12" style={{alignItems:'start'}}>
            <article style={{minWidth:0,color:'#1a1a1a'}}>

              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>What you will learn</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>Why your SARS profile matters as much as the tax return itself</li>
                  <li>What SARS normally needs from individual taxpayers and when</li>
                  <li>How to verify your banking details, contact information, and eFiling access before it becomes urgent</li>
                  <li>How to organise supporting documents so that SARS verification does not catch you off guard</li>
                </ul>
              </div>

              <div className="rounded-lg p-4 mb-8" style={{backgroundColor:'#F5F4F0'}}>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:'#888780'}}>In this module</p>
                <ol className="text-sm space-y-1 list-decimal list-inside" style={{color:'#0C447C'}}>
                  <li>Why August is the right month to get ready</li>
                  <li>Understanding your SARS profile</li>
                  <li>What SARS usually needs</li>
                  <li>Contact details and security access</li>
                  <li>Banking details and refund delays</li>
                  <li>Your August action plan</li>
                  <li>Auto-assessments and pre-populated information</li>
                  <li>Case studies</li>
                  <li>Responding to SARS verification requests</li>
                  <li>Common mistakes to avoid</li>
                  <li>Key takeaways</li>
                </ol>
              </div>

              {/* Intro */}
              <p className="text-gray-700 mb-4">Thandi is employed, receives an IRP5 every year, and assumes her tax affairs are simple. Then filing season arrives and she cannot log in to eFiling because her old cellphone number is still linked to her SARS profile. Her refund is also delayed because her banking details need verification. This is a common problem: your tax return itself may not be complicated, but your profile, security details, bank account, and documents may not be ready.</p>
              <p className="text-gray-700 mb-4">In practice, many delays start before your return is even opened. A taxpayer may know their income, deductions, and medical aid information, yet still be blocked by an outdated email address, a missing one-time pin, an unverified bank account, or documents that cannot be found when SARS asks for them.</p>
              <p className="text-gray-700 mb-4">This module explains why profile readiness matters, what SARS normally expects from individual taxpayers, and how to reduce the risk of filing-season delays. It is written for ordinary taxpayers — salaried employees, self-employed individuals, landlords, or people trying to understand whether an auto-assessment is complete.</p>

              {/* Section 1 */}
              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>1. Why August is the right month to get ready</h2>
              <p className="text-gray-700 mb-4">August sits inside the active tax-administration period for many individuals. Some taxpayers are still checking auto-assessments or preparing annual returns, while provisional taxpayers are also thinking about first-period estimates. This makes August a practical month for profile housekeeping.</p>
              <p className="text-gray-700 mb-4">If contact details are wrong, one-time pins may not arrive. If banking details are outdated, refunds can be delayed. If supporting documents are scattered, verification becomes stressful. If the taxpayer cannot remember their username or password, a simple filing task can turn into a time-consuming support problem.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>2026 filing season dates to know</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>Auto-assessments: 1 July to 12 July 2026</li>
                  <li>Non-provisional individuals: 13 July to 23 October 2026</li>
                  <li>Provisional taxpayers: 13 July 2026 to 22 January 2027</li>
                </ul>
              </div>
              <p className="text-gray-700 mb-4">August is also a useful time because there is still enough time to correct problems before deadlines become urgent. A taxpayer who discovers a profile problem early can deal with it methodically, while a taxpayer who discovers it on the last filing day may face unnecessary stress, missed deadlines, or penalties.</p>

              {/* Section 2 */}
              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>2. Understanding your SARS profile</h2>
              <p className="text-gray-700 mb-4">Your SARS profile is more than a login page. It is the central record that SARS uses to identify you, communicate with you, process returns, pay refunds, allocate payments, and verify information. It normally includes your identity information, tax reference details, contact information, banking information, registered tax products, returns, assessments, statements of account, notices, and supporting document requests.</p>
              <p className="text-gray-700 mb-4">When one part of the profile is wrong, it can affect other parts of the process. An incorrect cellphone number can stop a one-time pin from arriving, which can prevent login, which can prevent you from seeing that SARS has asked for documents.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>Profile changes may require verification</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Updating a cellphone number or email address may be straightforward if you can still authenticate yourself, but changing banking details is more sensitive because refunds are paid into that account. SARS generally verifies bank accounts before accepting changes and does not change banking details through telephone, fax, or post.</p>
              </div>

              {/* Section 3 */}
              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>3. What SARS usually needs</h2>
              <p className="text-gray-700 mb-4">SARS receives information from third parties — employers, medical schemes, banks, retirement fund administrators, and investment institutions. When you submit a return, SARS may compare your declaration with this third-party data. If the information does not match, or if a claim needs proof, SARS may request supporting documents.</p>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0C447C'}}>Documents SARS commonly needs</p>
                <ul className="text-sm space-y-2 list-disc list-inside" style={{color:'#374151'}}>
                  <li>Correct identity and tax registration information</li>
                  <li>Updated cellphone number and email address</li>
                  <li>Valid banking details in your own name</li>
                  <li>IRP5 or IT3(a) certificates from employers or pension funds</li>
                  <li>Medical aid tax certificates and proof of qualifying out-of-pocket expenses</li>
                  <li>Retirement annuity certificates, investment certificates, and interest certificates</li>
                  <li>Rental, freelance, commission, or side-hustle income records where relevant</li>
                  <li>Receipts, invoices, logbooks, contracts, and proof for any claim made</li>
                </ul>
              </div>
              <p className="text-gray-700 mb-4">Document readiness means more than having files saved somewhere on a phone. A well-organised folder should be structured by tax year and by category — employment income, medical aid, retirement annuity, investments, rental income, SARS correspondence, and proof of banking details. Each file should be named clearly, such as <em>IRP5_2026_EmployerName.pdf</em>. This makes it much easier to upload documents quickly if SARS asks for them.</p>

              {/* Section 4 */}
              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>4. Contact details and security access</h2>
              <p className="text-gray-700 mb-4">Correct contact details are essential because SARS uses them for authentication and communication. You may need a one-time pin to log in, update details, submit information, or confirm an instruction. If you have changed cellphone numbers, changed email addresses, lost access to an old mailbox, or used a work email you no longer control, the profile may become difficult to access.</p>
              <p className="text-gray-700 mb-4">Good practice is to use a reliable personal email address, a current cellphone number, and secure passwords. Avoid sharing login credentials with friends, family members, or unofficial service providers. If a tax practitioner assists you, the relationship should be formal and you should still understand what is being submitted.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>Watch out for scams</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>SARS messages should be checked carefully because scam messages may imitate official communication. Use official SARS channels rather than clicking links received by SMS, email, or social media. SARS will never ask for your login credentials, banking details, or payment via unofficial channels.</p>
              </div>

              {/* Section 5 */}
              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>5. Banking details and refund delays</h2>
              <p className="text-gray-700 mb-4">Banking details are one of the most important profile items because refunds can only be paid after SARS is satisfied that the account is valid and belongs to you. If you recently changed banks, closed an account, changed surname, or opened a new account, SARS may request verification. This can delay refunds even where the tax calculation itself is correct.</p>
              <p className="text-gray-700 mb-4">When SARS requests proof of banking details, you may need to provide identity proof and recent bank confirmation — a stamped bank letter or recent bank statement showing your legal name, account number, account type, and branch code. The information must be clear, recent, and consistent with your SARS profile.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0F6E56'}}>A valid bank account</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>SARS generally expects a cheque, savings, or transmission account in the taxpayer's own name with valid bank and branch details. Accounts in a third party's name will not be accepted. Prepare bank proof in advance and make sure it is legible before uploading it.</p>
              </div>

              {/* Section 6 */}
              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>6. Your August action plan</h2>
              <p className="text-gray-700 mb-4">This action plan should be completed in order — each step supports the next one.</p>
              {[
                {n:'1',t:'Log in to eFiling or the SARS MobiApp',d:'Confirm you can access your profile before you urgently need to submit anything. Successful login confirms your access is working.'},
                {n:'2',t:'Check your contact details',d:'Confirm your cellphone number and email address are current. Future security messages, one-time pins, and SARS notices depend on them.'},
                {n:'3',t:'Review your personal information',d:'Make sure your personal details match your official documents. Mismatches can trigger verification.'},
                {n:'4',t:'Confirm your banking details',d:'Update them only through official SARS channels where necessary. Never respond to unsolicited requests to change banking details.'},
                {n:'5',t:'Create a document folder for the current tax year',d:'Save every tax certificate and supporting document in one clearly labelled place.'},
                {n:'6',t:'Download SARS correspondence',d:'Save assessments, statements of account, and submission confirmations. These create a record of what was submitted and what SARS issued.'},
                {n:'7',t:'Check for outstanding notices',d:'Confirm SARS has not issued any notices that require a response. Missing a deadline can result in penalties.'},
                {n:'8',t:'Consider provisional tax',d:'If you have non-salary income, decide whether provisional tax applies before the end of August.'},
              ].map(step => (
                <div key={step.n} className="rounded-lg p-4 mb-3" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#185FA5'}}>{step.n}</div>
                    <p className="font-bold text-sm" style={{color:'#0C447C'}}>{step.t}</p>
                  </div>
                  <p className="text-sm" style={{color:'#374151'}}>{step.d}</p>
                </div>
              ))}

              {/* Section 7 */}
              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>7. Auto-assessments and pre-populated information</h2>
              <p className="text-gray-700 mb-4">An auto-assessment is SARS's attempt to calculate your tax position using information already received from third parties. For straightforward salary-only taxpayers, this can make filing faster. However, an auto-assessment is not a reason to stop thinking.</p>
              <p className="text-gray-700 mb-4">If you had rental income, freelance income, commission income, investment income not reflected correctly, retirement annuity contributions, medical expenses paid personally, travel claims, or donations, the auto-assessment may need to be reviewed and corrected through the normal return process.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#854F0B'}}>Pre-populated does not mean complete</p>
                <p className="text-sm" style={{color:'#1a1a1a'}}>Compare the IRP5, medical aid certificate, retirement annuity certificate, interest certificate, and investment certificate against what appears on eFiling or the MobiApp. If the figures match and there is no missing income or claim, the process may be simple. If they do not match, investigate before accepting or submitting. Filing accurately is your responsibility, even when SARS has pre-filled parts of the form.</p>
              </div>

              {/* Section 8 */}
              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>8. Case studies</h2>
              {[
                {n:'1',t:'Johan — salaried taxpayer',d:'Johan earns one salary and has medical aid through his employer. He logs in during August and sees that his IRP5 and medical certificate are already pre-populated. Instead of simply accepting the information, he checks the figures against his own certificates, confirms his bank account, and downloads his assessment after submission. His return is simple because his documents and profile are ready.'},
                {n:'2',t:'Ayesha — salary, baking side business, and rental income',d:'Ayesha has a salary, earns weekend income from baking, and rents out a room. Her SARS profile works, but her folder is incomplete — bank deposits, cash sales, grocery slips, and rental receipts are mixed together. Before filing or estimating provisional tax, she separates business income, private spending, rental income, and deductible expenses. This prevents under-declaration and makes verification easier.'},
                {n:'3',t:'Maria — pensioner with an auto-assessment',d:'Maria receives a pension, interest from a savings account, and medical aid cover. She receives an auto-assessment and initially thinks no action is needed. When she checks her documents, she notices some out-of-pocket qualifying medical expenses were not included. She gathers proof, reviews the return, and only submits once the claim is properly supported.'},
                {n:'4',t:'Sipho — banking details not updated',d:"Sipho changes banks in June and forgets to update his SARS profile. In August, his assessment shows a refund but the payment does not arrive. SARS asks him to verify his banking details. Because he has a recent bank letter and identity document ready, he uploads the documents quickly. If he had waited until SARS requested them before contacting the bank, the delay would have been longer."},
              ].map(c => (
                <div key={c.n} className="rounded-lg p-4 mb-3" style={{backgroundColor:'#F5F4F0',border:'1px solid #E2E0D8'}}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#185FA5'}}>{c.n}</div>
                    <p className="font-bold text-sm" style={{color:'#0C447C'}}>{c.t}</p>
                  </div>
                  <p className="text-sm" style={{color:'#374151'}}>{c.d}</p>
                </div>
              ))}

              {/* Section 9 */}
              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>9. Responding to SARS verification requests</h2>
              <p className="text-gray-700 mb-4">A verification request means SARS wants documents to support information on the return. It does not automatically mean you have done something wrong. In many cases, verification is routine because SARS is matching the return against third-party data or checking a deduction.</p>
              <p className="text-gray-700 mb-4">Read the notice carefully, identify the exact documents requested, upload clear copies through the correct SARS channel, and keep proof that the upload was submitted. Uploading documents without pressing the final submit button, sending the wrong document type, or uploading unreadable images can cause unnecessary delays.</p>
              <div className="rounded-lg p-5 mb-4" style={{backgroundColor:'#E6F1FB',borderLeft:'4px solid #185FA5'}}>
                <p className="font-bold text-sm mb-2" style={{color:'#0C447C'}}>What each common request type usually requires</p>
                <ul className="text-sm space-y-1 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li><strong>Medical expenses:</strong> medical aid certificate plus proof of personal out-of-pocket payments</li>
                  <li><strong>Retirement contributions:</strong> retirement annuity certificate from the fund</li>
                  <li><strong>Rental income:</strong> lease agreement, bank statements, expense invoices, and a calculation</li>
                  <li><strong>Banking details:</strong> bank confirmation letter and identity document</li>
                </ul>
              </div>
              <p className="text-gray-700 mb-4">The key principle is simple: every figure on the return should be traceable to a clear document. Do not ignore the notice, guess what SARS wants, or submit a revised return without understanding the issue.</p>

              {/* Section 10 */}
              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>10. Common mistakes to avoid</h2>
              <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#854F0B'}}>These mistakes cause most filing-season delays</p>
                <ul className="text-sm space-y-2 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>Using an old cellphone number and missing one-time pins or SARS notices</li>
                  <li>Assuming pre-populated information is automatically complete and correct</li>
                  <li>Changing banking details too late and then expecting an immediate refund</li>
                  <li>Keeping receipts without showing what they relate to</li>
                  <li>Ignoring SARS correspondence out of fear</li>
                  <li>Submitting a claim without proof, then struggling during verification</li>
                  <li>Using unofficial links or messages that may expose you to scams</li>
                  <li>Treating tax administration as something that only matters once a year</li>
                </ul>
              </div>
              <p className="text-gray-700 mb-4">A taxpayer who waits until August to reconstruct twelve months of receipts, bank deposits, mileage, rental expenses, and invoices may miss important information. A taxpayer who stores documents monthly will normally have a more accurate return and a less stressful filing experience — especially for people with side income, rental income, commission income, or deductions that require detailed proof.</p>

              {/* Section 11 — Takeaways */}
              <h2 className="text-xl font-bold mt-8 mb-3" style={{color:'#0C447C',borderBottom:'1px solid #E2E0D8',paddingBottom:'8px'}}>11. Key takeaways</h2>
              <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
                <p className="font-bold text-sm mb-3" style={{color:'#0F6E56'}}>August tax-readiness checklist</p>
                <ul className="text-sm space-y-2 list-disc list-inside" style={{color:'#1a1a1a'}}>
                  <li>Log in successfully to eFiling or the SARS MobiApp</li>
                  <li>Update or confirm contact details</li>
                  <li>Confirm banking details through official SARS processes</li>
                  <li>Save all tax certificates in one clearly labelled folder</li>
                  <li>Check SARS notices and correspondence</li>
                  <li>Compare pre-populated information with your own records</li>
                  <li>Ask for help early if your profile is locked, your bank details cannot be verified, or you receive a confusing SARS notice</li>
                </ul>
              </div>
              <p className="text-gray-700 mb-4">A correct SARS profile, active eFiling access, current contact details, verified banking information, and organised supporting documents can make the difference between a smooth filing season and a frustrating one. Most tax problems do not begin with complicated law — they begin with missing information, outdated details, weak records, or ignored correspondence.</p>
              <p className="text-gray-700 mb-8">By treating August as a tax-readiness month, you place yourself in a stronger position to file accurately, receive refunds without avoidable delays, and meet your obligations with confidence.</p>

              <div className="text-xs space-y-2" style={{borderTop:'1px solid #E2E0D8',paddingTop:'24px',color:'#888780'}}>
                <p><strong style={{color:'#0C447C'}}>Primary legislation:</strong> Income Tax Act 58 of 1962 · Tax Administration Act 28 of 2011</p>
                <p>This module is for educational purposes only and does not constitute tax or financial advice. Consult a registered tax practitioner for advice specific to your circumstances.</p>
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
                <p className="text-xs font-bold mb-2" style={{color:'#8fa8cc'}}>Next in Tax</p>
                <a href="/learn/tax-provisional" className="text-sm font-medium" style={{color:'#ffffff'}}>Provisional Tax for Individuals →</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
    </AuthGate>
  );
}
