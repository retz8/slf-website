"use client";

"react";
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

  if (isLoading)
    return (
      <div className="flex pt-3 md:pt-0 pb-5">
        <p className="text-dark-brown text-xl">
          As our town grows and changes, we want to make sure our community
          stays healthy and that we look after our blossoming plants and
          gardens. However, an insect called the spotted lanternfly is causing
          our plants to be in peril!
        </p>
      </div>
    );

  const firstParagraph = intro?.[0].text;

  return (
    <div className="flex flex-col md:flex-row py-2 mb-5">
      <div className="max-w-lg lg:max-w-xl xl:max-w-2xl">
        {firstParagraph &&
          splitIntoParts(firstParagraph).map((part, index) => (
            <div key={index} className="mb-2 py-4">
              <p className="text-dark-brown text-xl">{part}</p>
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
