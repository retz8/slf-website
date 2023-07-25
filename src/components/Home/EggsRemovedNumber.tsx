"use client";

import { formatNumberWithCommas } from "@/utils/numberFormatter";
import React from "react";
import useSWR from "swr";
import { outfit } from "@/utils/fonts/globalFont";
import DataLoadingSpinner from "../ui/DataLoadingSpinner";

export default function EggsRemovedNumber() {
  const { data: num, isLoading, error } = useSWR("/api/home/egg-num");
  // data loading 에 대한 고찰이 더필요

  return (
    <div className="flex flex-col">
      <p
        className={` ${outfit.className} 
     text-[80px] md:text-[96px] lg:text-[108px] xl:text-vrlg 
    font-bold text-[#86BD08]`}
      >
        {isLoading ? "Princeton SLF" : formatNumberWithCommas(num)}
      </p>
      {!isLoading && (
        <p
          className={`text-[#453938] ${outfit.className} 
            text-[36px] md:text-[42px] lg:text-[50px] xl:text-[54px] 
            font-extrabold`}
        >{`Eggs Removed`}</p>
      )}
    </div>
  );
}
