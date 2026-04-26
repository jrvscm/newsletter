"use client";

import { useState } from "react";
import { LayoutGridIcon, ListIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TournamentCalendar } from "@/components/tournament-calendar";
import { TournamentScheduleCalendar } from "@/components/tournament-schedule-calendar";
import type { CalendarMonth } from "@/lib/calendar";

type View = "calendar" | "list";

type TournamentEventScheduleProps = {
  year: number;
  months: CalendarMonth[];
};

export function TournamentEventSchedule({
  year,
  months,
}: TournamentEventScheduleProps) {
  const [view, setView] = useState<View>("calendar");

  return (
    <Card className="overflow-hidden border border-border shadow-none ring-0">
      <CardHeader className="space-y-0 border-b border-border bg-muted/30 px-4 py-3 sm:px-5 sm:py-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <CardTitle className="font-serif text-base font-medium text-foreground">
              {year} season
            </CardTitle>
            <p className="mt-1 text-xs text-muted-foreground">
              Tournaments, outings, and recurring play. Formats and times are
              subject to the pro shop schedule.
            </p>
          </div>
          <div
            className="flex shrink-0 gap-0.5 rounded-lg border border-border bg-background p-0.5"
            role="group"
            aria-label="Tournament schedule view"
          >
            <Button
              type="button"
              variant={view === "calendar" ? "secondary" : "ghost"}
              size="sm"
              className="gap-1.5"
              onClick={() => {
                setView("calendar");
              }}
              aria-pressed={view === "calendar"}
            >
              <LayoutGridIcon className="size-3.5" />
              Calendar
            </Button>
            <Button
              type="button"
              variant={view === "list" ? "secondary" : "ghost"}
              size="sm"
              className="gap-1.5"
              onClick={() => {
                setView("list");
              }}
              aria-pressed={view === "list"}
            >
              <ListIcon className="size-3.5" />
              List
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {view === "calendar" ? (
          <TournamentScheduleCalendar year={year} months={months} />
        ) : (
          <TournamentCalendar year={year} months={months} embedded />
        )}
      </CardContent>
    </Card>
  );
}
