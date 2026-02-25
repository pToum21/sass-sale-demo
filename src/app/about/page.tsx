"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Users, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FADE = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const stats = [
  { value: "2021", label: "Founded" },
  { value: "500+", label: "Enterprise customers" },
  { value: "12", label: "Countries" },
  { value: "47", label: "Team members" },
];

const values = [
  {
    icon: Zap,
    title: "Move fast",
    body: "Decisions can't wait for the next report cycle. We build for speed without sacrificing accuracy.",
  },
  {
    icon: Shield,
    title: "Security first",
    body: "Enterprise-grade from day one. SOC 2 Type II isn't a checkbox. It's how we operate.",
  },
  {
    icon: Users,
    title: "Customer obsessed",
    body: "We measure our success the same way our customers do. Their outcomes are our roadmap.",
  },
  {
    icon: TrendingUp,
    title: "Radical transparency",
    body: "No black boxes. Every insight Vantage surfaces is explainable, auditable, and traceable.",
  },
];

const team = [
  { name: "Alex Morgan",  role: "CEO & Co-founder",   bio: "Former ops lead at Scale Logistics. Built Vantage after one too many Excel nightmares.",   color: "linear-gradient(135deg, #4f46e5, #818cf8)" },
  { name: "Jordan Chen",  role: "CTO & Co-founder",   bio: "Ex-infrastructure eng at Stripe. Obsessed with systems that don't page you at 2am.",         color: "linear-gradient(135deg, #7c3aed, #c4b5fd)" },
  { name: "Sam Reyes",    role: "Head of Product",    bio: "Previously at Notion and Linear. Believes great tools get out of your way.",                  color: "linear-gradient(135deg, #0891b2, #67e8f9)" },
  { name: "Taylor Kim",   role: "VP Engineering",     bio: "Distributed systems veteran. Led platform teams at Cloudflare and Vercel.",                   color: "linear-gradient(135deg, #059669, #6ee7b7)" },
  { name: "Morgan Lee",   role: "VP Sales",           bio: "Grew revenue 0→$8M ARR at two previous startups. Doesn't do cold calls.",                    color: "linear-gradient(135deg, #d97706, #fcd34d)" },
  { name: "Casey Park",   role: "Head of Design",     bio: "Designed products used by millions at Figma and Airbnb. Pixel-perfect by default.",           color: "linear-gradient(135deg, #e11d48, #fda4af)" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "5rem" }}>

        {/* hero */}
        <section style={{ position: "relative", overflow: "hidden", paddingTop: "6rem", paddingBottom: "5rem" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <div style={{ position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)", width: "800px", height: "500px", background: "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)" }} />
            <div style={{ position: "absolute", inset: 0, opacity: 0.02, backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
          </div>
          <div className="section-outer" style={{ position: "relative", textAlign: "center" }}>
            <motion.div {...FADE(0)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.35rem 1rem", borderRadius: "9999px", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(129,140,248,0.28)", marginBottom: "1.75rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "#818cf8" }}>Our Story</span>
            </motion.div>
            <motion.h1 {...FADE(0.1)} style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, color: "white", marginBottom: "1.5rem", maxWidth: "44rem", margin: "0 auto 1.5rem" }}>
              Built by operators,{" "}
              <span className="gradient-text">for operators.</span>
            </motion.h1>
            <motion.p {...FADE(0.2)} style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", color: "#8899bb", lineHeight: 1.8, maxWidth: "36rem", margin: "0 auto" }}>
              Vantage started as an internal tool at a mid-size logistics company tired of the gap
              between their data and the decisions that depended on it. That frustration became a company.
            </motion.p>
          </div>
        </section>

        {/* stats */}
        <section style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="section-outer">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "rgba(255,255,255,0.04)" }}>
              {stats.map((s, i) => (
                <motion.div key={s.label} {...FADE(i * 0.08)} style={{ background: "#05080f", padding: "2.5rem 2rem", textAlign: "center" }}>
                  <div style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "white", marginBottom: "0.5rem" }}>
                    <span className="gradient-text">{s.value}</span>
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "#8899bb" }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* story */}
        <section className="page-section">
          <div className="section-outer">
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem", alignItems: "center" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }} className="how-it-works-grid">
                <motion.div {...FADE(0)}>
                  <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#818cf8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>The problem we solve</p>
                  <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "white", lineHeight: 1.2, marginBottom: "1.5rem" }}>
                    Data exists. Clarity doesn&apos;t.
                  </h2>
                  <p style={{ fontSize: "1rem", color: "#8899bb", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                    Most operations teams have dashboards. What they don&apos;t have is a single place
                    where those dashboards actually inform what happens next. Reports live in spreadsheets,
                    incidents get tracked in Slack threads, and the picture of what&apos;s really happening
                    only comes together when someone manually stitches it all together.
                  </p>
                  <p style={{ fontSize: "1rem", color: "#8899bb", lineHeight: 1.8 }}>
                    Vantage changes that. We centralize signal, automate the reporting layer, and surface
                    anomalies before they become incidents, so your team spends time acting, not assembling.
                  </p>
                </motion.div>
                <motion.div {...FADE(0.15)}>
                  <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "1.25rem", padding: "2rem" }}>
                    <div style={{ fontSize: "0.6875rem", fontWeight: 600, color: "#818cf8", marginBottom: "1.5rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>What changed for our customers</div>
                    {[
                      { before: "3 hours to build a weekly ops report", after: "Automated, delivered every Monday at 8am" },
                      { before: "Incidents discovered by customers first", after: "Anomaly detection flags issues in minutes" },
                      { before: "5 dashboards, zero shared context", after: "One source of truth across every team" },
                    ].map((item) => (
                      <div key={item.before} style={{ marginBottom: "1.25rem", paddingBottom: "1.25rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.4rem", alignItems: "flex-start" }}>
                          <span style={{ fontSize: "0.65rem", marginTop: "1px", color: "#4a5a7a", flexShrink: 0 }}>BEFORE</span>
                          <span style={{ fontSize: "0.8125rem", color: "#4a5a7a", lineHeight: 1.5 }}>{item.before}</span>
                        </div>
                        <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                          <span style={{ fontSize: "0.65rem", marginTop: "1px", color: "#10d9a8", flexShrink: 0 }}>AFTER</span>
                          <span style={{ fontSize: "0.8125rem", color: "white", lineHeight: 1.5 }}>{item.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* values */}
        <section className="page-section" style={{ paddingTop: "0" }}>
          <div className="section-outer">
            <motion.div {...FADE(0)} style={{ marginBottom: "3rem" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#818cf8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>What we believe</p>
              <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "white", lineHeight: 1.2 }}>
                The principles we build by
              </h2>
            </motion.div>
            <div className="card-grid">
              {values.map((v, i) => (
                <motion.div key={v.title} {...FADE(i * 0.1)} className="card-interactive" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "1rem", padding: "1.75rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "0.625rem", background: "rgba(99,102,241,0.12)", border: "1px solid rgba(129,140,248,0.18)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                    <v.icon style={{ width: "1.125rem", height: "1.125rem", color: "#818cf8" }} strokeWidth={1.8} />
                  </div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "white", marginBottom: "0.625rem" }}>{v.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "#8899bb", lineHeight: 1.7 }}>{v.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* team */}
        <section className="page-section" style={{ paddingTop: "0" }}>
          <div className="section-outer">
            <motion.div {...FADE(0)} style={{ marginBottom: "3rem" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#818cf8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>The team</p>
              <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "white", lineHeight: 1.2 }}>
                People who&apos;ve lived the problem
              </h2>
            </motion.div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
              {team.map((member, i) => (
                <motion.div key={member.name} {...FADE(i * 0.08)} className="card-interactive" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "1rem", padding: "1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "0.75rem", background: member.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.8125rem", fontWeight: 700, color: "white" }}>
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "white", marginBottom: "0.2rem" }}>{member.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "#818cf8", marginBottom: "0.625rem" }}>{member.role}</div>
                    <div style={{ fontSize: "0.8125rem", color: "#8899bb", lineHeight: 1.6 }}>{member.bio}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "5rem 0" }}>
          <div className="section-outer" style={{ textAlign: "center" }}>
            <motion.div {...FADE(0)} style={{ background: "linear-gradient(135deg, rgba(49,46,129,0.35), rgba(11,17,32,0.8))", border: "1px solid rgba(99,102,241,0.25)", borderRadius: "1.5rem", padding: "4rem 2rem", position: "relative", overflow: "hidden" }}>
              <div aria-hidden="true" style={{ position: "absolute", top: "-40%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "300px", background: "radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
              <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#818cf8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>Get started today</p>
              <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "white", marginBottom: "1rem", position: "relative" }}>
                Ready to see it in action?
              </h2>
              <p style={{ fontSize: "1rem", color: "#8899bb", marginBottom: "2rem", position: "relative" }}>
                Explore the live dashboard demo or reach out. We&apos;d love to show you around.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center", position: "relative" }}>
                <Link href="/dashboard" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.75rem", borderRadius: "0.75rem", background: "#4f46e5", color: "white", fontWeight: 600, fontSize: "0.9375rem", textDecoration: "none", boxShadow: "0 8px 32px rgba(79,70,229,0.45)" }}>
                  View dashboard
                  <ArrowRight style={{ width: "1rem", height: "1rem" }} />
                </Link>
                <Link href="/contact" className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.75rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.8)", fontWeight: 500, fontSize: "0.9375rem", textDecoration: "none" }}>
                  Talk to us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
