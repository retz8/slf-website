"use client";

import { Faq } from "@/model/faq";
import React, { useState } from "react";
import AnswerViewButton from "./AnswerViewButton";
import { formKeywords } from "@/utils/hyperlinks/faqForms";
import FaqQuestion from "./FaqQuestion";

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
        className="text-left break-words hyphens-auto max-w-[60%] lg:max-w-[90%] mx-[41px] md:mx-[60px] text-[#69594E] text-opacity-75 text-[18px] md:text-[20px] lg:text-[28px] font-extrabold"
        dangerouslySetInnerHTML={{ __html: modifiedAnswer }}
      ></p>
    );
  };

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  const accordionContentStyles = showAnswer
    ? "py-6 max-h-[500px] transition-max-height duration-300 ease"
    : "max-h-0 overflow-hidden transition-max-height duration-300 ease";

  return (
    <div className="flex flex-col">
      <button onClick={handleClick}>
        <div className="cursor-pointer flex items-center justify-between py-5 space-x-10">
          <FaqQuestion question={question} showAnswer={showAnswer} />
          <div>
            <AnswerViewButton showAnswer={showAnswer} />
          </div>
        </div>

        <div className={`bg-[#E4C75E] bg-opacity-10 ${accordionContentStyles}`}>
          <div className="break-words">{renderAnswerWithLinks()}</div>
        </div>
      </button>
    </div>
  );
}
