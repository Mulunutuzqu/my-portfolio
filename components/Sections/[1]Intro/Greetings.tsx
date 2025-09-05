"use client";

import { useStateProvider } from "@/app/provider/StateProvider";
import { motion, useAnimate, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 14,
};

const loop = {
  duration: 0.6,
  ease: "easeInOut",
  repeat: Infinity,
};

function Greetings() {
  const { setHomeVisited, homeVisited } = useStateProvider();

  const [scope, animate] = useAnimate();

  const isInView = useInView(scope, { once: true });

  const greetOnMouseEnter = () => {
    animate(".me", { scale: 1 });
    animate(".handwave", { scale: 1, opacity: 1, x: 0, y: 0 });
  };

  const greetOnMouseLeave = () => {
    animate(".me", { scale: 0.5, rotate: -6 });
    animate(".handwave", { scale: 0, opacity: 0, x: -12, y: -12 });
  };

  const scaleSeq = async () => {
    await animate(".me", { scale: 1.2, rotate: -6 }, { delay: 0.15 });
    await animate(".me", { scale: 0.5, rotate: -6 }, { delay: 0.6 });
  };

  const wavingSeq = async () => {
    await animate(
      ".handwave",
      { scale: 1.3, opacity: 1, x: 0, y: 8 },
      { delay: 0.15 },
    );
    await animate(
      ".handwave",
      { scale: 0, opacity: 0, x: -12, y: -12 },
      { delay: 0.6 },
    );
  };

  isInView ? (scaleSeq(), wavingSeq()) : null;
  // useEffect(() => {
  //   setTimeout(() => {
  //     setHomeVisited(true);
  //   }, 300);
  // });

  return (
    <motion.span
      ref={scope}
      className="inline-block h-[50px] w-[36px]"
      onMouseEnter={greetOnMouseEnter}
      onMouseLeave={greetOnMouseLeave}
    >
      <motion.span
        className="me pp2 relative top-[8px] z-0 mb-[-16px] ml-[-18px] mr-[-14px] inline-block overflow-hidden rounded-[16px] border-[5px] border-white"
        initial={{ scale: 0.5, rotate: -6 }}
        transition={spring}
      >
        <Image
          className=""
          src="/assets/pp.jpg"
          width={56}
          height={56}
          alt="profile picture"
          priority
          loading="eager"
        />
      </motion.span>
      <motion.span
        className="handwave absolute ml-[-10px] mt-[30px] inline-block h-[37px] w-[35px] origin-bottom"
        initial={{
          rotate: 56,
          opacity: 0,
          x: -14,
          y: -12,
          scale: 0.6,
        }}
        animate={{ rotate: [56, 20, 56] }}
        transition={loop}
      >
        <Image
          className=""
          src="/assets/waving-hand.svg"
          alt="Hand waving"
          fill={true}
          loading="eager"
          priority
        />
      </motion.span>
    </motion.span>
  );
}

export default Greetings;
