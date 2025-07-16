"use client";

import Image from "next/image";
import Divider from "../../ui/Divider";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LinkButton from "@/components/ui/LinkButton";
import { CornerDownRight } from "lucide-react";
import ExperienceAccordion from "./ExperienceAccordion";
import ExperienceAccordionTest from "./ExperienceAccordionTest";
import ContributionAccordion from "./ContributionAccordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function About() {
  const logos = [
    { name: "Raya Bank", url: "/assets/logo/raya.png" },
    { name: "Good Doctor", url: "/assets/logo/gooddoctor.png" },
    { name: "Pegadaian", url: "/assets/logo/pegadaian.png" },
    { name: "IM3 Ooredoo", url: "/assets/logo/im3.png" },
    { name: "Unilever Food Solution", url: "/assets/logo/ufs.png" },
    { name: "Kemenkeu", url: "/assets/logo/kemenkeu.png" },
  ];
  // const [currentLogoIndex, setCurrentLogoIndex] = useState<number>(0);

  // const updateLogoIndex = (prevIndex: number): number => {
  //   // Check if the current index is the last one, then reset, otherwise increment
  //   if (prevIndex === logos.length - 1) {
  //     return 0;
  //   } else {
  //     return prevIndex + 1;
  //   }
  // };

  // useEffect(() => {
  //   const intervalDuration = 1000;

  //   // Set the interval to update the logo index
  //   const intervalId = setInterval(() => {
  //     setCurrentLogoIndex((prevIndex) => updateLogoIndex(prevIndex));
  //   }, intervalDuration);

  //   // Cleanup function to clear the interval
  //   return () => clearInterval(intervalId);
  // }, [currentLogoIndex, logos.length]);

  return (
    <motion.div initial="hidden" animate="show">
      <section className="z-10 mt-[8px] flex flex-col gap-[6px] p-[12px] transition-all md:px-[20px] md:py-[16px]">
        <motion.p className="text-[12px] font-semibold text-subtext">
          Get to know more
        </motion.p>

        <motion.div>
          <div className="flex items-center gap-[2px]">
            <p>Currently crafting at&nbsp;</p>
            <LinkButton href="https://allofresh.id/">Allofresh</LinkButton>
            <br />
          </div>
          <div className="mt-[6px] flex gap-[4px] text-subtext">
            <span className="relative top-[4px] block">
              <CornerDownRight strokeWidth={2.5} size={14} />
            </span>
            <div className="flex flex-col gap-[12px]">
              <div className="flex flex-col gap-[4px]">
                <p>Redefining shopping experience & elevating design system.</p>

                <p className="max-w-[500px] text-[12px] leading-[1.75] text-subtext">
                  Discovery, basket building, campaign enablement, Warehouse
                  Management System, and feature enhancements.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[20px] flex gap-[8px]">
            <div className="gradient-border relative">
              <LinkButton
                asDownload
                href="https://drive.google.com/file/d/1-2CBZhcmqujTAFlSQo4wF-SgmXbOhPjV/view?usp=sharing"
              >
                Resume
              </LinkButton>
            </div>
            <LinkButton href="https://www.linkedin.com/in/maulanatazqi-n-soffian-465a47169/">
              LinkedIn
            </LinkButton>
            <LinkButton href="mailto:maulanatazqi@gmail.com">Email</LinkButton>
          </div>
        </motion.div>
        <motion.p className="pb-[12px] pt-[24px] text-[12px] font-semibold text-subtext">
          Notable partners
        </motion.p>
        <motion.section className="mt-[-6px] w-full">
          <motion.section className="">
            <div className="flex w-full justify-start gap-[16px] transition-all">
              {logos.map((logo, index) => (
                <TooltipProvider key={logo.name} delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="cursor-default">
                      <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[12px] border border-border p-[8px] hover:bg-white">
                        <Image
                          className={`animate-logo-runner relative opacity-80 transition-all duration-500`}
                          src={logo.url}
                          width={24}
                          height={24}
                          alt={logo.name}
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{logo.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
              <div>
                <div className="absolute ml-[4px] mt-[-24px] flex h-[80px] w-[76px]">
                  <Image src="/assets/logo/you2.svg" fill alt="You" />
                </div>
              </div>
            </div>
          </motion.section>
        </motion.section>
        <ExperienceAccordionTest />
      </section>

      <div className="mt-[24px]">
        <Divider />
      </div>
    </motion.div>
  );
}
