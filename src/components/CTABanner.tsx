"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function CTABanner() {
  return (
    <section className="page-section" aria-labelledby="cta-heading">
      <div className="section-outer">
        <ScrollReveal animation="scaleUp">
          <div
            className="cta-banner-inner"
            style={{
              position: "relative",
              borderRadius: "1.5rem",
              overflow: "hidden",
              background: "linear-gradient(135deg, rgba(49,46,129,0.35) 0%, #0b1120 50%, rgba(88,28,135,0.25) 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "4rem 3rem",
              textAlign: "center",
            }}
          >
            {/* Glow orbs */}
            <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "300px", background: "rgba(99,102,241,0.13)", borderRadius: "50%", filter: "blur(80px)" }} />
              <div style={{ position: "absolute", top: "25%", right: "25%", width: "200px", height: "200px", background: "rgba(16,217,168,0.06)", borderRadius: "50%", filter: "blur(60px)" }} />
            </div>

            <div style={{ position: "relative" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "#818cf8", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "1rem" }}>
                Get Started Today
              </p>
              <h2
                id="cta-heading"
                style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 800, letterSpacing: "-0.035em", color: "white", lineHeight: 1.15, marginBottom: "1rem" }}
              >
                See what Vantage can do
                <br />
                <span className="gradient-text">for your team.</span>
              </h2>
              <p style={{ color: "#8899bb", fontSize: "1.0625rem", maxWidth: "34rem", margin: "0 auto 2.5rem", lineHeight: 1.75 }}>
                Start your free 14-day trial. No credit card required. Full access to all Growth features from day one.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                <Link
                  href="/dashboard"
                  className="btn-primary"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    padding: "0.875rem 2rem", fontSize: "0.9375rem", fontWeight: 700,
                    color: "white", background: "#4f46e5", borderRadius: "0.75rem",
                    textDecoration: "none", boxShadow: "0 8px 40px rgba(79,70,229,0.5)",
                  }}
                >
                  Start free trial
                  <ArrowRight style={{ width: "1rem", height: "1rem" }} />
                </Link>
                <Link
                  href="#pricing"
                  className="btn-secondary cta-view-pricing"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    padding: "0.875rem 2rem", fontSize: "0.9375rem", fontWeight: 500,
                    borderRadius: "0.75rem",
                    textDecoration: "none",
                  }}
                >
                  View pricing
                </Link>
              </div>
              <p style={{ marginTop: "1.25rem", fontSize: "0.75rem", color: "#4a5a7a" }}>
                14-day free trial &nbsp;·&nbsp; No credit card &nbsp;·&nbsp; Cancel anytime
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
