import { ParagraphTitle } from "@/model/generalInfo";
import Image from "next/image";
("react");
import TitleCard from "./TitleCard";

type Props = {
  thumbnail: string;
  title: ParagraphTitle;
};

export default function SmallTitleView({ thumbnail, title }: Props) {
  return (
    <section className="flex flex-col left-0 max-w-full pt-5 md:pt-0">
      <div className="flex justify-center">
        <Image
          className="object-cover"
          src={thumbnail}
          width={800}
          height={800}
          alt="introduction thumbnail"
        />
      </div>

      <div className="flex mt-10">
        <TitleCard title={title} />
      </div>
    </section>
  );
}
