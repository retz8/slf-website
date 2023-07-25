"use client";

import React from "react";
import RightArrowIcon from "../ui/icons/RightArrowIcon";

export default function OriginalArticleButton() {
  const navigateToOriginalArticle = () => {
    window.open(
      "https://princetonperspectives.com/theyre-quieter-and-prettier-than-cicadas-but-spotted-lanternflies-are-a-nuisance/",
      "_blank"
    );
  };

  return (
    <button
      className="group flex items-center rounded-2xl py-3 md:py-6 px-7 md:px-10
        border-solid border-[#86BD08] border-4
        bg-[#86BD08] hover:bg-white shadow-xl shadow-[#86BD08]/50"
      onClick={navigateToOriginalArticle}
    >
      <p className="font-extrabold text-white group-hover:text-[#86BD08] text-[16px] md:text-[22px] ml-3 mr-4">
        To view the original article
      </p>
      <div
        className="flex p-3 mx-2 rounded-full
         bg-white group-hover:bg-[#86BD08]"
      >
        <RightArrowIcon />
      </div>
    </button>
  );
}
