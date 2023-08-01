import Image from "next/image";

type Props = {
  image: string;
};

export default function CarouselItem({ image }: Props) {
  return (
    <div className="flex items-center justify-center z-10">
      <Image
        className="object-cover rounded-2xl aspect-square"
        src={image}
        width={800}
        height={800}
        alt="member image"
      />
    </div>
  );
}
