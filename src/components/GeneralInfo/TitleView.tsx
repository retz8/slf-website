import { ParagraphTitle } from "@/model/generalInfo";
import Image from "next/image";
import React from "react";
import TitleCard from "./TitleCard";

type Props = {
  thumbnail: string;
  title: ParagraphTitle;
};

export default function TitleView({ thumbnail, title }: Props) {
  return (
    <section className="flex flex-col left-0 max-w-full pt-5 md:pt-0">
      <div className="flex absolute left-0 z-10 mx-[0%] xl:mx-[5%] 2xl:mx-[13%]">
        <Image
          className="object-cover"
          src={thumbnail}
          width={800}
          height={800}
          alt="introduction thumbnail"
        />
      </div>

      <div
        className="flex absolute z-20 backdrop-blur-md right-0 max-w-[36%] 
        mx-[0%] xl:mx-[4%] 2xl:mx-[12%]
        mt-[5%] xl:mt-[11%] 
        overflow-hidden rounded-[50px] shadow-xl"
      >
        <TitleCard title={title} />
      </div>
    </section>
  );
}
