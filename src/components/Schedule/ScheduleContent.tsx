"use client";

import { Schedule } from "@/model/schedule";
import React from "react";
import useSWR from "swr";
import DataLoadingSpinner from "../ui/DataLoadingSpinner";
import ScheduleList from "./ScheduleList";
import ScheduleImage from "./ScheduleImage";
import { urlFor } from "@/service/sanity";

export default function ScheduleContent() {
  const { data, isLoading, error } = useSWR<Schedule>("/api/schedule");

  if (isLoading)
    return (
      <div className="flex items-center mb-20">
        <DataLoadingSpinner />
      </div>
    );

  return (
    <div className="flex flex-col lg:flex-row gap-9">
      <div className="flex justify-center lg:justify-start">
        {data?.scheduleList !== undefined && (
          <ScheduleList data={data?.scheduleList} />
        )}
      </div>

      {data?.thumbnail !== undefined && (
        <ScheduleImage image={data?.thumbnail} />
      )}
    </div>
  );
}
