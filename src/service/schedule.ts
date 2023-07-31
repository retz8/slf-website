import { FullSchedule } from "@/model/schedule";
import { client, urlFor } from "./sanity";

export async function getSchedules(): Promise<FullSchedule> {
  return client
    .fetch(`*[_type == "schedule"][0]`)
    .then((data) => ({ ...data, thumbnail: urlFor(data.thumbnail) }));
}
