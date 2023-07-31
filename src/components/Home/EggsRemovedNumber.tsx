"use client";

import { formatNumberWithCommas } from "@/utils/numberFormatter";
("react");
import useSWR from "swr";
import { outfit } from "@/utils/fonts/globalFont";
import DataLoadingSpinner from "../ui/DataLoadingSpinner";

export default function EggsRemovedNumber() {
  const { data: num, isLoading, error } = useSWR("/api/home/egg-num");
  // data loading 에 대한 고찰이 더필요

  return (
    <div className="flex flex-col">
      {isLoading ? (
        <div className="flex">
          <p
            className={` hidden sm:block ${outfit.className} 
     text-[80px] md:text-[96px] lg:text-[108px] xl:text-[120px] 
    font-bold text-[#86BD08]`}
          >
            Princeton SLF
          </p>
          <p
            className={` block sm:hidden ${outfit.className} 
     text-[80px] md:text-[96px] lg:text-[108px] xl:text-[120px] 
    font-bold text-[#86BD08]`}
          >
            SLF
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
