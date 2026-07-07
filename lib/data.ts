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

export const upcomingEventFlyers: UpcomingEventFlyer[] = [
  {
    id: "flyer-ladies-club-championship-2026",
    kind: "image",
    image: {
      src: "/flyers/2026/ladies-club-championships-26.png",
      alt: "Ladies club championships flyer: July 18 and 19, 2026, tee times before 1:00 p.m., $100 entry, format and contact details",
      width: 791,
      height: 1024,
    },
  },
  {
    id: "flyer-mens-club-championship-2026",
    kind: "image",
    image: {
      src: "/flyers/2026/mens-club-championship-26.png",
      alt: "Men's club championships flyer: July 18 and 19, 2026, black and red tee flights, $100 entry, format and contact details",
      width: 791,
      height: 1024,
    },
  },
  {
    id: "flyer-mens-pro-am-2026",
    kind: "image",
    image: {
      src: "/flyers/2026/mens-pro-am-26.png",
      alt: "Thunder Basin Ford men's 5 player pro-am flyer: Monday July 20, 2026, tee times before 1:30 p.m., $80 entry, format and contact details",
      width: 791,
      height: 1024,
    },
  },
];

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

const june2026GolfProMessage =
  "Hey there,\n\nIt looks like the summer is finally upon us. You have links to both the fitting days coming up. Mizuno and Ping will be here this month. You will see on the league calendar that we have the Wyoming Miners Association coming to Bell Nob this coming Wednesday. We are not having league this Wednesday. We will let all men's day players play tomorrow on Tuesday from the red tees instead of Wednesday.\n\nDuring the month of June for Father's Day we will be running a sale in the golf shop. If you buy a dozen balls, a pair of shoes, and a polo for dad, you will get 25% off all 3 items. (You need to buy all 3).\n\nWe will still be opening at 9am on all Mondays this month to let maintenance out on the course.\n\nDuring the months of June, July, and August we will be opening at 6:30 am instead of 7 to hopefully open up a little more play during the longer days in the summer.\n\nWe hope to see you all out here.\n\nTake care!";

const june2026GroundsBlocks = [
  {
    text: "I can't believe it is already June. This year has been flying by and we've been very busy on the course for a lot of different reasons than last year. The weather has been an extreme opposite of 2025. The rain continued through the 4th of July in 2025 and was very timely, whereas this year we have seen 1.47\" since March 1st and have lost over 17.5\" of moisture through evapotranspiration or \"ET\". ET is the combination of the amount of moisture that we lose from the ground into the atmosphere (evaporation) and that the plant uptakes through the root system to survive and is then released into the atmosphere (transpiration). If we were watering to make up the entire deficit we would have run 45 million gallons of irrigation as of the time I am writing this. Happy to report we have not watered even half of that much and the course is hanging in there despite the conditions.\n\nDue to the weather conditions it also took much longer this year for the greens to heal in following our deep tine aeration. The Championship Course holes are getting very close to finally filling in but we're just quite not there yet. Once those heal in we will start applying a growth regulator which will help to keep speeds a lot more consistent throughout the day limiting plant growth. The Wee Links were aerated late last week and with temps looking forward do not anticipate them taking nearly as long to heal.\n\nIn the next few weeks what you can expect from the grounds crew; Wall to wall (tees, fairways, rough) fertilizer application will go out and provide the plants some much needed food and stress resistance. Timing on this always varies in the spring as going out too early and then getting spring moisture on top will lead to everything growing quicker than we can keep up mowing. Bunkers will start to be edged and we will continue to keep adding sand to them to keep increasing the playability. We will also continue to work on our irrigation head replacement project. This year it has been much easier to see our shortcomings with the older heads out there than last year and we are getting them changed out to the new heads as quickly as possible to provide adequate water coverage.\n\nPlease make sure you are using cart paths around tee boxes and greens when they are available. There are a fair amount of areas off the cart paths that don't receive irrigation to try and be as conservative as we can with our water. Constantly driving over these areas ie. #9 black tee will beat the turf into non-existence. I think everyone reading this takes pride in Bell Nob and wants it to be in as good of shape as possible, please help out our turf when you can.\n\nBallmarks continue to be an eyesore and playability issue out there. I know not everyone is going to find their ballmark and there are even some that don't think they need to fix their ballmarks as they think it is \"someone else's job\" or \"someone else will get it\". A good general rule is to fix your ballmark and two others. If you can't find your ballmark I'm sure there are plenty more that could be fixed. If everyone fixed a ballmark or two a green it will lead to better playing surfaces for everyone.\n\nBig shoutout to everyone that has become part of our Adopt-a-Hole program! We are very thankful for the help and can see a noticeable difference in the holes that have someone out there once or twice a week helping out. There are currently three open holes left for adoption on the Championship Course. Please reach out to me or Cameron if you are interested in adopting a hole or learning more about the program!\n\nAs always thank you for your continued support of Bell Nob.",
  },
] satisfies GroundsBlock[];

/** Re-add `PastUpdate` objects here as you publish more issues. */
export const pastUpdates: PastUpdate[] = [
  {
    id: "june-2026",
    title: "June 2026",
    golfProMessage: june2026GolfProMessage,
    groundsBlocks: june2026GroundsBlocks,
  },
  {
    id: "may-2026",
    title: "May 2026",
    golfProMessage: may2026GolfProMessage,
    groundsBlocks: may2026GroundsBlocks,
  },
];

export const currentUpdate = {
  title: "Bell Nob Golf Course",
  date: "July 2026",
  dateIso: "2026-07",
  golfProMessage:
    "Hi All,\n\nJuly is upon us and the heat is finally here!!\n\nThe monthly calendar is below.\n\nBelow you will see flyers for the Club Championships. Men will have a red tee and a black tee flight to determine the multiple champions. Ladies will be a 2 day event this year instead of one.\n\nWe have our last demo day on the 16th. Titleist will be here from 1-5 on that Thursday. The link to sign up is below.\n\nThe mens pro am will be Monday the 20th.\n\nWe hope you all are having a great summer!\n\nChat soon",
  groundsBlocks: [
    {
      text: "We hope everyone has been enjoying the course so far this year! As the drought continues and looks to last through the rest of summer, we are doing everything we can to try and keep everything healthy and playable from tee to green. We made the purchase of some impact sprinklers recently that we can hook into our irrigation system and try and get some areas extra water locally without over watering surrounding areas. These will typically be running in different areas throughout the day as we cycle them throughout the property all week long. With high heats finally showing up, if you're playing on 95+ degree days we will be back to syringe areas on the golf course that need it including fairways and greens. Please be patient as these processes are completed. They are needed to help keep Bell Nob in the best condition that we can. I know that this was a hot topic during the US Open at Shinnecock this year as due to high temps, high winds, and low humidity (typical Gillette weather). Interrupting play is not something we enjoy doing but is necessary for plant health. For more information on why we syringe please click the link to this USGA article https://www.usga.org/content/usga/home-page/course-care/green-section-record/64/issue-11/what-is-syringing-and-why-is-it-done-.html .\n\nA question I've been getting semi-regularly is about the pond on number 7 not being filled this year. This pond is filled from the same wells that fill our irrigation pond. When we divert water to this pond to fill it we would be losing pumping approximately 200,000 gallons a day into our irrigation pond. As much as I believe the pond on #7 being filled completely changes that hole for the better and really makes you consider going for the green in 2, with the current drought conditions I do not find it advantageous to fill right now. If the weather does change and we start getting some consistent rains (that aren't followed by 5 days of 40+ sustained winds) we will get those valves opened!\n\nOne of our assistants, Robert Burdick, recently took a job down in Luling, Texas. We wish him the best in the next steps of his career and are in the process of conducting a search for his replacement. While this is a crucial position to be filled within the maintenance department, we also want to make sure that we are hiring a good fit for Bell Nob and Campbell County Parks and Rec. I would like to also take this time to acknowledge our staff that is doing a great job during these conditions both full time and seasonal. I believe most of you know our full timers, First Assistant Hunter Peterson and Senior Mechanic Kenny Schwartz. They are a huge part of keeping Bell Nob in the conditions we see year-round and make my job easier which is a huge asset to myself and Bell Nob.\n\nPlease make sure to fix your ball marks, and use cart paths when they are available. As always, thank you for your support.",
    },
  ] satisfies GroundsBlock[],
};
