"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BarChart3,
  Bell,
  Users,
  Settings,
  FileText,
  GitMerge,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const w = collapsed ? 64 : 228;

  return (
    <aside
      style={{
        width: `${w}px`,
        minWidth: `${w}px`,
        height: "100vh",
        display: "none",
        flexDirection: "column",
        background: "#05080f",
        borderRight: "1px solid rgba(255,255,255,0.06)",
        transition: "width 0.25s ease, min-width 0.25s ease",
        position: "sticky",
        top: 0,
        zIndex: 20,
        flexShrink: 0,
      }}
      className="sidebar-lg"
      aria-label="Sidebar navigation"
    >
      {/* Logo */}
      <div style={{ height: "64px", display: "flex", alignItems: "center", justifyContent: collapsed ? "center" : "flex-start", padding: "0 1rem", borderBottom: "1px solid rgba(255,255,255,0.06)", flexShrink: 0 }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          {collapsed ? (
            <VantageLogo variant="mark" size={24} />
          ) : (
            <VantageLogo size={24} />
          )}
        </Link>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, overflowY: "auto", padding: "0.75rem 0.5rem" }} aria-label="Main">
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "2px" }} role="list">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={active ? undefined : "sidebar-link"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.625rem 0.75rem",
                    borderRadius: "0.75rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    justifyContent: collapsed ? "center" : "flex-start",
                    background: active ? "rgba(99,102,241,0.12)" : "transparent",
                    border: active ? "1px solid rgba(129,140,248,0.25)" : "1px solid transparent",
                    color: active ? "#818cf8" : "#4a5a7a",
                  }}
                  aria-current={active ? "page" : undefined}
                  title={collapsed ? item.label : undefined}
                >
                  <item.icon
                    style={{ width: "18px", height: "18px", flexShrink: 0, color: active ? "#818cf8" : "#4a5a7a" }}
                    strokeWidth={active ? 2 : 1.7}
                  />
                  {!collapsed && (
                    <>
                      <span style={{ flex: 1 }}>{item.label}</span>
                      {item.badge && (
                        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", fontSize: "0.6875rem", fontWeight: 700, background: "#4f46e5", color: "white", borderRadius: "9999px" }}>
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom */}
      <div style={{ flexShrink: 0, borderTop: "1px solid rgba(255,255,255,0.06)", padding: "0.5rem" }}>
        {!collapsed && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.625rem 0.75rem", marginBottom: "0.25rem" }}>
            <div style={{ width: "28px", height: "28px", borderRadius: "9999px", background: "linear-gradient(135deg, #4f46e5, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 700, color: "white", flexShrink: 0 }}>
              PT
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 500, color: "white", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                Peyton T.
              </p>
              <p style={{ fontSize: "0.7rem", color: "#4a5a7a", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Growth Plan</p>
            </div>
          </div>
        )}
        <button
          onClick={() => setCollapsed((v) => !v)}
          style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.5rem 0.75rem", borderRadius: "0.75rem", fontSize: "0.75rem", color: "#4a5a7a", background: "transparent", border: "none", cursor: "pointer", transition: "background 0.15s, color 0.15s" }}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronRight style={{ width: "1rem", height: "1rem" }} />
          ) : (
            <>
              <ChevronLeft style={{ width: "1rem", height: "1rem" }} />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
