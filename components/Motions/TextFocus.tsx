"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface BorderHighlightProps {
  transition: {
    type: string;
    bounce: number;
    duration: number;
  };
  blurAmount: string;
}

const BorderHighlight = ({ transition, blurAmount }: BorderHighlightProps) => (
  <motion.div
    layout
    layoutId="active-tab"
    className="absolute inset-0 z-0 flex items-end justify-center rounded-[22px]"
    transition={transition}
  >
    <motion.span
      className="absolute left-[-1px] top-[1px] h-2 w-2 border-primary"
      style={{
        borderWidth: 2.5,
        borderBottom: 0,
        borderRight: 0,
      }}
    />
    <motion.span
      className="absolute right-[-1px] top-[1px] h-2 w-2 border-primary"
      style={{
        borderWidth: 2.5,
        borderBottom: 0,
        borderLeft: 0,
      }}
    />
    <motion.span
      className="absolute bottom-[-1px] right-[-1px] h-2 w-2 border-primary"
      style={{ borderWidth: 2.5, borderTop: 0, borderLeft: 0 }}
    />
    <motion.span
      className="absolute bottom-[-1px] left-[-1px] h-2 w-2 border-primary"
      style={{
        borderWidth: 2.5,
        borderTop: 0,
        borderRight: 0,
      }}
    />
  </motion.div>
);

export default function TextFocus() {
  const [activeWord, setActiveWord] = useState("needs");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prevWord) => (prevWord === "needs" ? "pain" : "needs"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const transition = {
    type: "spring",
    bounce: 0.2,
    duration: 0.6,
  };

  const textBlurVariant = {
    noBlur: { filter: "blur(0px)", color: "inherit" },
    blurred: { filter: "blur(3px)", color: "hsla(215.4 16.3% 46.9%)" },
  };

  const blurAmount = "3px";

  return (
    <motion.div
      layout
      layoutId="wrapper"
      className="inline-block text-[14px] text-maintext"
    >
      <motion.ul layoutId="container" className="relative flex gap-[6px]">
        <motion.li className="relative pl-[2px] pr-[2px] font-bold">
          <motion.p
            className="relative z-10"
            variants={textBlurVariant}
            initial="blurred"
            animate={activeWord === "needs" ? "noBlur" : "blurred"}
            transition={transition}
          >
            needs
          </motion.p>
          {activeWord === "needs" ? (
            <BorderHighlight transition={transition} blurAmount={blurAmount} />
          ) : null}
        </motion.li>
        <motion.li className="text-subtext">and</motion.li>
        <motion.li className="relative pl-[2px] pr-[2px] font-bold">
          <motion.p
            className={"relative z-10"}
            variants={textBlurVariant}
            initial="blurred"
            animate={activeWord === "pain" ? "noBlur" : "blurred"}
            transition={transition}
          >
            pain points
          </motion.p>
          {activeWord === "pain" ? (
            <BorderHighlight transition={transition} blurAmount={blurAmount} />
          ) : null}
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}
