import React from "react";
import PageTitle from "../shared/PageTitle";
import ScheduleContent from "./ScheduleContent";

export default function ScheduleSummary() {
  return (
    <div className="flex flex-col mb-24 pb-10">
      <PageTitle text="Schedule" isSummary={true} />
      <div className="flex justify-center mt-5 px-5">
        <ScheduleContent isSummary={true} />
      </div>
    </div>
  );
}
