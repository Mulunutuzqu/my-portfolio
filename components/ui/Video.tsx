"use client";
import { list } from "@vercel/blob";
import { useEffect, useRef } from "react";

interface videoProps {
  url: string;
  isLooping?: boolean;
  autoplay?: boolean;
}

export default function VideoComponent({
  url,
  isLooping = true,
  autoplay = true,
}: videoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.playbackRate = 0.8;
  //   }
  // }, []);

  return (
    <video
      preload="none"
      aria-label="Video player"
      autoPlay={autoplay}
      muted
      playsInline
      loop={isLooping}
      className="absolute h-full w-full object-cover"
      ref={videoRef}
    >
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
