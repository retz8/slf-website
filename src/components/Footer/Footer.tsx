import Navbar from "../shared/Navbar";

export default function Footer() {
  return (
    <div className="bg-less-dark-brown">
      <nav className="hidden lg:flex py-[90px] items-center px-[50px]">
        <Navbar
          ulStyle="grid grid-cols-3 md:flex gap-x-[60px] gap-y-[30px] md:gap-[30px] pl-[0px] md:pl-[50px]"
          textColor="text-custom-white"
          isFooter={true}
        />
      </nav>

      {/* Copyright text */}
      <div className="flex py-[45px] justify-center lg:justify-start items-center px-[50px] ">
        <p className="text-xs text-custom-white font-bold opacity-50">{`Copyright ©${new Date().getFullYear()} SFL Research, PRISMS`}</p>
      </div>
    </div>
  );
}
