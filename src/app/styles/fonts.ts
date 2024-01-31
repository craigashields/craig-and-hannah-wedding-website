import localFont from "next/font/local";
import { Poppins } from "next/font/google";

const blackMango = localFont({
  src: [
    {
      path: "../../../public/static/fonts/BlackMango-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/static/fonts/BlackMango-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../../public/static/fonts/BlackMango-Thin.otf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-blackmango",
});

const augustScript = localFont({
  src: [
    {
      path: "../../../public/static/fonts/August-Script-Bold.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-august",
});

const poppins = Poppins({
  weight: ["200", "400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export { blackMango, augustScript, poppins };
