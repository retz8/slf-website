"use client";

import useSWR from "swr";
import HomeIntroText from "./HomeIntroText";
import HomeIntroImage from "./HomeIntroImage";
import { useEffect, useState } from "react";
import { getEggsRemovedNumber } from "@/service/home";

export default function HomeIntro() {
  const { data, isLoading, error } = useSWR("/api/home");
  // const [isLoading, setLoading] = useState(true);

  // const [num, setNum] = useState(null);

  // useEffect(() => {
  //   fetch("/api/home/egg-num")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setNum(data);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <HomeIntroText data={data} isLoading={isLoading} />
      <div className="flex px-16 lg:p-0 z-10">
        <HomeIntroImage />
      </div>
    </div>
  );
}
