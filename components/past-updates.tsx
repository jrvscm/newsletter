"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { PastUpdate } from "@/lib/data";

type PastUpdatesProps = {
  items: PastUpdate[];
};

export function PastUpdates({ items }: PastUpdatesProps) {
  return (
    <Accordion defaultValue={[]} className="rounded-lg border border-border bg-card px-2">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="px-2 text-left font-serif text-base font-medium text-foreground hover:no-underline">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="px-2">
            <p className="pb-2 text-sm leading-relaxed text-muted-foreground">
              {item.summary}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
