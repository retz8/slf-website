// App Title for Mobile View (Included at Header)

import Image from "next/image";

export default function MobileAppTitle() {
  return (
    <div className="absolute flex top-0 py-12 ml-10 md:ml-20">
      <Image
        className="absolute top-0 translate-y-2"
        src="/images/logo.png"
        width={50}
        height={50}
        alt="logo"
      />
      <h1 className="lg:hidden text-xl font-[500]">Princeton SLF Initiative</h1>
    </div>
  );
}
