"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Info, UserPlus, TrendingUp, Zap } from "lucide-react";

const activities = [
  {
    icon: TrendingUp,
    iconColor: "#10b981",
    iconBg: "rgba(16,185,129,0.1)",
    title: "Revenue milestone reached",
    description: "MRR crossed $2.4M for the first time",
    time: "2 min ago",
  },
  {
    icon: AlertCircle,
    iconColor: "#f59e0b",
    iconBg: "rgba(245,158,11,0.1)",
    title: "Anomaly detected",
    description: "API latency spike on /v2/reports endpoint — P2",
    time: "14 min ago",
  },
  {
    icon: UserPlus,
    iconColor: "#818cf8",
    iconBg: "rgba(99,102,241,0.12)",
    title: "New enterprise signup",
    description: "Meridian Corp upgraded to Enterprise plan",
    time: "1 hr ago",
  },
  {
    icon: CheckCircle2,
    iconColor: "#10b981",
    iconBg: "rgba(16,185,129,0.1)",
    title: "Incident resolved",
    description: "INC-0481: Database failover — resolved in 4m 12s",
    time: "3 hrs ago",
  },
  {
    icon: Zap,
    iconColor: "#a78bfa",
    iconBg: "rgba(167,139,250,0.1)",
    title: "Integration deployed",
    description: "Salesforce connector updated to v3.2",
    time: "6 hrs ago",
  },
  {
    icon: Info,
    iconColor: "#8899bb",
    iconBg: "rgba(255,255,255,0.05)",
    title: "Scheduled maintenance",
    description: "Database compaction window — 02:00–03:00 UTC",
    time: "Yesterday",
  },
];

export default function ActivityFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.4 }}
      style={{ background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem" }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
        <div>
          <h2 style={{ fontSize: "0.875rem", fontWeight: 600, color: "white" }}>Activity Feed</h2>
          <p style={{ fontSize: "0.75rem", color: "#4a5a7a", marginTop: "0.125rem" }}>Recent events and alerts</p>
        </div>
        <button style={{ fontSize: "0.75rem", color: "#818cf8", background: "transparent", border: "none", cursor: "pointer" }}>
          View all
        </button>
      </div>

      <ol style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "2px" }} aria-label="Recent activity">
        {activities.map((item, i) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
            style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.625rem 0.5rem", borderRadius: "0.75rem", cursor: "default" }}
          >
            <div style={{ padding: "0.375rem", borderRadius: "0.5rem", background: item.iconBg, flexShrink: 0, marginTop: "0.1rem", display: "flex" }}>
              <item.icon style={{ width: "0.875rem", height: "0.875rem", color: item.iconColor }} strokeWidth={1.8} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: "0.8125rem", fontWeight: 500, color: "white" }}>{item.title}</p>
              <p style={{ fontSize: "0.75rem", color: "#4a5a7a", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginTop: "0.125rem" }}>
                {item.description}
              </p>
            </div>
            <time style={{ fontSize: "0.7rem", color: "#2a3a5a", flexShrink: 0, marginTop: "0.125rem" }} dateTime={item.time}>
              {item.time}
            </time>
          </motion.li>
        ))}
      </ol>
    </motion.div>
  );
}
