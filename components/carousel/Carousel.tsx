import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { NextButton, PrevButton, usePrevNextButtons } from "./ArrowButton";
import Divider from "../ui/Divider";

const TWEEN_FACTOR_BASE = 0.6;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  slides?: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      playOnInit: true,
      delay: 4000,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    }),
  ]);
  const [isDragging, setIsDragging] = useState(false);
  const tweenFactor = useRef(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const opacity = numberWithinRange(tweenValue, 0, 1).toString();
          emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
        });
      });
    },
    [],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);

    // Cursor grabbing logic
    const handlePointerDown = () => setIsDragging(true);
    const handlePointerUp = () => setIsDragging(false);
    emblaApi.on("pointerDown", handlePointerDown);
    emblaApi.on("pointerUp", handlePointerUp);
    // emblaApi.on("pointerLeave", handlePointerUp); // Not supported by EmblaEventType

    return () => {
      emblaApi.off("pointerDown", handlePointerDown);
      emblaApi.off("pointerUp", handlePointerUp);
      emblaApi.off("select", onSelect);
      // emblaApi.off("pointerLeave", handlePointerUp); // Not supported by EmblaEventType
    };
  }, [emblaApi, tweenOpacity, setTweenFactor]);

  return (
    <div className="embla group">
      <div
        className={`pointer-events-none invisible absolute top-0 z-[20] flex h-full w-full items-center justify-between self-center p-[8px] px-[12px] group-hover:visible`}
      >
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
      <div
        className={`embla__viewport ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        ref={emblaRef}
      >
        <div className="embla__container">
          {/* ...existing code... */}
          <div className="embla__slide relative py-[4px]">
            <div className="relative z-10 flex aspect-[756/491] flex-col border-x bg-muted p-[20px]">
              <div className="absolute left-0 top-0 flex w-full">
                <Divider />
              </div>
              <div className="relative flex aspect-[756/491] place-self-center overflow-hidden rounded-[12px] shadow-md">
                <Image
                  width={1200}
                  height={780}
                  src="/assets/works/tele-1-min.png"
                  alt="tele-1"
                  className=""
                />
              </div>
              <div className="absolute bottom-0 left-0 flex w-full">
                <Divider />
              </div>
            </div>
          </div>
          <div className="embla__slide relative py-[4px]">
            <div className="relative z-10 flex aspect-[756/491] flex-col border-x bg-muted p-[20px]">
              <div className="absolute left-0 top-0 flex w-full">
                <Divider />
              </div>
              {/* <div
                className={`invisible absolute left-0 top-0 z-[20] flex h-full w-full items-center justify-between p-[8px] ${selectedIndex === 1 && "group-hover:visible"}`}
              >
                <PrevButton
                  onClick={onPrevButtonClick}
                  disabled={prevBtnDisabled}
                />
                <NextButton
                  onClick={onNextButtonClick}
                  disabled={nextBtnDisabled}
                />
              </div> */}
              <div className="relative flex aspect-[756/491] place-self-center overflow-hidden rounded-[12px] shadow-md">
                <Image
                  width={1200}
                  height={780}
                  src="/assets/works/tele-2-min.png"
                  alt="tele-1"
                  className=""
                />
              </div>
              <div className="absolute bottom-0 left-0 flex w-full">
                <Divider />
              </div>
            </div>
          </div>
          <div className="embla__slide relative py-[4px]">
            <div className="relative z-10 flex aspect-[756/491] flex-col border-x bg-muted p-[20px]">
              <div className="absolute left-0 top-0 flex w-full">
                <Divider />
              </div>
              {/* <div
                className={`invisible absolute left-0 top-0 z-[20] flex h-full w-full items-center justify-between p-[8px] ${selectedIndex === 2 && "group-hover:visible"}`}
              >
                <PrevButton
                  onClick={onPrevButtonClick}
                  disabled={prevBtnDisabled}
                />
                <NextButton
                  onClick={onNextButtonClick}
                  disabled={nextBtnDisabled}
                />
              </div> */}
              <div className="relative flex aspect-[756/491] place-self-center overflow-hidden rounded-[12px] shadow-md">
                <Image
                  width={1200}
                  height={780}
                  src="/assets/works/tele-3-min.png"
                  alt="tele-1"
                  className=""
                />
              </div>
              <div className="absolute bottom-0 left-0 flex w-full">
                <Divider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
