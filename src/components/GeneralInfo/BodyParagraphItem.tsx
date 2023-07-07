import { BodyParagraph } from "@/model/generalInfo";
import React from "react";
import ParagraphText from "./ParagraphText";
import ParagraphSectionText from "./ParagraphSectionText";

type Props = {
  paragraph: BodyParagraph;
  index: number; // need to be removed
  // index added because thumbnailLoaction doesn't work
};

export default function BodyParagraphItem({ paragraph, index }: Props) {
  return (
    <div className="flex flex-col">
      {paragraph.sectionTitle !== undefined && (
        <ParagraphSectionText text={paragraph.sectionTitle} />
      )}

      {paragraph.thumbnail === undefined &&
      paragraph.thumbnailLocation === undefined ? (
        <ParagraphText text={paragraph.text} />
      ) : (
        <ParagraphText
          text={paragraph.text}
          thumbnail={paragraph.thumbnail}
          thumbnailLocation={index === 2 || index === 5 ? "right" : "left"}
        />
      )}
    </div>
  );
}
