import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";
import VantageLogo from "@/components/VantageLogo";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#" },
    { label: "Roadmap", href: "#" },
    { label: "Dashboard", href: "/dashboard" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Integrations", href: "#" },
    { label: "Status", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Security", href: "#" },
    { label: "Compliance", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{ position: "relative", borderTop: "1px solid rgba(255,255,255,0.05)", background: "#05080f" }}
      role="contentinfo"
    >
      <div className="section-outer" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "inline-block", marginBottom: "1rem", textDecoration: "none" }}>
              <VantageLogo size={26} />
            </Link>
            <p style={{ fontSize: "0.875rem", color: "#4a5a7a", lineHeight: 1.7, maxWidth: "18rem" }}>
              Operations intelligence for enterprise teams. Real-time analytics,
              automated reporting, and AI-powered insights.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem" }}>
              {[
                { icon: Twitter, label: "Twitter", href: "https://twitter.com/peytontouma" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/peyton-touma" },
                { icon: Github, label: "GitHub — view source", href: "https://github.com/peytontouma" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-icon-btn"
                  style={{ width: "32px", height: "32px", borderRadius: "0.5rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "#4a5a7a", textDecoration: "none" }}
                >
                  <Icon style={{ width: "0.875rem", height: "0.875rem" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 style={{ fontSize: "0.7rem", fontWeight: 600, color: "white", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
                {category}
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }} role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link" style={{ fontSize: "0.875rem", color: "#4a5a7a", textDecoration: "none" }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", marginBottom: "0.75rem" }}>
            <p style={{ fontSize: "0.75rem", color: "#4a5a7a" }}>
              © {new Date().getFullYear()} Vantage Technologies, Inc. All rights reserved.
            </p>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", padding: "0.25rem 0.75rem", borderRadius: "9999px", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", fontSize: "0.75rem", color: "#34d399" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34d399", animation: "pulse 2s infinite", display: "inline-block" }} />
              All systems operational
            </span>
          </div>
          <p style={{ fontSize: "0.7rem", color: "#2a3a5a" }}>
            Made by{" "}
            <a
              href="https://github.com/peytontouma"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4a5a7a", textDecoration: "none" }}
            >
              Peyton Touma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
