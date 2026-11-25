import OfferClient from './OfferClient';

export const metadata = {
  title: 'AuraLink Digital Agency | Customized Websites & E-Commerce Delivered in 2 Days — Offer Live',
  description:
    'Do not make your website look cheap — make it customized and the best. Your website proves your brand. Delivered in 2 days with E-Commerce Admin Panel, Smart Stock Count & Technical SEO. Year-End Offer live now starting at ₹8,000.',
  keywords: [
    'AuraLink Digital Agency',
    'Website Delivered in 2 Days',
    '48 Hour Website Delivery',
    'Customized Business Website',
    'E-Commerce Website with Admin Panel',
    'Smart Stock Count E-Commerce India',
    'WhatsApp Business Website',
    'Year End Sale Web Development',
  ],
  alternates: {
    canonical: 'https://auralinkdigitalagency.indevs.in/offer',
  },
  openGraph: {
    title: 'Customized Business Website Delivered in 2 Days | AuraLink Digital Agency',
    description:
      'Your website proves your brand. Starter ₹8,000–₹10,000 • Business Winter Sale ₹17,000–₹20,000 • E-Commerce Season Sale ₹23,000–₹25,000.',
    url: 'https://auralinkdigitalagency.indevs.in/offer',
    siteName: 'AuraLink Digital Agency',
    type: 'website',
  },
};

export default function OfferLandingPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Express 2-Day Customized Business Website & E-Commerce Delivery',
    provider: {
      '@type': 'Organization',
      name: 'AuraLink Digital Agency',
      url: 'https://auralinkdigitalagency.indevs.in',
      telephone: '+91-9440336396',
      email: 'hello@auralinkdigitalagency.indevs.in',
    },
    areaServed: 'Worldwide',
    description:
      'Customized mobile-first business websites and full E-Commerce platforms with admin product management, smart stock count, payment gateways, WhatsApp integration, and technical SEO — delivered in 2 days.',
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
