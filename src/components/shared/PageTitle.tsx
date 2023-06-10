import React from "react";

type Props = {
  text: string;
};

export default function PageTitle({ text }: Props) {
  return (
    <p className="pl-10 py-5 text-[#80AE3C] text-[45px] lg:text-[56px] font-extrabold">
      {text}
    </p>
  );
}
