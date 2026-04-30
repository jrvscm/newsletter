import Image from "next/image";
import { DemoDayLinks } from "@/components/demo-day-links";
import type { DemoDayRegistration } from "@/lib/calendar";
import type { UpcomingEventFlyer } from "@/lib/data";
import { cn } from "@/lib/utils";

type UpcomingEventsContentProps = {
  flyers: UpcomingEventFlyer[];
  demoDayItems: DemoDayRegistration[];
};

function FlyerBlock({ f }: { f: UpcomingEventFlyer }) {
  if (f.kind === "image") {
    return (
      <div className="overflow-hidden rounded-lg border border-border bg-muted/30">
        <Image
          src={f.image.src}
          alt={f.image.alt}
          width={f.image.width}
          height={f.image.height}
          className="h-auto w-full object-contain"
          sizes="(max-width: 760px) 100vw, 720px"
        />
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-border bg-muted/30">
        <iframe
          title={f.title}
          src={`${f.src}#view=FitH`}
          className="h-[min(52vh,480px)] w-full min-h-[280px] border-0 bg-background"
        />
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        <a
          href={f.src}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline-offset-2 hover:underline"
        >
          Open PDF
        </a>{" "}
        <span className="text-muted-foreground/90">in a new tab if needed</span>
      </p>
    </div>
  );
}

export function UpcomingEventsContent({
  flyers,
  demoDayItems,
}: UpcomingEventsContentProps) {
  const hasFlyers = flyers.length > 0;
  const hasDemoDays = demoDayItems.length > 0;

  return (
    <div className="space-y-8">
      {hasFlyers ? (
        <ul
          className="m-0 list-none space-y-6 p-0"
          aria-label="Event flyers"
        >
          {flyers.map((f) => (
            <li key={f.id}>
              <FlyerBlock f={f} />
            </li>
          ))}
        </ul>
      ) : null}

      {hasDemoDays ? (
        <div
          className={cn(
            hasFlyers && "space-y-4 border-t border-border pt-8"
          )}
        >
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-medium tracking-tight text-foreground">
              Demo days
            </h3>
            <DemoDayLinks items={demoDayItems} />
          </div>
          <hr className="mt-8 border-border sm:mt-10" />
        </div>
      ) : null}
    </div>
  );
}
