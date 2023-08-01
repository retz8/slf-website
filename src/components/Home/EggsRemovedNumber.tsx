"use client";

import { formatNumberWithCommas } from "@/utils/numberFormatter";
import useSWR from "swr";
import { outfit } from "@/utils/fonts/globalFont";

export default function EggsRemovedNumber() {
  const { data: num, isLoading, error } = useSWR("/api/home/egg-num");

  return (
    <div className="flex flex-col">
      {isLoading ? (
        <div className="flex">
          <p
            className={` hidden sm:block ${outfit.className} 
     text-[80px] md:text-[96px] lg:text-[108px] xl:text-[120px] 
    font-bold text-[#86BD08]`}
          >
            Princeton SLFI
          </p>
          <p
            className={` block sm:hidden ${outfit.className} 
     text-[80px] md:text-[96px] lg:text-[108px] xl:text-[120px] 
    font-bold text-[#86BD08]`}
          >
            PSLFI
            {/* maybe put logo instead */}
          </p>
        </div>
      ) : (
        <p
          className={` ${outfit.className} 
     text-[80px] md:text-[96px] lg:text-[108px] xl:text-[120px] 
    font-bold text-[#86BD08]`}
        >
          {formatNumberWithCommas(num)}
        </p>
      )}
      {!isLoading && (
        <p
          className={`text-dark-brown ${outfit.className} 
            text-[36px] md:text-[42px] lg:text-[50px] xl:text-[54px] 
            font-extrabold`}
        >{`Eggs Removed`}</p>
      )}
    </div>
  );
}
