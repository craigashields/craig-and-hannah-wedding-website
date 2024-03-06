import Link from "next/link";
import { accommodation } from "../data/accommodation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ZooImage from "../../../public/static/images/pairi_daiza_zoo.png";

export default function Registry() {
  return (
    <section
      id="registry"
      className=" container-none mx-auto py-10 sm:py-16 lg:py-16 xl:py-16 2xl:py-16 bg-neutral-100"
    >
      <div className="daisy-hero-overlay bg-opacity-50"></div>
      <div className="flex flex-col align-middle items-center justify-center text-center pb-8">
        <h2 className=" pb-2 relative mx-0 my-2.5 text-secondary font-poppins text-4xl sm:text-4xl md:text-6xl lg:text-6xl before:absolute before:content-[''] before:w-6/12 before:h-0.5 before:bottom-0 before:left-1/4 before:border-b-2 before:border-primary">
          REGISTRY
        </h2>
      </div>
      {/* <div className="grid grid-cols-1 xl:mx-20 gap-8 md:gap:4 lg:gap-4 xl:gap-4 p-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"> */}
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-5 flex flex-col align-middle items-center justify-between text-center">
            <div className="overflow-hidden pb-4">
              <Image
                src={ZooImage}
                alt={accommodation[0].name}
                width={400}
                height={400}
                sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
                className={cn("aspect-square rounded-full object-cover")}
              />
            </div>
          </div>
          <div className="col-span-4 lg:col-span-7 flex items-center justify-between ">
            <div className="text-center">
              <p className="text-gray-700 pt-2 px-2 sm:px-10 md:px-10 text-base">
                Your presence at our wedding is the greatest gift of all, and we
                truly mean that. We understand that times are challenging for
                many, and we want you to know that there is no expectation of a
                gift. Your support and love are already more than we could ask
                for.
              </p>
              <p className="text-gray-700 pt-6 px-2 sm:px-10 md:px-10 text-base">
                However, for those who wish to offer something, we would be
                deeply grateful for a contribution towards giving the kids an
                unforgettable adventure at Pairi Daiza Zoo. Any contribution to
                this special experience would be cherished and greatly
                appreciated.
              </p>
              <p className="text-gray-700 pt-6 px-2 sm:px-10 md:px-10 text-base">
                Thank you for being a part of our lives and celebrating this
                joyous occasion with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
