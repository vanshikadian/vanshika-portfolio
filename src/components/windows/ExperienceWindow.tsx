"use client";

const EXPERIENCE = [
  {
    company: "Waggoner Financial",
    role: "Software Engineering Intern",
    period: "Sept–Dec 2025",
    location: "Lansing, MI",
    bullets: [
      "Architected GraphQL APIs in Nest.js + TypeScript backed by PostgreSQL to power portfolio analytics dashboards",
      "Designed ETL pipelines for financial metrics aggregation, eliminating 35% of manual reporting effort",
      "Reduced API latency 30% by introducing Redis caching + query optimization",
      "Hardened CI workflows with schema validation and automated testing",
    ],
  },
  {
    company: "Bosch Global Software Technologies",
    role: "Machine Learning Intern",
    period: "Jun–Aug 2024",
    location: "India",
    bullets: [
      "Built CNN-based object detection pipelines for Advanced Emergency Braking Systems · 25% accuracy gain · 30% latency reduction",
      "Engineered features across 500K+ accident records · AEBS accuracy +20%, false positives -15%",
      "Applied transformer NLP to 100K+ customer feedback records · customer satisfaction metrics +10%",
      "Built automated Python + SQL retraining pipelines for reproducible deployment",
    ],
  },
  {
    company: "James Madison College, MSU",
    role: "Research Assistant",
    period: "Apr 2025–Present",
    location: "East Lansing, MI",
    bullets: [
      "Built standardized geopolitical datasets spanning 190 countries integrating economic, military, and diplomatic indicators",
      "Developed ETL pipelines merging structured data with unstructured PDFs to enable retrieval-augmented workflows",
      "Applied clustering + NLP to identify geopolitical risk patterns across longitudinal datasets",
    ],
  },
  {
    company: "Elsamex Ltd",
    role: "Backend Developer Intern",
    period: "May–Jul 2024",
    location: "Remote",
    bullets: [
      "Designed relational SQL schemas for 5,000+ operational assets · retrieval speed +40% · load time -35%",
      "Built secure Django + Flask APIs with RBAC, audit logging, and real-time reporting endpoints",
      "Automated asset ingestion and reporting workflows for predictive maintenance infrastructure",
    ],
  },
  {
    company: "MSU New Student Orientation",
    role: "App Developer",
    period: "May–Sep 2024",
    location: "East Lansing, MI",
    bullets: [
      "Developed cross-platform React Native + Firebase app serving 20,000+ incoming students",
      "Implemented analytics-driven navigation increasing event participation 25%",
      "Executed end-to-end QA across iOS + Android using Xcode + Android Studio",
    ],
  },
];

export default function ExperienceWindow() {
  return (
    <div className="h-full overflow-y-auto window-scroll">
      <div
        className="px-5 py-2.5 shrink-0 font-instrument text-[11px]"
        style={{ color: "rgba(255,255,255,0.22)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        # experience.md
      </div>
      <div className="px-5 py-4 space-y-6">
        {EXPERIENCE.map((exp, i) => (
          <div key={i}>
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h3 className="font-cormorant italic text-white text-[20px] leading-tight">{exp.company}</h3>
                <p className="font-instrument text-[13px] mt-0.5" style={{ color: "#CF7A5A" }}>{exp.role}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-instrument text-[12px]" style={{ color: "rgba(255,255,255,0.3)" }}>{exp.period}</p>
                <p className="font-instrument text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>{exp.location}</p>
              </div>
            </div>
            <ul className="space-y-1.5">
              {exp.bullets.map((b, bi) => (
                <li
                  key={bi}
                  className="font-instrument text-[13px] leading-relaxed flex gap-2"
                  style={{ color: "rgba(255,255,255,0.72)" }}
                >
                  <span className="shrink-0 mt-[4px]" style={{ color: "rgba(191,106,74,0.5)" }}>·</span>
                  {b}
                </li>
              ))}
            </ul>
            {i < EXPERIENCE.length - 1 && (
              <div className="mt-5 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
