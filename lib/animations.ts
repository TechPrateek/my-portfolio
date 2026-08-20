import type { Variants, Transition } from "framer-motion";

export const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;
export const SMOOTH_EASE = [0.25, 0.1, 0.25, 1] as const;
export const SNAPPY_EASE = [0.34, 1.56, 0.64, 1] as const;

export const transitionFast: Transition = {
  duration: 0.4,
  ease: LUXURY_EASE,
};

export const transitionMedium: Transition = {
  duration: 0.7,
  ease: LUXURY_EASE,
};

export const transitionSlow: Transition = {
  duration: 1.1,
  ease: LUXURY_EASE,
};

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: transitionMedium,
  },
};

export const fadeInScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: transitionMedium,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const splitWordVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: LUXURY_EASE,
    },
  },
};

export const clipPathReveal: Variants = {
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
    opacity: 0,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: LUXURY_EASE,
    },
  },
};
