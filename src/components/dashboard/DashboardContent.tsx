"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KPICards from "@/components/dashboard/KPICards";
import RevenueChart from "@/components/dashboard/RevenueChart";
import SegmentChart from "@/components/dashboard/SegmentChart";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import TopAccounts from "@/components/dashboard/TopAccounts";
import DashboardSkeleton from "@/components/dashboard/DashboardSkeleton";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DashboardContent() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 620);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!loaded ? (
        <motion.div
          key="skeleton"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ flex: 1, overflowY: "auto" }}
        >
          <DashboardSkeleton />
        </motion.div>
      ) : (
        <motion.main
          key="content"
          id="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ flex: 1, overflowY: "auto", padding: "1.5rem" }}
          aria-label="Dashboard content"
        >
          {/* Back to marketing site */}
          <Link
            href="/"
            className="btn-ghost"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.375rem",
              fontSize: "0.75rem", color: "#4a5a7a", textDecoration: "none",
              marginBottom: "1.25rem", padding: "0.25rem 0.5rem",
              borderRadius: "0.375rem",
            }}
          >
            <ArrowLeft style={{ width: "0.875rem", height: "0.875rem" }} />
            Back to marketing site
          </Link>

          {/* Page title */}
          <div style={{ marginBottom: "1.5rem" }}>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 600, color: "white" }}>Overview</h1>
            <p style={{ fontSize: "0.875rem", color: "#4a5a7a", marginTop: "0.125rem" }}>
              Your operations snapshot · Last 7 days
            </p>
          </div>

          {/* KPI cards */}
          <KPICards />

          {/* Charts row */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginTop: "1rem" }}
            className="dashboard-charts-row"
          >
            <RevenueChart />
            <SegmentChart />
          </div>

          {/* Bottom row */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginTop: "1rem" }}
            className="dashboard-bottom-row"
          >
            <TopAccounts />
            <ActivityFeed />
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
