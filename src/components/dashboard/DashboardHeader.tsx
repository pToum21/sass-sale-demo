"use client";

import { useState } from "react";
import { Search, Bell, HelpCircle, Menu } from "lucide-react";

export default function DashboardHeader({
  onMobileMenuToggle,
}: {
  onMobileMenuToggle?: () => void;
}) {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="h-16 flex items-center justify-between px-4 sm:px-6 border-b border-white/[0.06] bg-[#060b18]/80 backdrop-blur-xl sticky top-0 z-10 flex-shrink-0">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          className="lg:hidden p-2 rounded-lg text-[#4a5a7a] hover:text-white hover:bg-white/[0.06] transition-all"
          onClick={onMobileMenuToggle}
          aria-label="Toggle mobile menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Search */}
        <div
          className={`relative flex items-center gap-2 transition-all duration-200 ${
            searchFocused ? "w-72" : "w-48 sm:w-64"
          }`}
        >
          <Search
            className="absolute left-3 w-3.5 h-3.5 text-[#4a5a7a] pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Search dashboards, reports…"
            className="w-full bg-[#0d1526] border border-white/[0.06] rounded-xl py-2 pl-9 pr-3 text-sm text-white placeholder-[#4a5a7a] focus:outline-none focus:border-blue-500/50 focus:bg-[#111e35] transition-all"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            aria-label="Search"
          />
          <kbd className="absolute right-3 text-[10px] text-[#4a5a7a] font-mono bg-white/[0.05] px-1.5 py-0.5 rounded hidden sm:block">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        {/* Time range pill */}
        <div className="hidden sm:flex items-center gap-1 bg-[#0d1526] border border-white/[0.06] rounded-lg p-1">
          {["Today", "7D", "30D", "90D"].map((t, i) => (
            <button
              key={t}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                i === 1
                  ? "bg-blue-600 text-white"
                  : "text-[#4a5a7a] hover:text-white"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <button
          className="relative p-2 rounded-lg text-[#4a5a7a] hover:text-white hover:bg-white/[0.06] transition-all"
          aria-label="Notifications (3 unread)"
        >
          <Bell className="w-4.5 h-4.5" style={{ width: "18px", height: "18px" }} />
          <span
            className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-500"
            aria-hidden="true"
          />
        </button>

        <button
          className="p-2 rounded-lg text-[#4a5a7a] hover:text-white hover:bg-white/[0.06] transition-all"
          aria-label="Help"
        >
          <HelpCircle className="w-4.5 h-4.5" style={{ width: "18px", height: "18px" }} />
        </button>

        {/* Avatar */}
        <button
          className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-xs font-semibold text-white border-2 border-transparent hover:border-blue-500/40 transition-all"
          aria-label="Account menu"
          aria-haspopup="true"
        >
          PT
        </button>
      </div>
    </header>
  );
}
