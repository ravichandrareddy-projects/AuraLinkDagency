import SeoClient from './SeoClient';

export const metadata = {
  title: 'Technical & Local SEO Architecture | AuraLink Digital Agency',
  description:
    'Full-stack technical search engine optimization, Schema.org JSON-LD microdata, Core Web Vitals optimization, and local search visibility.',
  alternates: {
    canonical: 'https://auralinkdigitalagency.indevs.in/services/seo',
  },
  openGraph: {
    title: 'Technical & Local SEO Architecture | AuraLink Digital Agency',
    description:
      'Full-stack technical search engine optimization, Schema.org JSON-LD microdata, Core Web Vitals optimization, and local search visibility.',
    url: 'https://auralinkdigitalagency.indevs.in/services/seo',
    siteName: 'AuraLink Digital Agency',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://auralinkdigitalagency.indevs.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AuraLink Digital Agency — Technical & Local SEO Architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical & Local SEO Architecture | AuraLink Digital Agency',
    description:
      'Full-stack technical search engine optimization, Schema.org JSON-LD microdata, Core Web Vitals optimization, and local search visibility.',
    images: ['https://auralinkdigitalagency.indevs.in/og-image.jpg'],
  },
};

export default function Page() {
  return <SeoClient />;
}
