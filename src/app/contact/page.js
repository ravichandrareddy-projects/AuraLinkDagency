import ContactClient from './ContactClient';

export const metadata = {
  title: 'Contact & Book Consultation | AuraLink Digital Agency',
  description:
    'Get in touch with AuraLink Digital Agency. Book a technical consultation for AI voice/WhatsApp agents, web development, or custom software projects.',
  alternates: {
    canonical: 'https://auralinkdigitalagency.indevs.in/contact',
  },
  openGraph: {
    title: 'Contact & Book Consultation | AuraLink Digital Agency',
    description:
      'Get in touch with AuraLink Digital Agency. Book a technical consultation for AI voice/WhatsApp agents, web development, or custom software projects.',
    url: 'https://auralinkdigitalagency.indevs.in/contact',
    siteName: 'AuraLink Digital Agency',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://auralinkdigitalagency.indevs.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AuraLink Digital Agency — Contact & Book Consultation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact & Book Consultation | AuraLink Digital Agency',
    description:
      'Get in touch with AuraLink Digital Agency. Book a technical consultation for AI voice/WhatsApp agents, web development, or custom software projects.',
    images: ['https://auralinkdigitalagency.indevs.in/og-image.jpg'],
  },
};

export default function Page() {
  return <ContactClient />;
}
