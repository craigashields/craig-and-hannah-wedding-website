import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { RsvpPartyRecord } from "@/xata";

interface RsvpPartyProps {
  partyName: string;
  partyId: string;
  searchResults: (
    searching: boolean,
    partyInfo: RsvpPartyRecord[] | null,
    totalCount: number
  ) => void;
}
export default function RsvpParty(props: RsvpPartyProps) {
  return (
    <div className="text-black relative">
      <div>
        <p className="text-slate-500 pb-2">Is this you?</p>
        <a className="pointer" href={`/rsvp?party=${props.partyId}`}>
          <Card className="hover:ring-offset-2 hover:ring-2 hover:ring-accent focus:ring-offset-2 focus:ring-2 focus:ring-accent">
            <CardHeader>
              <CardTitle className="text-base md:text-xl lg:text-3xl text-secondary">
                {props.partyName}
              </CardTitle>
            </CardHeader>
          </Card>
        </a>
      </div>
      <Button
        onClick={() => props.searchResults(true, null, 0)}
        className="text-white mt-4"
      >
        Not you? Try again!
      </Button>
    </div>
  );
}
