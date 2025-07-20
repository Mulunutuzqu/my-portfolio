"use client";
import { motion } from "framer-motion";
import Carousel from "./Carousel";
import { EmblaOptionsType } from "embla-carousel";
import "./style.css";
import Image from "next/image";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const CarouselView: React.FC = () => (
  <>
    <div className="mt-[-32px] flex w-full max-w-[600px] flex-col gap-[20px] border-x p-[16px] md:p-[32px]">
      <motion.div className="flex w-full items-center justify-center gap-[12px]">
        <div className="pp2 relative h-[40px] w-[40px] shrink-0 -rotate-6 items-center justify-center overflow-hidden rounded-[6px] border-[2px] border-white bg-muted">
          <Image
            src="/assets/logo/allofresh.png"
            fill
            alt="logo"
            loading="eager"
          />
        </div>

        <div className="flex w-full gap-[12px]">
          <div className="flex w-full flex-col gap-[2px] text-[16px] font-medium text-maintext">
            <div className="flex w-full items-center justify-between">
              <p className="flex w-full">AlloFresh</p>
              <p className="flex min-w-[108px] justify-end text-right text-[14px] font-medium text-subtext">
                2023 — Current
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-[12px]">Sr. Product Designer</p>
              <p className="text-[12px]">Egroceries</p>
            </div>
          </div>
        </div>
      </motion.div>

      <p className="text-[14px]">
        End-to-end e-commerce platform featuring product discovery, campaign
        enablement, basket building, and warehouse operations.
      </p>
    </div>
    <motion.div className="relative flex w-full items-center justify-center overflow-hidden">
      <div className="absolute h-full w-full max-w-[600px] border-x" />
      <Carousel options={OPTIONS} />
    </motion.div>
  </>
);

export default CarouselView;
