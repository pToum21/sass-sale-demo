"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Info, UserPlus, TrendingUp, Zap } from "lucide-react";
import clsx from "clsx";

const activities = [
  {
    icon: TrendingUp,
    color: "text-green-400",
    bg: "bg-green-400/10",
    title: "Revenue milestone reached",
    description: "MRR crossed $2.4M for the first time",
    time: "2 min ago",
    type: "success",
  },
  {
    icon: AlertCircle,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    title: "Anomaly detected",
    description: "API latency spike on /v2/reports endpoint — P2",
    time: "14 min ago",
    type: "warning",
  },
  {
    icon: UserPlus,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    title: "New enterprise signup",
    description: "Meridian Corp upgraded to Enterprise plan",
    time: "1 hr ago",
    type: "info",
  },
  {
    icon: CheckCircle2,
    color: "text-green-400",
    bg: "bg-green-400/10",
    title: "Incident resolved",
    description: "INC-0481: Database failover — resolved in 4m 12s",
    time: "3 hrs ago",
    type: "success",
  },
  {
    icon: Zap,
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    title: "Integration deployed",
    description: "Salesforce connector updated to v3.2",
    time: "6 hrs ago",
    type: "info",
  },
  {
    icon: Info,
    color: "text-[#8899bb]",
    bg: "bg-white/[0.05]",
    title: "Scheduled maintenance",
    description: "Database compaction window — 02:00–03:00 UTC",
    time: "Yesterday",
    type: "neutral",
  },
];

export default function ActivityFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.4 }}
      className="bg-[#0d1526] border border-white/[0.06] rounded-2xl p-5"
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-sm font-semibold text-white">Activity Feed</h2>
          <p className="text-xs text-[#4a5a7a] mt-0.5">
            Recent events and alerts
          </p>
        </div>
        <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
          View all
        </button>
      </div>

      <ol className="space-y-1" aria-label="Recent activity">
        {activities.map((item, i) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
            className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-colors cursor-default"
          >
            <div className={clsx("p-1.5 rounded-lg flex-shrink-0 mt-0.5", item.bg)}>
              <item.icon
                className={clsx("w-3.5 h-3.5", item.color)}
                strokeWidth={1.8}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-white">{item.title}</p>
              <p className="text-xs text-[#4a5a7a] truncate mt-0.5">
                {item.description}
              </p>
            </div>
            <time
              className="text-xs text-[#2a3a5a] flex-shrink-0 mt-0.5"
              dateTime={item.time}
            >
              {item.time}
            </time>
          </motion.li>
        ))}
      </ol>
    </motion.div>
  );
}
