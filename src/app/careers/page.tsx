import React from "react";
import { Metadata } from "next";
import {
  ShieldCheck,
  Briefcase,
  Mail,
  ArrowRight
} from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { COMPANY_INFO } from "@/data/company";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Careers & Talent Opportunities | Blue Sphere Facilities Management",
  description:
    "Build your career with Blue Sphere Facilities Management – FZCO in Dubai. Join professionals dedicated to operational excellence, integrity, safety, and facility performance.",
  alternates: {
    canonical: "/careers/",
  },
  openGraph: {
    title: "Careers & Talent Opportunities | Blue Sphere Dubai",
    description:
      "Build your career with Blue Sphere Facilities Management – FZCO in Dubai. Join our team dedicated to facility performance and governance.",
    url: `${COMPANY_INFO.contact.websiteUrl}/careers/`,
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Careers at Blue Sphere Facilities Management Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers & Talent Opportunities | Blue Sphere Dubai",
    description:
      "Join Blue Sphere Facilities Management – FZCO in Dubai.",
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
  },
};

export default function CareersPage() {
  return (
    <div className="flex flex-col w-full bg-[#f7f7f7] text-slate-900">
      <BreadcrumbSchema items={[{ name: "Careers", url: "/careers/" }]} />
      {/* Page Hero */}
      <PageHero
        eyebrow="CAREERS AT BLUE SPHERE"
        title="Build Your Career With Blue Sphere"
        subtitle="We welcome professionals who share our commitment to service excellence, integrity, safety, and disciplined facility governance."
        breadcrumbs={[{ label: "Careers" }]}
      />

      {/* Culture & Talent Philosophy */}
      <section className="py-16 sm:py-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                label="JOIN OUR TEAM"
                heading="Operational Excellence Begins With Dedicated People"
                description="At Blue Sphere, we believe that facilities are only as resilient as the governance and teamwork behind them. We cultivate a workplace founded on mutual respect, ongoing professional training, safety consciousness, and uncompromising integrity."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-6 rounded-3xl bg-[#f7f7f7] border border-black/[0.06] space-y-2">
                  <div className="w-10 h-10 rounded-2xl bg-black/[0.04] text-slate-900 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-base font-bold text-slate-950">Safety Culture First</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Prioritizing occupational safety and well-being for our teams and the occupants we serve.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-[#f7f7f7] border border-black/[0.06] space-y-2">
                  <div className="w-10 h-10 rounded-2xl bg-black/[0.04] text-slate-900 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-base font-bold text-slate-950">Professional Development</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Continuous learning, compliance certifications, and structured career advancement pathways.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#f7f7f7] border border-black/[0.06] shadow-sm space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-950">
                  Submit Your CV / Profile
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Interested in contributing to our facilities advisory and operational divisions in Dubai? Send your resume and portfolio directly to our recruitment team.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}?subject=Career%20Application%20-%20Blue%20Sphere`}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-black hover:bg-slate-800 rounded-full shadow-md transition-all active:scale-95"
                >
                  <span>Submit Application</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
