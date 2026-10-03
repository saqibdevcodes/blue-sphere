import React from "react";
import { COMPANY_INFO } from "@/data/company";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const baseUrl = COMPANY_INFO.contact.websiteUrl.replace(/\/+$/, "");

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/`,
      },
      ...items.map((crumb, idx) => ({
        "@type": "ListItem",
        position: idx + 2,
        name: crumb.name,
        item: crumb.url.startsWith("http")
          ? crumb.url
          : `${baseUrl}${crumb.url.startsWith("/") ? "" : "/"}${crumb.url}`,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
