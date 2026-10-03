import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  imageClassName?: string;
  showSubtitle?: boolean;
}

/**
 * Official Sphere Emblem Component
 * Displays the official 3D blue sphere with commercial buildings and orbital ring.
 */
export function SphereMark({
  className = "w-10 h-7",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <Image
        src="/logo-emblem.png"
        alt="Blue Sphere Facilities Management Emblem"
        width={947}
        height={566}
        priority
        className="w-full h-auto object-contain"
      />
    </div>
  );
}

/**
 * Official Brand Logo Component
 * Incorporates the verified corporate logo image with crisp resolution across light and dark backgrounds.
 */
export function Logo({
  variant = "dark",
  className = "",
  imageClassName = "h-11 sm:h-12 lg:h-13 w-auto",
}: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2 transition-opacity hover:opacity-95 ${className}`}
      aria-label="BLUE SPHERE Facilities Management Home"
    >
      <div className="relative flex items-center">
        <Image
          src={isLight ? "/logo-horizontal-light.png" : "/logo-horizontal.png"}
          alt="BLUE SPHERE FACILITIES MANAGEMENT – FZCO"
          width={631}
          height={120}
          priority
          className={`${imageClassName} object-contain transition-transform duration-250 group-hover:scale-[1.02]`}
        />
      </div>
    </Link>
  );
}
