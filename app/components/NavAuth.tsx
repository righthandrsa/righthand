'use client';

import { useAuth, UserButton } from '@clerk/nextjs';

export default function NavAuth() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return (
      <div className="flex items-center gap-2">
        <a href="/account" className="hidden sm:inline text-sm px-4 py-2 rounded-lg" style={{color: '#b3d0f0'}}>Account</a>
        <UserButton />
      </div>
    );
  }

  return (
    <>
      <a href="/sign-in" className="hidden sm:inline text-sm px-4 py-2 rounded-lg" style={{color: '#b3d0f0'}}>Sign in</a>
      <a href="/sign-up" className="text-sm px-4 py-2 rounded-lg font-semibold" style={{backgroundColor: '#1a5ea5', color: '#ffffff'}}>Get started</a>
    </>
  );
}
