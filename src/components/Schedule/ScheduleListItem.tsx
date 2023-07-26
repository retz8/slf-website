import { ScheduleItem } from "@/model/schedule";
import { addHyphenBetweenStrings } from "@/utils/textFormatters";
import React from "react";

type Props = {
  schedule: ScheduleItem;
};

export default function ScheduleListItem({ schedule }: Props) {
  const { start, end, text } = schedule;
  const dateString = addHyphenBetweenStrings(start, end);

  return (
    <div className="flex flex-col ">
      <p className="text-lg md:text-xl text-[#453938]">{dateString}</p>
      <p className="text-lg md:text-xl text-[#453938] mt-2">{text}</p>
    </div>
  );
}
