import { MetadataRoute } from "next";
import { COMPANY_INFO } from "@/data/company";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = COMPANY_INFO.contact.websiteUrl.replace(/\/+$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "bingbot",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: COMPANY_INFO.contact.domain,
  };
}
