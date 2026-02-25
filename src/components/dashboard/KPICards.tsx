"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Users, DollarSign, Activity, AlertTriangle } from "lucide-react";
import clsx from "clsx";

const kpis = [
  {
    label: "Monthly Recurring Revenue",
    value: "$2,412,300",
    delta: "+8.1%",
    deltaLabel: "vs last month",
    up: true,
    icon: DollarSign,
    iconBg: "bg-green-400/10",
    iconColor: "text-green-400",
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
    iconBg: "bg-blue-400/10",
    iconColor: "text-blue-400",
    sparkline: [40, 55, 50, 60, 58, 70, 65, 78, 72, 85, 80, 95],
    sparkColor: "#3b82f6",
  },
  {
    label: "Avg Response Time",
    value: "142ms",
    delta: "-18.3%",
    deltaLabel: "vs last month",
    up: true,
    note: "lower is better",
    icon: Activity,
    iconBg: "bg-violet-400/10",
    iconColor: "text-violet-400",
    sparkline: [90, 80, 85, 70, 75, 65, 60, 55, 58, 50, 48, 45],
    sparkColor: "#7c3aed",
  },
  {
    label: "Open Incidents",
    value: "3",
    delta: "-60%",
    deltaLabel: "vs last month",
    up: true,
    note: "lower is better",
    icon: AlertTriangle,
    iconBg: "bg-amber-400/10",
    iconColor: "text-amber-400",
    sparkline: [12, 10, 8, 11, 9, 7, 8, 6, 5, 4, 4, 3],
    sparkColor: "#f59e0b",
  },
];

function Sparkline({
  data,
  color,
}: {
  data: number[];
  color: string;
}) {
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
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className="overflow-visible"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`grad-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.3} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function KPICards() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"
      role="region"
      aria-label="Key performance indicators"
    >
      {kpis.map((kpi, i) => (
        <motion.div
          key={kpi.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          className="bg-[#0d1526] border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-5 transition-all duration-200 hover:-translate-y-0.5"
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs text-[#4a5a7a] font-medium">{kpi.label}</p>
              <p className="text-2xl font-bold text-white mt-1">{kpi.value}</p>
            </div>
            <div className={clsx("p-2 rounded-xl", kpi.iconBg)}>
              <kpi.icon
                className={clsx("w-4 h-4", kpi.iconColor)}
                strokeWidth={1.8}
              />
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                {kpi.up ? (
                  <TrendingUp className="w-3.5 h-3.5 text-green-400" />
                ) : (
                  <TrendingDown className="w-3.5 h-3.5 text-red-400" />
                )}
                <span
                  className={clsx(
                    "text-xs font-semibold",
                    kpi.up ? "text-green-400" : "text-red-400"
                  )}
                >
                  {kpi.delta}
                </span>
              </div>
              <p className="text-xs text-[#4a5a7a] mt-0.5">{kpi.deltaLabel}</p>
              {kpi.note && (
                <p className="text-xs text-[#2a3a5a] mt-0.5">{kpi.note}</p>
              )}
            </div>
            <Sparkline data={kpi.sparkline} color={kpi.sparkColor} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
