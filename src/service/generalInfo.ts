import { client } from "./sanity";

export async function getGeneralInfo() {
  return client.fetch(`*[_type == "generalInfo"] | order(_createdAt asc){
            ...,
            "id":_id,
        }`);
}
