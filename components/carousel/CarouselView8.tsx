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
import { Loader } from "lucide-react";

const CarouselView8: React.FC = () => (
  <>
    {/* <div className="flex w-full max-w-[600px] flex-col justify-center border-x pt-[32px]">
      <Divider />
    </div>
    <div className="flex w-full max-w-[600px] flex-col border-x bg-muted px-[16px] md:px-[20px]">
      <motion.p className="flex w-full py-[8px] text-[12px] font-semibold text-subtext">
        Showcases
      </motion.p>
    </div>
    <div className="flex w-full max-w-[600px] flex-col justify-center">
      <Divider />
    </div> */}
    <div className="flex w-full max-w-[600px] flex-col gap-[12px] border-x p-[16px] md:p-[20px]">
      <motion.div className="mt-[28px] flex w-full items-center justify-center gap-[12px]">
        <div className="pp2 relative h-[40px] w-[40px] shrink-0 -rotate-6 items-center justify-center overflow-hidden rounded-[6px] border-[2px] border-white bg-muted">
          <Image
            src="/assets/logo/explore.png"
            fill
            alt="logo"
            loading="eager"
          />
        </div>

        <div className="flex w-full gap-[12px]">
          <div className="flex w-full flex-col gap-[2px] text-[16px] font-medium text-maintext">
            <div className="flex w-full items-center justify-between">
              <p className="flex w-full">Video Call Interaction</p>
              <p className="flex min-w-[108px] justify-end text-right text-[14px] font-medium text-subtext">
                2025
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-[12px]">Interaction Designer</p>
              <p className="text-[12px]">Exploration</p>
            </div>
          </div>
        </div>
      </motion.div>

      <p className="text-[14px]">
        Designing fluid transitions and responsive layouts that adapt to
        different states.
      </p>
    </div>
    <div className="flex w-full max-w-[980px] flex-col justify-center">
      <Divider />
      <div className="flex w-full justify-center border-x bg-muted">
        <div className="relative flex w-full items-center justify-center p-[0px]">
          <Loader className="absolute animate-spin duration-1000 ease-linear" />
          <div className="aspect-[980/600] w-full max-w-[980px] overflow-hidden rounded-[0px] md:rounded-[0px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="scale-[101%]"
            >
              <source src="/assets/videos/video-call.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  </>
);

export default CarouselView8;
