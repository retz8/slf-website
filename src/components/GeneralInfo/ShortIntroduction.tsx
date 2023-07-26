"use client";

import React from "react";
import useSWR from "swr";
import DataLoadingSpinner from "../ui/DataLoadingSpinner";
import { IntroParagraph } from "@/model/generalInfo";
import { splitIntoParts } from "@/utils/textFormatters";
import Image from "next/image";
import ltFlyPic from "../../../public/images/lt-fly.png";

export default function ShortIntroduction() {
  const {
    data: intro,
    isLoading,
    error,
  } = useSWR<IntroParagraph[]>("/api/generalInfo/intro");

  if (isLoading) return <DataLoadingSpinner />;

  const firstParagraph = intro?.[0].text;

  return (
    <div className="flex flex-col md:flex-row py-2 mb-5">
      <div className="max-w-lg lg:max-w-xl xl:max-w-2xl">
        {firstParagraph &&
          splitIntoParts(firstParagraph).map((part, index) => (
            <div key={index} className="mb-2 py-4">
              <p className="text-[#453938] text-xl">{part}</p>
            </div>
          ))}
      </div>

      <div className="lg:absolute lg:right-28 xl:right-48 2xl:right-96 flex">
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
