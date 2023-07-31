"use client";

"react";
import classNames from "classnames";
import LeftPrevIcon from "../ui/icons/LeftPrevIcon";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import RightNextIcon from "../ui/icons/RightNextIcon";

type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};

export default function CarouselControls({
  canScrollNext,
  canScrollPrev,
  onNext,
  onPrev,
}: Props) {
  return (
    <div className="flex justify-end gap-8 md:gap-9 lg:gap-10 ">
      <button
        onClick={() => {
          if (canScrollPrev) {
            onPrev();
          }
        }}
        disabled={!canScrollPrev}
      >
        <LeftPrevIcon />
      </button>
      <button
        onClick={() => {
          if (canScrollNext) {
            onNext();
          }
        }}
        disabled={!canScrollNext}
      >
        <RightNextIcon />
      </button>
    </div>
  );
}
