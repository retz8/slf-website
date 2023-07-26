"use client";

import { Schedule } from "@/model/schedule";
import React from "react";
import useSWR from "swr";
import DataLoadingSpinner from "../ui/DataLoadingSpinner";
import ScheduleList from "./ScheduleList";
import ScheduleImage from "./ScheduleImage";
import Link from "next/link";
import LinkButton from "../shared/LinkButton";

type Props = {
  isSummary?: boolean;
};

export default function ScheduleContent({ isSummary = false }: Props) {
  const { data, isLoading, error } = useSWR<Schedule>("/api/schedule");

  if (isLoading)
    return (
      <div className="flex items-center mb-20">
        <DataLoadingSpinner />
      </div>
    );

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="flex flex-col items-center lg:items-start">
        {data?.scheduleList !== undefined && (
          <ScheduleList data={data?.scheduleList} />
        )}
        {isSummary && (
          <Link href="/schedule" className="hidden lg:block mt-20">
            <LinkButton link="" text="View More" isRouting={true} />
          </Link>
        )}
      </div>
      <div className=" p-0 md:p-6 lg:p-0">
        {data?.thumbnail !== undefined && (
          <ScheduleImage image={data?.thumbnail} />
        )}
      </div>

      {isSummary && (
        <Link href="/schedule" className="block lg:hidden mt-5">
          <LinkButton link="" text="View More" isRouting={true} />
        </Link>
      )}
    </div>
  );
}
