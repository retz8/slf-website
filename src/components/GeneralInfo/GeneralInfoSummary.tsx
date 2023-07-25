import React from "react";
import PageTitle from "../shared/PageTitle";
import ShortIntroduction from "./ShortIntroduction";
import LinkButton from "../shared/LinkButton";
import Link from "next/link";
import Image from "next/image";

export default function GeneralInfoSummary() {
  return (
    <div className="flex flex-col mb-24 pb-10">
      <PageTitle text="General Info" isSummary={true} />
      <div className="ml-3 flex flex-col items-center md:items-start">
        <ShortIntroduction />
        <Link href="/generalInfo">
          <LinkButton text="View More" link="" isRouting={true} />
        </Link>
      </div>
    </div>
  );
}
