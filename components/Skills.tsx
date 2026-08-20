"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Sparkles } from "lucide-react";
import { skills, Skill } from "@/data/skills";

const CATEGORIES = ["All", "Languages", "Core Engineering", "Web & Backend", "Tools & Cloud"] as const;

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const filteredSkills = activeCategory === "All"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="stack" className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10 sm:mb-16">
        <span className="text-[11px] font-mono text-zinc-500 dark:text-[#5A5A5A] uppercase tracking-[0.25em]">
          04 // TECHNOLOGY ECOSYSTEM
        </span>
        <div className="h-[1px] flex-1 bg-black/10 dark:bg-white/[0.08]" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-950 dark:text-[#F5F5F5]">
            Engineering toolkit.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-[#8A8A8A] max-w-xl">
            A cohesive stack selected for computational speed, type safety, and architectural scalability.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-zinc-950 dark:bg-white text-white dark:text-black font-semibold shadow-md"
                  : "bg-zinc-100 dark:bg-white/[0.04] text-zinc-600 dark:text-[#8A8A8A] hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-white/[0.08] border border-zinc-200 dark:border-white/[0.08]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Matrix Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left / Grid of Interactive Skill Pills */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {filteredSkills.map((skill) => {
            const isHovered = hoveredSkill?.name === skill.name;
            return (
              <motion.div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill)}
                onClick={() => setHoveredSkill(skill)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer select-none flex flex-col justify-between min-h-[110px] ${
                  isHovered
                    ? "bg-sky-50 dark:bg-[#181818] border-sky-400 dark:border-sky-400/50 shadow-md dark:shadow-[0_8px_24px_rgba(56,189,248,0.12)]"
                    : "bg-white dark:bg-[#101010]/80 border-zinc-200 dark:border-white/[0.08] hover:border-zinc-300 dark:hover:border-white/20 hover:bg-zinc-50 dark:hover:bg-[#141414] shadow-sm dark:shadow-none"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-400 dark:text-[#5A5A5A] uppercase font-medium">
                    {skill.category.split(" ")[0]}
                  </span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isHovered ? "bg-sky-500 animate-ping" : "bg-zinc-300 dark:bg-white/20"
                    }`}
                  />
                </div>

                <div className="flex flex-col mt-3">
                  <span className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-[#F5F5F5] group-hover:text-sky-600 dark:group-hover:text-white tracking-tight">
                    {skill.name}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500 dark:text-[#8A8A8A] truncate mt-0.5">
                    {skill.level}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right / Live Inspector & Context Panel */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#101010]/95 border border-zinc-200 dark:border-white/[0.12] shadow-xl dark:shadow-2xl flex flex-col gap-6 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/[0.08] pb-4">
              <div className="flex items-center gap-2">
                <Sparkles size={15} className="text-sky-500 dark:text-sky-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-600 dark:text-[#8A8A8A] font-semibold">
                  TECH INSPECTOR
                </span>
              </div>
              <span className="text-[11px] font-mono text-zinc-400 dark:text-[#5A5A5A]">
                {hoveredSkill ? "ACTIVE INSPECTION" : "HOVER ANY SKILL"}
              </span>
            </div>

            {hoveredSkill ? (
              <div className="flex flex-col gap-5">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-[#F5F5F5]">
                    {hoveredSkill.name}
                  </h3>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-sky-50 dark:bg-sky-950/50 border border-sky-200 dark:border-sky-800/50 text-sky-700 dark:text-sky-300 font-medium">
                    {hoveredSkill.level}
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-[#5A5A5A] font-semibold">
                    PRIMARY FOCUS
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-300 leading-relaxed font-mono">
                    {hoveredSkill.focus}
                  </p>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-[#5A5A5A] font-semibold">
                    ENGINEERING CONTEXT
                  </span>
                  <p className="text-xs text-zinc-600 dark:text-[#8A8A8A] leading-relaxed">
                    {hoveredSkill.usageContext}
                  </p>
                </div>

                {hoveredSkill.highlightedInProjects.length > 0 && (
                  <div className="flex flex-col gap-2 pt-2 border-t border-zinc-200 dark:border-white/[0.08]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-[#5A5A5A] font-semibold">
                      APPLIED IN FEATURED PROJECTS
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {hoveredSkill.highlightedInProjects.map((p) => (
                        <a
                          key={p}
                          href="#projects"
                          className="px-2.5 py-1 rounded-md bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/40 text-[11px] font-mono text-sky-700 dark:text-sky-300 hover:bg-sky-100 dark:hover:bg-sky-900/50 transition-colors uppercase font-medium"
                        >
                          {p.toUpperCase()} ↗
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-3 text-zinc-400 dark:text-[#5A5A5A]">
                <Cpu size={32} className="stroke-[1.2] opacity-50" />
                <p className="text-xs font-mono max-w-xs">
                  Hover or tap any technology card to inspect its real-world implementation, focus areas, and project linkage.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
