import { MultiThumbnailsParagraph, OtherResourceItem } from "@/model/tutorial";
import { client, urlFor } from "./sanity";

//Egg Removal
export async function getEggRemovalParagraphs(): Promise<
  MultiThumbnailsParagraph[]
> {
  return client
    .fetch(`*[_type == "eggRemoval"][0].paragraphs`)
    .then((paragraphs) =>
      paragraphs.map((paragraph: MultiThumbnailsParagraph) => ({
        ...paragraph,

        thumbnails: paragraph.thumbnails.map((image) => urlFor(image)),
      }))
    );
}

export async function getEggRemovalOtherResources() {
  return client
    .fetch(`*[_type == "eggRemoval"][0].otherResources`)
    .then((resources) =>
      resources.map((resource: OtherResourceItem) => ({
        name: resource.name,
        url: resource.url,
      }))
    );
}

// Traps
export async function getLfTrapsParagraphs() {
  return client.fetch(`*[_type == "lfTraps"][0].paragraphs`);
}

export async function getLfTrapsThumbnails() {
  return client
    .fetch(`*[_type == "lfTraps"][0].thumbnails`)
    .then((images) => images.map((image: object) => urlFor(image)));
}

export async function getLfTrapsVideoTutorial() {
  return client.fetch(`*[_type == "lfTraps"][0].videoTutorial{ videoUrl, sectionTitle }
  `);
}
