// ─── AuraLink Multi-Currency Pricing Registry ───

export const currencies = {
  USD: { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
  INR: { code: 'INR', symbol: '₹', name: 'Indian Rupee', flag: '🇮🇳' },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
};

export const defaultCurrency = 'USD';

// Helper to format currency values
export function formatCurrencyAmount(amount, currencyCode = 'USD', isStarting = false, period = '') {
  if (!amount || amount === 'Custom Quote') return 'Custom Quote';
  const meta = currencies[currencyCode] || currencies.USD;
  const num = typeof amount === 'number' ? amount : amount[currencyCode];

  if (num === undefined || num === null) return 'Custom Quote';

  let formatted = '';
  if (currencyCode === 'INR') {
    formatted = `${meta.symbol}${num.toLocaleString('en-IN')}`;
  } else {
    formatted = `${meta.symbol}${num.toLocaleString('en-US')}`;
  }

  const prefix = isStarting ? 'Starting from ' : '';
  const suffix = period ? `/${period}` : '';
  return `${prefix}${formatted}${suffix}`;
}

// ─── Standard Packages (Empty per request) ───
export const packages = [];

// ─── Detailed Services Catalog ───
export const customServices = {
  websites: [
    {
      id: 'local-starter-website',
      name: 'Local Business Website',
      description: '1–3 page sleek website tailored for local shops, barbers, cafes, tutors, and micro-businesses.',
      prices: { INR: 7000, USD: 249, EUR: 229 },
      features: ['1–3 Pages', 'WhatsApp Button Integration', 'Google Maps Support', 'Mobile Responsive'],
    },
    {
      id: 'landing-page',
      name: 'Landing Page',
      description: 'High-converting single-page website with modern design and instant WhatsApp integration.',
      prices: { INR: 8000, USD: 249, EUR: 229 },
      features: ['High Conversion Design', 'WhatsApp Integration', 'Lead Capture Form', 'Fast 1.5s Speed'],
    },
    {
      id: 'ecommerce-store',
      name: 'E-Commerce Store',
      description: 'Full-featured online store with admin panel to add/remove products and edit site content.',
      prices: { INR: 13000, USD: 399, EUR: 369 },
      features: [
        '1 Year Free Domain & Hosting',
        'Admin Panel (Owner Can Edit Site)',
        'Add & Remove Products Easily',
        'Payment Gateways (UPI, Cards)',
        'Order & Stock Management',
      ],
    },
    {
      id: 'fashion-website',
      name: "Fashion Website (Men's & Women's)",
      description: "Custom e-commerce & showcase platform for men's and women's apparel brands.",
      prices: { INR: 13000, USD: 399, EUR: 369 },
      features: [
        '1 Year Free Domain & Hosting',
        'Admin Panel (Owner Can Edit Site)',
        'Add & Remove Apparel & Sizes',
        'WhatsApp Quick Order + Payments',
        'Lookbook & Collection Showcases',
      ],
    },
    {
      id: 'website-redesign',
      name: 'Website Redesign',
      description: 'Modernize your outdated website with superior design, fast performance, and UX revamp.',
      prices: { INR: 15000, USD: 399, EUR: 369 },
      features: ['Complete Visual Overhaul', 'Speed & Mobile Optimization', 'Core Web Vitals Boost', 'SEO Migration'],
    },
    {
      id: 'business-website',
      name: 'Business Website',
      description: 'Professional multi-page business site with admin panel to edit content and blogs.',
      prices: { INR: 23000, USD: 549, EUR: 499 },
      features: [
        '1 Year Free Domain & Hosting',
        'Admin Panel (Owner Can Edit Site)',
        'Multi-Page Structure (8–10 Pages)',
        'Interactive Contact Forms',
        'Full Technical SEO',
      ],
    },
    {
      id: 'premium-3d-website',
      name: 'Premium 3D Website',
      description: 'State-of-the-art immersive 3D experience with WebGL/Three.js visual effects.',
      prices: { INR: 35000, USD: 699, EUR: 649 },
      features: [
        '1 Year Free Domain & Hosting',
        'WebGL / Three.js 3D Motion',
        'Interactive Scroll Effects',
        'Bespoke UI/UX Engineering',
      ],
    },
  ],

  aiAgents: [
    {
      id: 'whatsapp-agent',
      name: 'WhatsApp Business Agent',
      description: 'Automated 24/7 WhatsApp API agent for instant customer support, lead capture, and orders.',
      prices: { INR: 14999, USD: 499, EUR: 449 },
      features: ['24/7 Auto Replies', 'Catalog Sharing', 'Payment Link Integration'],
      usageNotice: 'Meta WhatsApp Business API conversation charges billed separately.',
    },
    {
      id: 'sales-agent',
      name: 'Sales Agent',
      description: 'AI sales specialist that qualifies leads, handles objections, and schedules meetings.',
      prices: { INR: 24999, USD: 599, EUR: 549 },
      features: ['Lead Qualification', 'Email Sequences', 'Calendar Booking'],
    },
    {
      id: 'social-media-agent',
      name: 'Social Media Manager Agent',
      description: 'AI agent that creates posts, schedules content, responds to comments, and tracks performance.',
      prices: { INR: 19999, USD: 549, EUR: 499 },
      features: ['Automated Content Plan', 'Multi-Platform Sync', 'Analytics Dashboard'],
    },
    {
      id: 'lead-generation-agent',
      name: 'Lead Generation Agent',
      description: 'Autonomous agent that finds targeted prospects, enriches contact details, and feeds warm leads to sales.',
      prices: { INR: 19999, USD: 549, EUR: 499 },
      features: ['Prospect Enrichment', 'Multi-channel Discovery', 'CRM Integration'],
    },
    {
      id: 'data-scraping-agent',
      name: 'Data Scraping Agent',
      description: 'Intelligent scraper agent that extracts, structures, and exports web data automatically.',
      prices: { INR: 14999, USD: 449, EUR: 399 },
      features: ['Anti-block Rotation', 'CSV/JSON Export', 'Scheduled Runs'],
    },
  ],

  software: [
    {
      id: 'web-application',
      name: 'Web Applications',
      description: 'Custom full-stack web platforms built with React, Next.js, Node.js, and cloud backend.',
      isStarting: true,
      prices: { INR: 39999, USD: 499, EUR: 449 },
      features: ['Custom Full-Stack Architecture', 'Scalable Database', 'Secure Auth'],
    },
    {
      id: 'mobile-application',
      name: 'Mobile Applications',
      description: 'Cross-platform native iOS & Android applications with smooth UI and push notifications.',
      isStarting: true,
      prices: { INR: 59999, USD: 699, EUR: 649 },
      features: ['iOS & Android Native', 'Offline Support', 'App Store Publishing'],
    },
    {
      id: 'desktop-application',
      name: 'Desktop Applications',
      description: 'High-performance desktop software for Windows, macOS, and Linux built with Electron or Python.',
      isStarting: true,
      prices: { INR: 59999, USD: 699, EUR: 649 },
      features: ['Cross-Platform Desktop', 'Hardware Acceleration', 'Local File Access'],
    },
    {
      id: 'saas-platform',
      name: 'SaaS Platforms',
      description: 'Complete multi-tenant SaaS application with subscriptions, billing, analytics, and admin.',
      isStarting: true,
      prices: { INR: 49999, USD: 799, EUR: 749 },
      features: ['Subscription Billing', 'Multi-tenant Architecture', 'User Dashboards'],
    },
    {
      id: 'crm-system',
      name: 'CRM Systems',
      description: 'Tailored Customer Relationship Management software for pipeline tracking, deals, and team tasks.',
      isStarting: true,
      prices: { INR: 59999, USD: 799, EUR: 749 },
      features: ['Lead Pipelines', 'Task Automation', 'Custom Reports'],
    },
    {
      id: 'erp-system',
      name: 'ERP Systems',
      description: 'Enterprise Resource Planning solution connecting sales, inventory, purchasing, employees, accounting, and reporting.',
      isStarting: false,
      isCustomQuote: true,
      prices: 'Custom Quote',
      erpExplanation: 'ERP systems integrate complex operations like inventory, HR, accounting, and purchasing. Scope varies widely per enterprise, so we provide custom tailored quotes after discovery.',
      features: ['Inventory & Accounting Sync', 'HR & Employee Management', 'Custom Workflow Modules'],
    },
    {
      id: 'internal-business-tools',
      name: 'Internal Business Tools',
      description: 'Custom admin dashboards, workflow automation suites, and internal operation portals.',
      isStarting: true,
      prices: { INR: 39999, USD: 599, EUR: 549 },
      features: ['Admin Control Panel', 'Data Visualization', 'Workflow Automation'],
    },
    {
      id: 'ai-powered-platform',
      name: 'AI-Powered Platforms',
      description: 'Next-gen software platforms powered by LLMs, custom machine learning, and AI insights.',
      isStarting: true,
      prices: { INR: 49999, USD: 799, EUR: 749 },
      features: ['LLM & Vector Search', 'Predictive Analytics', 'Custom AI Pipelines'],
    },
  ],

  addons: [
    {
      id: 'analytics-setup',
      name: 'Analytics Setup',
      description: 'Google Analytics 4, conversion event tracking, and Google Tag Manager configuration.',
      prices: { INR: 2499, USD: 49, EUR: 45 },
    },
    {
      id: 'crm-setup',
      name: 'CRM Setup',
      description: 'Configuration of CRM leads pipeline, automated notification hooks, and staff access.',
      prices: { INR: 3999, USD: 89, EUR: 79 },
    },
    {
      id: 'monthly-maintenance',
      name: 'Monthly Maintenance',
      description: 'Regular security updates, performance monitoring, content updates, and server maintenance.',
      prices: { INR: null, USD: 29, EUR: 25 },
      period: 'month',
      regionalNote: 'Available for international accounts (USD / EUR).',
    },
    {
      id: 'priority-support-6mo',
      name: 'Priority Support - 6 Months',
      description: 'Dedicated priority support desk with SLA response times for 6 months.',
      prices: { INR: 2999, USD: 79, EUR: 69 },
    },
  ],
};

// ─── Homepage Highlights ───
export const homepagePricingHighlights = [
  {
    category: 'Websites & E-Commerce',
    startingLabel: 'From',
    prices: { INR: 7000, USD: 249, EUR: 229 },
    popularFor: 'Local Business, E-Commerce & Fashion',
    link: '/websites',
  },
  {
    category: 'AI Agents',
    startingLabel: 'From',
    prices: { INR: 14999, USD: 449, EUR: 399 },
    popularFor: 'WhatsApp, Sales & Scraper Agents',
    link: '/ai-agents',
  },
  {
    category: 'Custom Software',
    startingLabel: 'From',
    prices: { INR: 39999, USD: 499, EUR: 449 },
    popularFor: 'Web Apps, SaaS & Enterprise Tools',
    link: '/software',
  },
  {
    category: 'Premium 3D Websites',
    startingLabel: '',
    prices: { INR: 35000, USD: 699, EUR: 649 },
    popularFor: 'Immersive WebGL & Motion Design',
    link: '/websites',
  },
];
