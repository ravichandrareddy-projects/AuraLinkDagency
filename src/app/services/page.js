import ServicesClient from './ServicesClient';

export const metadata = {
  title: 'Digital Engineering & AI Services | AuraLink Digital Agency',
  description:
    'Explore AuraLink Digital Agency services: Websites & E-Commerce, Autonomous AI Agents (Voice & WhatsApp), Custom Software & SaaS, Workflow Automation, and Technical SEO.',
  alternates: {
    canonical: 'https://auralinkdigitalagency.indevs.in/services',
  },
  openGraph: {
    title: 'Digital Engineering & AI Services | AuraLink Digital Agency',
    description:
      'Explore AuraLink services: Websites & E-Commerce, Autonomous AI Agents, Custom Software & SaaS, Workflow Automation, and Technical SEO.',
    url: 'https://auralinkdigitalagency.indevs.in/services',
    siteName: 'AuraLink Digital Agency',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://auralinkdigitalagency.indevs.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AuraLink Digital Agency — Digital Engineering & AI Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Engineering & AI Services | AuraLink Digital Agency',
    description:
      'Explore AuraLink services: Websites & E-Commerce, Autonomous AI Agents, Custom Software & SaaS, Workflow Automation, and Technical SEO.',
    images: ['https://auralinkdigitalagency.indevs.in/og-image.jpg'],
  },
};

export default function Page() {
  return <ServicesClient />;
}
