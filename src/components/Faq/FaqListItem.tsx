"use client";

import { Faq } from "@/model/faq";
import React, { useState } from "react";
import AnswerViewButton from "./AnswerViewButton";
import { formKeywords } from "@/utils/hyperlinks/faqForms";

type Props = {
  faq: Faq;
};

export default function FaqListItem({ faq }: Props) {
  const [showAnswer, setShowAnswer] = useState(false);

  const { question, answer } = faq;

  // embed form in the answer if it contains a keyword
  const renderAnswerWithLinks = () => {
    let modifiedAnswer = answer;

    const keyword = formKeywords.find((keyword) =>
      answer.toLowerCase().includes(keyword.toLowerCase())
    );

    if (keyword) {
      const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`\\b${escapedKeyword}\\b`, "gi");
      modifiedAnswer = modifiedAnswer.replace(
        regex,
        (match) =>
          `<a href="${faq.form}" target="_blank" rel="noopener noreferrer" class="underline" >${match}</a>`
      );
    }

    return (
      <p
        className="break-words hyphens-auto max-w-[60%] lg:max-w-[90%] mx-[52px] lg:mx-[60px] text-[#69594E] text-opacity-75 text-[20px] lg:text-[25px] font-extrabold"
        dangerouslySetInnerHTML={{ __html: modifiedAnswer }}
      ></p>
    );
  };

  const handleClick = () => {
    console.log(showAnswer);
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="flex flex-col mx-10">
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center ">
          <p
            className={`${
              showAnswer ? "text-[#DA5149]" : "text-[#80AE3C]"
            } text-[30px] lg:text-[40px] font-extrabold pr-5`}
          >
            Q.{" "}
          </p>
          <p className="text-[#69594E] text-[20px] lg:text-[28px] font-extrabold">
            {question}
          </p>
        </div>

        <div>
          <AnswerViewButton onClick={handleClick} showAnswer={showAnswer} />
        </div>
      </div>

      {showAnswer && (
        <div className="flex items-center py-5 bg-[#E4C75E] bg-opacity-10 ">
          <div className="break-words">{renderAnswerWithLinks()}</div>
        </div>
      )}
    </div>
  );
}
