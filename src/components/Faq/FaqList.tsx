"use client";

import { Faq } from "@/model/faq";
import React from "react";
import useSWR from "swr";
import FaqListItem from "./FaqListItem";
import Divider from "../shared/Divider";
import DataLoadingSpinner from "../ui/DataLoadingSpinner";

export default function FaqList() {
  const { data, isLoading, error } = useSWR<Faq[]>("/api/faq");

  if (isLoading)
    return (
      <div className="mb-10">
        <DataLoadingSpinner />
      </div>
    );

  return (
    <div className="flex flex-col py-3 mb-10">
      {data?.map((item, index) => (
        <div key={item.id}>
          <FaqListItem faq={item} />
          <Divider />
        </div>
      ))}
    </div>
  );
}
