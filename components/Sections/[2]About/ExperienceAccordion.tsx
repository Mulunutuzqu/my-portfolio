import { AnimatePresence, motion } from "motion/react";
import ExperienceRow from "./ExperiencRow";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import ExpDivider from "./ExpDivider";

export default function ExperienceAccordion() {
  const [isExpanded, setIsExpanded] = useState(false);
  const transition = {
    type: "spring",
    bounce: 0.25,
    duration: 0.6,
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          key="whole-container"
          transition={transition}
          layoutId="container"
          layout
          className={clsx(
            "group relative mt-[16px] flex cursor-pointer flex-col gap-[6px] overflow-hidden transition-all",
          )}
          onClick={() => {
            setIsExpanded((o) => !o);
          }}
        >
          <motion.div
            key="gradient-container"
            layout
            className="exp-overlay absolute bottom-[-2px] left-0 z-[20] flex h-[64px] w-full items-end justify-center"
          >
            <motion.div
              layout
              className="shadow-custom mb-[6px] flex h-[30px] w-[30px] items-center justify-center rounded-[8px] border border-white bg-white transition-all duration-300 ease-out group-hover:border-border group-hover:bg-subtle group-hover:shadow-none"
            >
              <ChevronDown
                size={28}
                className="text-subtext group-hover:text-primary"
              />
            </motion.div>
          </motion.div>
          <motion.div
            key="label-container"
            layout
            className="flex justify-between"
          >
            <motion.p
              layout
              className="mt-[4px] text-[12px] font-semibold text-subtext"
            >
              Experience
            </motion.p>
          </motion.div>
          <motion.div
            key="exp-container"
            layout
            className="flex flex-col gap-[16px] rounded-[12px] bg-muted px-[16px] py-[12px]"
          >
            <ExperienceRow
              keyID="exp-1"
              company="Allofresh"
              time="2023 — Present"
              role="Sr. Product designer"
              genre="Egroceries"
              desc="Product discovery, campaign enablement, basket building, warehousing and feature enhancement."
              image=""
            />
            {isExpanded ? (
              <>
                <ExpDivider keyID="border-1" />
                <ExperienceRow
                  keyID="exp-2"
                  company="Ringkas"
                  time="2023 — 2023"
                  role="Sr. Product designer"
                  genre="SaaS loan program"
                  desc="Lending dashboard for bank, lender and internal."
                  image=""
                />
                <ExpDivider keyID="border-2" />
                <ExperienceRow
                  keyID="exp-3"
                  company="Salt Indonesia"
                  time="2020 — 2023"
                  role="Mid. UI/UX designer"
                  genre="IT agency"
                  desc="IT digital agency"
                  image=""
                />
                <ExpDivider keyID="border-3" />
                <ExperienceRow
                  keyID="exp-4"
                  company="Rack Digital"
                  time="2020 — 2023"
                  role="UI/UX & Socmed designer"
                  genre="Digital agency"
                  desc="Digital agency"
                  image=""
                />
              </>
            ) : null}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
