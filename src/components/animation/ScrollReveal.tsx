"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-64px" });

  return (
    <motion.div
      ref={ref}
      variants={revealVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`${width === "full" ? "w-full" : "w-fit"} ${className}`}
    >
      {children}
    </motion.div>
  );
}
