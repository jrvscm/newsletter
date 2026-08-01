"use client";

import { FlagIcon } from "lucide-react";
import { Gallery } from "@/components/Gallery";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { GalleryImage } from "@/lib/data";

type GolfProCardProps = {
  message: string;
  images?: GalleryImage[];
};

export function GolfProCard({ message, images }: GolfProCardProps) {
  const hasImages = images != null && images.length > 0;

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
      <CardContent className="space-y-5 pt-4">
        <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
          {message}
        </p>
        {hasImages ? (
          <div className="space-y-2">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              2026 Club Champions
            </p>
            <Gallery images={images} columns={2} />
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
