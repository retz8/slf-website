import { IntroParagraph } from "@/model/generalInfo";
import { client, urlFor } from "./sanity";

export async function getTitle() {
  return client.fetch(`*[_type == "generalInfo"][0].title{ text, subText }`);
}

export async function getIntroduction() {
  return client
    .fetch(`*[_type == "generalInfo"][0].introduction`)
    .then((items) =>
      items.map((item: IntroParagraph) => {
        return item.thumbnail === undefined
          ? { text: item.text, _key: item._key }
          : {
              text: item.text,
              _key: item._key,
              thumbnail: urlFor(item.thumbnail),
            };
      })
    );
}

export async function getBodyParagraphs() {
  return client.fetch(`*[_type == "generalInfo"][0].paragraphs`);
}
