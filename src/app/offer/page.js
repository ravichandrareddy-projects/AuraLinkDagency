import OfferClient from './OfferClient';

export const metadata = {
  title: 'AuraLink Digital Agency | Business Websites & E-Commerce Live in 2 Days — Year-End Sale',
  description:
    'Get a high-converting business website or full E-Commerce store with Admin Panel & Smart Stock Count, live in 2 days. End of Year Winter Sale starting at ₹8,000. Direct WhatsApp leads & Technical SEO included.',
  keywords: [
    'AuraLink Digital Agency',
    'Business Website in 2 Days',
    '48 Hour Website Development',
    'E-Commerce Website with Admin Panel',
    'Smart Stock Count E-Commerce India',
    'WhatsApp Business Website',
    'Year End Sale Web Development',
    'Affordable Business Website India',
  ],
  alternates: {
    canonical: 'https://auralinkdigitalagency.indevs.in/offer',
  },
  openGraph: {
    title: 'A Website for Your Business, Live in 2 Days | AuraLink Digital Agency',
    description:
      'Starter ₹8,000–₹10,000 • Business Winter Sale ₹17,000–₹20,000 • E-Commerce Season Sale ₹23,000–₹25,000 with Admin Panel & Smart Stock Count.',
    url: 'https://auralinkdigitalagency.indevs.in/offer',
    siteName: 'AuraLink Digital Agency',
    type: 'website',
  },
};

export default function OfferLandingPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Express 2-Day Business Website & E-Commerce Development',
    provider: {
      '@type': 'Organization',
      name: 'AuraLink Digital Agency',
      url: 'https://auralinkdigitalagency.indevs.in',
      telephone: '+91-9440336396',
      email: 'hello@auralinkdigitalagency.indevs.in',
    },
    areaServed: 'Worldwide',
    description:
      'Mobile-first business websites and full E-Commerce platforms with admin product management, smart stock count, payment gateways, WhatsApp integration, and technical SEO — launched in 2 days.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <OfferClient />
    </>
  );
}
