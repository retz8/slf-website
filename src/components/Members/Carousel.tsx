"use client";

import React, { useEffect, PropsWithChildren } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import CarouselControls from "./CarouselControls";

type Props = PropsWithChildren & EmblaOptionsType;

export default function Carousel({ children, ...options }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  useEffect(() => {
    function selectHandler() {
      // selectedScrollSnap gives us the current selected index.
      const index = emblaApi?.selectedScrollSnap();
    }

    emblaApi?.on("select", selectHandler);
    // cleanup
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);
  // undefined 을 false로 취급
  const canScrollNext = !!emblaApi?.canScrollNext();
  const canScrollPrev = !!emblaApi?.canScrollPrev();

  return (
    <div className="w-full flex flex-col items-end">
      <div
        className="flex right-0 mr-8 sm:mr-16 md:mr-28  lg:mr-36 
      mb-8 lg:mb-10"
      >
        <CarouselControls
          canScrollNext={canScrollNext}
          canScrollPrev={canScrollPrev}
          onNext={() => emblaApi?.scrollNext()}
          onPrev={() => emblaApi?.scrollPrev()}
        />
      </div>

      <div
        className="flex mx-auto w-full justify-center overflow-hidden"
        ref={emblaRef}
      >
        {/* 3. The inner div must have a display:flex property */}
        {/* 4. We pass the children as-is so that the outside component can style it accordingly */}
        <div className="flex">{children}</div>
      </div>
    </div>
  );
}
