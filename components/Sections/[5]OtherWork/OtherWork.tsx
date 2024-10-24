"use client";

import Image from "next/image";
import VideoStack from "./VideoStack";
import ThumbnailFolder from "./ThumbnailFolder";
import Divider from "@/components/ui/Divider";

export default function OtherWork() {
  return (
    <>
      <section className="mb-[24px] mt-[24px] flex w-full items-start gap-[20px] py-[16px]">
        <div className="z-0 mb-[0px] ml-[20px] flex w-2/3 flex-col gap-[8px]">
          <div className="relative h-[104px] w-[168px]">
            <Image
              src="/assets/other-works.svg"
              fill
              alt="Handwritten study case"
            />
          </div>
          {/* <p className="max-w-[180px] text-[14px] text-subtext md:max-w-[500px]">
            Snapshots collection of past works
          </p> */}
          <div className="mt-[8px] grid w-[140px] grid-cols-1 gap-[16px] md:w-full md:grid-cols-2 md:place-self-center">
            <ThumbnailFolder
              thumbUrl1="/assets/works/prostasia-long.jpg"
              thumbUrl2="/assets/works/telin-long.jpg"
              thumbUrl3="/assets/works/umara-long.jpg"
              name="Landing pages"
            />
            <div className="hidden md:block">
              <ThumbnailFolder
                thumbUrl1="/assets/works/prostasia-long.jpg"
                thumbUrl2="/assets/works/telin-long.jpg"
                thumbUrl3="/assets/works/umara-long.jpg"
                name="Mobile apps"
                empty
              />
            </div>
            <div className="hidden md:block">
              <ThumbnailFolder
                thumbUrl1="/assets/works/prostasia-long.jpg"
                thumbUrl2="/assets/works/telin-long.jpg"
                thumbUrl3="/assets/works/umara-long.jpg"
                name="Mobile apps"
                empty
              />
            </div>
            <ThumbnailFolder
              thumbUrl1="/assets/works/prostasia-long.jpg"
              thumbUrl2="/assets/works/telin-long.jpg"
              thumbUrl3="/assets/works/umara-long.jpg"
              name="Mobile apps"
            />
          </div>
        </div>
        <div className="flex w-1/3 flex-nowrap items-start justify-end gap-[20px] md:gap-[20px]">
          <div className="relative right-[-20px] top-[8px]">
            <VideoStack />
          </div>
        </div>
      </section>

      <Divider />
    </>
  );
}
