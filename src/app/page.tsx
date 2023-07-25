import HomeIntro from "@/components/Home/HomeIntro";

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

      <div>{/* About Us */}</div>

      <div>{/* General Info Summary */}</div>

      <div>{/* Tutorial Summary */}</div>

      <div>{/* Schedule Summary */}</div>

      <div>{/* Memeber Summary */}</div>

      <div>{/* Faq Summary */}</div>
    </section>
  );
}
