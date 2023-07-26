"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import DonateButton from "./DonateButton";
import MenuButton from "./MenuButton";
import Navbar from "../shared/Navbar";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const [top, setTop] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.pageYOffset > 0) {
        setTop(false);
      } else {
        setTop(true);
        setShowMenu(false);
      }
      //Swindow.pageYOffset > 0 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div className="w-full ">
      <div className="hidden lg:flex mx-auto  justify-between">
        <div className="flex w-full justify-between items-center py-[65px]">
          <Link className={`${top || showMenu ? "" : "hidden"}`} href="/">
            <div className="hidden xl:block">
              <h1 className="text-2xl font-bold">
                Princeton Spotted Lanternfly Initiative
              </h1>
            </div>

            <h1 className="xl:hidden text-xl font-bold">Princeton SLF</h1>
          </Link>

          <nav className={`${top || showMenu ? "" : "hidden"}`}>
            <Navbar
              ulStyle="flex gap-[20px] xl:gap-[30px] items-center"
              textColor="text-[#453938]"
            />
          </nav>
        </div>

        <div className="flex gap-[30px] items-center py-[35px] md:py-[65px] pl-[30px]">
          {(showMenu || top) && <DonateButton />}
          {!top && (
            <div>
              <MenuButton
                showMenu={showMenu}
                onClick={() => setShowMenu(!showMenu)}
              />
            </div>
          )}
        </div>
      </div>

      <div className="lg:hidden py-10">
        {/* Wrap MobileHeader in a div and set it to have a fixed height */}
        <MobileHeader />
      </div>
    </div>
  );
}
