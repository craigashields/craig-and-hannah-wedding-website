import { siteMetadata } from "../data/siteMetadata";

export default function Footer() {
  return (
    <footer className="bg-white m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-4 flex flex-col justify-center items-center">
        <div className=" w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-white text-lg font-thin">
          <a href="#top">
            <svg
              className="w-8 h-8 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m5 15 7-7 7 7"
              />
            </svg>
          </a>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto " />
      <span className="block text-sm text-gray-500 text-center ">
        {"We can't wait to see you there!"}
      </span>
    </footer>
  );
}
