// /tutorials/egg-removal

import OtherResourcesList from "@/components/Tutorials/OtherResourcesList";
import EggRemovalBodyParagraphs from "@/components/Tutorials/EggRemovalBodyParagraphs";
import PageTitle from "@/components/shared/PageTitle";
import { tutorialsApiURL } from "@/utils/baseApiURL";

// This page is "Static Side Generation"
// Data is fixed

async function getParagraphs() {
  const res = await fetch(`${tutorialsApiURL}/egg-removal/paragraphs`);
  return res.json();
}

async function getResources() {
  const res = await fetch(`${tutorialsApiURL}/egg-removal/resources`);
  return res.json();
}

export default async function EggRemovalPage() {
  const eggRemovalParagraphs = getParagraphs();
  const eggRemovalResources = getResources();

  const [paragraphs, resources] = await Promise.all([
    eggRemovalParagraphs,
    eggRemovalResources,
  ]);

  return (
    <section className="relative flex flex-col px-10 xl:px-5 h-full pb-10 mb-10">
      <PageTitle text="EGG REMOVAL" />
      <EggRemovalBodyParagraphs body={paragraphs[0]} />
      <div className="lg:absolute lg:bottom-0 lg:pb-20">
        <OtherResourcesList resource={resources[0]} />
      </div>
    </section>
  );
}
