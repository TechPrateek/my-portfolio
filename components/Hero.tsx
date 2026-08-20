"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Code, Database, Sparkles, MapPin } from "lucide-react";
import MagneticButton from "./motion/MagneticButton";
import HeroScene from "./3d/HeroScene";
import { LUXURY_EASE } from "@/lib/animations";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 20,
        y: (e.clientY / innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-10 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden select-none"
    >
      {/* Background Radial Glow Spotlight */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[750px] rounded-full blur-[140px] opacity-35 dark:opacity-35 opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(56,189,248,0.18) 0%, rgba(255,255,255,0.03) 50%, transparent 80%)",
          transform: `translate(calc(-50% + ${mousePos.x * 1.5}px), ${mousePos.y * 1.5}px)`,
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* Top Metadata Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: LUXURY_EASE }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 border-b border-white/[0.08] dark:border-white/[0.08] border-black/10 pb-6 text-[11px] sm:text-xs font-mono text-[#8A8A8A] dark:text-[#8A8A8A] text-zinc-600"
      >
        <div className="flex items-center gap-2">
          <MapPin size={13} className="text-sky-500" />
          <span>BASED IN INDIA</span>
        </div>
        <div className="flex items-center gap-2 sm:justify-center">
          <Code size={13} className="text-sky-500" />
          <span>SOFTWARE DEVELOPMENT</span>
        </div>
        <div className="flex items-center gap-2 sm:justify-end">
          <Database size={13} className="text-sky-500" />
          <span>DSA & COMPETITIVE PROGRAMMING</span>
        </div>
      </motion.div>

      {/* Central Hero Body with Split Typography and 3D Visual */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-10 lg:py-14">
        {/* Left / Center: Massive Editorial Display Typography */}
        <div className="lg:col-span-7 z-10 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: LUXURY_EASE }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] dark:bg-white/[0.04] bg-black/[0.04] border border-white/[0.08] dark:border-white/[0.08] border-black/10 w-fit text-[11px] font-mono tracking-widest text-[#8A8A8A] dark:text-[#8A8A8A] text-zinc-600 uppercase"
          >
            <Sparkles size={12} className="text-sky-500" />
            <span>ASPIRING SOFTWARE ENGINEER • B.TECH CS</span>
          </motion.div>

          {/* Name Display */}
          <div className="flex flex-col tracking-[-0.05em] leading-[0.88] uppercase">
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.35, ease: LUXURY_EASE }}
              className="text-[14vw] sm:text-[11vw] lg:text-[7.5rem] font-bold text-[#F5F5F5] dark:text-[#F5F5F5] text-zinc-950"
            >
              PRATEEK
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.45, ease: LUXURY_EASE }}
              className="text-[14vw] sm:text-[11vw] lg:text-[7.5rem] font-bold text-transparent bg-clip-text bg-gradient-to-r dark:from-[#F5F5F5] dark:via-[#D4D4D8] dark:to-[#71717A] from-zinc-950 via-zinc-800 to-zinc-500"
            >
              YADAV
            </motion.h1>
          </div>

          {/* Editorial Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: LUXURY_EASE }}
            className="text-base sm:text-lg lg:text-xl text-[#8A8A8A] dark:text-[#8A8A8A] text-zinc-600 max-w-xl font-normal leading-relaxed tracking-tight"
          >
            I build thoughtful digital products, solve algorithmic problems, and turn complex ideas into useful, high-performance web platforms.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: LUXURY_EASE }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <MagneticButton
              asAnchor
              href="#projects"
              className="group flex items-center gap-3 px-7 py-3.5 rounded-full dark:bg-[#F5F5F5] dark:text-[#080808] dark:hover:bg-white bg-zinc-950 text-white hover:bg-zinc-800 font-medium text-xs sm:text-sm tracking-wide uppercase transition-all shadow-[0_4px_20px_rgba(0,0,0,0.15)] cursor-pointer"
            >
              <span>VIEW MY WORK</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </MagneticButton>

            <MagneticButton
              asAnchor
              href="#contact"
              className="group flex items-center gap-3 px-7 py-3.5 rounded-full dark:bg-white/[0.04] dark:text-[#F5F5F5] dark:border-white/10 dark:hover:bg-white/[0.08] bg-black/[0.04] text-zinc-900 border border-black/10 hover:bg-black/[0.08] font-medium text-xs sm:text-sm tracking-wide uppercase transition-all cursor-pointer"
            >
              <span>CONTACT</span>
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform text-[#8A8A8A] dark:text-[#8A8A8A] text-zinc-500" />
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right: 3D Interactive Solar System Canvas */}
        <div className="lg:col-span-5 min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] relative flex items-center justify-center">
          <HeroScene />
        </div>
      </div>

      {/* Bottom Exploration Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9, ease: LUXURY_EASE }}
        className="flex items-center justify-between border-t border-white/[0.08] dark:border-white/[0.08] border-black/10 pt-6 text-xs font-mono text-[#5A5A5A] dark:text-[#5A5A5A] text-zinc-500"
      >
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500" />
          <span className="tracking-widest uppercase text-[10px]">SCROLL TO EXPLORE</span>
        </div>
        <div className="animate-bounce">
          <ArrowDown size={14} className="text-[#8A8A8A] dark:text-[#8A8A8A] text-zinc-500" />
        </div>
      </motion.div>
    </section>
  );
}
