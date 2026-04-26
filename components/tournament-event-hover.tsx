"use client";

import { useEffect, useState } from "react";
import { Popover } from "@base-ui/react/popover";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { PlottedTournamentEvent } from "@/lib/calendar-expand";

type TournamentEventHoverByFieldsProps = {
  label: string;
  fullTitle: string;
  detail: string;
  flyerUrl?: string;
  isRecurring?: boolean;
  className?: string;
  textClassName?: string;
  variant: "cell" | "list";
  /** On the list view, time/format lines already appear under the title — omit them from the popup. */
  hideDetailInTooltip?: boolean;
};

/** True when the device can hover (so we also open the popover on pointer hover, not just tap). */
function useOpenPopoverOnHover(): boolean {
  const [hoverOpen, setHoverOpen] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => {
      setHoverOpen(mq.matches);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
    };
  }, []);
  return hoverOpen;
}

export function TournamentEventHover({
  label,
  fullTitle,
  detail,
  flyerUrl,
  isRecurring,
  className,
  textClassName,
  variant,
  hideDetailInTooltip = false,
}: TournamentEventHoverByFieldsProps) {
  const openOnHover = useOpenPopoverOnHover();
  const hasImage = Boolean(flyerUrl?.trim());
  const a11yLabel = [
    fullTitle,
    !hideDetailInTooltip && detail,
    isRecurring ? "Recurring play day" : "",
  ]
    .filter(Boolean)
    .join(". ");

  return (
    <Popover.Root>
      <Popover.Trigger
        type="button"
        className={cn(
          "inline-flex w-full min-w-0 items-center justify-start rounded font-inherit",
          "border-0 bg-transparent p-0 text-left",
          "cursor-pointer touch-manipulation",
          "transition-colors",
          "max-md:hover:bg-transparent max-md:active:bg-primary/8",
          "md:hover:bg-muted/40 md:active:bg-muted/50",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-1",
          variant === "cell" && "min-h-8 px-0.5 py-1",
          variant === "list" && "min-h-10 -mx-1 w-[calc(100%+0.5rem)] rounded-md px-1.5 py-1.5",
          className
        )}
        {...(openOnHover
          ? { openOnHover: true as const, delay: 300, closeDelay: 200 }
          : {})}
        aria-label={a11yLabel}
      >
        <span
          className={cn(
            "block w-full min-w-0",
            textClassName,
            "max-md:text-primary max-md:underline max-md:decoration-primary/55",
            "max-md:decoration-2 max-md:underline-offset-[2px]"
          )}
        >
          {label}
        </span>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner
          className="z-[100] outline-none"
          side="top"
          sideOffset={6}
        >
          <Popover.Popup
            className={cn(
              "z-[100] max-w-[min(20rem,92vw)] rounded-lg border border-border",
              "bg-popover p-2.5 text-sm text-popover-foreground ring-1 ring-foreground/10",
              "shadow-md outline-none",
              "data-open:duration-100 data-closed:duration-100",
              "data-open:animate-in data-closed:animate-out",
              "data-closed:fade-out-0 data-open:fade-in-0"
            )}
          >
            <Popover.Title className="sr-only">{fullTitle}</Popover.Title>
            <div className="mb-1.5 -mt-0.5 flex w-full justify-end">
              <Popover.Close
                render={
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-xs"
                    className="shrink-0 text-muted-foreground"
                  />
                }
                aria-label="Close"
              >
                <XIcon className="size-3.5" />
              </Popover.Close>
            </div>
            {hasImage && flyerUrl && (
              <div className="mb-2 overflow-hidden rounded border border-border bg-muted/20">
                {/* eslint-disable-next-line @next/next/no-img-element -- flyer sizes vary; avoid layout shift in a hover target */}
                <img
                  src={flyerUrl}
                  alt=""
                  className="max-h-52 w-full min-w-0 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
            <p className="-mt-0.5 font-serif text-sm font-medium leading-snug text-foreground">
              {fullTitle}
            </p>
            {isRecurring && (
              <p className="mt-0.5 text-[0.65rem] font-medium tracking-wide text-primary">
                Recurring
              </p>
            )}
            {detail && !hideDetailInTooltip && (
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {detail}
              </p>
            )}
            <Popover.Close
              render={
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  className="mt-3 w-full touch-manipulation sm:hidden"
                />
              }
            >
              Done
            </Popover.Close>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}

type PlottedLabelProps = {
  event: PlottedTournamentEvent;
} & Pick<
  TournamentEventHoverByFieldsProps,
  "className" | "textClassName" | "variant"
>;

export function PlottedTournamentEventLabelCell({
  event,
  className,
  textClassName,
  variant = "cell",
}: PlottedLabelProps) {
  return (
    <TournamentEventHover
      className={className}
      label={event.title}
      fullTitle={event.fullTitle}
      detail={event.detail}
      flyerUrl={event.flyerUrl}
      isRecurring={event.isRecurring}
      textClassName={textClassName}
      variant={variant}
    />
  );
}
