'use client';

import React, { useState } from 'react';
import { CreditCard, Loader2 } from 'lucide-react';
import { useCurrency } from '@/lib/currency-context';

export default function RazorpayButton({
  amount,
  numericAmount,
  amountMap,
  currency: explicitCurrency,
  serviceName,
  planName = 'AuraLink Service Order',
  buttonText,
  className = '',
  userEmail = '',
  userPhone = '',
  onSuccess,
  onError,
}) {
  const [loading, setLoading] = useState(false);
  const currencyCtx = useCurrency();

  const activeCurrency = explicitCurrency || currencyCtx?.currency || 'INR';
  const currencySymbol = currencyCtx?.currencies?.[activeCurrency]?.symbol || (activeCurrency === 'INR' ? '₹' : '$');

  // Compute exact numeric amount to send
  let finalAmount = 0;
  if (numericAmount !== undefined && numericAmount !== null) {
    finalAmount = Number(numericAmount);
  } else if (amount !== undefined && amount !== null && typeof amount !== 'object') {
    finalAmount = Number(amount);
  } else if (amountMap && typeof amountMap === 'object') {
    const val = amountMap[activeCurrency] || amountMap['INR'] || amountMap['USD'] || 0;
    finalAmount = Array.isArray(val) ? Number(val[0]) : Number(val);
  }

  const finalServiceName = serviceName || planName;

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (typeof window === 'undefined') return resolve(false);
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (!finalAmount || isNaN(finalAmount) || finalAmount <= 0) {
      alert('Invalid payment amount specified for checkout.');
      return;
    }

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
        body: JSON.stringify({
          amount: finalAmount,
          currency: activeCurrency,
          serviceName: finalServiceName,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success || !data.order) {
        const msg = data.error || 'Failed to create payment order. Please check Razorpay keys.';
        alert(msg);
        if (onError) onError(new Error(msg));
        setLoading(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_live_TWqPNjXXmOG6Fu',
        amount: data.order.amount,
        currency: data.order.currency,
        name: 'AuraLink Digital Agency',
        description: finalServiceName,
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
            onSuccess({
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              signature: response.razorpay_signature,
              serviceName: finalServiceName,
              amount: finalAmount,
              currency: activeCurrency,
            });
          } else {
            alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
          }
        },
      };

      const paymentObject = new window.Razorpay(options);

      paymentObject.on('payment.failed', function (response) {
        console.error('Razorpay Payment Failed:', response.error);
        const failMsg = response.error?.description || 'Payment was canceled or failed.';
        if (onError) onError(response.error);
        else alert(`Payment Failed: ${failMsg}`);
      });

      paymentObject.open();
    } catch (err) {
      console.error('Razorpay Button Error:', err);
      alert(err.message || 'An error occurred during payment processing.');
      if (onError) onError(err);
    } finally {
      setLoading(false);
    }
  };

  const defaultText = `Pay ${currencySymbol}${finalAmount ? finalAmount.toLocaleString() : '0'} with Razorpay`;
  const displayText = buttonText || defaultText;

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 active:scale-95 disabled:opacity-50 ${className}`}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin shrink-0" />
      ) : (
        <CreditCard className="w-4 h-4 shrink-0" />
      )}
      <span>{loading ? 'Initiating Payment...' : displayText}</span>
    </button>
  );
}

