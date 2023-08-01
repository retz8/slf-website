import { OtherResourceItem } from "@/model/tutorial";
import ParagraphSectionText from "../shared/ParagraphSectionText";
import OtherResourcesItem from "./OtherResourcesItem";

type Props = {
  resources: OtherResourceItem[];
};

export default function OtherResourcesList({ resources }: Props) {
  return (
    <div className="flex flex-col">
      <ParagraphSectionText text="Other Resources" />

      {resources?.map(({ name, url }, index) => (
        <OtherResourcesItem key={`${name} ${index}`} name={name} url={url} />
      ))}
    </div>
  );
}
