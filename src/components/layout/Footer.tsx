import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { FOOTER_LINKS } from "@/data/navigation";
import { COMPANY_INFO } from "@/data/company";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-900 border-t border-black/[0.06] pt-16 sm:pt-20 pb-12">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-100">
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" imageClassName="h-10 w-auto" />
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm font-normal">
              Professional facility management, advisory, and operational governance focused on better-performing facilities across Dubai and the UAE.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Registered Free Zone Company (FZCO) • Dubai, UAE</span>
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-blue-600 transition-colors group"
              >
                <span>Request Facility Consultation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Company (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Headquarters
            </h3>
            <div className="space-y-3 text-sm text-slate-600 font-normal">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Dubai Digital Park, Building A4, Dubai Silicon Oasis, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.telephoneRaw}`} className="font-semibold text-slate-900 hover:text-blue-600">
                  {COMPANY_INFO.contact.telephone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-slate-700 hover:text-blue-600">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} BLUE SPHERE FACILITIES MANAGEMENT – FZCO. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-black transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
