import type { Variants, Transition } from "framer-motion";

// Shared easing — precise, mechanical, no bounce
export const easeSwiss: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export const transition: Transition = {
  duration: 0.6,
  ease: easeSwiss,
};

export const transitionFast: Transition = {
  duration: 0.35,
  ease: easeSwiss,
};

// Page transition variants
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeSwiss,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.4,
      ease: easeSwiss,
    },
  },
};

// Scroll reveal variants
export const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeSwiss,
    },
  },
};

// Stagger container variants
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Stagger item variants
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeSwiss,
    },
  },
};

// Text reveal variants (word-by-word)
export const textRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

export const textRevealWord: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeSwiss,
    },
  },
};
