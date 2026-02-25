"use client";

import {
  BarChart3,
  Zap,
  Shield,
  GitMerge,
  Bell,
  Users,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import ScrollReveal, { StaggerReveal } from "@/components/ScrollReveal";

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Live dashboards update the moment data changes. Drill into any metric with one click and build custom views for every stakeholder.",
    color: "#818cf8",
    iconBg: "rgba(99,102,241,0.12)",
  },
  {
    icon: Zap,
    title: "Automated Reporting",
    description:
      "Schedule and deliver beautiful reports to any audience. Eliminate manual exports — Vantage handles formatting, delivery, and archiving automatically.",
    color: "#fbbf24",
    iconBg: "rgba(251,191,36,0.1)",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 Type II certified. Data encrypted at rest and in transit. Role-based access controls, SSO, and full audit logs for every action.",
    color: "#34d399",
    iconBg: "rgba(52,211,153,0.1)",
  },
  {
    icon: GitMerge,
    title: "200+ Integrations",
    description:
      "Connect your existing stack in minutes. Native connectors for Salesforce, HubSpot, Jira, Slack, AWS, and hundreds more. No code required.",
    color: "#a78bfa",
    iconBg: "rgba(167,139,250,0.1)",
  },
  {
    icon: Bell,
    title: "Intelligent Alerts",
    description:
      "AI-powered anomaly detection flags issues before they escalate. Route alerts by severity, team, or policy — delivered to Slack, email, or PagerDuty.",
    color: "#22d3ee",
    iconBg: "rgba(34,211,238,0.1)",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Shared workspaces, comment threads on any chart, and version-controlled dashboards. Everyone works from the same source of truth.",
    color: "#f472b6",
    iconBg: "rgba(244,114,182,0.1)",
  },
];


export default function Features() {
  return (
    <section
      id="features"
      className="page-section"
      aria-labelledby="features-heading"
    >
      {/* Background accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          right: 0,
          width: "24rem",
          height: "24rem",
          background: "rgba(124,58,237,0.05)",
          borderRadius: "9999px",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <div className="section-outer">
        {/* Section header */}
        <ScrollReveal animation="fadeUp" className="section-header">
          <p style={{ fontSize: "0.7rem", fontWeight: 600, color: "#818cf8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
            Platform Features
          </p>
          <h2
            id="features-heading"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "white", lineHeight: 1.2 }}
          >
            Everything you need.{" "}
            <span className="gradient-text">Nothing you don&apos;t.</span>
          </h2>
          <p style={{ marginTop: "1rem", color: "#8899bb", fontSize: "1rem", lineHeight: 1.7 }}>
            Vantage is built to replace five tools with one — without the
            complexity that usually comes with consolidation.
          </p>
        </ScrollReveal>

        {/* Feature grid */}
        <StaggerReveal className="card-grid" stagger={0.07}>
          {features.map((f) => (
            <article
              key={f.title}
              className="card-interactive"
              style={{
                padding: "1.5rem",
                borderRadius: "1rem",
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
                cursor: "default",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  padding: "0.625rem",
                  borderRadius: "0.75rem",
                  background: f.iconBg,
                  marginBottom: "1rem",
                }}
              >
                <f.icon style={{ width: "1.25rem", height: "1.25rem", color: f.color }} strokeWidth={1.8} />
              </div>
              <h3 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "white", marginBottom: "0.5rem" }}>
                {f.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#8899bb", lineHeight: 1.65 }}>
                {f.description}
              </p>
            </article>
          ))}
        </StaggerReveal>

        {/* How it works */}
        <ScrollReveal
          id="how-it-works"
          animation="scaleUp"
          style={{
            marginTop: "5rem",
            borderRadius: "1.25rem",
            background: "var(--bg-surface)",
            border: "1px solid var(--border)",
            padding: "2.5rem",
          }}
          as="div"
        >
          <div className="how-it-works-grid">
            <div>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, color: "#a78bfa", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
                How It Works
              </p>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "white", marginBottom: "1rem", lineHeight: 1.25 }}>
                Up and running in under an hour
              </h2>
              <p style={{ color: "#8899bb", marginBottom: "1.5rem", fontSize: "0.9375rem", lineHeight: 1.7 }}>
                Connect your data sources, configure your dashboards, and invite
                your team — Vantage handles the rest. No professional services
                engagement required.
              </p>
              <ol style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  "Connect your data sources via 200+ native integrations",
                  "Configure dashboards and reports with drag-and-drop builders",
                  "Set alert policies and share access with your team",
                  "Monitor, collaborate, and act on insights in real time",
                ].map((step, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <span style={{
                      flexShrink: 0,
                      width: "1.5rem",
                      height: "1.5rem",
                      borderRadius: "9999px",
                      background: "rgba(99,102,241,0.15)",
                      border: "1px solid rgba(129,140,248,0.3)",
                      color: "#818cf8",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "0.1rem",
                    }}>
                      {i + 1}
                    </span>
                    <span style={{ fontSize: "0.875rem", color: "#8899bb", lineHeight: 1.6 }}>{step}</span>
                  </li>
                ))}
              </ol>
              <Link
                href="/dashboard"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "2rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "#818cf8",
                  textDecoration: "none",
                }}
              >
                Explore the platform
                <ArrowRight style={{ width: "1rem", height: "1rem" }} />
              </Link>
            </div>
            <div className="mini-stats-grid">
              {[
                { label: "Time to First Insight", value: "< 1 hr", sub: "average onboarding" },
                { label: "Data Sources", value: "200+", sub: "native connectors" },
                { label: "Uptime SLA", value: "99.99%", sub: "enterprise guarantee" },
                { label: "Support Response", value: "< 2 min", sub: "median P1 response" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    padding: "1.25rem",
                    borderRadius: "0.75rem",
                    background: "var(--bg-surface-2)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "white" }}>{s.value}</p>
                  <p style={{ fontSize: "0.75rem", color: "#8899bb", marginTop: "0.25rem" }}>{s.label}</p>
                  <p style={{ fontSize: "0.7rem", color: "#4a5a7a", marginTop: "0.2rem" }}>{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
