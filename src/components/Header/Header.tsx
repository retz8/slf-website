"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import DonateButton from "./DonateButton";
import MenuButton from "./MenuButton";
import Navbar from "../shared/Navbar";
import HorizontalNavbar from "../shared/HorizontalNavbar";
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
    <div className="mx-auto">
      <div className="hidden lg:flex mx-auto  justify-between">
        <div className="flex w-full justify-between items-center pl-[50px] xl:pl-[75px] pr-[30px] py-[75px]">
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
              textColor="text-[#749857]"
            />
          </nav>
        </div>

        <div className="flex gap-[30px] items-center pr-[35px] py-[35px] md:pr-[75px] md:py-[75px]">
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

      <div className="lg:hidden">
        <MobileHeader top={top} />
      </div>
    </div>
  );
}
