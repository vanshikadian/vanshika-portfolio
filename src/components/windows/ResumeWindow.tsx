"use client";

import { motion } from "framer-motion";

export default function ResumeWindow() {
  return (
    <div
      className="h-full flex flex-col items-center justify-center gap-5 px-8 py-6"
      style={{ background: "rgba(255,255,255,0.01)" }}
    >
      {/* PDF icon */}
      <div
        className="w-20 h-24 rounded-xl flex flex-col items-end justify-end pb-2 pr-2 relative overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        {/* Dog ear */}
        <div
          className="absolute top-0 right-0 w-6 h-6"
          style={{ background: "rgba(255,255,255,0.12)", borderBottomLeftRadius: "6px" }}
        />
        {/* Lines */}
        <div className="absolute left-4 top-8 flex flex-col gap-1.5 w-10">
          <div className="h-1 rounded-full" style={{ background: "rgba(255,255,255,0.3)" }} />
          <div className="h-1 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
          <div className="h-1 w-6 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
        </div>
        <span className="font-instrument text-[10px] font-bold" style={{ color: "#FF453A", letterSpacing: "0.05em" }}>PDF</span>
      </div>

      <div className="text-center">
        <p className="font-cormorant italic text-white text-[18px] mb-1">Kadian_Vanshika_Resume.pdf</p>
        <p className="font-instrument text-[12px]" style={{ color: "rgba(255,255,255,0.28)" }}>
          last updated: march 2026
        </p>
      </div>

      <motion.a
        href="/resume.pdf"
        download
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2 px-7 py-3 rounded-full font-instrument text-[14px] font-medium transition-colors"
        style={{
          background: "rgba(255,255,255,0.1)",
          color: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(255,255,255,0.18)",
        }}
      >
        Download Resume ↓
      </motion.a>

      <div className="flex gap-5 mt-1">
        {[
          { label: "LinkedIn", href: "https://linkedin.com/in/vanshika-kadian" },
          { label: "GitHub", href: "https://github.com/vanshikadian" },
          { label: "Email", href: "mailto:kadianva@msu.edu" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="font-instrument text-[12px] underline underline-offset-2 hover:text-white transition-colors"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
