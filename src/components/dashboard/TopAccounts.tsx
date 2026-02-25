"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import clsx from "clsx";

const accounts = [
  {
    name: "Meridian Corp",
    plan: "Enterprise",
    mrr: "$48,200",
    health: 98,
    healthLabel: "Healthy",
    delta: "+12%",
    up: true,
    avatar: "MC",
    avatarColor: "bg-blue-600",
  },
  {
    name: "Stratford Capital",
    plan: "Enterprise",
    mrr: "$32,500",
    health: 94,
    healthLabel: "Healthy",
    delta: "+5%",
    up: true,
    avatar: "SC",
    avatarColor: "bg-violet-600",
  },
  {
    name: "Velos Defense",
    plan: "Enterprise",
    mrr: "$28,900",
    health: 72,
    healthLabel: "At Risk",
    delta: "-3%",
    up: false,
    avatar: "VD",
    avatarColor: "bg-slate-600",
  },
  {
    name: "Arclight Systems",
    plan: "Growth",
    mrr: "$14,700",
    health: 89,
    healthLabel: "Healthy",
    delta: "+22%",
    up: true,
    avatar: "AS",
    avatarColor: "bg-cyan-600",
  },
  {
    name: "Ironclad Labs",
    plan: "Growth",
    mrr: "$11,200",
    health: 85,
    healthLabel: "Healthy",
    delta: "+8%",
    up: true,
    avatar: "IL",
    avatarColor: "bg-pink-600",
  },
];

export default function TopAccounts() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="bg-[#0d1526] border border-white/[0.06] rounded-2xl p-5"
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-sm font-semibold text-white">Top Accounts</h2>
          <p className="text-xs text-[#4a5a7a] mt-0.5">By monthly revenue</p>
        </div>
        <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
          View all
        </button>
      </div>

      <div className="overflow-x-auto -mx-1" role="region" aria-label="Top accounts table">
        <table className="w-full min-w-[480px]" aria-label="Top customer accounts">
          <thead>
            <tr>
              {["Account", "Plan", "MRR", "Health", "Trend"].map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="pb-3 text-left text-xs font-medium text-[#4a5a7a] uppercase tracking-wider first:pl-1 last:text-right"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {accounts.map((account, i) => (
              <motion.tr
                key={account.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.05 }}
                className="hover:bg-white/[0.02] transition-colors"
              >
                <td className="py-3 pl-1">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={clsx(
                        "w-7 h-7 rounded-lg flex items-center justify-center text-xs font-semibold text-white flex-shrink-0",
                        account.avatarColor
                      )}
                      aria-hidden="true"
                    >
                      {account.avatar}
                    </div>
                    <span className="text-xs font-medium text-white">
                      {account.name}
                    </span>
                  </div>
                </td>
                <td className="py-3">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-[#8899bb]">
                    {account.plan}
                  </span>
                </td>
                <td className="py-3 text-xs font-semibold text-white">
                  {account.mrr}
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                      <div
                        className={clsx(
                          "h-full rounded-full",
                          account.health >= 90
                            ? "bg-green-500"
                            : account.health >= 75
                            ? "bg-amber-500"
                            : "bg-red-500"
                        )}
                        style={{ width: `${account.health}%` }}
                        role="progressbar"
                        aria-valuenow={account.health}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${account.healthLabel} — ${account.health}%`}
                      />
                    </div>
                    <span
                      className={clsx(
                        "text-xs",
                        account.health >= 90
                          ? "text-green-400"
                          : account.health >= 75
                          ? "text-amber-400"
                          : "text-red-400"
                      )}
                    >
                      {account.healthLabel}
                    </span>
                  </div>
                </td>
                <td className="py-3 text-right">
                  <div
                    className={clsx(
                      "inline-flex items-center gap-1 text-xs font-medium",
                      account.up ? "text-green-400" : "text-red-400"
                    )}
                  >
                    {account.up ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    {account.delta}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
