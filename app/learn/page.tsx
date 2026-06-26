'use client';

import { useAuth, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function Learn() {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const isSubscribed = user?.publicMetadata?.subscribed === true;

  const sections = [
    {
      emoji: '🚗',
      title: 'Motor Rights',
      description: 'Most car buyers do not know what the law actually entitles them to. These modules change that.',
      modules: [
        { title: 'Your Rights When Buying a Vehicle', duration: '22 min', free: true, slug: 'motor-rights' },
        { title: 'Vehicle Finance, Warranties and Insurance', duration: '22 min', free: false, slug: 'motor-finance' },
      ],
    },
    {
      emoji: '💳',
      title: 'Credit & Debt',
      description: 'That flag on your credit profile might not even be legal anymore.',
      modules: [
        { title: 'Decoding Your Credit Report', duration: '13 min', free: true, slug: 'credit-report' },
        { title: 'Getting Out of Debt Review', duration: '14 min', free: false, slug: 'credit-debt-review' },
        { title: 'The Ghost Debt Trap: How Old Debt Expires', duration: '12 min', free: false, slug: 'credit-prescription' },
        { title: 'Reckless Lending and Your Credit Rights', duration: '20 min', free: false, slug: 'credit-reckless' },
      ],
    },
    {
      emoji: '🏦',
      title: 'Banking & Saving',
      description: 'Understanding your money is the first step to growing it.',
      modules: [
        { title: 'Saving vs Investing: Building Long-Term Wealth', duration: '20 min', free: true, slug: 'bank-saving' },
        { title: 'Tax-Free Savings Accounts: The Complete Guide', duration: '18 min', free: false, slug: 'bank-tfsa' },
      ],
    },
    {
      emoji: '🏠',
      title: 'Tenant Rights',
      description: 'Your landlord has rules to follow too. Most tenants just do not know what they are.',
      modules: [
        { title: 'Renting in SA: Your Rights and the Rental Housing Tribunal', duration: '18 min', free: true, slug: 'renting-rht' },
        { title: 'The PPRA Explained: How to Use It and When to Complain', duration: '15 min', free: false, slug: 'ppra' },
      ],
    },
  ];

  function handleModuleClick(e: React.MouseEvent, mod: { free: boolean; slug: string }) {
    if (mod.free || isSubscribed) return;
    e.preventDefault();
    if (!isSignedIn) {
      router.push('/sign-up');
    } else {
      router.push('/learn/' + mod.slug);
    }
  }

  return (
    <main>
      <div style={{backgroundColor: '#1a5ea5', padding: '56px 0 48px'}}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: 'rgba(255,255,255,0.65)'}}>RightHand</p>
          <h1 className="text-4xl font-bold mb-4" style={{color: '#ffffff'}}>What do you want to learn?</h1>
          <p className="text-lg" style={{color: 'rgba(255,255,255,0.75)'}}>First module in every section is free. Subscribe for R99/month to unlock everything.</p>
        </div>
      </div>

      <div style={{backgroundColor: '#ffffff'}}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12">
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.title} id={section.title.toLowerCase().replace(/[^a-z]+/g, '-').replace(/-$/, '')}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{section.emoji}</span>
                  <h2 className="text-xl font-bold" style={{color: '#1a2340'}}>{section.title}</h2>
                </div>
                <p className="text-sm mb-5" style={{color: '#4a5568'}}>{section.description}</p>
                <div className="space-y-2">
                  {section.modules.map((mod) => (
                    <a
                      key={mod.slug}
                      href={'/learn/' + mod.slug}
                      onClick={(e) => handleModuleClick(e, mod)}
                      className="flex items-center justify-between p-4 rounded-xl"
                      style={{
                        border: '1px solid #e2e8f0',
                        backgroundColor: mod.free ? '#ffffff' : '#fafafa',
                        display: 'flex',
                        cursor: 'pointer',
                      }}
                    >
                      <div className="flex items-center gap-3">
                        {mod.free ? (
                          <span className="text-xs font-bold px-2 py-1 rounded-full" style={{backgroundColor: '#e8f0fa', color: '#1a5ea5'}}>Free</span>
                        ) : (
                          <span className="text-xs font-bold px-2 py-1 rounded-full" style={{backgroundColor: '#1a2340', color: '#b3d0f0'}}>🔒 Members</span>
                        )}
                        <span className="font-medium text-sm" style={{color: '#1a2340'}}>{mod.title}</span>
                      </div>
                      <span className="text-xs" style={{color: '#888780'}}>{mod.duration} read</span>
                    </a>
                  ))}
                </div>
                <div style={{borderBottom: '1px solid #e8f0fa', marginTop: '32px'}}></div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl p-8 text-center" style={{backgroundColor: '#1a2340'}}>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#8fa8cc'}}>Unlock everything</p>
            <h3 className="text-2xl font-bold mb-3" style={{color: '#ffffff'}}>Full access for R99/month</h3>
            <p className="text-sm mb-6" style={{color: '#8fa8cc'}}>All modules, all 4 topic areas. Cancel anytime.</p>
            <a href="/sign-up" className="inline-block px-8 py-3 rounded-lg font-semibold text-sm" style={{backgroundColor: '#1a5ea5', color: '#ffffff'}}>Get full access</a>
          </div>

        </div>
      </div>
    </main>
  );
}
