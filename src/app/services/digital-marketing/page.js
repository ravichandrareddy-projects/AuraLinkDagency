import DigitalMarketingClient from './DigitalMarketingClient';

export const metadata = {
  title: 'Digital Marketing & Growth Optimization | AuraLink Digital Agency',
  description:
    'Conversion rate optimization (CRO), Google Business Profile optimization, targeted growth strategies, and analytics tracking for modern enterprises.',
  alternates: {
    canonical: 'https://auralinkdigitalagency.indevs.in/services/digital-marketing',
  },
  openGraph: {
    title: 'Digital Marketing & Growth Optimization | AuraLink Digital Agency',
    description:
      'Conversion rate optimization (CRO), Google Business Profile optimization, targeted growth strategies, and analytics tracking for modern enterprises.',
    url: 'https://auralinkdigitalagency.indevs.in/services/digital-marketing',
    siteName: 'AuraLink Digital Agency',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://auralinkdigitalagency.indevs.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AuraLink Digital Agency — Digital Marketing & Growth Optimization',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing & Growth Optimization | AuraLink Digital Agency',
    description:
      'Conversion rate optimization (CRO), Google Business Profile optimization, targeted growth strategies, and analytics tracking for modern enterprises.',
    images: ['https://auralinkdigitalagency.indevs.in/og-image.jpg'],
  },
};

export default function Page() {
  return <DigitalMarketingClient />;
}
