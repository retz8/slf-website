import React from "react";
import EggsRemovedNumber from "./EggsRemovedNumber";
import EggsRemovedList from "./EggsRemovedList";
import { outfit } from "@/utils/fonts/globalFont";

export default function HomeIntroText() {
  const largeTextStyle =
    "text-[80px] md:text-[96px] lg:text-[108px] xl:text-[120px]";

  return (
    <div className="z-10 flex gap-3 md:gap-8 lg:gap-9 ">
      <p
        className={` ${outfit.className} ${largeTextStyle} text-black`}
      >{`"`}</p>
      <div className="flex flex-col py-5 mt-5">
        <EggsRemovedNumber />
        <EggsRemovedList />
      </div>
      <p
        className={` ${outfit.className} pt-32 md:pt-36 ${largeTextStyle} text-black`}
      >{`"`}</p>
    </div>
  );
}
