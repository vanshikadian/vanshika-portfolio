"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/lib/data";

const filters = skillCategories.map((c) => ({ id: c.id, label: c.label }));

export default function Skills() {
  const [active, setActive] = useState("all");

  const currentSkills =
    skillCategories.find((c) => c.id === active)?.skills ?? [];

  return (
    <section id="skills" className="py-24 md:py-36">
      <div className="px-6 md:px-14 lg:px-20">

        {/* Section header */}
        <motion.div
          className="flex items-center justify-between mb-14 md:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-instrument text-[11px] text-muted uppercase tracking-[0.22em]">Skills</span>
          <span className="font-cormorant italic text-muted/40 text-sm">05</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Headline */}
          <h2
            className="font-cormorant italic text-near-black mb-10 md:mb-12 max-w-lg"
            style={{ fontSize: "clamp(26px, 3.2vw, 38px)" }}
          >
            The stack behind the systems.
          </h2>

          {/* Filter row */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`px-4 py-1.5 rounded-full text-[13px] font-instrument transition-all duration-200 border ${
                  active === f.id
                    ? "bg-near-black text-parchment border-near-black"
                    : "bg-transparent text-near-black/55 border-near-black/15 hover:border-near-black/40 hover:text-near-black"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Chips */}
          <motion.div layout className="flex flex-wrap gap-2">
            <AnimatePresence mode="popLayout">
              {currentSkills.map((skill) => (
                <motion.span
                  key={skill}
                  layout
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  whileHover={{ y: -2 }}
                  className="inline-flex items-center px-4 py-[7px] rounded-full border border-near-black/12 bg-parchment text-near-black/65 text-[13px] font-instrument select-none"
                >
                  {skill}
                </motion.span>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
