import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Building2,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Compass,
  Eye,
  Award
} from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ValueCard } from "@/components/cards/ValueCard";
import { CTASection } from "@/components/sections/CTASection";
import { COMPANY_INFO } from "@/data/company";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About Us | Blue Sphere Facilities Management FZCO",
  description:
    "Learn about BLUE SPHERE FACILITIES MANAGEMENT – FZCO, a premier Dubai-based facilities management and advisory firm committed to operational excellence, safety, and long-term asset value.",
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    title: "About Us | Blue Sphere Facilities Management FZCO",
    description:
      "Dubai-based facilities management and advisory company committed to operational excellence, safety, compliance, and long-term facility performance.",
    url: `${COMPANY_INFO.contact.websiteUrl}/about/`,
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "About Blue Sphere Facilities Management Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Blue Sphere Facilities Management FZCO",
    description:
      "Dubai-based facilities management and advisory company committed to operational excellence, safety, compliance, and long-term facility performance.",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-[#f7f7f7] text-slate-900">
      <BreadcrumbSchema items={[{ name: "About Us", url: "/about/" }]} />
      {/* Page Hero */}
      <PageHero
        eyebrow="ABOUT US"
        title="About Blue Sphere"
        subtitle="Professional facility management focused on operational excellence, safety, compliance, efficiency, and long-term asset value."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Company Overview Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                label="COMPANY OVERVIEW"
                heading="Establishing New Benchmarks in UAE Facility Operations"
              />

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                <p>
                  <strong className="text-slate-950 font-bold">
                    {COMPANY_INFO.name}
                  </strong>{" "}
                  is a Dubai-based facilities management and strategic advisory company focused on delivering disciplined oversight, coordinated operations, and proactive lifecycle protection.
                </p>
                <p>
                  From commercial office towers and logistics compounds to high-reliability healthcare facilities, athletic clubs, and community parks, Blue Sphere is dedicated to creating safe, compliant, and cost-effective environments.
                </p>
                <p>
                  Our model bridges daily operational maintenance with executive advisory—giving asset owners single-point accountability and actionable data intelligence.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 text-sm font-semibold text-slate-900">
                <div className="flex items-center gap-2 bg-[#f7f7f7] border border-black/[0.06] px-5 py-3 rounded-full">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Licensed Free Zone Company (FZCO)</span>
                </div>
                <div className="flex items-center gap-2 bg-[#f7f7f7] border border-black/[0.06] px-5 py-3 rounded-full">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>Dubai Silicon Oasis Headquarters</span>
                </div>
              </div>
            </div>

            {/* Right Visual / Corporate Fact Sheet */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative h-[340px] rounded-3xl overflow-hidden shadow-xl border border-black/[0.08]">
                <Image
                  src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern Facility in Dubai Silicon Oasis"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="p-7 rounded-3xl bg-[#f7f7f7] border border-black/[0.06] space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Headquarters &amp; Jurisdiction
                </h3>
                <p className="text-base font-bold text-slate-950">
                  {COMPANY_INFO.address.fullFormatted}
                </p>
                <div className="pt-2 text-xs text-slate-600 space-y-1.5 font-normal">
                  <p>
                    <span className="font-semibold text-slate-800">Entity:</span> {COMPANY_INFO.legalType}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">Telephone:</span>{" "}
                    <a href={`tel:${COMPANY_INFO.contact.telephoneRaw}`} className="text-blue-600 hover:underline">
                      {COMPANY_INFO.contact.telephone}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">Inquiries:</span>{" "}
                    <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-blue-600 hover:underline">
                      {COMPANY_INFO.contact.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Mission & Vision Section */}
      <section className="py-16 sm:py-24 bg-[#f7f7f7] border-b border-black/[0.06]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="OUR FOUNDATION"
            heading="Guiding Purpose &amp; Strategic Vision"
            description="Our corporate charter guides our commitment to operational integrity, client value, and facility longevity across the United Arab Emirates."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Official Mission Card */}
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-black/[0.06] shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-black/[0.04] text-slate-900 flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950">Mission Statement</h3>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed italic border-l-2 border-black pl-4 py-1">
                  &ldquo;{COMPANY_INFO.mission}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Committed to Operational Excellence &amp; Compliance</span>
              </div>
            </div>

            {/* Official Vision Card */}
            <div className="p-8 sm:p-12 rounded-3xl bg-black text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Vision Statement</h3>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed italic border-l-2 border-blue-400 pl-4 py-1">
                  &ldquo;{COMPANY_INFO.vision}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Excellence, Innovation &amp; Integrity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="HOW WE OPERATE"
            heading="Our Core Operating Values"
            description="Our corporate culture and service standards are founded upon principles that ensure accountability, transparency, and operational rigor."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {COMPANY_INFO.coreValues.map((value, idx) => (
              <ValueCard
                key={value.id}
                id={value.id}
                title={value.title}
                description={value.description}
                index={idx}
              />
            ))}

            {/* Strategic Summary Box to complete grid balance */}
            <div className="p-8 bg-black text-white rounded-3xl flex flex-col justify-between shadow-lg">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Corporate Governance
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  These core values guide our advisory recommendations and operational support, ensuring facilities operate with safety, efficiency, and long-term asset value.
                </p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-white uppercase tracking-wider"
                >
                  <span>Connect with Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
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
