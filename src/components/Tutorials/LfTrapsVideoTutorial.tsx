"use client";

import { LfTrapsVideoObject } from "@/model/tutorial";
("react");
import ParagraphSectionText from "../shared/ParagraphSectionText";

type Props = {
  videoTutorial: LfTrapsVideoObject;
};

export default function LfTrapsVideoTutorial({ videoTutorial }: Props) {
  const { sectionTitle, videoUrl } = videoTutorial;

  const videoId = videoUrl.split("/").pop();

  return (
    <div className="flex flex-col">
      <ParagraphSectionText text={sectionTitle} />
      <div className="flex justify-center py-5">
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Video Tutorial"
          allowFullScreen
        />
      </div>
    </div>
  );
}
