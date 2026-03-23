"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  {
    id: "all",
    label: "All",
    skills: [
      "PyTorch","TensorFlow","Scikit-learn","CNNs","ResNet","Transformers",
      "LLMs","Embeddings","NLP","FAISS","Computer Vision","Multi-Agent AI",
      "RAG Pipelines","Feature Engineering","Model Evaluation","OpenCV","MLOps",
      "FastAPI","Nest.js","Node.js","Django","Flask","GraphQL","REST APIs",
      "React","React Native","Next.js","TypeScript",
      "PostgreSQL","MongoDB","Redis","SQLite","Firebase",
      "ETL Pipelines","Docker","Azure","Databricks","CI/CD","Git","Linux",
      "Data Modeling","Schema Design","Query Optimization",
      "Python","C++","SQL","JavaScript","TypeScript","R",
    ],
  },
  {
    id: "ml",
    label: "ML & AI",
    skills: [
      "PyTorch","TensorFlow","Scikit-learn","CNNs","ResNet","Transformers",
      "LLMs","Embeddings","NLP","FAISS","Computer Vision","Multi-Agent AI",
      "RAG Pipelines","Feature Engineering","Model Evaluation","OpenCV","MLOps",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      "FastAPI","Nest.js","Node.js","Django","Flask","GraphQL","REST APIs",
      "React","React Native","Next.js","TypeScript",
    ],
  },
  {
    id: "data",
    label: "Data & Infra",
    skills: [
      "PostgreSQL","MongoDB","Redis","SQLite","Firebase",
      "ETL Pipelines","Docker","Azure","Databricks","CI/CD","Git","Linux",
      "Data Modeling","Schema Design","Query Optimization",
    ],
  },
  {
    id: "lang",
    label: "Languages",
    skills: ["Python","C++","SQL","JavaScript","TypeScript","R"],
  },
];

export default function SkillsWindow() {
  const [active, setActive] = useState("all");
  const current = CATEGORIES.find((c) => c.id === active)!;

  return (
    <div className="h-full flex flex-col">
      <div
        className="px-4 py-2.5 shrink-0 font-instrument text-[11px]"
        style={{ color: "rgba(255,255,255,0.22)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        # skills.txt
      </div>

      {/* Filter tabs */}
      <div
        className="flex gap-1.5 px-4 py-3 shrink-0 flex-wrap"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className="px-3 py-1 rounded-full font-instrument text-[12px] transition-all duration-150"
            style={{
              background: active === cat.id ? "rgba(255,255,255,0.16)" : "transparent",
              color: active === cat.id ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.38)",
              border: `1px solid ${active === cat.id ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.1)"}`,
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skill chips */}
      <div className="flex-1 overflow-y-auto window-scroll px-4 py-4">
        <motion.div layout className="flex flex-wrap gap-2">
          <AnimatePresence mode="popLayout">
            {current.skills.map((skill) => (
              <motion.span
                key={skill}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.14 }}
                className="px-3 py-1.5 rounded-full font-instrument text-[13px]"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.78)",
                  border: "1px solid rgba(255,255,255,0.11)",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
