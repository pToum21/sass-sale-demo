"use client";

import { useId } from "react";

interface VantageLogoProps {
  variant?: "full" | "mark";
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function VantageLogo({
  variant = "full",
  size = 28,
  className,
  style,
}: VantageLogoProps) {
  const uid = useId().replace(/:/g, "");
  const markW = Math.round(size * (32 / 28));

  const mark = (
    <svg
      width={markW}
      height={size}
      viewBox="0 0 32 28"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <defs>
        <linearGradient id={`vl1-${uid}`} x1="6" y1="2" x2="13" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id={`vl2-${uid}`} x1="26" y1="2" x2="19" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#10d9a8" />
        </linearGradient>
      </defs>
      <path d="M3 2 L9 2 L16 26 L10 26 Z" fill={`url(#vl1-${uid})`} />
      <path d="M29 2 L23 2 L16 26 L22 26 Z" fill={`url(#vl2-${uid})`} />
    </svg>
  );

  if (variant === "mark") {
    return (
      <span className={className} style={{ display: "inline-flex", ...style }} aria-label="Vantage">
        {mark}
      </span>
    );
  }

  const fontSize = Math.round(size * (17 / 28));

  return (
    <div
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", ...style }}
    >
      {mark}
      <span style={{ fontWeight: 700, fontSize: `${fontSize}px`, letterSpacing: "-0.025em", color: "white", lineHeight: 1 }}>
        Vantage
      </span>
    </div>
  );
}
