import { IntroParagraph } from "@/model/generalInfo";
import { urlFor } from "@/service/sanity";
import Image from "next/image";
("react");
import ParagraphText from "../shared/ParagraphText";

type Props = {
  introduction: IntroParagraph[];
};

export default function Introduction({ introduction }: Props) {
  return (
    <div className="flex flex-col">
      {introduction.map(({ _key, text }) => (
        <div key={_key}>
          <ParagraphText text={text} />
        </div>
      ))}
    </div>
  );
}
