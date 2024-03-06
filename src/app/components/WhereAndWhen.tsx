import Link from "next/link";
import { siteMetadata } from "../data/siteMetadata";
export default function WhereAndWhen() {
  return (
    <section
      id="whenandwhere"
      className="container-none mx-auto py-10 sm:py-16 lg:py-16 xl:py-16 2xl:py-16 bg-neutral-100"
    >
      <div className="grid grid-cols-1 xl:mx-20 gap-8 md:gap:4 lg:gap-4 xl:gap-4 p-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div className="flex flex-col align-middle items-center justify-center text-center">
          <div className="pb-4">
            <svg
              className="w-8 h-8 text-primary "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z"
              />
            </svg>
          </div>
          <h2 className="pb-2 relative mx-0 my-2.5 text-secondary font-poppins text-4xl sm:text-4xl md:text-6xl lg:text-6xl before:absolute before:content-[''] before:w-6/12 before:h-0.5 before:bottom-0 before:left-1/4 before:border-b-2 before:border-primary">
            WHEN
          </h2>
          <p className="text-gray-500 pt-5 font-bold text-base sm:text-base md:text-lg lg:text-lg ">
            14<span className="align-super text-xs">th</span> September 2024
          </p>
          <p className="text-gray-500 pt-2 ">A SATURDAY</p>
          <Link
            className="text-sm md:text-base mt-6 bg-none border-solid border-2 border-secondary text-secondary uppercase w-2/4 py-2 hover:border-primary hover:text-primary"
            href={siteMetadata.calendarInvite}
            rel="noopener noreferrer"
            target="_blank"
          >
            ADD TO CALENDAR
          </Link>
        </div>
        <div className="flex flex-col align-middle items-center justify-center text-center">
          <div className="pb-4">
            <svg
              className="w-8 h-8 text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 21"
            >
              <g
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z" />
              </g>
            </svg>
          </div>
          <h2 className="pb-2  relative mx-0 my-2.5 text-secondary font-poppins text-4xl sm:text-4xl md:text-6xl lg:text-6xl before:absolute before:content-[''] before:w-6/12 before:h-0.5 before:bottom-0 before:left-1/4 before:border-b-2 before:border-primary">
            WHERE
          </h2>
          <p className="text-gray-500 pt-5 font-bold text-base sm:text-base md:text-lg lg:text-lg ">
            Nantwich, Cheshire
          </p>
          <p className="text-gray-500 pt-2 ">AT THE CHESTNUTS</p>
          <Link
            className="text-sm md:text-base mt-6 bg-none border-solid border-2 border-secondary text-secondary uppercase w-2/4 py-2 hover:border-primary hover:text-primary"
            href="https://www.google.com/maps/place/Hollin+Green+Ln,+Nantwich/@53.0676321,-2.6086262,17z/data=!3m1!4b1!4m6!3m5!1s0x487af25a593ad171:0x8c660b11e1286914!8m2!3d53.0676289!4d-2.6060513!16s%2Fg%2F1v1sks2k?entry=ttu"
            rel="noopener noreferrer"
            target="_blank"
          >
            SEE ON MAP
          </Link>
        </div>
      </div>
    </section>
  );
}
