"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const lineVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.4 + i * 0.18, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stats = [
  { value: 4, suffix: "+", label: "Internships" },
  { value: 3.8, suffix: "", label: "GPA", isDecimal: true },
  { value: 20, suffix: "K+", label: "Users" },
  { value: 7, suffix: "×", label: "Dean's List" },
];

function CountUp({ value, suffix, isDecimal, delay }: {
  value: number; suffix: string; isDecimal?: boolean; delay: number;
}) {
  const [display, setDisplay] = useState(isDecimal ? "0.0" : "0");
  const started = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (started.current) return;
      started.current = true;
      const steps = 60;
      let step = 0;
      const iv = setInterval(() => {
        step++;
        const eased = 1 - Math.pow(1 - step / steps, 3);
        const cur = value * eased;
        setDisplay(isDecimal ? cur.toFixed(1) : Math.round(cur).toString());
        if (step >= steps) {
          clearInterval(iv);
          setDisplay(isDecimal ? value.toFixed(1) : String(value));
        }
      }, 1400 / steps);
    }, delay);
    return () => clearTimeout(t);
  }, [value, isDecimal, delay]);

  return <>{display}{suffix}</>;
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">

      <div className="h-20 md:h-24 shrink-0" />

      <div className="flex-1 flex flex-col justify-center px-6 md:px-14 lg:px-20">

        {/* Open to work pill */}
        <motion.div
          className="flex items-center justify-between mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-near-black/12 bg-parchment-dark/80">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-forest" />
            </span>
            <span className="font-instrument text-[13px] text-near-black/65">
              Open to work · May 2026
            </span>
          </div>
          <span className="font-instrument text-[11px] text-muted/40 hidden md:block tracking-[0.2em] uppercase">
            CS · Cognitive Science · MSU
          </span>
        </motion.div>

        {/* Headline — bleeds wide, max visual impact */}
        <div className="mb-1 overflow-hidden">
          <motion.h1
            custom={0}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="font-cormorant italic text-near-black leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(68px, 12vw, 152px)" }}
          >
            I build systems
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-12 md:mb-16">
          <motion.div
            custom={1}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="flex items-baseline gap-4 md:gap-6 flex-wrap"
          >
            <span
              className="font-cormorant italic text-near-black leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(68px, 12vw, 152px)" }}
            >
              that
            </span>
            <span
              className="font-cormorant italic text-sienna leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(68px, 12vw, 152px)" }}
            >
              think.
            </span>
          </motion.div>
        </div>

        {/* Full-width rule */}
        <motion.div
          className="h-px bg-near-black/10 mb-10 md:mb-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
        />

        {/* Bottom row */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.05 }}
        >
          {/* Left: description + CTAs */}
          <div className="shrink-0">
            <p className="font-instrument text-[15px] text-muted leading-relaxed mb-7 max-w-xs">
              CS + Cognitive Science @ Michigan State
              <br />
              Graduating May 2026 · Open to full-time
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center px-6 py-[11px] rounded-full bg-near-black text-parchment font-instrument text-[13px] font-medium hover:bg-near-black/80 transition-colors duration-200"
              >
                See my work
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-6 py-[11px] rounded-full border border-near-black/20 text-near-black font-instrument text-[13px] font-medium hover:bg-parchment-dark/80 transition-all duration-200"
              >
                Resume ↓
              </a>
            </div>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 md:flex md:items-end md:gap-12 gap-x-10 gap-y-6">
            {stats.map((s, i) => (
              <div key={s.label} className="flex flex-col md:items-end">
                <span className="font-cormorant font-light text-near-black leading-none tabular-nums"
                  style={{ fontSize: "clamp(36px, 3.5vw, 48px)" }}>
                  <CountUp value={s.value} suffix={s.suffix} isDecimal={s.isDecimal} delay={1500 + i * 100} />
                </span>
                <span className="font-instrument text-[10px] text-muted uppercase tracking-[0.18em] mt-1.5">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="px-6 md:px-14 lg:px-20 pb-8 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9 }}
      >
        <motion.div
          className="h-px bg-near-black/25"
          animate={{ width: ["28px", "48px", "28px"] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="font-instrument text-[10px] text-muted/45 uppercase tracking-[0.22em]">Scroll</span>
      </motion.div>

    </section>
  );
}
