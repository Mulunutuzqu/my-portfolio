"use client";
import { useStateProvider } from "@/app/provider/StateProvider";
import { memo, useCallback, useState, useEffect, Suspense } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  LucideIcon,
  SquareTerminal,
  BookOpenText,
  ArrowLeft,
  X,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const MENUS = {
  "/": { name: "Home", icon: Home, link: "/" },
  "/blog": { name: "Blogs", icon: BookOpenText, link: "/blog" },
  // "/lab": { name: "Labs", icon: SquareTerminal, link: "/lab" },
} as const;

const transition = {
  type: "spring",
  bounce: 0.25,
  duration: 0.45,
};

const NavigationContent = memo(function NavigationContent() {
  const {
    isLoading,
    backButton,
    currentActive,
    setCurrentActive,
    homeVisited,
    setHomeVisited,
    setBackButton,
    isDrawerOpen,
    setIsDrawerOpen,
  } = useStateProvider();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Handle both initial mount and pathname changes
  useEffect(() => {
    const menuName = Object.entries(MENUS).find(
      ([path]) => pathname === path || pathname.startsWith(path + "/"),
    )?.[1]?.name;

    if (menuName && menuName !== currentActive) {
      setCurrentActive(menuName);
    }
  }, [pathname, setCurrentActive]);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setHoveredItem(null);
  }, []);

  return (
    <motion.div
      initial={{ top: isLoading ? "50%" : "-64px" }}
      animate={{ top: isLoading ? "50%" : "14px" }}
      transition={transition}
      className="fixed z-[1001] flex w-full justify-center gap-[16px] [filter:url('#gooey')]"
      id="navigation-bar"
      layoutScroll
      layoutId="container-nav"
    >
      <AnimatePresence mode="popLayout">
        {!isLoading && backButton && (
          <motion.div
            key="back-island"
            // layout
            initial={{ x: 0, opacity: 0 }}
            animate={{
              x: -128,
              opacity: 1,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 0.7,
                delay: 0.2,
              },
            }}
            exit={{
              x: 16,
              opacity: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 0.6,
              },
            }}
            whileHover={{ scale: 0.95 }}
            className="absolute flex h-[52px] w-[64px] cursor-pointer items-center justify-center bg-slate-900/90"
            style={{ borderRadius: 22 }}
            onClick={() => {
              router.back();
            }}
          >
            <ArrowLeft className="text-white" size={28} />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        key="main-island"
        className="relative flex h-[52px] origin-center flex-col items-center justify-center overflow-hidden bg-slate-900/90 px-[4px] py-[4px] backdrop-blur-sm"
        style={{ borderRadius: 22 }}
        initial={{ width: 64, opacity: 0 }}
        animate={{
          width: isDrawerOpen ? 64 : 236,
          opacity: 1,
          right: !isDrawerOpen && backButton ? -40 : 0,
          // marginLeft: !isLoading && backButton ? 72 : 0,
        }}
        transition={transition}
      >
        <motion.div
          key="drawerControl"
          initial={{
            opacity: 1,
            filter: "blur(6px)",
            scale: 1,
          }}
          animate={{
            opacity: isDrawerOpen ? 1 : 0,
            filter: isDrawerOpen ? "blur(0px)" : "blur(6px)",
            scale: isDrawerOpen ? 1 : 0.5,
          }}
          className="absolute z-10 flex h-[48px] w-[48px] cursor-pointer items-center justify-center"
          transition={transition}
          onClick={() => {
            setIsDrawerOpen(false);
          }}
        >
          <X size={30} className="cursor-pointer text-white" />
        </motion.div>
        <motion.ul
          onMouseOver={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute flex origin-center place-self-center overflow-hidden"
          animate={{
            opacity: isDrawerOpen ? 0 : 1,
            filter: isDrawerOpen ? "blur(6px)" : "blur(0px)",
            pointerEvents: isDrawerOpen ? "none" : "auto",
            scale: isDrawerOpen ? 0.5 : 1,
            display: isDrawerOpen ? "none" : "flex",
          }}
        >
          {Object.values(MENUS).map((menu) => (
            <Link
              href={menu.link}
              key={menu.name}
              prefetch={false}
              onClick={(e) => {
                if (menu.link === pathname) {
                  e.preventDefault();
                  return;
                }
                menu.link === "/"
                  ? setHomeVisited(true)
                  : setHomeVisited(false);
              }}
            >
              <motion.li
                className={clsx(
                  "relative flex cursor-pointer items-center gap-[8px] px-[20px] py-[10px] transition-all duration-300 hover:blur-none",
                  isHovered && hoveredItem !== menu.name
                    ? "blur-[2px]"
                    : "blur-[0px]",
                )}
                // layout
                onMouseOver={() => setHoveredItem(menu.name)}
              >
                {currentActive === menu.name ? (
                  <motion.div
                    layoutId="active-tab"
                    className="active-indicator absolute inset-0 z-0 flex items-end justify-center rounded-[22px] border border-slate-600/70 bg-slate-900/50"
                  />
                ) : null}
                <span className="z-10">
                  <menu.icon
                    size={22}
                    className={clsx(
                      hoveredItem === menu.name || currentActive === menu.name
                        ? "text-white"
                        : "text-slate-400",
                    )}
                  />
                </span>
                <span
                  className={clsx(
                    "relative",
                    hoveredItem === menu.name || currentActive === menu.name
                      ? "text-white"
                      : "text-slate-400",
                  )}
                >
                  {menu.name}
                </span>
              </motion.li>
            </Link>
          ))}
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
});

export default function Nav() {
  return (
    <Suspense>
      <NavigationContent />
    </Suspense>
  );
}
