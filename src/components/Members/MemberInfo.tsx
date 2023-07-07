import { generateFormattedRoles } from "@/utils/rolesFormatter";
import React from "react";

type Props = {
  name: string;
  period: string;
  roles: string[];
  isModal?: boolean;
};

export default function MemberInfo({
  name,
  period,
  roles,
  isModal = false,
}: Props) {
  const simpleTextStyle =
    "opacity-50 text-[13px] md:text-[16px] lg:text-[18px] font-bold";

  return (
    <div className={`flex flex-col ${isModal ? "" : "items-center"}`}>
      <p
        className={`${
          isModal ? "text-[#FFFFFA]" : "text-[#453938]"
        } text-[18px] md:text-[22px] lg:text-[26px] font-extrabold`}
      >
        {name}
      </p>
      <p
        className={`${
          isModal ? "text-[#FFFFFA]" : "text-[#453938]"
        } ${simpleTextStyle}`}
      >{`(${period})`}</p>
      <p
        className={`${
          isModal ? "text-[#FFFFFA]" : "text-[#453938]"
        } ${simpleTextStyle}`}
      >
        {generateFormattedRoles(roles)}
      </p>
    </div>
  );
}
