import Link from "next/link";
import DonateButton from "./DonateButton";
import Navbar from "../shared/Navbar";
import MobileHeader from "./MobileHeader";

export default function Header() {
  return (
    <div className="w-full">
      {/* Normal View Header */}
      <div className="hidden lg:flex justify-between mx-auto">
        <div className="w-full flex justify-between items-center py-16">
          {/* Page Title */}
          <Link href="/">
            <div className="hidden xl:block">
              <h1 className="text-2xl font-bold">
                {/* Need to embed logo image */}
                Princeton Spotted Lanternfly Initiative
              </h1>
            </div>

            <h1 className="xl:hidden text-xl font-bold">Princeton SLF</h1>
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
