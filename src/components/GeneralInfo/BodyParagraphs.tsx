import { BodyParagraph } from "@/model/generalInfo";
import React from "react";
import BodyParagraphItem from "./BodyParagraphItem";

type Props = {
  body: BodyParagraph[];
};

export default function BodyParagraphs({ body }: Props) {
  return (
    <div className="flex flex-col">
      {body.map((paragraph, index) => (
        <BodyParagraphItem
          key={paragraph._key}
          paragraph={paragraph}
          index={index}
        />
      ))}
    </div>
  );
}
