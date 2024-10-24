"use client";
import { motion } from "framer-motion";
import { ReactNode, use, useRef, useState } from "react";
import move from "lodash-move";
import Image from "next/image";

const items = [
  { name: "bni", url: "/assets/works/bni-long.jpg" },
  { name: "prostasia", url: "/assets/works/prostasia-long.jpg" },
  { name: "umara", url: "/assets/works/umara-long.jpg" },
];
const cardOffset = 16;
const scaleFactor = 0.06;
const rotateFactor = 4;

interface VideoStackProps {
  initialCards?: typeof items;
}

export default function PhotoStack({}: VideoStackProps) {
  const [cards, setCards] = useState(items);
  const moveToEnd = (from: number): void => {
    if (from === 0) {
      setCards(move(cards, from, cards.length - 1));
    } else {
      setCards(move(cards, from, 0));
    }
  };
  return (
    <div className="relative flex h-fit w-fit flex-col items-center justify-center gap-[12px] rounded-[12px]">
      <ul className="relative h-[340px] w-[256px] items-center place-self-center">
        {cards.map((item, index) => {
          return (
            <motion.li
              style={{
                cursor: "grab",
                transformOrigin: "bottom center",
              }}
              key={item.name}
              className="absolute"
              drag
              animate={{
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
              onDragEnd={() => moveToEnd(index)}
            >
              <div className="card-shadow-lg relative flex shrink-0 overflow-hidden rounded-[8px] bg-white">
                <div className="">
                  <Image
                    className="pointer-events-none"
                    src={item.url}
                    width={232}
                    height={356}
                    alt="Article Image"
                  />
                </div>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
