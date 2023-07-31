"use client";

"react";
import useSWR from "swr";
import Image from "next/image";

export default function HomeIntroImage() {
  const { data: image, isLoading, error } = useSWR("/api/home/egg-img");

  if (isLoading) return <></>;

  return (
    <div className="flex -translate-y-12 xs:-translate-y-28 sm:-translate-y-36 lg:translate-y-0">
      <Image
        className="object-cover"
        src={image}
        width={800}
        height={800}
        priority
        alt="main egg image"
      />
    </div>
  );
}
