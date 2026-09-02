import FaqClient from './FaqClient';

export const metadata = {
  title: 'Frequently Asked Questions | AuraLink Digital Agency',
  description:
    'Find answers regarding AuraLink Digital Agency services, delivery timelines, AI agent integrations, pricing packages, and technical support.',
  alternates: {
    canonical: 'https://auralinkdigitalagency.indevs.in/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions | AuraLink Digital Agency',
    description:
      'Find answers regarding AuraLink Digital Agency services, delivery timelines, AI agent integrations, pricing packages, and technical support.',
    url: 'https://auralinkdigitalagency.indevs.in/faq',
    siteName: 'AuraLink Digital Agency',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://auralinkdigitalagency.indevs.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AuraLink Digital Agency — Frequently Asked Questions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | AuraLink Digital Agency',
    description:
      'Find answers regarding AuraLink Digital Agency services, delivery timelines, AI agent integrations, pricing packages, and technical support.',
    images: ['https://auralinkdigitalagency.indevs.in/og-image.jpg'],
  },
};

export default function Page() {
  return <FaqClient />;
}
