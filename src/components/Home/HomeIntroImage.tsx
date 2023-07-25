"use client";

import React from "react";
import useSWR from "swr";
import Image from "next/image";

export default function HomeIntroImage() {
  const { data: image, isLoading, error } = useSWR("/api/home/egg-img");

  if (isLoading) return <></>;

  return (
    <div className="flex">
      <Image
        className="object-cover"
        src={image}
        width={800}
        height={800}
        alt="main egg image"
      />
    </div>
  );
}
