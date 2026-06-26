import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs';
import NavAuth from './components/NavAuth';
import "./globals.css";

export const metadata: Metadata = {
  title: "RightHand — Know Your Consumer Rights",
  description: "Plain-language South African consumer rights education covering motor, credit, banking, and tenant rights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
        <link rel="preload" href="https://js.paystack.co/v1/inline.js" as="script" />
      </head>
      <body className="min-h-full flex flex-col">

        {/* NAV */}
        <nav style={{backgroundColor: '#1a2340', borderBottom: '1px solid #2d4a6e', position: 'sticky', top: 0, zIndex: 50}}>
          <div className="flex items-center justify-between px-5 py-4 max-w-6xl mx-auto">
            <a href="/" className="flex items-center gap-3">
              <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
                <path d="M50 5 L90 20 L90 55 C90 75 70 90 50 97 C30 90 10 75 10 55 L10 20 Z" fill="#1a5ea5"/>
                <path d="M35 50 L46 62 L67 40" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <span className="text-xl font-bold" style={{color: '#ffffff'}}>RightHand</span>
              <span className="text-sm hidden sm:inline" style={{color: '#8fa8cc'}}>.org.za</span>
            </a>
            <div className="flex items-center gap-1 sm:gap-2">
              <a href="/learn" className="hidden sm:inline text-sm px-4 py-2 rounded-lg" style={{color: '#b3d0f0'}}>Learn</a>
              <a href="/about" className="hidden sm:inline text-sm px-4 py-2 rounded-lg" style={{color: '#b3d0f0'}}>About</a>
              <a href="/pricing" className="hidden sm:inline text-sm px-4 py-2 rounded-lg" style={{color: '#b3d0f0'}}>Pricing</a>
              <NavAuth />
            </div>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <div className="flex-1">
          {children}
        </div>

        {/* FOOTER */}
        <footer style={{backgroundColor: '#1a2340', borderTop: '1px solid #2d4a6e', padding: '48px 0 28px'}}>
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 mb-10">
              <div className="col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 mb-3">
                  <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
                    <path d="M50 5 L90 20 L90 55 C90 75 70 90 50 97 C30 90 10 75 10 55 L10 20 Z" fill="#1a5ea5"/>
                    <path d="M35 50 L46 62 L67 40" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                  <span className="font-bold" style={{color: '#ffffff'}}>RightHand</span>
                </div>
                <p className="text-sm leading-relaxed" style={{color: '#8fa8cc', maxWidth: '260px'}}>
                  South Africa's consumer rights education platform. Know the law. Know your rights.
                </p>
              </div>
              {[
                { heading: 'Learn', links: [['Motor Rights', '/learn#motor-rights'], ['Credit & Debt', '/learn#credit-debt'], ['Banking', '/learn#banking-saving'], ['Tenant Rights', '/learn#tenant-rights']] },
                { heading: 'Platform', links: [['About', '/about'], ['Pricing', '/pricing'], ['Blog', '#'], ['Contact', '/contact']] },
                { heading: 'Legal', links: [['Terms of Use', '/terms'], ['Privacy Policy', '/privacy'], ['Disclaimer', '/disclaimer']] },
              ].map((col) => (
                <div key={col.heading}>
                  <h5 className="text-xs font-bold tracking-widest uppercase mb-4" style={{color: '#b3d0f0'}}>{col.heading}</h5>
                  <ul className="space-y-2">
                    {col.links.map(([label, href]) => (
                      <li key={label}><a href={href} className="text-sm" style={{color: '#8fa8cc'}}>{label}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div style={{borderTop: '1px solid #2d4a6e', paddingTop: '20px'}}>
              <p className="text-xs" style={{color: '#8fa8cc'}}>
                <strong style={{color: '#b3d0f0'}}>Disclaimer:</strong> RightHand provides consumer rights education for informational purposes only. Nothing on this platform constitutes legal advice. Consult a qualified South African attorney for advice specific to your situation.
              </p>
              <p className="text-xs mt-3" style={{color: '#8fa8cc'}}>© 2026 RightHand · righthand.org.za</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
    </ClerkProvider>
  );
}
