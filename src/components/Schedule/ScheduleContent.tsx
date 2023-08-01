import { FullSchedule } from "@/model/schedule";
import ScheduleList from "./ScheduleList";
import ScheduleImage from "./ScheduleImage";
import Link from "next/link";
import LinkButton from "../shared/LinkButton";

type Props = {
  fullSchedule: FullSchedule;
  isSummary?: boolean;
};

export default function ScheduleContent({
  fullSchedule,
  isSummary = false,
}: Props) {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="flex flex-col items-center lg:items-start">
        {fullSchedule?.scheduleList !== undefined && (
          <ScheduleList data={fullSchedule?.scheduleList} />
        )}
        {isSummary && (
          <Link href="/schedule" className="hidden lg:block mt-20">
            <LinkButton link="" text="View More" isRouting={true} />
          </Link>
        )}
      </div>
      <div className=" p-0 md:p-6 lg:p-0">
        {fullSchedule?.thumbnail !== undefined && (
          <ScheduleImage image={fullSchedule?.thumbnail} />
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
