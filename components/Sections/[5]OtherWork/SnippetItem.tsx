"use client";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import Image from "next/image";

interface SnippetItemProps {
  video?: boolean;
  url: string;
}

export default function SnippetItem({ video, url }: SnippetItemProps) {
  const transition = {
    type: "spring",
    bounce: 0.25,
    duration: 0.4,
  };
  return video ? (
    <div className="flex h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl border bg-muted">
      <div className="flex h-[372px] w-[174px] shrink-0 items-center justify-center rounded-[12px] border bg-white">
        <div
          className="ml-[4px] flex h-[356px] w-[164px] shrink-0 place-self-center overflow-hidden"
          style={{ transform: "translateZ(0)", willChange: "transform" }}
        >
          <video
            className="scale-[1.008] rounded-[8px]"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={url} type="video/webm"></source>
          </video>
        </div>
      </div>
    </div>
  ) : (
    <div className="group relative mb-4 h-[192px] w-full overflow-hidden rounded-lg border bg-muted">
      <div className="absolute bottom-0 right-0 z-[10] m-[8px] flex items-center justify-center rounded-full bg-white p-[8px] text-maintext shadow transition-all ease-out group-hover:bg-primary group-hover:text-white">
        <Expand strokeWidth={2.5} size={18} />
      </div>
      <motion.div
        transition={transition}
        whileHover={{ scale: 1.09 }}
        className="relative h-[192px] w-full overflow-hidden"
      >
        <Image
          src={url}
          width={394}
          height={532}
          style={{ objectFit: "cover" }}
          alt="profile picture"
        ></Image>
      </motion.div>
    </div>
  );
}
