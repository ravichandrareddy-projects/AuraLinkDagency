// ─── Problem-to-Solution Recommendation Engine ───
// Architecture Boundary:
// User Input -> Recommendation Engine Adapter -> Recommendations Result
// Can be seamlessly upgraded to an LLM / AI API endpoint without modifying frontend UI.

export const suggestedProblems = [
  'I want to increase my customers & leads',
  'I want customers to contact me on WhatsApp',
  'My website looks old and needs a redesign',
  'I need an online store to sell products',
  'I want to automate repetitive operational tasks',
  'I want to rank higher on Google Search',
  'I want an AI agent to handle phone calls',
  'I need a custom mobile app for my business',
  'I need an internal dashboard for my staff',
  'I need a clinic website with appointment booking',
  'I need a real estate website with listings',
];

export const problemRules = [
  {
    keywords: ['customer', 'leads', 'more sales', 'grow business', 'increase revenue'],
    recommendations: [
      {
        title: 'Lead Generation Agent',
        description: 'Autonomous AI agent that finds, qualifies, and enriches high-intent leads automatically.',
        why: 'Fills your sales pipeline with verified prospects without manual outreach hours.',
        cta: 'Explore Lead Agent',
        link: '/ai-agents#agents',
        category: 'AI Agents',
      },
      {
        title: 'Sales Agent',
        description: 'AI sales specialist that follows up with leads, answers questions, and books calls.',
        why: 'Prevents lead drop-off by responding to prospects within seconds 24/7.',
        cta: 'View Sales Agent',
        link: '/ai-agents#agents',
        category: 'AI Agents',
      },
      {
        title: 'Business Growth Website',
        description: 'Conversion-optimized business website with built-in analytics and lead forms.',
        why: 'Turns website visitors into paying clients with strategic landing layouts.',
        cta: 'View Website Solutions',
        link: '/websites',
        category: 'Websites',
      },
      {
        title: 'WhatsApp Business Agent',
        description: 'Automated 24/7 WhatsApp API bot that converts chat visitors into orders.',
        why: 'WhatsApp has 98% open rates in emerging and international markets.',
        cta: 'Explore WhatsApp Agent',
        link: '/ai-agents#agents',
        category: 'AI Agents',
      },
    ],
  },
  {
    keywords: ['whatsapp', 'chat', 'messaging', 'instant message'],
    recommendations: [
      {
        title: 'WhatsApp Business Agent',
        description: 'AI WhatsApp agent handling customer queries, product catalogs, and payments.',
        why: 'Gives your business an instant 24/7 chat channel right inside WhatsApp.',
        cta: 'Deploy WhatsApp Agent',
        link: '/ai-agents#agents',
        category: 'AI Agents',
      },
      {
        title: 'Business Website Integration',
        description: 'Modern website with direct click-to-WhatsApp conversion buttons.',
        why: 'Allows visitors to connect with your team in one click.',
        cta: 'Explore Websites',
        link: '/websites',
        category: 'Websites',
      },
    ],
  },
  {
    keywords: ['redesign', 'old website', 'outdated', 'ugly', 'modernize', 'slow website'],
    recommendations: [
      {
        title: 'Website Redesign',
        description: 'Complete visual and technical overhaul for speed, mobile UX, and modern branding.',
        why: 'Replaces outdated layouts with fast Next.js architecture and top SEO standards.',
        cta: 'Get Redesign Quote',
        link: '/websites',
        category: 'Websites',
      },
      {
        title: 'Premium 3D Experience',
        description: 'Cutting-edge WebGL & GSAP 3D interactive design.',
        why: 'Instantly sets your agency or enterprise apart from traditional competitors.',
        cta: 'View 3D Experience',
        link: '/websites',
        category: 'Websites',
      },
      {
        title: 'Technical SEO Optimization',
        description: 'Comprehensive speed, Core Web Vitals, and meta optimization.',
        why: 'Ensures your redesigned website ranks higher and loads in under 1.5 seconds.',
        cta: 'Learn SEO Benefits',
        link: '/services/seo',
        category: 'SEO',
      },
    ],
  },
  {
    keywords: ['store', 'e-commerce', 'ecommerce', 'sell online', 'products', 'shop'],
    recommendations: [
      {
        title: 'E-Commerce Store',
        description: 'Full-featured online store with payment gateways, catalog management, and cart.',
        why: 'Provides a seamless checkout experience for your global or local buyers.',
        cta: 'Build Online Store',
        link: '/websites',
        category: 'Websites',
      },
      {
        title: 'WhatsApp Commerce Bot',
        description: 'Sell products directly inside WhatsApp with catalog previews and payment links.',
        why: 'Enables mobile buyers to complete transactions without leaving chat.',
        cta: 'Explore WhatsApp Bot',
        link: '/ai-agents#agents',
        category: 'AI Agents',
      },
    ],
  },
  {
    keywords: ['automate', 'repetitive', 'manual work', 'workflow', 'time saving', 'hours'],
    recommendations: [
      {
        title: 'Custom Workflow Automation',
        description: 'End-to-end automation connecting your forms, CRM, emails, and database.',
        why: 'Eliminates repetitive data entry and manual follow-ups completely.',
        cta: 'Explore Automation',
        link: '/services/automation',
        category: 'Automation',
      },
      {
        title: 'AI Agent Solutions',
        description: 'Autonomous agents handling voice calls, customer onboarding, and social media.',
        why: 'Executes complex multi-step business routines around the clock.',
        cta: 'View AI Suite',
        link: '/ai-agents',
        category: 'AI Agents',
      },
      {
        title: 'Internal Business Tools',
        description: 'Custom admin dashboards and management portals built for operational speed.',
        why: 'Gives your employees a single interface to manage all operations.',
        cta: 'Explore Custom Tools',
        link: '/software',
        category: 'Software',
      },
    ],
  },
  {
    keywords: ['rank', 'google', 'seo', 'search', 'find on google', 'traffic'],
    recommendations: [
      {
        title: 'Technical & On-Page SEO',
        description: 'Full audit, schema markup, Core Web Vitals optimization, and keyword targeting.',
        why: 'Fixes architectural search blockers and positions your site for page-one rankings.',
        cta: 'Explore SEO Services',
        link: '/services/seo',
        category: 'SEO',
      },
      {
        title: 'Local SEO & Google Business Profile',
        description: 'Optimization for map packs, local keywords, and local customer discovery.',
        why: 'Drives high-intent local foot traffic and local calls directly to your business.',
        cta: 'View Local SEO',
        link: '/services/seo',
        category: 'SEO',
      },
      {
        title: 'Analytics & Search Tracking',
        description: 'Google Analytics 4 & Search Console configuration with conversion goal tracking.',
        why: 'Provides full visibility into search keywords and visitor conversion paths.',
        cta: 'Setup Analytics',
        link: '/pricing',
        category: 'Analytics',
      },
    ],
  },
  {
    keywords: ['phone', 'voice', 'calls', 'calling', 'receptionist', 'support calls'],
    recommendations: [
      {
        title: 'Voice Calling Agent',
        description: 'Human-like AI phone agent that answers calls, schedules appointments, and updates CRM.',
        why: 'Never lets an inbound business call go unanswered, even after business hours.',
        cta: 'Demo Voice Agent',
        link: '/ai-agents#agents',
        category: 'AI Agents',
      },
      {
        title: 'Sales Agent',
        description: 'AI sales qualification agent that calls warm leads and schedules closing meetings.',
        why: 'Connects with leads within 60 seconds of form submission.',
        cta: 'Explore Sales Agent',
        link: '/ai-agents#agents',
        category: 'AI Agents',
      },
    ],
  },
  {
    keywords: ['app', 'mobile', 'android', 'ios', 'phone app'],
    recommendations: [
      {
        title: 'Cross-Platform Mobile Application',
        description: 'Native-feel iOS and Android mobile app built with Flutter or React Native.',
        why: 'Provides push notifications, offline storage, and app store presence.',
        cta: 'Build Mobile App',
        link: '/software',
        category: 'Software',
      },
      {
        title: 'Web Application (PWA)',
        description: 'Responsive web app accessible across desktop, tablet, and mobile browsers.',
        why: 'Faster delivery with lower maintenance cost across all user devices.',
        cta: 'Explore Web Apps',
        link: '/software',
        category: 'Software',
      },
    ],
  },
  {
    keywords: ['dashboard', 'employee', 'internal', 'crm', 'erp', 'inventory', 'management tool'],
    recommendations: [
      {
        title: 'Internal Business Tools',
        description: 'Custom operation dashboards, employee tracking tools, and admin panels.',
        why: 'Streamlines internal approvals, task assignments, and reporting.',
        cta: 'View Custom Software',
        link: '/software',
        category: 'Software',
      },
      {
        title: 'Custom CRM System',
        description: 'Tailored Customer Relationship Management software for deals and pipeline tracking.',
        why: 'Replaces expensive per-seat CRM tools with your own dedicated platform.',
        cta: 'Explore CRM Solutions',
        link: '/software',
        category: 'Software',
      },
      {
        title: 'Enterprise ERP System',
        description: 'Custom Enterprise Resource Planning uniting sales, HR, inventory, and accounting.',
        why: 'Integrates all company operational modules in one secure system.',
        cta: 'Request Custom Quote',
        link: '/contact',
        category: 'Software',
      },
    ],
  },
  {
    keywords: ['clinic', 'hospital', 'doctor', 'patient', 'health', 'appointment'],
    recommendations: [
      {
        title: 'Healthcare Website',
        description: 'Patient-centric website with online booking, doctor profiles, and clinic info.',
        why: 'Builds patient trust and enables 24/7 appointment self-scheduling.',
        cta: 'View Healthcare Solution',
        link: '/websites',
        category: 'Websites',
      },
      {
        title: 'WhatsApp Appointment Bot',
        description: 'Automated WhatsApp assistant that sends appointment reminders and booking links.',
        why: 'Reduces clinic no-shows by sending instant WhatsApp confirmations.',
        cta: 'Explore WhatsApp Agent',
        link: '/ai-agents#agents',
        category: 'AI Agents',
      },
    ],
  },
  {
    keywords: ['real estate', 'property', 'properties', 'realtor', 'listings'],
    recommendations: [
      {
        title: 'Real Estate Website',
        description: 'Property search filter, virtual gallery, map embeds, and agent contact forms.',
        why: 'Showcases property listings elegantly with high lead capture rates.',
        cta: 'View Real Estate Solution',
        link: '/websites',
        category: 'Websites',
      },
      {
        title: 'Lead Generation Agent',
        description: 'AI agent that qualifies buyer and seller prospects and books viewing calls.',
        why: 'Filters serious property buyers from casual web browsers automatically.',
        cta: 'Explore Lead Agent',
        link: '/ai-agents#agents',
        category: 'AI Agents',
      },
    ],
  },
];

export async function findSolutionsForProblem(queryText) {
  if (!queryText || typeof queryText !== 'string' || queryText.trim().length === 0) {
    return [];
  }

  const query = queryText.toLowerCase().trim();
  const matchedSolutions = [];
  const seenTitles = new Set();

  for (const rule of problemRules) {
    const matchesKeyword = rule.keywords.some((kw) => query.includes(kw));
    if (matchesKeyword) {
      for (const rec of rule.recommendations) {
        if (!seenTitles.has(rec.title)) {
          seenTitles.add(rec.title);
          matchedSolutions.push(rec);
        }
      }
    }
  }

  // Fallback defaults if query doesn't match specific keyword rule
  if (matchedSolutions.length === 0) {
    matchedSolutions.push(
      {
        title: 'Business Growth Package',
        description: 'Full business website with lead capture forms, WhatsApp integration, and SEO.',
        why: 'Recommended primary foundation for digital growth and online authority.',
        cta: 'Explore Package',
        link: '/pricing',
        category: 'Websites',
      },
      {
        title: 'AI Agent Automation',
        description: 'Custom AI Voice, WhatsApp, or Sales Agent tailored to your workflow.',
        why: 'Automates customer acquisition and support tasks 24/7.',
        cta: 'Discover AI Suite',
        link: '/ai-agents',
        category: 'AI Agents',
      },
      {
        title: 'Custom Software Development',
        description: 'Web apps, mobile apps, or enterprise tools engineered specifically for your business.',
        why: 'Solves complex operational bottlenecks with proprietary software.',
        cta: 'View Software Solutions',
        link: '/software',
        category: 'Software',
      }
    );
  }

  return matchedSolutions.slice(0, 4);
}
