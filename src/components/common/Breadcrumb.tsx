import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  theme?: "light" | "dark";
}

export function Breadcrumb({ items, theme = "dark" }: BreadcrumbProps) {
  const isDark = theme === "dark";

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
        <li>
          <Link
            href="/"
            className={`flex items-center gap-1.5 transition-colors ${
              isDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-navy-900"
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <li key={idx} className="flex items-center gap-2">
              <ChevronRight
                className={`w-3.5 h-3.5 shrink-0 ${
                  isDark ? "text-slate-600" : "text-slate-400"
                }`}
              />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-navy-900"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`font-medium ${
                    isDark ? "text-blue-300" : "text-navy-950 font-semibold"
                  }`}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
