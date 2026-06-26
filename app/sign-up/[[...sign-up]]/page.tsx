import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <main>
      <div style={{backgroundColor: '#1a2340', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px'}}>
        <SignUp />
      </div>
    </main>
  );
}
