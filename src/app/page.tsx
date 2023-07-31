import FaqSummary from "@/components/Faq/FaqSummary";
import GeneralInfoSummary from "@/components/GeneralInfo/GeneralInfoSummary";
import AboutUs from "@/components/Home/AboutUs";
import HomeIntro from "@/components/Home/HomeIntro";
import MembersCarousel from "@/components/Members/MembersCarousel";
import ScheduleSummary from "@/components/Schedule/ScheduleSummary";
import TutorialsSummary from "@/components/Tutorials/TutorialsSummary";
import PageTitle from "@/components/shared/PageTitle";

// 이 페이지를 ISR로 바꿀 필요가 있다.

export default function Home() {
  return (
    <section className="flex flex-col px-10 xl:px-5 h-full pb-10">
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
        <AboutUs />
      </div>

      <div className="md:mb-2 lg:mb-10">
        <GeneralInfoSummary />
      </div>

      <div className="md:mb-2 lg:mb-10">
        <TutorialsSummary />
      </div>

      <div className="md:mb-2 lg:mb-10">
        <ScheduleSummary />
      </div>

      <div className="mb-0 md:mb-36 lg:mb-64">
        <div className="flex">
          <PageTitle text="Members" isSummary={true} />
        </div>

        <div
          className="absolute w-full
         left-0 flex -translate-y-10 md:-translate-y-8 lg:-translate-y-6  justify-center"
        >
          <MembersCarousel />
        </div>
      </div>

      <div
        className="mt-48 sm:mt-52 md:mt-56 lg:mt-64 
      pt-48 lg:pt-36"
      >
        <FaqSummary />
      </div>
    </section>
  );
}
