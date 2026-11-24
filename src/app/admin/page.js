export const metadata = {
  title: 'Admin Analytics & Visitor Command Center | AuraLink Digital Agency',
  description: 'Private administrative analytics dashboard for AuraLink Digital Agency.',
  robots: {
    index: false,
    follow: false,
  },
};

import AdminAnalyticsClient from './analytics/AdminAnalyticsClient';

export default function AdminIndexPage() {
  return <AdminAnalyticsClient />;
}
