import MetaAdsClient from './MetaAdsClient';

export const metadata = {
  title: 'Turn Instagram Traffic Into Revenue | 48h Web Funnels & 24/7 AI WhatsApp Agents',
  description:
    'Stop losing ad clicks to slow sites and delayed manual replies. Deploy an automated acquisition engine in 48 hours with AuraLink Digital Agency.',
  alternates: {
    canonical: 'https://auralinkdigitalagency.indevs.in/lp/meta-ads',
  },
  openGraph: {
    title: 'Turn Instagram Traffic Into Revenue | AuraLink Growth Systems',
    description:
      'Express 48h conversion-engineered funnels and 24/7 AI WhatsApp sales agents for high-growth brands.',
    url: 'https://auralinkdigitalagency.indevs.in/lp/meta-ads',
    siteName: 'AuraLink Digital Agency',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://auralinkdigitalagency.indevs.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AuraLink Digital Agency — Meta & Instagram Ads Growth Engine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turn Instagram Traffic Into Revenue | AuraLink Growth Systems',
    description:
      'Express 48h conversion-engineered funnels and 24/7 AI WhatsApp sales agents.',
    images: ['https://auralinkdigitalagency.indevs.in/og-image.jpg'],
  },
};

export default function MetaAdsLandingPage() {
  return <MetaAdsClient />;
}
