import React from "react";
import FaqMinusIcon from "../ui/icons/FaqMinusIcon";
import FaqPlusIcon from "../ui/icons/FaqPlusIcon";

type Props = {
  showAnswer: boolean;
};

export default function AnswerViewButton({ showAnswer }: Props) {
  return (
    <div
      className={`flex items-center justify-center w-[30px] md:w-[40px] h-[30px] md:h-[40px] rounded-full ml-2 ${
        showAnswer ? "bg-[#E27073]" : "bg-[#80AE3C] bg-opacity-75"
      } `}
    >
      {showAnswer ? <FaqMinusIcon /> : <FaqPlusIcon />}
    </div>
  );
}
