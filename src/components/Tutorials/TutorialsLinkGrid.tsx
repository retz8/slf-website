import { TutorialsImages } from "@/model/home";
import TutorialsLinkGridItem from "./TutorialsLinkGridItem";

type Props = {
  images: TutorialsImages;
};

const tutorials = [
  {
    title: "EGG REMOVAL",
    href: "/tutorials/egg-removal",
  },
  {
    title: "TRAPS",
    href: "/tutorials/lf-traps",
  },
];

export default function TutorialsLinkGrid({ images }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
      {tutorials.map(({ title, href }) => (
        <div key={href}>
          <TutorialsLinkGridItem
            title={title}
            href={href}
            imagePath={
              title === "EGG REMOVAL"
                ? images.eggRemovalImage
                : images.trapImage
            }
          />
        </div>
      ))}
    </div>
  );
}
