import { NextResponse } from "next/server";
import { z } from "zod";
import RsvpEmail from "@/emails/Rsvp";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
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
  guest_name: string;
  attending: boolean;
  dietary_requirements: string;
  rsvp_date: string;
};

const requestSchema = z.array(
  z.object({
    id: z.string(),
    guest_name: z.string(),
    attending: z.boolean(),
    dietary_requirements: z.string(),
    rsvp_date: z.string(),
  })
);

export async function POST(
  req: Request,
  res: NextResponse<Response | ErrorResponse>
) {
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

    const responseDate = new Date();

    const { data, error } = await resend.emails.send({
      from: "Hannah and Craig <response@hannahandcraigwedding.com>",
      to: ["craig.a.shields84@gmail.com", "hanjanebrooks@gmail.com"],
      subject: "Guests have Responded",
      react: RsvpEmail({
        coupleName: "Hannah and Craig",
        responseDate: responseDate,
        guests: body,
      }),
    });

    if (error) {
      return new NextResponse(
        JSON.stringify({
          errorMessage: error,
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
