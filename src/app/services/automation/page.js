import AutomationClient from './AutomationClient';

export const metadata = {
  title: 'Enterprise Workflow Automation | AuraLink Digital Agency',
  description:
    'Automate repetitive operational processes, CRM syncing, multi-platform webhook integrations, and lead nurturing pipelines with custom workflows.',
  alternates: {
    canonical: 'https://auralinkdigitalagency.indevs.in/services/automation',
  },
  openGraph: {
    title: 'Enterprise Workflow Automation | AuraLink Digital Agency',
    description:
      'Automate repetitive operational processes, CRM syncing, multi-platform webhook integrations, and lead nurturing pipelines with custom workflows.',
    url: 'https://auralinkdigitalagency.indevs.in/services/automation',
    siteName: 'AuraLink Digital Agency',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://auralinkdigitalagency.indevs.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AuraLink Digital Agency — Enterprise Workflow Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Workflow Automation | AuraLink Digital Agency',
    description:
      'Automate repetitive operational processes, CRM syncing, multi-platform webhook integrations, and lead nurturing pipelines with custom workflows.',
    images: ['https://auralinkdigitalagency.indevs.in/og-image.jpg'],
  },
};

export default function Page() {
  return <AutomationClient />;
}
