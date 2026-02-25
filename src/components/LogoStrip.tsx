"use client";

import { motion } from "framer-motion";

const logos = [
  "Meridian Corp",
  "Arclight Systems",
  "Nexon Group",
  "Stratford Capital",
  "Velos Defense",
  "Ironclad Labs",
  "Prism Analytics",
  "Cerberus AI",
];

export default function LogoStrip() {
  return (
    <section
      className="relative py-12 border-y border-white/[0.05] overflow-hidden"
      aria-label="Trusted by"
    >
      <p className="text-center text-xs font-medium text-[#4a5a7a] uppercase tracking-widest mb-8">
        Trusted by 500+ enterprise teams
      </p>

      {/* Fade edges */}
      <div
        className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, var(--bg-base), transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, var(--bg-base), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="flex overflow-hidden">
        <motion.ul
          className="flex gap-12 items-center shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          role="list"
          aria-label="Partner logos"
        >
          {[...logos, ...logos].map((name, i) => (
            <li
              key={`${name}-${i}`}
              className="whitespace-nowrap text-sm font-semibold text-[#2a3a5a] hover:text-[#8899bb] transition-colors cursor-default tracking-wide uppercase"
            >
              {name}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
