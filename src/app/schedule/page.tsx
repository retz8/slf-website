//ISR (revalidate: 2 weeks)

import ScheduleContent from "@/components/Schedule/ScheduleContent";
import PageTitle from "@/components/shared/PageTitle";
import { twoWeeks } from "@/utils/revalidateConstants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule",
  description: "Monthly schedule of Princeton SLF Campaign",
};

export default async function SchedulePage() {
  const res = await fetch(`${process.env.DEV_WEBSITE_URL}/api/schedule`, {
    next: { revalidate: twoWeeks },
  });

  // handle error
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return (
    <section className="flex flex-col">
      <PageTitle text="SCHEDULE" />
      <div className="h-full flex justify-center py-4 md:py-10">
        <ScheduleContent fullSchedule={data} />
      </div>
    </section>
  );
}
