// ISR (revalidate: 1 month)

import OtherResourcesList from "@/components/Tutorials/OtherResourcesList";
import EggRemovalBodyParagraphs from "@/components/Tutorials/EggRemovalBodyParagraphs";
import PageTitle from "@/components/shared/PageTitle";
import { Metadata } from "next";
import { oneMonth } from "@/utils/revalidateConstants";
import {
  getEggRemovalOtherResources,
  getEggRemovalParagraphs,
} from "@/service/tutorial";

export const revalidate = oneMonth;

export const metadata: Metadata = {
  title: "Egg Removal",
  description: "How to remove Lanternfly eggs",
};
export default async function EggRemovalPage() {
  const paragraphs = await getEggRemovalParagraphs();
  const resources = await getEggRemovalOtherResources();

  return (
    <section className="relative flex flex-col px-10 xl:px-5 h-full pb-10 mb-10">
      <PageTitle text="EGG REMOVAL" />
      <EggRemovalBodyParagraphs body={paragraphs} />
      <div className="lg:absolute lg:bottom-0 lg:pb-20">
        <OtherResourcesList resources={resources} />
      </div>
    </section>
  );
}
//
