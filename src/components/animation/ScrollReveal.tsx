"use client";

import { motion } from "framer-motion";
import { revealVariants } from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  width?: "full" | "fit";
}

export function ScrollReveal({
  children,
  className = "",
  width = "full",
}: ScrollRevealProps) {
  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-64px" }}
      className={`${width === "full" ? "w-full" : "w-fit"} ${className}`}
    >
      {children}
    </motion.div>
  );
}
