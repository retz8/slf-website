// ISR (revalidate: 1 month)

import LfTrapsBodyParagraphs from "@/components/Tutorials/LfTrapsBodyParagraphs";
import LfTrapsThumbnails from "@/components/Tutorials/LfTrapsThumbnails";
import LfTrapsVideoTutorial from "@/components/Tutorials/LfTrapsVideoTutorial";
import PageTitle from "@/components/shared/PageTitle";

import { tutorialsApiURL } from "@/utils/baseApiURL";
import { oneMonth } from "@/utils/revalidateConstants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trap Tutorial",
  description:
    "Tutorial on Lanternfly traps including photos and youtube video",
};

async function getParagraphs() {
  const res = await fetch(`${tutorialsApiURL}/lf-traps/paragraphs`, {
    next: { revalidate: oneMonth },
  });
  return res.json();
}

async function getThumbnails() {
  const res = await fetch(`${tutorialsApiURL}/lf-traps/thumbnails`, {
    next: { revalidate: oneMonth },
  });
  return res.json();
}

async function getVideoTutorial() {
  const res = await fetch(`${tutorialsApiURL}/lf-traps/video`, {
    next: { revalidate: oneMonth },
  });
  return res.json();
}

export default async function LfTrapsPage() {
  const lfTrapsParagraphs = getParagraphs();
  const lfTrapsThumbnails = getThumbnails();
  const lfTrapsVideoTutorial = getVideoTutorial();

  const [paragraphs, thumbnails, videoTutorial] = await Promise.all([
    lfTrapsParagraphs,
    lfTrapsThumbnails,
    lfTrapsVideoTutorial,
  ]);

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
