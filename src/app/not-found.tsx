import { siteMetadata } from "./data/siteMetadata";

export default function Custom404() {
  return (
    <div id="hero" className="daisy-hero min-h-screen hero-bg">
      <div className="daisy-hero-overlay bg-opacity-10"></div>
      <div className="daisy-hero-content text-center flex-col">
        <div className="max-w-md">
          <h1 className="font-bold font-blackMango text-5xl sm:text-5xl md:text-6xl lg:text-8xl uppercase">
            {siteMetadata.weddingInfo.bride}
            <div className="and text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-secondary lowercase font-augustScript">
              and
            </div>
            {siteMetadata.weddingInfo.groom}
          </h1>
          <h2 className=" mb-5 mt-5 text-xl sm:text-xl md:text-1xl lg:text-2xl">
            {`Couldn't find what you were looking for`}
          </h2>
          <p className=" mb-5 mt-5 text-lg sm:text-lg md:text-xl lg:text-1xl">
            {`Go back to the home page`}
          </p>
        </div>
        <div className="absolute bottom-32 w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-white text-lg font-thin">
          <a href="/">
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
                d="m15 19-7-7 7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
