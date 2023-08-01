//ISR (revalidate: 2 weeks)

import ScheduleContent from "@/components/Schedule/ScheduleContent";
import PageTitle from "@/components/shared/PageTitle";
import { getSchedules } from "@/service/schedule";
import { twoWeeks } from "@/utils/revalidateConstants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule",
  description: "Monthly schedule of Princeton SLF Campaign",
};

export const revalidate = twoWeeks;

export default async function SchedulePage() {
  const data = await getSchedules();

  return (
    <section className="flex flex-col">
      <PageTitle text="SCHEDULE" />
      <div className="h-full flex justify-center py-4 md:py-10">
        <ScheduleContent fullSchedule={data} />
      </div>
    </section>
  );
}
