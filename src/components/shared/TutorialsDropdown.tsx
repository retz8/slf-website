import Link from "next/link";
import React from "react";

export default function TutorialsDropdown() {
  return (
    <div
      className="flex flex-col justify-center items-start
        px-8 py-5 gap-2 shadow shadow-[#86BD08]/50 bg-white"
    >
      <Link href="/tutorials/egg-removal" className="peer">
        <p
          className={`text-xs md:text-sm text-[#453938] 
          text-opacity-25 hover:text-opacity-90 font-extrabold`}
        >
          Egg Removal
        </p>
      </Link>
      <Link href="/tutorials/lf-traps" className="peer">
        <p
          className={`text-xs md:text-sm text-[#453938] 
          text-opacity-25 hover:text-opacity-90 font-extrabold`}
        >
          Lanternfly Traps
        </p>
      </Link>
    </div>
  );
}
