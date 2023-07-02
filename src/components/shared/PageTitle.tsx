import React from "react";

type Props = {
  text: string;
};

export default function PageTitle({ text }: Props) {
  return (
    <p className="pl-10 md:py-5 text-[#80AE3C] text-[28px] md:text-[45px] lg:text-[56px] font-extrabold">
      {text}
    </p>
  );
}
