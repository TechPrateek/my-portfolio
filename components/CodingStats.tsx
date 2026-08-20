"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ArrowUpRight, Trophy, Flame, Target, Code2, Zap } from "lucide-react";
import { primaryStats, platformProfiles } from "@/data/codingStats";
import ScrollReveal from "./motion/ScrollReveal";
import { LeetCodeIcon, CodolioIcon, LinkedinIcon, GithubIcon } from "./icons/BrandIcons";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1600;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono font-bold tracking-tight text-zinc-950 dark:text-[#F5F5F5]">
      {count}
      {suffix}
    </span>
  );
}

function getPlatformIcon(name: string) {
  switch (name) {
    case "LeetCode":
      return <LeetCodeIcon size={18} className="text-amber-500" />;
    case "Codolio":
      return <CodolioIcon size={18} className="text-sky-500" />;
    case "LinkedIn":
      return <LinkedinIcon size={18} className="text-sky-500" />;
    case "GitHub":
      return <GithubIcon size={18} className="text-zinc-900 dark:text-white" />;
    default:
      return <Code2 size={18} className="text-zinc-500" />;
  }
}

export default function CodingStats() {
  return (
    <section id="problem-solving" className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10 sm:mb-16">
        <span className="text-[11px] font-mono text-zinc-500 dark:text-[#5A5A5A] uppercase tracking-[0.25em]">
          03 // ALGORITHMIC TELEMETRY
        </span>
        <div className="h-[1px] flex-1 bg-black/10 dark:bg-white/[0.08]" />
      </div>

      <div className="flex flex-col gap-4 mb-14 sm:mb-18">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-zinc-950 dark:text-[#F5F5F5]">
          BUILT THROUGH <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 dark:from-sky-400 via-zinc-800 dark:via-white to-zinc-500 dark:to-zinc-400">PROBLEM SOLVING.</span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-[#8A8A8A] max-w-2xl">
          Continuous algorithmic training to cultivate structural intuition, mathematical precision, and edge-case resilience across competitive platforms.
        </p>
      </div>

      {/* Hero Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {primaryStats.map((stat, idx) => (
          <ScrollReveal
            key={stat.id}
            delay={idx * 0.15}
            className="group relative flex flex-col justify-between p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#101010]/90 border border-zinc-200 dark:border-white/[0.08] hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-[#5A5A5A]">
                {stat.sublabel}
              </span>
              {stat.id === "max-rating" ? (
                <Trophy size={20} className="text-amber-500" />
              ) : stat.id === "total-solved" ? (
                <Flame size={20} className="text-orange-500" />
              ) : (
                <Target size={20} className="text-sky-500" />
              )}
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-4xl sm:text-5xl lg:text-6xl text-zinc-950 dark:text-[#F5F5F5]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-xs sm:text-sm font-mono tracking-wider text-zinc-900 dark:text-[#F5F5F5] uppercase mt-2 font-semibold">
                {stat.label}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-[#8A8A8A] leading-relaxed mt-2">
                {stat.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Platform Profile Links Hub */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-600 dark:text-[#8A8A8A]">
            VERIFIED COMPETITIVE & CODING PROFILES
          </span>
          <span className="text-[11px] font-mono text-zinc-400 dark:text-[#5A5A5A]">
            DIRECT VERIFICATION
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {platformProfiles.slice(0, 4).map((platform, idx) => (
            <ScrollReveal key={platform.name} delay={idx * 0.1}>
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#0D0D0D] border border-zinc-200 dark:border-white/[0.08] hover:border-sky-500/40 dark:hover:border-sky-400/40 hover:bg-zinc-50 dark:hover:bg-[#141414] transition-all duration-300 shadow-sm dark:shadow-none h-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    {getPlatformIcon(platform.name)}
                    <span className="font-semibold text-base text-zinc-900 dark:text-[#F5F5F5] group-hover:text-sky-600 dark:group-hover:text-white transition-colors">
                      {platform.name}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-zinc-400 dark:text-[#5A5A5A] group-hover:text-zinc-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="text-xs font-mono text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors font-medium">
                    {platform.handle}
                  </div>
                  <div className="text-[11px] font-mono text-zinc-500 dark:text-[#8A8A8A]">
                    {platform.stats}
                  </div>
                  <div className="inline-block mt-2 text-[10px] font-mono text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 px-2 py-0.5 rounded border border-sky-200 dark:border-sky-800/40 w-fit font-medium">
                    {platform.badge}
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Extended platform badges row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {platformProfiles.slice(4).map((platform) => (
            <div
              key={platform.name}
              className="flex items-center justify-between p-4 rounded-xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.05] text-xs font-mono text-zinc-600 dark:text-[#8A8A8A]"
            >
              <div className="flex items-center gap-2">
                <Zap size={13} className="text-sky-500 dark:text-sky-400" />
                <span className="text-zinc-800 dark:text-zinc-300">{platform.name}</span>
              </div>
              <span className="text-[11px] text-zinc-400 dark:text-[#5A5A5A]">{platform.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
