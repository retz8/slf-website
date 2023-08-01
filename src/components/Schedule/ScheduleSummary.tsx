import PageTitle from "../shared/PageTitle";
import ScheduleContent from "./ScheduleContent";
import { FullSchedule } from "@/model/schedule";

type Props = {
  schedules: FullSchedule;
};

export default function ScheduleSummary({ schedules }: Props) {
  return (
    <div className="flex flex-col mb-24 pb-10">
      <PageTitle text="Schedule" isSummary={true} />
      <div className="flex justify-center mt-5 px-5">
        {schedules !== undefined && (
          <ScheduleContent fullSchedule={schedules} isSummary={true} />
        )}
      </div>
    </div>
  );
}
