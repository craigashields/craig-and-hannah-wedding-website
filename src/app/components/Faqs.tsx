import React from "react";
import faqs from "../data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faqs() {
  return (
    <>
      {/*<!-- Component: Basic accordion --> */}
      <section
        id="faqs"
        className="divide-y divide-slate-200 container mx-auto py-10 sm:py-16 lg:py-16 xl:py-16 2xl:py-16 "
      >
        <div className="flex flex-col align-middle items-center justify-center text-center pb-8">
          <h2 className="pb-2 relative mx-0 my-2.5 text-secondary font-poppins text-4xl sm:text-4xl md:text-6xl lg:text-6xl before:absolute before:content-[''] before:w-6/12 before:h-0.5 before:bottom-0 before:left-1/4 before:border-b-2 before:border-primary">
            FAQS
          </h2>
        </div>
        {faqs.map((faq) => (
          <Accordion
            key={faq.question}
            className="text-black"
            type="single"
            collapsible
          >
            <AccordionItem value={faq.question}>
              <AccordionTrigger className="text-black">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-black">
                {faq.response}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </section>
      {/*<!-- End Basic accordion --> */}
    </>
  );
}
