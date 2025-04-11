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
      return (
        <p className="line-clamp-1 text-[14px] text-maintext">{description}</p>
      );
    }

    const regex = /\[(.*?)\]/g;
    const matches = [...description.matchAll(regex)];

    if (matches.length === 0) {
      return (
        <p className="line-clamp-1 text-[14px] text-maintext">{description}</p>
      );
    }

    return (
      <div className="flex w-full flex-col gap-[4px]">
        {matches.map((match, index) => (
          <p
            key={index}
            className="line-clamp-1 flex gap-[6px] border-b border-dashed py-[8px] text-[14px] font-medium text-maintext"
          >
            <span className="rotate-[-6deg] text-primary">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 3C10.2974 3 10.5385 3.24108 10.5385 3.53846C10.5385 4.97872 11.264 6.46405 12.4 7.60002C13.536 8.73598 15.0213 9.46154 16.4615 9.46154C16.7589 9.46154 17 9.70263 17 10C17 10.2974 16.7589 10.5385 16.4615 10.5385C15.0213 10.5385 13.536 11.264 12.4 12.4C11.264 13.536 10.5385 15.0213 10.5385 16.4615C10.5385 16.7589 10.2974 17 10 17C9.70263 17 9.46154 16.7589 9.46154 16.4615C9.46154 15.0213 8.73598 13.536 7.60002 12.4C6.46405 11.264 4.97872 10.5385 3.53846 10.5385C3.24108 10.5385 3 10.2974 3 10C3 9.70263 3.24108 9.46154 3.53846 9.46154C4.97872 9.46154 6.46405 8.73598 7.60002 7.60002C8.73598 6.46405 9.46154 4.97872 9.46154 3.53846C9.46154 3.24108 9.70263 3 10 3Z"
                  fill="currentColor"
                />
                <path
                  d="M15.5 2C15.6525 2 15.7846 2.10567 15.8181 2.25443L15.9854 2.99715C16.0996 3.50429 16.4957 3.90034 17.0029 4.01458L17.7456 4.18189C17.8944 4.21539 18 4.34751 18 4.5C18 4.65249 17.8944 4.78461 17.7456 4.81811L17.0029 4.98542C16.4957 5.09966 16.0996 5.4957 15.9854 6.00284L15.8181 6.74557C15.7846 6.89433 15.6525 7 15.5 7C15.3475 7 15.2154 6.89433 15.1819 6.74557L15.0146 6.00284C14.9004 5.4957 14.5043 5.09966 13.9971 4.98542L13.2544 4.81811C13.1056 4.78461 13 4.65249 13 4.5C13 4.34751 13.1056 4.21539 13.2544 4.18189L13.9971 4.01458C14.5043 3.90034 14.9004 3.5043 15.0146 2.99715L15.1819 2.25443C15.2154 2.10567 15.3475 2 15.5 2Z"
                  fill="currentColor"
                  className="animate-pulse duration-700"
                />
                <path
                  d="M4.5 13C4.65249 13 4.78461 13.1056 4.81811 13.2544L4.98542 13.9971C5.09966 14.5043 5.4957 14.9004 6.00284 15.0146L6.74557 15.1819C6.89433 15.2154 7 15.3475 7 15.5C7 15.6525 6.89433 15.7846 6.74557 15.8181L6.00284 15.9854C5.4957 16.0996 5.09966 16.4957 4.98542 17.0029L4.81811 17.7456C4.78461 17.8944 4.65249 18 4.5 18C4.34751 18 4.21539 17.8944 4.18189 17.7456L4.01458 17.0029C3.90034 16.4957 3.5043 16.0996 2.99715 15.9854L2.25443 15.8181C2.10567 15.7846 2 15.6525 2 15.5C2 15.3475 2.10567 15.2154 2.25443 15.1819L2.99715 15.0146C3.5043 14.9004 3.90034 14.5043 4.01458 13.9971L4.18189 13.2544C4.21539 13.1056 4.34751 13 4.5 13Z"
                  fill="currentColor"
                  className="animate-pulse delay-200 duration-700"
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
      <section className="shadow-custom mb-[16px] mt-[128px] flex w-full max-w-[820px] items-center justify-center gap-[20px] overflow-hidden rounded-[24px] bg-white p-[16px] md:p-[0px]">
        <div className="relative hidden h-[320px] w-[256px] shrink-0 items-center justify-center overflow-hidden rounded-[24px] border p-[-12px] md:flex">
          {video ? (
            <VideoComponent url={url} />
          ) : (
            <Image
              unoptimized
              fill
              className="object-cover"
              src={url}
              alt="picture"
            />
          )}
        </div>
        <div className="z-[20] my-[24px] flex w-full max-w-[660px] flex-col gap-[12px] px-[16px] text-maintext">
          <p className="w-full text-[26px] font-semibold leading-snug text-maintext">
            {title}
          </p>
          <p className="flex w-full flex-col gap-[6px] text-[16px] text-subtext">
            {renderDescription()}
          </p>

          <div className="flex w-full flex-wrap gap-[16px] text-[14px] md:gap-[40px]">
            {/* <div className="flex w-[48px] flex-col">
              <p className="text-[12px] font-semibold text-subtext">Year</p>
              <p>2024</p>
            </div> */}
            <div className="flex flex-col">
              <p className="text-[12px] font-semibold text-subtext">Role</p>
              <p>{role}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[12px] font-semibold text-subtext">
                Project scope
              </p>
              <p>{scope}</p>
            </div>
            {/* <div className="flex w-[88px] flex-col">
              <p className="text-[12px] font-semibold text-subtext">Timeline</p>
              <p>2 Weeks</p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
