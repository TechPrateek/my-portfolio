"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu } from "lucide-react";
import ScrollReveal from "./motion/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Tag */}
      <div className="flex items-center gap-3 mb-10 sm:mb-16">
        <span className="text-[11px] font-mono text-[#5A5A5A] uppercase tracking-[0.25em]">
          01 // PHILOSOPHY & IDENTITY
        </span>
        <div className="h-[1px] flex-1 bg-white/[0.08]" />
      </div>

      {/* 2-Column Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Large Bold Statement */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.08] text-[#F5F5F5]">
            I like turning <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-white to-zinc-400">complex problems</span> into simple, reliable experiences.
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/[0.08]">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A5A5A]">DEGREE</span>
              <span className="text-sm sm:text-base font-medium text-[#F5F5F5]">B.Tech (2024–28)</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A5A5A]">DISCIPLINE</span>
              <span className="text-sm sm:text-base font-medium text-[#F5F5F5]">Software Eng.</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A5A5A]">ALGORITHMS</span>
              <span className="text-sm sm:text-base font-medium text-sky-400 font-mono">350+ Solved</span>
            </div>
          </div>
        </div>

        {/* Right Column: Short Personal Narrative & Pillars */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <ScrollReveal delay={0.2}>
            <p className="text-base sm:text-lg text-[#8A8A8A] leading-relaxed font-normal">
              Prateek Yadav is a computer science undergraduate focused on software development, data structures and algorithms, computational problem solving, and building high-utility digital platforms.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-sm sm:text-base text-[#8A8A8A] leading-relaxed font-normal">
              Whether architecting full-stack systems like on-demand geolocation dispatchers or optimizing algorithmic solutions under strict contest time limits, the goal remains identical: clean code, provable correctness, and deliberate design.
            </p>
          </ScrollReveal>

          {/* Three Core Principles */}
          <div className="flex flex-col gap-4 pt-2">
            <ScrollReveal delay={0.4} className="flex items-start gap-4 p-4 rounded-xl bg-[#101010]/80 border border-white/[0.08]">
              <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Cpu size={18} />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F5] font-semibold">Algorithmic Rigor</h4>
                <p className="text-xs text-[#8A8A8A] leading-normal">
                  Approaching engineering challenges through asymptotic analysis, optimal space/time bounds, and clean data structures.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5} className="flex items-start gap-4 p-4 rounded-xl bg-[#101010]/80 border border-white/[0.08]">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Terminal size={18} />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F5] font-semibold">Full-Stack Reliability</h4>
                <p className="text-xs text-[#8A8A8A] leading-normal">
                  Building type-safe architectures with Next.js, Node.js, PostgreSQL, and Prisma with strict data integrity.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
