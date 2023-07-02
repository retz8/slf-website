import React from "react";

type Props = {
  question: string;
  showAnswer: boolean;
};

export default function FaqQuestion({ question, showAnswer }: Props) {
  return (
    <div className="flex items-center">
      <p
        className={`${
          showAnswer ? "text-[#DA5149]" : "text-[#80AE3C]"
        } text-[20px] md:text-[30px] lg:text-[40px] font-extrabold pr-5`}
      >
        Q.{" "}
      </p>
      <p className="text-left text-[#69594E] text-[18px] md:text-[20px] lg:text-[28px] font-extrabold">
        {question}
      </p>
    </div>
  );
}
