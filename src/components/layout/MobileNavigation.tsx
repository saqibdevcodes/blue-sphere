"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  ArrowRight,
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

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    Services: true,
    Sectors: false,
  });

  const toggleSection = (label: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over panel - Clean Framer White Theme */}
      <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white text-slate-900 shadow-2xl flex flex-col overflow-hidden">
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <Logo variant="dark" imageClassName="h-9 w-auto" />
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-slate-500 hover:text-black hover:bg-slate-100 focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links Scrollable Area */}
        <div className="flex-1 px-5 py-6 space-y-2 overflow-y-auto">
          {MAIN_NAV_ITEMS.map((item) => {
            const hasChildren = Boolean(item.children && item.children.length > 0);
            const isExpanded = expandedSections[item.label] ?? false;
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            if (!hasChildren) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                    isActive
                      ? "text-black bg-slate-100 font-semibold"
                      : "text-slate-700 hover:text-black hover:bg-slate-50"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-black" />}
                </Link>
              );
            }

            return (
              <div 
                key={item.label} 
                className="border border-slate-100 rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleSection(item.label)}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-800 hover:text-black transition-colors"
                >
                  <span className={isActive ? "text-black font-semibold" : ""}>
                    {item.label}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
                        isExpanded ? "rotate-180 text-black" : ""
                      }`}
                    />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-3 pb-3 pt-1 space-y-1 border-t border-slate-100 bg-slate-50/50">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-blue-600 rounded-xl hover:bg-white transition-colors"
                    >
                      <span>Explore All {item.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

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
                          onClick={onClose}
                          className={`flex items-center gap-2.5 px-3 py-2 text-xs rounded-xl transition-all ${
                            isChildActive 
                              ? "bg-white text-black font-semibold shadow-sm" 
                              : "text-slate-600 hover:text-black hover:bg-white"
                          }`}
                        >
                          <div className="p-1 rounded-lg bg-slate-200/60 text-slate-700 shrink-0">
                            <IconComponent className="w-3 h-3" />
                          </div>
                          <span className="truncate">{child.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Drawer Footer & Direct Actions */}
        <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-3">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-black hover:bg-slate-800 rounded-full shadow transition-all text-center"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 px-1">
            <a href={`tel:${COMPANY_INFO.contact.telephoneRaw}`} className="hover:text-black flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>{COMPANY_INFO.contact.telephone}</span>
            </a>
            <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-black flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
