"use client";

import useSWR from "swr";
import React from "react";
import { Member } from "@/model/member";
import MembersGridCard from "./MembersGridCard";
import DataLoadingSpinner from "../ui/DataLoadingSpinner";

export default function MembersGrid() {
  const { data: members, isLoading, error } = useSWR<Member[]>("/api/members");

  if (isLoading)
    return (
      <div className="flex items-center mb-20">
        <DataLoadingSpinner />
      </div>
    );

  return (
    <div className="w-full py-10">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members &&
          members.map((member, index) => (
            <li key={member.id}>
              <MembersGridCard member={member} priority={index < 3} />
            </li>
          ))}
      </ul>
    </div>
  );
}
