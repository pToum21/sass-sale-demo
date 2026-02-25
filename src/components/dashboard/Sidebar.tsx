"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Zap,
  LayoutDashboard,
  BarChart3,
  Bell,
  Users,
  Settings,
  FileText,
  GitMerge,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
} from "lucide-react";

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

  return (
    <aside
      className={clsx(
        "hidden lg:flex flex-col h-screen sticky top-0 bg-[#060b18] border-r border-white/[0.06] transition-all duration-300 z-20",
        collapsed ? "w-16" : "w-60"
      )}
      aria-label="Sidebar navigation"
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-white/[0.06] flex-shrink-0">
        {!collapsed && (
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-semibold text-white text-sm">Vantage</span>
          </Link>
        )}
        {collapsed && (
          <div className="w-7 h-7 mx-auto rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-2" aria-label="Main">
        <ul className="space-y-1" role="list">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={clsx(
                    "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150",
                    active
                      ? "bg-blue-600/15 text-blue-400 border border-blue-500/20"
                      : "text-[#4a5a7a] hover:text-[#8899bb] hover:bg-white/[0.04]",
                    collapsed && "justify-center"
                  )}
                  aria-current={active ? "page" : undefined}
                  title={collapsed ? item.label : undefined}
                >
                  <item.icon
                    className={clsx(
                      "w-4.5 h-4.5 flex-shrink-0",
                      active ? "text-blue-400" : ""
                    )}
                    style={{ width: "18px", height: "18px" }}
                  />
                  {!collapsed && (
                    <>
                      <span className="flex-1">{item.label}</span>
                      {item.badge && (
                        <span className="flex items-center justify-center w-5 h-5 text-xs font-semibold bg-blue-600 text-white rounded-full">
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
      <div className="flex-shrink-0 border-t border-white/[0.06] p-2">
        {!collapsed && (
          <div className="flex items-center gap-3 px-3 py-2.5 mb-1">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-xs font-semibold text-white flex-shrink-0">
              PT
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-white truncate">
                Peyton T.
              </p>
              <p className="text-xs text-[#4a5a7a] truncate">Growth Plan</p>
            </div>
          </div>
        )}
        <button
          onClick={() => setCollapsed((v) => !v)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs text-[#4a5a7a] hover:text-[#8899bb] hover:bg-white/[0.04] transition-all"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <>
              <ChevronLeft className="w-4 h-4" />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
