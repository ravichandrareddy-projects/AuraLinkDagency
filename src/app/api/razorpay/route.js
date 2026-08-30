import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req) {
  try {
    const { amount, currency = 'INR', receipt = 'receipt_' + Date.now() } = await req.json();

    const key_id = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

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
      amount: Math.round(amount * 100), // amount in smallest currency unit (paise for INR)
      currency,
      receipt,
    };

    const order = await razorpay.orders.create(options);
    return NextResponse.json({ success: true, order });
  } catch (error) {
    console.error('Razorpay Order Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to create Razorpay Order' }, { status: 500 });
  }
}
