export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type GroundsBlock = {
  image: GalleryImage;
  text: string;
};

export type PastUpdate = {
  id: string;
  title: string;
  summary: string;
};

export const currentUpdate = {
  title: "Bell Nob Golf Course",
  date: "May 2026",
  dateIso: "2026-05",
  golfProMessage:
    "Welcome back for another beautiful stretch on the course. We have refined our short-game practice area hours and added a dedicated wedge bay with fresh turf mats. Please book lessons through the pro shop so we can keep stations balanced for everyone. Pace of play has been excellent—thank you for honoring ready golf and repair etiquette in the bunkers.",
  golfProName: "Cameron Brown",
  golfProTitle: "PGA Professional",
  golfProAvatarUrl: "/cameron-brown-pga.png",
  golfProAvatarAlt: "Cameron Brown, PGA Professional at Bell Nob Golf Course",
  golfProInitials: "CB",
  groundsName: "Sean Gregson",
  groundsTitle: "Golf Course Superintendent",
  groundsAvatarUrl: "/grounds-staff-placeholder.svg",
  groundsAvatarAlt: "Sean Gregson, Golf Course Superintendent (placeholder photo)",
  groundsInitials: "SG",
  groundsBlocks: [
    {
      image: {
        src: "/grounds/aeration-machine.png",
        alt: "Staff operating aeration and topdressing equipment on a green at sunrise",
        width: 576,
        height: 1024,
      },
      text: 'Welcome back! We were very excited to get the golf course officially opened early this year and see you all out here again. "Winter" was almost non-existent for us this year and our full time staff was out watering greens and tees with our 1000 gallon watering trailers from mid January until the beginning of March when we fired up the irrigation system to prevent desiccation. All that hard work paid off as you can see the greens and most of the tees woke up great after the driest and warmest winter on record for Gillette.',
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
      text: "Thank you all for a great season in 2025 and we are looking forward to another great season in 2026! GolfWeek had Bell Nob ranked #2 in the state for public access golf courses in 2025, something our staff and you should be very proud of! As always please make sure to help us in keeping Bell Nob in the best shape possible by doing your part. This includes fixing your ball marks, keeping carts on paths when they are available, fixing your ball markers, filling divots, picking up your broken tees, and fixing your ball marks. Did I mention that last one already?",
    },
  ] satisfies GroundsBlock[],
};

export const pastUpdates: PastUpdate[] = [
  {
    id: "march-2026",
    title: "March 2026 — Aerification & Opening Day",
    summary:
      "Core greens aerification completed on schedule; opening day scramble results and spring cart policy reminders were distributed to the membership.",
  },
  {
    id: "february-2026",
    title: "February 2026 — Winter Practice & Fitting",
    summary:
      "Indoor simulator hours, club fitting dates with our vendor partners, and frost-delay protocols for late winter rounds.",
  },
];
