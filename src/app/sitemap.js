export default async function sitemap() {
  const baseUrl = 'https://auralink.agency';
  const lastModified = new Date();

  const routes = [
    '',
    '/services',
    '/services/websites',
    '/services/ai-agents',
    '/services/software',
    '/services/automation',
    '/services/digital-marketing',
    '/services/seo',
    '/websites',
    '/ai-agents',
    '/software',
    '/pricing',
    '/portfolio',
    '/faq',
    '/contact',
    '/llms.txt',
    '/pricing.md',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/services') || route === '/pricing' ? 0.9 : 0.8,
  }));
}
