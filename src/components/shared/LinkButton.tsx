"use client";

import RightArrowIcon from "../ui/icons/RightArrowIcon";

type Props = {
  link: string;
  text: string;
  isRouting?: boolean;
};

export default function LinkButton({ link, text, isRouting = false }: Props) {
  const handleClickButton = () => {
    const formattedLink = link.includes("://") ? link : `https://${link}`;
    window.open(formattedLink, "_blank");
  };

  return (
    <button
      className="group flex items-center rounded-2xl py-3 md:py-5 px-7 md:px-10
        border-solid border-[#86BD08] border-4
        bg-[#86BD08] hover:bg-white shadow-xl shadow-[#86BD08]/50"
      onClick={isRouting ? () => {} : handleClickButton}
    >
      <p className="font-extrabold text-white group-hover:text-[#86BD08] text-[16px] md:text-[22px] ml-3 mr-4">
        {text}
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
