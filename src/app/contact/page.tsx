"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Mail, MapPin, Twitter, Linkedin, Github, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FADE = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const INQUIRY_TYPES = ["Sales", "Support", "Partnerships", "Press", "Other"] as const;
type InquiryType = typeof INQUIRY_TYPES[number];

interface FormState {
  name: string;
  email: string;
  company: string;
  type: InquiryType;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const inputStyle = (hasError: boolean): React.CSSProperties => ({
  width: "100%",
  background: "rgba(255,255,255,0.03)",
  border: `1px solid ${hasError ? "rgba(239,68,68,0.6)" : "rgba(255,255,255,0.08)"}`,
  borderRadius: "0.625rem",
  padding: "0.75rem 1rem",
  fontSize: "0.9375rem",
  color: "white",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box" as const,
});

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.8125rem",
  fontWeight: 500,
  color: "#8899bb",
  marginBottom: "0.5rem",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    type: "Sales",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email address";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1300);
  };

  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "5rem" }}>

        {/* header */}
        <section style={{ position: "relative", overflow: "hidden", paddingTop: "5rem", paddingBottom: "4rem" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <div style={{ position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)", width: "700px", height: "400px", background: "radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)" }} />
          </div>
          <div className="section-outer" style={{ position: "relative", textAlign: "center" }}>
            <motion.div {...FADE(0)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.35rem 1rem", borderRadius: "9999px", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(129,140,248,0.28)", marginBottom: "1.75rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "#818cf8" }}>Contact Us</span>
            </motion.div>
            <motion.h1 {...FADE(0.1)} style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, color: "white", marginBottom: "1rem" }}>
              Let&apos;s start a{" "}
              <span className="gradient-text">conversation.</span>
            </motion.h1>
            <motion.p {...FADE(0.2)} style={{ fontSize: "1rem", color: "#8899bb", lineHeight: 1.75, maxWidth: "32rem", margin: "0 auto" }}>
              Whether you&apos;re evaluating Vantage for your team or need help with something specific,
              we&apos;re happy to talk.
            </motion.p>
          </div>
        </section>

        {/* content */}
        <section style={{ paddingBottom: "6rem" }}>
          <div className="section-outer">
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }} className="how-it-works-grid">

              {/* form */}
              <motion.div {...FADE(0.1)}>
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.25 }}
                      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "1.25rem", padding: "2rem" }}
                      noValidate
                    >
                      <h2 style={{ fontSize: "1.125rem", fontWeight: 700, color: "white", marginBottom: "1.75rem" }}>
                        Send us a message
                      </h2>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                        <div>
                          <label htmlFor="name" style={labelStyle}>Name *</label>
                          <input
                            id="name"
                            type="text"
                            placeholder="Alex Morgan"
                            value={form.name}
                            onChange={e => update("name", e.target.value)}
                            style={inputStyle(!!errors.name)}
                          />
                          {errors.name && <p style={{ fontSize: "0.75rem", color: "#f87171", marginTop: "0.375rem" }}>{errors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="email" style={labelStyle}>Work email *</label>
                          <input
                            id="email"
                            type="email"
                            placeholder="alex@company.com"
                            value={form.email}
                            onChange={e => update("email", e.target.value)}
                            style={inputStyle(!!errors.email)}
                          />
                          {errors.email && <p style={{ fontSize: "0.75rem", color: "#f87171", marginTop: "0.375rem" }}>{errors.email}</p>}
                        </div>
                      </div>

                      <div style={{ marginBottom: "1rem" }}>
                        <label htmlFor="company" style={labelStyle}>Company</label>
                        <input
                          id="company"
                          type="text"
                          placeholder="Acme Corp"
                          value={form.company}
                          onChange={e => update("company", e.target.value)}
                          style={inputStyle(false)}
                        />
                      </div>

                      <div style={{ marginBottom: "1rem" }}>
                        <label style={labelStyle}>What can we help with?</label>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                          {INQUIRY_TYPES.map(type => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => update("type", type)}
                              style={{
                                padding: "0.4rem 1rem",
                                borderRadius: "9999px",
                                fontSize: "0.8125rem",
                                fontWeight: 500,
                                cursor: "pointer",
                                border: `1px solid ${form.type === type ? "rgba(129,140,248,0.5)" : "rgba(255,255,255,0.08)"}`,
                                background: form.type === type ? "rgba(99,102,241,0.15)" : "transparent",
                                color: form.type === type ? "#818cf8" : "#8899bb",
                                transition: "all 0.15s",
                              }}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div style={{ marginBottom: "1.75rem" }}>
                        <label htmlFor="message" style={labelStyle}>Message *</label>
                        <textarea
                          id="message"
                          rows={5}
                          placeholder="Tell us what you're working on..."
                          value={form.message}
                          onChange={e => update("message", e.target.value)}
                          style={{ ...inputStyle(!!errors.message), resize: "vertical", fontFamily: "inherit", lineHeight: 1.6 }}
                        />
                        {errors.message && <p style={{ fontSize: "0.75rem", color: "#f87171", marginTop: "0.375rem" }}>{errors.message}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary"
                        style={{
                          width: "100%",
                          padding: "0.875rem",
                          borderRadius: "0.75rem",
                          background: "#4f46e5",
                          color: "white",
                          fontWeight: 600,
                          fontSize: "0.9375rem",
                          border: "none",
                          cursor: loading ? "not-allowed" : "pointer",
                          opacity: loading ? 0.7 : 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.5rem",
                          boxShadow: "0 6px 24px rgba(79,70,229,0.4)",
                          transition: "opacity 0.2s",
                        }}
                      >
                        {loading ? (
                          <>
                            <Loader2 style={{ width: "1rem", height: "1rem", animation: "spin 1s linear infinite" }} />
                            Sending...
                          </>
                        ) : "Send message"}
                      </button>
                      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(52,211,153,0.25)", borderRadius: "1.25rem", padding: "4rem 2rem", textAlign: "center" }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.15, duration: 0.4, type: "spring", stiffness: 200 }}
                        style={{ marginBottom: "1.5rem" }}
                      >
                        <CheckCircle style={{ width: "3rem", height: "3rem", color: "#10d9a8", margin: "0 auto" }} />
                      </motion.div>
                      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "white", marginBottom: "0.75rem" }}>
                        Message sent
                      </h2>
                      <p style={{ fontSize: "0.9375rem", color: "#8899bb", lineHeight: 1.7, marginBottom: "2rem" }}>
                        Thanks for reaching out{form.name ? `, ${form.name.split(" ")[0]}` : ""}. We&apos;ll get back to you at{" "}
                        <span style={{ color: "#818cf8" }}>{form.email}</span> within one business day.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", type: "Sales", message: "" }); }}
                        style={{ fontSize: "0.875rem", color: "#818cf8", background: "transparent", border: "none", cursor: "pointer", textDecoration: "underline" }}
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* info sidebar */}
              <motion.div {...FADE(0.2)} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "1.25rem", padding: "1.75rem" }}>
                  <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "white", marginBottom: "1.25rem" }}>Contact info</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {[
                      { icon: Mail, label: "Sales",   value: "sales@vantage.io" },
                      { icon: Mail, label: "Support", value: "support@vantage.io" },
                      { icon: MapPin, label: "HQ",    value: "Washington, DC" },
                    ].map(item => (
                      <div key={item.label} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                        <div style={{ width: "34px", height: "34px", borderRadius: "0.5rem", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(129,140,248,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <item.icon style={{ width: "0.875rem", height: "0.875rem", color: "#818cf8" }} strokeWidth={1.8} />
                        </div>
                        <div>
                          <div style={{ fontSize: "0.7rem", color: "#4a5a7a", marginBottom: "0.15rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.label}</div>
                          <div style={{ fontSize: "0.875rem", color: "#8899bb" }}>{item.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "1.25rem", padding: "1.75rem" }}>
                  <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "white", marginBottom: "1rem" }}>Response times</h3>
                  {[
                    { type: "Sales",   time: "Within 4 hours" },
                    { type: "Support", time: "Within 1 business day" },
                    { type: "Other",   time: "Within 2 business days" },
                  ].map(item => (
                    <div key={item.type} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "0.75rem", marginBottom: "0.75rem", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                      <span style={{ fontSize: "0.8125rem", color: "#8899bb" }}>{item.type}</span>
                      <span style={{ fontSize: "0.8125rem", color: "#10d9a8", fontWeight: 500 }}>{item.time}</span>
                    </div>
                  ))}
                </div>

                <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "1.25rem", padding: "1.75rem" }}>
                  <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "white", marginBottom: "1rem" }}>Follow along</h3>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    {[
                      { icon: Github,   href: "https://github.com/peytontouma",                       label: "GitHub" },
                      { icon: Twitter,  href: "https://twitter.com/peytontouma",                      label: "Twitter" },
                      { icon: Linkedin, href: "https://www.linkedin.com/in/peyton-touma",             label: "LinkedIn" },
                    ].map(s => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon-btn"
                        aria-label={s.label}
                        style={{ width: "40px", height: "40px", borderRadius: "0.625rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#8899bb", textDecoration: "none" }}
                      >
                        <s.icon style={{ width: "1rem", height: "1rem" }} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
