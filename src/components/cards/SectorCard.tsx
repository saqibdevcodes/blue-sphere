import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectorItem } from "@/data/sectors";

interface SectorCardProps {
  sector: SectorItem;
}

export function SectorCard({ sector }: SectorCardProps) {
  return (
    <Link
      href={`/sectors/${sector.slug}`}
      className="group relative flex flex-col justify-end h-[380px] sm:h-[420px] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-black/[0.08]"
    >
      {/* Background Image */}
      <Image
        src={sector.image}
        alt={`${sector.name} environments`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:from-black/95" />

      {/* Content Container */}
      <div className="relative z-10 p-7 sm:p-8 flex flex-col justify-end space-y-3">
        <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-white/80 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full w-max border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          <span>Sector Environment</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
          {sector.name}
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2 font-normal">
          {sector.oneSentenceDesc}
        </p>

        <div className="pt-3 flex items-center justify-between border-t border-white/20">
          <span className="text-xs font-semibold text-white group-hover:text-blue-300 transition-colors">
            View Sector Operations
          </span>
          <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white group-hover:text-black flex items-center justify-center text-white transition-all duration-200">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
