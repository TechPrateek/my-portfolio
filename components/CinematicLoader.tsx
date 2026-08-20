"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LUXURY_EASE } from "@/lib/animations";

interface CinematicLoaderProps {
  onComplete?: () => void;
}

export default function CinematicLoader({ onComplete }: CinematicLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("prateek_portfolio_loaded");
    if (hasLoaded) {
      setIsFinished(true);
      if (onComplete) onComplete();
      return;
    }

    const duration = 1200;
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            sessionStorage.setItem("prateek_portfolio_loaded", "true");
            if (onComplete) onComplete();
          }, 200);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="cinematic-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            filter: "blur(12px)",
            transition: { duration: 0.75, ease: LUXURY_EASE },
          }}
          className="fixed inset-0 z-10000 flex flex-col items-center justify-center bg-[#080808] text-[#F5F5F5] select-none"
        >
          <div className="absolute inset-0 bg-noise pointer-events-none opacity-40" />

          <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: LUXURY_EASE }}
              className="text-[11px] font-mono tracking-[0.3em] text-[#8A8A8A] uppercase"
            >
              PORTFOLIO 2026
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.65, delay: 0.15, ease: LUXURY_EASE }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5]"
            >
              PRATEEK YADAV
            </motion.div>

            <div className="flex flex-col items-center gap-2 mt-2 w-48 sm:w-60">
              <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-sky-400 rounded-full"
                  style={{ width: `${Math.round(progress)}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
              <div className="flex justify-between w-full text-[10px] font-mono text-[#5A5A5A] tracking-wider">
                <span>INITIALIZING</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
