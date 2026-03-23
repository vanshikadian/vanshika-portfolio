"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 overflow-hidden">

      {/* Full-width top rule */}
      <div className="w-full h-px bg-near-black/8 mb-16 md:mb-24" />

      <div className="px-6 md:px-14 lg:px-20">

        {/* Label + issue marker */}
        <motion.div
          className="flex items-center justify-between mb-14 md:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-instrument text-[11px] text-muted uppercase tracking-[0.22em]">About</span>
          <span className="font-cormorant italic text-muted/40 text-sm">02</span>
        </motion.div>

        {/* Pull quote — large, spanning full width */}
        <div className="max-w-5xl mb-16 md:mb-20">
          <motion.blockquote
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Decorative opening mark */}
            <span
              className="font-cormorant text-sienna/30 leading-none block mb-2"
              style={{ fontSize: "clamp(72px, 8vw, 120px)", lineHeight: 0.7 }}
              aria-hidden
            >
              &ldquo;
            </span>
            <p
              className="font-cormorant italic text-near-black leading-[1.1]"
              style={{ fontSize: "clamp(30px, 4.2vw, 54px)" }}
            >
              I think in systems — how pieces connect,
              how data flows, how decisions get made.
            </p>
          </motion.blockquote>
        </div>

        {/* Body + aside — two column on desktop */}
        <motion.div
          className="flex flex-col md:flex-row md:gap-20 lg:gap-32"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
        >
          {/* Body text */}
          <p className="font-instrument text-base md:text-[17px] text-near-black/65 leading-relaxed max-w-lg mb-10 md:mb-0">
            I&apos;m a senior at Michigan State studying CS and Cognitive Science.
            I&apos;ve built ML pipelines at Bosch, backend infrastructure at
            Waggoner Financial, and a multi-agent AI system for Kohler Co.
            that optimizes supply chain decisions across 100+ variables.
          </p>

          {/* Aside — quick facts */}
          <div className="flex flex-col gap-5 shrink-0">
            {[
              ["Degree", "B.S. Computer Science + Cognitive Science"],
              ["Institution", "Michigan State University"],
              ["Graduation", "May 2026"],
              ["Status", "Seeking full-time SWE / MLE roles"],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="font-instrument text-[10px] text-muted uppercase tracking-[0.18em]">{label}</span>
                <span className="font-instrument text-[14px] text-near-black/80">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Full-width bottom rule */}
      <div className="w-full h-px bg-near-black/8 mt-16 md:mt-24" />
    </section>
  );
}
