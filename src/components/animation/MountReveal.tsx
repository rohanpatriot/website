"use client";

import { motion } from "framer-motion";
import { revealVariants } from "@/lib/animations";

interface MountRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function MountReveal({
  children,
  className = "",
  delay,
}: MountRevealProps) {
  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      animate="visible"
      transition={delay ? { delay } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
