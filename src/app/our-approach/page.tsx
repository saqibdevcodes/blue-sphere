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

interface StepColorConfig {
  cardBg: string;
  iconContainer: string;
  stepNumber: string;
  titleHover: string;
  divider: string;
  deliverableText: string;
}

const STEP_THEMES: Record<string, StepColorConfig> = {
  "01": {
    cardBg:
      "bg-gradient-to-br from-blue-50/90 via-blue-50/60 to-blue-100/30 border-blue-200/80 hover:border-blue-400/80 hover:from-blue-100/80 hover:to-blue-50/50 hover:shadow-xl hover:shadow-blue-500/10",
    iconContainer:
      "bg-white text-blue-600 border-blue-200/80 shadow-xs group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/25",
    stepNumber: "text-blue-300 group-hover:text-blue-600",
    titleHover: "group-hover:text-blue-600",
    divider: "border-blue-200/60",
    deliverableText: "text-blue-600",
  },
  "02": {
    cardBg:
      "bg-gradient-to-br from-indigo-50/90 via-indigo-50/60 to-indigo-100/30 border-indigo-200/80 hover:border-indigo-400/80 hover:from-indigo-100/80 hover:to-indigo-50/50 hover:shadow-xl hover:shadow-indigo-500/10",
    iconContainer:
      "bg-white text-indigo-600 border-indigo-200/80 shadow-xs group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 group-hover:shadow-lg group-hover:shadow-indigo-500/25",
    stepNumber: "text-indigo-300 group-hover:text-indigo-600",
    titleHover: "group-hover:text-indigo-600",
    divider: "border-indigo-200/60",
    deliverableText: "text-indigo-600",
  },
  "03": {
    cardBg:
      "bg-gradient-to-br from-sky-50/90 via-sky-50/60 to-sky-100/30 border-sky-200/80 hover:border-sky-400/80 hover:from-sky-100/80 hover:to-sky-50/50 hover:shadow-xl hover:shadow-sky-500/10",
    iconContainer:
      "bg-white text-sky-600 border-sky-200/80 shadow-xs group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 group-hover:shadow-lg group-hover:shadow-sky-500/25",
    stepNumber: "text-sky-300 group-hover:text-sky-600",
    titleHover: "group-hover:text-sky-600",
    divider: "border-sky-200/60",
    deliverableText: "text-sky-600",
  },
  "04": {
    cardBg:
      "bg-gradient-to-br from-amber-50/90 via-amber-50/60 to-amber-100/30 border-amber-200/80 hover:border-amber-400/80 hover:from-amber-100/80 hover:to-amber-50/50 hover:shadow-xl hover:shadow-amber-500/10",
    iconContainer:
      "bg-white text-amber-600 border-amber-200/80 shadow-xs group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 group-hover:shadow-lg group-hover:shadow-amber-500/25",
    stepNumber: "text-amber-300 group-hover:text-amber-600",
    titleHover: "group-hover:text-amber-600",
    divider: "border-amber-200/60",
    deliverableText: "text-amber-600",
  },
  "05": {
    cardBg:
      "bg-gradient-to-br from-violet-50/90 via-violet-50/60 to-violet-100/30 border-violet-200/80 hover:border-violet-400/80 hover:from-violet-100/80 hover:to-violet-50/50 hover:shadow-xl hover:shadow-violet-500/10",
    iconContainer:
      "bg-white text-violet-600 border-violet-200/80 shadow-xs group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 group-hover:shadow-lg group-hover:shadow-violet-500/25",
    stepNumber: "text-violet-300 group-hover:text-violet-600",
    titleHover: "group-hover:text-violet-600",
    divider: "border-violet-200/60",
    deliverableText: "text-violet-600",
  },
  "06": {
    cardBg:
      "bg-gradient-to-br from-emerald-50/90 via-emerald-50/60 to-emerald-100/30 border-emerald-200/80 hover:border-emerald-400/80 hover:from-emerald-100/80 hover:to-emerald-50/50 hover:shadow-xl hover:shadow-emerald-500/10",
    iconContainer:
      "bg-white text-emerald-600 border-emerald-200/80 shadow-xs group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 group-hover:shadow-lg group-hover:shadow-emerald-500/25",
    stepNumber: "text-emerald-300 group-hover:text-emerald-600",
    titleHover: "group-hover:text-emerald-600",
    divider: "border-emerald-200/60",
    deliverableText: "text-emerald-600",
  },
};

const DEFAULT_STEP_THEME: StepColorConfig = {
  cardBg:
    "bg-gradient-to-br from-blue-50/90 via-blue-50/60 to-blue-100/30 border-blue-200/80 hover:border-blue-400/80 hover:from-blue-100/80 hover:to-blue-50/50 hover:shadow-xl hover:shadow-blue-500/10",
  iconContainer:
    "bg-white text-blue-600 border-blue-200/80 shadow-xs group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/25",
  stepNumber: "text-blue-300 group-hover:text-blue-600",
  titleHover: "group-hover:text-blue-600",
  divider: "border-blue-200/60",
  deliverableText: "text-blue-600",
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
              const theme = STEP_THEMES[step.step] || DEFAULT_STEP_THEME;

              return (
                <div
                  key={step.step}
                  className={`group p-8 sm:p-10 rounded-3xl border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${theme.cardBg}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-3xl font-bold font-mono transition-colors ${theme.stepNumber}`}>
                        {step.step}
                      </span>
                      <div
                        className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${theme.iconContainer}`}
                      >
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    <h3 className={`text-xl sm:text-2xl font-bold text-slate-950 transition-colors ${theme.titleHover}`}>
                      {step.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      {step.detailDesc}
                    </p>
                  </div>

                  <div className={`pt-6 mt-6 border-t flex items-center gap-2 text-xs font-semibold ${theme.divider} ${theme.deliverableText}`}>
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
