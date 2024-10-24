"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const hidden = {
  opacity: 0,
  y: 24,
};

const visible = {
  opacity: 1,
  y: 0,
};

export function FadeUp({ children, delay, duration, className }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      variants={{ visible, hidden }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: delay, type: "spring", duration: duration }}
    >
      {children}
    </motion.div>
  );
}
