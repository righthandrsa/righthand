export default function About() {
  return (
    <main>

      {/* Header band */}
      <div style={{backgroundColor: '#1a5ea5', padding: '56px 0 48px'}}>
        <div className="max-w-4xl mx-auto px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: 'rgba(255,255,255,0.65)'}}>About RightHand</p>
          <h1 className="text-4xl font-bold mb-4" style={{color: '#ffffff'}}>You already have rights. Almost nobody ever taught you how to use them.</h1>
          <p className="text-lg" style={{color: 'rgba(255,255,255,0.75)'}}>South African law protects consumers more than most people realise. The law only works for you if you understand it.</p>
        </div>
      </div>

      {/* Body */}
      <div style={{backgroundColor: '#ffffff'}}>
        <div className="max-w-4xl mx-auto px-8 py-16">

          {/* Intro */}
          <div className="mb-16" style={{maxWidth: '720px'}}>
            <p className="text-lg leading-relaxed mb-6" style={{color: '#1a1a1a'}}>Every year, thousands of South Africans lose money, time, and peace of mind to problems the law already protects them from. A defective car the dealer refuses to refund. A deposit a landlord just never gives back. A credit listing that should have disappeared years ago. The protections exist. What is missing is the knowledge to use them.</p>
            <p className="text-lg leading-relaxed" style={{color: '#1a1a1a'}}>That is the gap RightHand was built to close.</p>
          </div>

          {/* What we do */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#1a2340'}}>What we actually do</h2>
            <p className="text-base leading-relaxed mb-6" style={{color: '#374151'}}>RightHand brings together practitioners, specialists, and regulators who work in their fields every day, and packages what they know into something any South African can actually use. The knowledge already exists. The experts already exist. What has been missing is a single place where that expertise is made accessible, structured, and presented in plain language.</p>
            <p className="text-base leading-relaxed mb-6" style={{color: '#374151'}}>Every module on RightHand is built on the knowledge of a contributor who works directly in that field, whether that is a vehicle finance specialist, a registered debt counsellor, a chartered accountant, or a consumer rights practitioner. We bring their expertise to you in a format that takes minutes to read, not a law degree to understand.</p>
            <p className="text-base leading-relaxed" style={{color: '#374151'}}>RightHand is not a law firm, and we do not represent, negotiate, or act on behalf of our subscribers. We are a platform that connects consumers with the knowledge they need to engage with the system on their own terms, confidently and informed.</p>
          </div>

          {/* Contributor note */}
          <div className="mb-16 rounded-lg p-6" style={{backgroundColor: '#e8f0fa', borderLeft: '4px solid #1a5ea5'}}>
            <p className="font-bold text-sm mb-2" style={{color: '#0C447C'}}>A note on our contributors</p>
            <p className="text-sm leading-relaxed" style={{color: '#1a1a1a'}}>Some of the experts and professionals who contribute content to RightHand also offer their own independent professional services, separately from this platform. Where that is the case, we will always say so clearly. Using RightHand never requires using anyone else's services, and we do not refer, recommend, or take payment for doing so.</p>
          </div>

          {/* Why Righthand */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#1a2340'}}>Why "RightHand"?</h2>
            <p className="text-base leading-relaxed" style={{color: '#374151'}}>Because that is what good information should be: the steady, reliable thing you reach for before you make a decision. Not someone who steps in and handles it for you, but the knowledge that means you do not need them to.</p>
          </div>

          {/* Who this is for */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#1a2340'}}>Who this is built for</h2>
            <p className="text-base leading-relaxed mb-6" style={{color: '#374151'}}>If you have ever signed something you did not fully understand. If you have ever felt like the person across the table knew more than you, and used it. If you have ever thought "there is nothing I can do about this," there usually is. You just have not been shown what it is yet.</p>
            <div className="rounded-lg p-6" style={{backgroundColor: '#1a2340'}}>
              <p className="text-base leading-relaxed font-medium" style={{color: '#b3d0f0'}}>You do not need to be a lawyer to know your rights. You just need access to the people who already know them. That is what RightHand is for.</p>
            </div>
          </div>

          {/* Vision */}
          <div className="mb-16" style={{borderTop: '2px solid #e8f0fa', paddingTop: '48px'}}>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#1a5ea5'}}>Our vision</p>
            <h2 className="text-2xl font-bold mb-6" style={{color: '#1a2340'}}>Knowing your rights should not require a law degree or a lawyer's fee.</h2>
            <p className="text-base leading-relaxed mb-6" style={{color: '#374151'}}>A South Africa where understanding your consumer rights is not a privilege reserved for people who can afford legal advice, where every person has access to the knowledge that the law already gives them.</p>
            <p className="text-base leading-relaxed" style={{color: '#374151'}}>The law does not discriminate by income, but access to the expertise that explains it often does. Our vision is a country where that gap no longer determines who can stand up for themselves and who cannot.</p>
          </div>

          {/* Mission */}
          <div className="mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#1a5ea5'}}>Our mission</p>
            <h2 className="text-2xl font-bold mb-6" style={{color: '#1a2340'}}>Closing the gap between rights on paper and rights in practice.</h2>
            <p className="text-base leading-relaxed mb-8" style={{color: '#374151'}}>We exist to close the gap between the rights South Africans already have on paper, and their ability to actually understand and use them. We do that three ways:</p>
            <div className="space-y-4">
              {[
                {
                  title: 'Curate',
                  desc: 'We bring together practitioners, specialists, and regulators who work in consumer-facing fields every day, and package their knowledge into structured, accessible content.',
                },
                {
                  title: 'Clarify',
                  desc: 'We present complex rights and processes in plain language, showing what enforcement looks like in practice through real processes, real cases, and real outcomes.',
                },
                {
                  title: 'Connect',
                  desc: 'We build a space where consumers can access the right knowledge at the right moment, so that anyone facing a dispute, a bad deal, or an unfair situation is not starting blind.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5 p-5 rounded-xl" style={{border: '1px solid #e2e8f0'}}>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm" style={{backgroundColor: '#e8f0fa', color: '#1a5ea5'}}>→</div>
                  <div>
                    <p className="font-bold mb-1" style={{color: '#1a2340'}}>{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{color: '#374151'}}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing statement */}
          <div className="rounded-2xl p-8 mb-12" style={{backgroundColor: '#1a2340'}}>
            <p className="text-base leading-relaxed font-medium" style={{color: '#b3d0f0'}}>This is bigger than any one dispute. Every person who understands their rights a little better is one more person the system can no longer count on staying confused.</p>
          </div>

          {/* What we are note */}
          <div className="rounded-lg p-6 mb-16" style={{backgroundColor: '#e8f0fa', borderLeft: '4px solid #1a5ea5'}}>
            <p className="font-bold text-sm mb-3" style={{color: '#0C447C'}}>What we are and what we are not</p>
            <div className="space-y-2 text-sm" style={{color: '#1a1a1a'}}>
              <p><strong style={{color: '#0C447C'}}>We ARE</strong> a consumer knowledge platform. We curate and package expert knowledge from practitioners in their respective fields and make it accessible to everyday South Africans.</p>
              <p><strong style={{color: '#0C447C'}}>We are NOT</strong> a law firm, advocacy group, or representative body. We do not negotiate, litigate, or act on anyone's behalf. Contributors to our content are independently available for professional services where disclosed, but their involvement with RightHand is as knowledge contributors only.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-sm mb-4" style={{color: '#718096'}}>Ready to learn your rights?</p>
            <a href="/learn" className="inline-block px-8 py-3 rounded-lg font-semibold" style={{backgroundColor: '#1a5ea5', color: '#ffffff'}}>
              Explore the modules
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}