import { EggsRemovedByYearPair } from "@/model/home";
import React from "react";
import ListDotIcon from "../ui/icons/ListDotIcon";
import { formatNumberWithAbbreviation } from "@/utils/numberFormatter";

type Props = {
  dataPair: EggsRemovedByYearPair;
  index: number;
};

export default function EggsRemovedListItem({ dataPair, index }: Props) {
  const { year, eggsRemoved } = dataPair;

  const eggsRemovedString = formatNumberWithAbbreviation(eggsRemoved);
  const yearString = year.toLocaleString();

  const outputString = `About ${eggsRemovedString} in ${yearString}`;

  return (
    <div className={`${index > 0 ? "ml-5" : ""} flex items-center`}>
      <ListDotIcon />
      <p className="ml-5 italic text-[#453938] text-[22px] font-light">
        {outputString}
      </p>
    </div>
  );
}
