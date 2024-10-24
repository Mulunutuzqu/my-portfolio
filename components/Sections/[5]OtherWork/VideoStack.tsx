"use client";
import { motion, useAnimate, animate } from "framer-motion";
import { ReactNode, use, useRef, useState } from "react";
import move from "lodash-move";

const items = [
  { name: "im3", url: "/assets/videos/im3-3.webm", type: "video" },
  { name: "nuvstyle", url: "/assets/videos/nuvstyle.webm", type: "video" },
  { name: "onboarding", url: "/assets/videos/onboarding.webm", type: "video" },
];
const cardOffset = 16;
const scaleFactor = 0.06;
const rotateFactor = 4;

interface VideoStackProps {
  initialCards?: typeof items;
}

export default function VideoStack({}: VideoStackProps) {
  const [scope, animate] = useAnimate();

  const [cards, setCards] = useState(items);

  const [isAnimating, setIsAnimating] = useState(false);

  const moveToEnd = (from: number): void => {
    if (from === 0) {
      setCards(move(cards, from, cards.length - 1));
    } else {
      setCards(move(cards, from, 0));
    }
  };

  const moveToEndOnClickHandle = async (from: number) => {
    if (from === 0) {
      await animate(
        `.index-${from}`,
        {
          x: 80,
          scale: 0.9,
          rotate: 12,
          pointerEvents: "none",
        },
        { duration: 0.12 },
      );
      setCards(move(cards, from, cards.length - 1));
      await animate(`.index-${from}`, {
        x: 0,
        scale: 1,
        rotate: 0,
        pointerEvents: "auto",
      });
    }
    // else {
    //   await animate(
    //     `.index-${from}`,
    //     { x: -80, scale: 1, rotate: -12 },
    //     { duration: 0.18 },
    //   );
    //   setCards(move(cards, from, 0));
    //   await animate(`.index-${from}`, {
    //     x: 0,
    //     scale: 1,
    //     rotate: 0,
    //   });
    // }
  };

  return (
    <div
      ref={scope}
      className="relative flex h-fit w-fit flex-col items-start justify-center gap-[12px] rounded-[12px]"
    >
      <ul className="relative h-[356px] w-[160px] place-self-center">
        {cards.map((item, index) => {
          return (
            <motion.li
              style={{
                cursor: "pointer",
                transformOrigin: "bottom center",
                transformStyle: "preserve-3d",
              }}
              key={item.name}
              className={`absolute index-${index}`}
              // drag
              animate={{
                rotateY: 0,
                top: index * -cardOffset,
                zIndex: items.length - index,
                scale: 1 - index * scaleFactor,
                rotate: 1 - index * rotateFactor,
              }}
              dragTransition={{
                bounceStiffness: 300,
                bounceDamping: 25,
              }}
              dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
              // onDragEnd={() => moveToEnd(index)}
              // whileDrag={{ pointerEvents: "none" }}
              onClick={() => moveToEndOnClickHandle(index)}
            >
              <div className="card-shadow-lg flex h-[356px] w-[160px] shrink-0 overflow-hidden rounded-[8px] bg-white">
                <div className="flex h-[356px] w-[164px] shrink-0 scale-[1.008]">
                  <video className="" autoPlay loop muted>
                    <source src={item.url} type="video/webm"></source>
                  </video>
                </div>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
