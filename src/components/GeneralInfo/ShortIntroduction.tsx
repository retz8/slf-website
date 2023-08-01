"use client";

"react";
import useSWR from "swr";
import DataLoadingSpinner from "../ui/DataLoadingSpinner";
import { IntroParagraph } from "@/model/generalInfo";
import { splitIntoParts } from "@/utils/textFormatters";
import Image from "next/image";
import ltFlyPic from "../../../public/images/lt-fly.png";

type Props = {
  intro: IntroParagraph[];
};

export default function ShortIntroduction({ intro }: Props) {
  const firstParagraph = intro?.[0].text;

  return (
    <div
      className="flex flex-col items-center lg:items-start
    lg:flex-row py-2 mb-5"
    >
      <div className="lg:max-w-2xl">
        {firstParagraph &&
          splitIntoParts(firstParagraph).map((part, index) => (
            <div key={index} className="mb-2 py-4">
              <p className="text-dark-brown text-xl">{part}</p>
            </div>
          ))}
      </div>

      <div className="lg:absolute lg:right-0 flex">
        <Image
          className="object-cover"
          src={ltFlyPic}
          width={600}
          height={600}
          priority
          alt="Lanternfly"
        />
      </div>
    </div>
  );
}
