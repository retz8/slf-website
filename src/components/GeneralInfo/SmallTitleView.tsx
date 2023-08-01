import { ParagraphTitle } from "@/model/generalInfo";
import Image from "next/image";
import TitleCard from "./TitleCard";
import { urlFor } from "@/service/sanity";

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
          src={urlFor(thumbnail)}
          width={800}
          height={800}
          alt="introduction thumbnail"
        />
      </div>

      <div className="flex mt-10 overflow-hidden rounded-[50px] shadow-xl">
        <TitleCard title={title} />
      </div>
    </section>
  );
}
