// ISR (revalidate: 1 month)

import MembersGrid from "@/components/Members/MembersGrid";
import PageTitle from "@/components/shared/PageTitle";
import { getAllMembers } from "@/service/member";
import { oneMonth } from "@/utils/revalidateConstants";
import { Metadata } from "next";

export const revalidate = oneMonth;

export const metadata: Metadata = {
  title: "Members",
  description: "Members of Princeton SLF Initiative Group",
};

export default async function MembersPage() {
  const members = await getAllMembers();

  return (
    <section className="flex flex-col">
      <PageTitle text="MEMBERS" />

      <div className="h-full flex justify-center mb-10">
        <MembersGrid members={members} />
      </div>
    </section>
  );
}
