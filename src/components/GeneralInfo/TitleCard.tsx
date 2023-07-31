import { ParagraphTitle } from "@/model/generalInfo";
("react");

type Props = {
  title: ParagraphTitle;
};

export default function TitleCard({ title }: Props) {
  const { text, subText } = title;

  return (
    <div
      className="flex flex-col p-10 rounded-[50px]
    border-solid border-2 border-lime-100 text-dark-brown "
    >
      <p className="font-bold text-[20px] md:text-[25px] xl:text-[30px] 2xl:text-[35px]">
        {text}
      </p>
      <p className="italic text-[10px] md:text-[13px] xl:text-[16px] 2xl:text-[19px]">
        {subText}
      </p>
    </div>
  );
}
