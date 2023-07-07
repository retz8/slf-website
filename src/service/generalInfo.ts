import { client } from "./sanity";

export async function getTitle() {
  return client.fetch(`*[_type == "generalInfo"].title{ text, subText }`);
}

export async function getIntroduction() {
  return client.fetch(`*[_type == "generalInfo"].introduction`);
}

export async function getBodyParagraphs() {
  return client.fetch(`*[_type == "generalInfo"].paragraphs`);
}
