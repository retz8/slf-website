// ISR (revalidate: 1 week)

import MembersGrid from "@/components/Members/MembersGrid";
import PageTitle from "@/components/shared/PageTitle";
import { Member } from "@/model/member";
import { getAllMembers } from "@/service/member";
import { oneMonth } from "@/utils/revalidateConstants";
import { GetStaticProps, InferGetStaticPropsType, Metadata } from "next";

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

// export const getStaticProps: GetStaticProps<{
//   members: Member[];
// }> = async () => {
//   console.log("check");
//   const members = await getAllMembers();

//   console.log(members);
//   return {
//     props: {
//       members,
//     },
//   };
// };
