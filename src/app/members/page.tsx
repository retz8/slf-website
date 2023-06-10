import MembersGrid from "@/components/Members/MembersGrid";
import PageTitle from "@/components/shared/PageTitle";
import React from "react";

export default function MembersPage() {
  return (
    <section className="max-w-4xl mx-auto">
      <PageTitle text="MEMBERS" />
      <MembersGrid />
    </section>
  );
}
