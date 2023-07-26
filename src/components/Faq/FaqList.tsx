"use client";

import { Faq } from "@/model/faq";
import React from "react";
import useSWR from "swr";
import FaqListItem from "./FaqListItem";
import Divider from "../shared/Divider";
import DataLoadingSpinner from "../ui/DataLoadingSpinner";

type Props = {
  isSummary?: boolean;
};

export default function FaqList({ isSummary = false }: Props) {
  const { data, isLoading, error } = useSWR<Faq[]>(
    `/api/faq${isSummary ? "/some" : ""}`
  );

  if (isLoading)
    return (
      <div className="flex items-center mb-20">
        <DataLoadingSpinner />
      </div>
    );

  return (
    <ul className="flex flex-col py-3 mb-10">
      {data?.map((item) => (
        <li key={item.id}>
          <FaqListItem faq={item} />
          <Divider />
        </li>
      ))}
    </ul>
  );
}
