import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export function CTASection({
  title = "Ready to elevate your facility operations with proven Dubai expertise?",
  subtitle = "Whether you require unified facility-management oversight or strategic advisory, Blue Sphere is ready to assess your requirements.",
}: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#f7f7f7]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-black text-white overflow-hidden p-8 sm:p-14 lg:p-20 shadow-2xl border border-black/10">
          {/* Subtle architectural background texture */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center opacity-20"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70" />
            <div className="absolute inset-0 bg-subtle-grid opacity-10" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase bg-white/10 text-white/90 border border-white/15 backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Dubai Silicon Oasis • UAE Licensed FZCO</span>
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              {subtitle}
            </p>

            {/* Dual Pill Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-white hover:bg-slate-100 rounded-full shadow-lg transition-all duration-200 active:scale-95"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${COMPANY_INFO.contact.telephoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full backdrop-blur-sm transition-all"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>{COMPANY_INFO.contact.telephone}</span>
              </a>
            </div>

            {/* Micro Details */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 border-t border-white/10 mt-8">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.email}
                </a>
              </span>
              <span>•</span>
              <span>Dubai Digital Park, Dubai Silicon Oasis, UAE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
