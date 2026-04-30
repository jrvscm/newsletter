import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { DemoDayRegistration } from "@/lib/calendar";

type DemoDayLinksProps = {
  items: DemoDayRegistration[];
};

export function DemoDayLinks({ items }: DemoDayLinksProps) {
  return (
    <ul className="m-0 list-none space-y-6 p-0" role="list">
      {items.map((d) => (
        <li key={d.id}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="min-w-0">
              <p className="font-serif text-lg font-medium leading-snug text-foreground sm:text-xl">
                {d.title}
              </p>
              <p className="mt-1 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {d.detail}
              </p>
            </div>
            <a
              href={d.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "w-full shrink-0 sm:w-auto"
              )}
            >
              Register
              <span className="sr-only"> for {d.title}, opens in new tab</span>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
