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

interface ProcessColorConfig {
  cardBg: string;
  iconContainer: string;
  stepNumber: string;
  titleHover: string;
  dotHover: string;
  divider: string;
}

const STEP_THEMES: Record<string, ProcessColorConfig> = {
  "01": {
    cardBg:
      "bg-gradient-to-br from-blue-50/90 via-blue-50/60 to-blue-100/30 border-blue-200/80 hover:border-blue-400/80 hover:from-blue-100/80 hover:to-blue-50/50 hover:shadow-xl hover:shadow-blue-500/10",
    iconContainer:
      "bg-white text-blue-600 border-blue-200/80 shadow-xs group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/25",
    stepNumber: "text-blue-300 group-hover:text-blue-600",
    titleHover: "group-hover:text-blue-600",
    dotHover: "bg-blue-300 group-hover:bg-blue-600",
    divider: "border-blue-200/60",
  },
  "02": {
    cardBg:
      "bg-gradient-to-br from-indigo-50/90 via-indigo-50/60 to-indigo-100/30 border-indigo-200/80 hover:border-indigo-400/80 hover:from-indigo-100/80 hover:to-indigo-50/50 hover:shadow-xl hover:shadow-indigo-500/10",
    iconContainer:
      "bg-white text-indigo-600 border-indigo-200/80 shadow-xs group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 group-hover:shadow-lg group-hover:shadow-indigo-500/25",
    stepNumber: "text-indigo-300 group-hover:text-indigo-600",
    titleHover: "group-hover:text-indigo-600",
    dotHover: "bg-indigo-300 group-hover:bg-indigo-600",
    divider: "border-indigo-200/60",
  },
  "03": {
    cardBg:
      "bg-gradient-to-br from-sky-50/90 via-sky-50/60 to-sky-100/30 border-sky-200/80 hover:border-sky-400/80 hover:from-sky-100/80 hover:to-sky-50/50 hover:shadow-xl hover:shadow-sky-500/10",
    iconContainer:
      "bg-white text-sky-600 border-sky-200/80 shadow-xs group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 group-hover:shadow-lg group-hover:shadow-sky-500/25",
    stepNumber: "text-sky-300 group-hover:text-sky-600",
    titleHover: "group-hover:text-sky-600",
    dotHover: "bg-sky-300 group-hover:bg-sky-600",
    divider: "border-sky-200/60",
  },
  "04": {
    cardBg:
      "bg-gradient-to-br from-amber-50/90 via-amber-50/60 to-amber-100/30 border-amber-200/80 hover:border-amber-400/80 hover:from-amber-100/80 hover:to-amber-50/50 hover:shadow-xl hover:shadow-amber-500/10",
    iconContainer:
      "bg-white text-amber-600 border-amber-200/80 shadow-xs group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 group-hover:shadow-lg group-hover:shadow-amber-500/25",
    stepNumber: "text-amber-300 group-hover:text-amber-600",
    titleHover: "group-hover:text-amber-600",
    dotHover: "bg-amber-300 group-hover:bg-amber-600",
    divider: "border-amber-200/60",
  },
  "05": {
    cardBg:
      "bg-gradient-to-br from-violet-50/90 via-violet-50/60 to-violet-100/30 border-violet-200/80 hover:border-violet-400/80 hover:from-violet-100/80 hover:to-violet-50/50 hover:shadow-xl hover:shadow-violet-500/10",
    iconContainer:
      "bg-white text-violet-600 border-violet-200/80 shadow-xs group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 group-hover:shadow-lg group-hover:shadow-violet-500/25",
    stepNumber: "text-violet-300 group-hover:text-violet-600",
    titleHover: "group-hover:text-violet-600",
    dotHover: "bg-violet-300 group-hover:bg-violet-600",
    divider: "border-violet-200/60",
  },
  "06": {
    cardBg:
      "bg-gradient-to-br from-emerald-50/90 via-emerald-50/60 to-emerald-100/30 border-emerald-200/80 hover:border-emerald-400/80 hover:from-emerald-100/80 hover:to-emerald-50/50 hover:shadow-xl hover:shadow-emerald-500/10",
    iconContainer:
      "bg-white text-emerald-600 border-emerald-200/80 shadow-xs group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 group-hover:shadow-lg group-hover:shadow-emerald-500/25",
    stepNumber: "text-emerald-300 group-hover:text-emerald-600",
    titleHover: "group-hover:text-emerald-600",
    dotHover: "bg-emerald-300 group-hover:bg-emerald-600",
    divider: "border-emerald-200/60",
  },
};

const DEFAULT_STEP_THEME: ProcessColorConfig = {
  cardBg:
    "bg-gradient-to-br from-blue-50/90 via-blue-50/60 to-blue-100/30 border-blue-200/80 hover:border-blue-400/80 hover:from-blue-100/80 hover:to-blue-50/50 hover:shadow-xl hover:shadow-blue-500/10",
  iconContainer:
    "bg-white text-blue-600 border-blue-200/80 shadow-xs group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/25",
  stepNumber: "text-blue-300 group-hover:text-blue-600",
  titleHover: "group-hover:text-blue-600",
  dotHover: "bg-blue-300 group-hover:bg-blue-600",
  divider: "border-blue-200/60",
};

export function ProcessTimeline({ showDetailedLink = true }: { showDetailedLink?: boolean }) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {COMPANY_INFO.methodologySteps.map((step) => {
          const Icon = STEP_ICONS[step.step] || Compass;
          const theme = STEP_THEMES[step.step] || DEFAULT_STEP_THEME;

          return (
            <div
              key={step.step}
              className={`group p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${theme.cardBg}`}
            >
              <div>
                {/* Step Pill & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`text-2xl font-bold font-mono transition-colors ${theme.stepNumber}`}
                  >
                    {step.step}
                  </span>
                  <div
                    className={`w-11 h-11 rounded-2xl border flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${theme.iconContainer}`}
                  >
                    <Icon className="w-4.5 h-4.5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>

                {/* Step Title */}
                <h3
                  className={`text-xl font-bold text-slate-950 mb-2 leading-snug transition-colors ${theme.titleHover}`}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {step.shortDesc}
                </p>
              </div>

              {/* Sub-label */}
              <div className={`pt-6 mt-6 border-t flex items-center justify-between text-xs text-slate-500 ${theme.divider}`}>
                <span>Phase {step.step} Execution</span>
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${theme.dotHover}`}
                />
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
