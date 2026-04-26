"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { GroundsBlock } from "@/lib/data";

type GroundsSectionProps = {
  blocks: GroundsBlock[];
  name: string;
  title: string;
  avatarUrl: string;
  avatarAlt: string;
  initials: string;
};

function SingleImageBlock({
  block,
  priority,
}: {
  block: GroundsBlock;
  priority?: boolean;
}) {
  return (
    <figure className="space-y-4">
      <div className="overflow-hidden rounded-lg border border-border bg-muted/30">
        <Image
          src={block.image.src}
          alt={block.image.alt}
          width={block.image.width}
          height={block.image.height}
          className={
            block.image.height > block.image.width
              ? "mx-auto max-h-[min(520px,58vh)] w-full object-contain"
              : "aspect-video w-full object-cover"
          }
          sizes="(max-width: 760px) 100vw, 720px"
          priority={priority}
        />
      </div>
      <figcaption>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {block.text}
        </p>
      </figcaption>
    </figure>
  );
}

export function GroundsSection({
  blocks,
  name,
  title,
  avatarUrl,
  avatarAlt,
  initials,
}: GroundsSectionProps) {
  const [first, second, third] = blocks;
  const usePairLayout = blocks.length === 3 && first && second && third;

  return (
    <Card className="border border-border shadow-none ring-0">
      <CardHeader className="flex flex-row items-start gap-4 border-b border-border pb-4">
        <Avatar size="lg" className="size-14 shrink-0">
          <AvatarImage src={avatarUrl} alt={avatarAlt} className="object-top" />
          <AvatarFallback className="font-serif text-lg">{initials}</AvatarFallback>
        </Avatar>
        <div className="min-w-0 space-y-1">
          <CardTitle className="font-serif text-xl font-medium">Grounds</CardTitle>
          <p className="text-sm font-medium text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-10 pt-6 sm:space-y-12 sm:pt-8">
        {usePairLayout ? (
          <>
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {first.text}
              </p>
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
                  priority
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
              <p className="text-sm leading-relaxed text-muted-foreground">
                {second.text}
              </p>
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
              <p className="text-sm leading-relaxed text-muted-foreground">
                {third.text}
              </p>
            </div>
          </>
        ) : (
          blocks.map((block, index) => (
            <SingleImageBlock
              key={block.image.src}
              block={block}
              priority={index === 0}
            />
          ))
        )}
      </CardContent>
    </Card>
  );
}
