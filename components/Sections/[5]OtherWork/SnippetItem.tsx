"use client";
import { motion } from "framer-motion";
import { Expand, UnfoldHorizontal } from "lucide-react";
import Image from "next/image";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

interface SnippetItemProps {
  tall?: boolean;
  video?: boolean;
  disableExpand?: boolean;
  url: string;
}

const CustomHandle: React.FC = () => {
  return (
    <div className="shadow-handle flex h-full w-[3px] items-center justify-center border-x-[1px] border-white bg-white">
      <div className="flex items-center justify-center place-self-center">
        <div className="flex h-[24px] w-[40px] items-center justify-center rounded-full border-[3px] border-white bg-primary backdrop-blur">
          <UnfoldHorizontal className="text-white shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default function SnippetItem({
  tall,
  url,
  video,
  disableExpand,
}: SnippetItemProps) {
  const transition = {
    type: "spring",
    bounce: 0.25,
    duration: 0.4,
  };
  return tall ? (
    <div className="flex h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl border bg-muted">
      {video ? (
        <div className="flex h-[372px] w-[174px] shrink-0 items-center justify-center rounded-[12px] border bg-white">
          <div
            className="ml-[4px] flex h-[356px] w-[164px] shrink-0 place-self-center overflow-hidden"
            style={{ transform: "translateZ(0)", willChange: "transform" }}
          >
            <video
              className="scale-[1.008] rounded-[8px]"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src={url} type="video/webm"></source>
            </video>
          </div>
        </div>
      ) : (
        <div className="flex h-[372px] w-[174px] shrink-0 items-center justify-center overflow-hidden rounded-[12px] border bg-white">
          <div
            className="ml-[4px] flex h-[356px] w-[164px] shrink-0 place-self-center overflow-hidden"
            style={{ transform: "translateZ(0)", willChange: "transform" }}
          >
            <ReactCompareSlider
              changePositionOnHover
              handle={<CustomHandle />}
              itemOne={
                <ReactCompareSliderImage
                  src={url + "-before.png"}
                  alt="Image one"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src={url + "-after.png"}
                  alt="Image two"
                />
              }
            />
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className="group relative mb-4 h-[192px] w-full overflow-hidden rounded-lg border bg-muted">
      {disableExpand ? null : (
        <div className="absolute bottom-0 right-0 z-[10] m-[8px] flex items-center justify-center rounded-full bg-white p-[8px] text-maintext shadow transition-all ease-out group-hover:bg-primary group-hover:text-white">
          <Expand strokeWidth={2.5} size={18} />
        </div>
      )}

      <motion.div
        transition={transition}
        whileHover={{ scale: disableExpand ? 1 : 1.09 }}
        className="relative h-[192px] w-full overflow-hidden"
      >
        <Image
          src={url}
          width={394}
          height={532}
          style={{ objectFit: "cover" }}
          alt="profile picture"
        ></Image>
      </motion.div>
    </div>
  );
}
