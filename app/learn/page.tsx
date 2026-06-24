export default function Learn() {
  const sections = [
    { emoji: "🏠", title: "Home", description: "Your landlord has rules to follow too. Most tenants just don't know what they are.", modules: [{ title: "Renting in SA: Your Rights & the Rental Housing Tribunal", duration: "18 min", free: true, slug: "renting-rht" }, { title: "The PPRA Explained: What Property Practitioners Must Do", duration: "15 min", free: false, slug: "home-ppra" }] },
    { emoji: "🚗", title: "Motor Vehicle", description: "Most car buyers don't know what the law actually entitles them to.", modules: [{ title: "Your Rights When Buying a Vehicle", duration: "16 min", free: true, slug: "motor-rights" }, { title: "Vehicle Finance & Insurance, Decoded", duration: "14 min", free: false, slug: "motor-finance" }] },
    { emoji: "🏦", title: "Banking", description: "Understanding your money is the first step to growing it.", modules: [{ title: "Saving vs Investing: The Difference That Matters", duration: "12 min", free: true, slug: "bank-saving" }, { title: "Tax-Free Savings Accounts: The Rules That Actually Matter", duration: "11 min", free: false, slug: "bank-tfsa" }] },
    { emoji: "💳", title: "Credit", description: "That flag on your credit profile might not even be legal anymore.", modules: [{ title: "Decoding Your Credit Report", duration: "13 min", free: true, slug: "credit-report" }, { title: "Getting Out of Debt Review", duration: "14 min", free: false, slug: "credit-debt-review" }, { title: "The Ghost Debt Trap: How Old Debt Expires", duration: "12 min", free: false, slug: "credit-prescription" }, { title: "Reckless Lending & Your Rights", duration: "11 min", free: false, slug: "credit-reckless" }] },
  ];
  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
        <a href="/" className="flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 100 100" fill="none"><path d="M50 5 L90 20 L90 55 C90 75 70 90 50 97 C30 90 10 75 10 55 L10 20 Z" fill="#1a5ea5"/><path d="M35 50 L46 62 L67 40" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
          <span style={{color:'#1a2340'}} className="text-xl font-bold tracking-tight">righthand</span>
        </a>
        <div className="flex items-center gap-6">
          <a href="/learn" className="text-sm font-medium" style={{color:'#1a5ea5'}}>Learn</a>
          <a href="#" className="text-sm text-gray-500">Forum</a>
          <a href="#" className="text-sm text-gray-500">Templates</a>
          <a href="#" style={{backgroundColor:'#1a5ea5'}} className="text-sm text-white px-5 py-2 rounded-full">Sign up</a>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto px-8 pt-16 pb-10">
        <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{color:'#1a5ea5'}}>All modules</p>
        <h1 className="text-4xl font-bold mb-4" style={{color:'#1a2340'}}>What do you want to learn?</h1>
        <p className="text-lg text-gray-500">First module in every section is free. Subscribe for R99/month to unlock everything.</p>
      </div>
      <div className="max-w-4xl mx-auto px-8 pb-24 space-y-12">
        {sections.map((section) => (
          <div key={section.title}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{section.emoji}</span>
              <h2 className="text-xl font-bold" style={{color:'#1a2340'}}>{section.title}</h2>
            </div>
            <p className="text-gray-500 mb-4 text-sm">{section.description}</p>
            <div className="space-y-2">
              {section.modules.map((mod) => (
                <a key={mod.slug} href={"/learn/" + mod.slug} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-blue-50 transition">
                  <div className="flex items-center gap-3">
                    {mod.free ? (<span className="text-xs font-semibold px-2 py-1 rounded-full" style={{backgroundColor:'#e8f0fa',color:'#1a5ea5'}}>Free</span>) : (<span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-400">🔒</span>)}
                    <span className="font-medium text-sm" style={{color:'#1a2340'}}>{mod.title}</span>
                  </div>
                  <span className="text-xs text-gray-400">{mod.duration} read</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
