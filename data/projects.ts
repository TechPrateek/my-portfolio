export interface Project {
  id: string;
  num: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  architectureHighlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  year: string;
  accentGlow: string;
  featured: boolean;
  metrics: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: "paypilotai",
    num: "01",
    title: "PAYPILOT AI",
    category: "FinTech / AI Fraud & Risk Engine",
    tagline: "Intelligent real-time payment risk scoring and fraud prevention platform with Graph ML.",
    description:
      "A full-stack FinTech risk intelligence platform analyzing payment transactions in real-time using LightGBM, behavioral velocity metrics, and interactive Graph ML network maps.",
    longDescription:
      "PayPilot AI transforms modern transaction risk evaluation by eliminating false-positive rejections for legitimate first-time buyers while intercepting complex fraud rings. Built with a Next.js frontend, Python FastAPI ML service, and PostgreSQL, the platform computes hybrid risk scores (0–100), visualizes multi-entity device/IP connection graphs, provides a payment simulator with 7 realistic scenarios, and equips risk analysts with a collaborative case investigation queue.",
    features: [
      "Real-time hybrid risk scoring engine (LightGBM + Behavioral Velocity + Graph ML)",
      "Interactive multi-entity connection map (Customer, Device, IP, Card cluster graph)",
      "Payment Simulator with 7 realistic stress-test scenarios (UPI, Card, Retry Storms)",
      "Role-based case investigation queue with evidence logs & analyst notes",
      "Plain-English explainability breakdown for every automated decision",
      "Merchant analytics dashboard with revenue, approval rates, and risk distributions",
      "Prisma ORM + PostgreSQL schema seeded with 520+ realistic transactions",
    ],
    architectureHighlights: [
      "Dual-service architecture: Next.js 15 App Router + Python FastAPI microservice",
      "FastAPI inference backend executing LightGBM + NetworkX entity graph models",
      "PostgreSQL relational schema with Prisma ORM and Auth.js role-based security",
      "Real-time SVG graph visualizer mapping cross-account device fingerprint clusters",
    ],
    techStack: ["Next.js", "TypeScript", "Python", "FastAPI", "LightGBM", "PostgreSQL", "Prisma", "Tailwind CSS"],
    liveUrl: "https://paypilotai.vercel.app",
    githubUrl: "https://github.com/TechPrateek/paypilotai",
    year: "2025",
    accentGlow: "rgba(56, 189, 248, 0.18)",
    featured: true,
    metrics: [
      { label: "Inference Time", value: "< 25ms" },
      { label: "Risk Precision", value: "0–100 Hybrid" },
      { label: "Architecture", value: "Next.js + FastAPI" },
    ],
  },
  {
    id: "scamguardai",
    num: "02",
    title: "SCAMGUARD AI",
    category: "AI Risk Intelligence & Abuse Ring Sentinel",
    tagline: "Hybrid AI defense system uniting graph topology, machine learning, and explainable AI to crush organized payment syndicates.",
    description:
      "Built for the Razorpay AI Buildathon 2026, ScamGuardAi pioneers a 4-pillar risk intelligence architecture combining BFS Graph Clustering, 10D Logistic Regression ML, and GenAI investigation.",
    longDescription:
      "Traditional payment fraud solutions evaluate transactions in isolation, leaving merchants vulnerable to organized multi-identity syndicates that share emulators, rotate residential IPs, and launch scripted checkout bursts. ScamGuardAi uncovers coordinated abuse using Breadth-First Search (BFS) graph connected components, extracts 10-dimensional topological feature vectors, calculates exact abuse probabilities via L2 Logistic Regression with mathematical feature attribution, enforces immutable deterministic policy guardrails, and synthesizes plain-English briefings for merchants.",
    features: [
      "Multi-hop BFS Graph Intelligence discovering latent cross-account abuse rings",
      "10-Dimensional Topological Feature Extraction (Density, Shared Devices, Burst Velocity)",
      "Trained L2 Logistic Regression ML model with exact driver mathematical attribution",
      "Deterministic Policy Engine enforcing strict action boundaries (Quarantine, Review, Monitor)",
      "Generative AI Fraud Investigator synthesizing plain-English syndicate briefings",
      "Real-time mitigation actions (Quarantine Ring, Hold Orders, Merchant Override)",
      "Interactive Attack Simulator testing synthetic coordinated syndicate rings",
    ],
    architectureHighlights: [
      "Next.js App Router + TypeScript full-stack reactive architecture",
      "Scikit-learn trained mathematical model exported to zero-overhead JSON production runtime",
      "High-performance interactive SVG topological graph visualization engine",
      "Strict deterministic policy isolation preventing autonomous blocking errors",
    ],
    techStack: ["Next.js", "React 19", "TypeScript", "Machine Learning", "Graph ML", "Scikit-Learn", "Tailwind CSS"],
    liveUrl: "https://scamguardai.vercel.app",
    githubUrl: "https://github.com/TechPrateek/ScamGuardAi",
    year: "2026",
    accentGlow: "rgba(244, 63, 94, 0.18)",
    featured: true,
    metrics: [
      { label: "Model Accuracy", value: "100.0%" },
      { label: "ML Attribution", value: "10-D Exact" },
      { label: "Detection Scope", value: "Multi-Hop" },
    ],
  },
  {
    id: "llmreliabilitylab",
    num: "03",
    title: "LLM RELIABILITY LAB",
    category: "Enterprise AI Model Evaluation & Red-Teaming",
    tagline: "Enterprise AI Model Stress-Testing, Hallucination Detection & Security Red-Teaming Arena.",
    description:
      "An interactive developer arena and automated continuous evaluation pipeline subjecting frontier and open-weights models to rigorous stress tests across 4 enterprise failure modes.",
    longDescription:
      "Developed for Hack Devengers 2.0, LLM Reliability Lab provides empirical verification of AI safety boundaries, hallucination rates, and operational economics before production deployment. The platform evaluates Google Gemini 2.5 Flash, OpenAI GPT-4o Mini, Meta Llama 3.3 70B, Anthropic Claude 3.5 Haiku, and DeepSeek R1 across factual hallucinations, adversarial prompt injection/jailbreaks, strict JSON schema compliance, and counterfactual causality. It generates composite Model Reliability Index (MRI™) scores, NIST AI RMF governance mappings, and exportable AI Safety Nutrition Labels.",
    features: [
      "Multi-Model Side-by-Side Battle Arena comparing 2–3 frontier LLMs simultaneously",
      "Real-time client telemetry: Time to First Token (TTFT), token throughput & blended cost",
      "Automated Continuous Stress Suite evaluating Hallucinations, Jailbreaks & Schema Drift",
      "Chain-of-Thought (CoT) Visualizer inspecting deep reasoning traces (e.g. DeepSeek R1)",
      "Model Reliability Index (MRI™) Spider Radar & Pareto Frontier trade-off analytics",
      "Exportable Enterprise AI Safety Nutrition Labels in standardized PDF & Markdown",
      "Governance mapping for NIST AI RMF 1.0 and EU AI Act compliance",
    ],
    architectureHighlights: [
      "React 19 + TypeScript 5.9 frontend with ultra-responsive Tailwind v4 layout",
      "Dual-mode execution engine supporting live streaming & multi-provider API calls",
      "Multi-stage heuristic & semantic verification pipeline with custom diff visualizer",
      "Client-side PDF report compilation generating enterprise audit-ready nutrition labels",
    ],
    techStack: ["React 19", "Next.js", "TypeScript", "Tailwind CSS v4", "Google Gemini API", "LLM Evals", "Radix UI"],
    liveUrl: "https://llm-reliability-lab-seven.vercel.app",
    githubUrl: "https://github.com/TechPrateek/LLM-Reliability-Lab",
    year: "2026",
    accentGlow: "rgba(168, 85, 247, 0.18)",
    featured: true,
    metrics: [
      { label: "Models Benchmarked", value: "5 Frontier" },
      { label: "Eval Vectors", value: "4 Failures" },
      { label: "Audit Output", value: "NIST / EU AI" },
    ],
  },
  {
    id: "physioconnect",
    num: "04",
    title: "PHYSIOCONNECT",
    category: "Healthcare / Physiotherapy Platform",
    tagline: "Digital workflow and tele-rehabilitation system connecting therapists & patients.",
    description:
      "A modern digital platform designed around specialized physiotherapy clinical workflows, interactive treatment recovery plans, and structured patient-clinician interactions.",
    longDescription:
      "PhysioConnect modernizes patient physical therapy by structuring asynchronous consultations, dynamic recovery milestone tracking, and exercise regimen compliance. Built with strict privacy boundaries and a modular PostgreSQL database, it enables practitioners to prescribe tailored physical exercises, log kinematic progress, and minimize clinic re-admission rates.",
    features: [
      "Patient appointment scheduling and clinician calendar sync",
      "Custom physiotherapy exercise prescription modules",
      "Visual recovery milestone & rehabilitation progress tracking",
      "Secure patient consultation logging and historical records",
      "Interactive patient intake and pain-mapping questionnaires",
      "Responsive clinician dashboard for multi-patient telemetry",
      "Better-Auth authentication with Razorpay payment gateway integration",
    ],
    architectureHighlights: [
      "Next.js 15 full-stack architecture with zero-latency Server Actions",
      "Prisma ORM enforcing strict relational patient-therapist data boundaries",
      "PostgreSQL with indexed queries for longitudinal recovery analytics",
      "Clean modular component library with accessible WCAG-compliant design",
    ],
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Better-Auth", "Razorpay", "Tailwind CSS"],
    liveUrl: "https://physioconnect-xi.vercel.app",
    githubUrl: "https://github.com/TechPrateek/physioconnect",
    year: "2025",
    accentGlow: "rgba(16, 185, 129, 0.18)",
    featured: true,
    metrics: [
      { label: "Workflows", value: "Automated" },
      { label: "Stack", value: "Full Stack" },
      { label: "Data Integrity", value: "100% ACID" },
    ],
  },
  {
    id: "mechonway",
    num: "05",
    title: "MECHONWAY",
    category: "Roadside Assistance Platform",
    tagline: "On-demand breakdown assistance with real-time geospatial mechanic dispatching.",
    description:
      "A web-based on-demand roadside breakdown assistance platform connecting stranded motorists with nearby verified mechanics using high-accuracy location-based matching.",
    longDescription:
      "MechOnWay eliminates roadside vulnerability by engineering a reliable, low-latency dispatch engine. Stranded drivers can pinpoint their GPS location, request specialized vehicle assistance (towing, battery jump, tire repair, mechanical diagnostics), and receive verified mechanic matching in minutes with real-time tracking, transparent fare estimation, and end-to-end admin orchestration.",
    features: [
      "GPS Geolocation Capture & Reverse Geocoding",
      "Proximity-based nearest mechanic matching algorithm",
      "Real-time status updates and arrival estimation",
      "Transparent upfront pricing and service categorization",
      "Role-based secure authentication (User, Mechanic, Admin)",
      "Centralized admin management & telemetry dashboard",
      "Scalable relational schema design with Prisma & PostgreSQL",
    ],
    architectureHighlights: [
      "Next.js App Router for high-performance server-rendered UI",
      "PostgreSQL + Prisma ORM for type-safe geospatial indexing and transactions",
      "Node.js micro-service endpoints for dispatch coordination",
      "Optimistic UI updates for high reliability under weak network conditions",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    githubUrl: "https://github.com/TechPrateek/MechOnWay",
    year: "2025",
    accentGlow: "rgba(245, 158, 11, 0.18)",
    featured: true,
    metrics: [
      { label: "Dispatch Precision", value: "< 50m" },
      { label: "Latency", value: "Sub-100ms" },
      { label: "Architecture", value: "Type-Safe" },
    ],
  },
];
