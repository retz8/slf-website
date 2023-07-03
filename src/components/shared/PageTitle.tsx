import React from "react";

type Props = {
  text: string;
};

export default function PageTitle({ text }: Props) {
  return (
    <p className="w-full pl-6 md:pl-8 lg:pl-[50px] text-left md:py-5 text-[#80AE3C] text-[28px] md:text-[40px] lg:text-[56px] font-extrabold">
      {text}
    </p>
  );
}
