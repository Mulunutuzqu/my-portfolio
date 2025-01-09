"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import CaseCard from "./CaseCard";
import WritingsRow from "../[4]Writings/WritingsRow";

export default function StudyCase() {
  return (
    <>
      <motion.section className="mt-[12px] flex w-full flex-col gap-[8px]">
        <motion.div className="pointer-events-none relative z-10 -mb-[64px] ml-[20px] h-[100px] w-[168px] rotate-6">
          <Image
            src="/assets/study-case.svg"
            fill
            alt="Handwritten study case"
          />
        </motion.div>
        <motion.div className="hidden w-fit gap-[12px] place-self-center p-[20px] md:flex md:gap-[12px]">
          <CaseCard
            display="Card"
            pageUrl="/some-article"
            imgUrl="/assets/placeholder-design.jpg"
            title="How i revamp Allofresh design system"
            description="Update look and feel, increase collaboration and maintain consistency"
          />
          <CaseCard
            display="Card"
            pageUrl="/some-article"
            imgUrl="/assets/cover/surplus.png"
            title="How i revamp Allofresh design system"
            description="Update look and feel, increase collaboration and maintain consistency"
          />
        </motion.div>
        <div className="flex w-full flex-col md:hidden">
          <WritingsRow
            title="test"
            description="test"
            pageUrl="test"
            imgURL="/assets/cover/surplus.png"
            icon={false}
          />
          <WritingsRow
            title="test"
            description="test"
            pageUrl="test"
            imgURL="/assets/cover/surplus.png"
            icon={false}
          />
        </div>
      </motion.section>
    </>
  );
}
