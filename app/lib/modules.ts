export const sections = [
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

export const totalModules = sections.reduce((acc, s) => acc + s.modules.length, 0);
export const totalSections = sections.length;
