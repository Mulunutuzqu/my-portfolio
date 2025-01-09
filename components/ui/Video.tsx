import { list } from "@vercel/blob";

interface videoProps {
  url: string;
}

export default function VideoComponent({ url }: videoProps) {
  return (
    <video
      preload="none"
      aria-label="Video player"
      autoPlay
      muted
      playsInline
      loop
      className="object-cover"
    >
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
