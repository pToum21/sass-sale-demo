import type { Metadata } from "next";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardThemeGuard from "@/components/dashboard/DashboardThemeGuard";

export const metadata: Metadata = {
  title: "Dashboard — Vantage",
  description: "Your Vantage operations intelligence dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardThemeGuard>
      <div style={{ display: "flex", height: "100vh", overflow: "hidden", background: "#05080f" }}>
        <Sidebar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", minWidth: 0 }}>
          {children}
        </div>
      </div>
    </DashboardThemeGuard>
  );
}
