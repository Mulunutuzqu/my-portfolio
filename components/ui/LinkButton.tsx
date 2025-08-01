"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Download,
  Eye,
  EyeClosed,
  File,
} from "lucide-react";
import { Scada } from "next/font/google";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  internal?: boolean;
  asToggle?: boolean;
  inTab?: true;
  isToggledOn?: boolean;
  asDownload?: boolean;
}

const linkMotion = {
  hover: {
    // scale: 1.6,
    x: 4,
    y: -8,
  },
};
const downloadMotion = {
  hover: {
    // scale: 1.6,
    x: 4,
    y: -8,
  },
};

export default function LinkButton({
  href,
  children,
  internal,
  asToggle,
  isToggledOn,
  asDownload,
  inTab,
}: LinkButtonProps) {
  return asToggle ? (
    <motion.p
      whileHover="hover"
      className={clsx(
        internal ? "pr-[8px]" : "pr-[4px]",
        isToggledOn
          ? "border-border bg-muted text-primary shadow-none"
          : "shadow-custom border-white bg-white text-maintext",
        "group z-20 inline-block rounded-sm border pl-[8px] text-[15px] transition-all duration-300 ease-out hover:border-border hover:bg-muted hover:text-primary hover:shadow-none",
      )}
    >
      {children}
      {internal ? null : (
        <motion.span
          variants={linkMotion}
          className="relative ml-[4px] inline-block text-primary"
        >
          {isToggledOn ? (
            <Eye
              size={14}
              strokeWidth={2.5}
              className="transition-all ease-out group-hover:scale-[1.8]"
            />
          ) : (
            <EyeClosed
              size={14}
              strokeWidth={2.5}
              className="transition-all ease-out group-hover:scale-[1.8]"
            />
          )}
        </motion.span>
      )}
    </motion.p>
  ) : (
    <Link href={href} target={inTab ? "_self" : "_blank"}>
      <motion.p
        whileHover="hover"
        className={clsx(
          internal ? "pr-[8px]" : "pr-[4px]",
          "shadow-custom group z-20 inline-block rounded-sm border border-white bg-white pl-[8px] text-[15px] text-maintext transition-all duration-300 ease-out hover:border-border hover:bg-muted hover:text-primary hover:shadow-none",
        )}
      >
        {children}
        {internal ? null : (
          <motion.span
            variants={linkMotion}
            className={clsx(
              asDownload ? "ml-[2px]" : "ml-[2px]",
              "] relative inline-block text-primary",
            )}
          >
            {asDownload ? (
              <span className="relative flex flex-col gap-[5px] group-hover:animate-bounce">
                <ArrowUpRight
                  className="relative transition-all ease-out group-hover:top-[8px] group-hover:rotate-[135deg] group-hover:scale-[1]"
                  size={14}
                  strokeWidth={2.5}
                />
                <File
                  size={14}
                  strokeWidth={2.5}
                  className="absolute bottom-[-6px] hidden place-self-center transition-all ease-out group-hover:block group-hover:scale-[1.8]"
                />
                {/* <span className=" /> */}
              </span>
            ) : (
              <ArrowUpRight
                className="transition-all ease-out group-hover:scale-[1.8]"
                size={14}
                strokeWidth={2.5}
              />
            )}
          </motion.span>
        )}
      </motion.p>
    </Link>
  );
}

// {isToggledOn ? (
//     <p className="z-20 inline-block rounded-sm border border-border bg-muted pl-[8px] pr-[8px] text-[15px] text-primary shadow-none transition-all duration-300 ease-out">
//       {children}
//       {internal ? null : (
//         <span className="ml-[2px] inline-block text-primary">
//           <ArrowUpRight size={14} strokeWidth={2.5} />
//         </span>
//       )}
//     </p>
