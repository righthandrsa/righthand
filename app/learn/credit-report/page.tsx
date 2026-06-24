export default function CreditReport() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
        <a href="/" className="flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
            <path d="M50 5 L90 20 L90 55 C90 75 70 90 50 97 C30 90 10 75 10 55 L10 20 Z" fill="#1a5ea5"/>
            <path d="M35 50 L46 62 L67 40" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
          <span style={{color: '#1a2340'}} className="text-xl font-bold tracking-tight">righthand</span>
        </a>
        <a href="/learn" className="text-sm text-gray-500 hover:text-gray-900">Back to modules</a>
      </nav>

      <article className="max-w-2xl mx-auto px-8 py-16">
        <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{color: '#1a5ea5'}}>Credit · Module</p>
        <h1 className="text-3xl font-bold mb-3" style={{color: '#1a2340'}}>Decoding Your Credit Report: How It Works and Why It Matters</h1>
        <p className="text-sm text-gray-400 mb-8">13 minute read · Credit section · Last reviewed: June 2026</p>

        <div className="rounded-lg p-5 mb-8" style={{backgroundColor: '#e8f0fa', borderLeft: '4px solid #1a5ea5'}}>
          <p className="font-bold text-sm mb-2" style={{color: '#1a2340'}}>What you will learn</p>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>What a credit report actually is and what it does NOT show</li>
            <li>The four sections every South African credit report is divided into</li>
            <li>How your day-to-day financial behaviour shapes this document</li>
            <li>Why checking your report regularly is one of the best habits you can build</li>
          </ul>
        </div>

        <h2 className="text-xl font-bold mt-10 mb-3" style={{color: '#1a2340'}}>1. What exactly is a credit report?</h2>
        <p className="text-gray-700 mb-4">Think of your credit report as a financial report card. Just like a school report card tracks your grades over time, a credit report tracks how responsibly you manage money and debt. Businesses use this document to decide whether to lend you money, rent you an apartment, or even offer you a job.</p>
        <p className="text-gray-700 mb-4">A credit report is a detailed history of your borrowing and repayment habits, compiled by independent companies called credit bureaus. These bureaus collect information from your creditors — banks, retail stores, mobile network providers — to build a master file of your financial behaviour.</p>

        <div className="rounded-lg p-5 mb-6" style={{backgroundColor: '#FAEEDA', borderLeft: '4px solid #854F0B'}}>
          <p className="font-bold text-sm mb-1" style={{color: '#854F0B'}}>What your credit report does NOT show</p>
          <p className="text-sm text-gray-700">Your credit report does not show how much money you have in savings, and it does not show your salary. It focuses entirely on your relationship with debt.</p>
        </div>

        <h2 className="text-xl font-bold mt-10 mb-3" style={{color: '#1a2340'}}>2. The four pillars of a credit report</h2>
        <div className="space-y-3 mb-6">
          {[
            { num: "1", title: "Personal Information", desc: "Your full name, ID number, current and past addresses, and employment history. This section exists purely to verify the report belongs to you." },
            { num: "2", title: "Account History", desc: "The core of your report. Lists every credit account you hold — credit cards, loans, mortgages, clothing accounts — and whether you pay on time." },
            { num: "3", title: "Public Records", desc: "Serious financial legal matters — bankruptcies, court judgments, administration orders. These stay on your report for several years." },
            { num: "4", title: "Inquiries", desc: "Every time a lender checks your report because you applied for credit. Too many inquiries signals desperation and directly impacts your score." },
          ].map((p) => (
            <div key={p.num} className="flex gap-4 p-4 rounded-xl border border-gray-100">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor: '#1a5ea5'}}>{p.num}</div>
              <div>
                <p className="font-semibold text-sm mb-1" style={{color: '#1a2340'}}>{p.title}</p>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mt-10 mb-3" style={{color: '#1a2340'}}>3. How your behaviour affects the report</h2>
        <p className="text-gray-700 mb-4">Your credit report is a living document — it updates monthly. When you pay your bills on time, your creditors report a positive payment history, which builds a strong, healthy file over time.</p>
        <p className="text-gray-700 mb-4">Missing a payment, paying late, or ignoring a bill creates a negative entry. If an account goes unpaid for months, the creditor may sell the debt to a collection agency or take legal action — both of which severely damage your record.</p>

        <h2 className="text-xl font-bold mt-10 mb-3" style={{color: '#1a2340'}}>4. Why you should check it regularly</h2>
        <p className="text-gray-700 mb-4">Your credit report directly determines your credit score — a number that summarises your overall creditworthiness. A clean report means a higher score, which unlocks lower interest rates on loans.</p>

        <div className="rounded-lg p-5 mb-8" style={{backgroundColor: '#E1F5EE', borderLeft: '4px solid #0F6E56'}}>
          <p className="font-bold text-sm mb-1" style={{color: '#0F6E56'}}>Errors happen — and you need to catch them</p>
          <p className="text-sm text-gray-700">A bureau might accidentally mix your information with someone with a similar name, or a paid-off account might still show as open. Check your report annually and dispute mistakes before they cost you a better interest rate.</p>
        </div>

        <div className="rounded-lg p-5 mb-12" style={{backgroundColor: '#E1F5EE', borderLeft: '4px solid #0F6E56'}}>
          <p className="font-bold text-sm mb-2" style={{color: '#0F6E56'}}>Remember these four things</p>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
            <li>Your credit report tracks your relationship with debt — not your savings or salary.</li>
            <li>It has four sections: personal info, account history, public records, and inquiries.</li>
            <li>The report updates monthly based on your real behaviour.</li>
            <li>Check your report at least annually — errors happen and catching them early protects your score.</li>
          </ol>
        </div>

        <div className="border-t border-gray-100 pt-8 text-xs text-gray-400 space-y-2">
          <p><strong>Contributor:</strong> Your Debt Friend — NCR-registered debt management firm</p>
          <p><strong>Legislation:</strong> National Credit Act 34 of 2005</p>
          <p>This module is for educational purposes only and does not constitute legal or financial advice.</p>
        </div>
      </article>
    </main>
  );
}