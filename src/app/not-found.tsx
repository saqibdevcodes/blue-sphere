import React from "react";
import Link from "next/link";
import { Home, Building2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 py-20 px-4">
      <div className="max-w-xl w-full text-center space-y-6 p-8 sm:p-12 bg-white rounded-2xl border border-slate-200 shadow-sm">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-blue-50 text-blue-600 border border-blue-100">
          <Building2 className="w-3.5 h-3.5" />
          <span>BLUE SPHERE FACILITIES MANAGEMENT</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-6xl sm:text-7xl font-extrabold text-navy-950 font-mono">
            404
          </h1>
          <h2 className="text-2xl font-bold text-slate-800">
            Page Not Found
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            The requested page could not be located. It may have been moved or the URL might be entered incorrectly.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-blue-600 rounded-lg transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-navy-950 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <span>View Services</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-slate-100 text-xs text-slate-500">
          Need operational assistance? Call us directly at{" "}
          <a href={`tel:${COMPANY_INFO.contact.telephoneRaw}`} className="text-blue-600 font-bold hover:underline">
            {COMPANY_INFO.contact.telephone}
          </a>
        </div>
      </div>
    </div>
  );
}
