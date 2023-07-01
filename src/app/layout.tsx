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
      <body className="max-w-screen-[1440px] w-full overflow-auto">
        <header className="top-0 z-10 bg-yellow-100">
          <div className="w-[80%] mx-auto">
            <Header />
          </div>
        </header>
        <main className="w-full grow max-w-screen-xl">{children}</main>
        <footer className="w-full bottom-0 fixed">
          <div className="mx-auto bg-green-200">
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  );
}
