import PricingClient from './PricingClient';

export const metadata = {
  title: 'Multi-Currency Pricing & Billing Packages | AuraLink Digital Agency',
  description:
    'Transparent multi-currency pricing in INR (₹), USD ($), and EUR (€) for business websites, autonomous AI agents, and custom software engineering.',
  alternates: {
    canonical: 'https://auralinkdigitalagency.indevs.in/pricing',
  },
  openGraph: {
    title: 'Multi-Currency Pricing & Billing Packages | AuraLink Digital Agency',
    description:
      'Transparent multi-currency pricing in INR (₹), USD ($), and EUR (€) for business websites, autonomous AI agents, and custom software engineering.',
    url: 'https://auralinkdigitalagency.indevs.in/pricing',
    siteName: 'AuraLink Digital Agency',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://auralinkdigitalagency.indevs.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AuraLink Digital Agency — Multi-Currency Pricing & Billing Packages',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multi-Currency Pricing & Billing Packages | AuraLink Digital Agency',
    description:
      'Transparent multi-currency pricing in INR (₹), USD ($), and EUR (€) for business websites, autonomous AI agents, and custom software engineering.',
    images: ['https://auralinkdigitalagency.indevs.in/og-image.jpg'],
  },
};

export default function Page() {
  return <PricingClient />;
}
