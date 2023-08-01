// ISR (revalidate: 1 day)

import FaqSummary from "@/components/Faq/FaqSummary";
import GeneralInfoSummary from "@/components/GeneralInfo/GeneralInfoSummary";
import AboutUs from "@/components/Home/AboutUs";
import HomeIntro from "@/components/Home/HomeIntro";
import MembersCarousel from "@/components/Members/MembersCarousel";
import ScheduleSummary from "@/components/Schedule/ScheduleSummary";
import TutorialsSummary from "@/components/Tutorials/TutorialsSummary";
import PageTitle from "@/components/shared/PageTitle";
import { generalInfoApiURL } from "@/utils/baseApiURL";
import { oneMonth, twoWeeks } from "@/utils/revalidateConstants";

async function getHomeAboutUs() {
  const res = await fetch(`${process.env.WEBSITE_URL}/api/home/about-us`, {
    next: { revalidate: oneMonth },
  });
  return res.json();
}

async function getGeneralInfoIntroduction() {
  const res = await fetch(`${generalInfoApiURL}/intro`, {
    next: { revalidate: oneMonth },
  });
  return res.json();
}

async function getTutorialsImages() {
  const res = await fetch(`${process.env.WEBSITE_URL}/api/home/tutorial-imgs`, {
    next: { revalidate: oneMonth },
  });
  return res.json();
}

async function getSchedule() {
  const res = await fetch(`${process.env.WEBSITE_URL}/api/schedule`, {
    next: { revalidate: twoWeeks },
  });
  return res.json();
}

async function getSomeFaqs() {
  const res = await fetch(`${process.env.WEBSITE_URL}/api/faq/some`, {
    next: { revalidate: twoWeeks },
  });
  return res.json();
}

async function getMembers() {
  const res = await fetch(`${process.env.WEBSITE_URL}/api/members`, {
    next: { revalidate: oneMonth },
  });
  return res.json();
}

export default async function Home() {
  const homeAboutUs = getHomeAboutUs();
  const generalInfoIntro = getGeneralInfoIntroduction();
  const tutorialsImages = getTutorialsImages();
  const fullSchedule = getSchedule();
  const someFaqs = getSomeFaqs();
  const allMembers = getMembers();

  const [aboutus, giIntro, tutorialImgs, schedules, faqs, members] =
    await Promise.all([
      homeAboutUs,
      generalInfoIntro,
      tutorialsImages,
      fullSchedule,
      someFaqs,
      allMembers,
    ]);

  return (
    <section className="flex flex-col">
      <div className="relative flex justify-center items-center">
        {/* Main Slogan */}
        <div
          className="absolute w-[80vw] inset-0 blur-3xl bg-[#E8FFAD] bg-opacity-75
          left-1/2 transform -translate-x-1/2 h-[85%] lg:h-full"
        ></div>
        <div className="relative z-10">
          <HomeIntro />
        </div>
      </div>

      <div
        className="pb-12 pt-0 lg:pt-12 my-0 lg:my-5 
      max-w-3xl w-full mx-auto flex justify-center"
      >
        <AboutUs text={aboutus} />
      </div>

      <div className="md:mb-2 lg:mb-10">
        <GeneralInfoSummary intro={giIntro} />
      </div>

      <div className="md:mb-2 lg:mb-10">
        <TutorialsSummary images={tutorialImgs} />
      </div>

      <div className="md:mb-2 lg:mb-10">
        <ScheduleSummary schedules={schedules} />
      </div>

      <div className="mb-0 md:mb-36 lg:mb-64">
        <div className="flex">
          <PageTitle text="Members" isSummary={true} />
        </div>

        <div
          className="absolute w-full
         left-0 flex -translate-y-10 md:-translate-y-8 lg:-translate-y-6  justify-center"
        >
          <MembersCarousel members={members} />
        </div>
      </div>

      <div
        className="mt-48 sm:mt-52 md:mt-56 lg:mt-64 
      pt-48 lg:pt-36"
      >
        <FaqSummary faqs={faqs} />
      </div>
    </section>
  );
}
