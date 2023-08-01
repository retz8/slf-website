// ISR (revalidate: 1 month)

import BodyParagraphs from "@/components/GeneralInfo/BodyParagraphs";
import Introduction from "@/components/GeneralInfo/Introduction";
import SmallTitleView from "@/components/GeneralInfo/SmallTitleView";
import TitleView from "@/components/GeneralInfo/TitleView";
import PageTitle from "@/components/shared/PageTitle";
import LinkButton from "@/components/shared/LinkButton";

import { Metadata } from "next";
import { oneMonth } from "@/utils/revalidateConstants";
import { generalInfoApiURL } from "@/utils/baseApiURL";

export const metadata: Metadata = {
  title: "General Info",
  description:
    "General Information about Spotted Lanternfly and Princeton SLF Initiative",
};

async function getTitle() {
  const res = await fetch(`${generalInfoApiURL}/title`, {
    next: { revalidate: oneMonth },
  });
  return res.json();
}

async function getIntroduction() {
  const res = await fetch(`${generalInfoApiURL}/intro`, {
    next: { revalidate: oneMonth },
  });
  return res.json();
}

async function getBody() {
  const res = await fetch(`${generalInfoApiURL}/body`, {
    next: { revalidate: oneMonth },
  });
  return res.json();
}

export default async function GeneralInfoPage() {
  // Change this link when the original article is updated
  const originalArticle =
    "https://princetonperspectives.com/theyre-quieter-and-prettier-than-cicadas-but-spotted-lanternflies-are-a-nuisance/";

  // render data
  const generalInfoTitle = getTitle();
  const generalInfoIntro = getIntroduction();
  const generalInfoBody = getBody();

  const [title, introduction, body] = await Promise.all([
    generalInfoTitle,
    generalInfoIntro,
    generalInfoBody,
  ]);

  return (
    <section className="flex flex-col">
      <PageTitle text="GENERAL INFO" />
      <div className="hidden lg:flex w-full min-h-[600px]">
        <TitleView thumbnail={introduction[0]?.thumbnail} title={title[0]} />
      </div>
      <div className="flex lg:hidden w-full min-h-[600px]">
        <SmallTitleView
          thumbnail={introduction[0]?.thumbnail}
          title={title[0]}
        />
      </div>
      <Introduction introduction={introduction} />
      <BodyParagraphs body={body[0]} />
      <div className="flex justify-end py-5 mb-10">
        <LinkButton
          link={originalArticle}
          text="To view the original article"
        />
      </div>
    </section>
  );
}
