"use client";

import { FlagIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type GolfProCardProps = {
  message: string;
};

export function GolfProCard({ message }: GolfProCardProps) {
  return (
    <Card className="border border-border shadow-none ring-0">
      <CardHeader className="border-b border-border pb-4">
        <CardTitle className="flex items-center gap-2.5 font-serif text-xl font-medium">
          <FlagIcon
            className="size-5 shrink-0 text-muted-foreground"
            aria-hidden
          />
          Golf Shop
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
          {message}
        </p>
      </CardContent>
    </Card>
  );
}
