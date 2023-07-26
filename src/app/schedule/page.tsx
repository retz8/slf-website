import ScheduleContent from "@/components/Schedule/ScheduleContent";
import PageTitle from "@/components/shared/PageTitle";
import React from "react";

export default function SchedulePage() {
  return (
    <section className="flex flex-col px-10 xl:px-5 h-full pb-10 mb-10">
      <PageTitle text="SCHEDULE" />
      <div className="h-full flex justify-center py-4 md:py-10">
        <ScheduleContent />
      </div>
    </section>
  );
}
