import React from "react";
import TutorialsLinkGridItem from "./TutorialsLinkGridItem";

const tutorials = [
  {
    title: "EGG REMOVAL",
    href: "/tutorials/egg-removal",
    imagePath: "/images/egg-removal.png",
  },
  {
    title: "TRAPS",
    href: "/tutorials/lf-traps",
    imagePath: "/images/trap.png",
  },
];

export default function TutorialsLinkGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
      {tutorials.map(({ title, href, imagePath }) => (
        <div key={href}>
          <TutorialsLinkGridItem
            title={title}
            href={href}
            imagePath={imagePath}
          />
        </div>
      ))}
    </div>
  );
}
