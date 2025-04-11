// components/NotionContentWrapper.tsx
"use client";

import { ImageZoomHandler } from "./ImageZoomHandler";

interface NotionContentWrapperProps {
  html: string;
}

export default function NotionContentWrapper({
  html,
}: NotionContentWrapperProps) {
  return (
    <>
      <ImageZoomHandler />
      <div
        className="notion-render notion-max-w mt-[-24px] w-full place-self-center p-[16px] md:p-[0px]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}
