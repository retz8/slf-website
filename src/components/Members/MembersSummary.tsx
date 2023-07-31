"react";
import PageTitle from "../shared/PageTitle";
import MembersCarousel from "./MembersCarousel";

export default function MembersSummary() {
  return (
    <div className="flex flex-col mb-24 pb-10">
      <PageTitle text="Members" isSummary={true} />
      <div className="absolute w-screen left-0  flex justify-center bg-yellow-300">
        {/* <p className="text-3xl font-extrabold text-red-300">test</p> */}
      </div>
    </div>
  );
}
