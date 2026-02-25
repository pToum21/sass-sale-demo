"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { motion } from "framer-motion";

const generateData = (months: number) => {
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const data = [];
  let mrr = 1_400_000;
  let churn = 80_000;
  for (let i = 0; i < months; i++) {
    mrr = mrr * (1 + (Math.random() * 0.05 + 0.02));
    churn = churn * (1 + (Math.random() * 0.04 - 0.02));
    data.push({
      month: monthNames[i % 12],
      MRR: Math.round(mrr),
      "New ARR": Math.round(mrr * (Math.random() * 0.12 + 0.08)),
      Churn: Math.round(churn),
    });
  }
  return data;
};

const ranges = ["3M", "6M", "1Y", "ALL"] as const;
type Range = (typeof ranges)[number];
const rangeLengths: Record<Range, number> = { "3M": 3, "6M": 6, "1Y": 12, ALL: 12 };

const formatCurrency = (v: number) => {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `$${(v / 1_000).toFixed(0)}K`;
  return `$${v}`;
};

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: "#111e35", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.75rem", padding: "0.75rem", boxShadow: "0 20px 60px rgba(0,0,0,0.5)", fontSize: "0.75rem" }}>
      <p style={{ color: "#8899bb", fontWeight: 500, marginBottom: "0.5rem" }}>{label}</p>
      {payload.map((p) => (
        <div key={p.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", marginBottom: "0.25rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: p.color, display: "inline-block" }} />
            <span style={{ color: "#8899bb" }}>{p.name}</span>
          </div>
          <span style={{ fontWeight: 600, color: "white" }}>{formatCurrency(p.value)}</span>
        </div>
      ))}
    </div>
  );
}

export default function RevenueChart() {
  const [range, setRange] = useState<Range>("6M");
  const data = generateData(rangeLengths[range]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      style={{ background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem" }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", marginBottom: "1.5rem" }}>
        <div>
          <h2 style={{ fontSize: "0.875rem", fontWeight: 600, color: "white" }}>Revenue Overview</h2>
          <p style={{ fontSize: "0.75rem", color: "#4a5a7a", marginTop: "0.125rem" }}>
            MRR, new ARR, and churn over time
          </p>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", gap: "2px", background: "#111e35", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "0.5rem", padding: "0.25rem" }}
          role="group"
          aria-label="Date range"
        >
          {ranges.map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              style={{
                padding: "0.375rem 0.75rem",
                fontSize: "0.75rem",
                fontWeight: 500,
                borderRadius: "0.375rem",
                border: "none",
                cursor: "pointer",
                transition: "background 0.15s, color 0.15s",
                background: range === r ? "#4f46e5" : "transparent",
                color: range === r ? "white" : "#4a5a7a",
              }}
              aria-pressed={range === r}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div style={{ height: 260 }} role="img" aria-label="Revenue area chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="gradMRR" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradNewARR" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradChurn" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.04)"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#4a5a7a", fontSize: 11 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#4a5a7a", fontSize: 11 }}
              tickFormatter={formatCurrency}
              width={52}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: "rgba(255,255,255,0.06)" }} />
            <Legend
              iconType="circle"
              iconSize={7}
              wrapperStyle={{ fontSize: "11px", paddingTop: "12px", color: "#8899bb" }}
            />
            <Area
              type="monotone"
              dataKey="MRR"
              stroke="#6366f1"
              strokeWidth={2}
              fill="url(#gradMRR)"
              dot={false}
              activeDot={{ r: 4, fill: "#6366f1" }}
            />
            <Area
              type="monotone"
              dataKey="New ARR"
              stroke="#7c3aed"
              strokeWidth={2}
              fill="url(#gradNewARR)"
              dot={false}
              activeDot={{ r: 4, fill: "#7c3aed" }}
            />
            <Area
              type="monotone"
              dataKey="Churn"
              stroke="#ef4444"
              strokeWidth={1.5}
              fill="url(#gradChurn)"
              dot={false}
              activeDot={{ r: 4, fill: "#ef4444" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
