"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Shield, Zap } from "lucide-react";
import { Parallax } from "@/components/ScrollReveal";
import VantageLogo from "@/components/VantageLogo";

const FADE = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

/* ─── chart datasets ─── */
type TabKey = "1W" | "1M" | "3M" | "1Y";
const TABS: TabKey[] = ["1W", "1M", "3M", "1Y"];

const CHART_DATA: Record<TabKey, number[]> = {
  "1W": [64, 67, 72, 68, 74, 71, 78],
  "1M": [55, 58, 62, 59, 65, 63, 68, 71, 67, 73, 70, 78],
  "3M": [42, 45, 48, 52, 49, 55, 58, 56, 62, 65, 68, 72, 75, 74, 78, 76, 80, 78],
  "1Y": [18, 26, 22, 35, 32, 45, 41, 56, 52, 63, 58, 78],
};

const CHART_LABELS: Record<TabKey, string[]> = {
  "1W": ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  "1M": ["1", "", "", "4", "", "", "8", "", "", "12", "", ""],
  "3M": ["Aug", "", "", "", "", "", "Sep", "", "", "", "", "", "Oct", "", "", "", "", ""],
  "1Y": ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
};

const DATE_RANGE: Record<TabKey, string> = {
  "1W": "Oct 25 – Oct 31, 2024",
  "1M": "Oct 1 – Oct 31, 2024",
  "3M": "Aug 1 – Oct 31, 2024",
  "1Y": "Jan 1 – Dec 31, 2024",
};

/* ─── animation helper ─── */
function animateValue(
  from: number,
  to: number,
  duration: number,
  setter: (v: number) => void,
): () => void {
  const t0 = performance.now();
  let raf: number;
  const tick = (now: number) => {
    const p = Math.min((now - t0) / duration, 1);
    const e = 1 - Math.pow(1 - p, 3);
    setter(from + (to - from) * e);
    if (p < 1) raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(raf);
}

/* ─── Hero ─── */
export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{ position: "relative", overflow: "hidden", paddingTop: "7rem", paddingBottom: "6rem" }}
    >
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <Parallax speed={0.15}>
          <div style={{ position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)", width: "900px", height: "600px", background: "radial-gradient(ellipse, rgba(99,102,241,0.14) 0%, transparent 70%)" }} />
        </Parallax>
        <div style={{ position: "absolute", top: "20%", left: "10%", width: "500px", height: "500px", background: "radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", top: "30%", right: "5%", width: "400px", height: "400px", background: "radial-gradient(ellipse, rgba(16,217,168,0.05) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.025, backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      </div>

      <div className="section-outer" style={{ position: "relative" }}>

        <div style={{ textAlign: "center", maxWidth: "52rem", margin: "0 auto 4rem" }}>
          <motion.div {...FADE(0)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.35rem 1rem", borderRadius: "9999px", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(129,140,248,0.28)", marginBottom: "1.75rem" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#818cf8", animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "#818cf8" }}>Now with AI-powered anomaly detection</span>
            <ArrowRight style={{ width: "0.75rem", height: "0.75rem", color: "#818cf8" }} />
          </motion.div>

          <motion.h1 {...FADE(0.1)} style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, color: "white", marginBottom: "1.5rem" }}>
            Operations intelligence
            <br />
            <span className="gradient-text">built for scale.</span>
          </motion.h1>

          <motion.p {...FADE(0.2)} style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", color: "#8899bb", lineHeight: 1.75, maxWidth: "38rem", margin: "0 auto 2.5rem" }}>
            Vantage centralizes your team&apos;s performance data, automates reporting,
            and surfaces insights before they become problems, all within a secure,
            enterprise-grade platform.
          </motion.p>

          <motion.div {...FADE(0.3)} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <Link href="/dashboard" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.75rem", borderRadius: "0.75rem", background: "#4f46e5", color: "white", fontWeight: 600, fontSize: "0.9375rem", textDecoration: "none", boxShadow: "0 8px 32px rgba(79,70,229,0.45)" }}>
              Start for free
              <ArrowRight style={{ width: "1rem", height: "1rem" }} />
            </Link>
            <Link href="/dashboard" className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.75rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", fontWeight: 500, fontSize: "0.9375rem", textDecoration: "none", color: "rgba(255,255,255,0.8)" }}>
              <Play style={{ width: "0.875rem", height: "0.875rem", fill: "currentColor", opacity: 0.8 }} />
              Watch demo
            </Link>
          </motion.div>

          <motion.p {...FADE(0.4)} style={{ fontSize: "0.75rem", color: "#4a5a7a" }}>
            No credit card required &nbsp;·&nbsp; 14-day free trial &nbsp;·&nbsp; SOC 2 Type II certified
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 64, scale: 0.94, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative", maxWidth: "72rem", margin: "0 auto" }}
        >
          <div aria-hidden="true" style={{ position: "absolute", bottom: "-3rem", left: "50%", transform: "translateX(-50%)", width: "70%", height: "5rem", background: "rgba(99,102,241,0.2)", filter: "blur(40px)", borderRadius: "9999px", pointerEvents: "none" }} />

          <div style={{ borderRadius: "1rem", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 40px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04) inset" }}>
            {/* browser chrome */}
            <div style={{ background: "#0d1526", padding: "0.75rem 1rem", display: "flex", alignItems: "center", gap: "0.75rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
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
                <div style={{ padding: "0.25rem 0.625rem", borderRadius: "0.375rem", background: "rgba(79,70,229,0.2)", border: "1px solid rgba(129,140,248,0.25)", fontSize: "0.6rem", fontWeight: 600, color: "#818cf8", letterSpacing: "0.05em" }}>
                  SOC 2 Verified
                </div>
              </div>
            </div>

            {/* live dashboard content */}
            <LiveDashboard />
          </div>
        </motion.div>

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
              <div style={{ width: "32px", height: "32px", borderRadius: "0.5rem", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(129,140,248,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon style={{ width: "0.875rem", height: "0.875rem", color: "#818cf8" }} strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.2 }}>{label}</div>
                <div style={{ fontSize: "0.7rem", color: "#4a5a7a" }}>{sub}</div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

/* ─── LiveDashboard ─── */
function LiveDashboard() {
  const [started, setStarted] = useState(false);
  const [chartReveal, setChartReveal] = useState(0);
  const [chartKey, setChartKey] = useState(0);
  const [barReveal, setBarReveal] = useState(0);

  const [users, setUsers] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [response, setResponse] = useState(0);
  const [incidents, setIncidents] = useState(0);

  const [activeTab, setActiveTab] = useState<TabKey>("1Y");
  const [activeNav, setActiveNav] = useState(0);
  const [flashKpi, setFlashKpi] = useState<number | null>(null);
  const [userDelta, setUserDelta] = useState<number | null>(null);

  // kick off after the hero entry animation settles
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 950);
    return () => clearTimeout(t);
  }, []);

  // KPI count-ups
  useEffect(() => {
    if (!started) return;
    const cleanups = [
      animateValue(0, 24891, 1400, v => setUsers(Math.round(v))),
      animateValue(0, 24,    1200, v => setRevenue(Math.round(v * 10) / 10)),
      animateValue(0, 142,   1000, v => setResponse(Math.round(v))),
      animateValue(0, 3,      800, v => setIncidents(Math.round(v))),
    ];
    return () => cleanups.forEach(c => c());
  }, [started]);

  // bar fill
  useEffect(() => {
    if (!started) return;
    const t = setTimeout(
      () => animateValue(0, 1, 1100, v => setBarReveal(v)),
      200,
    );
    return () => clearTimeout(t);
  }, [started]);

  // chart reveal — re-runs whenever chartKey increments
  useEffect(() => {
    if (!started) return;
    return animateValue(0, 100, 1500, v => setChartReveal(v));
  }, [started, chartKey]);

  // live update loop
  useEffect(() => {
    if (!started) return;

    let tick = 0;
    let tabIdx = TABS.indexOf("1Y");
    let loopId: ReturnType<typeof setInterval>;

    const run = () => {
      tick++;

      // cycle the active time-range tab
      tabIdx = (tabIdx + 1) % TABS.length;
      setActiveTab(TABS[tabIdx]);
      setChartReveal(0);
      setChartKey(k => k + 1);

      // rotate the active sidebar nav item every other cycle
      if (tick % 2 === 0) setActiveNav(n => (n + 1) % 5);

      // flash a KPI card every 3 cycles
      if (tick % 3 === 0) {
        const idx = Math.floor(Math.random() * 4);
        setFlashKpi(idx);
        if (idx === 0) {
          const delta = Math.floor(Math.random() * 50 + 10);
          setUserDelta(delta);
          setUsers(u => u + delta);
        }
        setTimeout(() => { setFlashKpi(null); setUserDelta(null); }, 1800);
      }
    };

    const startDelay = setTimeout(() => {
      loopId = setInterval(run, 4500);
    }, 3200);

    return () => { clearTimeout(startDelay); clearInterval(loopId); };
  }, [started]);

  const segments = [
    { name: "Enterprise", pct: 42, color: "#6366f1" },
    { name: "Mid-Market", pct: 31, color: "#8b5cf6" },
    { name: "Startup",    pct: 18, color: "#06b6d4" },
    { name: "Other",      pct: 9,  color: "#475569" },
  ];

  const kpis = [
    { label: "Active Users",    value: users.toLocaleString(),                       delta: "+12.4%", flash: flashKpi === 0 },
    { label: "Monthly Revenue", value: `$${(revenue / 10).toFixed(1)}M`,             delta: "+8.1%",  flash: flashKpi === 1 },
    { label: "Avg Response",    value: `${response}ms`,                              delta: "−18%",   flash: flashKpi === 2 },
    { label: "Open Incidents",  value: String(incidents),                            delta: "−60%",   flash: flashKpi === 3 },
  ];

  return (
    <div style={{ background: "#05080f", display: "flex", minHeight: "360px" }}>

      {/* sidebar */}
      <div style={{ width: "52px", background: "#0a1020", borderRight: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column", alignItems: "center", padding: "1rem 0", gap: "0.5rem", flexShrink: 0 }}>
        <div style={{ marginBottom: "1.25rem" }}>
          <VantageLogo variant="mark" size={22} />
        </div>
        {[0, 1, 2, 3, 4].map(i => (
          <div
            key={i}
            style={{
              width: "32px", height: "32px", borderRadius: "0.5rem",
              background: i === activeNav ? "rgba(99,102,241,0.2)" : "transparent",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.4s",
            }}
          >
            <div style={{
              width: "14px", height: "14px", borderRadius: "3px",
              background: i === activeNav ? "#818cf8" : "rgba(255,255,255,0.15)",
              transition: "background 0.4s",
            }} />
          </div>
        ))}
      </div>

      {/* main content */}
      <div style={{ flex: 1, padding: "1.25rem", overflow: "hidden" }}>

        {/* header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
          <div>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "white" }}>Overview</div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
                style={{ fontSize: "0.6rem", color: "#4a5a7a", marginTop: "2px" }}
              >
                {DATE_RANGE[activeTab]}
              </motion.div>
            </AnimatePresence>
          </div>
          <div style={{ display: "flex", gap: "0.375rem" }}>
            <div style={{ padding: "0.25rem 0.625rem", borderRadius: "0.375rem", background: "#111e35", border: "1px solid rgba(255,255,255,0.06)", fontSize: "0.6rem", color: "#8899bb" }}>Export</div>
            <div style={{ padding: "0.25rem 0.625rem", borderRadius: "0.375rem", background: "#4f46e5", fontSize: "0.6rem", color: "white", fontWeight: 600 }}>+ New Report</div>
          </div>
        </div>

        {/* KPI row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.625rem", marginBottom: "1rem" }}>
          {kpis.map((kpi, i) => (
            <div
              key={kpi.label}
              style={{
                background: "#0d1526",
                border: `1px solid ${kpi.flash ? "rgba(52,211,153,0.5)" : "rgba(255,255,255,0.06)"}`,
                borderRadius: "0.625rem",
                padding: "0.625rem 0.75rem",
                position: "relative",
                boxShadow: kpi.flash ? "0 0 14px rgba(52,211,153,0.12)" : "none",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
            >
              <div style={{ fontSize: "0.55rem", color: "#4a5a7a", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{kpi.label}</div>
              <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "white", lineHeight: 1 }}>{kpi.value}</div>
              <div style={{ fontSize: "0.55rem", color: "#34d399", marginTop: "0.25rem", display: "flex", alignItems: "center", gap: "2px" }}>
                <span>▲</span>{kpi.delta}
              </div>
              {/* live user bump badge */}
              <AnimatePresence>
                {i === 0 && userDelta !== null && (
                  <motion.div
                    key="delta"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      position: "absolute", top: "4px", right: "6px",
                      background: "#34d399", color: "#05080f",
                      fontSize: "0.45rem", fontWeight: 800,
                      padding: "1px 4px", borderRadius: "4px",
                      lineHeight: 1.4,
                    }}
                  >
                    +{userDelta}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* charts row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 200px", gap: "0.625rem" }}>

          {/* area chart */}
          <div style={{ background: "#0d1526", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "0.625rem", padding: "0.75rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.625rem" }}>
              <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: "white" }}>Revenue Over Time</span>
              <div style={{ display: "flex", gap: "0.25rem" }}>
                {TABS.map(t => (
                  <div
                    key={t}
                    style={{
                      fontSize: "0.55rem", padding: "0.15rem 0.4rem", borderRadius: "0.25rem",
                      background: t === activeTab ? "#4f46e5" : "transparent",
                      color: t === activeTab ? "white" : "#4a5a7a",
                      transition: "background 0.3s, color 0.3s",
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <AnimatedChart tab={activeTab} reveal={chartReveal} />
          </div>

          {/* segments */}
          <div style={{ background: "#0d1526", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "0.625rem", padding: "0.75rem" }}>
            <div style={{ fontSize: "0.6875rem", fontWeight: 600, color: "white", marginBottom: "0.75rem" }}>Top Segments</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {segments.map(seg => (
                <div key={seg.name}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.6rem", marginBottom: "0.25rem" }}>
                    <span style={{ color: "#8899bb" }}>{seg.name}</span>
                    <span style={{ color: "white", fontWeight: 600 }}>{seg.pct}%</span>
                  </div>
                  <div style={{ height: "4px", background: "rgba(255,255,255,0.06)", borderRadius: "9999px", overflow: "hidden" }}>
                    <div style={{
                      height: "100%",
                      width: `${seg.pct * barReveal}%`,
                      background: seg.color,
                      borderRadius: "9999px",
                      transition: "width 0.05s linear",
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ─── AnimatedChart ─── */
function AnimatedChart({ tab, reveal }: { tab: TabKey; reveal: number }) {
  const points = CHART_DATA[tab];
  const labels = CHART_LABELS[tab];
  const W = 400, H = 80, pad = 4;
  const max = Math.max(...points);
  const xs = points.map((_, i) => pad + (i / (points.length - 1)) * (W - pad * 2));
  const ys = points.map(v => pad + (1 - v / max) * (H - pad * 2));
  const linePath = xs.map((x, i) => `${i === 0 ? "M" : "L"} ${x} ${ys[i]}`).join(" ");
  const areaPath = `${linePath} L ${xs[xs.length - 1]} ${H} L ${xs[0]} ${H} Z`;

  return (
    <div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: "100%", height: "80px", display: "block" }}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
          <clipPath id="heroChartClip">
            <rect x="0" y="0" width={`${reveal}%`} height="100%" />
          </clipPath>
        </defs>
        <g clipPath="url(#heroChartClip)">
          <path d={areaPath} fill="url(#heroAreaGrad)" />
          <path d={linePath} fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        {reveal > 97 && (
          <circle cx={xs[xs.length - 1]} cy={ys[ys.length - 1]} r="3" fill="#10d9a8" />
        )}
      </svg>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.25rem" }}>
        {labels.map((l, i) => (
          <span key={i} style={{ fontSize: "0.5rem", color: "#4a5a7a" }}>{l}</span>
        ))}
      </div>
    </div>
  );
}
