"use client";
import { motion } from "framer-motion";

export function Overlay() {
  return (
    <motion.div
      initial={{ backdropFilter: "blur(4px)" }}
      animate={{
        backdropFilter: "blur(0px)",
        opacity: 0,
        transition: { duration: 0.6 },
        transitionEnd: { display: "none" },
      }}
      className="kontol pointer-events-none fixed top-0 z-[48] mx-auto h-svh w-full bg-white/40"
    />
  );
}
