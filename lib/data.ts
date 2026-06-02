export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type GroundsBlock = {
  image?: GalleryImage;
  text: string;
  /** Optional follow-up in red (e.g. official notices), shown after `text`. */
  textRed?: string;
};

export type PastUpdate = {
  id: string;
  title: string;
  golfProMessage: string;
  groundsBlocks: GroundsBlock[];
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

export const upcomingEventFlyers: UpcomingEventFlyer[] = [];

const may2026GroundsBlocks = [
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
] satisfies GroundsBlock[];

const may2026GolfProMessage =
  "Hi All,\n\nWe are hoping the summer is finally going to kick in for good. We are going to start doing things a little differently and see how they work. We are going to do a link to a monthly newsletter. You will be able to access everything you need to know for the month.\n\nYou will get a greeting from the golf shop with all tournament flyers, monthly calendars, and links to sign up for demo days etc. You will also get a greeting from someone at maintenance letting you know what has and what is happening out on the course.\n\nYou will see we have demo days on Tuesday the 5th and Friday the 29th of the month. You will be able to click on those days and sign up for those events.\n\nWe are starting our marshall program in the coming weeks. We are looking for some marshalls this year again. Get a hold of Cameron if you are interested. He will let you know everything that goes into it.\n\nWe hope to see you all soon!\n\nChat soon, Take care!\n\n--------------------\n\nHandicap notice:\n\nIf you have not paid for your 2026 handicap, it will become inactive on May 15th. Please come into the golf shop to reactivate it if you have not done so. This $60 fee needs to be paid once a year.";

/** Re-add `PastUpdate` objects here as you publish more issues. */
export const pastUpdates: PastUpdate[] = [
  {
    id: "may-2026",
    title: "May 2026",
    golfProMessage: may2026GolfProMessage,
    groundsBlocks: may2026GroundsBlocks,
  },
];

export const currentUpdate = {
  title: "Bell Nob Golf Course",
  date: "June 2026",
  dateIso: "2026-06",
  golfProMessage:
    "Hey there,\n\nIt looks like the summer is finally upon us. You have links to both the fitting days coming up. Mizuno and Ping will be here this month. You will see on the league calendar that we have the Wyoming Miners Association coming to Bell Nob this coming Wednesday. We are not having league this Wednesday. We will let all men's day players play tomorrow on Tuesday from the red tees instead of Wednesday.\n\nDuring the month of June for Father's Day we will be running a sale in the golf shop. If you buy a dozen balls, a pair of shoes, and a polo for dad, you will get 25% off all 3 items. (You need to buy all 3).\n\nWe will still be opening at 9am on all Mondays this month to let maintenance out on the course.\n\nDuring the months of June, July, and August we will be opening at 6:30 am instead of 7 to hopefully open up a little more play during the longer days in the summer.\n\nWe hope to see you all out here.\n\nTake care!",
  groundsBlocks: [
    {
      text: "I can't believe it is already June. This year has been flying by and we've been very busy on the course for a lot of different reasons than last year. The weather has been an extreme opposite of 2025. The rain continued through the 4th of July in 2025 and was very timely, whereas this year we have seen 1.47\" since March 1st and have lost over 17.5\" of moisture through evapotranspiration or \"ET\". ET is the combination of the amount of moisture that we lose from the ground into the atmosphere (evaporation) and that the plant uptakes through the root system to survive and is then released into the atmosphere (transpiration). If we were watering to make up the entire deficit we would have run 45 million gallons of irrigation as of the time I am writing this. Happy to report we have not watered even half of that much and the course is hanging in there despite the conditions.\n\nDue to the weather conditions it also took much longer this year for the greens to heal in following our deep tine aeration. The Championship Course holes are getting very close to finally filling in but we're just quite not there yet. Once those heal in we will start applying a growth regulator which will help to keep speeds a lot more consistent throughout the day limiting plant growth. The Wee Links were aerated late last week and with temps looking forward do not anticipate them taking nearly as long to heal.\n\nIn the next few weeks what you can expect from the grounds crew; Wall to wall (tees, fairways, rough) fertilizer application will go out and provide the plants some much needed food and stress resistance. Timing on this always varies in the spring as going out too early and then getting spring moisture on top will lead to everything growing quicker than we can keep up mowing. Bunkers will start to be edged and we will continue to keep adding sand to them to keep increasing the playability. We will also continue to work on our irrigation head replacement project. This year it has been much easier to see our shortcomings with the older heads out there than last year and we are getting them changed out to the new heads as quickly as possible to provide adequate water coverage.\n\nPlease make sure you are using cart paths around tee boxes and greens when they are available. There are a fair amount of areas off the cart paths that don't receive irrigation to try and be as conservative as we can with our water. Constantly driving over these areas ie. #9 black tee will beat the turf into non-existence. I think everyone reading this takes pride in Bell Nob and wants it to be in as good of shape as possible, please help out our turf when you can.\n\nBallmarks continue to be an eyesore and playability issue out there. I know not everyone is going to find their ballmark and there are even some that don't think they need to fix their ballmarks as they think it is \"someone else's job\" or \"someone else will get it\". A good general rule is to fix your ballmark and two others. If you can't find your ballmark I'm sure there are plenty more that could be fixed. If everyone fixed a ballmark or two a green it will lead to better playing surfaces for everyone.\n\nBig shoutout to everyone that has become part of our Adopt-a-Hole program! We are very thankful for the help and can see a noticeable difference in the holes that have someone out there once or twice a week helping out. There are currently three open holes left for adoption on the Championship Course. Please reach out to me or Cameron if you are interested in adopting a hole or learning more about the program!\n\nAs always thank you for your continued support of Bell Nob.",
    },
  ] satisfies GroundsBlock[],
};
