"use client";
import { motion } from "framer-motion";
import Carousel from "./Carousel";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
import "./style.css";
import Divider from "../ui/Divider";

const CarouselView2: React.FC = () => (
  <>
    <div className="flex w-full max-w-[600px] flex-col gap-[12px] border-x p-[16px] md:p-[20px]">
      <motion.div className="mt-[28px] flex w-full items-center justify-center gap-[12px]">
        <div className="pp2 relative h-[40px] w-[40px] shrink-0 -rotate-6 items-center justify-center overflow-hidden rounded-[6px] border-[2px] border-white bg-muted">
          <Image src="/assets/logo/tele2.png" fill alt="logo" loading="eager" />
        </div>

        <div className="flex w-full gap-[12px]">
          <div className="flex w-full flex-col gap-[2px] text-[16px] font-medium text-maintext">
            <div className="flex w-full items-center justify-between">
              <p className="flex w-full">
                Telemedicine Platform (Confidential)
              </p>
              <p className="flex min-w-[108px] justify-end text-right text-[14px] font-medium text-subtext">
                2021 — 2022
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-[12px]">UI/UX Designer</p>
              <p className="text-[12px]">Health</p>
            </div>
          </div>
        </div>
      </motion.div>

      <p className="text-[14px]">
        A comprehensive digital healthcare solution that streamlines medical
        care delivery through virtual consultations and centralized hospital
        management.
      </p>
    </div>
    <motion.div className="relative flex w-full cursor-grab flex-col items-center justify-center overflow-hidden">
      {/* <div className="flex w-[96%] justify-center gap-[24px] overflow-x-scroll">
        <div className="flex aspect-[756/491] rounded-[20px] border bg-muted p-[12px]">
          <div className="relative flex aspect-[756/491] place-self-center overflow-hidden rounded-[12px] shadow-md">
            <Image
              width={1200}
              height={780}
              src="/assets/works/tele-1.png"
              alt="tele-1"
              className=""
            />
          </div>
        </div>
      </div> */}
      <div className="absolute h-full w-full max-w-[600px] border-x" />
      <Carousel options={OPTIONS} />
    </motion.div>
  </>
);

export default CarouselView2;
