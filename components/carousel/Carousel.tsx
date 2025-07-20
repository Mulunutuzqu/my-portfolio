import React, { useCallback, useEffect, useRef } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  useEffect(() => {
    if (!emblaApi) return;
    // No opacity tween logic
  }, [emblaApi]);

  return (
    <div className="embla pointer-events-none">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide relative">
            <div className="relative z-10 flex h-full w-full items-center justify-center place-self-center rounded-[20px] border bg-muted py-[32px]">
              <div className="z-10 h-[574px] w-[270px] overflow-hidden rounded-[28px]">
                <video autoPlay loop muted playsInline preload="auto">
                  <source
                    src="/assets/videos/cart.mp4"
                    type="video/webm"
                  ></source>
                </video>
              </div>
              <p className="absolute bottom-[8px] z-20 text-[12px] italic text-subtext">
                *Non-functional animations: for presentation purpose
              </p>
              <div className="absolute flex h-[574px] w-[270px] items-center justify-center overflow-hidden rounded-[28px] bg-white">
                <p>Loading...</p>
              </div>
            </div>
          </div>
          <div className="embla__slide relative">
            <div className="relative z-10 flex h-full w-full items-center justify-center place-self-center rounded-[20px] border bg-muted">
              <div className="z-10 h-[574px] w-[270px] overflow-hidden rounded-[28px]">
                <video autoPlay loop muted playsInline preload="auto">
                  <source
                    src="/assets/videos/plp.mp4"
                    type="video/webm"
                  ></source>
                </video>
              </div>
              <p className="absolute bottom-[8px] z-20 text-[12px] italic text-subtext">
                *Non-functional animations: for presentation purpose
              </p>
              <div className="absolute flex h-[574px] w-[270px] items-center justify-center overflow-hidden rounded-[28px] bg-white">
                <p>Loading...</p>
              </div>
            </div>
          </div>
          <div className="embla__slide invisible relative">
            <div className="relative z-10 flex h-full w-full items-center justify-center place-self-center rounded-[20px] border bg-muted">
              {/* <div className="z-10 h-[574px] w-[270px] overflow-hidden rounded-[28px]">
                <video autoPlay loop muted playsInline preload="auto">
                  <source
                    src="/assets/videos/map.mp4"
                    type="video/webm"
                  ></source>
                </video>
              </div> */}
              <div className="h-[574px] w-[270px] overflow-hidden rounded-[28px] bg-white">
                <p>Loading...</p>
              </div>
            </div>
          </div>
          <div className="embla__slide invisible relative">
            <div className="relative z-10 flex h-full w-full items-center justify-center place-self-center rounded-[20px] border bg-muted">
              {/* <div className="z-10 h-[574px] w-[270px] overflow-hidden rounded-[28px]">
                <video autoPlay loop muted playsInline preload="auto">
                  <source
                    src="/assets/videos/cart.mp4"
                    type="video/webm"
                  ></source>
                </video>
              </div> */}

              <div className="h-[574px] w-[270px] overflow-hidden rounded-[28px] bg-white">
                <p>Loading...</p>
              </div>
            </div>
          </div>
          <div className="embla__slide relative">
            <div className="relative z-10 flex h-full w-full items-center justify-center place-self-center rounded-[20px] border bg-muted">
              <div className="z-10 h-[574px] w-[270px] overflow-hidden rounded-[28px]">
                <video autoPlay loop muted playsInline preload="auto">
                  <source
                    src="/assets/videos/map.mp4"
                    type="video/webm"
                  ></source>
                </video>
              </div>
              <p className="absolute bottom-[8px] z-20 text-[12px] italic text-subtext">
                *Non-functional animations: for presentation purpose
              </p>
              <div className="absolute flex h-[574px] w-[270px] items-center justify-center overflow-hidden rounded-[28px] bg-white">
                <p>Loading...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
