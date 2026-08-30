'use client';

import React, { useState } from 'react';
import { CreditCard, Loader2 } from 'lucide-react';

export default function RazorpayButton({
  amount,
  currency = 'INR',
  planName = 'AuraLink Service Order',
  userEmail = '',
  userPhone = '',
  onSuccess,
}) {
  const [loading, setLoading] = useState(false);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);
    try {
      const resScript = await loadRazorpayScript();
      if (!resScript) {
        alert('Failed to load Razorpay SDK. Please check your internet connection.');
        setLoading(false);
        return;
      }

      // Create Order on backend API
      const res = await fetch('/api/razorpay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, currency }),
      });

      const data = await res.json();
      if (!data.success) {
        alert(data.error || 'Failed to create payment order. Please check Razorpay keys.');
        setLoading(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.order.amount,
        currency: data.order.currency,
        name: 'AuraLink Digital Agency',
        description: planName,
        image: '/logo.png',
        order_id: data.order.id,
        prefill: {
          email: userEmail || 'hello@auralinkdigitalagency.indevs.in',
          contact: userPhone || '+91 9440336396',
        },
        theme: {
          color: '#00d4ff',
        },
        handler: function (response) {
          if (onSuccess) {
            onSuccess(response);
          } else {
            alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
          }
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.error(err);
      alert('An error occurred during payment processing.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 active:scale-95 disabled:opacity-50"
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <CreditCard className="w-4 h-4" />
      )}
      <span>{loading ? 'Initiating Payment...' : `Pay ${currency === 'INR' ? '₹' : '$'}${amount} with Razorpay`}</span>
    </button>
  );
}
