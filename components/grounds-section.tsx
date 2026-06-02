"use client";

import Image from "next/image";
import { TractorIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { GalleryImage, GroundsBlock } from "@/lib/data";
import { cn } from "@/lib/utils";

type GroundsSectionProps = {
  blocks: GroundsBlock[];
};

function GroundsParagraphs({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const paragraphs = text.split(/\n\n+/).filter((p) => p.trim().length > 0);

  return (
    <div className={cn("space-y-4 text-sm leading-relaxed", className)}>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph.trim()}</p>
      ))}
    </div>
  );
}

function GroundsBlockText({ block }: { block: GroundsBlock }) {
  if (!block.textRed) {
    return (
      <GroundsParagraphs
        text={block.text}
        className="text-muted-foreground"
      />
    );
  }

  return (
    <div className="text-sm leading-relaxed">
      <GroundsParagraphs text={block.text} className="text-muted-foreground" />
      <hr className="my-4 border-border" />
      <p className="whitespace-pre-line text-red-600 dark:text-red-500">{block.textRed}</p>
    </div>
  );
}

function SingleImageBlock({ block }: { block: GroundsBlock & { image: GalleryImage } }) {
  const { image } = block;
  return (
    <figure className="space-y-4">
      <div className="overflow-hidden rounded-lg border border-border bg-muted/30">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={
            image.height > image.width
              ? "mx-auto max-h-[min(520px,58vh)] w-full object-contain"
              : "aspect-video w-full object-cover"
          }
          sizes="(max-width: 760px) 100vw, 720px"
        />
      </div>
      <figcaption>
        <GroundsBlockText block={block} />
      </figcaption>
    </figure>
  );
}

function hasImage(block: GroundsBlock): block is GroundsBlock & { image: GalleryImage } {
  return block.image != null;
}

export function GroundsSection({ blocks }: GroundsSectionProps) {
  const [first, second, third] = blocks;
  const usePairLayout =
    blocks.length === 3 &&
    first &&
    second &&
    third &&
    hasImage(first) &&
    hasImage(second) &&
    hasImage(third);

  return (
    <Card className="border border-border shadow-none ring-0">
      <CardHeader className="border-b border-border pb-4">
        <CardTitle className="flex items-center gap-2.5 font-serif text-xl font-medium">
          <TractorIcon
            className="size-5 shrink-0 text-muted-foreground"
            aria-hidden
          />
          Grounds
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-10 pt-6 sm:space-y-12 sm:pt-8">
        {usePairLayout ? (
          <>
            <div>
              <GroundsBlockText block={first} />
            </div>

            <div
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
              role="group"
              aria-label="Course photos: maintenance and green conditions"
            >
              <div className="overflow-hidden rounded-lg border border-border bg-muted/30">
                <Image
                  src={first.image.src}
                  alt={first.image.alt}
                  width={first.image.width}
                  height={first.image.height}
                  className="aspect-[3/4] w-full object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="overflow-hidden rounded-lg border border-border bg-muted/30">
                <Image
                  src={third.image.src}
                  alt={third.image.alt}
                  width={third.image.width}
                  height={third.image.height}
                  className="aspect-[3/4] w-full object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>

            <div>
              <GroundsBlockText block={second} />
            </div>

            <figure className="space-y-4">
              <div className="overflow-hidden rounded-lg border border-border bg-muted/30">
                <Image
                  src={second.image.src}
                  alt={second.image.alt}
                  width={second.image.width}
                  height={second.image.height}
                  className="aspect-video w-full object-cover"
                  sizes="(max-width: 760px) 100vw, 720px"
                />
              </div>
            </figure>

            <div>
              <GroundsBlockText block={third} />
            </div>
          </>
        ) : (
          blocks.map((block, index) =>
            hasImage(block) ? (
              <SingleImageBlock key={block.image.src} block={block} />
            ) : (
              <div key={index}>
                <GroundsBlockText block={block} />
              </div>
            )
          )
        )}
      </CardContent>
    </Card>
  );
}
