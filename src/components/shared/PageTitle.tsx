import React from "react";

type Props = {
  text: string;
  isSummary?: boolean;
};

export default function PageTitle({ text, isSummary = false }: Props) {
  const defaultStyle = "pl-6 md:pl-8 lg:pl-[50px]";
  const summaryStlye = "";

  return (
    <p
      className={`w-full ${
        isSummary ? summaryStlye : defaultStyle
      } text-left md:py-5 text-[#80AE3C] text-[28px] md:text-[40px] lg:text-[56px] font-extrabold`}
    >
      {text}
    </p>
  );
}
