"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import VantageLogo from "@/components/VantageLogo";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#05080f",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      position: "relative",
      overflow: "hidden",
      textAlign: "center",
    }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
          width: "700px", height: "400px",
          background: "radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 65%)",
          borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute", bottom: "15%", left: "25%",
          width: "400px", height: "400px",
          background: "radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 65%)",
          borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute", inset: 0, opacity: 0.025,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ position: "absolute", top: "2rem", left: "50%", transform: "translateX(-50%)" }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <VantageLogo size={26} />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "relative", maxWidth: "36rem" }}
      >
        <div style={{
          fontSize: "clamp(6rem, 20vw, 10rem)",
          fontWeight: 900,
          letterSpacing: "-0.06em",
          lineHeight: 1,
          marginBottom: "1.5rem",
          background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.04) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          userSelect: "none",
        }}>
          404
        </div>

        <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 700, color: "white", letterSpacing: "-0.02em", marginBottom: "1rem", lineHeight: 1.2 }}>
          Nothing here.
        </h1>

        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "1rem",
          padding: "1.5rem 2rem",
          marginBottom: "2.5rem",
        }}>
          <p style={{ fontSize: "0.9375rem", color: "#8899bb", lineHeight: 1.75 }}>
            This is a personal project — most of the nav links are stubs that don&apos;t go anywhere yet.
            The <Link href="/" style={{ color: "#818cf8", textDecoration: "none" }}>homepage</Link> and{" "}
            <Link href="/dashboard" style={{ color: "#818cf8", textDecoration: "none" }}>dashboard</Link> are the actual work.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
          <Link
            href="/"
            className="btn-primary"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.75rem 1.5rem", borderRadius: "0.75rem",
              background: "#4f46e5", color: "white",
              fontWeight: 600, fontSize: "0.9375rem", textDecoration: "none",
              boxShadow: "0 6px 24px rgba(79,70,229,0.4)",
            }}
          >
            <ArrowLeft style={{ width: "1rem", height: "1rem" }} />
            Back to homepage
          </Link>
          <Link
            href="/dashboard"
            className="btn-secondary"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.75rem 1.5rem", borderRadius: "0.75rem",
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.75)", fontWeight: 500, fontSize: "0.9375rem",
              textDecoration: "none",
            }}
          >
            View dashboard
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
