"use client";

import { useStateProvider } from "@/app/provider/StateProvider";

import { memo } from "react";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  LucideIcon,
  SquareTerminal,
  BookOpenText,
  ArrowLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

type availablePage = "Home" | "Blogs" | "Labs" | string;

interface NavigationProps {
  isLoading: boolean;
  backButton: boolean;
  currentActive: availablePage;
}

interface MenuItem {
  name: string;
  icon: LucideIcon;
  link: string;
}

interface MenuItems {
  [key: string]: MenuItem;
}

const MENUS: MenuItems = {
  Home: { name: "Home", icon: Home, link: "/" },
  Blogs: { name: "Blogs", icon: BookOpenText, link: "/blog" },
  Labs: { name: "Labs", icon: SquareTerminal, link: "/lab" },
};

const transition = {
  type: "spring",
  bounce: 0.1,
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

function Nav() {
  const { isLoading, backButton, currentActive } = useStateProvider();

  const [active, setActive] = useState(currentActive);
  const [isHovered, setIsHovered] = useState(false);
  const [isCurrentActive, setIsCurrentActive] = useState(currentActive);

  const router = useRouter();

  useEffect(() => {
    setActive(currentActive);
    setIsCurrentActive(currentActive);
  }, [currentActive]);

  return (
    // <motion.div
    //   layout
    //   className="fixed z-[49] mx-auto flex w-full justify-center"
    //   initial={{ top: "50%" }}
    //   animate={{ top: isLoading ? "50%" : "16px" }}
    // >

    <motion.div
      initial={{ top: "50%" }}
      animate={{ top: isLoading ? "50%" : "16px" }}
      transition={{ type: "spring", bounce: 0, duration: 0.6 }}
      className="fixed z-[49] mx-auto flex w-full justify-center gap-[16px] [filter:url('#gooey')]"
    >
      {/* <p className="absolute bottom-[-520px] flex h-[32px] w-[200px] place-self-center bg-red-600 text-white">
        {isCurrentActive}
      </p> */}
      <AnimatePresence mode="popLayout">
        {!isLoading && backButton ? (
          <motion.div
            key="back-island"
            layout
            initial={{
              x: 0,
              opacity: 0,
            }}
            animate={{
              x: -180,
              opacity: 1,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 0.7,
                delay: 0.2,
              },
            }}
            exit={{
              x: 32,
              opacity: 0,
              transition: { type: "spring", bounce: 0.2, duration: 0.6 },
            }}
            whileHover={{ scale: 0.95, transition: hoverTransition }}
            className="absolute flex h-[52px] w-[64px] cursor-pointer items-center justify-center gap-[0px] bg-slate-900/90"
            style={{ borderRadius: 22 }}
            onClick={() => router.back()}
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
        animate={{
          width: isLoading ? 64 : 342,
          opacity: 1,
          right: !isLoading && backButton ? -40 : 0,
        }}
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
              <Link href={menu.link}>
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
                  onClick={() => {
                    setIsCurrentActive(menu.name);
                  }}
                  onMouseLeave={() => setActive(isCurrentActive)}
                >
                  {active === menu.name ? (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute inset-0 z-0 flex items-end justify-center rounded-[22px] border border-slate-600/70 bg-slate-900/50"
                    >
                      {/* <motion.div className="relative bottom-[-40px] h-[60px] w-[60px] rounded-full bg-white/50 blur-xl" /> */}
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
              </Link>
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

export default memo(Nav);
