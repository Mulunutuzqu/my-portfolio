"use client";
import { BookOpen, Swords } from "lucide-react";
import Image from "next/image";
import Divider from "./ui/Divider";
import { animate, delay, motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function SectionIntro() {
  const [scope, animate] = useAnimate();

  const handlePPbig = () => {
    animate(".me", { scale: 1 });
    animate(".handwave", { scale: 1, opacity: 1, x: 0, y: 0 });
  };

  const handlePPsmall = () => {
    animate(".me", { scale: 0.5, rotate: -6 });
    animate(".handwave", { scale: 0, opacity: 0, x: -12, y: -12 });
  };
  const handleFlagEnter = () => {
    animate(".flag", { opacity: 0 });
    animate(".map", { opacity: 1 });
    animate(".plane", { display: "inline", opacity: 1 });
  };

  const handleFlagLeave = () => {
    animate(".flag", { opacity: 1 });
    animate(".map", { opacity: 0 });
    animate(".plane", { display: "none", opacity: 0 });
  };

  useEffect(() => {
    const PpBeBig = async () => {
      await animate(".me", { scale: 1, rotate: -6 }, { delay: 0.35 });
      await animate(".me", { scale: 0.5, rotate: -6 }, { delay: 1.25 });
    };
    PpBeBig();
    const handwaving = async () => {
      await animate(
        ".handwave",
        { scale: 1, opacity: 1, x: 0, y: 0 },
        { delay: 0.35 },
      );
      await animate(
        ".handwave",
        { scale: 0, opacity: 0, x: -12, y: -12 },
        { delay: 1.25 },
      );
    };
    handwaving();
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <>
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        ref={scope}
        className="z-20 mb-[8px] mt-[-56px] flex flex-col gap-[20px] p-[12px] transition-all md:px-[20px] md:py-[16px]"
      >
        <motion.div variants={item} className="z-20 mb-[16px]">
          <Image
            src="/assets/name.svg"
            width={500}
            height={500}
            alt="Handwritten author name"
          />
        </motion.div>
        <motion.p
          variants={item}
          className="z-20 mt-[-32px] font-light italic text-subtext"
        >
          <motion.span
            className="inline-block"
            onMouseEnter={handlePPbig}
            onMouseLeave={handlePPsmall}
          >
            <motion.span
              className="me pp2 relative top-[8px] z-0 mb-[-16px] ml-[-18px] mr-[-14px] inline-block overflow-hidden rounded-[16px] border-[5px] border-white"
              initial={{ scale: 0.5, rotate: -6 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 14,
              }}
            >
              <Image
                className=""
                src="/assets/pp.jpg"
                width={56}
                height={56}
                alt="profile picture"
                unoptimized={true}
                priority={true}
              />
            </motion.span>
            <motion.span
              className="handwave absolute ml-[-10px] mt-[30px] inline-block h-[37px] w-[35px] origin-bottom"
              initial={{ rotate: 56, opacity: 0, x: -12, y: -12 }}
              animate={{ rotate: [56, 20, 56] }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <Image
                className=""
                src="/assets/waving-hand.svg"
                alt="Hand waving"
                fill={true}
              />
            </motion.span>
          </motion.span>
          Product Designer with 5 years of experience in startups and agencies.
          Based in Jakarta{" "}
          <motion.span
            onMouseEnter={handleFlagEnter}
            onMouseLeave={handleFlagLeave}
            initial={{ scale: 1, rotate: 6 }}
            whileHover={{ scale: 2.4, rotate: 6 }}
            className="pp absolute ml-[4px] mt-[-2px] inline-block rotate-6 overflow-hidden rounded-[6px] border-2 border-white"
          >
            <motion.span initial={{ opacity: 1 }} whileHover={{ opacity: 0 }}>
              <Image
                className="flag z-20"
                src="/assets/id-flag.jpg"
                width={22}
                height={22}
                alt="profile picture"
              />
            </motion.span>
            <motion.span className="map" initial={{ opacity: 0 }}>
              <Image
                className="absolute z-0 mt-[-22px]"
                src="/assets/map.jpg"
                width={50}
                height={50}
                alt="profile picture"
              />
            </motion.span>
            <motion.span
              initial={{ x: -12, y: 12, display: "none", opacity: 0 }}
              animate={{ x: 20, y: -20 }}
              transition={{ ease: "linear", duration: 1.5, repeat: Infinity }}
              className="plane absolute inline-block h-[12px] w-[12px]"
            >
              <Image
                className="pointer-events-none absolute z-0 mt-[-12px]"
                src="/assets/plane.png"
                fill
                alt="profile picture"
              />
            </motion.span>
          </motion.span>
        </motion.p>
        <motion.p variants={item} className="text-maintext">
          I craft data inspired interface aiming towards business goals and
          user’s delight.
        </motion.p>
        <div className="flex flex-col gap-[8px] font-light italic text-subtext">
          <motion.p variants={item} className="flex items-center gap-[8px]">
            <Swords size={20} />
            Intuition — to drive innovation.
          </motion.p>
          <motion.p variants={item} className="flex items-center gap-[8px]">
            <BookOpen size={20} />
            User research — to guide iteration.
          </motion.p>
        </div>
      </motion.section>
      <Divider />
    </>
  );
}
