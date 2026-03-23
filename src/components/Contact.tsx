"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("kadianva@msu.edu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="bg-near-black py-24 md:py-36">
      <div className="px-6 md:px-14 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section header */}
          <div className="flex items-center justify-between mb-14 md:mb-20">
            <span className="font-instrument text-[11px] text-parchment/30 uppercase tracking-[0.22em]">Contact</span>
            <span className="font-cormorant italic text-parchment/20 text-sm">06</span>
          </div>

          {/* Headline */}
          <h2
            className="font-cormorant italic text-parchment leading-[0.95] mb-8"
            style={{ fontSize: "clamp(52px, 8vw, 104px)" }}
          >
            Let&apos;s build
            <br />
            something.
          </h2>

          {/* Subtext */}
          <p className="font-instrument text-parchment/35 text-[15px] max-w-lg mb-14 leading-relaxed">
            Open to SWE · MLE · Data Engineering roles
            <br />
            Graduating May 2026 · Requires OPT/H-1B sponsorship
          </p>

          {/* Email button */}
          <motion.button
            onClick={handleCopy}
            whileHover={{ backgroundColor: "rgba(247,243,238,0.06)" }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-4 px-7 py-4 rounded-full border border-parchment/20 text-parchment font-instrument text-[14px] transition-all duration-200 mb-16"
          >
            <span>{copied ? "Copied ✓" : "kadianva@msu.edu"}</span>
            {!copied && (
              <span className="text-parchment/30 text-[12px] group-hover:text-parchment/55 transition-colors">
                Click to copy
              </span>
            )}
          </motion.button>

          {/* Links */}
          <div className="flex items-center gap-8 mb-0">
            {[
              { label: "LinkedIn", href: "https://linkedin.com/in/vanshika-kadian", external: true },
              { label: "GitHub", href: "https://github.com/vanshikadian", external: true },
              { label: "Resume PDF", href: "/resume.pdf", external: false },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                download={!link.external ? true : undefined}
                className="font-instrument text-[13px] text-parchment/35 underline underline-offset-4 hover:text-parchment transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-parchment/8 flex items-center justify-between">
            <span className="font-cormorant italic text-parchment/18 text-[13px]">Vanshika Kadian</span>
            <span className="font-instrument text-[11px] text-parchment/18">© {new Date().getFullYear()}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
