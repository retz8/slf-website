import { urlFor } from "@/service/sanity";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
};

export default function ScheduleImage({ image }: Props) {
  return (
    <div className="flex p-0 md:p-6 lg:p-0">
      <Image
        className="object-cover'"
        src={image}
        width={800}
        height={800}
        alt="schedule thumbnail"
      />
    </div>
  );
}
