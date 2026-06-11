// ─── Standard Plans ───

export const plans = [
  {
    id: 'starter',
    name: 'Starter Website',
    price: 10000,
    period: 'one-time',
    popular: false,
    cta: 'Get Started',
    features: [
      'Up to 5 pages',
      'Mobile responsive design',
      'Contact forms',
      'Basic SEO setup',
      '1 month support',
    ],
  },
  {
    id: 'growth',
    name: 'Growth Business',
    price: 25000,
    period: 'one-time',
    popular: true,
    cta: 'Get Started',
    features: [
      'Advanced animations',
      'Blog system',
      'SEO optimization',
      'CMS integration',
      '3 months support',
    ],
  },
  {
    id: 'premium',
    name: 'Premium Experience',
    price: 50000,
    period: 'one-time',
    popular: false,
    cta: 'Go Premium',
    features: [
      'Premium design & UX',
      'Custom animations',
      'AI integrations',
      'Advanced performance',
      '6 months support',
    ],
  },
  {
    id: 'ai-agent',
    name: 'AI Agent Solutions',
    price: 'Custom',
    period: 'project-based',
    popular: false,
    cta: 'Contact Us',
    features: [
      'Voice Agent',
      'WhatsApp Agent',
      'Sales Agent',
      'Social Media Agent',
      'Video Agent',
      'Custom Integrations',
    ],
  },
];


// ─── Custom Services ───

export const customServices = {
  websites: [
    { id: 'landing-page', name: 'Landing Page', price: 5000, description: 'High-converting single-page website with modern design' },
    { id: 'business-website', name: 'Business Website', price: 10000, description: 'Professional multi-page business website with CMS' },
    { id: 'ecommerce-store', name: 'E-Commerce Store', price: 25000, description: 'Full-featured online store with payment integration' },
    { id: 'blog-system', name: 'Blog System', price: 8000, description: 'Custom blog with categories, search, and SEO' },
    { id: 'portfolio-website', name: 'Portfolio Website', price: 12000, description: 'Showcase your work with stunning visual layouts' },
    { id: 'website-redesign', name: 'Website Redesign', price: 15000, description: 'Modern redesign of your existing website' },
  ],

  aiAgents: [
    { id: 'voice-calling', name: 'Voice Calling Agent', price: 30000, description: 'AI-powered voice agent for calls and customer support' },
    { id: 'whatsapp', name: 'WhatsApp Agent', price: 25000, description: 'Automated WhatsApp bot for business communication' },
    { id: 'sales', name: 'Sales Agent', price: 35000, description: 'AI sales agent that qualifies leads and closes deals' },
    { id: 'social-media', name: 'Social Media Agent', price: 20000, description: 'Automated social media management and posting' },
    { id: 'video-generation', name: 'Video Generation Agent', price: 40000, description: 'AI-powered video creation and editing agent' },
    { id: 'data-scraping', name: 'Data Scraping Agent', price: 15000, description: 'Intelligent web scraping and data extraction' },
    { id: 'onboarding', name: 'Onboarding Agent', price: 20000, description: 'Automated customer onboarding flows' },
    { id: 'lead-generation', name: 'Lead Generation Agent', price: 28000, description: 'AI-driven lead generation and qualification' },
    { id: 'data-scraper', name: 'Data Scraper Agent', price: 18000, description: 'Advanced data scraping with structured output' },
  ],

  software: [
    { id: 'web-app', name: 'Web Application', price: 100000, description: 'Custom full-stack web application' },
    { id: 'mobile-app', name: 'Mobile Application', price: 150000, description: 'Native or cross-platform mobile app' },
    { id: 'desktop-app', name: 'Desktop Application', price: 80000, description: 'Cross-platform desktop software' },
    { id: 'saas-platform', name: 'SaaS Platform', price: 200000, description: 'Complete SaaS product with subscriptions' },
    { id: 'crm-system', name: 'CRM System', price: 120000, description: 'Custom customer relationship management' },
    { id: 'erp-system', name: 'ERP System', price: 250000, description: 'Enterprise resource planning solution' },
  ],

  addons: [
    { id: 'seo-optimization', name: 'SEO Optimization', price: 5000, description: 'Comprehensive SEO audit and optimization' },
    { id: 'analytics-setup', name: 'Analytics Setup', price: 3000, description: 'Google Analytics & conversion tracking setup' },
    { id: 'cms-integration', name: 'CMS Integration', price: 7000, description: 'Headless CMS integration (Sanity, Strapi, etc.)' },
    { id: 'custom-animations', name: 'Custom Animations', price: 10000, description: 'Premium GSAP & Framer Motion animations' },
    { id: 'monthly-maintenance', name: 'Monthly Maintenance', price: 5000, description: 'Ongoing website updates and maintenance' },
    { id: 'priority-support-3mo', name: 'Priority Support (3 months)', price: 15000, description: 'Dedicated priority support for 3 months' },
    { id: 'priority-support-6mo', name: 'Priority Support (6 months)', price: 25000, description: 'Dedicated priority support for 6 months' },
  ],
};
