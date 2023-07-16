import { urlFor } from "@/service/sanity";
import Image from "next/image";
import React from "react";

type Props = {
  thumbnails: string[];
};

export default function LfTrapsThumbnails({ thumbnails }: Props) {
  return (
    <div className="flex flex-row gap-10">
      {thumbnails.map((thumbnail, index) => (
        <div key={`LfTraps Thumbnail ${index}`} className="flex">
          <Image
            src={urlFor(thumbnail)}
            className="object-contain"
            width={800}
            height={800}
            alt={`LfTraps Thumbnail ${index}`}
          />
        </div>
      ))}
    </div>
  );
}
