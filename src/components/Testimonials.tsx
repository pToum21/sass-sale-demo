"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Vantage replaced three separate tools we were paying for. Our team went from spending 8 hours a week on manual reporting to under 20 minutes. The ROI was obvious within the first month.",
    name: "Sarah Chen",
    title: "VP of Operations",
    company: "Meridian Corp",
    avatar: "SC",
    avatarBg: "#2563eb",
  },
  {
    quote:
      "The anomaly detection alone has saved us twice from serious issues that would have taken us hours to identify. I can't imagine running our platform without Vantage now.",
    name: "Marcus Rivera",
    title: "Head of Engineering",
    company: "Arclight Systems",
    avatar: "MR",
    avatarBg: "#7c3aed",
  },
  {
    quote:
      "We evaluated five platforms before choosing Vantage. The security posture and compliance certifications were non-negotiable for us, and the UX is genuinely the best I've seen in this category.",
    name: "Dana Wu",
    title: "CISO",
    company: "Stratford Capital",
    avatar: "DW",
    avatarBg: "#0891b2",
  },
  {
    quote:
      "Onboarding the whole team took a morning. The drag-and-drop dashboard builder is intuitive enough for non-technical stakeholders to manage their own views.",
    name: "James Okafor",
    title: "Director of Product",
    company: "Nexon Group",
    avatar: "JO",
    avatarBg: "#059669",
  },
  {
    quote:
      "Support response times are genuinely impressive. We had a P1 issue at 2am and had a resolution in under 10 minutes. That kind of reliability is worth every dollar.",
    name: "Priya Nair",
    title: "Platform Engineer",
    company: "Velos Defense",
    avatar: "PN",
    avatarBg: "#d97706",
  },
  {
    quote:
      "The integrations ecosystem is unmatched. We connected all of our existing tools in an afternoon and had fully automated reports running by end of day. Absolutely seamless.",
    name: "Tom Langley",
    title: "CTO",
    company: "Ironclad Labs",
    avatar: "TL",
    avatarBg: "#db2777",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="page-section"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden="true"
      />

      <div className="section-outer">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p style={{ fontSize: "0.7rem", fontWeight: 600, color: "#60a5fa", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
            Customer Stories
          </p>
          <h2
            id="testimonials-heading"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "white", lineHeight: 1.2 }}
          >
            Loved by teams that{" "}
            <span className="gradient-text">can&apos;t afford to guess.</span>
          </h2>
        </motion.div>

        <div style={{ columns: "1", columnGap: "1.25rem" }} className="testimonial-masonry">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
                borderRadius: "1rem",
                padding: "1.5rem",
              }}
              whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.14)" }}
            >
              <div style={{ display: "flex", gap: "0.125rem", marginBottom: "1rem" }} aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    style={{ width: "0.875rem", height: "0.875rem", fill: "#fbbf24", color: "#fbbf24" }}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p style={{ fontSize: "0.875rem", color: "#8899bb", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{ width: "2.25rem", height: "2.25rem", borderRadius: "9999px", background: t.avatarBg, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 600, color: "white" }}
                  aria-hidden="true"
                >
                  {t.avatar}
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "white" }}>{t.name}</p>
                  <p style={{ fontSize: "0.75rem", color: "#4a5a7a" }}>
                    {t.title} · {t.company}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
