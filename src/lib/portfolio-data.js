// ─── Portfolio Projects Data ───

export const portfolioProjects = [
  {
    id: 'nova-ai-voice',
    title: 'Nova AI Voice Platform',
    category: 'ai-agents',
    industry: 'Healthcare',
    description:
      'Built a multilingual AI voice agent for a healthcare startup that handles appointment scheduling, prescription reminders, and patient follow-ups — reducing manual call volume by 78%.',
    technologies: ['Python', 'OpenAI', 'Twilio', 'FastAPI', 'PostgreSQL'],
    results: '78% reduction in manual call handling, 3x faster patient response times',
    testimonial: {
      quote:
        'AuraLink transformed our patient communication. The AI voice agent handles thousands of calls daily with remarkable accuracy.',
      author: 'Dr. Priya Sharma',
      role: 'CTO, NovaCare Health',
    },
    image: '/portfolio/project-1.jpg',
  },
  {
    id: 'luxe-ecommerce',
    title: 'Luxe Fashion E-Commerce',
    category: 'websites',
    industry: 'Retail & Fashion',
    description:
      'Designed and developed a premium e-commerce platform with 3D product previews, AI-powered size recommendations, and a seamless checkout experience for a luxury fashion brand.',
    technologies: ['Next.js', 'Three.js', 'Stripe', 'Sanity CMS', 'Tailwind CSS'],
    results: '156% increase in online sales, 42% lower cart abandonment rate',
    testimonial: {
      quote:
        'The website exceeded our expectations. Our customers love the 3D try-on feature and the seamless mobile experience.',
      author: 'Arjun Mehta',
      role: 'Founder, Luxe Couture',
    },
    image: '/portfolio/project-2.jpg',
  },
  {
    id: 'fintrack-saas',
    title: 'FinTrack SaaS Platform',
    category: 'software',
    industry: 'Fintech',
    description:
      'Developed a comprehensive financial tracking SaaS platform with real-time dashboards, automated reporting, multi-currency support, and bank API integrations.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Plaid API', 'AWS'],
    results: '12,000+ active users within 6 months, ₹2Cr ARR achieved',
    testimonial: {
      quote:
        'AuraLink delivered a world-class product on time and within budget. Their technical expertise is unmatched.',
      author: 'Ravi Kapoor',
      role: 'CEO, FinTrack Solutions',
    },
    image: '/portfolio/project-3.jpg',
  },
  {
    id: 'smartflow-automation',
    title: 'SmartFlow Marketing Automation',
    category: 'automation',
    industry: 'Marketing',
    description:
      'Created an intelligent marketing automation system with AI-driven content scheduling, audience segmentation, cross-platform posting, and performance analytics across 6 social channels.',
    technologies: ['Python', 'LangChain', 'Meta API', 'Redis', 'Docker'],
    results: '5x increase in engagement, 60% time saved on content management',
    testimonial: {
      quote:
        'Our social media game completely changed. The AI agent creates, schedules, and optimises posts automatically.',
      author: 'Sneha Reddy',
      role: 'Marketing Director, BrandVibe',
    },
    image: '/portfolio/project-4.jpg',
  },
  {
    id: 'medisync-portal',
    title: 'MediSync Patient Portal',
    category: 'websites',
    industry: 'Healthcare',
    description:
      'Built a HIPAA-compliant patient portal with appointment booking, telemedicine integration, prescription management, and real-time health monitoring dashboards.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'WebRTC', 'Tailwind CSS'],
    results: '94% patient satisfaction score, 35% reduction in no-shows',
    testimonial: {
      quote:
        'The portal is intuitive, secure, and our patients absolutely love it. Best investment we made this year.',
      author: 'Dr. Anil Verma',
      role: 'Director, MediSync Clinics',
    },
    image: '/portfolio/project-5.jpg',
  },
  {
    id: 'whatsapp-commerce',
    title: 'WhatsApp Commerce Bot',
    category: 'ai-agents',
    industry: 'E-Commerce',
    description:
      'Deployed a WhatsApp AI agent for a D2C brand that handles product discovery, order placement, payment processing, and delivery tracking — all within WhatsApp.',
    technologies: ['Node.js', 'WhatsApp Business API', 'Razorpay', 'OpenAI', 'MongoDB'],
    results: '₹45L monthly revenue through WhatsApp, 89% customer satisfaction',
    testimonial: {
      quote:
        'Our customers can now browse and buy products without leaving WhatsApp. Sales have skyrocketed.',
      author: 'Karan Joshi',
      role: 'Co-Founder, FreshBasket',
    },
    image: '/portfolio/project-6.jpg',
  },
  {
    id: 'eduvault-platform',
    title: 'EduVault Learning Platform',
    category: 'software',
    industry: 'EdTech',
    description:
      'Developed a full-stack e-learning platform with adaptive learning paths, video streaming, live classes, AI-powered assessments, and gamification features.',
    technologies: ['React', 'Django', 'PostgreSQL', 'AWS MediaLive', 'TensorFlow'],
    results: '50,000+ students enrolled, 4.8/5 average rating',
    testimonial: {
      quote:
        'AuraLink built us a platform that rivals the best EdTech products out there. The adaptive learning feature is brilliant.',
      author: 'Nandini Gupta',
      role: 'CEO, EduVault',
    },
    image: '/portfolio/project-7.jpg',
  },
  {
    id: 'data-harvest',
    title: 'DataHarvest Intelligence Suite',
    category: 'automation',
    industry: 'Market Research',
    description:
      'Built an AI-powered data scraping and intelligence platform that collects, cleans, and analyses competitor data from 200+ sources with natural language reporting.',
    technologies: ['Python', 'Scrapy', 'GPT-4', 'Elasticsearch', 'React'],
    results: '200+ data sources automated, 90% accuracy in market predictions',
    testimonial: {
      quote:
        'DataHarvest gives us competitive intelligence that used to take our team weeks. Now it is instant and incredibly accurate.',
      author: 'Vikram Patel',
      role: 'VP Analytics, InsightCorp',
    },
    image: '/portfolio/project-8.jpg',
  },
];

// Filter categories
export const portfolioCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai-agents', label: 'AI Agents' },
  { id: 'websites', label: 'Websites' },
  { id: 'software', label: 'Software' },
  { id: 'automation', label: 'Automation' },
];
