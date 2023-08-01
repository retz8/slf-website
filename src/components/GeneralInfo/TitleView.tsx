import { ParagraphTitle } from "@/model/generalInfo";
import Image from "next/image";
import TitleCard from "./TitleCard";
import { urlFor } from "@/service/sanity";

type Props = {
  thumbnail: string;
  title: ParagraphTitle;
};

export default function TitleView({ thumbnail, title }: Props) {
  return (
    <section className="flex flex-col w-screen pt-5 md:pt-0 ">
      <div className="flex absolute left-0 z-10">
        <Image
          className="object-cover"
          src={thumbnail}
          width={800}
          height={800}
          alt="introduction thumbnail"
        />
      </div>

      <div
        className="flex absolute right-0 z-20 backdrop-blur-md max-w-[500px] xl:max-w-[685px] 
        mt-[255px] 
        overflow-hidden rounded-[50px] shadow-xl"
      >
        <TitleCard title={title} />
      </div>
    </section>
  );
}
