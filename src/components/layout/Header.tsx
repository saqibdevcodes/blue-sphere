"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Building2,
  LineChart,
  Wrench,
  ShieldCheck,
  Activity,
  Leaf,
  Sparkles,
  Trees,
  Stethoscope,
  Factory,
  Compass
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { MAIN_NAV_ITEMS } from "@/data/navigation";
import { COMPANY_INFO } from "@/data/company";
import { MobileNavigation } from "./MobileNavigation";

const SERVICE_ICONS: Record<string, React.ElementType> = {
  "/services/integrated-facility-management": Building2,
  "/services/fm-advisory-consultancy": LineChart,
  "/services/operational-support": Wrench,
  "/services/safety-compliance": ShieldCheck,
  "/services/performance-efficiency": Activity,
  "/services/sustainability": Leaf,
};

const SECTOR_ICONS: Record<string, React.ElementType> = {
  "/sectors/clubs-leisure": Sparkles,
  "/sectors/parks-public-spaces": Trees,
  "/sectors/healthcare": Stethoscope,
  "/sectors/industrial": Factory,
  "/sectors/commercial": Building2,
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
        <div
          className={`pointer-events-auto w-full max-w-7xl transition-all duration-300 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between ${isScrolled
              ? "bg-white/95 backdrop-blur-2xl border border-black/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.03]"
              : "bg-white/85 backdrop-blur-xl border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
            }`}
        >
          {/* Logo with Ample Breathing Room */}
          <div className="flex-shrink-0 flex items-center pr-4 sm:pr-6">
            <Logo
              variant="dark"
              imageClassName="h-9 sm:h-10 lg:h-11 w-auto"
            />
          </div>

          {/* Desktop Navigation Links (Pill Style like Agencee) */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main Navigation">
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isDropdownOpen = activeDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasChildren && handleMouseEnter(item.label)}
                  onMouseLeave={() => hasChildren && handleMouseLeave()}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 px-3.5 py-1.5 text-[13px] font-medium rounded-full transition-all duration-200 ${isActive
                        ? "text-black bg-black/[0.06] font-semibold"
                        : "text-slate-600 hover:text-black hover:bg-black/[0.03]"
                      }`}
                  >
                    <span>{item.label}</span>
                    {hasChildren && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-black" : ""
                          }`}
                      />
                    )}
                  </Link>

                  {/* Clean Framer-Grade Dropdown Flyout */}
                  {hasChildren && (
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[560px] transition-all duration-200 ease-out ${isDropdownOpen
                          ? "opacity-100 visible translate-y-0 scale-100"
                          : "opacity-0 invisible -translate-y-2 scale-98 pointer-events-none"
                        }`}
                    >
                      <div className="bg-white/98 backdrop-blur-2xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-black/[0.07] p-4 text-slate-900 overflow-hidden">
                        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100 px-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            {item.label === "Services" ? "Tailored Solutions" : "Industry Sectors"}
                          </span>
                          <Link
                            href={item.href}
                            className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group/all"
                          >
                            <span>View All {item.label}</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/all:translate-x-0.5" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-1.5">
                          {item.children?.map((child) => {
                            const IconComponent =
                              SERVICE_ICONS[child.href] ||
                              SECTOR_ICONS[child.href] ||
                              Compass;
                            const isChildActive = pathname === child.href;

                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`group/card flex items-start gap-2.5 p-2.5 rounded-2xl transition-all ${isChildActive
                                    ? "bg-slate-100 text-black font-semibold"
                                    : "hover:bg-slate-50 text-slate-700"
                                  }`}
                              >
                                <div className="p-1.5 rounded-xl bg-slate-100 text-slate-700 group-hover/card:bg-black group-hover/card:text-white transition-colors shrink-0 mt-0.5">
                                  <IconComponent className="w-3.5 h-3.5" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="text-xs font-semibold text-slate-900 group-hover/card:text-blue-600 transition-colors truncate">
                                    {child.label}
                                  </div>
                                  {child.description && (
                                    <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                                      {child.description}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Right Action Buttons (Agencee Pill Style) */}
          <div className="hidden lg:flex items-center gap-2.5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-black hover:bg-slate-800 rounded-full shadow-sm hover:shadow transition-all duration-200 active:scale-95"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/contact"
              className="inline-flex items-center px-3.5 py-1.5 text-xs font-semibold text-white bg-black hover:bg-slate-800 rounded-full sm:hidden"
            >
              Start
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-slate-700 hover:text-black hover:bg-black/5 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-black" />
              ) : (
                <Menu className="w-5 h-5 text-black" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Navigation */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Top spacing placeholder */}
      <div className="h-20 sm:h-24" aria-hidden="true" />
    </>
  );
}
