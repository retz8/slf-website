import React from "react";
import { GoPlus } from "react-icons/go";
import { BiMinus } from "react-icons/bi";

type Props = {
  onClick: () => void;
  showAnswer: boolean;
};

export default function AnswerViewButton({ onClick, showAnswer }: Props) {
  return (
    <button
      className={`flex items-center justify-center w-[40px] h-[40px] rounded-full ml-2 ${
        showAnswer ? "bg-[#E27073]" : "bg-[#80AE3C] bg-opacity-75"
      } `}
      onClick={onClick}
    >
      {showAnswer ? (
        <BiMinus className="w-[25px] h-[25px] fill-white" />
      ) : (
        <GoPlus className="w-[25px] h-[25px] fill-white" />
      )}
    </button>
  );
}
