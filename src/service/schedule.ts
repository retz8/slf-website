import { client } from "./sanity";

export async function getSchedules() {
  return client.fetch(`*[_type == "schedule"] | order(_createdAt asc){
          "id": _id,
          "createdAt": _createdAt,
          start,
          end,
          text,
      }`);
}
