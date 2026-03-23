"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS = [
  {
    id: "kohler",
    featured: true,
    name: "Multi-Agent AI for Supply Chain Optimization",
    subtitle: "Kohler Co. Capstone",
    tech: ["Python", "FastAPI", "Azure", "Databricks", "React"],
    desc: [
      "Designed a multi-agent architecture where AI agents coordinate to optimize Economic Order Quantity, reorder decisions, and purchasing tradeoffs across complex supply chain workflows.",
      "Built agent communication, blackboard memory, conflict detection, and judge-agent logic for multi-pass negotiation. Integrated enterprise data from Microsoft Fabric, Azure OneLake, and Databricks.",
      "Delivered a React dashboard + Microsoft Teams interface exposing agent outputs and decision traces. Projected to reduce buyer analysis time by 40%.",
    ],
  },
  {
    id: "serving",
    featured: false,
    name: "Real-Time Model Serving API",
    subtitle: "Personal Project",
    tech: ["FastAPI", "Redis", "Docker", "Python"],
    desc: [
      "Built a low-latency inference API with request batching, Redis caching, and Docker containerization. 40% response time reduction under concurrent load.",
      "Added health checks, structured logging, and load testing scripts for production readiness.",
    ],
  },
  {
    id: "search",
    featured: false,
    name: "Embedding-Based Similarity Search Engine",
    subtitle: "Personal Project",
    tech: ["Python", "PyTorch", "FAISS"],
    desc: [
      "Implemented vector indexing over 100K+ embeddings using FAISS, enabling sub-second cosine similarity queries across high-dimensional datasets.",
      "Built ingestion, evaluation, and benchmarking workflows to measure retrieval performance.",
    ],
  },
  {
    id: "nfl",
    featured: false,
    name: "NFL Draft Success Prediction",
    subtitle: "Personal Project",
    tech: ["Python", "MongoDB", "Scikit-learn", "Pandas"],
    desc: [
      "Engineered and merged 100K+ records across college performance, combine metrics, and career outcomes from 2000–2024.",
      "Built predictive models forecasting draft success using cross-validation, feature selection, and multi-source data integration.",
    ],
  },
  {
    id: "vehicle",
    featured: false,
    name: "Vehicle Classification ML Pipeline",
    subtitle: "Personal Project",
    tech: ["PyTorch", "TensorFlow", "Python", "ResNet"],
    desc: [
      "Trained a ResNet ensemble on 50K+ images achieving 92% accuracy.",
      "Built augmentation pipelines and automated evaluation workflows supporting model generalization across vehicle types.",
    ],
  },
];

export default function ProjectsWindow() {
  const [expanded, setExpanded] = useState<string | null>("kohler");

  return (
    <div className="h-full flex flex-col">
      {/* Finder toolbar */}
      <div
        className="flex items-center gap-2 px-4 py-2 shrink-0 font-instrument text-[11px]"
        style={{
          background: "rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          color: "rgba(255,255,255,0.28)",
        }}
      >
        <span>Name</span>
        <span className="ml-auto">Tech Stack</span>
      </div>

      <div className="flex-1 overflow-y-auto window-scroll">
        {PROJECTS.map((p) => (
          <div key={p.id}>
            <button
              className="w-full text-left flex items-center gap-3 px-4 py-3 transition-colors"
              style={{
                background: expanded === p.id ? "rgba(191,106,74,0.1)" : "transparent",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
              onClick={() => setExpanded(expanded === p.id ? null : p.id)}
            >
              <span
                className="text-[10px] shrink-0 transition-transform duration-150"
                style={{
                  color: "rgba(255,255,255,0.32)",
                  transform: expanded === p.id ? "rotate(90deg)" : "rotate(0deg)",
                  display: "inline-block",
                }}
              >
                ▶
              </span>
              <span className="text-[15px] shrink-0">{p.featured ? "★" : "📄"}</span>
              <div className="flex-1 min-w-0">
                <p
                  className="font-instrument text-[13.5px] truncate"
                  style={{ color: p.featured ? "#CF7A5A" : "rgba(255,255,255,0.85)" }}
                >
                  {p.name}
                </p>
                <p className="font-instrument text-[11px] truncate" style={{ color: "rgba(255,255,255,0.28)" }}>
                  {p.subtitle}
                </p>
              </div>
              <span
                className="font-instrument text-[11px] hidden sm:block shrink-0 ml-2 max-w-[180px] truncate"
                style={{ color: "rgba(255,255,255,0.22)" }}
              >
                {p.tech.join(" · ")}
              </span>
            </button>

            <AnimatePresence>
              {expanded === p.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    className="px-11 py-4 font-instrument"
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <ul className="space-y-2 mb-3">
                      {p.desc.map((d, i) => (
                        <li key={i} className="text-[13px] leading-relaxed flex gap-2" style={{ color: "rgba(255,255,255,0.75)" }}>
                          <span className="shrink-0 mt-[5px]" style={{ color: "rgba(191,106,74,0.55)" }}>·</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded text-[11.5px]"
                          style={{
                            background: "rgba(191,106,74,0.12)",
                            color: "#CF7A5A",
                            border: "1px solid rgba(191,106,74,0.22)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
