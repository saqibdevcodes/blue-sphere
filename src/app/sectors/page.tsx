import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SectorCard } from "@/components/cards/SectorCard";
import { CTASection } from "@/components/sections/CTASection";
import { SECTORS_DATA } from "@/data/sectors";
import { COMPANY_INFO } from "@/data/company";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Target Sectors & Environments | Blue Sphere Facilities Management",
  description:
    "Tailored facility management and operational support across commercial office towers, industrial logistics parks, healthcare centers, leisure venues, and public spaces in Dubai, UAE.",
  alternates: {
    canonical: "/sectors/",
  },
  openGraph: {
    title: "Target Sectors & Environments | Blue Sphere Dubai",
    description:
      "Tailored facility management and operational support across commercial, industrial, healthcare, leisure, and public sectors in Dubai, UAE.",
    url: `${COMPANY_INFO.contact.websiteUrl}/sectors/`,
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Facility Management Sectors Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Target Sectors & Environments | Blue Sphere Dubai",
    description:
      "Specialized facility management across commercial, healthcare, industrial, and public spaces in the UAE.",
    images: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
  },
};

export default function SectorsPage() {
  return (
    <div className="flex flex-col w-full bg-[#f7f7f7] text-slate-900">
      <BreadcrumbSchema items={[{ name: "Sectors", url: "/sectors/" }]} />
      {/* Page Hero */}
      <PageHero
        eyebrow="TARGET SECTORS"
        title="Facility Management Across Diverse Environments"
        subtitle="Every environment has different operational priorities. Blue Sphere's approach begins by understanding the people, activities, risks, operational requirements, and objectives associated with each facility."
        breadcrumbs={[{ label: "Sectors" }]}
      />

      {/* Overview Intro */}
      <section className="py-16 sm:py-20 bg-white border-b border-black/[0.06]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <SectionHeading
              label="SPECIALIZED SECTOR ALIGNMENT"
              heading="Operational Models Formulated for Specific Realities"
              description="From prestigious corporate towers in central business districts to high-throughput logistics depots and sensitive healthcare compounds, we calibrate management frameworks to the exact regulatory and physical demands of each asset class."
            />
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-16 sm:py-24 bg-[#f7f7f7] border-b border-black/[0.06]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTORS_DATA.map((sector) => (
              <SectorCard key={sector.id} sector={sector} />
            ))}
          </div>
        </div>
      </section>

      {/* Sector Standards Callout */}
      <section className="py-16 bg-white border-b border-black/[0.06]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-black text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Sector Compliance Rigor</span>
              </div>
              <h3 className="text-2xl font-bold">
                Does your facility require specialized regulatory workflows?
              </h3>
              <p className="text-sm text-slate-300 font-normal">
                Our operations team conducts comprehensive compliance and risk reviews tailored to the United Arab Emirates regulatory codes.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-white hover:bg-slate-100 transition-all shrink-0 shadow-md active:scale-95"
            >
              <span>Speak with a Sector Director</span>
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
