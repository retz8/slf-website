import { TutorialsImages } from "@/model/home";
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

export async function getAboutUs(): Promise<string> {
  return client.fetch(`*[_type == "home"][0].aboutUs`);
}

export async function getTutorialsImages(): Promise<TutorialsImages> {
  return client
    .fetch(`*[_type == "home"][0].tutorialsImages`)
    .then((images) => ({
      eggRemovalImage: urlFor(images.eggRemovalImage),
      trapImage: urlFor(images.trapImage),
    }));
}
