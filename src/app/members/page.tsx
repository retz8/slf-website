import MembersGrid from "@/components/Members/MembersGrid";
import PageTitle from "@/components/shared/PageTitle";
import React from "react";

export default function MembersPage() {
  return (
    <section className="flex flex-col px-10 xl:px-5 h-full">
      <PageTitle text="MEMBERS" />
      <div className="h-full flex justify-center">
        <MembersGrid />
      </div>
    </section>
  );
}
