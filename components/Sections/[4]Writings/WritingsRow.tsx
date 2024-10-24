"use client";

import Link from "next/link";
import React from "react";
import { motion, useAnimate } from "framer-motion";
import { BookMarked } from "lucide-react";

interface CaseRowProps {
  pageUrl: string;
  title: string;
  description: string;
  imageURL?: string;
}

function WritingsRow({ pageUrl, title, description, imageURL }: CaseRowProps) {
  return (
    <Link href={pageUrl}>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{
          y: 2,
          boxShadow: [
            "0px 9px 3px rgba(105, 117, 134, 0)",
            "0px 6px 2px rgba(105, 117, 134, 0.01)",
            " 0px 3px 2px rgba(105, 117, 134, 0.05)",
            " 0px 1px 1px  rgba(105, 117, 134, 0.09)",
            "0px 0px 1px  rgba(105, 117, 134, 0.1)",
          ].join(", "),
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
        }}
        className="bg:white flex flex-col gap-[12px] border-b border-border px-[12px] py-[12px] text-maintext hover:border-0 hover:bg-subtle md:px-[20px]"
      >
        {imageURL ? <div className="h-[128px] w-full bg-muted"></div> : null}

        <div className="flex gap-[8px]">
          <BookMarked className="shrink-0 text-maintext" size={20} />

          <div className="flex flex-col gap-[4px]">
            <p className="line-clamp-1 text-[14px] font-semibold leading-snug">
              {title}
            </p>
            <p className="line-clamp-1 text-[12px] text-subtext">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default WritingsRow;
