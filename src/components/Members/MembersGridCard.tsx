import { Member } from "@/model/member";
import Image from "next/image";
import React from "react";
import MemberInfo from "./MemberInfo";

type Props = {
  member: Member;
  priority: boolean;
};

export default function MembersGridCard({ member, priority = false }: Props) {
  const { name, period, roles, image } = member;

  const buttonTransitionStyle =
    "transition ease-in-out delay-150 hover:-translate-y-3 hover:-translate-x-3 duration-300";

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="absolute rounded-2xl bg-[#69594E] opacity-20 w-1/2 md:w-3/4 lg:w-full aspect-square"></div>
      <button
        onClick={() => console.log({ name })}
        className={`${buttonTransitionStyle} relative w-1/2 md:w-3/4 lg:w-full aspect-square`}
      >
        <Image
          className="rounded-2xl object-cover "
          src={image}
          fill
          alt="Picture of the author"
        />
      </button>

      <div className="w-full pt-5">
        <MemberInfo name={name} period={period} roles={roles} />
      </div>
    </div>
  );
}
