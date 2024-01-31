export default function RSVPBanner() {
  return (
    <section
      id="rsvp"
      className="daisy-hero bg-contain bg-repeat min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.postimg.cc/nrrDSf8m/rm300-pattern-baifern-01-a.jpg)",
      }}
    >
      <div className="daisy-hero-overlay bg-opacity-10"></div>
      <div className="container mx-auto pt-24 pb-24">
        <div className="flex justify-center items-center align-middle text-center">
          <div className="bg-white text-center w-2/4 p-10">
            <div className="flex flex-col align-middle items-center justify-center text-center">
              <h2 className="pb-2 relative mx-0 my-2.5 text-secondary  font-poppins text-4xl sm:text-3xl md:text-6xl lg:text-6xl before:absolute before:content-[''] before:w-6/12 before:h-0.5 before:bottom-0 before:left-1/4 before:border-b-2 before:border-primary">
                RSVP
              </h2>
              <p className="text-gray-500 pt-5 font-bold text-base sm:text-base md:text-lg lg:text-lg ">
                By 1<span className="align-super text-xs">st</span> April 2024
              </p>
              {/* <h1 className="pb-2 relative mx-0 my-2.5 text-secondary font-bold font-blackMango text-4xl sm:text-3xl md:text-6xl lg:text-6xl before:absolute before:content-[''] before:w-6/12 before:h-0.5 before:bottom-0 before:left-1/4 before:border-b-2 before:border-primary">
              RSVP
            </h1>*/}
              <p className="text-gray-500 pb-10 pt-10 items-center p-28">
                Please come to our wedding! Add functionality to route to RSVP
                page. Fix underline and auto-grow
              </p>
              <button className="mt-6 bg-primary text-white border-none text-base cursor-pointer uppercase px-8 py-4">
                RSVP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <div
    //   className="daisy-hero min-h-screen"
    //   style={{
    //     backgroundImage:
    //       "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
    //   }}
    // >
    //   <div className="daisy-hero-overlay bg-opacity-60"></div>
    //   <div className="daisy-hero-content text-center text-neutral-content align-middle items-center justify-center ">
    //     <div className="max-w-md bg-white py-28 w-4/4">
    //       <h2 className="pb-2 relative mx-0 my-2.5 text-secondary font-bold font-blackMango text-4xl sm:text-3xl md:text-6xl lg:text-6xl before:absolute before:content-[''] before:w-6/12 before:h-0.5 before:bottom-0 before:left-1/4 before:border-b-2 before:border-primary">
    //         RSVP
    //       </h2>
    //       <p className="mb-5">
    //         Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
    //         excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
    //         a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut
    //         assumenda excepturi exercitationem quasi. In deleniti eaque aut
    //         repudiandae et a id nisi. Provident cupiditate voluptatem et in.
    //         Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
    //         deleniti eaque aut repudiandae et a id nisi. Provident cupiditate
    //         voluptatem et in. Quaerat fugiat ut assumenda excepturi
    //         exercitationem quasi. In deleniti eaque aut repudiandae et a id
    //         nisi.
    //       </p>
    //       <button className="mt-6 bg-none border-solid border-2 border-secondary text-secondary uppercase w-2/4 py-2">
    //         RSVP
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}
