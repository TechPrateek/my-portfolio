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
    id: "physioconnect",
    num: "02",
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
    ],
    architectureHighlights: [
      "Next.js full-stack architecture with zero-latency Server Actions",
      "Prisma ORM enforcing strict relational patient-therapist data boundaries",
      "PostgreSQL with indexed queries for longitudinal recovery analytics",
      "Clean modular component library with accessible WCAG-compliant design",
    ],
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Better-Auth", "Razorpay", "Tailwind CSS"],
    liveUrl: "https://physioconnect-xi.vercel.app",
    githubUrl: "https://github.com/TechPrateek/physioconnect",
    year: "2025",
    accentGlow: "rgba(110, 231, 183, 0.15)",
    featured: true,
    metrics: [
      { label: "Workflows", value: "Automated" },
      { label: "Stack", value: "Full Stack" },
      { label: "Data Integrity", value: "100% ACID" },
    ],
  },
];
