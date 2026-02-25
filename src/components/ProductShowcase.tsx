"use client";

import { useEffect, useRef } from "react";
import { registerGsap, gsap, ScrollTrigger } from "@/lib/gsap";
import {
  BarChart3, Bell, FileText, TrendingUp, TrendingDown,
  AlertCircle, CheckCircle2, Play, Filter, Plus, Zap, ArrowRight,
  Download,
} from "lucide-react";
import Link from "next/link";

const showcases = [
  {
    tag: "Analytics",
    tagColor: "#6366f1",
    headline: ["Real-time data,", "zero lag."],
    body: "Every metric, chart, and KPI refreshes the moment your data changes. Drill into any dimension, build custom views for every stakeholder, and share snapshots in one click.",
    cta: "Explore analytics",
    screen: "analytics",
    flip: false,
  },
  {
    tag: "Intelligent Alerts",
    tagColor: "#f59e0b",
    headline: ["Catch anomalies", "before they escalate."],
    body: "Vantage's AI models learn your traffic patterns and financial baselines. When something drifts, you know instantly. Not after the damage is done.",
    cta: "See how alerts work",
    screen: "alerts",
    flip: true,
  },
  {
    tag: "Automated Reports",
    tagColor: "#10b981",
    headline: ["Reports that", "write themselves."],
    body: "Schedule polished reports to any inbox, on any cadence. Choose from templates or build custom layouts. Vantage handles delivery and archiving automatically.",
    cta: "View report builder",
    screen: "reports",
    flip: false,
  },
];

export default function ProductShowcase() {
  return (
    <section id="product" aria-label="Product features" style={{ padding: "6rem 0", overflow: "hidden" }}>
      {showcases.map((s, i) => (
        <ShowcaseRow key={s.tag} data={s} index={i} />
      ))}
    </section>
  );
}

function ShowcaseRow({ data, index }: { data: typeof showcases[0]; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const row = rowRef.current;
    const text = textRef.current;
    const img = imgRef.current;
    const glow = glowRef.current;
    if (!row || !text || !img) return;

    const ctx = gsap.context(() => {
      const textChildren = Array.from(text.children);
      const imgXFrom = data.flip ? -90 : 90;

      // Text children: staggered, scrub-linked
      gsap.fromTo(
        textChildren,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: { each: 0.1 },
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            end: "top 35%",
            scrub: 1.6,
          },
        }
      );

      // Screenshot: 3D perspective slide, scrub-linked
      gsap.fromTo(
        img,
        { opacity: 0, x: imgXFrom, rotateY: data.flip ? 10 : -10, scale: 0.92 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            end: "top 30%",
            scrub: 1.8,
          },
        }
      );

      // Glow parallax
      if (glow) {
        gsap.to(glow, {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: row,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    }, row);

    return () => ctx.revert();
  }, [data.flip]);

  return (
    <div
      ref={rowRef}
      style={{
        position: "relative",
        padding: "5rem 0",
        marginBottom: index < showcases.length - 1 ? "2rem" : 0,
      }}
    >
      {/* Ambient glow */}
      <div
        ref={glowRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          left: data.flip ? "auto" : "-5%",
          right: data.flip ? "-5%" : "auto",
          width: "600px",
          height: "600px",
          background: `radial-gradient(ellipse, ${data.tagColor}12 0%, transparent 65%)`,
          pointerEvents: "none",
          borderRadius: "50%",
        }}
      />

      <div className="section-outer">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
            direction: data.flip ? "rtl" : "ltr",
          }}
          className="showcase-row-inner"
        >
          {/* Text */}
          <div ref={textRef} style={{ direction: "ltr" }}>
            {/* Tag */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.3rem 0.875rem", borderRadius: "9999px",
              background: `${data.tagColor}15`,
              border: `1px solid ${data.tagColor}30`,
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: data.tagColor, display: "inline-block" }} />
              <span style={{ fontSize: "0.7rem", fontWeight: 700, color: data.tagColor, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {data.tag}
              </span>
            </div>

            {/* Headline — each line is its own element for stagger */}
            <div style={{ marginTop: "1.25rem" }}>
              {data.headline.map((line, li) => (
                <h2
                  key={li}
                  style={{
                    fontSize: "clamp(2rem, 3.8vw, 3rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.035em",
                    color: "white",
                    lineHeight: 1.12,
                    display: "block",
                  }}
                >
                  {li === data.headline.length - 1 ? (
                    <span className="gradient-text">{line}</span>
                  ) : line}
                </h2>
              ))}
            </div>

            {/* Body */}
            <p style={{ marginTop: "1.5rem", color: "#8899bb", fontSize: "1rem", lineHeight: 1.8, maxWidth: "30rem" }}>
              {data.body}
            </p>

            {/* CTA */}
            <Link
              href="/dashboard"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                marginTop: "2rem",
                fontSize: "0.9375rem", fontWeight: 600, color: data.tagColor,
                textDecoration: "none", transition: "gap 0.2s",
              }}
            >
              {data.cta}
              <ArrowRight style={{ width: "1rem", height: "1rem" }} />
            </Link>
          </div>

          {/* Screenshot */}
          <div ref={imgRef} style={{ direction: "ltr", perspective: "1200px" }}>
            <div style={{
              borderRadius: "1rem",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: `0 40px 100px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.03) inset, 0 0 80px ${data.tagColor}18`,
              transformStyle: "preserve-3d",
            }}>
              {/* Chrome */}
              <div style={{ background: "#0a1020", padding: "0.625rem 1rem", display: "flex", alignItems: "center", gap: "0.75rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ display: "flex", gap: "0.375rem" }}>
                  {["rgba(239,68,68,0.45)", "rgba(234,179,8,0.45)", "rgba(34,197,94,0.45)"].map((c, ci) => (
                    <div key={ci} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
                  ))}
                </div>
                <div style={{ flex: 1, textAlign: "center" }}>
                  <div style={{ display: "inline-block", background: "#111e35", borderRadius: "0.375rem", padding: "0.2rem 1rem", fontSize: "0.6875rem", color: "#4a5a7a" }}>
                    app.vantage.io/{data.tag.toLowerCase().replace(" ", "-")}
                  </div>
                </div>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: data.tagColor + "80" }} />
              </div>
              {/* Screen */}
              <div style={{ background: "#05080f" }}>
                {data.screen === "analytics" && <AnalyticsScreen accent={data.tagColor} />}
                {data.screen === "alerts" && <AlertsScreen accent={data.tagColor} />}
                {data.screen === "reports" && <ReportsScreen accent={data.tagColor} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsScreen({ accent }: { accent: string }) {
  const bars = [42, 55, 48, 67, 61, 78, 72, 85, 80, 92, 88, 100];
  const months = ["J","F","M","A","M","J","J","A","S","O","N","D"];
  const W = 500, H = 100;
  const pts = bars.map((v, i) => `${(i / (bars.length - 1)) * W},${H - (v / 100) * H}`);
  const line = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p}`).join(" ");
  const area = `${line} L ${W} ${H} L 0 ${H} Z`;

  return (
    <div style={{ padding: "1.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
        <div>
          <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "white" }}>Revenue Analytics</div>
          <div style={{ fontSize: "0.7rem", color: "#4a5a7a", marginTop: "2px" }}>Jan – Dec 2024 · Live</div>
        </div>
        <div style={{ display: "flex", gap: "0.25rem" }}>
          {["3M","6M","1Y","ALL"].map((t, i) => (
            <button key={t} style={{ padding: "0.25rem 0.625rem", fontSize: "0.65rem", borderRadius: "0.25rem", border: "none", cursor: "pointer", background: i === 2 ? accent : "#111e35", color: i === 2 ? "white" : "#4a5a7a", fontWeight: 600 }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0.625rem", marginBottom: "1.25rem" }}>
        {[
          { l: "MRR", v: "$2.41M", d: "+8.1%" },
          { l: "ARR", v: "$28.9M", d: "+11%" },
          { l: "Churn", v: "1.8%", d: "-0.4%" },
          { l: "NRR", v: "118%", d: "+3pp" },
        ].map(k => (
          <div key={k.l} style={{ background: "#0d1526", borderRadius: "0.625rem", padding: "0.75rem", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: "0.6rem", color: "#4a5a7a", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.3rem" }}>{k.l}</div>
            <div style={{ fontSize: "1.125rem", fontWeight: 700, color: "white", lineHeight: 1 }}>{k.v}</div>
            <div style={{ fontSize: "0.6rem", color: "#10b981", marginTop: "0.25rem" }}>▲ {k.d}</div>
          </div>
        ))}
      </div>

      <div style={{ background: "#0d1526", borderRadius: "0.75rem", padding: "1rem", border: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.875rem" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "white" }}>Monthly Recurring Revenue</span>
          <div style={{ display: "flex", gap: "1rem" }}>
            {[{ c: accent, l: "MRR" }, { c: "#8b5cf6", l: "New ARR" }, { c: "#ef4444", l: "Churn" }].map(s => (
              <div key={s.l} style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.65rem", color: "#8899bb" }}>
                <span style={{ width: "10px", height: "2px", background: s.c, display: "inline-block", borderRadius: "1px" }} />{s.l}
              </div>
            ))}
          </div>
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100px", display: "block" }} preserveAspectRatio="none">
          <defs>
            <linearGradient id="aGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
              <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={area} fill="url(#aGrad2)" />
          <path d={line} fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx={pts[pts.length-1].split(",")[0]} cy={pts[pts.length-1].split(",")[1]} r="4" fill={accent} />
        </svg>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.375rem" }}>
          {months.map((m, i) => <span key={i} style={{ fontSize: "0.55rem", color: "#4a5a7a" }}>{m}</span>)}
        </div>
      </div>
    </div>
  );
}

function AlertsScreen({ accent }: { accent: string }) {
  const alerts = [
    { icon: AlertCircle, color: "#ef4444", bg: "rgba(239,68,68,0.1)", title: "API Latency Spike", desc: "/v2/reports: p99 exceeded 2.1s threshold", sev: "P1", time: "2 min", isNew: true },
    { icon: TrendingDown, color: "#f59e0b", bg: "rgba(245,158,11,0.1)", title: "Conversion Rate Drop", desc: "Funnel step 3 dropped 18% in the last hour", sev: "P2", time: "14 min", isNew: true },
    { icon: CheckCircle2, color: "#10b981", bg: "rgba(16,185,129,0.1)", title: "Revenue Target Hit", desc: "Monthly goal of $2.4M reached ahead of schedule", sev: "INFO", time: "1 hr", isNew: false },
    { icon: Bell, color: "#a78bfa", bg: "rgba(167,139,250,0.1)", title: "Report Delivered", desc: "Weekly executive digest sent to 12 recipients", sev: "INFO", time: "2 hr", isNew: false },
  ];

  return (
    <div style={{ padding: "1.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
        <div>
          <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "white" }}>Alert Center</div>
          <div style={{ fontSize: "0.7rem", color: "#4a5a7a", marginTop: "2px" }}>2 active incidents · AI monitoring 847 metrics</div>
        </div>
        <button style={{ display: "flex", alignItems: "center", gap: "0.375rem", padding: "0.4rem 0.875rem", background: accent, borderRadius: "0.5rem", border: "none", fontSize: "0.7rem", fontWeight: 700, color: "white", cursor: "pointer" }}>
          <Plus style={{ width: "0.75rem", height: "0.75rem" }} /> New Rule
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0.625rem", marginBottom: "1.25rem" }}>
        {[{ l: "Active", v: "2", c: "#ef4444" }, { l: "Resolved", v: "41", c: "#10b981" }, { l: "Suppressed", v: "7", c: "#4a5a7a" }, { l: "Rules", v: "124", c: "#a78bfa" }].map(s => (
          <div key={s.l} style={{ background: "#0d1526", borderRadius: "0.625rem", padding: "0.75rem", border: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 700, color: s.c, lineHeight: 1 }}>{s.v}</div>
            <div style={{ fontSize: "0.6rem", color: "#4a5a7a", marginTop: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {alerts.map((a, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.75rem", background: "#0d1526", borderRadius: "0.75rem", border: `1px solid ${a.isNew ? a.color + "35" : "rgba(255,255,255,0.06)"}` }}>
            <div style={{ padding: "0.375rem", borderRadius: "0.5rem", background: a.bg, flexShrink: 0, marginTop: "0.1rem" }}>
              <a.icon style={{ width: "0.875rem", height: "0.875rem", color: a.color }} strokeWidth={2} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "white" }}>{a.title}</span>
                <span style={{ fontSize: "0.55rem", padding: "0.1rem 0.4rem", borderRadius: "0.25rem", background: a.color + "22", color: a.color, fontWeight: 700 }}>{a.sev}</span>
                {a.isNew && <span style={{ fontSize: "0.55rem", padding: "0.1rem 0.4rem", borderRadius: "0.25rem", background: accent + "22", color: accent, fontWeight: 700 }}>NEW</span>}
              </div>
              <div style={{ fontSize: "0.65rem", color: "#4a5a7a", marginTop: "0.2rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{a.desc}</div>
            </div>
            <span style={{ fontSize: "0.65rem", color: "#2a3a5a", flexShrink: 0, marginTop: "0.15rem" }}>{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportsScreen({ accent }: { accent: string }) {
  const templates = [
    { name: "Executive Summary", icon: BarChart3, uses: 48, color: "#6366f1" },
    { name: "Weekly Ops Digest", icon: TrendingUp, uses: 31, color: "#10b981" },
    { name: "Churn Analysis", icon: TrendingDown, uses: 22, color: "#f59e0b" },
    { name: "Growth Report", icon: Zap, uses: 19, color: "#a78bfa" },
  ];
  const recent = [
    { name: "Q4 Board Package", status: "Delivered", statusColor: "#10b981", time: "Mon 9:00 AM" },
    { name: "Weekly Ops Digest", status: "Scheduled", statusColor: "#818cf8", time: "Fri 8:00 AM" },
    { name: "Investor Update", status: "Draft", statusColor: "#8899bb", time: "—" },
  ];

  return (
    <div style={{ padding: "1.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
        <div>
          <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "white" }}>Report Center</div>
          <div style={{ fontSize: "0.7rem", color: "#4a5a7a", marginTop: "2px" }}>Automated delivery · 3 scheduled this week</div>
        </div>
        <div style={{ display: "flex", gap: "0.375rem" }}>
          <button style={{ display: "flex", alignItems: "center", gap: "0.3rem", padding: "0.375rem 0.75rem", background: "#111e35", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "0.5rem", fontSize: "0.7rem", color: "#8899bb", cursor: "pointer" }}>
            <Filter style={{ width: "0.75rem", height: "0.75rem" }} /> Filter
          </button>
          <button style={{ display: "flex", alignItems: "center", gap: "0.3rem", padding: "0.375rem 0.75rem", background: accent, border: "none", borderRadius: "0.5rem", fontSize: "0.7rem", color: "white", fontWeight: 700, cursor: "pointer" }}>
            <Plus style={{ width: "0.75rem", height: "0.75rem" }} /> New
          </button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div>
          <div style={{ fontSize: "0.65rem", fontWeight: 600, color: "#4a5a7a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>Templates</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {templates.map(t => (
              <div key={t.name} style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.625rem 0.75rem", background: "#0d1526", borderRadius: "0.625rem", border: "1px solid rgba(255,255,255,0.06)", cursor: "pointer" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "0.5rem", background: t.color + "18", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <t.icon style={{ width: "0.75rem", height: "0.75rem", color: t.color }} strokeWidth={2} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "white", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{t.name}</div>
                  <div style={{ fontSize: "0.6rem", color: "#4a5a7a" }}>{t.uses} uses</div>
                </div>
                <Play style={{ width: "0.5625rem", height: "0.5625rem", color: "#4a5a7a", fill: "#4a5a7a", flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: "0.65rem", fontWeight: 600, color: "#4a5a7a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>Recent Reports</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {recent.map(r => (
              <div key={r.name} style={{ padding: "0.75rem", background: "#0d1526", borderRadius: "0.625rem", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.375rem" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "white", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "120px" }}>{r.name}</span>
                  <span style={{ fontSize: "0.6rem", padding: "0.1rem 0.4rem", borderRadius: "9999px", background: r.statusColor + "18", color: r.statusColor, fontWeight: 600, flexShrink: 0 }}>{r.status}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "0.6rem", color: "#4a5a7a" }}>{r.time}</span>
                  <Download style={{ width: "0.625rem", height: "0.625rem", color: "#4a5a7a" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
