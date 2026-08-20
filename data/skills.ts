export interface Skill {
  name: string;
  category: "Languages" | "Core Engineering" | "Web & Backend" | "Tools & Cloud";
  focus: string;
  usageContext: string;
  highlightedInProjects: string[];
  level: string;
  iconSlug: string;
}

export const skills: Skill[] = [
  {
    name: "C++",
    category: "Languages",
    focus: "Low-level optimization, STL, Competitive Programming",
    usageContext: "Primary language for high-speed algorithmic execution, competitive contests, and memory-critical problem solving.",
    highlightedInProjects: [],
    level: "Core Strength",
    iconSlug: "cpp",
  },
  {
    name: "TypeScript",
    category: "Languages",
    focus: "Strict type safety, generic architectures, enterprise scalability",
    usageContext: "End-to-end type safety across client UI, server actions, database schema definitions, and API contracts.",
    highlightedInProjects: ["mechonway", "physioconnect"],
    level: "Production Ready",
    iconSlug: "typescript",
  },
  {
    name: "JavaScript",
    category: "Languages",
    focus: "ES6+, asynchronous event loops, DOM, functional patterns",
    usageContext: "Modern web runtime programming, asynchronous client-server event streams, and dynamic DOM orchestration.",
    highlightedInProjects: ["mechonway", "physioconnect"],
    level: "Advanced",
    iconSlug: "javascript",
  },
  {
    name: "Java",
    category: "Languages",
    focus: "Object-oriented design, robust concurrency, design patterns",
    usageContext: "Object-Oriented Programming principles, solid architectural design patterns, and enterprise backend engineering.",
    highlightedInProjects: [],
    level: "Proficient",
    iconSlug: "java",
  },
  {
    name: "Python",
    category: "Languages",
    focus: "Scripting, rapid prototyping, mathematical computing",
    usageContext: "Algorithmic exploration, automation scripts, and backend data transformation tasks.",
    highlightedInProjects: [],
    level: "Proficient",
    iconSlug: "python",
  },
  {
    name: "DSA",
    category: "Core Engineering",
    focus: "Graphs, Dynamic Programming, Trees, Heaps, Complexity Analysis",
    usageContext: "Solving complex computational problems with provably optimal time and space complexity bounds (350+ solved).",
    highlightedInProjects: ["mechonway"],
    level: "Advanced",
    iconSlug: "dsa",
  },
  {
    name: "OOP",
    category: "Core Engineering",
    focus: "Encapsulation, Polymorphism, Abstraction, SOLID Principles",
    usageContext: "Designing modular, maintainable, and decoupled software architectures with strict boundary definitions.",
    highlightedInProjects: ["mechonway", "physioconnect"],
    level: "Advanced",
    iconSlug: "oop",
  },
  {
    name: "Next.js",
    category: "Web & Backend",
    focus: "App Router, Server Components, SSR/SSG, Server Actions",
    usageContext: "Building full-stack web applications with zero-bundle server logic, SEO optimization, and instant hydration.",
    highlightedInProjects: ["mechonway", "physioconnect"],
    level: "Production Ready",
    iconSlug: "nextjs",
  },
  {
    name: "Node.js",
    category: "Web & Backend",
    focus: "REST APIs, asynchronous runtime, microservices",
    usageContext: "Scalable backend services, custom middleware, auth verification pipelines, and asynchronous dispatch servers.",
    highlightedInProjects: ["mechonway", "physioconnect"],
    level: "Production Ready",
    iconSlug: "nodejs",
  },
  {
    name: "PostgreSQL",
    category: "Web & Backend",
    focus: "Relational modeling, indexing, ACID transactions, geospatial data",
    usageContext: "Persistent data storage, complex relational joins, geospatial proximity queries, and data integrity guarantees.",
    highlightedInProjects: ["mechonway", "physioconnect"],
    level: "Production Ready",
    iconSlug: "postgresql",
  },
  {
    name: "Prisma",
    category: "Web & Backend",
    focus: "Type-safe ORM, automated migrations, relational querying",
    usageContext: "Zero-error database schema definition, type-safe queries with TypeScript, and seamless migration workflows.",
    highlightedInProjects: ["mechonway", "physioconnect"],
    level: "Production Ready",
    iconSlug: "prisma",
  },
  {
    name: "Git & GitHub",
    category: "Tools & Cloud",
    focus: "Version control, branching strategies, collaborative workflows",
    usageContext: "Disciplined version control, modular commit hygiene, PR reviews, and automated deployment pipelines.",
    highlightedInProjects: ["mechonway", "physioconnect"],
    level: "Proficient",
    iconSlug: "git",
  },
];
