import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  ShieldCheck,
  ArrowUpRight
} from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { SECTORS_DATA } from "@/data/sectors";
import { SERVICES_DATA } from "@/data/services";
import { COMPANY_INFO } from "@/data/company";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SECTORS_DATA.map((sector) => ({
    slug: sector.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sector = SECTORS_DATA.find((s) => s.slug === slug);

  if (!sector) {
    return {
      title: "Sector Not Found",
    };
  }

  const pageUrl = `${COMPANY_INFO.contact.websiteUrl}/sectors/${sector.slug}/`;

  return {
    title: sector.metaTitle,
    description: sector.metaDescription,
    alternates: {
      canonical: `/sectors/${sector.slug}/`,
    },
    openGraph: {
      title: sector.metaTitle,
      description: sector.metaDescription,
      url: pageUrl,
      type: "website",
      images: [
        {
          url: sector.heroImage,
          width: 1200,
          height: 630,
          alt: sector.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: sector.metaTitle,
      description: sector.metaDescription,
      images: [sector.heroImage],
    },
  };
}

export default async function SectorDetailPage({ params }: Props) {
  const { slug } = await params;
  const sector = SECTORS_DATA.find((s) => s.slug === slug);

  if (!sector) {
    notFound();
  }

  const otherSectors = SECTORS_DATA.filter((s) => s.slug !== slug);

  return (
    <div className="flex flex-col w-full bg-[#f7f7f7] text-slate-900">
      <BreadcrumbSchema
        items={[
          { name: "Sectors", url: "/sectors/" },
          { name: sector.name, url: `/sectors/${sector.slug}/` },
        ]}
      />
      {/* Page Hero */}
      <PageHero
        eyebrow="SECTOR ENVIRONMENT"
        title={sector.name}
        subtitle={sector.tagline}
        breadcrumbs={[
          { label: "Sectors", href: "/sectors" },
          { label: sector.name },
        ]}
      />

      {/* Main Sector Content */}
      <section className="py-16 sm:py-24 bg-[#f7f7f7] border-b border-black/[0.06]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left 8 Columns */}
            <div className="lg:col-span-8 space-y-10">
              {/* Sector Hero Visual */}
              <div className="relative h-[340px] sm:h-[440px] rounded-3xl overflow-hidden shadow-xl border border-black/[0.08]">
                <Image
                  src={sector.heroImage}
                  alt={sector.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Sector Overview */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-4">
                <SectionHeading
                  label="SECTOR OVERVIEW"
                  heading={`Operational Governance for ${sector.name}`}
                />
                <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal pt-2">
                  {sector.overview.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Healthcare Specific Non-Clinical Disclaimer */}
              {sector.id === "healthcare" && (
                <div className="p-6 rounded-3xl bg-blue-50/70 border border-blue-200/80 flex items-start gap-3 text-xs sm:text-sm text-blue-950 font-normal">
                  <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Operational Scope Clarification:</span> Blue Sphere delivers non-clinical facility management, operational coordination, hygiene support workflows, and utility continuity oversight. We do not provide clinical, diagnostic, medical, or statutory healthcare regulatory services.
                  </div>
                </div>
              )}

              {/* Operational Priorities */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                  Operational Priorities &amp; Service Objectives
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {sector.operationalPriorities.map((priority, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm sm:text-base text-slate-800 font-semibold">
                        {priority}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Environmental Considerations & Focus Areas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-7 sm:p-8 rounded-3xl border border-black/[0.06] bg-white shadow-sm space-y-4">
                  <h4 className="text-base font-bold text-slate-950 border-b border-slate-100 pb-3">
                    Environment Considerations
                  </h4>
                  <ul className="space-y-2.5">
                    {sector.keyConsiderations.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 font-normal">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-7 sm:p-8 rounded-3xl border border-black/[0.06] bg-white shadow-sm space-y-4">
                  <h4 className="text-base font-bold text-slate-950 border-b border-slate-100 pb-3">
                    Core Focus Disciplines
                  </h4>
                  <ul className="space-y-2.5">
                    {sector.focusAreas.map((area, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 font-normal">
                        <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Integrated Services for this Sector */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                  Recommended Blue Sphere Services for this Sector
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SERVICES_DATA.slice(0, 4).map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="group p-4 rounded-2xl border border-black/[0.06] hover:border-black/20 hover:bg-slate-50 transition-all flex items-center justify-between"
                    >
                      <div className="space-y-0.5">
                        <div className="text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1 font-normal">
                          {service.shortDescription}
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-black shrink-0 ml-2" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 4 Columns: Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Sector Advisory Consultation Card */}
              <div className="p-8 rounded-3xl bg-black text-white shadow-xl space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                    SECTOR CONSULTATION
                  </span>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    Manage a {sector.name} Facility?
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    Contact Blue Sphere to arrange a confidential review of your facility operations and compliance frameworks.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <a
                    href={`tel:${COMPANY_INFO.contact.telephoneRaw}`}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors text-sm font-semibold"
                  >
                    <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{COMPANY_INFO.contact.telephone}</span>
                  </a>

                  <a
                    href={`mailto:${COMPANY_INFO.contact.email}`}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors text-xs font-semibold break-all"
                  >
                    <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{COMPANY_INFO.contact.email}</span>
                  </a>
                </div>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-slate-100 rounded-full shadow-md transition-all text-center active:scale-95"
                >
                  <span>Request Sector Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Other Sectors Navigation */}
              <div className="p-7 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Other Sectors Served
                </h4>
                <ul className="space-y-1.5">
                  {otherSectors.map((other) => (
                    <li key={other.slug}>
                      <Link
                        href={`/sectors/${other.slug}`}
                        className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-sm font-semibold text-slate-700 hover:text-black transition-all"
                      >
                        <span className="line-clamp-1">{other.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-black group-hover:translate-x-0.5 transition-transform shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
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
