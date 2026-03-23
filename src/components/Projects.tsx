"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

const featured = projects.find((p) => p.featured)!;
const grid = projects.filter((p) => !p.featured);

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-36">
      <div className="px-6 md:px-14 lg:px-20">

        {/* Section header */}
        <motion.div
          className="flex items-center justify-between mb-14 md:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-instrument text-[11px] text-muted uppercase tracking-[0.22em]">Selected Work</span>
          <span className="font-cormorant italic text-muted/40 text-sm">03</span>
        </motion.div>

        {/* Featured project — editorial split layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
            className="relative bg-near-black rounded-2xl overflow-hidden group"
          >
            {/* Subtle dot-grid texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage: "radial-gradient(circle, #F7F3EE 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row md:gap-16 md:items-start">

              {/* Left: label + title */}
              <div className="md:w-[45%] shrink-0 mb-8 md:mb-0">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sienna/15 border border-sienna/25 text-sienna text-[11px] font-instrument mb-6">
                  {featured.badge}
                </div>
                <h2
                  className="font-cormorant italic text-parchment leading-[1.05]"
                  style={{ fontSize: "clamp(30px, 3.8vw, 50px)" }}
                >
                  {featured.title}
                </h2>

                {/* Tech chips — bottom of left col on desktop */}
                <div className="hidden md:flex flex-wrap gap-2 mt-10">
                  {featured.tech.map((t) => (
                    <span key={t}
                      className="px-3 py-1 rounded-full border border-parchment/15 text-parchment/50 text-[11px] font-instrument">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: description + arrow */}
              <div className="flex-1">
                <p className="font-instrument text-parchment/55 text-[15px] leading-relaxed mb-8 md:mb-10">
                  {featured.description}
                </p>

                {/* Tech chips mobile */}
                <div className="flex md:hidden flex-wrap gap-2 mb-8">
                  {featured.tech.map((t) => (
                    <span key={t}
                      className="px-3 py-1 rounded-full border border-parchment/15 text-parchment/50 text-[11px] font-instrument">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sienna font-instrument text-sm group-hover:gap-3 transition-all duration-300">
                  <span>View project</span>
                  <span className="text-lg leading-none">↗</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Grid — 4 projects, numbered editorial style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {grid.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              className="group relative bg-parchment-dark rounded-2xl p-7 md:p-8 overflow-hidden"
            >
              {/* Number */}
              <span className="absolute top-7 right-8 font-cormorant italic text-near-black/10 text-5xl leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Tag */}
              <div className="inline-flex items-center px-2.5 py-[3px] rounded-full bg-sienna/8 text-sienna text-[11px] font-instrument mb-5">
                {project.tag}
              </div>

              <h3
                className="font-cormorant italic text-near-black mb-3 pr-10"
                style={{ fontSize: "clamp(20px, 2.2vw, 26px)", lineHeight: 1.15 }}
              >
                {project.title}
              </h3>

              <p className="font-instrument text-muted text-[13px] leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t}
                    className="px-2.5 py-0.5 rounded-full border border-near-black/10 text-near-black/45 text-[11px] font-instrument">
                    {t}
                  </span>
                ))}
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-7 right-8 text-near-black/0 group-hover:text-sienna transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-lg">
                ↗
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
