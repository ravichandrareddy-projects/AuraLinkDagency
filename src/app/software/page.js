import SoftwareClient from './SoftwareClient';

export const metadata = {
  title: 'Custom Software & SaaS Platform Engineering | AuraLink Digital Agency',
  description:
    'Full-stack custom software development: SaaS platforms, web applications, cross-platform mobile apps (iOS/Android), CRM & custom ERP systems delivered in under 7 business days.',
  alternates: {
    canonical: 'https://auralinkdigitalagency.indevs.in/software',
  },
  openGraph: {
    title: 'Custom Software & SaaS Platform Engineering | AuraLink Digital Agency',
    description:
      'Full-stack custom software development: SaaS platforms, web applications, mobile apps, CRM & custom ERP systems delivered in under 7 business days.',
    url: 'https://auralinkdigitalagency.indevs.in/software',
    siteName: 'AuraLink Digital Agency',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://auralinkdigitalagency.indevs.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AuraLink Digital Agency — Custom Software & SaaS Platform Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software & SaaS Platform Engineering | AuraLink Digital Agency',
    description:
      'Full-stack custom software development: SaaS platforms, web applications, mobile apps, CRM & custom ERP systems delivered in under 7 business days.',
    images: ['https://auralinkdigitalagency.indevs.in/og-image.jpg'],
  },
};

export default function Page() {
  return <SoftwareClient />;
}
