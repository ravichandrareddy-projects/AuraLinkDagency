import ClientsClient from './ClientsClient';

export const metadata = {
  title: 'Our Clients & Success Stories | AuraLink Digital Agency',
  description:
    'Explore the portfolio of businesses, founders, and enterprises scaling with AuraLink Digital Agency AI agents, custom software, and high-converting websites.',
  alternates: {
    canonical: 'https://auralinkdigitalagency.indevs.in/clients',
  },
};

export default function Page() {
  return <ClientsClient />;
}
