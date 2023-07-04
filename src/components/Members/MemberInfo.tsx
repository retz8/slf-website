import { generateFormattedRoles } from "@/utils/rolesFormatter";
import React from "react";

type Props = {
  name: string;
  period: string;
  roles: string[];
  alignCenter?: boolean;
};

export default function MemberInfo({
  name,
  period,
  roles,
  alignCenter = true,
}: Props) {
  const simpleTextStyle =
    "text-[#453938] opacity-50 text-[13px] md:text-[16px] lg:text-[18px] font-bold";

  return (
    <div className={`flex flex-col ${alignCenter ? "items-center" : ""}`}>
      <p className="text-[#453938] text-[18px] md:text-[22px] lg:text-[26px] font-extrabold">
        {name}
      </p>
      <p className={simpleTextStyle}>{`(${period})`}</p>
      <p className={simpleTextStyle}>{generateFormattedRoles(roles)}</p>
    </div>
  );
}
