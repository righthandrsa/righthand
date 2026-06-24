export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
        <div className="flex items-center gap-3">
          {/* Shield logo */}
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 5 L90 20 L90 55 C90 75 70 90 50 97 C30 90 10 75 10 55 L10 20 Z" fill="#1a5ea5"/>
            <path d="M35 50 L46 62 L67 40" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
          <span style={{color: '#1a2340'}} className="text-xl font-bold tracking-tight">righthand</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="/learn" className="text-sm text-gray-500 hover:text-gray-900">Learn</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Forum</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Templates</a>
          <a href="#" style={{backgroundColor: '#1a5ea5'}} className="text-sm text-white px-5 py-2 rounded-full hover:opacity-90 transition">Sign up</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-8 pt-24 pb-20 text-center">
        <p className="text-sm font-medium tracking-widest uppercase mb-5" style={{color: '#1a5ea5'}}>Know Your Rights</p>
        <h1 className="text-5xl font-bold leading-tight mb-6" style={{color: '#1a2340'}}>
          Your guide to consumer rights<br />in South Africa
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          Structured learning on home ownership, renting, vehicles, banking, and credit — built for everyday South Africans.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="#" style={{backgroundColor: '#1a5ea5'}} className="text-white px-7 py-3 rounded-full font-medium hover:opacity-90 transition">
            Start learning free
          </a>
          <a href="#" className="text-gray-600 px-7 py-3 rounded-full border border-gray-200 hover:border-gray-400 transition">
            See all modules
          </a>
        </div>
      </section>

      {/* Topic cards */}
      <section className="max-w-5xl mx-auto px-8 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "Home Ownership", desc: "Buying, transfers & title deeds" },
            { title: "Renting", desc: "Leases, deposits & tenant rights" },
            { title: "Motor Vehicles", desc: "Purchases, warranties & disputes" },
            { title: "Banking & Credit", desc: "Credit scores, debt & your rights" },
          ].map((topic) => (
            <div key={topic.title} className="bg-gray-50 rounded-2xl p-6 cursor-pointer transition hover:shadow-md group">
              <div className="w-8 h-8 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#e8f0fa'}}>
                <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#1a5ea5'}}></div>
              </div>
              <h3 className="font-semibold mb-2" style={{color: '#1a2340'}}>{topic.title}</h3>
              <p className="text-sm text-gray-500">{topic.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="text-white text-center py-20 px-8" style={{backgroundColor: '#1a5ea5'}}>
        <p className="text-sm tracking-widest uppercase opacity-80 mb-3">Simple pricing</p>
        <h2 className="text-3xl font-bold mb-3">Full access for R99/month</h2>
        <p className="opacity-75 mb-8">First module in every section is always free.</p>
        <a href="#" className="bg-white font-semibold px-7 py-3 rounded-full hover:opacity-90 transition" style={{color: '#1a5ea5'}}>
          Get started
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-400">
        © 2026righthand · Know Your Rights
      </footer>
    </main>
  );
}