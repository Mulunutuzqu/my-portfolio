import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import ExperienceRow from "./ExperiencRow";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import useMeasure from "react-use-measure";
import ExpDivider from "./ExpDivider";

export default function ExperienceAccordionTest() {
  const [isExpanded, setIsExpanded] = useState(false);

  const [measureRef, bounds] = useMeasure();
  const transition = {
    type: "spring",
    bounce: 0.25,
    duration: 0.6,
  };
  return (
    <motion.div
      className={clsx(
        isExpanded ? "mb-[0px]" : "mb-[-24px]",
        "mt-[20px] flex flex-col gap-[12px]",
      )}
    >
      <motion.p className="text-[12px] font-semibold text-subtext">
        Past Experience
      </motion.p>
      <motion.div
        key="container"
        className="relative flex flex-col rounded-[16px] bg-muted"
        animate={{ height: bounds.height }}
        transition={transition}
      >
        <motion.div
          key="gradient-container"
          layout
          className={clsx(
            isExpanded ? "bottom-[-20px]" : "exp-overlay bottom-[0px]",
            "absolute left-0 z-[20] flex h-[96px] w-full items-end justify-center",
          )}
        >
          <motion.div
            layout
            className={clsx(
              isExpanded ? "mb-[6px]" : "mb-[18px]",
              "shadow-custom group flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[8px] border border-white bg-white transition-all duration-300 ease-out hover:border-border hover:bg-subtle hover:shadow-none",
            )}
            onClick={() => {
              setIsExpanded((o) => !o);
            }}
          >
            <ChevronDown
              size={28}
              className={clsx(
                isExpanded ? "rotate-180" : null,
                "text-primary transition-all ease-out",
              )}
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-[16px] p-[12px] px-[20px] md:py-[16px]"
          ref={measureRef}
        >
          <ExperienceRow
            keyID="exp-2"
            company="Ringkas"
            time="2023 — 2023"
            role="Sr. Product designer"
            genre="SaaS Finance"
            desc="Develop intuitive dashboards that simplified complex lending workflows and streamlined the mortgage application process."
            image="/assets/logo/ringkas.png"
          />
          <ExpDivider keyID="border-1" />
          <AnimatePresence mode="popLayout" initial={false}>
            {isExpanded ? (
              <>
                <ExperienceRow
                  keyID="exp-3"
                  company="Salt Indonesia"
                  time="2020 — 2023"
                  role="Mid. UI/UX designer"
                  genre="IT agency"
                  desc="Led the design and implementation of user-centered solutions for diverse clients across various industries."
                  image="/assets/logo/salt.png"
                />
                <ExpDivider keyID="border-3" />
                <ExperienceRow
                  keyID="exp-4"
                  company="Rack Digital"
                  time="2019 — 2020"
                  role="UI/UX & Socmed designer"
                  genre="Creative agency"
                  desc="Responsible for designing various social media content and campaign websites"
                  image="/assets/logo/rack.png"
                />
              </>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
