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

// ─── Standard Packages ───
export const packages = [
  {
    id: 'local-launch',
    name: 'Local Launch Package',
    tagline: 'Ideal for small local businesses & micro-shops',
    popular: false,
    cta: 'Get Started',
    prices: { INR: 8000, USD: 199, EUR: 179 },
    features: [
      '1–3 Page Static Website',
      'WhatsApp & Phone Button',
      'Google Maps Integration',
      'Basic SEO & Metadata',
      'Speed & Mobile Optimization',
      'Free Deployment',
    ],
  },
  {
    id: 'starter-website',
    name: 'Starter Website Package',
    tagline: 'Professional 5-page site to establish online authority',
    popular: false,
    cta: 'Get Started',
    prices: { INR: 14999, USD: 199, EUR: 189 },
    features: [
      'Up to 5 Pages',
      'Mobile Responsive Layout',
      'Interactive Contact Forms',
      'Basic SEO Setup',
      'Analytics Setup',
      '1 Month Support',
    ],
  },
  {
    id: 'business-growth',
    name: 'Business Growth Package',
    tagline: 'Complete digital presence built for lead conversion',
    popular: true,
    cta: 'Get Started',
    prices: { INR: 24999, USD: 399, EUR: 349 },
    features: [
      'Business Website',
      'WhatsApp Integration',
      'Lead & Contact Forms',
      'Google Analytics Setup',
      'Complete Technical SEO',
      'Free Deployment',
      '3 Months Support',
    ],
  },
  {
    id: 'digital-business',
    name: 'Digital Business Package',
    tagline: 'Dynamic site with CMS admin panel and lead workflow',
    popular: false,
    cta: 'Go Digital',
    prices: { INR: 39999, USD: 599, EUR: 549 },
    features: [
      'Dynamic Website + Admin Panel',
      'Lead Management System',
      'WhatsApp Integration',
      'Advanced Analytics & Tracking',
      'Complete Technical SEO',
      'Basic Workflow Automation',
      'Free Deployment',
    ],
  },
  {
    id: 'ai-growth',
    name: 'AI Growth Package',
    tagline: 'Modern website integrated with an intelligent AI Agent',
    popular: false,
    cta: 'Deploy AI',
    prices: { INR: 39999, USD: 599, EUR: 549 },
    features: [
      'Full Business Website',
      '1 Custom AI Agent (Voice / WhatsApp / Sales)',
      'Automated Lead Capture',
      'WhatsApp API Integration',
      'Basic Workflow Automation',
      'Full Analytics & Technical SEO',
    ],
    note: 'Third-party API & usage charges extra as applicable.',
  },
  {
    id: 'premium-experience',
    name: 'Premium Experience Package',
    tagline: 'Cutting-edge 3D animations and bespoke digital experiences',
    popular: false,
    cta: 'Go Premium',
    prices: { INR: 49999, USD: 599, EUR: 549 },
    features: [
      'Premium Design & UX',
      'Custom 3D / GSAP Animations',
      'AI Agent Integration',
      'Ultra Performance & Speed',
      'Complete Technical SEO',
      '6 Months Support',
    ],
  },
];

// ─── Detailed Services Catalog ───
export const customServices = {
  websites: [
    {
      id: 'local-starter-website',
      name: 'Local Starter / Small Business Website',
      description: '1–3 page sleek website tailored for local shops, barbers, cafes, tutors, and micro-businesses.',
      prices: { INR: 8000, USD: 199, EUR: 179 },
      features: ['1–3 Pages', 'WhatsApp Button', 'Google Maps', 'Mobile Responsive'],
    },
    {
      id: 'landing-page',
      name: 'Landing Page',
      description: 'High-converting single-page website with modern design optimized for ad campaigns.',
      prices: { INR: 9999, USD: 149, EUR: 139 },
      features: ['High Conversion Design', 'Lead Capture Form', 'Fast Loading Speed'],
    },
    {
      id: 'business-website',
      name: 'Business Website',
      description: 'Professional multi-page business website that builds trust and credibility.',
      prices: { INR: 14999, USD: 399, EUR: 349 },
      features: ['Multi-page structure', 'Contact & Booking', 'SEO Optimized'],
    },
    {
      id: 'startup-website',
      name: 'Startup Website',
      description: 'High-impact launch website engineered for growth, speed, and investor appeal.',
      prices: { INR: 34999, USD: 449, EUR: 429 },
      features: ['Modern Tech Aesthetic', 'Investor Deck Embeds', 'Speed Optimized'],
    },
    {
      id: 'dynamic-website',
      name: 'Dynamic Website + Admin Panel',
      description: 'Dynamic content management system with custom admin dashboard for easy updates.',
      prices: { INR: 24999, USD: 399, EUR: 379 },
      features: ['Admin Control Panel', 'Dynamic Content', 'Role Management'],
    },
    {
      id: 'ecommerce-store',
      name: 'E-Commerce Store',
      description: 'Full-featured online store with product catalogs, shopping cart, and payment gateway.',
      prices: { INR: 15999, USD: 499, EUR: 449 },
      features: ['Product Catalog', 'Payment Gateways', 'Order Management'],
    },
    {
      id: 'portfolio-website',
      name: 'Portfolio Website',
      description: 'Showcase your creative work, case studies, and achievements with visual elegance.',
      prices: { INR: 14999, USD: 249, EUR: 229 },
      features: ['Gallery Showcase', 'Project Case Studies', 'Smooth Animations'],
    },
    {
      id: 'restaurant-website',
      name: 'Restaurant Website',
      description: 'Digital menus, online table booking, location maps, and order integration.',
      prices: { INR: 19999, USD: 299, EUR: 279 },
      features: ['Interactive Menu', 'Table Booking', 'Google Maps Sync'],
    },
    {
      id: 'real-estate-website',
      name: 'Real Estate Website',
      description: 'Property listings, filter search, virtual tours, and agent lead forms.',
      prices: { INR: 29999, USD: 449, EUR: 429 },
      features: ['Property Listings', 'Search Filters', 'Agent Contact Forms'],
    },
    {
      id: 'healthcare-website',
      name: 'Healthcare Website',
      description: 'Patient-focused website with appointment scheduling, doctor profiles, and clinic info.',
      prices: { INR: 29999, USD: 449, EUR: 429 },
      features: ['Doctor Profiles', 'Appointment Booking', 'Patient Resources'],
    },
    {
      id: 'blog-system',
      name: 'Blog System',
      description: 'Custom content publication system with categories, search, newsletter, and SEO setup.',
      prices: { INR: 19999, USD: 299, EUR: 279 },
      features: ['CMS Publishing', 'Category Filtering', 'Newsletter Opt-in'],
    },
    {
      id: 'website-redesign',
      name: 'Website Redesign',
      description: 'Modernize your outdated website with superior design, fast performance, and UX revamp.',
      prices: { INR: 24999, USD: 399, EUR: 379 },
      features: ['Complete Overhaul', 'Mobile Optimization', 'Core Web Vitals Boost'],
    },
    {
      id: 'premium-3d-website',
      name: 'Premium 3D Website',
      description: 'State-of-the-art immersive 3D experience with WebGL/Three.js visual effects.',
      prices: { INR: 39999, USD: 599, EUR: 549 },
      features: ['WebGL / Three.js 3D', 'Interactive Motion', 'Bespoke UI/UX'],
    },
  ],

  aiAgents: [
    {
      id: 'voice-calling',
      name: 'Voice Calling Agent',
      description: 'Human-like AI phone agent that handles inbound customer support, outbound calls, and bookings.',
      prices: { INR: 19999, USD: 499, EUR: 449 },
      features: ['Natural Voice Flow', 'CRM Auto Sync', 'Call Transcripts'],
      usageNotice: 'Voice telephony minutes & carrier costs billed separately.',
    },
    {
      id: 'whatsapp-agent',
      name: 'WhatsApp Business Agent',
      description: 'Automated 24/7 WhatsApp API agent for instant customer support, lead capture, and orders.',
      prices: { INR: 14999, USD: 399, EUR: 379 },
      features: ['24/7 Auto Replies', 'Catalog Sharing', 'Payment Link Integration'],
      usageNotice: 'Meta WhatsApp Business API conversation charges billed separately.',
    },
    {
      id: 'social-media-agent',
      name: 'Social Media Manager Agent',
      description: 'AI agent that creates posts, schedules content, responds to comments, and tracks performance.',
      prices: { INR: 19999, USD: 449, EUR: 399 },
      features: ['Automated Content Plan', 'Multi-Platform Sync', 'Analytics Dashboard'],
    },
    {
      id: 'sales-agent',
      name: 'Sales Agent',
      description: 'AI sales specialist that qualifies leads, handles objections, and schedules meetings.',
      prices: { INR: 24999, USD: 499, EUR: 449 },
      features: ['Lead Qualification', 'Email Sequences', 'Calendar Booking'],
    },
    {
      id: 'onboarding-agent',
      name: 'Onboarding Agent',
      description: 'Automated customer and employee onboarding workflow with document collection and progress tracking.',
      prices: { INR: 19999, USD: 399, EUR: 379 },
      features: ['Step-by-step Flows', 'Document Collection', 'Automated Verification'],
    },
    {
      id: 'video-generation-agent',
      name: 'Video Generation Agent',
      description: 'AI-driven video creator for social reels, ads, marketing demos, and explainer clips.',
      prices: { INR: 24999, USD: 499, EUR: 449 },
      features: ['Script to Video', 'Voiceover Generation', 'Multi-Format Export'],
    },
    {
      id: 'data-scraping-agent',
      name: 'Data Scraping Agent',
      description: 'Intelligent scraper agent that extracts, structures, and exports web data automatically.',
      prices: { INR: 14999, USD: 349, EUR: 329 },
      features: ['Anti-block Rotation', 'CSV/JSON Export', 'Scheduled Runs'],
    },
    {
      id: 'lead-generation-agent',
      name: 'Lead Generation Agent',
      description: 'Autonomous agent that finds targeted prospects, enriches contact details, and feeds warm leads to sales.',
      prices: { INR: 19999, USD: 449, EUR: 399 },
      features: ['Prospect Enrichment', 'Multi-channel Discovery', 'CRM Integration'],
    },
    {
      id: 'data-extraction-agent',
      name: 'Data Extraction / Scraper Agent',
      description: 'Advanced data harvester with NLP document processing, table parsing, and data cleaning.',
      prices: { INR: 12999, USD: 299, EUR: 279 },
      features: ['PDF/Image Extraction', 'NLP Parsing', 'Automated Reports'],
    },
  ],

  software: [
    {
      id: 'web-application',
      name: 'Web Applications',
      description: 'Custom full-stack web platforms built with React, Next.js, Node.js, and cloud backend.',
      isStarting: true,
      prices: { INR: 39999, USD: 399, EUR: 379 },
      features: ['Custom Full-Stack Architecture', 'Scalable Database', 'Secure Auth'],
    },
    {
      id: 'mobile-application',
      name: 'Mobile Applications',
      description: 'Cross-platform native iOS & Android applications with smooth UI and push notifications.',
      isStarting: true,
      prices: { INR: 59999, USD: 599, EUR: 549 },
      features: ['iOS & Android Native', 'Offline Support', 'App Store Publishing'],
    },
    {
      id: 'desktop-application',
      name: 'Desktop Applications',
      description: 'High-performance desktop software for Windows, macOS, and Linux built with Electron or Python.',
      isStarting: true,
      prices: { INR: 59999, USD: 599, EUR: 549 },
      features: ['Cross-Platform Desktop', 'Hardware Acceleration', 'Local File Access'],
    },
    {
      id: 'saas-platform',
      name: 'SaaS Platforms',
      description: 'Complete multi-tenant SaaS application with subscriptions, billing, analytics, and admin.',
      isStarting: true,
      prices: { INR: 49999, USD: 699, EUR: 649 },
      features: ['Subscription Billing', 'Multi-tenant Architecture', 'User Dashboards'],
    },
    {
      id: 'crm-system',
      name: 'CRM Systems',
      description: 'Tailored Customer Relationship Management software for pipeline tracking, deals, and team tasks.',
      isStarting: true,
      prices: { INR: 59999, USD: 699, EUR: 649 },
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
      prices: { INR: 39999, USD: 499, EUR: 449 },
      features: ['Admin Control Panel', 'Data Visualization', 'Workflow Automation'],
    },
    {
      id: 'ai-powered-platform',
      name: 'AI-Powered Platforms',
      description: 'Next-gen software platforms powered by LLMs, custom machine learning, and AI insights.',
      isStarting: true,
      prices: { INR: 49999, USD: 699, EUR: 649 },
      features: ['LLM & Vector Search', 'Predictive Analytics', 'Custom AI Pipelines'],
    },
  ],

  addons: [
    {
      id: 'analytics-setup',
      name: 'Analytics Setup',
      description: 'Google Analytics 4, conversion event tracking, and Google Tag Manager configuration.',
      prices: { INR: 2499, USD: 39, EUR: 35 },
    },
    {
      id: 'crm-setup',
      name: 'CRM Setup',
      description: 'Configuration of CRM leads pipeline, automated notification hooks, and staff access.',
      prices: { INR: 3999, USD: 79, EUR: 69 },
    },
    {
      id: 'monthly-maintenance',
      name: 'Monthly Maintenance',
      description: 'Regular security updates, performance monitoring, content updates, and server maintenance.',
      prices: { INR: null, USD: 19, EUR: 17 }, // Not offered as standard recurring package for India
      period: 'month',
      regionalNote: 'Available for international accounts (USD / EUR).',
    },
    {
      id: 'priority-support-6mo',
      name: 'Priority Support - 6 Months',
      description: 'Dedicated priority support desk with SLA response times for 6 months.',
      prices: { INR: 2999, USD: 69, EUR: 59 },
    },
  ],
};

// ─── Homepage Highlights ───
export const homepagePricingHighlights = [
  {
    category: 'Websites & E-Commerce',
    startingLabel: 'From',
    prices: { INR: 8000, USD: 199, EUR: 179 },
    popularFor: 'Local Shops, Business Sites & Stores',
    link: '/websites',
  },
  {
    category: 'AI Agents',
    startingLabel: 'From',
    prices: { INR: 12999, USD: 299, EUR: 279 },
    popularFor: 'Voice, WhatsApp & Sales Automation',
    link: '/ai-agents',
  },
  {
    category: 'Custom Software',
    startingLabel: 'From',
    prices: { INR: 39999, USD: 399, EUR: 379 },
    popularFor: 'Web Apps, SaaS & Enterprise Tools',
    link: '/software',
  },
  {
    category: 'Premium 3D Websites',
    startingLabel: '',
    prices: { INR: 39999, USD: 599, EUR: 549 },
    popularFor: 'Immersive WebGL & Motion Design',
    link: '/websites',
  },
];
