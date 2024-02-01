import React from "react";
import faqs from "../data/faqs";

export default function Faqs() {
  return (
    <>
      {/*<!-- Component: Basic accordion --> */}
      <section
        id="faqs"
        className="bg-neutral-50 divide-y rounded divide-slate-200 container mx-auto py-10 sm:py-16 lg:py-16 xl:py-16 2xl:py-16 "
      >
        <div className="flex flex-col align-middle items-center justify-center text-center pb-8">
          <h2 className="pb-2 relative mx-0 my-2.5 text-secondary font-poppins text-4xl sm:text-4xl md:text-6xl lg:text-6xl before:absolute before:content-[''] before:w-6/12 before:h-0.5 before:bottom-0 before:left-1/4 before:border-b-2 before:border-primary">
            FAQS
          </h2>
        </div>
        {faqs.map((faq) => (
          <details key={faq.question} className="p-4 group">
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              {faq.question}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac01 desc-ac01"
              >
                <title id="title-ac01">Open icon</title>
                <desc id="desc-ac01">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">{faq.response}</p>
          </details>
        ))}
      </section>
      {/*<!-- End Basic accordion --> */}
    </>
  );
}
