'use client';

import React from 'react';

export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AuraLink Digital Agency',
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

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'AuraLink Digital Agency',
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
    priceRange: '$$$',
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
          text: 'AuraLink websites start at ₹8,000 / $199 / €179 for Local Starter Sites, ₹14,999 / $399 / €349 for Business Websites, and ₹39,999 / $599 / €549 for Premium 3D WebGL websites.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are AuraLink AI Agent starting prices?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AuraLink AI Agents start at ₹14,999 / $399 / €379 for WhatsApp Agents, and ₹19,999 / $499 / €449 for Voice Calling Agents.',
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
