"use client";
import VideoComponent from "@/components/ui/Video";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { Scale } from "lucide-react";

interface FeedProps {
  url: string;
  title: string;
  description: string;
  coverURL: string;
  video: boolean;
  date: string;
  type: string;
  isLast?: boolean;
  isHidden?: boolean;
}

const hoverTransition = {
  type: "spring",
  bounce: 0.1,
  duration: 0.4,
};

const hoverVariants = {
  hover: { scale: 0.98, y: 8 },
};

const Feed = forwardRef<HTMLDivElement, FeedProps>(
  (
    { url, title, description, coverURL, video, type, date, isLast, isHidden },
    ref,
  ) => {
    return (
      <motion.div
        ref={ref}
        className={`${isHidden ? "hidden" : "flex"}`}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        layout
        key={url}
      >
        <Link href={url}>
          <motion.div
            className="flex w-full cursor-pointer flex-col gap-[8px] bg-white px-[12px] transition-colors hover:bg-muted md:px-[20px]"
            whileHover="hover"
          >
            <div className="flex w-full gap-[12px]">
              <div className="flex shrink-0 flex-col items-center justify-start gap-[6px] px-[14px] pt-[6px]">
                <div className="flex h-[12px] w-[12px] shrink-0 rounded-full bg-border" />
                <div
                  className={`h-full w-[2px] bg-border ${isLast ? "hidden" : "flex"}`}
                />
              </div>
              <motion.div
                className="flex w-full gap-[8px]"
                variants={hoverVariants}
                transition={hoverTransition}
              >
                <div className="flex w-full flex-col gap-[2px]">
                  <p>{title}</p>

                  <p className="font-light">{description}</p>
                  <div className="notion-custom-image relative mt-[8px] h-[200px] w-full overflow-hidden bg-muted">
                    {video ? (
                      <VideoComponent url={coverURL} />
                    ) : (
                      <Image
                        fill
                        className="object-cover"
                        src={coverURL}
                        alt="picture"
                      />
                    )}
                  </div>
                  <div className="mb-[40px] mt-[8px] flex w-full gap-[4px] text-[14px] font-light text-subtext">
                    <p className="">{type}</p>
                    <p className="font-bold">·</p>
                    <p className=" ">{date}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Link>
      </motion.div>
    );
  },
);

Feed.displayName = "Feed";

export default Feed;
