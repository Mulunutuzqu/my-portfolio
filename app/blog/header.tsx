import VideoComponent from "@/components/ui/Video";
import { BookMarked } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  title: string;
  description: string;
  url: string;
  video: boolean;
  scope: string;
  role: string;
}

export function Header({
  title,
  description,
  url,
  video,
  role,
  scope,
}: HeaderProps) {
  const renderDescription = () => {
    if (!description.includes("[")) {
      return <p className="text-[16px] leading-relaxed">{description}</p>;
    }

    const regex = /\[(.*?)\]/g;
    const matches = [...description.matchAll(regex)];

    if (matches.length === 0) {
      return <p className="text-[16px] leading-relaxed">{description}</p>;
    }

    return (
      <div className="flex w-full flex-col gap-[6px]">
        {matches.map((match, index) => (
          <p key={index} className="flex items-center gap-[8px] text-[15px]">
            <span className="text-primary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 3C10.2974 3 10.5385 3.24108 10.5385 3.53846C10.5385 4.97872 11.264 6.46405 12.4 7.60002C13.536 8.73598 15.0213 9.46154 16.4615 9.46154C16.7589 9.46154 17 9.70263 17 10C17 10.2974 16.7589 10.5385 16.4615 10.5385C15.0213 10.5385 13.536 11.264 12.4 12.4C11.264 13.536 10.5385 15.0213 10.5385 16.4615C10.5385 16.7589 10.2974 17 10 17C9.70263 17 9.46154 16.7589 9.46154 16.4615C9.46154 15.0213 8.73598 13.536 7.60002 12.4C6.46405 11.264 4.97872 10.5385 3.53846 10.5385C3.24108 10.5385 3 10.2974 3 10C3 9.70263 3.24108 9.46154 3.53846 9.46154C4.97872 9.46154 6.46405 8.73598 7.60002 7.60002C8.73598 6.46405 9.46154 4.97872 9.46154 3.53846C9.46154 3.24108 9.70263 3 10 3Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            {match[1]}
          </p>
        ))}
      </div>
    );
  };

  return (
    <>
      <section className="mb-[40px] mt-[96px] flex w-full max-w-[720px] flex-col gap-[40px]">
        <div className="relative w-full overflow-hidden rounded-[16px]">
          {video ? (
            <div className="relative aspect-[16/10] w-full">
              <VideoComponent url={url} />
            </div>
          ) : (
            <div className="relative aspect-[16/10] w-full">
              <Image
                unoptimized
                fill
                className="object-cover"
                src={url}
                alt="picture"
              />
            </div>
          )}
        </div>
        <div className="flex w-full flex-col gap-[20px] px-[20px] md:px-0">
          <h1 className="text-[18px] font-medium leading-tight text-maintext md:text-[28px]">
            {title}
          </h1>
          <div className="flex w-full flex-col gap-[3px] text-[16px] leading-relaxed text-subtext">
            {renderDescription()}
          </div>

          <div className="mt-[8px] flex flex-wrap gap-[24px] border-t border-border pt-[20px] text-[14px]">
            <div className="flex flex-col gap-[4px]">
              <p className="text-[12px] uppercase tracking-wide text-subtext/60">
                Role
              </p>
              <p className="text-maintext">{role}</p>
            </div>
            <div className="flex flex-col gap-[4px]">
              <p className="text-[12px] uppercase tracking-wide text-subtext/60">
                Scope
              </p>
              <p className="text-maintext">{scope}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
