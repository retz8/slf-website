import { client } from "./sanity";

export async function getAllFAQs() {
  return client.fetch(`*[_type == "faq"] | order(_createdAt asc){
            ...,
            "id":_id,
            "createdAt":_createdAt
        }`);
}
