"use client";

import { GraduationCap, Building2, Calendar } from "lucide-react";
import { journeyTimeline } from "@/data/journey";
import ScrollReveal from "./motion/ScrollReveal";

export default function Experience() {
  return (
    <section id="journey" className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10 sm:mb-16">
        <span className="text-[11px] font-mono text-zinc-500 dark:text-[#5A5A5A] uppercase tracking-[0.25em]">
          05 // JOURNEY & MILESTONES
        </span>
        <div className="h-[1px] flex-1 bg-black/10 dark:bg-white/[0.08]" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-950 dark:text-[#F5F5F5]">
            Engineering roadmap.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-[#8A8A8A] max-w-xl">
            Academic progression and engineering foundations at Galgotias College of Engineering and Technology.
          </p>
        </div>

        <div className="text-xs font-mono text-zinc-400 dark:text-[#5A5A5A] hidden sm:block">
          ACADEMIC TIMELINE
        </div>
      </div>

      {/* Vertical Animated Timeline */}
      <div className="relative border-l border-zinc-300 dark:border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 flex flex-col gap-12 sm:gap-16">
        {journeyTimeline.map((item, idx) => (
          <ScrollReveal key={idx} delay={idx * 0.15} className="relative flex flex-col gap-3">
            {/* Illuminated Node Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center w-3.5 h-3.5 rounded-full bg-white dark:bg-[#080808] border-2 border-sky-500 shadow-[0_0_8px_rgba(56,189,248,0.5)]">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            </div>

            {/* Timeline Item Content Card */}
            <div className="flex flex-col gap-5 p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#101010]/85 border border-zinc-200 dark:border-white/[0.08] hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 dark:border-white/[0.06] pb-5">
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 px-3 py-1 rounded-lg border border-sky-200 dark:border-sky-800/40 flex items-center gap-2">
                    <Calendar size={14} />
                    {item.year}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 dark:text-[#8A8A8A]">
                    {item.period}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-zinc-600 dark:text-[#8A8A8A] uppercase tracking-wider px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.06] flex items-center gap-1.5 font-medium">
                  <GraduationCap size={13} className="text-sky-500 dark:text-sky-400" />
                  {item.type}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="text-2xl sm:text-3xl font-semibold text-zinc-950 dark:text-[#F5F5F5] tracking-tight">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-sm sm:text-base font-mono text-zinc-800 dark:text-zinc-300 font-medium">
                  <Building2 size={16} className="text-sky-500 dark:text-sky-400" />
                  <span>{item.subtitle}</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-600 dark:text-[#8A8A8A] leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-200 dark:border-white/[0.06]">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-3 py-1 rounded-md bg-zinc-100 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.06] text-zinc-700 dark:text-zinc-400 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
