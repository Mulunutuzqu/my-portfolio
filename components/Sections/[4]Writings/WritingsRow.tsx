"use client";

import Link from "next/link";
import React, { useLayoutEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { BookMarked, Sparkles } from "lucide-react";

import useMeasure from "react-use-measure";
import Image from "next/image";
import LinkButton from "@/components/ui/LinkButton";
import VideoComponent from "@/components/ui/Video";

interface CaseRowProps {
  pageUrl: string;
  title: string;
  description: string;
  video: boolean;
  coverURL: string;
  icon: boolean;
  overview: string;
  role: string;
  scope: string;
  last?: boolean;
}

function WritingsRow({
  pageUrl,
  title,
  description,
  video,
  coverURL,
  icon,
  overview,
  role,
  scope,
  last,
}: CaseRowProps) {
  const [measureRef, bounds] = useMeasure();
  // const [currentHeight, setCurrentHeight] = useState(bounds.height);

  // useLayoutEffect(() => {
  //   setCurrentHeight((prevHeight) =>
  //     prevHeight != currentHeight ? bounds.height : bounds.height,
  //   );
  // }, [bounds.height]);

  const renderDescription = () => {
    if (!description.includes("[")) {
      return (
        <p className="line-clamp-1 text-[14px] text-maintext">{description}</p>
      );
    }

    const regex = /\[(.*?)\]/g;
    const matches = [...description.matchAll(regex)];

    if (matches.length === 0) {
      return (
        <p className="line-clamp-1 text-[14px] text-maintext">{description}</p>
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

  const renderOverview = () => {
    if (!overview.includes("[")) {
      return (
        <p className="line-clamp-1 text-[14px] text-maintext">{overview}</p>
      );
    }

    const regex = /\[(.*?)\]/g;
    const matches = [...overview.matchAll(regex)];

    if (matches.length === 0) {
      return (
        <p className="line-clamp-1 text-[14px] text-maintext">{overview}</p>
      );
    }

    return (
      <motion.p className="flex w-full flex-col gap-[12px] text-[14px]">
        {matches.map((match, index) => (
          <span key={index} className="line-clamp-2">
            {match[1]}
          </span>
        ))}
      </motion.p>
    );
  };

  return (
    <Link href={pageUrl}>
      <motion.div
        initial={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
        }}
        className={`group flex flex-col gap-[8px] px-[12px] py-[12px] text-maintext transition-all duration-200 ease-out hover:bg-muted md:px-[20px]`}
      >
        <div className="shadow-custom relative mb-[8px] flex h-[128px] w-full rounded-[12px] border-[4px] border-white">
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
        </div>
        <motion.div className="flex flex-col items-center gap-[16px] md:flex-row">
          {/* <motion.div
          className="shadow-custom w-full rotate-[0deg] overflow-hidden rounded-[12px] border-[4px] border-white bg-subtle md:flex md:w-[156px] md:shrink-0"
          animate={{ height: bounds.height }}
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
        </motion.div> */}
          <motion.div
            className="flex w-full flex-col gap-[8px]"
            ref={measureRef}
          >
            <p className="group line-clamp-1 flex items-start gap-[6px] text-[16px] font-medium leading-snug text-maintext group-hover:text-primary md:items-center">
              {/* <span className="relative top-[8px] h-[8px] w-[6px] rounded-[2px] bg-primary" /> */}
              {title}
            </p>

            {/* {renderDescription()} */}
          </motion.div>
        </motion.div>
        <motion.div className="flex w-full flex-col gap-[14px] md:flex-row">
          {/* <div className="flex w-full gap-[8px] md:w-[156px] md:shrink-0 md:flex-col">
          <div className="flex w-full gap-[16px] md:max-w-[156px] md:flex-col">
            <motion.div className="flex w-[200px] flex-col gap-[2px] md:w-full">
              <motion.p className="w-full text-[12px] font-semibold text-subtext">
                Role
              </motion.p>
              <motion.p className="w-full text-[12px]">{role}</motion.p>
            </motion.div>
            <motion.div className="flex w-full flex-col gap-[2px]">
              <motion.p className="w-full text-[12px] font-semibold text-subtext">
                Scope
              </motion.p>
              <motion.p className="w-full text-[12px]">{scope}</motion.p>
            </motion.div>
          </div>
        </div> */}
          <div className="flex w-full flex-col gap-[2px]">
            {/* <motion.div className="flex w-full justify-between">
            <motion.p className="text-[12px] font-semibold text-subtext">
              Overview
            </motion.p> 
          </motion.div>*/}
            <div className="mb-[px] flex">{renderOverview()}</div>
            {/* <div className="mt-[0px] flex w-full py-[0px]">
            <Link href={pageUrl}>
              <button className="gap-[6px] py-[0px]">
                <p className="text-[14px] font-semibold text-primary hover:underline">
                  Read more
                </p>
              </button>
            </Link>
          </div> */}
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
}

export default WritingsRow;
