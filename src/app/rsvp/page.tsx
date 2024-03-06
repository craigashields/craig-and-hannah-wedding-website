import { notFound } from "next/navigation";
import RsvpResponse from "../components/rsvp/rsvp-reponse";
import Link from "next/link";

export const runtime = "edge";

export default async function RsvpPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { party } = searchParams as { [key: string]: string };
  const res = await fetch(
    `${process.env.API_HOST}/api/rsvp/getParty/${party}`,
    { cache: "no-store" }
  );
  let guestData;
  if (res.ok) {
    guestData = await res.json();
  }

  return (
    <>
      <section className="w-full h-full bg-secondary opacity-95 flex flex-col items-center justify-center text-center">
        <div
          style={{
            paddingTop: "var(--element-start-after-navbar)",
          }}
          className="h-dvh w-full px-4 mx-auto"
        >
          {guestData.length === 0 ? (
            <div>
              <p className="mb-4">Sorry we couldn't find your party.</p>
              <div className="pt-6">
                <Link
                  className="transition-colors ease-in-out duration-300 px-6 text-sm md:text-base mt-10 bg-none border-solid border-2 border-primary text-primary uppercase w-2/4 py-2 hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
                  href="/"
                >
                  Try Again
                </Link>
              </div>
            </div>
          ) : (
            <RsvpResponse guests={guestData}></RsvpResponse>
          )}
        </div>
      </section>
    </>
  );
}
