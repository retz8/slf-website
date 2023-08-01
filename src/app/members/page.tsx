// ISR (revalidate: 1 week)

import MembersGrid from "@/components/Members/MembersGrid";
import PageTitle from "@/components/shared/PageTitle";
import { oneMonth } from "@/utils/revalidateConstants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Members",
  description: "Members of Princeton SLF Initiative Group",
};

export default async function MembersPage() {
  const res = await fetch(`${process.env.WEBSITE_URL}/api/members`, {
    next: { revalidate: oneMonth },
  });

  // handle error
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  console.log(res);

  const data = await res.json();

  console.log(data);

  return (
    <section className="flex flex-col">
      <PageTitle text="MEMBERS" />

      <div className="h-full flex justify-center mb-10">
        <MembersGrid members={data} />
      </div>
    </section>
  );
}
