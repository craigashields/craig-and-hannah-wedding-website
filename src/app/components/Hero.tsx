export default function Hero() {
  return (
    <div className="daisy-hero min-h-screen hero-bg">
      <div className="daisy-hero-overlay bg-opacity-10"></div>
      <div className="daisy-hero-content text-center text-neutral-content flex-col">
        <div className="max-w-md">
          <h1 className="font-bold font-blackMango text-5xl sm:text-5xl md:text-6xl lg:text-8xl uppercase">
            Hannah
            <div className="and text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-secondary lowercase font-augustScript">
              and
            </div>
            Craig
          </h1>
          <h2 className=" mb-5 mt-5 text-xl sm:text-xl md:text-1xl lg:text-2xl uppercase">
            Are Getting Married
          </h2>
        </div>
        <div className="absolute bottom-10 w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-white text-lg font-thin">
          Scroll for More
        </div>
      </div>
    </div>
  );
}
