"react";
import ParagraphText from "../shared/ParagraphText";

type Props = {
  paragraphs: string[];
};

export default function LfTrapsBodyParagraphs({ paragraphs }: Props) {
  return (
    <div className="flex flex-col">
      {paragraphs.map((item, index) => (
        <ParagraphText key={`lfTraps Body ${index}`} text={item} />
      ))}
    </div>
  );
}
