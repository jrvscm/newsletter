import type { CalendarMonth } from "./calendar";
import { seasonCalendar } from "./calendar";

export type PlottedTournamentEvent = {
  instanceId: string;
  sourceId: string;
  title: string;
  /** Shown in hover; may be longer or more formal than `title` (cell label). */
  fullTitle: string;
  detail: string;
  isRecurring: boolean;
  /** Public path to a flyer image (under `/public`). */
  flyerUrl?: string;
  registrationUrl?: string;
};

const MONTH_KEY_TO_1: Record<string, number> = {
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
};

const RECURRING_EVENT_IDS = new Set([
  "apr-1",
  "apr-2",
  "apr-6",
  "apr-7",
]);

/** `true` for the four built-in weekly play-day rows in `CalendarEvent` data. */
export function isRecurringPlayDayId(id: string): boolean {
  return RECURRING_EVENT_IDS.has(id);
}

/** 0=Sun … 6=Sat */
function toDateKey(
  y: number,
  month1: number,
  day: number
): string {
  const d = new Date(y, month1 - 1, day, 12, 0, 0);
  const y2 = d.getFullYear();
  const m2 = d.getMonth() + 1;
  const d2 = d.getDate();
  return `${y2}-${String(m2).padStart(2, "0")}-${String(d2).padStart(2, "0")}`;
}

function parseDayList(days: string): { start: number; end: number }[] {
  const normalized = days.replace(/-/g, "–");
  if (normalized.includes("–")) {
    const [a, b] = normalized.split("–", 2).map((s) => s.trim());
    const start = Number.parseInt(a, 10);
    const end = Number.parseInt(b, 10);
    if (Number.isNaN(start) || Number.isNaN(end)) {
      return [];
    }
    return [{ start, end: Math.max(start, end) }];
  }
  const n = Number.parseInt(normalized, 10);
  if (Number.isNaN(n)) {
    return [];
  }
  return [{ start: n, end: n }];
}

function forEachDateInRangeInclusive(
  y: number,
  month1: number,
  start: number,
  end: number,
  fn: (dkey: string) => void
): void {
  for (let day = start; day <= end; day++) {
    fn(toDateKey(y, month1, day));
  }
}

/**
 * All Tuesdays in range (first occurrence aligned to or after `startYMD`).
 */
function expandWeeklyRecurring(
  y: number,
  month1: number,
  day1: number,
  endY: number,
  endM: number,
  endD: number,
  weekDay: 0 | 1 | 2 | 3 | 4 | 5 | 6
): string[] {
  const start = new Date(y, month1 - 1, day1, 12, 0, 0);
  const end = new Date(endY, endM - 1, endD, 12, 0, 0);
  const d = new Date(start);
  while (d.getDay() !== weekDay) {
    d.setDate(d.getDate() + 1);
  }
  const keys: string[] = [];
  for (; d <= end; d.setDate(d.getDate() + 7)) {
    keys.push(toDateKey(d.getFullYear(), d.getMonth() + 1, d.getDate()));
  }
  return keys;
}

const RECURRING_RULES: Array<{
  id: string;
  title: string;
  detail: string;
  weekDay: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  startMonth1: number;
  startDay: number;
  endMonth1: number;
  endDay: number;
}> = [
  {
    id: "apr-1",
    title: "Senior league (50+)",
    detail: "Every Tuesday",
    weekDay: 2,
    startMonth1: 4,
    startDay: 7,
    endMonth1: 10,
    endDay: 31,
  },
  {
    id: "apr-2",
    title: "Men’s day",
    detail: "Every Wednesday",
    weekDay: 3,
    startMonth1: 4,
    startDay: 8,
    endMonth1: 10,
    endDay: 31,
  },
  {
    id: "apr-6",
    title: "Couples night",
    detail: "Every Monday through August",
    weekDay: 1,
    startMonth1: 4,
    startDay: 27,
    endMonth1: 8,
    endDay: 31,
  },
  {
    id: "apr-7",
    title: "Ladies & 65+ day",
    detail: "Every Thursday",
    weekDay: 4,
    startMonth1: 4,
    startDay: 30,
    endMonth1: 10,
    endDay: 31,
  },
];

function addToMap(
  map: Map<string, PlottedTournamentEvent[]>,
  dkey: string,
  pe: PlottedTournamentEvent
) {
  const list = map.get(dkey) ?? [];
  list.push(pe);
  map.set(dkey, list);
}

function sortDayEvents(
  a: PlottedTournamentEvent,
  b: PlottedTournamentEvent
): number {
  return a.title.localeCompare(b.title, undefined, { sensitivity: "base" });
}

/**
 * Plots all season events onto concrete local calendar days for `year`
 * (singles and ranges from `days`, plus four weekly recurring play-day rules).
 */
export function buildTournamentEventMap(
  year: number,
  months: CalendarMonth[] = seasonCalendar
): Map<string, PlottedTournamentEvent[]> {
  const map = new Map<string, PlottedTournamentEvent[]>();

  for (const m of months) {
    const month1 = MONTH_KEY_TO_1[m.key];
    if (month1 === undefined) {
      continue;
    }

    for (const ev of m.events) {
      if (RECURRING_EVENT_IDS.has(ev.id)) {
        continue;
      }
      for (const range of parseDayList(ev.days)) {
        forEachDateInRangeInclusive(
          year,
          month1,
          range.start,
          range.end,
          (dkey) => {
            const pe: PlottedTournamentEvent = {
              instanceId: `${ev.id}@${dkey}`,
              sourceId: ev.id,
              title: ev.title,
              fullTitle: ev.fullTitle?.trim() || ev.title,
              detail: ev.detail,
              isRecurring: false,
              flyerUrl: ev.flyerUrl,
              registrationUrl: ev.registrationUrl,
            };
            addToMap(map, dkey, pe);
          }
        );
      }
    }
  }

  for (const r of RECURRING_RULES) {
    const keys = expandWeeklyRecurring(
      year,
      r.startMonth1,
      r.startDay,
      year,
      r.endMonth1,
      r.endDay,
      r.weekDay
    );
    for (const dkey of keys) {
      const pe: PlottedTournamentEvent = {
        instanceId: `${r.id}@${dkey}`,
        sourceId: r.id,
        title: r.title,
        fullTitle: r.title,
        detail: r.detail,
        isRecurring: true,
      };
      addToMap(map, dkey, pe);
    }
  }

  for (const list of map.values()) {
    list.sort(sortDayEvents);
  }

  return map;
}

export const SEASON_MONTH_RANGE = { from: 3, to: 9 } as const; // 0=Jan; April=3, Oct=9

/** `month0` is 0=January. Season view is Apr–Oct in `year` when it matches the season. */
export function isSeasonViewMonth(
  year: number,
  month0: number,
  seasonYear: number
): boolean {
  return (
    year === seasonYear &&
    month0 >= SEASON_MONTH_RANGE.from &&
    month0 <= SEASON_MONTH_RANGE.to
  );
}
