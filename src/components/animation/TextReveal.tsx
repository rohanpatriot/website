"use client";

import { motion } from "framer-motion";
import { textRevealContainer, textRevealWord } from "@/lib/animations";

interface TextRevealProps {
  text: string;
  className?: string;
}

export function TextReveal({ text, className = "" }: TextRevealProps) {
  const words = text.split(" ");

  return (
    <motion.span
      variants={textRevealContainer}
      initial="hidden"
      animate="visible"
      className={`inline ${className}`}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden py-[0.1em] my-[-0.1em]">
          <motion.span variants={textRevealWord} className="inline-block">
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
