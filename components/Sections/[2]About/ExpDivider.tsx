import { motion } from "motion/react";

interface ExpDividerProps {
  keyID: string;
}

const transition = {
  type: "spring",
  bounce: 0.25,
  duration: 0.4,
};

export default function ExpDivider({ keyID }: ExpDividerProps) {
  return (
    <motion.div
      key={keyID}
      layout
      className="flex h-[1px] w-full bg-border"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: 8,
        transition: { duration: 0.1 },
      }}
      transition={transition}
    />
  );
}
