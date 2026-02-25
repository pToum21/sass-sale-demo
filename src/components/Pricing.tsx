"use client";

import { useState } from "react";
import { Check, Zap } from "lucide-react";
import Link from "next/link";
import ScrollReveal, { StaggerReveal } from "@/components/ScrollReveal";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: "For small teams getting started with operations intelligence.",
    cta: "Start free trial",
    href: "/dashboard",
    featured: false,
    features: [
      "Up to 5 users",
      "10 dashboards",
      "20 integrations",
      "7-day data history",
      "Email reports",
      "Community support",
    ],
  },
  {
    name: "Growth",
    monthlyPrice: 149,
    yearlyPrice: 119,
    description: "For scaling teams that need more power and collaboration.",
    cta: "Start free trial",
    href: "/dashboard",
    featured: true,
    badge: "Most popular",
    features: [
      "Up to 25 users",
      "Unlimited dashboards",
      "100+ integrations",
      "1-year data history",
      "Automated reporting",
      "AI anomaly detection",
      "Slack + email alerts",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    yearlyPrice: null,
    description: "For large organizations with advanced security and compliance needs.",
    cta: "Contact sales",
    href: "#",
    featured: false,
    features: [
      "Unlimited users",
      "Unlimited dashboards",
      "200+ integrations",
      "Unlimited data history",
      "Custom reporting & SLAs",
      "SSO & SCIM provisioning",
      "Role-based access control",
      "Dedicated CSM",
      "On-prem deployment option",
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section
      id="pricing"
      className="page-section"
      aria-labelledby="pricing-heading"
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden="true"
      />

      <div className="section-outer">
        {/* Header */}
        <ScrollReveal animation="fadeUp" className="section-header">
          <p style={{ fontSize: "0.7rem", fontWeight: 600, color: "#818cf8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
            Pricing
          </p>
          <h2
            id="pricing-heading"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "white", lineHeight: 1.2 }}
          >
            Simple, transparent pricing
          </h2>
          <p style={{ marginTop: "1rem", color: "#8899bb", fontSize: "1rem" }}>
            No hidden fees. Cancel anytime. Start free for 14 days.
          </p>

          {/* Toggle */}
          <div style={{ marginTop: "2rem", display: "inline-flex", alignItems: "center", gap: "0.25rem", background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "9999px", padding: "0.25rem" }}>
            <button
              onClick={() => setAnnual(false)}
              style={{
                padding: "0.5rem 1.25rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
                background: !annual ? "white" : "transparent",
                color: !annual ? "#060b18" : "#8899bb",
              }}
              aria-pressed={!annual}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1.25rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
                background: annual ? "white" : "transparent",
                color: annual ? "#060b18" : "#8899bb",
              }}
              aria-pressed={annual}
            >
              Annual
              <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "#16a34a", background: "#dcfce7", padding: "0.1rem 0.375rem", borderRadius: "9999px" }}>
                -20%
              </span>
            </button>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <StaggerReveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem", alignItems: "stretch" }} stagger={0.1}>
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                borderRadius: "1rem",
                padding: "2rem",
                border: plan.featured ? "1px solid rgba(99,102,241,0.45)" : "1px solid var(--border)",
                background: plan.featured
                  ? "linear-gradient(to bottom, rgba(79,70,229,0.18), var(--bg-surface))"
                  : "var(--bg-surface)",
                boxShadow: plan.featured ? "0 20px 60px rgba(49,46,129,0.3)" : "none",
                transform: plan.featured ? "scale(1.02)" : "none",
                transition: "border-color 0.2s",
              }}
            >
              {plan.badge && (
                <div style={{
                  position: "absolute",
                  top: "-0.75rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "9999px",
                  background: "#4f46e5",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  color: "white",
                  whiteSpace: "nowrap",
                }}>
                  <Zap style={{ width: "0.75rem", height: "0.75rem" }} />
                  {plan.badge}
                </div>
              )}

              <div style={{ marginBottom: "1.5rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "white", marginBottom: "0.25rem" }}>
                  {plan.name}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#8899bb" }}>{plan.description}</p>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                {plan.monthlyPrice ? (
                  <div style={{ display: "flex", alignItems: "flex-end", gap: "0.25rem" }}>
                    <span style={{ fontSize: "2.5rem", fontWeight: 700, color: "white", lineHeight: 1 }}>
                      ${annual ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span style={{ color: "#8899bb", fontSize: "0.875rem", paddingBottom: "0.25rem" }}>/mo</span>
                  </div>
                ) : (
                  <div style={{ fontSize: "2rem", fontWeight: 700, color: "white" }}>Custom</div>
                )}
                {plan.monthlyPrice && (
                  <p style={{ fontSize: "0.75rem", color: "#4a5a7a", marginTop: "0.25rem" }}>
                    {annual
                      ? `Billed annually — $${(plan.yearlyPrice! * 12).toLocaleString()}/yr`
                      : "Billed monthly"}
                  </p>
                )}
              </div>

              <Link
                href={plan.href}
                className={plan.featured ? "btn-primary" : "btn-secondary"}
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.75rem",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "white",
                  background: plan.featured ? "#4f46e5" : "rgba(255,255,255,0.08)",
                  border: plan.featured ? "none" : "1px solid rgba(255,255,255,0.1)",
                  marginBottom: "2rem",
                  textDecoration: "none",
                }}
              >
                {plan.cta}
              </Link>

              <ul style={{ listStyle: "none", padding: 0, marginTop: "auto", display: "flex", flexDirection: "column", gap: "0.75rem" }} role="list">
                {plan.features.map((feature) => (
                  <li key={feature} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontSize: "0.875rem" }}>
                    <Check
                      style={{ width: "1rem", height: "1rem", marginTop: "0.1rem", flexShrink: 0, color: plan.featured ? "#818cf8" : "#10d9a8" }}
                    />
                    <span style={{ color: "#8899bb" }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </StaggerReveal>

        {/* Bottom note */}
        <ScrollReveal animation="fadeIn" as="p" style={{ textAlign: "center", fontSize: "0.75rem", color: "#4a5a7a", marginTop: "2rem" }}>
          All plans include a 14-day free trial. No credit card required.
          Enterprise plans include custom data residency, advanced compliance
          controls, and dedicated infrastructure options.
        </ScrollReveal>
      </div>
    </section>
  );
}
