"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-36 bg-parchment-dark/35">
      <div className="px-6 md:px-14 lg:px-20">

        {/* Section header */}
        <motion.div
          className="flex items-center justify-between mb-14 md:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-instrument text-[11px] text-muted uppercase tracking-[0.22em]">Experience</span>
          <span className="font-cormorant italic text-muted/40 text-sm">04</span>
        </motion.div>

        {/* Entries */}
        <div className="flex flex-col">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              {/* Top rule */}
              <div className="h-px w-full bg-near-black/8 group-hover:bg-near-black/15 transition-colors duration-300" />

              <div className="py-8 md:py-10 flex flex-col md:flex-row md:gap-12 lg:gap-20">

                {/* Left col: period + location */}
                <div className="md:w-44 shrink-0 flex md:flex-col gap-3 md:gap-1.5 mb-4 md:mb-0">
                  <span className="font-instrument text-[12px] text-muted tabular-nums">{exp.period}</span>
                  <span className="font-instrument text-[12px] text-muted/55">{exp.location}</span>
                </div>

                {/* Center: company + role — takes flex-1 */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3
                        className="font-cormorant italic text-near-black group-hover:text-sienna transition-colors duration-250"
                        style={{ fontSize: "clamp(20px, 2.4vw, 26px)" }}
                      >
                        {exp.company}
                      </h3>
                      <p className="font-instrument text-[13px] text-muted mt-0.5">{exp.role}</p>
                    </div>

                    {/* Subtle arrow on hover */}
                    <span className="text-sienna/0 group-hover:text-sienna/60 transition-all duration-200 text-base mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </div>

                  <ul className="flex flex-col gap-1.5 mt-4">
                    {exp.bullets.map((bullet, bi) => (
                      <li key={bi} className="font-instrument text-[13px] text-near-black/55 leading-relaxed flex items-start gap-2.5">
                        <span className="text-sienna/60 mt-[5px] shrink-0 text-[7px]">◆</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
          {/* Bottom rule */}
          <div className="h-px w-full bg-near-black/8" />
        </div>
      </div>
    </section>
  );
}
