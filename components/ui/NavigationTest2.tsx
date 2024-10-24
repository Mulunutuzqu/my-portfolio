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
} from "lucide-react";
import { act, use, useState } from "react";

interface NavigationProps {
  isLoading: boolean;
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

export default function Navigation({ isLoading }: NavigationProps) {
  const [active, setActive] = useState("Home");
  const [currentActive, setCurrentActive] = useState("Home");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      // className="fixed z-[49] mx-auto flex w-full justify-center"
      // initial={{ top: "50%" }}
      // animate={{ top: isLoading ? "50%" : "16px" }}
      className="flex gap-[16px]"
    >
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            key="back-island"
            layout
            initial={{
              x: 0,
              opacity: 0,
            }}
            animate={{ x: -80, opacity: 1 }}
            exit={{ x: 80, opacity: 0 }}
            transition={smallTransition}
            className="relative flex h-[52px] w-[64px] gap-[0px] rounded-full bg-[#000]"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
