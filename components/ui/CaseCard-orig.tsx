"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface CaseCardProps {
  pageUrl: string;
  imgUrl: string;
  title: string;
  description: string;
}

const CaseCard: React.FC<CaseCardProps> = ({
  pageUrl,
  imgUrl,
  title,
  description,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<
    | "initial"
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "topRight"
    | "topLeft"
    | "bottomRight"
    | "bottomLeft"
    | "center"
  >("initial");

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement,
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - w / 2;
    const y = ev.clientY - top - h / 2;

    const dx = Math.abs(x);
    const dy = Math.abs(y);

    if (dx < w / 4 && dy < h / 4) {
      return "center";
    }

    const angle = Math.atan2(y, x) * (180 / Math.PI);

    if (angle >= -22.5 && angle < 22.5) {
      return "right";
    } else if (angle >= 22.5 && angle < 67.5) {
      return "topRight";
    } else if (angle >= 67.5 && angle < 112.5) {
      return "top";
    } else if (angle >= 112.5 && angle < 157.5) {
      return "topLeft";
    } else if (angle >= -67.5 && angle < -22.5) {
      return "bottomRight";
    } else if (angle >= -112.5 && angle < -67.5) {
      return "bottom";
    } else if (angle >= -157.5 && angle < -112.5) {
      return "bottomLeft";
    } else {
      return "left";
    }
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    setDirection(direction);
  };

  const handleMouseLeave = () => {
    setDirection("initial");
  };
  const variants = {
    initial: { rotate: 0, scale: 1 },
    top: { rotate: 0, scale: 1.04 },
    bottom: { rotate: 0, scale: 1.04 },
    left: { rotate: 0, scale: 1.04 },
    right: { rotate: 0, scale: 1.04 },
    topRight: { rotate: 3, scale: 1.04 },
    topLeft: { rotate: -3, scale: 1.04 },
    bottomRight: { rotate: -3, scale: 1.04 },
    bottomLeft: { rotate: 3, scale: 1.04 },
    center: { rotate: 0, scale: 1.04 },
  };

  return (
    <Link href={pageUrl}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        variants={variants}
        initial="initial"
        animate={direction}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="card-shadow z-0 flex w-[200px] flex-col justify-center gap-[0px] rounded-[4px] bg-white px-[6px] py-[6px] hover:z-50 md:w-[224px]"
      >
        <div className="thumbnail-bg flex justify-center pt-[16px]">
          <div className="flex w-[128px] flex-col justify-center place-self-center rounded-[8px] border-l border-r border-t border-border bg-white pt-[8px]">
            <Image
              className=""
              src={imgUrl}
              width={128}
              height={160}
              alt="Article Image"
            />
            <div className="flex w-[156px] place-self-center">
              <div className="img-overlay -mt-[48px] h-[56px] w-[200px]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[6px] p-[8px]">
          <p className="text-[14px] font-semibold leading-snug text-maintext">
            {title}
          </p>
          <p className="text-[12px] text-subtext">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default CaseCard;
