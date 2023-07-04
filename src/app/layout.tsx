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
      <body className="flex flex-col max-w-screen-[1440px] w-full overflow-auto">
        <header className="top-0 z-10">
          <div className="w-[80%] mx-auto">
            <Header />
          </div>
        </header>
        <main className="w-full max-w-screen-lg mx-auto grow">
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
