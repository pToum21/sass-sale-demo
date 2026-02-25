"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Shield, Zap } from "lucide-react";

const FADE = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: "7rem",
        paddingBottom: "6rem",
      }}
    >
      {/* Background atmosphere */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Radial glows */}
        <div style={{
          position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)",
          width: "900px", height: "600px",
          background: "radial-gradient(ellipse, rgba(59,130,246,0.13) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", top: "20%", left: "10%",
          width: "500px", height: "500px",
          background: "radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", top: "30%", right: "5%",
          width: "400px", height: "400px",
          background: "radial-gradient(ellipse, rgba(6,182,212,0.06) 0%, transparent 70%)",
        }} />
        {/* Subtle grid */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.025,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }} />
      </div>

      <div className="section-outer" style={{ position: "relative" }}>

        {/* ── TEXT BLOCK ────────────────────────────────── */}
        <div style={{ textAlign: "center", maxWidth: "52rem", margin: "0 auto 4rem" }}>

          {/* Pill badge */}
          <motion.div {...FADE(0)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.35rem 1rem", borderRadius: "9999px", background: "rgba(59,130,246,0.1)", border: "1px solid rgba(96,165,250,0.25)", marginBottom: "1.75rem" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#60a5fa", animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "#60a5fa" }}>Now with AI-powered anomaly detection</span>
            <ArrowRight style={{ width: "0.75rem", height: "0.75rem", color: "#60a5fa" }} />
          </motion.div>

          {/* Headline */}
          <motion.h1 {...FADE(0.1)} style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, color: "white", marginBottom: "1.5rem" }}>
            Operations intelligence
            <br />
            <span className="gradient-text">built for scale.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p {...FADE(0.2)} style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", color: "#8899bb", lineHeight: 1.75, maxWidth: "38rem", margin: "0 auto 2.5rem" }}>
            Vantage centralizes your team&apos;s performance data, automates reporting,
            and surfaces insights before they become problems — all within a secure,
            enterprise-grade platform.
          </motion.p>

          {/* CTAs */}
          <motion.div {...FADE(0.3)} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <Link
              href="/dashboard"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.8rem 1.75rem", borderRadius: "0.75rem",
                background: "#2563eb", color: "white", fontWeight: 600, fontSize: "0.9375rem",
                textDecoration: "none", boxShadow: "0 8px 32px rgba(37,99,235,0.4)",
                transition: "background 0.2s, transform 0.2s",
              }}
            >
              Start for free
              <ArrowRight style={{ width: "1rem", height: "1rem" }} />
            </Link>
            <Link
              href="/dashboard"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.8rem 1.75rem", borderRadius: "0.75rem",
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.8)", fontWeight: 500, fontSize: "0.9375rem",
                textDecoration: "none", transition: "background 0.2s",
              }}
            >
              <Play style={{ width: "0.875rem", height: "0.875rem", fill: "currentColor", opacity: 0.8 }} />
              Watch demo
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.p {...FADE(0.4)} style={{ fontSize: "0.75rem", color: "#4a5a7a" }}>
            No credit card required &nbsp;·&nbsp; 14-day free trial &nbsp;·&nbsp; SOC 2 Type II certified
          </motion.p>
        </div>

        {/* ── DASHBOARD MOCKUP ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative", maxWidth: "72rem", margin: "0 auto" }}
        >
          {/* Glow beneath */}
          <div aria-hidden="true" style={{
            position: "absolute", bottom: "-3rem", left: "50%", transform: "translateX(-50%)",
            width: "70%", height: "5rem",
            background: "rgba(59,130,246,0.18)", filter: "blur(40px)", borderRadius: "9999px",
            pointerEvents: "none",
          }} />

          {/* Browser chrome */}
          <div style={{
            borderRadius: "1rem",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 40px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04) inset",
          }}>
            {/* Address bar */}
            <div style={{
              background: "#0d1526",
              padding: "0.75rem 1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{ display: "flex", gap: "0.375rem", flexShrink: 0 }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(239,68,68,0.5)" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(234,179,8,0.5)" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(34,197,94,0.5)" }} />
              </div>
              <div style={{ flex: 1, maxWidth: "280px", margin: "0 auto" }}>
                <div style={{ background: "#111e35", borderRadius: "0.375rem", padding: "0.25rem 0.75rem", fontSize: "0.6875rem", color: "#4a5a7a", textAlign: "center" }}>
                  app.vantage.io/dashboard
                </div>
              </div>
              <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
                <div style={{ padding: "0.25rem 0.625rem", borderRadius: "0.375rem", background: "rgba(37,99,235,0.2)", border: "1px solid rgba(96,165,250,0.2)", fontSize: "0.6rem", fontWeight: 600, color: "#60a5fa", letterSpacing: "0.05em" }}>
                  SOC 2 Verified
                </div>
              </div>
            </div>

            {/* App interior */}
            <div style={{ background: "#060b18", display: "flex", minHeight: "360px" }}>

              {/* Sidebar */}
              <div style={{ width: "52px", background: "#0a1020", borderRight: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column", alignItems: "center", padding: "1rem 0", gap: "0.5rem", flexShrink: 0 }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "0.5rem", background: "linear-gradient(135deg,#3b82f6,#7c3aed)", marginBottom: "1.25rem" }} />
                {[0,1,2,3,4].map(i => (
                  <div key={i} style={{ width: "32px", height: "32px", borderRadius: "0.5rem", background: i === 0 ? "rgba(59,130,246,0.2)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "14px", height: "14px", borderRadius: "3px", background: i === 0 ? "#60a5fa" : "rgba(255,255,255,0.15)" }} />
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div style={{ flex: 1, padding: "1.25rem", overflow: "hidden" }}>

                {/* Header row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "white" }}>Overview</div>
                    <div style={{ fontSize: "0.6rem", color: "#4a5a7a", marginTop: "2px" }}>Jan 1 – Dec 31, 2024</div>
                  </div>
                  <div style={{ display: "flex", gap: "0.375rem" }}>
                    <div style={{ padding: "0.25rem 0.625rem", borderRadius: "0.375rem", background: "#111e35", border: "1px solid rgba(255,255,255,0.06)", fontSize: "0.6rem", color: "#8899bb" }}>Export</div>
                    <div style={{ padding: "0.25rem 0.625rem", borderRadius: "0.375rem", background: "#2563eb", fontSize: "0.6rem", color: "white", fontWeight: 600 }}>+ New Report</div>
                  </div>
                </div>

                {/* KPI row */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.625rem", marginBottom: "1rem" }}>
                  {[
                    { label: "Active Users", value: "24,891", delta: "+12.4%", up: true },
                    { label: "Monthly Revenue", value: "$2.4M", delta: "+8.1%", up: true },
                    { label: "Avg Response", value: "142ms", delta: "−18%", up: true },
                    { label: "Open Incidents", value: "3", delta: "−60%", up: true },
                  ].map((kpi) => (
                    <div key={kpi.label} style={{ background: "#0d1526", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "0.625rem", padding: "0.625rem 0.75rem" }}>
                      <div style={{ fontSize: "0.55rem", color: "#4a5a7a", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{kpi.label}</div>
                      <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "white", lineHeight: 1 }}>{kpi.value}</div>
                      <div style={{ fontSize: "0.55rem", color: "#34d399", marginTop: "0.25rem", display: "flex", alignItems: "center", gap: "2px" }}>
                        <span>▲</span>{kpi.delta}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Charts row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 200px", gap: "0.625rem" }}>
                  {/* Area chart */}
                  <div style={{ background: "#0d1526", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "0.625rem", padding: "0.75rem" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.625rem" }}>
                      <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: "white" }}>Revenue Over Time</span>
                      <div style={{ display: "flex", gap: "0.25rem" }}>
                        {["1W","1M","3M","1Y"].map((t, i) => (
                          <button key={t} style={{ fontSize: "0.55rem", padding: "0.15rem 0.4rem", borderRadius: "0.25rem", border: "none", cursor: "pointer", background: i === 3 ? "#2563eb" : "transparent", color: i === 3 ? "white" : "#4a5a7a" }}>{t}</button>
                        ))}
                      </div>
                    </div>
                    <RevenueAreaChart />
                  </div>

                  {/* Segments */}
                  <div style={{ background: "#0d1526", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "0.625rem", padding: "0.75rem" }}>
                    <div style={{ fontSize: "0.6875rem", fontWeight: 600, color: "white", marginBottom: "0.75rem" }}>Top Segments</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                      {[
                        { name: "Enterprise", pct: 42, color: "#3b82f6" },
                        { name: "Mid-Market", pct: 31, color: "#7c3aed" },
                        { name: "Startup", pct: 18, color: "#06b6d4" },
                        { name: "Other", pct: 9, color: "#475569" },
                      ].map((seg) => (
                        <div key={seg.name}>
                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.6rem", marginBottom: "0.25rem" }}>
                            <span style={{ color: "#8899bb" }}>{seg.name}</span>
                            <span style={{ color: "white", fontWeight: 600 }}>{seg.pct}%</span>
                          </div>
                          <div style={{ height: "4px", background: "rgba(255,255,255,0.06)", borderRadius: "9999px", overflow: "hidden" }}>
                            <div style={{ height: "100%", width: `${seg.pct}%`, background: seg.color, borderRadius: "9999px" }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── TRUST BADGES ──────────────────────────────── */}
        <motion.div
          {...FADE(0.7)}
          style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1.5rem", marginTop: "3rem" }}
        >
          {[
            { icon: Shield, label: "SOC 2 Type II", sub: "Certified" },
            { icon: TrendingUp, label: "99.99% Uptime", sub: "SLA Guaranteed" },
            { icon: Zap, label: "200+ Integrations", sub: "No code required" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "0.5rem", background: "rgba(59,130,246,0.1)", border: "1px solid rgba(96,165,250,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon style={{ width: "0.875rem", height: "0.875rem", color: "#60a5fa" }} strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ fontSize: "0.8125rem", fontWeight: 600, color: "white", lineHeight: 1.2 }}>{label}</div>
                <div style={{ fontSize: "0.7rem", color: "#4a5a7a" }}>{sub}</div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

function RevenueAreaChart() {
  const points = [18, 26, 22, 35, 32, 45, 41, 56, 52, 63, 58, 78];
  const W = 400;
  const H = 80;
  const pad = 4;
  const max = Math.max(...points);
  const xs = points.map((_, i) => pad + (i / (points.length - 1)) * (W - pad * 2));
  const ys = points.map((v) => pad + (1 - v / max) * (H - pad * 2));

  const linePath = xs.map((x, i) => `${i === 0 ? "M" : "L"} ${x} ${ys[i]}`).join(" ");
  const areaPath = `${linePath} L ${xs[xs.length - 1]} ${H} L ${xs[0]} ${H} Z`;

  const months = ["J","F","M","A","M","J","J","A","S","O","N","D"];

  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "80px", display: "block" }} preserveAspectRatio="none">
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#areaGrad)" />
        <path d={linePath} fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Last point dot */}
        <circle cx={xs[xs.length - 1]} cy={ys[ys.length - 1]} r="3" fill="#60a5fa" />
      </svg>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.25rem" }}>
        {months.map((m, i) => (
          <span key={i} style={{ fontSize: "0.5rem", color: "#4a5a7a" }}>{m}</span>
        ))}
      </div>
    </div>
  );
}
