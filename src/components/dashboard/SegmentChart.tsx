"use client";

import { motion } from "framer-motion";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const segments = [
  { name: "Enterprise", value: 42, fill: "#6366f1", count: "10,454" },
  { name: "Mid-Market", value: 31, fill: "#7c3aed", count: "7,716" },
  { name: "Startup", value: 18, fill: "#06b6d4", count: "4,480" },
  { name: "Other", value: 9, fill: "#334155", count: "2,240" },
];

const chartData = segments.map((s) => ({ ...s }));

export default function SegmentChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      style={{ background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem", height: "100%" }}
    >
      <div style={{ marginBottom: "1.25rem" }}>
        <h2 style={{ fontSize: "0.875rem", fontWeight: 600, color: "white" }}>User Segments</h2>
        <p style={{ fontSize: "0.75rem", color: "#4a5a7a", marginTop: "0.125rem" }}>
          Distribution by plan type
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {/* Donut chart */}
        <div
          style={{ width: 120, height: 120, flexShrink: 0, position: "relative" }}
          role="img"
          aria-label="User segment donut chart"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="90%"
              data={chartData}
              startAngle={90}
              endAngle={-270}
              barSize={8}
            >
              <RadialBar
                dataKey="value"
                cornerRadius={4}
                background={{ fill: "rgba(255,255,255,0.03)" }}
              />
              <Tooltip
                content={({ active, payload }) =>
                  active && payload?.length ? (
                    <div style={{ background: "#111e35", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.75rem", padding: "0.5rem 0.75rem", fontSize: "0.75rem", color: "white", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}>
                      <p style={{ fontWeight: 600 }}>{payload[0].payload.name}</p>
                      <p style={{ color: "#8899bb" }}>{payload[0].value}%</p>
                    </div>
                  ) : null
                }
              />
            </RadialBarChart>
          </ResponsiveContainer>
          {/* Center label */}
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
            <p style={{ fontSize: "1.125rem", fontWeight: 700, color: "white" }}>24.9K</p>
            <p style={{ fontSize: "0.6rem", color: "#4a5a7a" }}>users</p>
          </div>
        </div>

        {/* Legend */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {segments.map((seg) => (
            <div key={seg.name}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.75rem", marginBottom: "0.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: seg.fill, flexShrink: 0, display: "inline-block" }} aria-hidden="true" />
                  <span style={{ color: "#8899bb" }}>{seg.name}</span>
                </div>
                <span style={{ color: "white", fontWeight: 500 }}>{seg.value}%</span>
              </div>
              <div style={{ height: "4px", background: "rgba(255,255,255,0.04)", borderRadius: "9999px", overflow: "hidden" }}>
                <motion.div
                  style={{ height: "100%", borderRadius: "9999px", background: seg.fill }}
                  initial={{ width: 0 }}
                  animate={{ width: `${seg.value}%` }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
