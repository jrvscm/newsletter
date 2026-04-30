"use client";

import { useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TournamentEventHover } from "@/components/tournament-event-hover";
import type { CalendarMonth } from "@/lib/calendar";
import { sortCalendarEventsByDay } from "@/lib/calendar";
import { isRecurringPlayDayId } from "@/lib/calendar-expand";

type TournamentCalendarProps = {
  year: number;
  months: CalendarMonth[];
  /** Omitted outer `Card` — use with a parent shell (e.g. calendar + list toggle). */
  embedded?: boolean;
};

/** Which accordion panels start open: this calendar month + the next, when both exist. */
function getDefaultOpenMonthKeys(months: CalendarMonth[]): string[] {
  const valid = new Set(months.map((m) => m.key));
  const calMonth = new Date().getMonth() + 1; // 1–12 (Jan=1)
  const keyByCalMonth: Record<number, string> = {
    4: "april",
    5: "may",
    6: "june",
    7: "july",
    8: "august",
    9: "september",
    10: "october",
  };

  if (calMonth < 4) {
    return [months[0]?.key, months[1]?.key].filter(
      (k): k is string => Boolean(k && valid.has(k))
    );
  }
  if (calMonth > 10) {
    return [months[months.length - 2]?.key, months[months.length - 1]?.key].filter(
      (k): k is string => Boolean(k && valid.has(k))
    );
  }

  const currentKey = keyByCalMonth[calMonth];
  if (!currentKey || !valid.has(currentKey)) {
    return [months[0]?.key, months[1]?.key].filter(
      (k): k is string => Boolean(k && valid.has(k))
    );
  }
  if (calMonth === 10) {
    return [currentKey].filter((k) => valid.has(k));
  }
  const nextKey = keyByCalMonth[calMonth + 1];
  if (!nextKey || !valid.has(nextKey)) {
    return [currentKey];
  }
  return [currentKey, nextKey];
}

export function TournamentCalendar({
  year,
  months,
  embedded = false,
}: TournamentCalendarProps) {
  const defaultOpenKeys = useMemo(
    () => getDefaultOpenMonthKeys(months),
    [months]
  );

  const body = (
    <Accordion
      multiple
      defaultValue={defaultOpenKeys}
      className={embedded ? "w-full border-t border-border" : "w-full"}
    >
          {months.map((month) => (
            <AccordionItem
              key={month.key}
              value={month.key}
              className="border-b border-border last:border-b-0"
            >
              <AccordionTrigger
                className="px-4 py-3 text-left font-serif text-sm font-medium text-foreground hover:no-underline sm:px-5"
                id={`month-${month.key}`}
              >
                <span className="flex w-full min-w-0 items-baseline justify-between gap-2 pr-1">
                  <span>
                    {month.label} {year}
                  </span>
                  <span className="shrink-0 text-xs font-normal text-muted-foreground">
                    {month.events.length}{" "}
                    {month.events.length === 1 ? "event" : "events"}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-0 pb-0">
                <ul
                  className="divide-y divide-border border-t border-border"
                  role="list"
                  aria-label={`Events in ${month.label} ${year}`}
                >
                  {sortCalendarEventsByDay(month.events).map((ev) => (
                    <li key={ev.id} className="px-4 py-3 sm:px-5" role="listitem">
                      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:gap-4">
                        <p className="shrink-0 font-mono text-sm tabular-nums text-primary sm:w-16">
                          {ev.days}
                        </p>
                        <div className="min-w-0 flex-1">
                          <TournamentEventHover
                            variant="list"
                            label={ev.title}
                            fullTitle={ev.fullTitle?.trim() || ev.title}
                            detail={ev.detail}
                            flyerUrl={ev.flyerUrl}
                            registrationUrl={ev.registrationUrl}
                            isRecurring={isRecurringPlayDayId(ev.id)}
                            textClassName="text-sm font-medium leading-snug text-foreground"
                            hideDetailInTooltip
                          />
                          {ev.detail ? (
                            <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                              {ev.detail}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
  );

  if (embedded) {
    return body;
  }

  return (
    <Card className="overflow-hidden border border-border shadow-none ring-0">
      <CardHeader className="border-b border-border bg-muted/30 px-4 py-3 sm:px-5 sm:py-4">
        <CardTitle className="font-serif text-base font-medium text-foreground">
          {year} season
        </CardTitle>
        <p className="text-xs text-muted-foreground">
          Events, outings, and recurring play. Formats and times are subject
          to the pro shop schedule.
        </p>
      </CardHeader>
      <CardContent className="p-0">{body}</CardContent>
    </Card>
  );
}
