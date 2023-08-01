// ISR (revalidate: 1 month)

import LfTrapsBodyParagraphs from "@/components/Tutorials/LfTrapsBodyParagraphs";
import LfTrapsThumbnails from "@/components/Tutorials/LfTrapsThumbnails";
import LfTrapsVideoTutorial from "@/components/Tutorials/LfTrapsVideoTutorial";
import PageTitle from "@/components/shared/PageTitle";
import {
  getLfTrapsParagraphs,
  getLfTrapsThumbnails,
  getLfTrapsVideoTutorial,
} from "@/service/tutorial";

import { oneMonth } from "@/utils/revalidateConstants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trap Tutorial",
  description:
    "Tutorial on Lanternfly traps including photos and youtube video",
};

export const revalidate = oneMonth;

export default async function LfTrapsPage() {
  const paragraphs = await getLfTrapsParagraphs();
  const thumbnails = await getLfTrapsThumbnails();
  const videoTutorial = await getLfTrapsVideoTutorial();

  return (
    <section className="flex flex-col">
      <PageTitle text="LANTERNFLY TRAPS" />
      <LfTrapsBodyParagraphs paragraphs={paragraphs} />
      <div className="py-10">
        <LfTrapsThumbnails thumbnails={thumbnails} />
      </div>
      <div className="mt-4">
        <LfTrapsVideoTutorial videoTutorial={videoTutorial} />
      </div>
    </section>
  );
}
