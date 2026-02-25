"use client";

import { motion } from "framer-motion";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const segments = [
  { name: "Enterprise", value: 42, fill: "#3b82f6", count: "10,454" },
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
      className="bg-[#0d1526] border border-white/[0.06] rounded-2xl p-5"
    >
      <div className="mb-5">
        <h2 className="text-sm font-semibold text-white">User Segments</h2>
        <p className="text-xs text-[#4a5a7a] mt-0.5">
          Distribution by plan type
        </p>
      </div>

      <div className="flex items-center gap-4">
        {/* Donut chart */}
        <div
          style={{ width: 120, height: 120 }}
          className="flex-shrink-0 relative"
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
                    <div className="bg-[#111e35] border border-white/10 rounded-xl px-3 py-2 text-xs text-white shadow-2xl">
                      <p className="font-semibold">{payload[0].payload.name}</p>
                      <p className="text-[#8899bb]">{payload[0].value}%</p>
                    </div>
                  ) : null
                }
              />
            </RadialBarChart>
          </ResponsiveContainer>
          {/* Center label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <p className="text-lg font-bold text-white">24.9K</p>
            <p className="text-[9px] text-[#4a5a7a]">users</p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 space-y-3">
          {segments.map((seg) => (
            <div key={seg.name}>
              <div className="flex items-center justify-between text-xs mb-1">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: seg.fill }}
                    aria-hidden="true"
                  />
                  <span className="text-[#8899bb]">{seg.name}</span>
                </div>
                <span className="text-white font-medium">{seg.value}%</span>
              </div>
              <div className="h-1 bg-white/[0.04] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: seg.fill }}
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
