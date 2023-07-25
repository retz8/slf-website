import { client, urlFor } from "./sanity";

export async function getEggsRemovedNumber() {
  return client.fetch(`*[_type == "home"][0].eggsRemoved`);
}

export async function getEggsRemovedByYears() {
  return client.fetch(`*[_type == "home"][0].eggsRemovedByYears`);
}

export async function getMainEggImage() {
  return client
    .fetch(`*[_type == "home"][0].mainEggImage`)
    .then((data) => urlFor(data));
}
