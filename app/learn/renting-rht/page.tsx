export default function RentingRHT() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
        <a href="/" className="flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 100 100" fill="none"><path d="M50 5 L90 20 L90 55 C90 75 70 90 50 97 C30 90 10 75 10 55 L10 20 Z" fill="#1a5ea5"/><path d="M35 50 L46 62 L67 40" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
          <span style={{color:'#1a2340'}} className="text-xl font-bold tracking-tight">righthand</span>
        </a>
        <a href="/learn" className="text-sm text-gray-500 hover:text-gray-900">Back to modules</a>
      </nav>
      <article className="max-w-2xl mx-auto px-8 py-16">
        <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{color:'#1a5ea5'}}>Home · Module</p>
        <h1 className="text-3xl font-bold mb-3" style={{color:'#1a2340'}}>Renting in SA: Your Rights and the Rental Housing Tribunal</h1>
        <p className="text-sm text-gray-400 mb-8">18 minute read · Home section · Last reviewed: June 2026</p>
        <div className="rounded-lg p-5 mb-8" style={{backgroundColor:'#e8f0fa',borderLeft:'4px solid #1a5ea5'}}>
          <p className="font-bold text-sm mb-2" style={{color:'#1a2340'}}>What you will learn</p>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>What your lease agreement must legally contain</li>
            <li>Your rights around deposits — what landlords can and cannot do</li>
            <li>How the free Rental Housing Tribunal process works step by step</li>
            <li>What counts as an unfair practice and how to report it</li>
            <li>Your rights when it comes to maintenance and repairs</li>
          </ul>
        </div>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>1. Your lease agreement</h2>
        <p className="text-gray-700 mb-4">A lease agreement is a legally binding contract between you and your landlord. Under the Rental Housing Act, both parties have rights and obligations. Your lease must clearly state the monthly rental amount, the deposit amount, the lease duration, and what happens at the end of the lease.</p>
        <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#e8f0fa',borderLeft:'4px solid #1a5ea5'}}>
          <p className="font-bold text-sm mb-1" style={{color:'#1a2340'}}>Always get it in writing</p>
          <p className="text-sm text-gray-700">A verbal lease is legally valid in South Africa, but a written lease protects you far better. If there is any dispute, a written agreement is your strongest evidence.</p>
        </div>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>2. Your deposit rights</h2>
        <p className="text-gray-700 mb-4">Your landlord must deposit your rental deposit into an interest-bearing account. The deposit — plus interest — belongs to you unless there is documented damage beyond normal wear and tear. Your landlord must return it within 14 days of the end of your lease if there is no damage, or within 21 days if deductions are made.</p>
        <div className="rounded-lg p-5 mb-6" style={{backgroundColor:'#FAEEDA',borderLeft:'4px solid #854F0B'}}>
          <p className="font-bold text-sm mb-1" style={{color:'#854F0B'}}>Do a joint inspection</p>
          <p className="text-sm text-gray-700">Always do a move-in inspection with your landlord and document everything in writing. Photograph any existing damage. Do the same when you move out. This protects you from being charged for damage you did not cause.</p>
        </div>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>3. Maintenance and repairs</h2>
        <p className="text-gray-700 mb-4">Your landlord is responsible for maintaining the property in a habitable condition. This includes ensuring that plumbing, electricity, and the structure of the property are in working order. You are responsible for day-to-day maintenance and must report problems promptly in writing.</p>
        <h2 className="text-xl font-bold mt-10 mb-3" style={{color:'#1a2340'}}>4. The Rental Housing Tribunal</h2>
        <p className="text-gray-700 mb-4">The Rental Housing Tribunal is a free government service that resolves disputes between tenants and landlords. You do not need a lawyer. The Tribunal can handle complaints about unfair lease terms, deposit disputes, illegal evictions, and failure to maintain the property.</p>
        <div className="space-y-3 mb-6">
          {[{num:"1",title:"Submit a complaint",desc:"Complete a complaint form at your nearest Rental Housing Tribunal office or online. Describe the problem clearly and attach any supporting documents."},{num:"2",title:"Conciliation",desc:"The Tribunal will first attempt to resolve the dispute through conciliation — a structured conversation between you and your landlord."},{num:"3",title:"Hearing",desc:"If conciliation fails, a formal hearing is held. Both parties present their case and the Tribunal makes a ruling that is legally binding."},{num:"4",title:"Ruling",desc:"The Tribunal's ruling is enforceable. If your landlord refuses to comply, you can approach a court to have it enforced."}].map((p) => (
            <div key={p.num} className="flex gap-4 p-4 rounded-xl border border-gray-100">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{backgroundColor:'#1a5ea5'}}>{p.num}</div>
              <div><p className="font-semibold text-sm mb-1" style={{color:'#1a2340'}}>{p.title}</p><p className="text-sm text-gray-600">{p.desc}</p></div>
            </div>
          ))}
        </div>
        <div className="rounded-lg p-5 mb-12" style={{backgroundColor:'#E1F5EE',borderLeft:'4px solid #0F6E56'}}>
          <p className="font-bold text-sm mb-2" style={{color:'#0F6E56'}}>Remember these five things</p>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
            <li>Always get your lease in writing and keep a copy.</li>
            <li>Your deposit must be held in an interest-bearing account and returned with interest.</li>
            <li>Document the condition of the property on move-in and move-out with photos.</li>
            <li>Your landlord must maintain the property in a habitable condition.</li>
            <li>The Rental Housing Tribunal is free and you do not need a lawyer to use it.</li>
          </ol>
        </div>
        <div className="border-t border-gray-100 pt-8 text-xs text-gray-400 space-y-2">
          <p><strong>Legislation:</strong> Rental Housing Act 50 of 1999; Rental Housing Amendment Act 35 of 2014</p>
          <p>This module is for educational purposes only and does not constitute legal advice.</p>
        </div>
      </article>
    </main>
  );
}
