export default async function sitemap() {
  const baseUrl = 'https://auralinkdigitalagency.indevs.in';
  const lastModified = new Date();

  const routes = [
    { url: '', priority: 1.0, changeFrequency: 'daily' },
    { url: '/services', priority: 0.9, changeFrequency: 'daily' },
    { url: '/websites', priority: 0.9, changeFrequency: 'daily' },
    { url: '/ai-agents', priority: 0.9, changeFrequency: 'daily' },
    { url: '/software', priority: 0.9, changeFrequency: 'daily' },
    { url: '/tech-stack', priority: 0.9, changeFrequency: 'daily' },
    { url: '/pricing', priority: 0.9, changeFrequency: 'daily' },
    { url: '/contact', priority: 0.9, changeFrequency: 'daily' },
    { url: '/services/automation', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/services/digital-marketing', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/services/seo', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/faq', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/privacy', priority: 0.5, changeFrequency: 'monthly' },
    { url: '/terms', priority: 0.5, changeFrequency: 'monthly' },
    { url: '/llms.txt', priority: 0.5, changeFrequency: 'monthly' },
    { url: '/llms-full.txt', priority: 0.5, changeFrequency: 'monthly' },
  ];

  return routes.map((item) => ({
    url: `${baseUrl}${item.url}`,
    lastModified,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));
}
