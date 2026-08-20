"use client";

const MARQUEE_ITEMS = [
  "SOFTWARE DEVELOPMENT",
  "DATA STRUCTURES",
  "PROBLEM SOLVING",
  "CREATIVE ENGINEERING",
  "FULL STACK ARCHITECTURE",
  "COMPETITIVE PROGRAMMING",
  "DISTRIBUTED SYSTEMS",
];

export default function Marquee() {
  return (
    <section className="relative w-full py-7 sm:py-9 border-y border-zinc-200 dark:border-white/[0.08] bg-zinc-50 dark:bg-[#0A0A0A] overflow-hidden select-none">
      {/* Edge gradient masks for seamless fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-zinc-50 dark:from-[#080808] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-zinc-50 dark:from-[#080808] to-transparent z-10" />

      <div className="flex w-max animate-marquee-left">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 sm:gap-10 px-3 sm:px-5">
            <span className="text-xs sm:text-sm md:text-base font-mono tracking-[0.25em] text-zinc-600 dark:text-[#8A8A8A] uppercase hover:text-sky-600 dark:hover:text-white transition-colors font-medium">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500/50 dark:bg-white/20" />
          </div>
        ))}
      </div>
    </section>
  );
}
