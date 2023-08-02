"use client";

import useSWR from "swr";
import HomeIntroText from "./HomeIntroText";
import HomeIntroImage from "./HomeIntroImage";

export default function HomeIntro({ param }: { param: string }) {
  const { data, isLoading, error } = useSWR(`/api/home/${param}`);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <HomeIntroText data={data} isLoading={isLoading} />
      <div className="flex px-16 lg:p-0 z-10">
        <HomeIntroImage param="egg-img" />
      </div>
    </div>
  );
}
