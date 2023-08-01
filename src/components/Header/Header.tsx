import Link from "next/link";
import DonateButton from "./DonateButton";
import Navbar from "../shared/Navbar";
import MobileHeader from "./MobileHeader";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full">
      {/* Normal View Header */}
      <div className="hidden lg:flex justify-between mx-auto">
        <div className="w-full flex justify-between items-center py-16">
          {/* Page Title */}
          <Link href="/">
            <div className="hidden 2xl:flex items-center">
              <div className="flex">
                <Image
                  src="/images/logo.png"
                  width={100}
                  height={100}
                  alt="logo"
                />
              </div>

              <h1 className="text-2xl font-bold">
                {/* Need to embed logo image */}
                Princeton Spotted Lanternfly Initiative
              </h1>
            </div>

            <div className="flex 2xl:hidden items-center">
              <div className="flex">
                <Image
                  src="/images/logo.png"
                  width={100}
                  height={100}
                  alt="logo"
                />
              </div>

              <h1 className="2xl:hidden text-xl font-bold">Princeton SLFI</h1>
            </div>
          </Link>

          {/* Menu Navigation Bar */}
          <nav>
            <Navbar
              ulStyle="flex gap-5 xl:gap-7 items-center"
              textColor="text-dark-brown"
            />
          </nav>
        </div>

        {/* Donate Button */}
        <div className="flex items-center pl-5 xl:pl-7">
          <DonateButton />
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden py-10">
        <MobileHeader />
      </div>
    </div>
  );
}
