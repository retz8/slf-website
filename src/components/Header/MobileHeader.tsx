"use client";

import Link from "next/link";
import React, { useState } from "react";
import HorizontalNavbar from "../shared/HorizontalNavbar";
import DonateButton from "./DonateButton";
import MenuButton from "./MenuButton";

type Props = {
  top: boolean;
};

export default function MobileHeader({ top }: Props) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="mx-auto flex justify-between items-center py-10">
      <div className="flex w-full justify-between items-center mx-5 ">
        <Link className={`${!showMenu && top ? "" : "hidden"} pl-5`} href="/">
          <h1 className="text-xl font-[500]">Princeton SLF Initiative</h1>
        </Link>
      </div>

      {showMenu && (
        <div
          className={`${
            showMenu ? "" : "hidden"
          } absolute right-0 top-0 flex w-full h-screen z-0`}
        >
          <div className="w-1/6"></div>
          <div className="w-5/6 flex flex-col pl-10 justify-center bg-[#716157] rounded-tl-[5rem] h-full">
            <HorizontalNavbar />
            <DonateButton color="bg-[#80AE3C]" />
          </div>
        </div>
      )}
      <div className="absolute top-7 right-[35px]">
        <MenuButton
          showMenu={showMenu}
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
    </div>
  );
}
