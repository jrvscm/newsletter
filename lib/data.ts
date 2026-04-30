export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type GroundsBlock = {
  image: GalleryImage;
  text: string;
  /** Optional follow-up in red (e.g. official notices), shown after `text`. */
  textRed?: string;
};

export type PastUpdate = {
  id: string;
  title: string;
  summary: string;
};

/**
 * Flyers for the “Upcoming Events” block. Use `kind: "image"` for PNG/JPG/WebP
 * or `kind: "pdf"` for files under `/public` (embedded in the page; for older
 * mobile browsers you can instead use `kind: "image"` with a PNG export).
 */
export type UpcomingEventFlyer =
  | {
      id: string;
      kind: "image";
      image: GalleryImage;
    }
  | {
      id: string;
      kind: "pdf";
      /** Public path, e.g. `/flyers/2026/event.pdf` */
      src: string;
      /** Short label for the embed and screen readers. */
      title: string;
    };

export const upcomingEventFlyers: UpcomingEventFlyer[] = [
  {
    id: "flyer-open-shamble-2026",
    kind: "image",
    image: {
      src: "/flyers/2026/open-shamble-26.png",
      alt: "Open shamble tournament flyer: Saturday May 16, 2026, tee times before 1:00 p.m., entry and format details",
      width: 791,
      height: 1024,
    },
  },
  {
    id: "flyer-mens-member-2026",
    kind: "image",
    image: {
      src: "/flyers/2026/mens-member-member-26.png",
      alt: "Member / member tournament flyer: May 23 and 24, 2026, format and entry details",
      width: 791,
      height: 1024,
    },
  },
];

export const currentUpdate = {
  title: "Bell Nob Golf Course",
  date: "May 2026",
  dateIso: "2026-05",
  golfProMessage: "CAMERON WHAT DO YOU WANT HERE?",
  groundsBlocks: [
    {
      image: {
        src: "/grounds/aeration-machine.png",
        alt: "Staff operating aeration and topdressing equipment on a green at sunrise",
        width: 576,
        height: 1024,
      },
      text: 'Welcome back! We were very excited to get the golf course officially opened early this year and see you all out here again. "Winter" was almost non-existent for us, and this year our full time staff was out watering greens and tees with our 1000 gallon watering trailers from mid January until the beginning of March when we fired up the irrigation system to prevent desiccation. All that hard work paid off as you can see the greens and most of the tees woke up great after the driest and warmest winter on record for Gillette.',
    },
    {
      image: {
        src: "/grounds/verti-drain.png",
        alt: "Verti-Drain tines punching through topdressing sand on the turf",
        width: 1024,
        height: 576,
      },
      text: "With the nice weather we have been able to get after it with our spring aeration practices. Tees and fairways were both done this year with a solid tine to start the season. With the fairways and tees this is a process we will continue throughout the season. We plan to do tees once a month and fairways at least once more this year. Fairways will also get verticut for the season in the near future. The championship course greens were deep tine aerated the week of May 20th, followed up by a light verticut two directions. With approximately 100 tons of sand filling these 9\" deep holes we should have great infiltration for the season equating to firm putting surfaces. As soon as the weather allows us we will be finishing up the par 3 course and remaining practice surfaces we were unable to complete due to the snow and cold weather that rolled in at the end of the week.",
    },
    {
      image: {
        src: "/grounds/greens-aeration-grid.png",
        alt: "Close-up of a green showing the aeration hole pattern in topdressing sand",
        width: 768,
        height: 1024,
      },
      text: "Thank you all for a great season in 2025 and we are looking forward to another great season in 2026! GolfWeek had Bell Nob ranked #2 in the state for public access golf courses in 2025, something our staff and you should be very proud of! As always please make sure to help us in keeping Bell Nob in the best shape possible by doing your part. This includes fixing your ball marks, keeping carts on paths when they are available, fixing your ball marks, filling divots, picking up your broken tees, and fixing your ball marks. Did I mention that last one already?",
      textRed:
        "Per Campbell County Fire Department.\n\nFire Prevention Order\n1. Disposal of any burning object outdoors, including without limitation, any cigarette, cigar or match.\n\nPursuant to W.S. 35-0-301, failure to comply shall be a misdemeanor. and shall be punished by a fine or imprisonment.",
    },
  ] satisfies GroundsBlock[],
};

/** Re-add `PastUpdate` objects here as you publish more issues. */
export const pastUpdates: PastUpdate[] = [];
