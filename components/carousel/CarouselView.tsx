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

const CarouselView: React.FC = () => (
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
                2023 — 2025
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-[12px]">Product Designer</p>
              <p className="text-[12px]">Egroceries</p>
            </div>
          </div>
        </div>
      </motion.div>

      <p className="text-[14px]">
        End-to-end e-commerce platform featuring product discovery, campaign
        enablement, basket building, and warehouse operations. (Animation below
        is presentational)
      </p>
    </div>
    <div className="flex w-full max-w-[980px] flex-col justify-center">
      <Divider />
      <div className="flex w-full justify-center border-x bg-muted">
        <div className="flex w-full items-center justify-center border-r-[1px] p-[16px]">
          <div className="z-10 aspect-[270/574] w-full max-w-[270px] overflow-hidden rounded-[8px] md:rounded-[28px]">
            <video autoPlay loop muted playsInline preload="auto">
              <source src="/assets/videos/map.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="flex w-full items-center justify-center border-r-[1px] p-[16px]">
          <div className="z-10 aspect-[270/574] w-full max-w-[270px] overflow-hidden rounded-[8px] md:rounded-[28px]">
            <video autoPlay loop muted playsInline preload="auto">
              <source src="/assets/videos/cart.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="flex w-full items-center justify-center p-[16px]">
          <div className="z-10 aspect-[270/574] w-full max-w-[270px] overflow-hidden rounded-[8px] md:rounded-[28px]">
            <video autoPlay loop muted playsInline preload="auto">
              <source src="/assets/videos/plp.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  </>
);

export default CarouselView;
