"use client";

import useSWR from "swr";
import Image from "next/image";

export default function HomeIntroImage({ param }: { param: string }) {
  const {
    data: image,
    isLoading,
    error,
  } = useSWR<string>(`/api/home/${param}`);

  if (isLoading) return <></>;

  return (
    <div className="flex -translate-y-12 xs:-translate-y-28 sm:-translate-y-36 lg:translate-y-0">
      {image !== undefined && (
        <Image
          className="object-cover"
          src={image}
          width={800}
          height={800}
          priority
          alt="main egg image"
        />
      )}
    </div>
  );
}
