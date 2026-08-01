"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GolfProCard } from "@/components/golf-pro-card";
import { GroundsSection } from "@/components/grounds-section";
import type { PastUpdate } from "@/lib/data";

type PastUpdatesProps = {
  items: PastUpdate[];
};

export function PastUpdates({ items }: PastUpdatesProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <Accordion defaultValue={[]} className="rounded-lg border border-border bg-card px-2">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="px-2 text-left font-serif text-base font-medium text-foreground hover:no-underline">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="px-2">
            <div className="space-y-8 pb-2">
              <GolfProCard
                message={item.golfProMessage}
                images={item.golfProImages}
              />
              <GroundsSection blocks={item.groundsBlocks} />
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
