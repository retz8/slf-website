"use client";

import { Schedule } from "@/model/schedule";
import React from "react";
import useSWR from "swr";
import DataLoadingSpinner from "../ui/DataLoadingSpinner";
import ScheduleListItem from "./ScheduleListItem";

export default function ScheduleList() {
  const { data, isLoading, error } = useSWR<Schedule[]>("/api/schedule");

  if (isLoading)
    return (
      <div className="flex items-center mb-20">
        <DataLoadingSpinner />
      </div>
    );

  return (
    <ul className="flex flex-col">
      {data?.map((item) => (
        <li key={item.id}>
          <ScheduleListItem schedule={item} />
        </li>
      ))}
    </ul>
  );
}
