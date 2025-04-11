import { motion } from "motion/react";
import Image from "next/image";

interface ExperiencRowProps {
  company: string;
  time: string;
  role: string;
  genre: string;
  desc: string;
  image: string;
  keyID?: string;
}

export default function ExperienceRow({
  company,
  time,
  role,
  genre,
  desc,
  image,
  keyID,
}: ExperiencRowProps) {
  const transition = {
    type: "spring",
    bounce: 0.25,
    duration: 0.4,
  };

  return (
    <motion.div
      layout
      key={keyID}
      className="flex w-full gap-[12px]"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: 8,
        transition: { duration: 0.1 },
      }}
      transition={transition}
    >
      <div className="pp2 relative mt-[4px] h-[34px] w-[34px] shrink-0 -rotate-6 items-center justify-center overflow-hidden rounded-[6px] border-[2px] border-white bg-muted">
        <Image src={image} fill alt="logo" loading="eager" />
      </div>

      <div className="flex w-full gap-[12px]">
        <div className="gap-[2px]text-[16px] flex w-full flex-col font-medium text-maintext">
          <div className="flex w-full items-center justify-between">
            <p className="flex w-full">{company}</p>
            <p className="flex min-w-[108px] justify-end text-right text-[14px] font-medium text-subtext">
              {time}
            </p>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="text-[12px]">{role}</p>
            <p className="text-[12px]">{genre}</p>
          </div>
          <div className="mt-[4px] flex w-full text-[14px] font-normal text-subtext">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
