import { urlFor } from "@/service/sanity";
import Image from "next/image";
("react");

type Props = {
  text: string;
  thumbnail?: string;
  thumbnailLocation?: string;
};

export default function ParagraphText({
  text,
  thumbnail,
  thumbnailLocation,
}: Props) {
  if (thumbnail === undefined) {
    return <p className="leading-loose text-lg my-6">{text}</p>;
  }

  return (
    <div className="">
      <div
        className={`${
          thumbnailLocation === "left" ? "float-left" : "float-right"
        } my-6 p-4`}
      >
        <Image
          src={urlFor(thumbnail)}
          width={350}
          height={350}
          alt="Paragraph Image"
        />
      </div>

      <p className="leading-loose text-lg my-6">{text}</p>
    </div>
  );
}
