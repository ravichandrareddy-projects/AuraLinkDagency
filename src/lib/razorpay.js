/**
 * Razorpay Payment Integration Utility
 * Supports dynamic checkout modal launch for UPI, Cards, NetBanking, and Wallets.
 */

export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') return resolve(false);

    if (window.Razorpay) {
      return resolve(true);
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const initiateRazorpayCheckout = async ({
  amount, // Numeric amount (e.g. 8000 for ₹8,000)
  currency = 'INR',
  serviceName = 'AuraLink Digital Service',
  description = 'Payment for AuraLink Digital Agency Service',
  clientName = '',
  clientEmail = '',
  clientPhone = '',
  onSuccess,
  onError,
}) => {
  const isLoaded = await loadRazorpayScript();

  if (!isLoaded) {
    alert('Failed to load Razorpay Payment Gateway SDK. Please check your internet connection.');
    if (onError) onError(new Error('SDK load failure'));
    return;
  }

  const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_AuraLinkAgencyKey';

  // Calculate subunits (paise for INR, cents for USD/EUR)
  const amountInSubunits = Math.round(amount * 100);

  const options = {
    key: razorpayKey,
    amount: amountInSubunits,
    currency: currency.toUpperCase(),
    name: 'AuraLink Digital Agency',
    description: `${serviceName} — ${description}`,
    image: '/logo.png',
    handler: function (response) {
      if (onSuccess) {
        onSuccess({
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id,
          signature: response.razorpay_signature,
          serviceName,
          amount,
          currency,
        });
      } else {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      }
    },
    prefill: {
      name: clientName || '',
      email: clientEmail || '',
      contact: clientPhone || '',
    },
    notes: {
      agency: 'AuraLink Digital Agency',
      service: serviceName,
    },
    theme: {
      color: '#8b5cf6', // AuraLink Purple accent
      backdrop_color: 'rgba(10, 10, 25, 0.85)',
    },
  };

  const paymentObject = new window.Razorpay(options);

  paymentObject.on('payment.failed', function (response) {
    console.error('Razorpay Payment Failed:', response.error);
    const failureMsg = response.error?.description || 'Payment was canceled or failed.';
    if (onError) {
      onError(response.error);
    } else {
      alert(`Payment Failed: ${failureMsg}`);
    }
  });

  paymentObject.open();
};
