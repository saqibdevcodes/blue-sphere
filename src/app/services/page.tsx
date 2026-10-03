import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { SERVICES_DATA } from "@/data/services";
import { COMPANY_INFO } from "@/data/company";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Facility Management & Advisory Services | Blue Sphere Dubai",
  description:
    "Comprehensive facility management solutions in Dubai: integrated FM, strategic advisory, operational oversight, safety governance, resource optimization, and asset lifecycle preservation.",
  alternates: {
    canonical: "/services/",
  },
  openGraph: {
    title: "Facility Management & Advisory Services | Blue Sphere Dubai",
    description:
      "Comprehensive facility management solutions in Dubai: integrated FM, strategic advisory, operational oversight, safety governance, and asset lifecycle preservation.",
    url: `${COMPANY_INFO.contact.websiteUrl}/services/`,
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Blue Sphere Facility Management Services Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Facility Management & Advisory Services | Blue Sphere Dubai",
    description:
      "Supporting efficient, safe, compliant, and high-performing facilities across Dubai and the UAE.",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-[#f7f7f7] text-slate-900">
      <BreadcrumbSchema items={[{ name: "Services", url: "/services/" }]} />
      {/* Page Hero */}
      <PageHero
        eyebrow="OUR SERVICES"
        title="Facility Management & Advisory Services"
        subtitle="Supporting efficient, safe, compliant, and high-performing facilities through coordinated management and operational support."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Service Introduction */}
      <section className="py-16 sm:py-20 bg-white border-b border-black/[0.06]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <SectionHeading
              label="OUR SERVICE PHILOSOPHY"
              heading="Structured Oversight Focused on Facility Longevity"
              description="Modern facilities represent substantial capital assets and operational ecosystems. Blue Sphere delivers integrated management frameworks and professional advisory designed to harmonize operations, ensure rigorous safety, and protect long-term asset value."
            />
            <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-700 pt-2">
              <span className="flex items-center gap-2 bg-[#f7f7f7] border border-black/[0.06] px-4 py-2 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Single-Point Governance</span>
              </span>
              <span className="flex items-center gap-2 bg-[#f7f7f7] border border-black/[0.06] px-4 py-2 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Strategic Advisory &amp; Auditing</span>
              </span>
              <span className="flex items-center gap-2 bg-[#f7f7f7] border border-black/[0.06] px-4 py-2 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Continuous Operational Refinement</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Services Grid */}
      <section className="py-16 sm:py-24 bg-[#f7f7f7] border-b border-black/[0.06]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tailored Approach Banner */}
      <section className="py-16 bg-white border-b border-black/[0.06]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#f7f7f7] border border-black/[0.06] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 bg-white px-3 py-1 rounded-full border border-black/5">
                Custom Scope
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950">
                Need a Tailored Facilities Blueprint?
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Every property has distinct equipment lifecycles, occupancy loads, and compliance requirements. Blue Sphere prepares tailored operational frameworks matched to your exact organizational priorities.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-black hover:bg-slate-800 transition-all shadow-md shrink-0 active:scale-95"
            >
              <span>Schedule Service Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
