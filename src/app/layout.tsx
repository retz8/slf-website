import "./globals.css";
import { rubik } from "@/utils/fonts/globalFont";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import MobileAppTitle from "@/components/shared/MobileAppTitle";
import SWRConfigContext from "@/contexts/SWRConfigContext";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Princeton SLF",
    template: "Princeton SLF | %s",
  },
  description:
    "Official Website of Princeton Spotted Lanternfly (SLF) Initiative Group",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={rubik.className}>
      <body
        className="relative flex flex-col 
        max-w-screen-figma w-full overflow-x-hidden"
      >
        <header className="sticky lg:static top-0 z-50">
          <div className="w-[80%] mx-auto">
            <Header />
          </div>
        </header>

        <main className="w-full max-w-screen-lg mx-auto grow">
          <MobileAppTitle />
          <SWRConfigContext>
            <div className="px-10 xl:px-5 h-full pb-10 mb-10">{children}</div>
          </SWRConfigContext>
        </main>

        <footer className="w-screen bottom-0">
          <div className="mx-auto">
            <Footer />
          </div>
        </footer>

        {/* portal for members page modal */}
        <div id="portal" />
      </body>
    </html>
  );
}
