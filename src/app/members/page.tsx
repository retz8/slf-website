import MembersGrid from "@/components/Members/MembersGrid";
import PageTitle from "@/components/shared/PageTitle";
import React from "react";

export default function MembersPage() {
  return (
    <section className="flex flex-col px-10 xl:px-5 h-full pb-10">
      <PageTitle text="MEMBERS" />
      <div className="h-full flex justify-center mb-10">
        <MembersGrid />
      </div>
    </section>
  );
}
