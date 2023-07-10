import BodyParagraphs from "@/components/GeneralInfo/BodyParagraphs";
import Introduction from "@/components/GeneralInfo/Introduction";
import OriginalArticleButton from "@/components/GeneralInfo/OriginalArticleButton";
import SmallTitleView from "@/components/GeneralInfo/SmallTitleView";
import TitleView from "@/components/GeneralInfo/TitleView";
import PageTitle from "@/components/shared/PageTitle";
import { urlFor } from "@/service/sanity";
import { generalInfoApiURL } from "@/utils/baseApiURL";

// This page is "Static Side Generation"
// Data is fixed

async function getTitle() {
  const res = await fetch(`${generalInfoApiURL}/title`);
  return res.json();
}

async function getIntroduction() {
  const res = await fetch(`${generalInfoApiURL}/intro`);
  return res.json();
}

async function getBody() {
  const res = await fetch(`${generalInfoApiURL}/body`);
  return res.json();
}

export default async function GeneralInfoPage() {
  // render data
  const generalInfoTitle = getTitle();
  const generalInfoIntro = getIntroduction();
  const generalInfoBody = getBody();

  const [title, introduction, body] = await Promise.all([
    generalInfoTitle,
    generalInfoIntro,
    generalInfoBody,
  ]);

  const thumbnail = urlFor(introduction[0][0]?.thumbnail);

  return (
    <section className="flex flex-col px-10 xl:px-5 h-full pb-10">
      <PageTitle text="GENERAL INFO" />
      <div className="hidden lg:flex w-full min-h-[64vh]">
        <TitleView thumbnail={thumbnail} title={title[0]} />
      </div>
      <div className="flex lg:hidden w-full min-h-[64vh]">
        <SmallTitleView thumbnail={thumbnail} title={title[0]} />
      </div>
      <Introduction introduction={introduction[0]} />
      <BodyParagraphs body={body[0]} />
      <div className="flex justify-end py-5 mb-10">
        <OriginalArticleButton />
      </div>
    </section>
  );
}
