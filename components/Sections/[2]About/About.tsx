"use client";

import Image from "next/image";
import Divider from "../../ui/Divider";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const logos = [
    { name: "Raya Bank", url: "/assets/logo/raya.png" },
    { name: "Good Doctor", url: "/assets/logo/gooddoctor.png" },
    { name: "Pegadaian", url: "/assets/logo/pegadaian.png" },
    { name: "IM3 Ooredoo", url: "/assets/logo/im3.png" },
    { name: "Unilever Food Solution", url: "/assets/logo/ufs.png" },
    { name: "Kemenkeu", url: "/assets/logo/kemenkeu.png" },
  ];
  const [currentLogoIndex, setCurrentLogoIndex] = useState<number>(0);

  const updateLogoIndex = (prevIndex: number): number => {
    // Check if the current index is the last one, then reset, otherwise increment
    if (prevIndex === logos.length - 1) {
      return 0;
    } else {
      return prevIndex + 1;
    }
  };

  useEffect(() => {
    const intervalDuration = 1000;

    // Set the interval to update the logo index
    const intervalId = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => updateLogoIndex(prevIndex));
    }, intervalDuration);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, [currentLogoIndex, logos.length]);

  return (
    <motion.div initial="hidden" animate="show">
      <section className="z-10 mt-[8px] flex flex-col gap-[8px] p-[12px] transition-all md:px-[20px] md:py-[16px]">
        <motion.p className="text-[12px] font-semibold text-subtext">
          Experience
        </motion.p>

        <motion.p>
          Currently crafting at&nbsp;
          <Link
            className="text-maintext"
            href=""
            // rel="noopener noreferrer"
            // target="_blank"
            // passHref={true}
          >
            Allofresh
          </Link>
          .
          <br />
          Redefining shopping experience & elevating design system.
        </motion.p>
      </section>

      <motion.p className="px-[12px] pb-[8px] pt-[8px] text-[12px] font-semibold text-subtext md:px-[20px]">
        Notable partners
      </motion.p>
      <Divider />
      <motion.section className="w-full bg-muted px-[12px] py-[8px] md:px-[20px]">
        <div className="flex w-full justify-start gap-[12px] transition-all md:gap-[24px]">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className="flex items-center justify-center rounded-[8px] border border-border p-[4px]"
            >
              <Image
                className={`animate-logo-runner relative transition-all duration-500 ${currentLogoIndex === index ? "opacity-100 grayscale-0" : "opacity-20 grayscale"}`}
                src={logo.url}
                width={24}
                height={24}
                alt={logo.name}
              />
            </div>
          ))}
          <div>
            <div className="absolute ml-[10px] mt-[-16px] flex h-[68px] w-[64px] md:ml-[-4px] md:mt-[-24px] md:h-[80px] md:w-[76px]">
              <Image src="/assets/logo/you2.svg" fill alt="You" />
            </div>
          </div>
        </div>
      </motion.section>
      <Divider />
    </motion.div>
  );
}
