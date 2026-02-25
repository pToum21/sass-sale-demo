"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  LayoutDashboard,
  BarChart3,
  Bell,
  Users,
  Settings,
  FileText,
  GitMerge,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import VantageLogo from "@/components/VantageLogo";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
  { icon: Bell, label: "Alerts", href: "/dashboard/alerts", badge: 3 },
  { icon: FileText, label: "Reports", href: "/dashboard/reports" },
  { icon: GitMerge, label: "Integrations", href: "/dashboard/integrations" },
  { icon: Users, label: "Team", href: "/dashboard/team" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function MobileNavDrawer() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on navigation
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Hamburger — hidden on desktop via sidebar-lg breakpoint logic */}
      <button
        className="hide-desktop"
        onClick={() => setOpen(true)}
        style={{
          padding: "0.5rem",
          borderRadius: "0.5rem",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: "#8899bb",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
      >
        <Menu style={{ width: "20px", height: "20px" }} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.75)",
                backdropFilter: "blur(4px)",
                zIndex: 40,
              }}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              id="mobile-nav-drawer"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                width: "280px",
                background: "#05080f",
                borderRight: "1px solid rgba(255,255,255,0.07)",
                zIndex: 50,
                display: "flex",
                flexDirection: "column",
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Drawer header */}
              <div style={{
                height: "64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 1rem",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                flexShrink: 0,
              }}>
                <VantageLogo size={24} />
                <button
                  onClick={() => setOpen(false)}
                  style={{
                    padding: "0.5rem",
                    borderRadius: "0.5rem",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "#4a5a7a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  aria-label="Close navigation menu"
                >
                  <X style={{ width: "18px", height: "18px" }} />
                </button>
              </div>

              {/* Nav items */}
              <nav style={{ flex: 1, overflowY: "auto", padding: "0.75rem 0.5rem" }} aria-label="Dashboard">
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "2px" }} role="list">
                  {navItems.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="sidebar-link"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            padding: "0.625rem 0.75rem",
                            borderRadius: "0.75rem",
                            fontSize: "0.9375rem",
                            fontWeight: 500,
                            textDecoration: "none",
                            background: active ? "rgba(99,102,241,0.12)" : "transparent",
                            border: active ? "1px solid rgba(129,140,248,0.25)" : "1px solid transparent",
                            color: active ? "#818cf8" : "#8899bb",
                          }}
                          aria-current={active ? "page" : undefined}
                        >
                          <item.icon
                            style={{ width: "18px", height: "18px", flexShrink: 0, color: active ? "#818cf8" : "#4a5a7a" }}
                            strokeWidth={active ? 2 : 1.7}
                          />
                          <span style={{ flex: 1 }}>{item.label}</span>
                          {item.badge && (
                            <span style={{
                              display: "flex", alignItems: "center", justifyContent: "center",
                              width: "20px", height: "20px", fontSize: "0.6875rem", fontWeight: 700,
                              background: "#4f46e5", color: "white", borderRadius: "9999px",
                            }}>
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* User profile at bottom */}
              <div style={{
                flexShrink: 0,
                borderTop: "1px solid rgba(255,255,255,0.06)",
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}>
                <div style={{
                  width: "32px", height: "32px", borderRadius: "9999px",
                  background: "linear-gradient(135deg, #4f46e5, #8b5cf6)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.7rem", fontWeight: 700, color: "white", flexShrink: 0,
                }}>
                  PT
                </div>
                <div>
                  <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "white" }}>Peyton T.</p>
                  <p style={{ fontSize: "0.7rem", color: "#4a5a7a" }}>Growth Plan</p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
