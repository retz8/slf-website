import { client, urlFor } from "./sanity";
import { Member } from "@/model/member";

export async function getAllMembers(): Promise<Member[]> {
  return client
    .fetch(
      `*[_type == "member"] | order(_createdAt asc){
            ...,
            "id":_id,
            "image":profilePic,
            "createdAt":_createdAt
        }`
    )
    .then((members) =>
      members.map((member: Member) => ({
        ...member,

        image: urlFor(member.image),
      }))
    );
}
