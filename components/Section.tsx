import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title?: string;
  titleAs?: "h2" | "h3";
  children: ReactNode;
  className?: string;
  intro?: string;
};

export function Section({
  id,
  title,
  titleAs: TitleTag = "h2",
  children,
  className,
  intro,
}: SectionProps) {
  const headingId = title && id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      className={cn("scroll-mt-8 space-y-6", className)}
      aria-labelledby={headingId}
    >
      {title ? (
        <div className="space-y-2">
          <TitleTag
            id={headingId}
            className="font-serif text-2xl font-medium tracking-tight text-foreground"
          >
            {title}
          </TitleTag>
          {intro ? (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {intro}
            </p>
          ) : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
