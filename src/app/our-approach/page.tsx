import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  SearchCheck,
  FileText,
  Layers,
  Eye,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { COMPANY_INFO } from "@/data/company";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Our Management Methodology | Blue Sphere Facilities Management",
  description:
    "Explore Blue Sphere's structured 6-step facility management methodology: from discovery and audit to strategic planning, operational governance, and continuous performance enhancement in Dubai.",
  alternates: {
    canonical: "/our-approach/",
  },
  openGraph: {
    title: "Our Management Methodology | Blue Sphere Dubai",
    description:
      "Explore Blue Sphere's structured 6-step facility management methodology: from discovery and audit to strategic planning, operational governance, and continuous performance enhancement in Dubai.",
    url: `${COMPANY_INFO.contact.websiteUrl}/our-approach/`,
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Blue Sphere Facility Management Methodology Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Management Methodology | Blue Sphere Dubai",
    description:
      "Structured 6-step facility management methodology bridging strategy with operational execution.",
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
  },
};

const STEP_ICONS: Record<string, React.ElementType> = {
  "01": Compass,
  "02": SearchCheck,
  "03": FileText,
  "04": Layers,
  "05": Eye,
  "06": RefreshCw,
};

export default function OurApproachPage() {
  return (
    <div className="flex flex-col w-full bg-[#f7f7f7] text-slate-900">
      <BreadcrumbSchema items={[{ name: "Our Approach", url: "/our-approach/" }]} />
      {/* Page Hero */}
      <PageHero
        eyebrow="OUR METHODOLOGY"
        title="Structured Management. Continuous Improvement."
        subtitle="Our systematic 6-stage methodology bridges strategic facility advisory with disciplined day-to-day operational execution."
        breadcrumbs={[{ label: "Our Approach" }]}
      />

      {/* Methodology Introduction */}
      <section className="py-16 sm:py-20 bg-white border-b border-black/[0.06]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <SectionHeading
              label="METHODOLOGY OVERVIEW"
              heading="From Understanding to Sustainable Asset Performance"
              description="Effective facilities management is not a static set of checklists; it is an evolving operational discipline that requires thorough baseline comprehension, empirical risk assessment, synchronized planning, and relentless refinement."
            />
          </div>
        </div>
      </section>

      {/* 6 Step Framework Grid */}
      <section className="py-16 sm:py-24 bg-[#f7f7f7] border-b border-black/[0.06]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.methodologySteps.map((step) => {
              const Icon = STEP_ICONS[step.step] || Compass;

              return (
                <div
                  key={step.step}
                  className="p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.06] shadow-sm hover:shadow-xl hover:border-black/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold font-mono text-slate-300">
                        {step.step}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-black/[0.04] text-slate-900 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                      {step.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {step.detailDesc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-blue-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Operational Deliverable Confirmed</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
