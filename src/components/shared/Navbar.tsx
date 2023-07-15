import React from "react";
import { menu } from "@/utils/navigation/menu";
import Link from "next/link";
import TutorialsDropdown from "./TutorialsDropdown";
import DownIcon from "../ui/icons/DownIcon";

type Props = {
  ulStyle: string;
  textColor: string;
};

export default function Navbar({ ulStyle, textColor }: Props) {
  return (
    <ul className={`relative ${ulStyle}`}>
      {menu.map(({ href, text }) =>
        href === "/tutorials" ? (
          <li key={href} className=" flex flex-col items-center">
            <p
              className={`peer text-xs md:text-base ${textColor} font-extrabold`}
            >
              {text}
            </p>
            <div
              className="absolute top-0 mt-5 hidden peer-hover:flex hover:flex 
            flex-col items-center "
            >
              <DownIcon />
              <TutorialsDropdown />
            </div>
          </li>
        ) : (
          <li key={href} className=" flex flex-col items-center">
            <Link href={href} className="peer">
              <p className={`text-xs md:text-base ${textColor} font-extrabold`}>
                {text}
              </p>
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
