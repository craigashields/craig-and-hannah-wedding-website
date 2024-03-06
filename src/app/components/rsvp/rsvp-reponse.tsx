import { RsvpGuestRecord } from "@/xata";
import RSVPGuestResponses from "./rsvp-response-form";

interface RsvpResponseProps {
  guests: RsvpGuestRecord[];
}

export default function RsvpResponse(props: RsvpResponseProps) {
  return (
    <div className=" flex justify-center align-middle space-y-8 w-full ">
      <div className="flex-1 max-w-xl bg-white py-8 px-2 md:px-8 rounded-md">
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl md:text-4xl font-medium text-primary font-poppins">
              Guests
            </h3>
          </div>
          <div
            data-orientation="horizontal"
            role="none"
            className="shrink-0 bg-border h-[1px] w-full"
          ></div>
          <RSVPGuestResponses guests={props.guests}></RSVPGuestResponses>
        </div>
      </div>
    </div>
  );
}
