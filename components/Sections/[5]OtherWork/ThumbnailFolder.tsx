"use client";

import Image from "next/image";

import { Lock } from "lucide-react";
import { motion } from "framer-motion";

interface ThumbnailFolderProps {
  thumbUrl1: string;
  thumbUrl2: string;
  thumbUrl3: string;
  name: string;
  empty?: boolean;
}

function ThumbnailFolder({
  thumbUrl1,
  thumbUrl2,
  thumbUrl3,
  name,
  empty,
}: ThumbnailFolderProps) {
  return (
    <motion.div className="flex cursor-not-allowed flex-col">
      <div
        className={`flex h-[14px] w-3/4 rounded-t-[10px] ${empty ? "bg-[#F8FAFC]" : "bg-[#F5F8FE]"}`}
      ></div>
      <div
        className={`${empty ? "bg-[#F8FAFC]" : "folder card-shadow"} flex h-[80px] w-full flex-col justify-end overflow-hidden rounded-b-[10px] rounded-tr-[10px]`}
      >
        <div
          className={`relative left-[-28px] top-[10px] flex scale-[0.85] ${empty ? "hidden" : ""}`}
        >
          <div className="relative right-[-36px] top-[8px] z-0 shrink-0 origin-bottom rotate-[-4deg]">
            <Image
              className="rounded-[4px] bg-white p-[2px] shadow-sm"
              src={thumbUrl1}
              width={64}
              height={356}
              alt="Article Image"
            />
          </div>
          <div className="relative z-10 shrink-0">
            <Image
              className="rounded-[4px] bg-white p-[2px] shadow-sm"
              src={thumbUrl2}
              width={64}
              height={356}
              alt="Article Image"
            />
          </div>
          <div className="relative left-[-36px] top-[8px] z-0 shrink-0 origin-bottom rotate-[4deg]">
            <Image
              className="rounded-[4px] bg-white p-[2px] shadow-sm"
              src={thumbUrl3}
              width={64}
              height={356}
              alt="Article Image"
            />
          </div>
        </div>
      </div>
      <p
        className={`mt-[6px] flex items-center gap-[4px] text-[12px] font-medium text-subtext ${empty ? "hidden" : ""}`}
      >
        <Lock size={12} absoluteStrokeWidth strokeWidth={1.5} />
        {name}
      </p>
      <div
        className={`mt-[8px] h-[14px] w-full rounded-full bg-[#F8FAFC] ${empty ? "" : "hidden"}`}
      ></div>
    </motion.div>
  );
}

export default ThumbnailFolder;
