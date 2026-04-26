"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import type { GalleryImage } from "@/lib/data";

type GalleryProps = {
  images: GalleryImage[];
};

export function Gallery({ images }: GalleryProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<GalleryImage | null>(null);

  const openImage = useCallback((img: GalleryImage) => {
    setActive(img);
    setOpen(true);
  }, []);

  const handleOpenChange = useCallback((next: boolean) => {
    setOpen(next);
    if (!next) {
      setActive(null);
    }
  }, []);

  return (
    <>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
        {images.map((image) => (
          <li key={image.src} className="min-w-0">
            <button
              type="button"
              onClick={() => openImage(image)}
              className="group relative block w-full overflow-hidden rounded-lg border border-border bg-card text-left outline-none transition hover:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-haspopup="dialog"
              aria-label={`Open larger view: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt=""
                width={image.width}
                height={image.height}
                className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent
          showCloseButton
          className="max-w-[min(90vw,720px)] border border-border p-2 sm:p-3"
          aria-describedby={undefined}
        >
          <DialogTitle className="sr-only">
            {active?.alt ?? "Gallery image"}
          </DialogTitle>
          {active ? (
            <div className="relative overflow-hidden rounded-md">
              <Image
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                className="max-h-[min(70vh,560px)] w-full object-contain"
                sizes="90vw"
                priority
              />
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
