import React from "react";
import ScheduleListItem from "./ScheduleListItem";
import { ScheduleItem } from "@/model/schedule";

type Props = {
  data: ScheduleItem[];
};

export default function ScheduleList({ data }: Props) {
  return (
    <ul className="flex flex-col items-start gap-8 min-w-[40%]">
      {data?.map((item, index) => (
        <li key={index}>
          <ScheduleListItem schedule={item} />
        </li>
      ))}
    </ul>
  );
}
