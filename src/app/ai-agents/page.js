import AiAgentsClient from './AiAgentsClient';

export const metadata = {
  title: 'Autonomous AI Voice & WhatsApp Agents | AuraLink Digital Agency',
  description:
    'Deploy 24/7 autonomous AI voice calling agents, WhatsApp API bots, lead qualification representatives, and automated onboarding bots in under 3 business days.',
  alternates: {
    canonical: 'https://auralinkdigitalagency.indevs.in/ai-agents',
  },
  openGraph: {
    title: 'Autonomous AI Voice & WhatsApp Agents | AuraLink Digital Agency',
    description:
      'Deploy 24/7 autonomous AI voice calling agents, WhatsApp API bots, lead qualification representatives, and automated onboarding bots in under 3 business days.',
    url: 'https://auralinkdigitalagency.indevs.in/ai-agents',
    siteName: 'AuraLink Digital Agency',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://auralinkdigitalagency.indevs.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AuraLink Digital Agency — Autonomous AI Voice & WhatsApp Agents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autonomous AI Voice & WhatsApp Agents | AuraLink Digital Agency',
    description:
      'Deploy 24/7 autonomous AI voice calling agents, WhatsApp API bots, lead qualification representatives, and automated onboarding bots in under 3 business days.',
    images: ['https://auralinkdigitalagency.indevs.in/og-image.jpg'],
  },
};

export default function Page() {
  return <AiAgentsClient />;
}
