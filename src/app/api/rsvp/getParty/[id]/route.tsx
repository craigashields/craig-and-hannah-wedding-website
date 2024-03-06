import { getXataClient } from "@/xata";
import { NextRequest } from "next/server";

type Props = {
  params: {
    id: string;
  };
};

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const xataClient = getXataClient();

  try {
    if (!id) {
      return new Response(
        JSON.stringify({
          err: "Please enter a valid Id",
        }),
        {
          status: 400,
          statusText: "Bad Request",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const guests = await xataClient.db.rsvp_guest
      .filter({ party_id: id })
      .getMany();
    return new Response(JSON.stringify(guests), {
      headers: { "content-type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({
        err: "Internal Server Error",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
