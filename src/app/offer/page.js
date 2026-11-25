import OfferClient from './OfferClient';

export const metadata = {
  title: 'AuraLink Digital Agency | Customized Digital Presence Delivered in 2 Days — Offer Live',
  description:
    'Do not make your website look cheap — make it customized and the best. Your website proves your brand. Customized digital presence & E-Commerce delivered in 2 days with Admin Panel, Smart Stock Count & Technical SEO.',
  keywords: [
    'AuraLink Digital Agency',
    'Customized Digital Presence for Business',
    'Delivered in 2 Days',
    '48 Hour Website Delivery',
    'E-Commerce Website with Admin Panel',
    'Smart Stock Count E-Commerce India',
    'WhatsApp Business Website',
    'Year End Sale Web Development',
  ],
  alternates: {
    canonical: 'https://auralinkdigitalagency.indevs.in/offer',
  },
  openGraph: {
    title: 'A Customized Digital Presence for Your Business, Delivered in 2 Days | AuraLink',
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
      telephone: '+91-8309264018',
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
