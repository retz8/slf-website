import { client } from "./sanity";

//Egg Removal
export async function getEggRemovalParagraphs() {
  return client.fetch(`*[_type == "eggRemoval"].paragraphs`);
}

export async function getEggRemovalOtherResources() {
  return client.fetch(`*[_type == "eggRemoval"].otherResources`);
}

// Traps
