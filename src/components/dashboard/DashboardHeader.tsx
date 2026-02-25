"use client";

import { useState } from "react";
import { Search, Bell, HelpCircle } from "lucide-react";
import MobileNavDrawer from "@/components/dashboard/MobileNavDrawer";

const ranges = ["Today", "7D", "30D", "90D"];

export default function DashboardHeader() {
  const [activeRange, setActiveRange] = useState(1);
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header
      style={{
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1.25rem",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(5,8,15,0.9)",
        backdropFilter: "blur(20px)",
        position: "sticky",
        top: 0,
        zIndex: 10,
        flexShrink: 0,
        gap: "0.75rem",
      }}
    >
      {/* Mobile nav trigger — only visible on mobile */}
      <MobileNavDrawer />

      {/* Left: search */}
      <div style={{ position: "relative", flex: 1, maxWidth: searchFocused ? "18rem" : "14rem", transition: "max-width 0.2s", flexShrink: 0 }}>
        <Search style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", width: "0.875rem", height: "0.875rem", color: "#4a5a7a", pointerEvents: "none" }} aria-hidden="true" />
        <input
          type="search"
          placeholder="Search dashboards, reports…"
          style={{
            width: "100%",
            background: "#0d1526",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "0.75rem",
            padding: "0.5rem 0.75rem 0.5rem 2.25rem",
            fontSize: "0.8125rem",
            color: "white",
            outline: "none",
            transition: "border-color 0.15s, background 0.15s",
          }}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          aria-label="Search"
        />
      </div>

      {/* Right */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
        {/* Time range selector */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "2px", background: "#0d1526", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "0.625rem", padding: "0.25rem" }}
          role="group"
          aria-label="Date range selector"
        >
          {ranges.map((r, i) => (
            <button
              key={r}
              onClick={() => setActiveRange(i)}
              style={{
                padding: "0.3rem 0.75rem",
                fontSize: "0.75rem",
                fontWeight: 500,
                borderRadius: "0.375rem",
                border: "none",
                cursor: "pointer",
                transition: "background 0.15s, color 0.15s",
                background: activeRange === i ? "#4f46e5" : "transparent",
                color: activeRange === i ? "white" : "#4a5a7a",
              }}
              aria-pressed={activeRange === i}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Notification bell */}
        <button
          className="icon-btn"
          style={{ position: "relative", padding: "0.5rem", borderRadius: "0.5rem", background: "transparent", border: "none", cursor: "pointer", color: "#4a5a7a", display: "flex", alignItems: "center", justifyContent: "center" }}
          aria-label="Notifications (3 unread)"
        >
          <Bell style={{ width: "18px", height: "18px" }} />
          <span style={{ position: "absolute", top: "6px", right: "6px", width: "8px", height: "8px", borderRadius: "50%", background: "#6366f1", border: "2px solid #05080f" }} aria-hidden="true" />
        </button>

        {/* Help */}
        <button
          className="icon-btn"
          style={{ padding: "0.5rem", borderRadius: "0.5rem", background: "transparent", border: "none", cursor: "pointer", color: "#4a5a7a", display: "flex", alignItems: "center", justifyContent: "center" }}
          aria-label="Help"
        >
          <HelpCircle style={{ width: "18px", height: "18px" }} />
        </button>

        {/* Avatar */}
        <button
          style={{ width: "32px", height: "32px", borderRadius: "9999px", background: "linear-gradient(135deg, #4f46e5, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 700, color: "white", border: "2px solid transparent", cursor: "pointer", flexShrink: 0 }}
          aria-label="Account menu"
          aria-haspopup="true"
        >
          PT
        </button>
      </div>
    </header>
  );
}
