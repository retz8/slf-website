"use client";

import useSWR from "swr";
import React from "react";
import { Member } from "@/model/member";
import MembersGridCard from "./MembersGridCard";

export default function MembersGrid() {
  const { data: members, isLoading, error } = useSWR<Member[]>("/api/members");

  return (
    <div className="w-full text-center">
      <ul className="grid grid-cols-3 gap-4">
        {members &&
          members.map((member, index) => (
            <li key={member.id}>
              <MembersGridCard member={member} priority={index < 6} />
            </li>
          ))}
      </ul>
    </div>
  );
}
