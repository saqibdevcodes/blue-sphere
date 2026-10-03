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

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const IconComponent = ICON_MAP[service.icon] || Building2;

  return (
    <div
      className={`group relative flex flex-col justify-between p-8 sm:p-9 bg-white rounded-3xl border transition-all duration-300 ${
        featured
          ? "border-black/15 shadow-lg shadow-black/[0.04] ring-1 ring-black/5"
          : "border-black/[0.06] hover:border-black/20 hover:shadow-xl hover:shadow-black/[0.04] hover:-translate-y-1"
      }`}
    >
      <div>
        {/* Card Header: Icon in Framer Soft Pill & Tag */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl bg-black/[0.04] text-slate-900 border border-black/[0.05] flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:text-white">
            <IconComponent className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
            Solution
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors mb-3 leading-snug">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
          {service.shortDescription}
        </p>

        {/* Focus Areas List */}
        <div className="space-y-2 mb-8 pt-4 border-t border-slate-100">
          {service.focusAreas.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors shrink-0" />
              <span className="line-clamp-1">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Link Button */}
      <Link
        href={`/services/${service.slug}`}
        className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-blue-600 transition-colors"
      >
        <span>Explore Solution</span>
        <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-black group-hover:text-white flex items-center justify-center transition-all duration-200">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </Link>
    </div>
  );
}
