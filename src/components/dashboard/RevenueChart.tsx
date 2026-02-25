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
    <div className="bg-[#111e35] border border-white/10 rounded-xl p-3 shadow-2xl text-xs">
      <p className="text-[#8899bb] font-medium mb-2">{label}</p>
      {payload.map((p) => (
        <div key={p.name} className="flex items-center justify-between gap-4 mb-1">
          <div className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: p.color }}
            />
            <span className="text-[#8899bb]">{p.name}</span>
          </div>
          <span className="font-semibold text-white">{formatCurrency(p.value)}</span>
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
      className="bg-[#0d1526] border border-white/[0.06] rounded-2xl p-5"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <h2 className="text-sm font-semibold text-white">Revenue Overview</h2>
          <p className="text-xs text-[#4a5a7a] mt-0.5">
            MRR, new ARR, and churn over time
          </p>
        </div>
        <div
          className="flex items-center gap-1 bg-[#111e35] border border-white/[0.06] rounded-lg p-1"
          role="group"
          aria-label="Date range"
        >
          {ranges.map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                range === r
                  ? "bg-blue-600 text-white"
                  : "text-[#4a5a7a] hover:text-white"
              }`}
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
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
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
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#gradMRR)"
              dot={false}
              activeDot={{ r: 4, fill: "#3b82f6" }}
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
