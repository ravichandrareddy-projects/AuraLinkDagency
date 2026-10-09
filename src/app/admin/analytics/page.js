export const metadata = {
  title: 'Agency Live Visitor Intelligence & Insights | AuraLink Digital Agency',
  description: 'Private administrative analytics dashboard for AuraLink Digital Agency.',
  robots: {
    index: false,
    follow: false,
  },
};

import AdminAnalyticsClient from './AdminAnalyticsClient';

export default function AdminPage() {
  return <AdminAnalyticsClient />;
}
