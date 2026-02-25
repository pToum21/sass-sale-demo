"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const accounts = [
  { name: "Meridian Corp",    plan: "Enterprise", mrr: "$48,200", health: 98, healthLabel: "Healthy",  delta: "+12%", up: true,  avatarBg: "#4f46e5" },
  { name: "Stratford Capital",plan: "Enterprise", mrr: "$32,500", health: 94, healthLabel: "Healthy",  delta: "+5%",  up: true,  avatarBg: "#7c3aed" },
  { name: "Velos Defense",    plan: "Enterprise", mrr: "$28,900", health: 72, healthLabel: "At Risk",   delta: "-3%",  up: false, avatarBg: "#475569" },
  { name: "Arclight Systems", plan: "Growth",     mrr: "$14,700", health: 89, healthLabel: "Healthy",  delta: "+22%", up: true,  avatarBg: "#0891b2" },
  { name: "Ironclad Labs",    plan: "Growth",     mrr: "$11,200", health: 85, healthLabel: "Healthy",  delta: "+8%",  up: true,  avatarBg: "#db2777" },
];

function healthColor(h: number) {
  if (h >= 90) return "#10b981";
  if (h >= 75) return "#f59e0b";
  return "#ef4444";
}

export default function TopAccounts() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      style={{ background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem" }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
        <div>
          <h2 style={{ fontSize: "0.875rem", fontWeight: 600, color: "white" }}>Top Accounts</h2>
          <p style={{ fontSize: "0.75rem", color: "#4a5a7a", marginTop: "0.125rem" }}>By monthly revenue</p>
        </div>
        <button style={{ fontSize: "0.75rem", color: "#818cf8", background: "transparent", border: "none", cursor: "pointer" }}>
          View all
        </button>
      </div>

      <div style={{ overflowX: "auto" }} role="region" aria-label="Top accounts table">
        <table style={{ width: "100%", minWidth: "480px", borderCollapse: "collapse" }} aria-label="Top customer accounts">
          <thead>
            <tr>
              {["Account", "Plan", "MRR", "Health", "Trend"].map((col, ci) => (
                <th
                  key={col}
                  scope="col"
                  style={{ paddingBottom: "0.75rem", textAlign: ci === 4 ? "right" : "left", fontSize: "0.7rem", fontWeight: 500, color: "#4a5a7a", textTransform: "uppercase", letterSpacing: "0.06em" }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {accounts.map((account, i) => (
              <motion.tr
                key={account.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.05 }}
                style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
              >
                <td style={{ padding: "0.75rem 0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                    <div
                      style={{ width: "28px", height: "28px", borderRadius: "0.5rem", background: account.avatarBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6875rem", fontWeight: 700, color: "white", flexShrink: 0 }}
                      aria-hidden="true"
                    >
                      {account.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                    </div>
                    <span style={{ fontSize: "0.8125rem", fontWeight: 500, color: "white" }}>{account.name}</span>
                  </div>
                </td>
                <td style={{ padding: "0.75rem 0" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", padding: "0.15rem 0.5rem", borderRadius: "0.375rem", background: "rgba(255,255,255,0.06)", fontSize: "0.75rem", color: "#8899bb" }}>
                    {account.plan}
                  </span>
                </td>
                <td style={{ padding: "0.75rem 0", fontSize: "0.8125rem", fontWeight: 600, color: "white" }}>
                  {account.mrr}
                </td>
                <td style={{ padding: "0.75rem 0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <div style={{ width: "64px", height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "9999px", overflow: "hidden" }}>
                      <div
                        style={{ height: "100%", width: `${account.health}%`, background: healthColor(account.health), borderRadius: "9999px" }}
                        role="progressbar"
                        aria-valuenow={account.health}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${account.healthLabel} — ${account.health}%`}
                      />
                    </div>
                    <span style={{ fontSize: "0.75rem", color: healthColor(account.health) }}>{account.healthLabel}</span>
                  </div>
                </td>
                <td style={{ padding: "0.75rem 0", textAlign: "right" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", fontSize: "0.8125rem", fontWeight: 500, color: account.up ? "#10b981" : "#ef4444" }}>
                    {account.up
                      ? <TrendingUp style={{ width: "0.75rem", height: "0.75rem" }} />
                      : <TrendingDown style={{ width: "0.75rem", height: "0.75rem" }} />
                    }
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
