"use client";
import SectionAbout from "@/components/Sections/[2]About/About";
import SectionStudyCase from "@/components/Sections/[3]StudyCase/StudyCase";
import SectionIntro from "@/components/Sections/[1]Intro/Intro";
import Image from "next/image";
import SectionWritings from "@/components/Sections/[4]Writings/WritingsList";
import Meteors from "@/components/magicui/meteors";
import EdgeOverlay from "@/components/ui/EdgeOverlay";
import SectionOtherWork from "@/components/Sections/[5]OtherWork/OtherWork";
import { animate, motion, useAnimate } from "framer-motion";
import VideoStack from "@/components/Sections/[5]OtherWork/VideoStack";
import SectionLabs from "@/components/Sections/[6]Labs/Labs";
import { fetchPages } from "../lib/notion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default async function Home() {
  const posts = await fetchPages();
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 h-screen w-full bg-noise bg-[size:180px] bg-repeat opacity-[0.025]" />
      <main className="z-10 flex w-full max-w-[360px] flex-col bg-white transition-all md:max-w-[460px]">
        <div className="pointer-events-none fixed z-0 h-screen w-full max-w-[360px] bg-noise bg-[size:180px] bg-repeat opacity-[0.025] md:max-w-[460px]" />
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full border-x border-border"
        >
          <motion.div
            variants={item}
            className="relative flex h-[200px] w-full overflow-hidden"
          >
            <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#E3E8EF_1px,transparent_1px)] [background-size:18px_18px]"></div>
          </motion.div>
          {/* <div className="relative z-0 flex h-[180px] w-full flex-col justify-between overflow-hidden">
          <div className="relative left-[-200px]">
            <Meteors number={16} />
          </div>
          <div className="edge-meteor z-10 h-[64px] w-full"></div>
        </div> */}
          <SectionIntro />
          <SectionAbout />
          <SectionStudyCase />
          <SectionWritings posts={posts.results} />
          <SectionOtherWork />
          <SectionLabs />
          <div className="h-[64px]"></div>
        </motion.div>
      </main>
    </>
  );
}
