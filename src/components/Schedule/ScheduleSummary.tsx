"use client";

import useSWR from "swr";
import PageTitle from "../shared/PageTitle";
import ScheduleContent from "./ScheduleContent";
import { FullSchedule } from "@/model/schedule";

export default function ScheduleSummary() {
  const { data, isLoading, error } = useSWR<FullSchedule>("/api/faq");

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col mb-24 pb-10">
      <PageTitle text="Schedule" isSummary={true} />
      <div className="flex justify-center mt-5 px-5">
        {data !== undefined && (
          <ScheduleContent fullSchedule={data} isSummary={true} />
        )}
      </div>
    </div>
  );
}
