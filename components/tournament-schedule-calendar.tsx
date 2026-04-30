"use client";

import { useMemo, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  buildTournamentEventMap,
  isSeasonViewMonth,
  SEASON_MONTH_RANGE,
  type PlottedTournamentEvent,
} from "@/lib/calendar-expand";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PlottedTournamentEventLabelCell } from "@/components/tournament-event-hover";
import { cn } from "@/lib/utils";
import type { CalendarMonth } from "@/lib/calendar";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getDefaultVisibleMonth0(seasonYear: number): number {
  const now = new Date();
  const y = now.getFullYear();
  const m0 = now.getMonth();
  if (y !== seasonYear) {
    return SEASON_MONTH_RANGE.from;
  }
  if (m0 < SEASON_MONTH_RANGE.from) {
    return SEASON_MONTH_RANGE.from;
  }
  if (m0 > SEASON_MONTH_RANGE.to) {
    return SEASON_MONTH_RANGE.to;
  }
  return m0;
}

type TournamentScheduleCalendarProps = {
  year: number;
  months: CalendarMonth[];
};

function formatDateHeading(y: number, m0: number, day: number): string {
  const d = new Date(y, m0, day, 12, 0, 0);
  return d.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function isToday(y: number, m0: number, day: number): boolean {
  const t = new Date();
  return (
    t.getFullYear() === y &&
    t.getMonth() === m0 &&
    t.getDate() === day
  );
}

function monthTitle(y: number, m0: number): string {
  return new Date(y, m0, 1, 12, 0, 0).toLocaleString(undefined, {
    month: "long",
    year: "numeric",
  });
}

export function TournamentScheduleCalendar({
  year,
  months,
}: TournamentScheduleCalendarProps) {
  const eventMap = useMemo(
    () => buildTournamentEventMap(year, months),
    [year, months]
  );

  const [month0, setMonth0] = useState(() =>
    getDefaultVisibleMonth0(year)
  );
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedY, setSelectedY] = useState<number>(year);
  const [selectedM0, setSelectedM0] = useState<number>(SEASON_MONTH_RANGE.from);
  const [selectedDay, setSelectedDay] = useState(1);

  const displayYear = selectedY;
  const displayM0 = selectedM0;
  const selectedDkey = useMemo(
    () =>
      `${String(displayYear)}-${String(displayM0 + 1).padStart(2, "0")}-${String(
        selectedDay
      ).padStart(2, "0")}`,
    [displayYear, displayM0, selectedDay]
  );

  const first = new Date(year, month0, 1, 12, 0, 0);
  const firstDow = first.getDay();
  const daysInMonth = new Date(year, month0 + 1, 0, 12, 0, 0).getDate();
  const leadPad = firstDow;
  const totalInner = leadPad + daysInMonth;
  const nCells = Math.ceil(totalInner / 7) * 7;
  const selectedEvents: PlottedTournamentEvent[] =
    eventMap.get(selectedDkey) ?? [];

  const atSeasonStart = month0 === SEASON_MONTH_RANGE.from;
  const atSeasonEnd = month0 === SEASON_MONTH_RANGE.to;

  function goMonth(delta: -1 | 1) {
    setDialogOpen(false);
    setMonth0((m) => {
      const next = m + delta;
      if (next < SEASON_MONTH_RANGE.from) {
        return SEASON_MONTH_RANGE.from;
      }
      if (next > SEASON_MONTH_RANGE.to) {
        return SEASON_MONTH_RANGE.to;
      }
      return next;
    });
  }

  function openDay(d: number) {
    setSelectedY(year);
    setSelectedM0(month0);
    setSelectedDay(d);
    setDialogOpen(true);
  }

  return (
    <>
      <div className="w-full">
        <div className="space-y-3 border-b border-border bg-muted/30 px-4 py-3 sm:px-5 sm:py-4">
          <div className="flex items-center justify-between gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="shrink-0"
              disabled={atSeasonStart}
              onClick={() => {
                goMonth(-1);
              }}
              aria-label="Previous month"
            >
              <ChevronLeftIcon className="size-4" />
            </Button>
            <div className="min-w-0 text-center">
              <h3 className="font-serif text-base font-medium text-foreground">
                {monthTitle(year, month0)}
              </h3>
            </div>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="shrink-0"
              disabled={atSeasonEnd}
              onClick={() => {
                goMonth(1);
              }}
              aria-label="Next month"
            >
              <ChevronRightIcon className="size-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Recurring play days and one-day events. Tap a day for the
            full schedule, or tap an event name for details and any flyer.
          </p>
        </div>
        <div>
          <div
            className="grid grid-cols-7 border-b border-border bg-muted/20"
            role="row"
          >
            {WEEKDAYS.map((d) => (
              <div
                key={d}
                className="border-l border-border py-1.5 text-center text-xs font-medium text-muted-foreground first:border-l-0"
              >
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {Array.from({ length: nCells }, (_, i) => {
              const dayNum = i - leadPad + 1;
              if (dayNum < 1 || dayNum > daysInMonth) {
                return (
                  <div
                    key={`empty-${i}`}
                    className="min-h-16 border-b border-l border-border first:border-l-0 sm:min-h-[4.5rem] md:min-h-20"
                    aria-hidden
                  />
                );
              }
              const dkey = `${String(year)}-${String(month0 + 1).padStart(
                2,
                "0"
              )}-${String(dayNum).padStart(2, "0")}`;
              const list = eventMap.get(dkey) ?? [];
              const inSeason = isSeasonViewMonth(year, month0, year);
              const isTodayCell = isToday(year, month0, dayNum) && inSeason;
              return (
                <div
                  key={dkey}
                  className="min-h-16 border-b border-l border-border bg-background p-0.5 first:border-l-0 sm:min-h-[4.5rem] sm:p-1 md:min-h-20"
                >
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      openDay(dayNum);
                    }}
                    className={cn(
                      "mb-0.5 h-6 min-h-0 w-6 min-w-0 self-start rounded-md p-0 text-xs sm:h-7 sm:w-7 sm:text-sm",
                      isTodayCell
                        ? "ring-1 ring-inset ring-primary"
                        : "text-foreground"
                    )}
                    aria-label={`${formatDateHeading(
                      year,
                      month0,
                      dayNum
                    )}${
                      list.length > 0
                        ? `, ${list.length} event${
                            list.length === 1 ? "" : "s"
                          }`
                        : ""
                    }`}
                  >
                    {dayNum}
                  </Button>
                  <ul
                    className="flex w-full list-none flex-col gap-0.5 overflow-hidden pl-0"
                    role="list"
                    aria-label={`${list.length} events on ${dkey}`}
                  >
                    {list.slice(0, 2).map((ev) => (
                      <li key={ev.instanceId}>
                        <PlottedTournamentEventLabelCell
                          event={ev}
                          variant="cell"
                          textClassName={cn(
                            "max-w-full truncate text-[0.6rem] leading-tight sm:text-xs",
                            ev.isRecurring
                              ? "border-l-2 border-primary/70 pl-0.5 text-foreground/90"
                              : "text-foreground"
                          )}
                        />
                      </li>
                    ))}
                    {list.length > 2 ? (
                      <li
                        className="text-[0.55rem] text-muted-foreground sm:text-xs"
                        aria-label={`+${list.length - 2} more`}
                      >
                        +{list.length - 2} more
                      </li>
                    ) : null}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent
          className="max-w-md"
          showCloseButton
        >
          <DialogHeader>
            <DialogTitle className="font-serif">
              {formatDateHeading(displayYear, displayM0, selectedDay)}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {selectedEvents.length
                ? "Events scheduled for this date"
                : "No events for this date"}
            </DialogDescription>
          </DialogHeader>
          {selectedEvents.length === 0 ? (
            <p className="text-sm text-muted-foreground">No events.</p>
          ) : (
            <ul
              className="max-h-72 list-none space-y-3 overflow-y-auto p-0"
              role="list"
            >
              {selectedEvents.map((ev) => (
                <li
                  key={ev.instanceId}
                  className="border-b border-border/80 pb-3 last:border-0 last:pb-0"
                >
                  <p className="text-sm font-medium text-foreground">
                    {ev.title}
                    {ev.isRecurring ? (
                      <span className="ml-2 inline-block text-xs font-normal text-primary">
                        Weekly
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    {ev.detail}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
