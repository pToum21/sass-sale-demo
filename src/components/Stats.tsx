"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 500,
    decimals: 0,
    suffix: "+",
    label: "Enterprise Customers",
    description: "Across 40+ countries",
  },
  {
    value: 2.4,
    decimals: 1,
    suffix: "B",
    prefix: "$",
    label: "Data Points Processed",
    description: "Every single day",
  },
  {
    value: 99.99,
    decimals: 2,
    suffix: "%",
    label: "Platform Uptime",
    description: "Industry-leading SLA",
  },
  {
    value: 4.9,
    decimals: 1,
    suffix: "/5",
    label: "Customer Satisfaction",
    description: "Based on 3,200+ reviews",
  },
];

function CountUp({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
  active,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  active: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1600;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setValue(parseFloat((eased * target).toFixed(decimals)));
      if (elapsed < 1) requestAnimationFrame(tick);
      else setValue(target);
    };

    requestAnimationFrame(tick);
  }, [active, target, decimals]);

  return (
    <span>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{ padding: "4rem 0", position: "relative", overflow: "hidden" }}
      aria-label="Platform statistics"
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, transparent, rgba(23,37,84,0.08), transparent)",
          pointerEvents: "none",
        }}
      />

      <div className="section-outer">
        <motion.dl
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                background: "var(--bg-surface)",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              <dt style={{ fontSize: "0.65rem", fontWeight: 500, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.25rem" }}>
                {stat.label}
              </dt>
              <dd style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 700, margin: "0.5rem 0" }} className="gradient-text-blue">
                <CountUp
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  active={inView}
                />
              </dd>
              <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>{stat.description}</p>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
