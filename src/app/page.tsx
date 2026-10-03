"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  X,
  ChevronDown,
  ShieldCheck,
  Building2,
  Activity,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Sparkles,
  Zap,
  CheckCircle2
} from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectorCard } from "@/components/cards/SectorCard";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTASection } from "@/components/sections/CTASection";
import { SERVICES_DATA } from "@/data/services";
import { SECTORS_DATA } from "@/data/sectors";
import { COMPANY_INFO } from "@/data/company";
import { HOME_FAQS } from "@/data/faqs";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqs = HOME_FAQS;

  return (
    <div className="flex flex-col w-full bg-[#f7f7f7] text-slate-900">
      {/* 1. HERO SECTION (Agencee Framer Style) */}
      <section className="pt-8 sm:pt-12 pb-16 sm:pb-24">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            {/* Pill Eyebrow */}
            <div className="inline-flex">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-slate-800 bg-black/[0.04] border border-black/[0.06]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Dubai Silicon Oasis • Licensed FZCO</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 leading-[1.06]">
              Professional Facilities.{" "}
              <span className="text-blue-600">Smarter Operations.</span>{" "}
              Lasting Value.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Next-generation facility management, strategic advisory, and operational governance built for commercial, healthcare, and leisure environments across Dubai & the UAE.
            </p>

            {/* Dual Pill CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-black hover:bg-slate-800 rounded-full shadow-lg shadow-black/10 transition-all duration-200 active:scale-95"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 border border-black/[0.08] rounded-full shadow-sm transition-colors"
              >
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Stat Badges Strip */}
            <div className="pt-6 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-600 font-medium bg-white/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-black/[0.05] shadow-sm">
              <span className="flex items-center gap-1.5 font-bold text-slate-900">
                <span className="text-blue-600">50+</span> Managed Environments
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 font-bold text-slate-900">
                <span className="text-blue-600">98%</span> Client Retention
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 font-bold text-slate-900">
                <span className="text-blue-600">12+</span> Years Leadership
              </span>
            </div>
          </div>

          {/* Hero Visual Showcase Card (Rounded-3xl with Floating Stat Badges) */}
          <div className="mt-12 sm:mt-16 relative rounded-3xl overflow-hidden shadow-2xl border border-black/[0.08] aspect-[16/9] sm:aspect-[21/9]">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85"
              alt="Dubai Commercial Facility Operations"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Floating Glass Chips inside Showcase */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-black/5 shadow-xl max-w-sm">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Licensed Dubai FZCO</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-900">
                  Full-scope operational accountability across Dubai Silicon Oasis & UAE properties.
                </p>
              </div>

              <div className="bg-black/85 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10 text-white shadow-xl flex items-center gap-4">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">
                  24/7
                </div>
                <div className="text-xs leading-snug">
                  <div className="font-bold">Continuous Oversight</div>
                  <div className="text-slate-400">Emergency & Planned Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION ("Our services at a glance" - Bento Grid) */}
      <section className="py-16 sm:py-24 border-t border-black/[0.06] bg-white">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="SERVICES"
            heading="Our services at a glance"
            description="Make your day-to-day operations smoother, your assets safer, and your facility performance stronger."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                featured={index === 0}
              />
            ))}
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-[#f7f7f7] border border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-slate-950">
                Need customized services built specifically for your property?
              </h3>
              <p className="text-sm text-slate-600">
                Our directors analyze your facility blueprints and create a tailored management proposal.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-black hover:bg-slate-800 transition-all shrink-0 shadow-sm"
            >
              <span>Reach Out To Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. PROCESS SECTION (Agencee 01-06 Framework) */}
      <section className="py-16 sm:py-24 border-t border-black/[0.06] bg-[#f7f7f7]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="PROCESS"
            heading="A structured framework for lasting facility reliability"
            description="A simple, transparent methodology designed to assess, coordinate, govern, and enhance every dimension of your facility."
          />

          <div className="mt-12">
            <ProcessTimeline showDetailedLink={true} />
          </div>
        </div>
      </section>

      {/* 4. BENEFITS SECTION (Asymmetric Bento Grid) */}
      <section className="py-16 sm:py-24 border-t border-black/[0.06] bg-white">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="BENEFITS"
            heading="Benefits that drive operational excellence"
            description="Explore how our strategic management model eliminates operational friction and protects asset valuation."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {/* Bento Card 1: Proven Expertise (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#f7f7f7] border border-black/[0.06] flex flex-col justify-between hover:border-black/20 transition-all">
              <div className="space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 bg-white px-3 py-1 rounded-full border border-black/5">
                  Strategic Foundation
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-950">
                  Proven UAE Expertise & Licensing
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Operate with complete peace of mind. As a registered Dubai FZCO, Blue Sphere provides certified operational governance conforming with Dubai Municipality, Civil Defense, and UAE safety regulations.
                </p>
              </div>

              <div className="pt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-black/5">
                  <div className="text-2xl font-bold text-slate-950">100%</div>
                  <div className="text-xs text-slate-500 mt-1">Regulatory Compliance</div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-black/5">
                  <div className="text-2xl font-bold text-slate-950">Zero</div>
                  <div className="text-xs text-slate-500 mt-1">Operational Blindspots</div>
                </div>
              </div>
            </div>

            {/* Bento Card 2: Measurable Impact (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-black text-white flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/70 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                  Accountability
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Measurable SLA Impact
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We track performance metrics, audit contractor delivery, and ensure disciplined asset preservation across every operational discipline.
                </p>
              </div>

              <div className="pt-8">
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-300 font-semibold">
                    <span>Vendor Oversight Score</span>
                    <span className="text-emerald-400 font-bold">99.4%</span>
                  </div>
                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[99.4%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Card 3: Single Point of Contact (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#f7f7f7] border border-black/[0.06] flex flex-col justify-between hover:border-black/20 transition-all">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 bg-white px-3 py-1 rounded-full border border-black/5">
                  Efficiency
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                  Single Point of Accountability
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  No more juggling ten different service contractors. Blue Sphere acts as your unified operational interface, streamlining all communication.
                </p>
              </div>

              <div className="pt-6 flex items-center gap-2 text-xs font-bold text-blue-600">
                <span>Unified Governance Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Bento Card 4: Long-Term Value & ESG (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#f7f7f7] border border-black/[0.06] flex flex-col justify-between hover:border-black/20 transition-all">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 bg-white px-3 py-1 rounded-full border border-black/5">
                  Sustainability
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                  Long-Term Asset Preservation & Sustainability
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Proactive maintenance routines, resource conservation audits, and planned lifecycle strategies that protect and enhance capital property valuations over decades.
                </p>
              </div>

              <div className="pt-6 grid grid-cols-3 gap-3 text-center">
                <div className="bg-white p-3.5 rounded-2xl border border-black/5 text-xs font-bold text-slate-800">
                  Energy Audits
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-black/5 text-xs font-bold text-slate-800">
                  Capex Planning
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-black/5 text-xs font-bold text-slate-800">
                  Lifecycle Tracking
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMPARISON SECTION (Agencee Signature: Blue Sphere vs Traditional FM) */}
      <section className="py-16 sm:py-24 border-t border-black/[0.06] bg-[#f7f7f7]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="COMPARISON"
            heading="See how Blue Sphere outperforms traditional FM"
            description="Clear differences between our integrated governance approach and fragmented, old-fashioned service models."
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Column 1: Blue Sphere (Highlight Card) */}
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-black/10 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-100">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-blue-600">Our Model</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-1">Blue Sphere Approach</h3>
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                  Modern & Accountable
                </span>
              </div>

              <ul className="space-y-4">
                {[
                  "Dedicated operational governance & single point of contact",
                  "Proactive preventative maintenance routines that prevent costly downtime",
                  "Transparent, real-time SLA metrics with digital verification logs",
                  "Tailored solutions built specifically for your sector environment",
                  "Registered Dubai FZCO license with full UAE compliance adherence",
                  "Sustainability & lifecycle asset preservation programs",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Traditional FM */}
            <div className="p-8 sm:p-12 rounded-3xl bg-white/60 border border-black/[0.06] text-slate-600">
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">The Alternative</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-700 mt-1">Traditional FM Vendors</h3>
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-slate-200 text-slate-600">
                  Outdated Model
                </span>
              </div>

              <ul className="space-y-4">
                {[
                  "Fragmented subcontractor handoffs with zero centralized responsibility",
                  "Reactive firefighting only after costly equipment breaks down",
                  "Opaque paper-based reporting with delayed incident notices",
                  "Generic one-size-fits-all contracts that ignore specific property nuances",
                  "Disorganized compliance records risking municipality penalties",
                  "Short-term fixes that degrade overall facility lifespan",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5 opacity-75">
                    <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm sm:text-base text-slate-600 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTORS SECTION (Specialized Environments) */}
      <section className="py-16 sm:py-24 border-t border-black/[0.06] bg-white">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="SECTORS"
            heading="Precision across diverse property environments"
            description="Explore our specialized facility management services tailored to the operational demands of each industry sector."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTORS_DATA.map((sector) => (
              <SectorCard key={sector.id} sector={sector} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION (Agencee Interactive Accordion) */}
      <section className="py-16 sm:py-24 border-t border-black/[0.06] bg-[#f7f7f7]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Header Column */}
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-32">
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700 bg-black/[0.04] border border-black/[0.06] px-3.5 py-1.5 rounded-full">
                FAQS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-normal">
                Everything you need to know about our facilities management models, Dubai regulatory licensing, and operational workflows.
              </p>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-950 hover:text-blue-600 transition-colors"
                >
                  <span>Have more specific questions? Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Accordion Column */}
            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={index}
                    className="p-6 sm:p-7 rounded-3xl bg-white border border-black/[0.06] transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex items-center justify-between text-left gap-4"
                    >
                      <span className="text-base sm:text-lg font-bold text-slate-950">
                        {faq.q}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                        <ChevronDown
                          className={`w-4 h-4 text-slate-600 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                            }`}
                        />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="pt-4 mt-4 border-t border-slate-100 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA CARD (Agencee Showcase Banner) */}
      <CTASection />
    </div>
  );
}
