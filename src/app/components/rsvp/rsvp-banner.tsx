"use client";

import { RsvpPartyRecord } from "@/xata";
import RSVPSearch from "./rsvp-search";
import { useState } from "react";
import RsvpParty from "./rsvp-party";

export default function RSVPBanner() {
  const [search, setSearch] = useState(true);
  const [partyRSVP, setPartyRSVP] = useState<RsvpPartyRecord[] | null>(null);
  const [recordCount, setRecordCount] = useState(0);

  function searchResults(
    search: boolean,
    partyInfo: RsvpPartyRecord[] | null,
    totalCount: number
  ) {
    if (totalCount > 0) {
      setSearch(search);
    }
    setPartyRSVP(partyInfo);
    setRecordCount(totalCount);
  }

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
      <div className="w-full px-4 mx-auto ">
        <div className="flex justify-center items-center align-middle text-center">
          <div className="bg-white text-center w-full md:w-3/4 p-6">
            <div className="flex flex-col align-middle items-center justify-center text-center">
              <h2 className="pb-2 relative mx-0 my-2.5 text-secondary  font-poppins text-4xl sm:text-3xl md:text-6xl lg:text-6xl before:absolute before:content-[''] before:w-6/12 before:h-0.5 before:bottom-0 before:left-1/4 before:border-b-2 before:border-primary">
                RSVP
              </h2>
              <p className="text-gray-500 pt-5 font-bold text-base sm:text-base md:text-lg lg:text-lg ">
                By 15<span className="align-super text-xs">th</span> May 2024
              </p>
              <div className="pt-6 flex justify-center w-full">
                {recordCount == 0 ? (
                  <RSVPSearch searchResults={searchResults} />
                ) : recordCount > 0 &&
                  partyRSVP &&
                  partyRSVP[0]?.party_name != null ? (
                  <RsvpParty
                    partyName={partyRSVP[0].party_name}
                    partyId={partyRSVP[0].id}
                    searchResults={searchResults}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
