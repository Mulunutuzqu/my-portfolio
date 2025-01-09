import VideoComponent from "@/components/ui/Video";
import { BookMarked } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  title: string;
  description: string;
  url: string;
  video: boolean;
}

export function Header({ title, description, url, video }: HeaderProps) {
  return (
    <>
      <section className="flex w-full max-w-[720px] justify-center overflow-hidden rounded-[4px] bg-gradient-to-b from-[#eef2f6] to-white p-[1px]">
        <div className="flex w-full flex-col items-center justify-start gap-[16px] overflow-hidden rounded-[4px] bg-white p-[8px] md:p-[24px]">
          <div className="mt-[24px] flex w-full flex-col items-center gap-[4px]">
            <BookMarked className="shrink-0 text-subtext" size={24} />
            <p className="notion-max-w text-[14px] text-subtext">Study case</p>
          </div>
          <p className="notion-max-w w-full text-center text-[32px] text-maintext">
            {title}
          </p>
          <p className="notion-max-w w-full text-center text-[14px] text-subtext">
            {description}
          </p>

          <div className="relative flex h-[320px] w-full bg-muted">
            {video ? (
              <VideoComponent url={url} />
            ) : (
              <Image fill className="object-cover" src={url} alt="picture" />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
