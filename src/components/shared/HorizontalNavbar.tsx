import { menu } from "@/utils/navigation/menu";
import Link from "next/link";
import React from "react";

export default function HorizontalNavbar() {
  return (
    <ul className="flex flex-col gap-5 pb-5 pl-3">
      {menu.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>
            <p
              className="text-lg md:text-xl text-[#FFFFFA] font-extrabold tracking-wider opacity-25 
            active:opacity-100 hover:opacity-100"
            >
              {item.text}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
