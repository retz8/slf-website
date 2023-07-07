export type IntroParagraph = {
  text: string;
  thumbnail?: string;
  _key: string;
};

export type ParagraphTitle = {
  text: string;
  subText: string;
};

export type BodyParagraph = {
  _key: string;
  sectionTitle?: string;
  text: string;
  thumbnail?: string;
  thumbnailLocation?: string;
};
