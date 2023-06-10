import Header from "@/components/Header/Header";
import "./globals.css";
import { rubik } from "@/utils/fonts/globalFont";
import Footer from "@/components/Footer/Footer";
import SWRConfigContext from "@/hooks/SWRConfigContext";

export const metadata = {
  title: "SLF Website",
  description: "SLF Campaign Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={rubik.className}>
      <body className="flex flex-col w-full max-w-screen-[1440px] mx-auto overflow-visible">
        <header className="top-0 z-10 fixed w-full">
          <Header />
        </header>

        <main className="mt-[100px] lg:mt-[200px] grow">
          <SWRConfigContext>{children}</SWRConfigContext>
        </main>
        <footer className="bg-[#69594E] w-full">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
