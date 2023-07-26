import GeneralInfoSummary from "@/components/GeneralInfo/GeneralInfoSummary";
import AboutUs from "@/components/Home/AboutUs";
import HomeIntro from "@/components/Home/HomeIntro";
import ScheduleSummary from "@/components/Schedule/ScheduleSummary";
import TutorialsSummary from "@/components/Tutorials/TutorialsSummary";

export default function Home() {
  return (
    <section className="flex flex-col px-10 xl:px-5 h-full pb-10">
      <div className="relative flex justify-center items-center">
        {/* Main Slogan */}
        <div
          className="absolute w-[80vw] inset-0 blur-3xl bg-[#E8FFAD] bg-opacity-75
          left-1/2 transform -translate-x-1/2"
        ></div>
        <div className="relative z-10">
          <HomeIntro />
        </div>
      </div>

      <div className="py-12 my-5 max-w-3xl w-full mx-auto flex justify-center">
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

      <div className="md:mb-2 lg:mb-10">{/* MEmeber */}</div>

      <div className="md:mb-2 lg:mb-10">{/* Summary */}</div>
    </section>
  );
}
