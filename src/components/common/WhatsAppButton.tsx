"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function WhatsAppButton() {
  const [isDismissed, setIsDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Subtle Tooltip Pill */}
      {!isDismissed && (
        <div className="hidden md:flex items-center gap-2 bg-white text-navy-950 px-3.5 py-2 rounded-full shadow-lg border border-slate-200 text-xs font-semibold animate-fade-in">
          <span>Chat with FM Advisor</span>
          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            className="text-slate-400 hover:text-slate-600 focus:outline-none"
            aria-label="Dismiss chat prompt"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={COMPANY_INFO.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-xl transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-[#25D366]/40 focus:outline-none"
        aria-label="Chat with Blue Sphere Facilities Management on WhatsApp"
      >
        <span className="sr-only">Contact us on WhatsApp</span>
        {/* WhatsApp SVG logo */}
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="currentColor"
          className="transition-transform group-hover:scale-110"
          aria-hidden="true"
        >
          <path d="M12.031 2C6.504 2 2 6.504 2 12.031c0 1.956.562 3.844 1.625 5.469L2 22l4.656-1.594c1.563.969 3.375 1.531 5.375 1.531 5.527 0 10.031-4.504 10.031-10.031S17.558 2 12.031 2zm0 18.25c-1.719 0-3.375-.5-4.813-1.406l-.344-.219-2.781.938.938-2.688-.219-.344c-1-1.469-1.531-3.219-1.531-5c0-4.531 3.688-8.219 8.219-8.219 4.531 0 8.219 3.688 8.219 8.219 0 4.531-3.688 8.219-8.219 8.219zm4.5-6.188c-.25-.125-1.469-.719-1.719-.813-.25-.094-.438-.125-.625.125-.188.25-.719.813-.875 1-.156.188-.313.188-.563.063-.25-.125-1.063-.375-2.031-1.25-.75-.656-1.25-1.469-1.406-1.719-.156-.25-.031-.375.094-.5.125-.094.25-.25.375-.375.125-.125.156-.219.25-.375.094-.156.031-.313-.031-.438-.063-.125-.625-1.5-.875-2.063-.219-.531-.469-.469-.625-.469h-.531c-.188 0-.5.063-.781.375-.281.313-1.063 1.031-1.063 2.531 0 1.5 1.094 2.938 1.25 3.125.156.188 2.156 3.313 5.219 4.625.719.313 1.281.5 1.719.625.719.219 1.375.188 1.906.125.594-.094 1.813-.75 2.063-1.469.25-.719.25-1.344.188-1.469-.063-.125-.25-.188-.5-.313z" />
        </svg>

        {/* Pulsing indicator ring */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
        </span>
      </a>
    </div>
  );
}
