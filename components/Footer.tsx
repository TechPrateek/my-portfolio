"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import MagneticButton from "./motion/MagneticButton";

const FOOTER_LINKS = [
  { name: "LeetCode", url: "https://leetcode.com/u/TechPrateek" },
  { name: "Codolio", url: "https://codolio.com/profile/MasterPrateek" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/prateekyadav360/" },
  { name: "GitHub", url: "https://github.com/TechPrateek" },
];

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#050505] text-[#8A8A8A] py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Row: Identity & Status */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          <div className="md:col-span-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-lg sm:text-xl text-[#F5F5F5] tracking-tight">
                PRATEEK YADAV
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#5A5A5A] uppercase border border-white/10 rounded px-2 py-0.5">
                B.TECH CSE (2024–2028)
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#8A8A8A] max-w-md font-normal leading-relaxed">
              Software Developer & B.Tech CSE student at Galgotias College of Engineering and Technology. Specialized in algorithms, competitive problem solving, and modern full-stack web platforms.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-wrap md:justify-end gap-6 sm:gap-10">
            {/* Live IST clock */}
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A5A5A]">
                LOCAL TIME (IST)
              </span>
              <span className="text-xs font-mono font-medium text-[#F5F5F5]">
                {currentTime || "10:45:00 PM"} (UTC+5:30)
              </span>
            </div>

            {/* Availability Beacon */}
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A5A5A]">
                SYSTEM STATUS
              </span>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>AVAILABLE FOR OPPORTUNITIES</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Navigation & Profiles Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-y border-white/[0.06] py-6">
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono tracking-wider text-[#8A8A8A] hover:text-[#F5F5F5] transition-colors"
              >
                {link.name.toUpperCase()} ↗
              </a>
            ))}
          </div>

          <MagneticButton
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-zinc-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={13} />
          </MagneticButton>
        </div>

        {/* Bottom Copyright & Tech Stack Mention */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#5A5A5A]">
          <div>
            © {new Date().getFullYear()} PRATEEK YADAV. ALL RIGHTS RESERVED.
          </div>
          <div>
            BUILT WITH NEXT.JS, TYPESCRIPT, THREE.JS & MOTION.
          </div>
        </div>
      </div>
    </footer>
  );
}
