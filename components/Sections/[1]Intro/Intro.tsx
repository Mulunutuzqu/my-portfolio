"use client";
import { BookOpen, Swords } from "lucide-react";
import Image from "next/image";
import Divider from "../../ui/Divider";
import { motion, useAnimate } from "framer-motion";
import Greetings from "./Greetings";
import LinkButton from "@/components/ui/LinkButton";

export default function Intro() {
  console.log("Intro Rendered!");
  const [scope, animate] = useAnimate();

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

  return (
    <motion.div className="flex w-full max-w-[600px] flex-col">
      <motion.section
        ref={scope}
        className="z-20 flex max-w-[600px] flex-col gap-[20px] border-l border-r px-[16px] pt-[96px] transition-all md:px-[20px]"
      >
        <motion.div className="relative z-20 mb-[16px] flex h-[148px] w-full justify-center">
          <Image src="/assets/name.svg" fill alt="Handwritten author name" />
        </motion.div>
        <motion.p className="z-20 mt-[-32px] font-light italic text-maintext">
          <Greetings />
          Product & Interaction Designer — Zero-to-market veteran, with 5 years
          of experience in startups and agencies. Based in Jakarta
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
                loading="eager"
              />
            </motion.span>
          </motion.span>
          {/* <br /> <br />
          <span className="text-maintext underline decoration-primary decoration-wavy underline-offset-[3px]">
            An initiator
          </span>
          ,{" "}
          <span className="text-maintext underline decoration-primary decoration-wavy underline-offset-[3px]">
            self-motivated
          </span>
          , {"&"}{" "}
          <span className="text-maintext underline decoration-primary decoration-wavy underline-offset-[3px]">
            detail oriented
          </span>
          . */}
        </motion.p>
        <motion.p className="text-maintext">
          I craft data-inspired interface aiming towards business goals and user
          {"'"}s delight.
        </motion.p>
        <div className="flex flex-col gap-[8px] font-light italic text-subtext">
          <motion.p className="flex items-center gap-[8px]">
            <Swords size={20} />
            Intuition — to drive innovation.
          </motion.p>
          <motion.p className="flex items-center gap-[8px]">
            <BookOpen size={20} />
            Research — to guide iteration.
          </motion.p>
        </div>
        <div className="mb-[20px] flex gap-[8px]">
          {/* <div className="gradient-border relative">
            <LinkButton inTab href="/blog">
              Case Study
            </LinkButton>
          </div> */}
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
      </motion.section>
      <div className="mt-[4px] w-full"></div>
    </motion.div>
  );
}
