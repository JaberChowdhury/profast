"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const Faq = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 text-center space-y-8">
      <h2 className="text-4xl font-bold">Frequently Asked Question (FAQ)</h2>
      <p className="text-slate-500 text-base">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="text-left space-y-2"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How does this posture corrector work?
          </AccordionTrigger>
          <AccordionContent className="bg-blue-50 border border-blue-300 rounded-lg p-4 text-slate-700">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            Is it suitable for all ages and body types?
          </AccordionTrigger>
          <AccordionContent>
            Yes, our posture corrector is designed to fit all body types and age
            groups comfortably.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            Does it really help with back pain and posture improvement?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely! Consistent use helps relieve back pain and trains your
            body for better posture.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            Does it have smart features like vibration alerts?
          </AccordionTrigger>
          <AccordionContent>
            Yes, some models include smart sensors for posture correction
            alerts.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            How will I be notified when the product is back in stock?
          </AccordionTrigger>
          <AccordionContent>
            You can sign up for restock notifications through email on the
            product page.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="pt-6">
        <Button className="bg-lime-400 text-black text-lg px-6 py-3 rounded-full hover:bg-lime-500">
          See More FAQ’s <ArrowUpRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Faq;
