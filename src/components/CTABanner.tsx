"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section
      className="page-section"
      aria-labelledby="cta-heading"
    >
      <div className="section-outer">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900/40 via-[#0d1526] to-violet-900/30 border border-white/10 p-10 sm:p-14 lg:p-16 text-center"
        >
          {/* Background decoration */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/15 rounded-full blur-[80px]" />
            <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-violet-600/10 rounded-full blur-[60px]" />
          </div>

          <div className="relative">
            <p className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-4">
              Get Started Today
            </p>
            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4"
            >
              See what Vantage can do
              <br />
              <span className="gradient-text">for your team.</span>
            </h2>
            <p className="text-[#8899bb] text-lg max-w-xl mx-auto mb-10">
              Start your free 14-day trial. No credit card required. Full
              access to all Growth features from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-200 shadow-2xl shadow-blue-900/50 hover:shadow-blue-700/60 hover:-translate-y-0.5"
              >
                Start free trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white/80 hover:text-white bg-white/[0.07] hover:bg-white/[0.12] border border-white/10 rounded-xl transition-all duration-200"
              >
                View pricing
              </Link>
            </div>
            <p className="mt-5 text-xs text-[#4a5a7a]">
              14-day free trial &nbsp;·&nbsp; No credit card &nbsp;·&nbsp; Cancel
              anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
