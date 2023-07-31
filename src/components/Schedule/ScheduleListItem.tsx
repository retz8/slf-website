import { ScheduleItem } from "@/model/schedule";
import { addHyphenBetweenStrings } from "@/utils/textFormatters";
("react");

type Props = {
  schedule: ScheduleItem;
};

export default function ScheduleListItem({ schedule }: Props) {
  const { start, end, text } = schedule;
  const dateString = addHyphenBetweenStrings(start, end);

  const baseStyle = "text-lg md:text-xl text-dark-brown";

  return (
    <div className="flex flex-col ">
      <p className={`${baseStyle}`}>{dateString}</p>
      <p className={`${baseStyle} mt-2`}>{text}</p>
    </div>
  );
}
