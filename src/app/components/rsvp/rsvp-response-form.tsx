"use client";
import { RsvpGuestRecord } from "@/xata";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ZodSchema, z } from "zod";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Switch } from "@/components/ui/switch";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";
import { useState } from "react";

const generateDynamicZodSchema = (guests: RsvpGuestRecord[]) => {
  const schemaFields = guests.reduce<Record<string, ZodSchema<any>>>(
    (acc, guest) => {
      const guestId = guest.id;
      const attendingFieldKey = `${guestId}__attending`;
      const dietaryFieldKey = `${guestId}__dietary_requirements`;

      acc[attendingFieldKey] = z.boolean(); // Example field, adjust as needed.
      acc[dietaryFieldKey] = z.string().optional();

      return acc;
    },
    {}
  );

  return z.object(schemaFields);
};

const generateDefaultValues = (
  guests: RsvpGuestRecord[]
): Record<string, boolean | string> => {
  return guests.reduce<Record<string, boolean | string>>((acc, guest) => {
    const guestId = guest.id;
    const attendingFieldKey = `${guestId}__attending`;
    const dietaryFieldKey = `${guestId}__dietary_requirements`;

    //acc[guestId] = guest.attending;
    acc[attendingFieldKey] = guest.attending;
    acc[dietaryFieldKey] = guest.dietary_requirements;

    return acc;
  }, {});
};

interface RsvpResponseProps {
  guests: RsvpGuestRecord[];
}

interface FormData {
  [key: string]: boolean | string;
}

interface Guest {
  id: string;
  attending: boolean;
  dietary_requirements: string;
  rsvp_date: string;
  guest_name?: string | undefined | null;
}

export default function RSVPGuestResponses(props: RsvpResponseProps) {
  const { pending } = useFormStatus();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const dynamicZodSchema = generateDynamicZodSchema(props.guests);
  const defaultValues: Partial<FormValues> = generateDefaultValues(
    props.guests
  );

  type FormValues = z.infer<typeof dynamicZodSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(dynamicZodSchema),
    defaultValues,
  });

  function mergeGuestNames(
    baseGuests: Guest[],
    detailedGuests: RsvpGuestRecord[]
  ): Guest[] {
    return baseGuests.map((guest) => {
      const match = detailedGuests.find(
        (detailedGuest) => detailedGuest.id === guest.id
      );
      // Ensure guest_name is either a string or undefined, never null
      const guestName = match ? match.guest_name : "undefined";
      return { ...guest, guest_name: guestName };
    });
  }

  function transformFormData(formData: FormData): Guest[] {
    const guestMap: Record<string, Partial<Guest>> = {};
    Object.entries(formData).forEach(([key, value]) => {
      const [id, prop] = key.split("__", 2);
      const property = prop as "attending" | "dietary_requirements"; // Explicitly cast the property name

      if (!guestMap[id]) {
        guestMap[id] = { id, attending: false, dietary_requirements: "" }; // Initialize with default values
      }

      // TypeScript needs a bit of help to understand the dynamic property names
      // Use a more flexible approach to avoid type 'never'
      if (property === "attending" && typeof value === "boolean") {
        guestMap[id].attending = value;
      } else if (
        property === "dietary_requirements" &&
        typeof value === "string"
      ) {
        guestMap[id].dietary_requirements = value;
      }
    });

    // Generate the current datetime in YYYY-MM-DDTHH:MM:SS format
    const currentDateTime = new Date().toISOString();

    // Convert the temporary object into the desired array format,
    // ensuring all properties are correctly typed and exist.
    return Object.values(guestMap).map((guest) => ({
      ...guest,
      rsvp_date: currentDateTime,
    })) as Guest[];
  }

  async function onSubmit(data: FormValues) {
    setLoading(true);

    const requestData = transformFormData(data);
    const updateEndpoint = "/api/rsvp/updateGuestRsvp";
    const body = JSON.stringify(requestData);

    const guestData = mergeGuestNames(requestData, props.guests);
    const emailEndpoint = "/api/email/sendEmail";
    const emailBody = JSON.stringify(guestData);

    try {
      const response = await fetch(updateEndpoint, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });

      if (!response.ok) {
        // If the server responds with a bad request, parse and log the error
        const errorResponse = await response.json();
        console.error("Error updating guest status:", errorResponse);
        setLoading(false);
        toast({
          title: "Uh oh! Something went wrong.",
          description:
            "There was a problem updating your RSVP, please try again",
          action: (
            <ToastAction className="hover:text-white" altText="Try again">
              Try again
            </ToastAction>
          ),
        });

        return null; // Or handle this case as needed in your application
      }

      // Assuming your PATCH handler might return something useful
      const data = await response.json();

      const emailResponse = await fetch(emailEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: emailBody,
      });

      setLoading(false);
      toast({
        title: "Thank You!",
        description: "We can't wait to see you there.",
        action: (
          <a
            role="menuitem"
            aria-haspopup="false"
            href="/"
            className={`hover:text-white inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive`}
          >
            <span>Back to Site</span>
          </a>
        ),
      });
    } catch (error) {
      console.error("Failed to update guest status due to an error:", error);
      setLoading(false);
      return null; // Or handle errors as appropriate for your application
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <div className="space-y-4">
            {props.guests.map((guest) => (
              <div
                key={`${guest.id}__attending`}
                className="rounded-lg border border-slate-400 p-4"
              >
                <div className="text-lg text-left font-bold pb-2 text-primary font-poppins">
                  {guest.guest_name}
                </div>
                <FormField
                  key={`${guest.id}__attending`}
                  control={form.control}
                  name={`${guest.id}__attending`}
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between ">
                      <div className="space-y-0.5">
                        <FormLabel className="text-sm text-slate-800 text-left">
                          Attending?
                        </FormLabel>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  key={`${guest.id}__dietary_requirements`}
                  control={form.control}
                  name={`${guest.id}__dietary_requirements`}
                  render={({ field }) => (
                    <FormItem className="flex flex-col justify-between pt-2">
                      <div className="space-y-0.5 text-left">
                        <FormLabel className="text-sm text-slate-800 text-left">
                          Dietary Requirements:
                        </FormLabel>
                      </div>
                      <FormControl>
                        <Input
                          className="text-slate-700"
                          placeholder="Any dietary requirements"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </div>
        </div>
        <Button type="submit" disabled={pending}>
          {loading ? "Updating..." : "Update RSVP"}
        </Button>
      </form>
    </Form>
  );
}
