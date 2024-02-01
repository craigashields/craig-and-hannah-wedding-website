"use client";
import { schedule, dressCode } from "../data/schedule";
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

export default function Schedule() {
  const [isShowing, setIsShowing] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowing(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    let html = document.querySelector("html");

    if (html) {
      if (isShowing && html) {
        html.style.overflowY = "hidden";

        const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

        const modal = document.querySelector("#modal"); // select the modal by it's id
        if (!modal) {
          setIsShowing(false);
          return;
        }
        const firstFocusableElement = modal.querySelectorAll(
          focusableElements
        )[0] as HTMLElement; // get first element to be focused inside modal

        const focusableContent = modal.querySelectorAll(focusableElements);

        const lastFocusableElement = focusableContent[
          focusableContent.length - 1
        ] as HTMLElement; // get last element to be focused inside modal

        document.addEventListener("keydown", function (e) {
          if (e.keyCode === 27) {
            setIsShowing(false);
          }

          let isTabPressed = e.key === "Tab" || e.keyCode === 9;

          if (!isTabPressed) {
            return;
          }

          if (e.shiftKey) {
            // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus(); // add focus for the last focusable element
              e.preventDefault();
            }
          } else {
            // if tab key is pressed
            if (document.activeElement === lastFocusableElement) {
              // if focused has reached to last focusable element then focus first focusable element after pressing tab
              firstFocusableElement.focus(); // add focus for the first focusable element
              e.preventDefault();
            }
          }
        });

        firstFocusableElement.focus();
      } else {
        html.style.overflowY = "visible";
      }
    }
  }, [isShowing]);

  return (
    <section
      id="schedule"
      className=" container-none mx-auto py-10 sm:py-16 lg:py-16 xl:py-16 2xl:py-16 bg-secondary "
    >
      <div className="flex flex-col align-middle items-center justify-center text-center pb-8">
        <h2 className="text-white pb-2 relative mx-0 my-2.5 text-secondary font-poppins text-4xl sm:text-4xl md:text-6xl lg:text-6xl before:absolute before:content-[''] before:w-6/12 before:h-0.5 before:bottom-0 before:left-1/4 before:border-b-2 before:border-primary">
          SCHEDULE
        </h2>
      </div>
      <div className="container mx-auto px-8 sm:px-16 md:px-28 lg:px-36 xl:px-44 2xl:px-44 3xl:px-48 text-white">
        <ul
          aria-label="Changelog feed"
          role="feed"
          className="relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 "
        >
          {schedule.map((stage) => (
            <li
              role="article"
              key={stage.type}
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-primary before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-4">
                <h4 className="text-lg font-bold text-primary">
                  {stage.type}{" "}
                  <span className="text-lg font-normal text-white">
                    {" "}
                    : {stage.time}
                  </span>{" "}
                </h4>
                {/* <h3 className="text-lg font-normal text-primary">
                  {stage.guestType}
                </h3> */}
                <p className=" text-white">{stage.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-col align-middle items-center justify-center text-center py-8">
          <button
            onClick={() => setIsShowing(true)}
            className="mt-6 bg-none border-solid border-2 border-primary text-primary uppercase py-2 px-2 hover:border-primary hover:text-primary"
          >
            <span>DRESS CODE</span>
          </button>
          {isShowing && typeof document !== "undefined"
            ? ReactDOM.createPortal(
                <div
                  className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
                  aria-labelledby="header-3a content-3a"
                  aria-modal="true"
                  tabIndex={-1}
                  role="dialog"
                >
                  {/*    <!-- Modal --> */}
                  <div
                    ref={wrapperRef}
                    className="flex max-h-[90vh] w-11/12 max-w-xl flex-col gap-6 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
                    id="modal"
                    role="document"
                  >
                    {/*        <!-- Modal header --> */}
                    <header id="header-3a" className="flex items-center gap-4">
                      <h3 className="flex-1 text-xl font-medium text-slate-700">
                        UGH... DRESS CODES?
                      </h3>
                      <button
                        onClick={() => setIsShowing(false)}
                        className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide text-white transition duration-300 bg-secondary hover:bg-secondary hover:text-white focus:bg-secondary focus:text-white focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
                        aria-label="close dialog"
                      >
                        <span className="relative only:-mx-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            role="graphics-symbol"
                            aria-labelledby="title-79 desc-79"
                          >
                            <title id="title-79">Icon title</title>
                            <desc id="desc-79">
                              A more detailed description of the icon
                            </desc>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </span>
                      </button>
                    </header>
                    {/*        <!-- Modal body --> */}
                    <div id="content-3a" className="flex-1 overflow-auto">
                      <p className="prose">{dressCode.description}</p>
                    </div>
                  </div>
                </div>,
                document.body
              )
            : null}
        </div>
      </div>
    </section>
  );
}
