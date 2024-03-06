import { NextResponse } from "next/server";
import { z } from "zod";
import { getXataClient } from "@/xata";

export const dynamic = "force-dynamic";

type ValidationErrors = {
  path: string;
  message: string;
};
type ErrorResponse = {
  errorMessage: string;
  validationErrors?: ValidationErrors[];
};

type Guest = {
  id: string;
  attending: boolean;
  dietary_requirements: string;
  rsvp_date: string;
};

const requestSchema = z.array(
  z.object({
    id: z.string(),
    attending: z.boolean(),
    dietary_requirements: z.string(),
    rsvp_date: z.string(),
  })
);

export async function PATCH(
  req: Request,
  res: NextResponse<Response | ErrorResponse>
) {
  const xataClient = getXataClient();

  try {
    const body: Guest[] = await req.json();

    // validation based on zod schema
    const validation = requestSchema.safeParse(body);

    if (!validation.success) {
      const validationErrors: z.ZodError = validation.error;

      const err = validationErrors.issues.map((e) => ({
        path: e.path[0],
        message: e.message,
      }));

      return new NextResponse(
        JSON.stringify({
          errorMessage: "validation failure",
          validationErrors: err,
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

    const transformedArray: Array<{
      update: { table: "rsvp_guest"; id: string; fields: Partial<Guest> };
    }> = body.map((guest) => ({
      update: {
        table: "rsvp_guest", // Use the specific table name as defined in your DatabaseSchema
        id: guest.id,
        fields: {
          attending: guest.attending,
          dietary_requirements: guest.dietary_requirements,
          rsvp_date: guest.rsvp_date,
        },
      },
    }));
    const res = await xataClient.transactions.run(transformedArray);

    return NextResponse.json(res, {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        errorMessage: "Internal Server Error. Please try again later. ",
      },
      {
        status: 500,
      }
    );
  }
}
