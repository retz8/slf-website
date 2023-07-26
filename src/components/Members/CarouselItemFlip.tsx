import { Member, SimpleMember } from "@/model/member";
import { generateFormattedRoles } from "@/utils/rolesFormatter";
import React from "react";

type Props = SimpleMember;

export default function CarouselItemFlip({ name, period, roles }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-[#FFFFFA] font-extrabold text-md sm:text-lg md:texl-xl lg:text-2xl">
        {name}
      </p>
      <p className="text-[#FFFFFA] opacity-50 font-bold text-xs sm:text-sm md:text-base lg:text-lg">{`(${period})`}</p>
      <p className="text-[#FFFFFA] opacity-50 font-bold text-xs sm:text-sm md:text-base lg:text-lg">
        {generateFormattedRoles(roles)}
      </p>
    </div>
  );
}
