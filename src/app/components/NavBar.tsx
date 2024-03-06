"use client";
import React, { useEffect, useState } from "react";
import headerNavLinks from "../data/headerNavLinks";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsScrolling(position > 50); // Change '50' to the scroll threshold you prefer
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/*<!-- Header --> */}
      <header
        className={`font-poppins-200 font-extralight fixed z-10 w-full border-slate-200 ${
          isScrolling || isToggleOpen
            ? "bg-black bg-opacity-50"
            : "bg-opacity-100 "
        } transition-spacing duration-500 ease-in-out after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full  lg:border-slate-200 lg:after:hidden`}
      >
        <div
          className={`${
            isScrolling ? "" : "border-b"
          } border-white/40 relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]`}
        >
          <nav
            style={{ height: "var(--navbar-height)" }}
            aria-label="main navigation"
            className="flex items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full ${
                    isToggleOpen ? "bg-slate-900" : "bg-white"
                  }  transition-all duration-300`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-6 transform rounded-full ${
                    isToggleOpen ? "bg-slate-900" : "bg-white"
                  } transition duration-300`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full ${
                    isToggleOpen ? "bg-slate-900" : "bg-white"
                  } transition-all duration-300`}
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0 text-white"
              }`}
            >
              {headerNavLinks.map((link) => (
                <li
                  role="none"
                  key={link.title}
                  className="flex items-stretch uppercase"
                >
                  <a
                    role="menuitem"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:border-b focus:outline-none focus-visible:outline-none lg:px-8"
                    href={link.href}
                  >
                    <span>{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div
              className={`ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0 ${
                pathname === "/rsvp" ? "invisible" : ""
              }`}
            >
              <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  href="/#rsvp"
                  className={`transform ease-in-out hover:-translate-y-1 hover:scale-110 inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded ${
                    isScrolling ? "bg-primary" : "bg-secondary"
                  }  px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-secondary hover:shadow-sm focus:bg-secondary focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none`}
                >
                  <span>RSVP</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar with Topbar--> */}
    </>
  );
}
