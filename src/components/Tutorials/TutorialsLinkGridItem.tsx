import LinkButton from "../shared/LinkButton";
import Link from "next/link";
import TutorialMainImage from "./TutorialMainImage";

type Props = {
  title: string;
  href: string;
  imagePath: string;
};

export default function TutorialsLinkGridItem({
  title,
  href,
  imagePath,
}: Props) {
  return (
    <div
      className="flex flex-col max-w-md md:max-w-none rounded-3xl py-6 md:py-10 px-10 md:px-16 
    gap-7 md:gap-10 shadow-md shadow-[#86BD08]/70"
    >
      <p
        className="font-extrabold text-[#E27073]
       text-2xl md:text-3xl lg:text-4xl"
      >
        {title}
      </p>
      <div className="flex flex-col items-center gap-7 md:gap-10">
        <TutorialMainImage imagePath={imagePath} />
        <Link href={href}>
          <LinkButton text="View More" link="" isRouting={true} />
        </Link>
      </div>
    </div>
  );
}
