import React from "react";
import { COMPANY_INFO } from "@/data/company";
import { SERVICES_DATA } from "@/data/services";
import { HOME_FAQS } from "@/data/faqs";

export function StructuredData() {
  const baseUrl = COMPANY_INFO.contact.websiteUrl.replace(/\/+$/, "");

  // 1. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: COMPANY_INFO.name,
    alternateName: [COMPANY_INFO.shortName, "Blue Sphere FZCO", "Blue Sphere FM"],
    legalName: COMPANY_INFO.name,
    url: `${baseUrl}/`,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/logo.png`,
      caption: COMPANY_INFO.name,
    },
    image: `${baseUrl}/logo.png`,
    description: COMPANY_INFO.tagline,
    email: COMPANY_INFO.contact.email,
    telephone: COMPANY_INFO.contact.telephoneRaw,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${COMPANY_INFO.address.building}, ${COMPANY_INFO.address.hub}`,
      addressLocality: COMPANY_INFO.address.area,
      addressRegion: COMPANY_INFO.address.emirate,
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.1213454,
      longitude: 55.3789498,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY_INFO.contact.telephoneRaw,
        contactType: "customer service",
        areaServed: "AE",
        availableLanguage: ["English", "Arabic"],
      },
    ],
  };

  // 2. LocalBusiness / ProfessionalService Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#localbusiness`,
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.shortName,
    url: `${baseUrl}/`,
    logo: `${baseUrl}/logo.png`,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&h=630&q=80",
    telephone: COMPANY_INFO.contact.telephoneRaw,
    email: COMPANY_INFO.contact.email,
    priceRange: "$$",
    currenciesAccepted: "AED, USD",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${COMPANY_INFO.address.building}, ${COMPANY_INFO.address.hub}`,
      addressLocality: COMPANY_INFO.address.area,
      addressRegion: COMPANY_INFO.address.emirate,
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.1213454,
      longitude: 55.3789498,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Dubai",
      },
      {
        "@type": "Country",
        name: "United Arab Emirates",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Facility Management & Advisory Services",
      itemListElement: SERVICES_DATA.map((service, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.heroSubtitle,
          url: `${baseUrl}/services/${service.slug}/`,
        },
        position: idx + 1,
      })),
    },
  };

  // 3. WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: "Blue Sphere Facilities Management FZCO",
    url: `${baseUrl}/`,
    description: COMPANY_INFO.tagline,
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: "en-AE",
  };

  // 4. FAQPage Schema for Rich Search Results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
