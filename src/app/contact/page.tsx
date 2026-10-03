import React from "react";
import { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  ExternalLink,
  ShieldCheck,
  Clock
} from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { COMPANY_INFO } from "@/data/company";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Contact Blue Sphere Facilities Management FZCO | Dubai",
  description:
    "Contact Blue Sphere Facilities Management – FZCO in Dubai Silicon Oasis. Telephone: +971 50 743 7972. Email: info@bluespherefzco.com. Request a facility consultation or advisory review.",
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    title: "Contact Blue Sphere Facilities Management FZCO | Dubai",
    description:
      "Contact Blue Sphere Facilities Management – FZCO in Dubai Silicon Oasis. Telephone: +971 50 743 7972. Email: info@bluespherefzco.com.",
    url: `${COMPANY_INFO.contact.websiteUrl}/contact/`,
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Contact Blue Sphere Dubai Head Office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Blue Sphere Facilities Management FZCO | Dubai",
    description:
      "Contact Blue Sphere Facilities Management – FZCO in Dubai Silicon Oasis. Call +971 50 743 7972.",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-[#f7f7f7] text-slate-900">
      <BreadcrumbSchema items={[{ name: "Contact Us", url: "/contact/" }]} />
      {/* Page Hero */}
      <PageHero
        eyebrow="CONTACT US"
        title="Let's Discuss Your Facility Requirements"
        subtitle="Tell us about your property parameters, operational priorities, or management challenges, and our directors will get in touch."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* Main Contact Section */}
      <section className="py-16 sm:py-24 bg-[#f7f7f7] border-b border-black/[0.06]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                label="DIRECT CHANNELS"
                heading="Corporate Offices &amp; Operational Contacts"
                description="We welcome inquiries from property owners, asset managers, corporate occupiers, and facility operators throughout Dubai and the UAE."
              />

              {/* Direct Cards */}
              <div className="space-y-4 pt-2">
                {/* Physical Location Card */}
                <div className="p-7 rounded-3xl bg-white border border-black/[0.06] shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-black/[0.04] text-slate-900 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Corporate Headquarters
                    </h3>
                    <p className="text-base font-bold text-slate-950">
                      {COMPANY_INFO.address.building}, {COMPANY_INFO.address.hub}
                    </p>
                    <p className="text-sm text-slate-600 font-normal">
                      {COMPANY_INFO.address.area}, {COMPANY_INFO.address.emirate}, {COMPANY_INFO.address.country}
                    </p>
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Registered Free Zone Company (FZCO)</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Telephone Card */}
                <div className="p-7 rounded-3xl bg-white border border-black/[0.06] shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-black/[0.04] text-slate-900 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Direct Telephone Line
                    </h3>
                    <p className="text-base font-bold text-slate-950">
                      <a
                        href={`tel:${COMPANY_INFO.contact.telephoneRaw}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {COMPANY_INFO.contact.telephone}
                      </a>
                    </p>
                    <p className="text-xs text-slate-500 font-normal">
                      Sunday to Thursday: 8:00 AM – 6:00 PM (GST)
                    </p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="p-7 rounded-3xl bg-white border border-black/[0.06] shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-black/[0.04] text-slate-900 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Corporate Correspondence
                    </h3>
                    <p className="text-base font-bold text-slate-950">
                      <a
                        href={`mailto:${COMPANY_INFO.contact.email}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {COMPANY_INFO.contact.email}
                      </a>
                    </p>
                    <p className="text-xs text-slate-500 font-normal">
                      Responses provided within one business day
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
