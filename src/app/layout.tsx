import type { Metadata } from "next";
import "./styles/globals.css";
import { blackMango, poppins } from "./styles/fonts";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Craig and Hannah Wedding",
  description: "Website for dedicated to the wedding of Craig and Hannah",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${blackMango.variable} ${poppins.variable} text-typography scroll-smooth`}
    >
      <body id="top" className="bg-white min-h-dvh flex flex-col">
        {/* {children} */}
        <NavBar></NavBar>
        <main className="mb-auto">{children}</main>
        <Toaster />
        <Footer></Footer>
      </body>
    </html>
  );
}
