import HomeClient from './HomeClient';

export const metadata = {
  title: 'AuraLink Digital Agency | Autonomous AI Agents, Custom Software & Websites',
  description:
    'AuraLink Digital Agency builds autonomous AI voice & WhatsApp agents, custom software, E-Commerce stores, and conversion-focused websites for modern businesses.',
  alternates: {
    canonical: 'https://auralinkdigitalagency.indevs.in/',
  },
  openGraph: {
    title: 'AuraLink Digital Agency | Autonomous AI Agents, Custom Software & Websites',
    description:
      'Engineered for growth: Autonomous AI voice/WhatsApp agents, full-stack software, and conversion-focused websites.',
    url: 'https://auralinkdigitalagency.indevs.in/',
    siteName: 'AuraLink Digital Agency',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://auralinkdigitalagency.indevs.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AuraLink Digital Agency — Autonomous AI Agents, Custom Software & Websites',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AuraLink Digital Agency | Autonomous AI Agents, Custom Software & Websites',
    description:
      'Autonomous AI voice & WhatsApp agents, custom SaaS platforms, and modern web development.',
    images: ['https://auralinkdigitalagency.indevs.in/og-image.jpg'],
  },
};

export default function Page() {
  return <HomeClient />;
}
