"react";
import ParagraphText from "../shared/ParagraphText";
import ParagraphSectionText from "../shared/ParagraphSectionText";
import { MultiThumbnailsParagraph } from "@/model/tutorial";
import Image from "next/image";
import { urlFor } from "@/service/sanity";

type Props = {
  paragraph: MultiThumbnailsParagraph;
  priority?: boolean;
};

export default function BodyParagraphItemMulti({
  paragraph,
  priority = false,
}: Props) {
  const isSpecial =
    paragraph.sectionTitle === "Removing Spotted Lanternfly Eggs";

  return (
    <div className="flex flex-col">
      {paragraph.sectionTitle !== undefined && (
        <ParagraphSectionText text={paragraph.sectionTitle} />
      )}

      <div className={`flex ${isSpecial ? "flex-row" : "flex-col"}`}>
        {paragraph.text !== undefined && (
          <ParagraphText text={paragraph.text} />
        )}

        {paragraph.thumbnails !== undefined &&
          paragraph.thumbnails.length > 0 && (
            <div className="flex flex-col">
              {paragraph.thumbnails.map((thumbnail, index) => (
                <div
                  key={`${paragraph.sectionTitle} index`}
                  className={`flex ${
                    isSpecial ? "float-right ml-5 md:ml-20" : "w-full"
                  }`}
                >
                  <Image
                    src={urlFor(thumbnail)}
                    className={`${
                      isSpecial ? "" : "w-full"
                    } mb-10 object-contain`}
                    width={800}
                    height={800}
                    priority={priority}
                    alt={`${paragraph.sectionTitle}'s Thumbnail ${index}`}
                  />
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  );
}
