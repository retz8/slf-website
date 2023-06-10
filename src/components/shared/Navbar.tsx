import React from "react";
import { menu } from "@/utils/navigation/menu";
import Link from "next/link";

type Props = {
  ulStyle: string;
  textColor: string;
};

export default function Navbar({ ulStyle, textColor }: Props) {
  return (
    <ul className={ulStyle}>
      {menu.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>
            <p className={`text-xs md:text-base ${textColor} font-extrabold`}>
              {item.text}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
