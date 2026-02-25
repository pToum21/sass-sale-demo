"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="icon-btn"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      style={{
        padding: "0.5rem",
        borderRadius: "0.5rem",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: "var(--text-secondary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "color 0.2s",
      }}
    >
      {theme === "dark"
        ? <Sun  style={{ width: "1.125rem", height: "1.125rem" }} strokeWidth={1.8} />
        : <Moon style={{ width: "1.125rem", height: "1.125rem" }} strokeWidth={1.8} />
      }
    </button>
  );
}
