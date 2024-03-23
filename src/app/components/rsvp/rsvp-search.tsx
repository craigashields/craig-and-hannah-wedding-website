"use client";
import React, { useState } from "react";
import { RsvpPartyRecord } from "@/xata";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useFormStatus } from "react-dom";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

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
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  partyname: z.string().min(3, {
    message: "Party Name must be at least 5 characters.",
  }),
});

interface RSVPSearchProps {
  searchResults: (
    searching: boolean,
    partyInfo: RsvpPartyRecord[] | null,
    totalCount: number
  ) => void;
}

export default function RSVPSearch({ searchResults }: RSVPSearchProps) {
  const [loading, setLoading] = useState(false);
  const { pending } = useFormStatus();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      partyname: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/rsvp/searchParty?query=${values.partyname}`
      );
      if (res.ok) {
        const data = await res.json();
        if (data.totalCount == 0) {
          toast({
            description: "Sorry we weren't able to find your party.",
            action: (
              <ToastAction className="hover:text-white" altText="Try again">
                Try again
              </ToastAction>
            ),
          });
        }
        searchResults(false, data.records, data.totalCount);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full max-w-sm items-center space-x-2 "
      >
        <FormField
          control={form.control}
          name="partyname"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel className="text-black">
                Enter Your Party Name
              </FormLabel> */}
              <FormControl>
                <Input
                  className="text-black text-md hover:ring-offset-2 hover:ring-2 hover:ring-accent focus:ring-offset-2 focus:ring-2 focus:ring-accent"
                  placeholder="Enter Party Name"
                  {...field}
                />
              </FormControl>
              <FormDescription>This is the name on the invite.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={pending}>
          {loading ? "Searching..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
