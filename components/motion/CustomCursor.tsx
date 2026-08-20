"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "../ThemeProvider";

export type CursorMode = "default" | "hover" | "view_project" | "text" | "hidden";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const [projectText, setProjectText] = useState<string>("VIEW ↗");
  const { theme } = useTheme();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for lag-free luxury cursor feel
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest("[data-cursor='project']");
      const clickable = target.closest("button, a, input, [role='button'], [data-cursor='pointer']");
      const textElement = target.closest("h1, h2, h3, p, [data-cursor='text']");

      if (projectCard) {
        setMode("view_project");
        const customText = projectCard.getAttribute("data-cursor-text") || "VIEW ↗";
        setProjectText(customText);
      } else if (clickable) {
        setMode("hover");
      } else if (textElement) {
        setMode("default");
      } else {
        setMode("default");
      }
    };

    const handleMouseLeaveWindow = () => {
      setMode("hidden");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  const isDark = theme === "dark";
  const isProject = mode === "view_project";
  const isHover = mode === "hover";
  const isHidden = mode === "hidden";

  return (
    <div className="pointer-events-none fixed inset-0 z-9999 overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none select-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isProject ? 90 : isHover ? 48 : isHidden ? 0 : 10,
          height: isProject ? 90 : isHover ? 48 : isHidden ? 0 : 10,
          backgroundColor: isProject
            ? isDark ? "rgba(245, 245, 245, 0.95)" : "rgba(9, 9, 11, 0.95)"
            : isHover
            ? isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)"
            : isDark ? "rgba(245, 245, 245, 0.9)" : "rgba(9, 9, 11, 0.85)",
          backdropFilter: isHover || isProject ? "blur(8px)" : "none",
          border: isHover ? (isDark ? "1px solid rgba(255, 255, 255, 0.3)" : "1px solid rgba(0, 0, 0, 0.2)") : "none",
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 300,
          mass: 0.4,
        }}
      >
        {isProject && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={`text-[11px] font-semibold tracking-wider uppercase ${
              isDark ? "text-black" : "text-white"
            }`}
          >
            {projectText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
