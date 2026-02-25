"use client";

import { useEffect } from "react";

export default function DashboardThemeGuard({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const html = document.documentElement;
    const previous = html.getAttribute("data-theme");
    html.setAttribute("data-theme", "dark");
    return () => {
      if (previous) html.setAttribute("data-theme", previous);
    };
  }, []);

  return <>{children}</>;
}
