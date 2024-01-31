import type { Metadata } from "next";
import "./styles/globals.css";
import { blackMango, poppins } from "./styles/fonts";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

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
      <body id="top">
        <NavBar></NavBar>
        <main className="mb-auto">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
