import React from "react";

type Props = {
  text: string;
};

export default function ParagraphSectionText({ text }: Props) {
  return (
    <p
      className="my-10 font-extrabold
       text-[28px] md:text-[34px] lg:text-[40px] text-[#E27073]"
    >
      {text}
    </p>
  );
}
