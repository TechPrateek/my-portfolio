"use client";

import { motion } from "framer-motion";
import { LUXURY_EASE } from "@/lib/animations";

interface TextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export default function TextReveal({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.04,
  as: Component = "span",
}: TextRevealProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 32,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.75,
        ease: LUXURY_EASE,
      },
    },
  };

  return (
    <Component className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="inline-flex flex-wrap gap-x-[0.28em] gap-y-[0.08em]"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={child}
            className={`inline-block ${wordClassName}`}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}
