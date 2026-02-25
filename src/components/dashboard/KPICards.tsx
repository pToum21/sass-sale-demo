"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Users, DollarSign, Activity, AlertTriangle } from "lucide-react";

const kpis = [
  {
    label: "Monthly Recurring Revenue",
    value: "$2,412,300",
    delta: "+8.1%",
    deltaLabel: "vs last month",
    up: true,
    icon: DollarSign,
    iconBg: "rgba(16,185,129,0.1)",
    iconColor: "#10b981",
    sparkline: [60, 65, 58, 72, 68, 80, 75, 88, 84, 92, 89, 100],
    sparkColor: "#10b981",
  },
  {
    label: "Active Users",
    value: "24,891",
    delta: "+12.4%",
    deltaLabel: "vs last month",
    up: true,
    icon: Users,
    iconBg: "rgba(99,102,241,0.12)",
    iconColor: "#6366f1",
    sparkline: [40, 55, 50, 60, 58, 70, 65, 78, 72, 85, 80, 95],
    sparkColor: "#6366f1",
  },
  {
    label: "Avg Response Time",
    value: "142ms",
    delta: "-18.3%",
    deltaLabel: "vs last month",
    up: true,
    note: "lower is better",
    icon: Activity,
    iconBg: "rgba(124,58,237,0.1)",
    iconColor: "#a78bfa",
    sparkline: [90, 80, 85, 70, 75, 65, 60, 55, 58, 50, 48, 45],
    sparkColor: "#a78bfa",
  },
  {
    label: "Open Incidents",
    value: "3",
    delta: "-60%",
    deltaLabel: "vs last month",
    up: true,
    note: "lower is better",
    icon: AlertTriangle,
    iconBg: "rgba(245,158,11,0.1)",
    iconColor: "#f59e0b",
    sparkline: [12, 10, 8, 11, 9, 7, 8, 6, 5, 4, 4, 3],
    sparkColor: "#f59e0b",
  },
];

function Sparkline({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 80;
  const h = 32;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / range) * h;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: "visible" }} aria-hidden="true">
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function KPICards() {
  return (
    <div className="kpi-grid" role="region" aria-label="Key performance indicators">
      {kpis.map((kpi, i) => (
        <motion.div
          key={kpi.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border)",
            borderRadius: "1rem",
            padding: "1.25rem",
            transition: "border-color 0.2s, transform 0.2s",
          }}
          whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.14)" }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.75rem" }}>
            <div>
              <p style={{ fontSize: "0.75rem", color: "#4a5a7a", fontWeight: 500 }}>{kpi.label}</p>
              <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "white", marginTop: "0.25rem", lineHeight: 1.1 }}>{kpi.value}</p>
            </div>
            <div style={{ padding: "0.5rem", borderRadius: "0.75rem", background: kpi.iconBg, flexShrink: 0 }}>
              <kpi.icon style={{ width: "1rem", height: "1rem", color: kpi.iconColor }} strokeWidth={1.8} />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                {kpi.up
                  ? <TrendingUp style={{ width: "0.875rem", height: "0.875rem", color: "#10b981" }} />
                  : <TrendingDown style={{ width: "0.875rem", height: "0.875rem", color: "#ef4444" }} />
                }
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: kpi.up ? "#10b981" : "#ef4444" }}>
                  {kpi.delta}
                </span>
              </div>
              <p style={{ fontSize: "0.7rem", color: "#4a5a7a", marginTop: "0.2rem" }}>{kpi.deltaLabel}</p>
              {kpi.note && <p style={{ fontSize: "0.65rem", color: "#2a3a5a", marginTop: "0.15rem" }}>{kpi.note}</p>}
            </div>
            <Sparkline data={kpi.sparkline} color={kpi.sparkColor} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
