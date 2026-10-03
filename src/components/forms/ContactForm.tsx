"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  sector: string;
  message: string;
  consent: boolean;
  website_honeypot?: string;
}

const INITIAL_DATA: ContactFormData = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  service: "General Enquiry",
  sector: "Commercial",
  message: "",
  consent: false,
  website_honeypot: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      errs.email = "Please enter your business email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      errs.message = "Please describe your facility requirement or inquiry.";
    } else if (formData.message.trim().length < 15) {
      errs.message = "Please provide at least 15 characters of detail.";
    }

    if (!formData.consent) {
      errs.consent = "You must confirm consent to process this operational inquiry.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    // Honeypot check
    if (formData.website_honeypot) {
      setStatus("success");
      setServerMessage("Your inquiry has been successfully received.");
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setServerMessage(
        "Thank you for contacting Blue Sphere Facilities Management. A member of our operations management team will contact you within 1 business day."
      );
      setFormData(INITIAL_DATA);
    } catch {
      setStatus("error");
      setServerMessage("Unable to send inquiry at this time. Please call us directly or try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-black/[0.06] shadow-sm p-7 sm:p-10 lg:p-12">
      <div className="mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-2">
          Request a Consultation or Operational Advisory
        </h3>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          Complete the form below to outline your facility parameters, operational questions, or management requirements.
        </p>
      </div>

      {status === "success" ? (
        <div className="rounded-2xl bg-blue-50/50 border border-blue-200/80 p-8 text-center space-y-4">
          <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-slate-950">Inquiry Confirmed</h4>
          <p className="text-sm text-slate-700 max-w-lg mx-auto leading-relaxed">
            {serverMessage}
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold text-white bg-black rounded-full hover:bg-slate-800 transition-colors shadow-sm"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              id="website_honeypot"
              name="website_honeypot"
              value={formData.website_honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {status === "error" && (
            <div className="rounded-2xl bg-red-50 border border-red-200 p-4 flex items-start gap-3 text-red-800 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
              <span>{serverMessage}</span>
            </div>
          )}

          {/* Full Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Tariq Al Mansoori"
                className={`w-full px-4 py-3.5 text-sm rounded-2xl border bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                  errors.fullName ? "border-red-400 bg-red-50/20" : "border-black/[0.08]"
                }`}
              />
              {errors.fullName && (
                <p className="mt-1.5 text-xs text-red-600">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                Company / Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Al Wasl Holdings"
                className="w-full px-4 py-3.5 text-sm rounded-2xl border border-black/[0.08] bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black transition-all"
              />
            </div>
          </div>

          {/* Work Email & Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                Work Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.ae"
                className={`w-full px-4 py-3.5 text-sm rounded-2xl border bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                  errors.email ? "border-red-400 bg-red-50/20" : "border-black/[0.08]"
                }`}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+971 50 000 0000"
                className="w-full px-4 py-3.5 text-sm rounded-2xl border border-black/[0.08] bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black transition-all"
              />
            </div>
          </div>

          {/* Service Required & Sector Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                Service Required
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3.5 text-sm rounded-2xl border border-black/[0.08] bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black transition-all text-slate-900"
              >
                <option value="Integrated Facility Management">Integrated Facility Management</option>
                <option value="FM Advisory & Consultancy">FM Advisory & Consultancy</option>
                <option value="Operational Support">Operational Support</option>
                <option value="Safety & Compliance Support">Safety & Compliance Support</option>
                <option value="Facility Performance & Efficiency">Facility Performance & Efficiency</option>
                <option value="Sustainability & Value Enhancement">Sustainability & Value Enhancement</option>
                <option value="General Enquiry">General Enquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="sector" className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                Sector
              </label>
              <select
                id="sector"
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                className="w-full px-4 py-3.5 text-sm rounded-2xl border border-black/[0.08] bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black transition-all text-slate-900"
              >
                <option value="Commercial">Commercial</option>
                <option value="Clubs & Leisure">Clubs & Leisure</option>
                <option value="Parks & Public Spaces">Parks & Public Spaces</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Industrial">Industrial</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
              Message / Facility Scope <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Please provide details regarding your property type, facility challenges, approximate square footage, or required operational support..."
              className={`w-full px-4 py-3.5 text-sm rounded-2xl border bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                errors.message ? "border-red-400 bg-red-50/20" : "border-black/[0.08]"
              }`}
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>
            )}
          </div>

          {/* Consent Checkbox */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded text-black focus:ring-black border-slate-300"
              />
              <span className="text-xs text-slate-600 leading-relaxed font-normal">
                I agree to allow BLUE SPHERE FACILITIES MANAGEMENT – FZCO to process these details in accordance with the corporate{" "}
                <a href="/privacy-policy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </span>
            </label>
            {errors.consent && (
              <p className="mt-1 text-xs text-red-600">{errors.consent}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-black hover:bg-slate-800 disabled:bg-slate-400 rounded-full shadow-md transition-all duration-200 active:scale-95"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitting Enquiry...</span>
                </>
              ) : (
                <>
                  <span>Send Enquiry</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
