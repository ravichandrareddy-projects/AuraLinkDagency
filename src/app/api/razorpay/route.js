import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const { amount, currency = 'INR', serviceName = 'AuraLink Service', receipt = 'rcpt_' + Date.now() } = body;

    const parsedAmount = parseFloat(amount);
    if (!parsedAmount || isNaN(parsedAmount) || parsedAmount <= 0) {
      return NextResponse.json(
        { error: `Invalid payment amount: ${amount}` },
        { status: 400 }
      );
    }

    const key_id = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_live_TWqPNjXXmOG6Fu';
    const key_secret = process.env.RAZORPAY_KEY_SECRET || 'vG3z9cTLg9s0P5jWxLFX1Nc2';

    if (!key_id || !key_secret) {
      return NextResponse.json(
        { error: 'Razorpay API credentials not configured in environment variables.' },
        { status: 500 }
      );
    }

    const razorpay = new Razorpay({
      key_id,
      key_secret,
    });

    const options = {
      amount: Math.round(parsedAmount * 100), // amount in smallest currency subunit (paise for INR, cents for USD/EUR)
      currency: (currency || 'INR').toUpperCase(),
      receipt: String(receipt).slice(0, 40),
      notes: {
        agency: 'AuraLink Digital Agency',
        service: String(serviceName).slice(0, 30),
      },
    };

    const order = await razorpay.orders.create(options);
    return NextResponse.json({ success: true, order });
  } catch (error) {
    console.error('Razorpay Order API Error:', error);
    const errorMsg = error?.error?.description || error?.message || 'Failed to create Razorpay Order';
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}

