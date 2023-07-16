// /tutorials/lf-traps

import LfTrapsBodyParagraphs from "@/components/Tutorials/LfTrapsBodyParagraphs";
import LfTrapsThumbnails from "@/components/Tutorials/LfTrapsThumbnails";
import LfTrapsVideoTutorial from "@/components/Tutorials/LfTrapsVideoTutorial";
import PageTitle from "@/components/shared/PageTitle";
import { tutorialsApiURL } from "@/utils/baseApiURL";

async function getParagraphs() {
  const res = await fetch(`${tutorialsApiURL}/lf-traps/paragraphs`);
  return res.json();
}

async function getThumbnails() {
  const res = await fetch(`${tutorialsApiURL}/lf-traps/thumbnails`);
  return res.json();
}

async function getVideoTutorial() {
  const res = await fetch(`${tutorialsApiURL}/lf-traps/video`);
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
    <section className="flex flex-col px-10 xl:px-5 h-full pb-10 mb-10">
      <PageTitle text="LANTERNFLY TRAPS" />
      <LfTrapsBodyParagraphs paragraphs={paragraphs[0]} />
      <div className="py-10">
        <LfTrapsThumbnails thumbnails={thumbnails[0]} />
      </div>
      <div className="mt-4">
        <LfTrapsVideoTutorial videoTutorial={videoTutorial[0]} />
      </div>
    </section>
  );
}
