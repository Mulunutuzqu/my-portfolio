"use client";
import { Drawer } from "vaul";
import Image from "next/image";

import { useStateProvider } from "@/app/provider/StateProvider";

import SnippetItem from "./SnippetItem";
import { ReactNode } from "react";

interface SnippetVaulProps {
  children?: ReactNode;
  url: string;
  urlFull: string;
}

export default function SnippetVaul({ url, urlFull }: SnippetVaulProps) {
  const {
    isDrawerOpen,
    activeDrawerUrl,
    setIsDrawerOpen,
    openDrawerWithImage,
  } = useStateProvider();
  const isThisDrawerOpen = isDrawerOpen && activeDrawerUrl === urlFull;

  return (
    <>
      <div className="flex w-full flex-col justify-center">
        <Drawer.Root
          open={isThisDrawerOpen}
          onOpenChange={(open) => {
            if (open) {
              openDrawerWithImage(urlFull);
            } else {
              setIsDrawerOpen(false);
            }
          }}
        >
          <Drawer.Trigger>
            <SnippetItem url={url} />
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="pointer-events-none fixed inset-0 z-[50] backdrop-blur-md" />
            <Drawer.Content className="fixed bottom-0 z-[1000] mt-24 flex h-[90%] w-full flex-col rounded-t-[4px] outline-none md:h-[90%]">
              <div
                className="no-scrollbar flex w-full place-self-center overflow-y-auto rounded-t-[24px] border bg-white p-[4px] shadow-lg md:min-w-[560px] md:max-w-[600px]"
                style={{}}
              >
                <div className="mx-auto w-full space-y-4">
                  <div
                    aria-hidden
                    className="mx-auto mb-[16px] mt-[8px] h-1.5 w-12 flex-shrink-0 rounded-full bg-gray-200"
                  />
                  <div className="relative flex w-full shrink-0 bg-white">
                    <Image
                      src={urlFull}
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="picture"
                      className="flex h-auto w-full shrink-0 bg-white"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </>
  );
}
