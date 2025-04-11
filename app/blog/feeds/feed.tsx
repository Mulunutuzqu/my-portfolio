"use client";
import VideoComponent from "@/components/ui/Video";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { Scale } from "lucide-react";
import useMeasure from "react-use-measure";

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
    const [measureRef, bounds] = useMeasure();
    const renderDescription = () => {
      if (!description.includes("[")) {
        return (
          <p className="line-clamp-1 text-[14px] text-maintext">
            {description}
          </p>
        );
      }

      const regex = /\[(.*?)\]/g;
      const matches = [...description.matchAll(regex)];

      if (matches.length === 0) {
        return (
          <p className="line-clamp-1 text-[14px] text-maintext">
            {description}
          </p>
        );
      }

      return (
        <div className="flex w-full flex-col gap-[4px]">
          {matches.map((match, index) => (
            <p
              key={index}
              className="line-clamp-1 flex gap-[6px] border-b border-dashed py-[8px] text-[14px] font-medium text-maintext"
            >
              <span className="rotate-[-6deg] text-primary">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 3C10.2974 3 10.5385 3.24108 10.5385 3.53846C10.5385 4.97872 11.264 6.46405 12.4 7.60002C13.536 8.73598 15.0213 9.46154 16.4615 9.46154C16.7589 9.46154 17 9.70263 17 10C17 10.2974 16.7589 10.5385 16.4615 10.5385C15.0213 10.5385 13.536 11.264 12.4 12.4C11.264 13.536 10.5385 15.0213 10.5385 16.4615C10.5385 16.7589 10.2974 17 10 17C9.70263 17 9.46154 16.7589 9.46154 16.4615C9.46154 15.0213 8.73598 13.536 7.60002 12.4C6.46405 11.264 4.97872 10.5385 3.53846 10.5385C3.24108 10.5385 3 10.2974 3 10C3 9.70263 3.24108 9.46154 3.53846 9.46154C4.97872 9.46154 6.46405 8.73598 7.60002 7.60002C8.73598 6.46405 9.46154 4.97872 9.46154 3.53846C9.46154 3.24108 9.70263 3 10 3Z"
                    fill="currentColor"
                  />
                  <path
                    d="M15.5 2C15.6525 2 15.7846 2.10567 15.8181 2.25443L15.9854 2.99715C16.0996 3.50429 16.4957 3.90034 17.0029 4.01458L17.7456 4.18189C17.8944 4.21539 18 4.34751 18 4.5C18 4.65249 17.8944 4.78461 17.7456 4.81811L17.0029 4.98542C16.4957 5.09966 16.0996 5.4957 15.9854 6.00284L15.8181 6.74557C15.7846 6.89433 15.6525 7 15.5 7C15.3475 7 15.2154 6.89433 15.1819 6.74557L15.0146 6.00284C14.9004 5.4957 14.5043 5.09966 13.9971 4.98542L13.2544 4.81811C13.1056 4.78461 13 4.65249 13 4.5C13 4.34751 13.1056 4.21539 13.2544 4.18189L13.9971 4.01458C14.5043 3.90034 14.9004 3.5043 15.0146 2.99715L15.1819 2.25443C15.2154 2.10567 15.3475 2 15.5 2Z"
                    fill="currentColor"
                    className="animate-pulse duration-700"
                  />
                  <path
                    d="M4.5 13C4.65249 13 4.78461 13.1056 4.81811 13.2544L4.98542 13.9971C5.09966 14.5043 5.4957 14.9004 6.00284 15.0146L6.74557 15.1819C6.89433 15.2154 7 15.3475 7 15.5C7 15.6525 6.89433 15.7846 6.74557 15.8181L6.00284 15.9854C5.4957 16.0996 5.09966 16.4957 4.98542 17.0029L4.81811 17.7456C4.78461 17.8944 4.65249 18 4.5 18C4.34751 18 4.21539 17.8944 4.18189 17.7456L4.01458 17.0029C3.90034 16.4957 3.5043 16.0996 2.99715 15.9854L2.25443 15.8181C2.10567 15.7846 2 15.6525 2 15.5C2 15.3475 2.10567 15.2154 2.25443 15.1819L2.99715 15.0146C3.5043 14.9004 3.90034 14.5043 4.01458 13.9971L4.18189 13.2544C4.21539 13.1056 4.34751 13 4.5 13Z"
                    fill="currentColor"
                    className="animate-pulse delay-200 duration-700"
                  />
                </svg>
              </span>
              {match[1]}
            </p>
          ))}
        </div>
      );
    };

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
            className="flex w-full cursor-pointer flex-col gap-[8px] rounded-[16px] px-[16px] transition-colors hover:bg-muted md:px-[20px]"
            whileHover="hover"
          >
            <div className="flex w-full gap-[12px] px-[14px]">
              <div className="flex shrink-0 flex-col items-center justify-start gap-[6px] pt-[6px]">
                <div className="flex h-[12px] w-[12px] shrink-0 rounded-full bg-border" />
                <div
                  className={`h-full w-[2px] bg-border ${isLast ? "hidden" : "flex"}`}
                />
              </div>
              <motion.div
                className="flex w-full flex-col gap-[8px]"
                variants={hoverVariants}
                transition={hoverTransition}
              >
                <div className="flex w-full gap-[2px]">
                  <motion.div className="flex items-center gap-[16px]">
                    <motion.div
                      className="shadow-custom hidden w-[128px] shrink-0 rotate-[0deg] overflow-hidden rounded-[12px] border-[4px] border-white bg-subtle md:flex"
                      style={{ height: bounds.height }}
                    >
                      {video ? (
                        <VideoComponent url={coverURL} />
                      ) : (
                        <Image
                          unoptimized
                          fill
                          className="object-cover"
                          src={coverURL}
                          alt="picture"
                        />
                      )}
                    </motion.div>
                    <motion.div
                      className="flex flex-col gap-[8px]"
                      ref={measureRef}
                    >
                      <p className="line-clamp-1 flex items-start gap-[6px] text-[16px] font-medium leading-snug text-maintext md:items-center">
                        {/* <span className="relative top-[8px] h-[8px] w-[6px] rounded-[2px] bg-primary" /> */}
                        {title}
                      </p>

                      {renderDescription()}
                    </motion.div>
                  </motion.div>
                </div>
                <div className="mb-[40px] mt-[8px] flex w-full justify-end gap-[4px] text-[14px] font-light text-subtext">
                  <p className="">{type}</p>
                  <p className="font-bold">·</p>
                  <p className=" ">{date}</p>
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
