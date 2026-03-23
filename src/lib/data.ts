export type Project = {
  id: string;
  tag: string;
  title: string;
  description: string;
  tech: string[];
  featured?: boolean;
  badge?: string;
  longDescription?: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export type SkillCategory = {
  id: string;
  label: string;
  skills: string[];
};

export const projects: Project[] = [
  {
    id: "kohler-multi-agent",
    tag: "★ Capstone · Kohler Co.",
    title: "Multi-Agent AI for Supply Chain Optimization",
    description:
      "Coordinated intelligent agents to optimize purchasing decisions across 100+ supply chain variables. Production-deployed on Azure with FastAPI orchestration, Databricks pipelines, and a React + Teams dashboard. Projected to reduce buyer analysis time by 40%.",
    tech: ["Python", "FastAPI", "Azure", "Databricks", "React", "Multi-Agent AI"],
    featured: true,
    badge: "★ Capstone · Kohler Co.",
  },
  {
    id: "model-serving",
    tag: "ML · Inference",
    title: "Real-Time Model Serving API",
    description:
      "Low-latency inference with batching, Redis caching, and Docker. 40% response time reduction under load.",
    tech: ["FastAPI", "Redis", "Docker"],
  },
  {
    id: "embedding-search",
    tag: "Search · Embeddings",
    title: "Embedding Similarity Search Engine",
    description:
      "Vector indexing over 100K embeddings with FAISS for sub-second semantic queries.",
    tech: ["PyTorch", "FAISS", "Python"],
  },
  {
    id: "nfl-draft",
    tag: "ML · Sports Analytics",
    title: "NFL Draft Success Prediction",
    description:
      "Merged 100K+ records across college stats and combine metrics. Predictive models with cross-validation.",
    tech: ["Python", "MongoDB", "Scikit-learn"],
  },
  {
    id: "vehicle-classification",
    tag: "CV · Classification",
    title: "Vehicle Classification Pipeline",
    description:
      "ResNet ensemble trained on 50K+ images achieving 92% accuracy with augmentation workflows.",
    tech: ["PyTorch", "TensorFlow", "Python"],
  },
];

export const experience: Experience[] = [
  {
    id: "waggoner",
    company: "Waggoner Financial",
    role: "Software Engineering Intern",
    period: "Sept – Dec 2025",
    location: "Lansing, MI",
    bullets: [
      "Built GraphQL APIs in Nest.js + TypeScript with PostgreSQL-backed portfolio analytics",
      "Redis caching cut API latency by 30% · Hardened CI/CD pipeline with GitHub Actions",
    ],
  },
  {
    id: "bosch",
    company: "Bosch Global Software Technologies",
    role: "Machine Learning Intern",
    period: "Jun – Aug 2024",
    location: "India",
    bullets: [
      "Engineered CNN pipelines for real-time object detection · 25% accuracy gain, 30% latency reduction",
      "Transformer NLP on 100K+ records · AEBS predictive accuracy improved 20%",
    ],
  },
  {
    id: "jmc",
    company: "James Madison College, MSU",
    role: "Research Assistant",
    period: "Apr 2025 – Present",
    location: "East Lansing",
    bullets: [
      "Built geopolitical datasets spanning 190 countries from heterogeneous sources",
      "ETL pipelines merging structured data with unstructured PDFs for NLP workflows",
    ],
  },
  {
    id: "elsamex",
    company: "Elsamex Ltd",
    role: "Backend Developer Intern",
    period: "May – Jul 2024",
    location: "Remote",
    bullets: [
      "Relational schemas for 5K+ assets · 40% retrieval improvement",
      "Django/Flask REST APIs with RBAC and audit logging",
    ],
  },
  {
    id: "msu-nso",
    company: "MSU New Student Orientation",
    role: "App Developer",
    period: "May – Sep 2024",
    location: "East Lansing",
    bullets: [
      "React Native + Firebase app serving 20,000+ students",
      "Analytics-driven features increased event participation 25%",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "all",
    label: "All",
    skills: [
      "PyTorch", "TensorFlow", "CNNs", "Transformers", "LLMs", "Embeddings",
      "NLP", "FAISS", "Scikit-learn", "Feature Engineering", "Computer Vision",
      "Multi-Agent AI", "OpenCV", "RAG Pipelines",
      "FastAPI", "Nest.js", "Node.js", "Django", "Flask", "GraphQL",
      "REST APIs", "React", "React Native", "TypeScript", "Next.js",
      "PostgreSQL", "MongoDB", "Redis", "ETL Pipelines", "Docker", "Azure",
      "Databricks", "CI/CD", "Git", "Linux", "Firebase",
      "Python", "C++", "SQL", "JavaScript", "R",
    ],
  },
  {
    id: "ml",
    label: "ML & AI",
    skills: [
      "PyTorch", "TensorFlow", "CNNs", "Transformers", "LLMs", "Embeddings",
      "NLP", "FAISS", "Scikit-learn", "Feature Engineering", "Computer Vision",
      "Multi-Agent AI", "OpenCV", "RAG Pipelines",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      "FastAPI", "Nest.js", "Node.js", "Django", "Flask", "GraphQL",
      "REST APIs", "React", "React Native", "TypeScript", "Next.js",
    ],
  },
  {
    id: "data",
    label: "Data & Infra",
    skills: [
      "PostgreSQL", "MongoDB", "Redis", "ETL Pipelines", "Docker", "Azure",
      "Databricks", "CI/CD", "Git", "Linux", "Firebase",
    ],
  },
  {
    id: "languages",
    label: "Languages",
    skills: ["Python", "C++", "SQL", "JavaScript", "TypeScript", "R"],
  },
];
