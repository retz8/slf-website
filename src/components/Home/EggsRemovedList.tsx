"use client";

import { EggsRemovedByYearPair } from "@/model/home";
import React from "react";
import useSWR from "swr";
import EggsRemovedListItem from "./EggsRemovedListItem";

export default function EggsRemovedList() {
  const { data, isLoading, error } =
    useSWR<EggsRemovedByYearPair[]>("/api/home/egg-nums");

  if (isLoading) return <></>;

  return (
    <div className="flex flex-col py-8">
      {data?.map((item, index) => (
        <div key={index} className="flex mt-2">
          <EggsRemovedListItem dataPair={item} index={index} />
        </div>
      ))}
      <div className="relative flex ml-16">
        <p
          className="absolute left-0 top-[-10px] 
        text-[25px] md:text-[28px] lg:text-[32px] xl:text-[36px]"
        >
          ...
        </p>
      </div>
    </div>
  );
}