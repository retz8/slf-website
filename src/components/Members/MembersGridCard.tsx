import { Member } from "@/model/member";
import React from "react";

type Props = {
  member: Member;
  priority: boolean;
};

export default function MembersGridCard({ member, priority = false }: Props) {
  return <div>{member.name}</div>;
}
