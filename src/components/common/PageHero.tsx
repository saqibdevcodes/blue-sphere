import React from "react";
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
}

export function PageHero({
  eyebrow = "BLUE SPHERE FACILITIES MANAGEMENT",
  title,
  subtitle,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative bg-[#f7f7f7] text-slate-900 pt-10 pb-14 sm:pt-14 sm:pb-20 border-b border-black/[0.06]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbs} theme="light" />

        <div className="max-w-4xl space-y-4">
          <div className="inline-flex">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase bg-black/[0.04] text-slate-700 border border-black/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>{eyebrow}</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 leading-[1.08]">
            {title}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
