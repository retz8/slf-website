import { client } from "./sanity";

export async function getAllMembers() {
  return client.fetch(`*[_type == "member"] | order(_createdAt asc){
            ...,
            "id":_id,
            "createdAt":_createdAt
        }`);
}
