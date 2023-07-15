import { BodyParagraph } from "./generalInfo";

export type MultiThumbnailsParagraph = Omit<
  BodyParagraph,
  "thumbnail" | "thumbnailLocation"
> & {
  thumbnails: string[];
};

export type OtherResourceItem = {
  name: string;
  url: string;
};
