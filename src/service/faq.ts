import { client } from "./sanity";

export async function getAllFAQs() {
  return client.fetch(`*[_type == "faq"] | order(_createdAt desc){
          ...,
          "id":_id,
          "createdAt":_createdAt
      }`);
}
