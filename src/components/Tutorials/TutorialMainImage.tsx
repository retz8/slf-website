"react";
import Image from "next/image";

type Props = {
  imagePath: string;
};

export default function TutorialMainImage({ imagePath }: Props) {
  return (
    <div className="flex rounded-3xl px-5 md:px-8">
      <Image
        className="object-cover"
        src={imagePath}
        width={800}
        height={800}
        alt={imagePath}
      />
    </div>
  );
}
