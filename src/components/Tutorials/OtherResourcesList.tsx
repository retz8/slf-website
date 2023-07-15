import { OtherResourceItem } from "@/model/tutorial";
import React from "react";
import ParagraphSectionText from "../shared/ParagraphSectionText";
import Link from "next/link";
import OtherResourcesItem from "./OtherResourcesItem";

type Props = {
  resource: OtherResourceItem[];
};

export default function OtherResourcesList({ resource }: Props) {
  return (
    <div className="flex flex-col">
      <ParagraphSectionText text="Other Resources" />

      {resource.map(({ name, url }, index) => (
        <OtherResourcesItem key={`${name} ${index}`} name={name} url={url} />
      ))}
    </div>
  );
}
