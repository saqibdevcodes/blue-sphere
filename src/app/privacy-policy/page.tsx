import React from "react";
import { Metadata } from "next";
import { AlertCircle } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { COMPANY_INFO } from "@/data/company";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Privacy Policy | Blue Sphere Facilities Management FZCO",
  description:
    "Privacy Policy and data governance practices for Blue Sphere Facilities Management – FZCO, Dubai, United Arab Emirates.",
  alternates: {
    canonical: "/privacy-policy/",
  },
  openGraph: {
    title: "Privacy Policy | Blue Sphere Facilities Management FZCO",
    description:
      "Privacy Policy and data governance practices for Blue Sphere Facilities Management – FZCO, Dubai, UAE.",
    url: `${COMPANY_INFO.contact.websiteUrl}/privacy-policy/`,
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full bg-[#f7f7f7] text-slate-900">
      <BreadcrumbSchema items={[{ name: "Privacy Policy", url: "/privacy-policy/" }]} />
      <PageHero
        eyebrow="LEGAL GOVERNANCE"
        title="Privacy Policy"
        subtitle="Our commitment to safeguarding corporate communications, inquiry records, and data privacy."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="py-16 sm:py-24 bg-[#f7f7f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-black/[0.06] shadow-sm space-y-8 text-slate-700 leading-relaxed font-normal">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                1. Information Collection &amp; Scope
              </h2>
              <p>
                {COMPANY_INFO.name} (&ldquo;Blue Sphere&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects the confidentiality of personal and corporate information entrusted to us. This Privacy Policy describes how we handle information submitted through our official website and related operational communications.
              </p>
              <p>
                We collect information that you voluntarily transmit through our contact forms, direct email correspondence, telephone inquiries, or consultation requests. This may include your name, business email, contact phone number, company name, and details regarding your facility management scope.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                2. Purpose of Processing
              </h2>
              <p>
                Information collected is utilized exclusively to evaluate facility requirements, prepare operational and advisory proposals, communicate with authorized corporate liaisons, and administer customer relationships.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                3. Disclosure &amp; Data Security
              </h2>
              <p>
                Blue Sphere does not sell, lease, or commercially distribute client or visitor data to third parties. We apply appropriate physical, organizational, and technological safeguards to prevent unauthorized access or disclosure.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                4. Jurisdiction &amp; Inquiries
              </h2>
              <p>
                This policy is governed by the laws and regulations of the Emirate of Dubai and the United Arab Emirates. For data inquiries, contact us at:{" "}
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-blue-600 font-semibold hover:underline">
                  {COMPANY_INFO.contact.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
