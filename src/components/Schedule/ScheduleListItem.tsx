import { Schedule } from "@/model/schedule";
import React from "react";

type Props = {
  schedule: Schedule;
};

export default function ScheduleListItem({ schedule }: Props) {
  const { start, end, text } = schedule;

  return (
    <div>
      <p>{start}</p>
      <p>{end}</p>
      <p>{text}</p>
    </div>
  );
}
