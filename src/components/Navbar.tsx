"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import VantageLogo from "@/components/VantageLogo";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrolledBg = theme === "light"
    ? "rgba(240,244,255,0.92)"
    : "rgba(6,11,24,0.92)";

  const scrolledBorder = theme === "light"
    ? "1px solid rgba(79,70,229,0.12)"
    : "1px solid rgba(255,255,255,0.06)";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, border-color 0.3s",
        background: scrolled ? scrolledBg : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? scrolledBorder : "1px solid transparent",
      }}
      role="banner"
    >
      <nav
        className="section-outer"
        style={{ height: "4rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }} aria-label="Vantage home">
          <VantageLogo size={26} />
        </Link>

        {/* Desktop links */}
        <ul className="show-desktop" style={{ listStyle: "none", alignItems: "center", gap: "0.25rem" }} role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="nav-link-item"
                style={{ display: "block", padding: "0.5rem 1rem", fontSize: "0.875rem", color: "#8899bb", textDecoration: "none", borderRadius: "0.5rem" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="show-desktop" style={{ alignItems: "center", gap: "0.5rem" }}>
          <ThemeToggle />
          <Link href="/dashboard" style={{ fontSize: "0.875rem", color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.15s", padding: "0.5rem 0.75rem" }}>
            Sign in
          </Link>
          <Link
            href="/dashboard"
            className="btn-primary"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", fontSize: "0.875rem", fontWeight: 500, color: "white", background: "#4f46e5", borderRadius: "0.5rem", textDecoration: "none", boxShadow: "0 4px 14px rgba(79,70,229,0.4)" }}
          >
            Start free trial
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="hide-desktop" style={{ alignItems: "center", gap: "0.25rem" }}>
          <ThemeToggle />
          <button
          style={{ padding: "0.5rem", borderRadius: "0.5rem", color: "#8899bb", background: "transparent", border: "none", cursor: "pointer", alignItems: "center", justifyContent: "center" }}
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X style={{ width: "1.25rem", height: "1.25rem" }} /> : <Menu style={{ width: "1.25rem", height: "1.25rem" }} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden", background: theme === "light" ? "rgba(240,244,255,0.97)" : "rgba(6,11,24,0.97)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${theme === "light" ? "rgba(79,70,229,0.12)" : "rgba(255,255,255,0.06)"}` }}
          >
            <ul style={{ listStyle: "none", padding: "0.5rem 1rem 1rem", display: "flex", flexDirection: "column", gap: "0.25rem" }} role="list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{ display: "block", padding: "0.75rem 1rem", fontSize: "0.9375rem", color: "#8899bb", textDecoration: "none", borderRadius: "0.625rem" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li style={{ paddingTop: "0.5rem", marginTop: "0.5rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <Link
                  href="/dashboard"
                  style={{ display: "block", width: "100%", textAlign: "center", padding: "0.75rem 1rem", fontSize: "0.9375rem", fontWeight: 600, color: "white", background: "#4f46e5", borderRadius: "0.625rem", textDecoration: "none" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Start free trial
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
