import WebsitesClient from './WebsitesClient';

export const metadata = {
  title: 'Websites & E-Commerce Development | AuraLink Digital Agency',
  description:
    'High-converting business websites, landing pages, E-Commerce stores, dynamic CMS portals, and 3D WebGL experiences delivered in 48 hours.',
  alternates: {
    canonical: 'https://auralinkdigitalagency.indevs.in/websites',
  },
  openGraph: {
    title: 'Websites & E-Commerce Development | AuraLink Digital Agency',
    description:
      'High-converting business websites, landing pages, E-Commerce stores, and 3D WebGL experiences delivered in 48 hours.',
    url: 'https://auralinkdigitalagency.indevs.in/websites',
    siteName: 'AuraLink Digital Agency',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://auralinkdigitalagency.indevs.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AuraLink Digital Agency — Websites & E-Commerce Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Websites & E-Commerce Development | AuraLink Digital Agency',
    description:
      'High-converting business websites, landing pages, E-Commerce stores, and 3D WebGL experiences delivered in 48 hours.',
    images: ['https://auralinkdigitalagency.indevs.in/og-image.jpg'],
  },
};

export default function Page() {
  return <WebsitesClient />;
}
