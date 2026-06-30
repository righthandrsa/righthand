export default function Disclaimer() {
  return (
    <main>
      <div style={{backgroundColor: '#1a5ea5', padding: '56px 0 48px'}}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: 'rgba(255,255,255,0.65)'}}>Legal</p>
          <h1 className="text-4xl font-bold mb-4" style={{color: '#ffffff'}}>Disclaimer</h1>
          <p className="text-sm" style={{color: 'rgba(255,255,255,0.65)'}}>Last updated: June 2026</p>
        </div>
      </div>

      <div style={{backgroundColor: '#ffffff'}}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12">
          <article style={{color: '#1a1a1a'}}>

            <div className="rounded-lg p-5 mb-8" style={{backgroundColor: '#FBEAF0', borderLeft: '4px solid #993556'}}>
              <p className="font-bold text-sm mb-2" style={{color: '#993556'}}>Important notice</p>
              <p className="text-sm leading-relaxed" style={{color: '#1a1a1a'}}>
                Right Hand is an educational platform, not a law firm. Nothing on this website constitutes legal advice. Do not act or refrain from acting on the basis of anything you read here without first consulting a qualified South African attorney.
              </p>
            </div>

            <h2 className="text-xl font-bold mt-8 mb-3" style={{color: '#0C447C', borderBottom: '1px solid #E2E0D8', paddingBottom: '8px'}}>1. Educational purpose only</h2>
            <p className="text-gray-700 mb-4">All content published on righthand.org.za by Right Hand (Pty) Ltd is provided for general educational and informational purposes only. Our modules explain South African consumer rights legislation in plain language to help consumers understand the legal framework that applies to them.</p>
            <p className="text-gray-700 mb-4">This content does not constitute legal advice. It does not replace the advice of a qualified attorney and should not be treated as such.</p>

            <h2 className="text-xl font-bold mt-8 mb-3" style={{color: '#0C447C', borderBottom: '1px solid #E2E0D8', paddingBottom: '8px'}}>2. No attorney-client relationship</h2>
            <p className="text-gray-700 mb-4">Use of this Platform does not create an attorney-client relationship between you and Right Hand (Pty) Ltd or any contributor to the Platform. No such relationship is created by reading any module, submitting a contact form, or subscribing to a paid plan.</p>

            <h2 className="text-xl font-bold mt-8 mb-3" style={{color: '#0C447C', borderBottom: '1px solid #E2E0D8', paddingBottom: '8px'}}>3. Accuracy and currency of information</h2>
            <p className="text-gray-700 mb-4">We take care to ensure that the information published on this Platform is accurate and up to date at the time of publication. However, South African consumer law, court decisions, and regulatory guidance change over time. Right Hand makes no warranty that any content is current, complete, or free from error at the time you access it.</p>
            <p className="text-gray-700 mb-4">Always verify the current state of any legislation or regulation before relying on it. The relevant legislation includes but is not limited to the Consumer Protection Act 68 of 2008, the National Credit Act 34 of 2005, the Rental Housing Act 50 of 1999, and the Property Practitioners Act 22 of 2019.</p>

            <h2 className="text-xl font-bold mt-8 mb-3" style={{color: '#0C447C', borderBottom: '1px solid #E2E0D8', paddingBottom: '8px'}}>4. Case summaries</h2>
            <p className="text-gray-700 mb-4">Where this Platform refers to court decisions or tribunal rulings, those summaries are provided for illustrative educational purposes only. They do not constitute a complete or authoritative account of any judgment. The outcome of any legal matter depends on its specific facts and circumstances. Do not assume that the outcome of any case described on this Platform will apply to your situation.</p>

            <h2 className="text-xl font-bold mt-8 mb-3" style={{color: '#0C447C', borderBottom: '1px solid #E2E0D8', paddingBottom: '8px'}}>5. Third-party contributor content</h2>
            <p className="text-gray-700 mb-4">Some modules include content contributed by third-party specialists in relevant fields. Contributor content reflects the views and expertise of the individual contributor and does not constitute an endorsement by Right Hand (Pty) Ltd. Right Hand is not responsible for any services, advice, or engagements entered into between users and contributors outside of this Platform.</p>

            <h2 className="text-xl font-bold mt-8 mb-3" style={{color: '#0C447C', borderBottom: '1px solid #E2E0D8', paddingBottom: '8px'}}>6. Limitation of liability</h2>
            <p className="text-gray-700 mb-4">To the fullest extent permitted by South African law, Right Hand (Pty) Ltd, its directors, employees, and contributors shall not be liable for any loss, damage, or expense of any kind arising from your use of, or reliance on, any content on this Platform, including but not limited to any decision made or action taken in reliance on information published here.</p>

            <h2 className="text-xl font-bold mt-8 mb-3" style={{color: '#0C447C', borderBottom: '1px solid #E2E0D8', paddingBottom: '8px'}}>7. Seek qualified legal advice</h2>
            <p className="text-gray-700 mb-4">If you are involved in a consumer dispute, facing legal proceedings, or need advice on your specific situation, you should consult a qualified South African attorney. You can find an attorney through the Law Society of South Africa at <a href="https://www.lssa.org.za" target="_blank" rel="noopener noreferrer" style={{color: '#1a5ea5'}}>lssa.org.za</a>.</p>

            <h2 className="text-xl font-bold mt-8 mb-3" style={{color: '#0C447C', borderBottom: '1px solid #E2E0D8', paddingBottom: '8px'}}>8. Contact</h2>
            <p className="text-gray-700 mb-4">If you have any questions about this Disclaimer, please contact us at <a href="mailto:info@righthand.org.za" style={{color: '#1a5ea5'}}>info@righthand.org.za</a>.</p>

          </article>
        </div>
      </div>
    </main>
  );
}
