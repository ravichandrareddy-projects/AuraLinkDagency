import PrivacyClient from './PrivacyClient';

export const metadata = {
  title: 'Privacy Policy | AuraLink Digital Agency',
  description:
    'AuraLink Digital Agency Privacy Policy: Learn how we protect client data, privacy rights, and security standards.',
  alternates: {
    canonical: 'https://auralinkdigitalagency.indevs.in/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | AuraLink Digital Agency',
    description:
      'AuraLink Digital Agency Privacy Policy: Learn how we protect client data, privacy rights, and security standards.',
    url: 'https://auralinkdigitalagency.indevs.in/privacy',
    siteName: 'AuraLink Digital Agency',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://auralinkdigitalagency.indevs.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AuraLink Digital Agency — Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | AuraLink Digital Agency',
    description:
      'AuraLink Digital Agency Privacy Policy: Learn how we protect client data, privacy rights, and security standards.',
    images: ['https://auralinkdigitalagency.indevs.in/og-image.jpg'],
  },
};

export default function Page() {
  return <PrivacyClient />;
}
