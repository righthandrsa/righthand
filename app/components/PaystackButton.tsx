'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

interface Props {
  plan?: 'monthly' | 'annual';
}

export default function PaystackButton({ plan = 'monthly' }: Props) {
  const { user } = useUser();
  const [ready, setReady] = useState(false);

  const isAnnual = plan === 'annual';
  const amount = isAnnual ? 79900 : 9900;
  const planCode = isAnnual
    ? process.env.NEXT_PUBLIC_PAYSTACK_ANNUAL_PLAN_CODE
    : process.env.NEXT_PUBLIC_PAYSTACK_PLAN_CODE;
  const label = isAnnual ? 'Get full access — R799/year' : 'Get full access — R99/month';

  useEffect(() => {
    if ((window as any).PaystackPop) {
      setReady(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.onload = () => setReady(true);
    document.body.appendChild(script);
  }, []);

  function handlePayment() {
    if (!user || !ready) return;

    const handler = (window as any).PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      email: user.primaryEmailAddress?.emailAddress,
      amount,
      currency: 'ZAR',
      ref: `rh_${Date.now()}_${user.id}`,
      plan: planCode,
      metadata: {
        userId: user.id,
        custom_fields: [
          { display_name: 'User ID', variable_name: 'user_id', value: user.id },
        ],
      },
      callback: function (response: { reference: string }) {
        fetch('/api/paystack/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ reference: response.reference }),
        }).then((res) => {
          if (res.ok) {
            window.location.href = '/learn';
          } else {
            alert('Payment verification failed. Please contact support at billing@righthand.org.za');
          }
        });
      },
      onClose: function () {},
    });

    handler.openIframe();
  }

  return (
    <button
      onClick={handlePayment}
      disabled={!ready}
      className="block w-full text-center py-3 rounded-lg font-semibold text-sm"
      style={{
        backgroundColor: ready ? '#1a5ea5' : '#8fa8cc',
        color: '#ffffff',
        cursor: ready ? 'pointer' : 'not-allowed',
        border: 'none',
      }}
    >
      {ready ? label : 'Loading...'}
    </button>
  );
}
