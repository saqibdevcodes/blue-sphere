import React from "react";

interface SectionHeadingProps {
  label?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  label,
  heading,
  description,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={`space-y-4 ${
        isCenter ? "text-center mx-auto max-w-3xl" : "max-w-3xl"
      } ${className}`}
    >
      {label && (
        <div className="inline-flex">
          <span
            className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full ${
              isDark
                ? "text-slate-300 bg-white/10 border border-white/15"
                : "text-slate-700 bg-black/[0.04] border border-black/[0.06]"
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-blue-400" : "bg-black"}`} />
            <span>{label}</span>
          </span>
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12] ${
          isDark ? "text-white" : "text-slate-950"
        }`}
      >
        {heading}
      </h2>

      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed font-normal ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
