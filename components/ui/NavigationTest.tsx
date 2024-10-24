"use client";

import clsx from "clsx";
import {
  AnimatePresence,
  MotionConfig,
  animate,
  delay,
  motion,
  useAnimate,
} from "framer-motion";
import {
  Home,
  BookOpen,
  TestTubeDiagonal,
  LucideIcon,
  SquareTerminal,
  BookOpenText,
  Scale,
  ArrowBigLeft,
  ArrowLeft,
} from "lucide-react";
import { act, use, useState } from "react";

interface NavigationProps {
  isLoading: boolean;
  back: boolean;
}

interface MenuItem {
  name: string;
  icon: LucideIcon;
}

interface MenuItems {
  [key: string]: MenuItem;
}

const MENUS: MenuItems = {
  Home: { name: "Home", icon: Home },
  Blogs: { name: "Blogs", icon: BookOpenText },
  Labs: { name: "Labs", icon: SquareTerminal },
};

const transition = {
  type: "spring",
  bounce: 0.16,
  duration: 0.6,
};

const smallTransition = {
  type: "spring",
  bounce: 0,
  duration: 0.5,
};

const loaderTransition = {
  type: "spring",
  bounce: 0,
  duration: 0.2,
};

const hoverTransition = {
  type: "spring",
  bounce: 0,
  duration: 0.2,
};

export default function Navigation({ isLoading, back }: NavigationProps) {
  const [active, setActive] = useState("Home");
  const [currentActive, setCurrentActive] = useState("Home");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      // className="fixed z-[49] mx-auto flex w-full justify-center"
      // initial={{ top: "50%" }}
      animate={{ filter: "url('#gooey')" }}
      transition={{ type: "spring", bounce: 0, duration: 0.6 }}
      className="flex gap-[16px]"
    >
      <AnimatePresence mode="popLayout">
        {!isLoading && back ? (
          <motion.div
            key="back-island"
            layout
            initial={{
              x: 0,
              opacity: 0,
            }}
            animate={{ x: -80, opacity: 1 }}
            exit={{
              x: 32,
              opacity: 0,
              transition: { type: "spring", bounce: 0.2, duration: 0.6 },
            }}
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.7,
              delay: 0.2,
            }}
            className="absolute flex h-[52px] w-[64px] cursor-pointer items-center justify-center gap-[0px] bg-slate-900/90"
            style={{ borderRadius: 22 }}
          >
            <ArrowLeft className="text-white" size={28} />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        key="main-island"
        className="relative flex h-[52px] origin-center flex-col items-center justify-center overflow-hidden bg-slate-900/90 px-[4px] py-[4px] backdrop-blur-sm"
        style={{ borderRadius: 22 }}
        initial={{ width: 52, opacity: 0 }}
        animate={{ width: isLoading ? 64 : 342, opacity: 1 }}
        transition={transition}
      >
        <motion.div
          key="loader"
          initial={{
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
          }}
          animate={{
            opacity: isLoading ? 1 : 0,
            filter: isLoading ? "blur(0px)" : "blur(6px)",
            scale: isLoading ? "scale:1" : "scale:0.5",
          }}
          className="pointer-events-none absolute z-10 flex h-[48px] w-[48px] items-center justify-center"
          transition={loaderTransition}
        >
          <motion.span
            key="loader"
            layout
            className="loader place-self-center"
          ></motion.span>
        </motion.div>

        <motion.ul
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex origin-center place-self-center overflow-hidden"
          key="menus"
          animate={{
            opacity: isLoading ? 0 : 1,
            filter: isLoading ? "blur(6px)" : "blur(0px)",
            pointerEvents: isLoading ? "none" : "auto",
            scale: isLoading ? 0.5 : 1,
          }}
          transition={smallTransition}
        >
          {Object.values(MENUS).map((menu) => {
            const Icon = menu.icon;
            return (
              <motion.li
                className={clsx(
                  "relative flex cursor-pointer items-center gap-[8px] px-[20px] py-[10px] transition-all duration-300 hover:blur-none",
                  isHovered && active !== menu.name
                    ? "blur-[2px]"
                    : "blur-[0px]",
                )}
                transition={hoverTransition}
                key={menu.name}
                layout
                onMouseOver={() => {
                  setActive(menu.name);
                }}
                onMouseLeave={() => setActive(currentActive)}
              >
                {active === menu.name ? (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute inset-0 z-0 flex items-end justify-center rounded-[22px] border border-slate-600/70 bg-slate-900/50"
                  >
                    <motion.div className="relative bottom-[-40px] h-[60px] w-[60px] rounded-full bg-white/50 blur-xl" />
                  </motion.div>
                ) : null}
                <span className="z-10">
                  <Icon
                    size={22}
                    className={clsx(
                      active === menu.name ? "text-white" : "text-slate-400",
                    )}
                  />
                </span>

                <span
                  className={clsx(
                    "relative",
                    active === menu.name ? "text-white" : "text-slate-400",
                  )}
                >
                  {menu.name}
                </span>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
      <svg className="hidden">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>
    </motion.div>
  );
}
