import type { Metadata } from "next";
import "./styles/globals.css";
import { blackMango } from "./styles/fonts";

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
    <html lang="en">
      <body className={`${blackMango.variable} text-typography`}>
        {children}
      </body>
    </html>
  );
}
