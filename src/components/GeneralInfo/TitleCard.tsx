import { ParagraphTitle } from "@/model/generalInfo";

type Props = {
  title: ParagraphTitle;
};

export default function TitleCard({ title }: Props) {
  const { text, subText } = title;

  return (
    <div
      className="flex flex-col py-8 md:py-14 px-10 md:px-16 rounded-[50px]
    border-solid border-2 border-lime-100 text-dark-brown "
    >
      <p className="font-bold text-2xl md:text-3xl  2xl:text-4xl">{text}</p>
      <p className="italic text-base md:text-lg 2xl:text-xl mt-4 mb-1">
        {subText}
      </p>
    </div>
  );
}
