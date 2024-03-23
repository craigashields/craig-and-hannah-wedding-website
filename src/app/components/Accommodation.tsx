import Link from "next/link";
import { accommodation } from "../data/accommodation";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Accommodation() {
  return (
    <section
      id="accommodation"
      className=" container-none mx-auto py-10 sm:py-16 lg:py-16 xl:py-16 2xl:py-16 bg-accent"
    >
      <div className="daisy-hero-overlay bg-opacity-50"></div>
      <div className="flex flex-col align-middle items-center justify-center text-center pb-8">
        <h2 className="text-white pb-2 relative mx-0 my-2.5 text-secondary font-poppins text-4xl sm:text-4xl md:text-6xl lg:text-6xl before:absolute before:content-[''] before:w-6/12 before:h-0.5 before:bottom-0 before:left-1/4 before:border-b-2 before:border-primary">
          STAY
        </h2>
      </div>
      <div className="grid grid-cols-1 xl:mx-20 gap-8 md:gap:4 lg:gap-4 xl:gap-4 p-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {accommodation.map((place) => (
          <div
            key={place.name}
            className="flex flex-col align-middle items-center justify-between text-center"
          >
            <div className="flex flex-col align-middle items-center justify-between text-center">
              <div className="overflow-hidden pb-4">
                <Image
                  src={place.image}
                  alt={place.name}
                  width={240}
                  height={240}
                  sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
                  className={cn("aspect-square rounded-full object-cover")}
                />
              </div>
              <h2 className="pb-2 relative mx-0 my-2.5 text-secondary font-poppins text-xl sm:text-3xl md:text-4xl lg:text-4xl before:absolute before:content-[''] before:w-6/12 before:h-0.5 before:bottom-0 before:left-1/4 before:border-b-2 before:border-primary">
                {place.name}
              </h2>
              {/* <p className="text-gray-700 pt-2 px-2 sm:px-10 md:px-10 md:text-sm">
                {place.description}
              </p> */}
            </div>

            <Link
              className="transition-colors ease-in-out duration-300 mt-6 bg-none border-solid border-2 border-secondary text-secondary uppercase w-2/4 py-2 hover:bg-secondary hover:text-white cursor-pointer"
              href={place.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {place.linkText}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
