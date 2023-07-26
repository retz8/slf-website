"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import HorizontalNavbar from "../shared/HorizontalNavbar";
import DonateButton from "./DonateButton";
import MenuButton from "./MenuButton";

export default function MobileHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.pageYOffset > 0) {
        setTop(false);
      } else {
        setTop(true);
      }
      //Swindow.pageYOffset > 0 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    console.log(top);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div className="relative mx-auto flex justify-between items-center">
      <div className="static flex w-full justify-between items-center">
        <h1 className="hidden text-xl font-[500]">Princeton SLF Initiative</h1>
      </div>

      <div
        className={`${
          showMenu ? "" : "hidden"
        } absolute right-0 top-0 -translate-y-10 flex w-full translate-x-12 xs:translate-x-16 sm:translate-x-20 z-10`}
      >
        <div className="w-1/6 sd:w-2/6 md:w-3/6 h-screen"></div>
        <div className="w-5/6 sd:w-4/6 md:w-3/6  flex flex-col pl-10 justify-center bg-[#716157] rounded-tl-[5rem] h-screen">
          <HorizontalNavbar />
          <DonateButton color="bg-[#80AE3C]" />
        </div>
      </div>
      <div className="sticky top-0 z-10">
        <MenuButton
          showMenu={showMenu}
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
    </div>
  );
}
