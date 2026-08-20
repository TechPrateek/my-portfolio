"use client";

import { ShieldCheck, Sparkles } from "lucide-react";
import { achievements } from "@/data/achievements";
import ScrollReveal from "./motion/ScrollReveal";

export default function Achievements() {
  return (
    <section className="relative py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10 sm:mb-14">
        <span className="text-[11px] font-mono text-[#5A5A5A] uppercase tracking-[0.25em]">
          06 // VERIFIED BENCHMARKS
        </span>
        <div className="h-[1px] flex-1 bg-white/[0.08]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {achievements.map((item, idx) => (
          <ScrollReveal
            key={item.id}
            delay={idx * 0.1}
            className={`p-6 sm:p-7 rounded-2xl sm:rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
              item.highlight
                ? "bg-[#121212] border-sky-400/30 shadow-[0_10px_30px_rgba(56,189,248,0.06)]"
                : "bg-[#0E0E0E] border-white/[0.07] hover:border-white/15"
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A5A5A]">
                {item.category}
              </span>
              {item.highlight ? (
                <Sparkles size={16} className="text-sky-400" />
              ) : (
                <ShieldCheck size={16} className="text-zinc-600" />
              )}
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-3xl sm:text-4xl font-bold font-mono text-[#F5F5F5] tracking-tight">
                {item.metric}
                <span className="text-sky-400 text-2xl font-light ml-0.5">{item.unit}</span>
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-[#F5F5F5] mt-1">
                {item.title}
              </h3>
              <p className="text-xs text-[#8A8A8A] leading-relaxed mt-1">
                {item.detail}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
