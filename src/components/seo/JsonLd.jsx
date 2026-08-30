'use client';

import React from 'react';

export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AuraLink Digital Agency',
    url: 'https://auralink.agency',
    logo: 'https://auralink.agency/logo.png',
    sameAs: [
      'https://twitter.com/auralinkagency',
      'https://linkedin.com/company/auralink-agency',
      'https://github.com/auralink',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9876543210',
      contactType: 'sales & support',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Hindi'],
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'AuraLink Digital Agency',
    image: 'https://auralink.agency/logo.png',
    '@id': 'https://auralink.agency/#organization',
    url: 'https://auralink.agency',
    telephone: '+919876543210',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangalore',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.9716,
      longitude: 77.5946,
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
    name: 'AuraLink Digital Agency Services',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Websites & E-Commerce Development',
        description: 'Custom high-performance websites, dynamic platforms, and online stores.',
        provider: { '@type': 'Organization', name: 'AuraLink Digital Agency' },
      },
      {
        '@type': 'Service',
        name: 'AI Agent Solutions',
        description: 'Autonomous voice calling agents, 24/7 WhatsApp API bots, and sales agents.',
        provider: { '@type': 'Organization', name: 'AuraLink Digital Agency' },
      },
      {
        '@type': 'Service',
        name: 'Custom Software Solutions',
        description: 'Web applications, mobile apps, SaaS platforms, CRM systems, and custom ERPs.',
        provider: { '@type': 'Organization', name: 'AuraLink Digital Agency' },
      },
      {
        '@type': 'Service',
        name: 'Technical & Local SEO Optimization',
        description: 'Full-stack search optimization, schema markup, and speed optimization.',
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
          text: 'AuraLink provides Websites & E-Commerce development, Autonomous AI Agent Solutions (Voice calling, WhatsApp API, Lead gen), Custom Software Solutions (Web/Mobile apps, CRMs, ERPs), Workflow Automation, and Technical & Local SEO.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are AuraLink website starting prices?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AuraLink websites start at ₹8,000 / $199 / €179 for Local Starter Sites, ₹14,999 / $399 / €349 for Business Websites, and ₹39,999 / $599 / €549 for Premium 3D WebGL websites with zero hidden conversion fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are AuraLink AI Agent starting prices?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AuraLink AI Agents start at ₹12,999 / $299 / €279 for Data Scrapers, ₹14,999 / $399 / €379 for WhatsApp Agents, and ₹19,999 / $499 / €449 for Voice Calling Agents.',
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
