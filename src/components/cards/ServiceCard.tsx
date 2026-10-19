import React from "react";
import Link from "next/link";
import { 
  Building2, 
  Briefcase, 
  Layers, 
  ShieldCheck, 
  Gauge, 
  Leaf, 
  ArrowRight,
  ArrowUpRight
} from "lucide-react";
import { ServiceItem } from "@/data/services";

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Building: Building2,
  Briefcase,
  Layers,
  ShieldAlert: ShieldCheck,
  Gauge,
  Leaf,
};

interface ServiceColorConfig {
  cardBg: string;
  iconContainer: string;
  badge: string;
  titleHover: string;
  accentDot: string;
  arrowHover: string;
  divider: string;
}

const SERVICE_THEMES: Record<string, ServiceColorConfig> = {
  "integrated-facility-management": {
    cardBg:
      "bg-gradient-to-br from-blue-50/90 via-blue-50/60 to-blue-100/30 border-blue-200/80 hover:border-blue-400/80 hover:from-blue-100/80 hover:to-blue-50/50 hover:shadow-xl hover:shadow-blue-500/10",
    iconContainer:
      "bg-white text-blue-600 border-blue-200/80 shadow-xs group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/25",
    badge: "text-blue-700 bg-white/90 border border-blue-200/80 group-hover:bg-blue-100/90",
    titleHover: "group-hover:text-blue-600",
    accentDot: "bg-blue-300 group-hover:bg-blue-600",
    arrowHover: "bg-white text-blue-600 border border-blue-200/80 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600",
    divider: "border-blue-200/60",
  },
  "fm-advisory-consultancy": {
    cardBg:
      "bg-gradient-to-br from-indigo-50/90 via-indigo-50/60 to-indigo-100/30 border-indigo-200/80 hover:border-indigo-400/80 hover:from-indigo-100/80 hover:to-indigo-50/50 hover:shadow-xl hover:shadow-indigo-500/10",
    iconContainer:
      "bg-white text-indigo-600 border-indigo-200/80 shadow-xs group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 group-hover:shadow-lg group-hover:shadow-indigo-500/25",
    badge: "text-indigo-700 bg-white/90 border border-indigo-200/80 group-hover:bg-indigo-100/90",
    titleHover: "group-hover:text-indigo-600",
    accentDot: "bg-indigo-300 group-hover:bg-indigo-600",
    arrowHover: "bg-white text-indigo-600 border border-indigo-200/80 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600",
    divider: "border-indigo-200/60",
  },
  "operational-support": {
    cardBg:
      "bg-gradient-to-br from-sky-50/90 via-sky-50/60 to-sky-100/30 border-sky-200/80 hover:border-sky-400/80 hover:from-sky-100/80 hover:to-sky-50/50 hover:shadow-xl hover:shadow-sky-500/10",
    iconContainer:
      "bg-white text-sky-600 border-sky-200/80 shadow-xs group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 group-hover:shadow-lg group-hover:shadow-sky-500/25",
    badge: "text-sky-700 bg-white/90 border border-sky-200/80 group-hover:bg-sky-100/90",
    titleHover: "group-hover:text-sky-600",
    accentDot: "bg-sky-300 group-hover:bg-sky-600",
    arrowHover: "bg-white text-sky-600 border border-sky-200/80 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600",
    divider: "border-sky-200/60",
  },
  "safety-compliance": {
    cardBg:
      "bg-gradient-to-br from-amber-50/90 via-amber-50/60 to-amber-100/30 border-amber-200/80 hover:border-amber-400/80 hover:from-amber-100/80 hover:to-amber-50/50 hover:shadow-xl hover:shadow-amber-500/10",
    iconContainer:
      "bg-white text-amber-600 border-amber-200/80 shadow-xs group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 group-hover:shadow-lg group-hover:shadow-amber-500/25",
    badge: "text-amber-800 bg-white/90 border border-amber-200/80 group-hover:bg-amber-100/90",
    titleHover: "group-hover:text-amber-600",
    accentDot: "bg-amber-300 group-hover:bg-amber-600",
    arrowHover: "bg-white text-amber-600 border border-amber-200/80 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600",
    divider: "border-amber-200/60",
  },
  "performance-efficiency": {
    cardBg:
      "bg-gradient-to-br from-violet-50/90 via-violet-50/60 to-violet-100/30 border-violet-200/80 hover:border-violet-400/80 hover:from-violet-100/80 hover:to-violet-50/50 hover:shadow-xl hover:shadow-violet-500/10",
    iconContainer:
      "bg-white text-violet-600 border-violet-200/80 shadow-xs group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 group-hover:shadow-lg group-hover:shadow-violet-500/25",
    badge: "text-violet-700 bg-white/90 border border-violet-200/80 group-hover:bg-violet-100/90",
    titleHover: "group-hover:text-violet-600",
    accentDot: "bg-violet-300 group-hover:bg-violet-600",
    arrowHover: "bg-white text-violet-600 border border-violet-200/80 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600",
    divider: "border-violet-200/60",
  },
  "sustainability": {
    cardBg:
      "bg-gradient-to-br from-emerald-50/90 via-emerald-50/60 to-emerald-100/30 border-emerald-200/80 hover:border-emerald-400/80 hover:from-emerald-100/80 hover:to-emerald-50/50 hover:shadow-xl hover:shadow-emerald-500/10",
    iconContainer:
      "bg-white text-emerald-600 border-emerald-200/80 shadow-xs group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 group-hover:shadow-lg group-hover:shadow-emerald-500/25",
    badge: "text-emerald-700 bg-white/90 border border-emerald-200/80 group-hover:bg-emerald-100/90",
    titleHover: "group-hover:text-emerald-600",
    accentDot: "bg-emerald-300 group-hover:bg-emerald-600",
    arrowHover: "bg-white text-emerald-600 border border-emerald-200/80 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600",
    divider: "border-emerald-200/60",
  },
};

const DEFAULT_THEME: ServiceColorConfig = {
  cardBg:
    "bg-gradient-to-br from-blue-50/90 via-blue-50/60 to-blue-100/30 border-blue-200/80 hover:border-blue-400/80 hover:from-blue-100/80 hover:to-blue-50/50 hover:shadow-xl hover:shadow-blue-500/10",
  iconContainer:
    "bg-white text-blue-600 border-blue-200/80 shadow-xs group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/25",
  badge: "text-blue-700 bg-white/90 border border-blue-200/80 group-hover:bg-blue-100/90",
  titleHover: "group-hover:text-blue-600",
  accentDot: "bg-blue-300 group-hover:bg-blue-600",
  arrowHover: "bg-white text-blue-600 border border-blue-200/80 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600",
  divider: "border-blue-200/60",
};

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const IconComponent = ICON_MAP[service.icon] || Building2;
  const theme = SERVICE_THEMES[service.id] || SERVICE_THEMES[service.slug] || DEFAULT_THEME;

  return (
    <div
      className={`group relative flex flex-col justify-between p-8 sm:p-9 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
        theme.cardBg
      } ${
        featured ? "ring-2 ring-blue-500/25 shadow-lg shadow-blue-500/10" : ""
      }`}
    >
      <div>
        {/* Card Header: Icon in Soft Pill & Tag */}
        <div className="flex items-center justify-between mb-6">
          <div
            className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${theme.iconContainer}`}
          >
            <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span
            className={`text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full transition-colors ${theme.badge}`}
          >
            Solution
          </span>
        </div>

        {/* Title */}
        <h3
          className={`text-xl sm:text-2xl font-bold text-slate-950 transition-colors mb-3 leading-snug ${theme.titleHover}`}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 font-normal">
          {service.shortDescription}
        </p>

        {/* Focus Areas List */}
        <div className={`space-y-2 mb-8 pt-4 border-t ${theme.divider}`}>
          {service.focusAreas.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
              <span
                className={`w-1.5 h-1.5 rounded-full transition-colors shrink-0 ${theme.accentDot}`}
              />
              <span className="line-clamp-1">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Link Button */}
      <Link
        href={`/services/${service.slug}`}
        className={`inline-flex items-center justify-between w-full pt-4 border-t ${theme.divider} text-xs font-bold uppercase tracking-wider text-slate-900 transition-colors ${theme.titleHover}`}
      >
        <span>Explore Solution</span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${theme.arrowHover}`}
        >
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </Link>
    </div>
  );
}
