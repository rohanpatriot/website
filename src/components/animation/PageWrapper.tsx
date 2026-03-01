"use client";

import { motion, MotionConfig } from "framer-motion";
import { pageVariants } from "@/lib/animations";

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="enter"
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
