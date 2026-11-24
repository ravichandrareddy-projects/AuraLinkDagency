'use client';

import React from 'react';

export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://auralinkdigitalagency.indevs.in/#organization',
    name: 'AuraLink Digital Agency',
    alternateName: ['AURA', 'AuraLink', 'Aura Link', 'Aura Agency', 'Aura Digital Agency', 'Aura Digital'],
    description:
      'AuraLink Digital Agency (AURA) builds conversion-focused business websites delivered in 48 hours, autonomous AI WhatsApp & Voice agents, custom SaaS platforms, and complete online presence systems.',
    url: 'https://auralinkdigitalagency.indevs.in',
    logo: 'https://auralinkdigitalagency.indevs.in/logo.png',
    sameAs: [
      'https://twitter.com/auralinkagency',
      'https://linkedin.com/company/auralink-agency',
      'https://github.com/auralink',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+919440336396',
      email: 'hello@auralinkdigitalagency.indevs.in',
      contactType: 'sales & customer support',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Telugu', 'Hindi'],
    },
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://auralinkdigitalagency.indevs.in/#website',
    url: 'https://auralinkdigitalagency.indevs.in',
    name: 'AURA',
    alternateName: ['AuraLink', 'AuraLink Digital Agency', 'Aura Link', 'Aura Digital'],
    description:
      'Official website of AuraLink Digital Agency (AURA). High-converting business websites in 48 hours, autonomous AI agents, and custom software.',
    publisher: { '@id': 'https://auralinkdigitalagency.indevs.in/#organization' },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://auralinkdigitalagency.indevs.in/services?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'AuraLink Digital Agency',
    alternateName: ['AURA', 'AuraLink', 'Aura Link', 'Aura Agency'],
    image: 'https://auralinkdigitalagency.indevs.in/logo.png',
    '@id': 'https://auralinkdigitalagency.indevs.in/#organization',
    url: 'https://auralinkdigitalagency.indevs.in',
    telephone: '+919440336396',
    email: 'hello@auralinkdigitalagency.indevs.in',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Andhra Pradesh',
      addressCountry: 'IN',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
    priceRange: '₹₹ / $$',
  };

  const serviceCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'AuraLink Digital Agency Services & Rapid Delivery Timelines',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Websites & E-Commerce Development (Delivered in 48 Hours)',
        description: 'Custom high-performance business websites, dynamic platforms, and online stores delivered in 48 hours.',
        provider: { '@type': 'Organization', name: 'AuraLink Digital Agency' },
      },
      {
        '@type': 'Service',
        name: 'Autonomous AI Agent Solutions (Deployed in < 3 Business Days)',
        description: 'Autonomous voice calling agents, 24/7 WhatsApp API bots, and sales qualification bots deployed in under 3 days.',
        provider: { '@type': 'Organization', name: 'AuraLink Digital Agency' },
      },
      {
        '@type': 'Service',
        name: 'Custom Software & SaaS Applications (Delivered in < 7 Business Days)',
        description: 'Web applications, mobile apps, SaaS platforms, CRM systems, and custom ERPs delivered in under 7 business days.',
        provider: { '@type': 'Organization', name: 'AuraLink Digital Agency' },
      },
      {
        '@type': 'Service',
        name: 'Technical & Local SEO Architecture',
        description: 'Full-stack search engine optimization, schema markup architecture, Core Web Vitals optimization, and Google indexing.',
        provider: { '@type': 'Organization', name: 'AuraLink Digital Agency' },
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'I need a website for my business — how do I get started with AuraLink?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you need a website for your business, AuraLink Digital Agency provides turnkey design, development, domain setup, and cloud hosting delivered in just 48 hours. Choose between Local Starter Sites, Landing Pages, or full E-Commerce Stores. Message AuraLink on WhatsApp at +91 9440336396 or email hello@auralinkdigitalagency.indevs.in to launch your business online immediately.',
        },
      },
      {
        '@type': 'Question',
        name: 'How to build a website for my business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To build a high-converting website for your business: 1) Identify your audience and target conversion goal (leads, direct sales, or portfolio); 2) Build on a modern high-speed architecture (Next.js & Tailwind CSS) to guarantee sub-second load times; 3) Integrate direct customer contact channels like WhatsApp and Razorpay checkout; 4) Optimize for Google Search and AI Overview engines. AuraLink Digital Agency handles this entire lifecycle for businesses in 48 hours.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does my business need an online presence in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In 2026, over 93% of customer purchase decisions begin on Google, Instagram, or AI search assistants (ChatGPT, Perplexity, Gemini). Without a dedicated online presence, your business loses credibility and high-intent local clients to competitors. AuraLink Digital Agency builds conversion-engineered websites and 24/7 AI WhatsApp agents that automatically turn online traffic into paying customers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is Aura / AuraLink Digital Agency?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AuraLink Digital Agency (often searched as AURA or Aura Agency) is a global technology and creative firm specializing in Autonomous AI Agents (WhatsApp & voice calling), custom SaaS software platforms, conversion-optimized websites, and Generative Engine Optimization (GEO). Founded to help businesses automate operations and drive predictable revenue.',
        },
      },
      {
        '@type': 'Question',
        name: 'What services does AuraLink Digital Agency offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AuraLink Digital Agency provides Business Websites & E-Commerce development (Delivered in 48h), Autonomous AI Agent Solutions (Voice Calling & WhatsApp Bots in < 3 days), Custom Web/Mobile Software (Delivered in < 7 days), Workflow Automation, and Technical & Local SEO.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are AuraLink website starting prices?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AuraLink websites start at ₹7,000 / $249 / €229 for Local Business Websites, ₹8,000 / $249 / €229 for High-Converting Landing Pages, ₹13,000 / $399 / €369 for full E-Commerce Stores, and ₹35,000 / $699 / €649 for Premium 3D WebGL websites.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are AuraLink AI Agent starting prices?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AuraLink AI Agents start at ₹14,999 / $499 / €449 for WhatsApp Business Agents, ₹19,999 / $549 / €499 for Social Media & Lead Gen Agents, and ₹24,999 / $599 / €549 for Autonomous Sales Agents.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly does AuraLink deliver websites, AI agents, and software?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Business Websites are delivered in 48 Hours. Autonomous AI Agents are deployed in less than 3 Business Days. Custom Software & Apps are delivered in less than 7 Business Days.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
