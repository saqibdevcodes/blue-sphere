import React from "react";
import { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { COMPANY_INFO } from "@/data/company";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Terms and Conditions | Blue Sphere Facilities Management FZCO",
  description:
    "Terms and conditions of website use and commercial engagement for Blue Sphere Facilities Management – FZCO, Dubai, UAE.",
  alternates: {
    canonical: "/terms-and-conditions/",
  },
  openGraph: {
    title: "Terms and Conditions | Blue Sphere Facilities Management FZCO",
    description:
      "Terms and conditions of website use and commercial engagement for Blue Sphere Facilities Management – FZCO, Dubai, UAE.",
    url: `${COMPANY_INFO.contact.websiteUrl}/terms-and-conditions/`,
    type: "website",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col w-full bg-[#f7f7f7] text-slate-900">
      <BreadcrumbSchema items={[{ name: "Terms & Conditions", url: "/terms-and-conditions/" }]} />
      <PageHero
        eyebrow="COMMERCIAL TERMS"
        title="Terms &amp; Conditions"
        subtitle="General terms of digital website use and service representation for Blue Sphere Facilities Management – FZCO."
        breadcrumbs={[{ label: "Terms & Conditions" }]}
      />

      <section className="py-16 sm:py-24 bg-[#f7f7f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-black/[0.06] shadow-sm space-y-8 text-slate-700 leading-relaxed font-normal">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and utilizing this website, you acknowledge having reviewed and agreed to comply with these Terms and Conditions and applicable regulations governing business activity in Dubai and the United Arab Emirates.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                2. Nature of Information
              </h2>
              <p>
                Content, service descriptions, and sector overviews published on this website are provided for corporate informational and advisory introductory purposes. Formal contractual deliverables and scopes of work are governed by executed commercial Service Level Agreements (SLAs).
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                3. Intellectual Property
              </h2>
              <p>
                All trademarks, brand names, visual emblems, text layouts, and methodology graphics displayed on this website are the intellectual property of {COMPANY_INFO.name} or authorized licensors and are protected under UAE intellectual property laws.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                4. Applicable Jurisdiction
              </h2>
              <p>
                These terms are governed by the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates. Courts of Dubai have exclusive jurisdiction over any dispute arising from the use of this digital portal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
