import ScheduleList from "@/components/Schedule/ScheduleList";
import PageTitle from "@/components/shared/PageTitle";
import React from "react";

export default function SchedulePage() {
  return (
    <section className="flex flex-col px-10 xl:px-5 h-full">
      <PageTitle text="SCHEDULE" />
      <div className="h-full flex justify-center">
        <ScheduleList />
      </div>
    </section>
  );
}
