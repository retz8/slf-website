import React from "react";
import HomeIntroText from "./HomeIntroText";
import HomeIntroImage from "./HomeIntroImage";

export default function HomeIntro() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <HomeIntroText />
      <div className="flex px-16 lg:p-0 z-10">
        <HomeIntroImage />
      </div>
    </div>
  );
}
