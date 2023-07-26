import Image from "next/image";
import React from "react";

type Props = {
  image: string;
};

export default function ScheduleImage({ image }: Props) {
  return (
    <div className="flex">
      <Image
        className="object-cover'"
        src={image}
        width={650}
        height={650}
        alt="schedule thumbnail"
      />
    </div>
  );
}
