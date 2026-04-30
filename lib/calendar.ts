/** Season events — edit list here; layout is handled in `TournamentCalendar`. */
export type CalendarEvent = {
  id: string;
  /** Shown in the left column; month is implied by the section. */
  days: string;
  title: string;
  /** Time, format (shotgun, T-times), and notes. */
  detail: string;
  /**
   * Optional more formal or complete name; shown in hover and screen readers
   * when the calendar cell is truncated. Defaults to `title`.
   */
  fullTitle?: string;
  /**
   * Public URL to a flyer image (PNG, JPG, WebP) under `/public`, e.g.
   * `"/flyers/2026/open-shamble-26.png"`. Shown in the event popover and list
   * hover. Omitted when there is no graphic yet.
   */
  flyerUrl?: string;
  /** Optional external link (e.g. registration) shown in the event popover and list. */
  registrationUrl?: string;
};

export type CalendarMonth = {
  key: string;
  label: string;
  events: CalendarEvent[];
};

/** First day of month implied by `days` (e.g. `"5"`, `"23–24"`) for sorting list views. */
export function calendarEventStartDay(days: string): number {
  const normalized = days.replace(/-/g, "–").trim();
  const head = normalized.includes("–")
    ? (normalized.split("–", 2)[0]?.trim() ?? "")
    : normalized;
  const n = Number.parseInt(head, 10);
  return Number.isNaN(n) ? 999 : n;
}

/** Chronological order within a month (by start day) for the event list. */
export function sortCalendarEventsByDay<T extends { days: string }>(
  events: T[]
): T[] {
  return [...events].sort(
    (a, b) => calendarEventStartDay(a.days) - calendarEventStartDay(b.days)
  );
}

export const seasonCalendar: CalendarMonth[] = [
  {
    key: "april",
    label: "April",
    events: [
      {
        id: "apr-1",
        days: "7",
        title: "Senior league begins (50+)",
        detail: "Every Tuesday",
      },
      {
        id: "apr-2",
        days: "8",
        title: "Men’s day begins",
        detail: "Every Wednesday",
      },
      {
        id: "apr-3",
        days: "18",
        title: "1 best ball of 2",
        detail: "T-times",
      },
      {
        id: "apr-4",
        days: "24",
        title: "High school tournament",
        detail: "9:00 shotgun",
      },
      {
        id: "apr-6",
        days: "27",
        title: "Couples night begins",
        detail: "Every Monday through August",
      },
      {
        id: "apr-7",
        days: "30",
        title: "Ladies & 65+ days begin",
        detail: "Every Thursday",
      },
    ],
  },
  {
    key: "may",
    label: "May",
    events: [
      {
        id: "may-1",
        days: "2",
        title: "Pronghorn Booster Club scramble",
        detail: "9:00 shotgun",
      },
      {
        id: "may-titleist",
        days: "5",
        title: "Titleist demo day",
        detail: "Tuesday, May 5, 2026",
        flyerUrl: "/flyers/2026/titleist-demo-may-5-26.svg",
        registrationUrl:
          "https://surefithub.titleist.com/book-fitting/59fbbd6929e749a7abd7bf3afee167ae/112656",
      },
      {
        id: "may-open-shamble",
        days: "16",
        title: "4 player open shamble",
        detail: "T-times before 1:00 p.m.",
        flyerUrl: "/flyers/2026/open-shamble-26.png",
      },
      {
        id: "may-2",
        days: "23",
        title: "Ladies club member / member",
        detail: "T-times",
      },
      {
        id: "may-3",
        days: "23–24",
        title: "Men’s club member / member",
        fullTitle: "Men’s club member / member (two day event)",
        detail: "T-times",
        flyerUrl: "/flyers/2026/mens-member-member-26.png",
      },
      {
        id: "may-4",
        days: "25",
        title: "1 player scramble",
        detail: "T-times",
      },
      {
        id: "may-callaway",
        days: "29",
        title: "Callaway demo day",
        detail: "Friday, May 29, 2026 · 11:00 AM – 3:00 PM (MST)",
        registrationUrl:
          "https://process.callawaygolf.com/CgiServices/Fitting?id=afd7ea11-fbd9-44d0-9bc9-fa202917672a",
      },
      {
        id: "may-5",
        days: "30–31",
        title: "Action Energy Chapman match play",
        detail: "9:00 shotgun",
      },
    ],
  },
  {
    key: "june",
    label: "June",
    events: [
      {
        id: "jun-1",
        days: "3",
        title: "Wyoming Miners Association",
        detail: "12:00 shotgun",
      },
      {
        id: "jun-2",
        days: "6",
        title: "SPE (course opens at 4:00 p.m.)",
        detail: "9:00 shotgun",
      },
      { id: "jun-3", days: "12", title: "SME", detail: "2:00 shotgun" },
      {
        id: "jun-4",
        days: "19",
        title: "Young Life scramble",
        detail: "8:00 shotgun",
      },
      {
        id: "jun-5",
        days: "20",
        title: "Boys and Girls Club fundraiser",
        detail: "8:00 shotgun",
      },
      {
        id: "jun-6",
        days: "25",
        title: "Border States",
        detail: "8:00 shotgun",
      },
      {
        id: "jun-7",
        days: "26",
        title: "NTEC company outing",
        detail: "8:00 shotgun",
      },
      {
        id: "jun-8",
        days: "27–28",
        title: "Sunshine Custom Classic (match play, 3 person)",
        detail: "8:00 shotgun",
      },
    ],
  },
  {
    key: "july",
    label: "July",
    events: [
      {
        id: "jul-1",
        days: "3",
        title: "Night golf scramble (par 3)",
        detail: "Shotgun at dark",
      },
      {
        id: "jul-2",
        days: "10–11",
        title: "RMS 2 person match play",
        detail: "8:00 shotgun",
      },
      { id: "jul-3", days: "17", title: "John Paul II", detail: "8:00 shotgun" },
      {
        id: "jul-4",
        days: "18–19",
        title: "Men’s & Ladies’ club championships",
        detail: "T-times",
      },
      {
        id: "jul-5",
        days: "18",
        title: "Men’s & Ladies’ Club Derby",
        detail: "4:00 p.m., T-times",
      },
      {
        id: "jul-6",
        days: "20",
        title: "Thunder Basin Ford Men’s Pro-Am",
        detail: "T-times",
      },
      {
        id: "jul-7",
        days: "24",
        title: "Friends of Coal fundraiser",
        detail: "8:00 shotgun",
      },
      {
        id: "jul-8",
        days: "31",
        title: "Gillette College energy scramble",
        detail: "8:00 shotgun",
      },
    ],
  },
  {
    key: "august",
    label: "August",
    events: [
      {
        id: "aug-1",
        days: "7–8",
        title: "Powder River Invitational",
        detail: "9:00 shotgun",
      },
      {
        id: "aug-2",
        days: "13",
        title: "Sulzer Ladies Pro-Am",
        detail: "T-times",
      },
      {
        id: "aug-3",
        days: "15",
        title: "Drive for the Cure tournament",
        detail: "8:00 shotgun",
      },
      {
        id: "aug-4",
        days: "16",
        title: "Ashley Furniture par 3 match play",
        detail: "9:00 shotgun",
      },
      {
        id: "aug-5",
        days: "20–22",
        title: "Coal Country Open",
        detail: "8:00 shotgun",
      },
      {
        id: "aug-6",
        days: "25",
        title: "Dave Moore Memorial scramble",
        detail: "9:00 a.m. shotgun",
      },
      {
        id: "aug-7",
        days: "29",
        title: "Dice scramble",
        detail: "T-times",
      },
    ],
  },
  {
    key: "september",
    label: "September",
    events: [
      { id: "sep-1", days: "3", title: "Devon Energy", detail: "9:00 shotgun" },
      {
        id: "sep-2",
        days: "5–6",
        title: "Couples tournament",
        detail: "9:00 shotgun",
      },
      {
        id: "sep-3",
        days: "7",
        title: "1 player scramble",
        detail: "T-times",
      },
      {
        id: "sep-4",
        days: "9–10",
        title: "High school conference",
        detail: "8:00, T-times",
      },
      {
        id: "sep-5",
        days: "12–13",
        title: "Wyoming State Senior",
        detail: "9:00 shotgun",
      },
      {
        id: "sep-6",
        days: "19",
        title: "Superintendent’s revenge scramble",
        detail: "T-times",
      },
    ],
  },
  {
    key: "october",
    label: "October",
    events: [
      {
        id: "oct-1",
        days: "3",
        title: "Members Association / Memorial",
        detail: "T-times",
      },
      { id: "oct-2", days: "10", title: "2 person scramble", detail: "T-times" },
    ],
  },
];

export type DemoDayRegistration = {
  id: string;
  title: string;
  detail: string;
  href: string;
};

/** Events that include `registrationUrl` (e.g. manufacturer demo days), in season calendar order. */
export function listDemoDayRegistrations(
  months: CalendarMonth[] = seasonCalendar
): DemoDayRegistration[] {
  const out: DemoDayRegistration[] = [];
  for (const m of months) {
    for (const ev of sortCalendarEventsByDay(m.events)) {
      const href = ev.registrationUrl?.trim();
      if (!href) {
        continue;
      }
      out.push({
        id: ev.id,
        title: ev.title,
        detail: ev.detail,
        href,
      });
    }
  }
  return out;
}

export const seasonCalendarYear = 2026;
