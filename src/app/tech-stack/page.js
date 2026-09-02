import TechStackClient from './TechStackClient';

export const metadata = {
  title: 'Technology Stack & Delivery Guarantees | AuraLink Digital Agency',
  description:
    'Discover our modern stack: Next.js 14, Python FastAPI, ElevenLabs Voice API, OpenAI GPT-4o, and PostgreSQL with guaranteed rapid turnaround schedules.',
  alternates: {
    canonical: 'https://auralinkdigitalagency.indevs.in/tech-stack',
  },
  openGraph: {
    title: 'Technology Stack & Delivery Guarantees | AuraLink Digital Agency',
    description:
      'Discover our modern stack: Next.js 14, Python FastAPI, ElevenLabs Voice API, OpenAI GPT-4o, and PostgreSQL with guaranteed rapid turnaround schedules.',
    url: 'https://auralinkdigitalagency.indevs.in/tech-stack',
    siteName: 'AuraLink Digital Agency',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://auralinkdigitalagency.indevs.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AuraLink Digital Agency — Technology Stack & Delivery Guarantees',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology Stack & Delivery Guarantees | AuraLink Digital Agency',
    description:
      'Discover our modern stack: Next.js 14, Python FastAPI, ElevenLabs Voice API, OpenAI GPT-4o, and PostgreSQL with guaranteed rapid turnaround schedules.',
    images: ['https://auralinkdigitalagency.indevs.in/og-image.jpg'],
  },
};

export default function Page() {
  return <TechStackClient />;
}
