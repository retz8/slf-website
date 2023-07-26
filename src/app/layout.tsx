import Header from "@/components/Header/Header";
import "./globals.css";
import { rubik } from "@/utils/fonts/globalFont";
import Footer from "@/components/Footer/Footer";
import SWRConfigContext from "@/hooks/SWRConfigContext";

export const metadata = {
  title: "SLF Website",
  description: "SLF Campaign Website",
};

// max-w-screen 1440px on Figma file

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={rubik.className}>
      <body className="relative flex flex-col max-w-screen-[1440px] w-full overflow-x-hidden">
        <header className="sticky lg:static top-0 z-20">
          <div className="w-[80%] mx-auto">
            <Header />
          </div>
        </header>
        <main className="w-full max-w-screen-lg mx-auto grow">
          <div className="absolute top-0 py-12 ml-10">
            <h1 className="lg:hidden text-xl font-[500]">
              Princeton SLF Initiative
            </h1>
          </div>

          <SWRConfigContext>{children}</SWRConfigContext>
        </main>
        <footer className="w-full bottom-0">
          <div className="mx-auto">
            <Footer />
          </div>
        </footer>

        <div id="portal" />
      </body>
    </html>
  );
}
