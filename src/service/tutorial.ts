import { client, urlFor } from "./sanity";

//Egg Removal
export async function getEggRemovalParagraphs() {
  return client.fetch(`*[_type == "eggRemoval"].paragraphs`);
}

export async function getEggRemovalOtherResources() {
  return client.fetch(`*[_type == "eggRemoval"].otherResources`);
}

// Traps
export async function getLfTrapsParagraphs() {
  return client.fetch(`*[_type == "lfTraps"].paragraphs`);
}

export async function getLfTrapsThumbnails() {
  return client.fetch(`*[_type == "lfTraps"].thumbnails`);
}

export async function getLfTrapsVideoTutorial() {
  return client.fetch(`*[_type == "lfTraps"].videoTutorial{ videoUrl, sectionTitle }
  `);
}
