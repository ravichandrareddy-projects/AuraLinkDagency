'use client';

import { useState } from 'react';
import { CreditCard, CheckCircle2, Loader2 } from 'lucide-react';
import { initiateRazorpayCheckout } from '@/lib/razorpay';
import { useCurrency } from '@/lib/currency-context';

export default function RazorpayButton({
  amountMap, // e.g. { INR: 8000, USD: 199, EUR: 179 }
  numericAmount, // e.g. 8000
  serviceName = 'Digital Service',
  className = '',
  buttonText = 'Pay & Book Now (Razorpay)',
}) {
  const { currency } = useCurrency();
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  // Determine numeric price based on current currency context
  let finalAmount = numericAmount;
  if (!finalAmount && amountMap) {
    finalAmount = amountMap[currency.code] || amountMap['USD'] || amountMap['INR'] || 0;
  }

  const handlePayment = async () => {
    if (!finalAmount || typeof finalAmount !== 'number') {
      alert('This service requires a custom quote consultation. Please click "Get Quote" to contact us.');
      return;
    }

    setLoading(true);

    initiateRazorpayCheckout({
      amount: finalAmount,
      currency: currency.code,
      serviceName: serviceName,
      description: `Instant Booking for ${serviceName}`,
      onSuccess: (details) => {
        setLoading(false);
        setPaymentSuccess(details);
      },
      onError: (err) => {
        setLoading(false);
      },
    });
  };

  if (paymentSuccess) {
    return (
      <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
          <span>Payment Completed! ID: {paymentSuccess.paymentId.slice(0, 12)}...</span>
        </div>
        <button
          onClick={() => setPaymentSuccess(null)}
          className="text-[10px] underline text-white/70 hover:text-white"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={handlePayment}
      disabled={loading || !finalAmount || typeof finalAmount !== 'number'}
      className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs transition-all duration-300 ${
        !finalAmount || typeof finalAmount !== 'number'
          ? 'bg-white/[0.04] text-white/40 cursor-not-allowed border border-white/[0.06]'
          : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:scale-[1.02] active:scale-[0.98]'
      } ${className}`}
    >
      {loading ? (
        <>
          <Loader2 size={14} className="animate-spin" />
          <span>Connecting Razorpay...</span>
        </>
      ) : (
        <>
          <CreditCard size={14} />
          <span>{buttonText}</span>
        </>
      )}
    </button>
  );
}
