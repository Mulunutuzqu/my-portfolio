"use client";

import Image from "next/image";

import Divider from "@/components/ui/Divider";

import SnippetVaul from "./SnippetVaul";
import SnippetItem from "./SnippetItem";

export default function OtherWork() {
  return (
    <>
      <section className="mb-[8px] flex w-full items-start gap-[20px] px-[16px] py-[16px] md:px-[20px]">
        <div className="z-0 flex w-full flex-col">
          <p className="mb-[12px] text-[12px] font-semibold text-subtext">
            Showcases
          </p>
          <div className="flex flex-col gap-[32px]">
            <div className="columns-2 gap-4">
              <div className="mb-4 break-inside-avoid">
                <SnippetItem tall url="/assets/comparison/cart" />
              </div>
              <div className="mb-4 max-h-[192px] break-inside-avoid overflow-hidden">
                <SnippetItem disableExpand url="/assets/works/cart-1.png" />
              </div>
              <div className="mb-4 break-inside-avoid">
                <SnippetItem disableExpand url="/assets/works/cart-2.png" />
              </div>
            </div>

            <div className="columns-2 gap-4">
              <div className="mb-4 max-h-[192px] break-inside-avoid overflow-hidden">
                <SnippetItem disableExpand url="/assets/works/map.png" />
              </div>
              <div className="mb-4 break-inside-avoid">
                <SnippetItem disableExpand url="/assets/works/plp.png" />
              </div>
              <div className="mb-4 break-inside-avoid">
                <SnippetItem tall url="/assets/comparison/pdp" />
              </div>
            </div>

            <div className="columns-2 gap-4">
              <div className="mb-4 break-inside-avoid">
                <SnippetItem
                  tall
                  video
                  url="/assets/videos/im3-new.webm"
                />
              </div>
              <div className="mb-4 max-h-[192px] break-inside-avoid overflow-hidden">
                <SnippetItem disableExpand url="/assets/works/im3-1.png" />
              </div>
              <div className="mb-4 break-inside-avoid">
                <SnippetItem disableExpand url="/assets/works/im3-2.png" />
              </div>
            </div>
           
            
            <div className="columns-2 gap-4">
             
              <div className="mb-4 max-h-[192px] break-inside-avoid overflow-hidden">
                <SnippetVaul
                  url="/assets/works/telin.png"
                  urlFull="/assets/works/telin-full.png"
                />
              </div>
              <div className="mb-4 break-inside-avoid">
                <SnippetVaul
                  url="/assets/works/umara.png"
                  urlFull="/assets/works/umara-full.jpg"
                />
              </div>
              <div className="mb-4 break-inside-avoid">
                <SnippetItem
                  tall
                  video
                  url="/assets/videos/nuvstyle-optim.webm"
                />
              </div>
            </div>
            <div className="columns-2 gap-4">
            <div className="mb-4 break-inside-avoid">
                <SnippetItem tall video url="/assets/videos/onboarding.webm" />
              </div>
              <div className="mb-4 max-h-[192px] break-inside-avoid overflow-hidden">
                <SnippetVaul
                  url="/assets/works/prostasia.png"
                  urlFull="/assets/works/prostasia-full.png"
                />
              </div>
              <div className="mb-4 break-inside-avoid">
                <SnippetVaul
                  url="/assets/works/axa.png"
                  urlFull="/assets/works/axa-full.png"
                />
              </div>
              
            </div>
          </div>
          {/* <div className="columns-2 gap-4">
            <div className="mb-4 break-inside-avoid">
              <SnippetItem video url="/assets/videos/im3-3.webm" />
            </div>
            <div className="mb-4 max-h-[192px] break-inside-avoid overflow-hidden">
              <SnippetVaul
                url="/assets/works/im3.png"
                urlFull="/assets/works/im3-full.png"
              />
            </div>
            <div className="mb-4 break-inside-avoid">
              <SnippetVaul
                url="/assets/works/umara.png"
                urlFull="/assets/works/umara-full.jpg"
              />
            </div>
          </div> */}
        </div>
      </section>

      <Divider />
    </>
  );
}
