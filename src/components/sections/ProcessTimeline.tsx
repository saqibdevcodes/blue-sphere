import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, SearchCheck, FileText, Layers, Eye, RefreshCw } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

const STEP_ICONS: Record<string, React.ElementType> = {
  "01": Compass,
  "02": SearchCheck,
  "03": FileText,
  "04": Layers,
  "05": Eye,
  "06": RefreshCw,
};

export function ProcessTimeline({ showDetailedLink = true }: { showDetailedLink?: boolean }) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {COMPANY_INFO.methodologySteps.map((step) => {
          const Icon = STEP_ICONS[step.step] || Compass;

          return (
            <div
              key={step.step}
              className="group p-8 rounded-3xl bg-white border border-black/[0.06] hover:border-black/20 hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Pill & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold font-mono text-slate-300 group-hover:text-black transition-colors">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-black/[0.04] text-slate-800 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-slate-950 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {step.shortDesc}
                </p>
              </div>

              {/* Sub-label */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Phase {step.step} Execution</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-blue-500 transition-colors" />
              </div>
            </div>
          );
        })}
      </div>

      {showDetailedLink && (
        <div className="mt-10 text-center">
          <Link
            href="/our-approach"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-blue-600 transition-colors px-6 py-3 rounded-full border border-black/[0.08] bg-white hover:bg-slate-50 shadow-sm"
          >
            <span>Explore Complete Operational Framework</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
