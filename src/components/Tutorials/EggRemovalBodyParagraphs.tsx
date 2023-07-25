import React from "react";
import BodyParagraphItemMulti from "./BodyParagraphItemMulti";
import { MultiThumbnailsParagraph } from "@/model/tutorial";

type Props = {
  body: MultiThumbnailsParagraph[];
};

export default function EggRemovalBodyParagraphs({ body }: Props) {
  return (
    <div className="flex flex-col">
      {body.map((paragraph, index) => (
        <BodyParagraphItemMulti
          key={paragraph._key}
          paragraph={paragraph}
          priority={index < 2}
        />
      ))}
    </div>
  );
}
