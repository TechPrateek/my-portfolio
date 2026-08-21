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
    id: "mechonway",
    num: "01",
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
    liveUrl: "https://mechonway.vercel.app",
    githubUrl: "https://github.com/TechPrateek/mechonway",
    year: "2025",
    accentGlow: "rgba(56, 189, 248, 0.15)",
    featured: true,
    metrics: [
      { label: "Dispatch Precision", value: "< 50m" },
      { label: "Latency", value: "Sub-100ms" },
      { label: "Architecture", value: "Type-Safe" },
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
