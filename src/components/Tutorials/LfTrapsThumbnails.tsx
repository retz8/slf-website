import Image from "next/image";

type Props = {
  thumbnails: string[];
};

export default function LfTrapsThumbnails({ thumbnails }: Props) {
  return (
    <div className="flex flex-row gap-10">
      {thumbnails?.map((thumbnail, index) => (
        <div key={`LfTraps Thumbnail ${index}`} className="flex">
          <Image
            src={thumbnail}
            className="object-contain"
            width={800}
            height={800}
            alt={`LfTraps Thumbnail ${index}`}
          />
        </div>
      ))}
    </div>
  );
}
