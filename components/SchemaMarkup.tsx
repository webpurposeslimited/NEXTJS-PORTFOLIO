"use client";

import React from 'react';
import Script from 'next/script';
import { websiteInfo, socialLinks } from '@/data';

interface SchemaMarkupProps {
  pageType?: 'homepage' | 'about';
}

export function SchemaMarkup({ pageType = 'homepage' }: SchemaMarkupProps) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": websiteInfo.author,
    "jobTitle": websiteInfo.jobTitle,
    "url": typeof window !== 'undefined' ? window.location.origin : '',
    "email": websiteInfo.contactEmail,
    "telephone": websiteInfo.contactPhone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": websiteInfo.contactLocation
    },
    "sameAs": socialLinks.map(link => link.url)
  };
  
  const schema = JSON.stringify(baseSchema);
  
  return (
    <Script 
      id="schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: schema }}
    />
  );
}
