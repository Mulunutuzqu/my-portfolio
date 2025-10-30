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
        className="notion-render w-full place-self-center px-[20px] md:px-0"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}
