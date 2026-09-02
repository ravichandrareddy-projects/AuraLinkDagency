import TermsClient from './TermsClient';

export const metadata = {
  title: 'Terms of Service | AuraLink Digital Agency',
  description:
    'AuraLink Digital Agency Terms of Service: Agreement guidelines, development terms, and service policies.',
  alternates: {
    canonical: 'https://auralinkdigitalagency.indevs.in/terms',
  },
  openGraph: {
    title: 'Terms of Service | AuraLink Digital Agency',
    description:
      'AuraLink Digital Agency Terms of Service: Agreement guidelines, development terms, and service policies.',
    url: 'https://auralinkdigitalagency.indevs.in/terms',
    siteName: 'AuraLink Digital Agency',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://auralinkdigitalagency.indevs.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AuraLink Digital Agency — Terms of Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | AuraLink Digital Agency',
    description:
      'AuraLink Digital Agency Terms of Service: Agreement guidelines, development terms, and service policies.',
    images: ['https://auralinkdigitalagency.indevs.in/og-image.jpg'],
  },
};

export default function Page() {
  return <TermsClient />;
}
