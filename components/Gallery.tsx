"use client";
import Image from "next/image";
import { useState } from "react";

export const Gallery = ({ images, title }: { images: string[]; title: string }) => {
  const [index, setIndex] = useState(0);
  const move = (delta: number) => setIndex((current) => (current + images.length + delta) % images.length);

  return (
    <section aria-label="Galería de fotos" className="relative isolate overflow-hidden rounded-2xl bg-line">
      <div className="relative aspect-[4/3] md:aspect-[2.55]">
        <Image src={`/stays/${images[index]}.jpg`} alt={`${title} · imagen ilustrativa ${index + 1}`} fill sizes="(max-width: 767px) 94vw, 1150px" className="object-cover" />
      </div>
      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2">
        <button type="button" onClick={() => move(-1)} className="cursor-pointer rounded-full bg-paper px-3 py-2 text-sm font-semibold hover:bg-white">← Anterior</button>
        <p aria-live="polite" className="rounded-full bg-ink px-3 py-2 text-sm text-white">{index + 1} / {images.length}</p>
        <button type="button" onClick={() => move(1)} className="cursor-pointer rounded-full bg-paper px-3 py-2 text-sm font-semibold hover:bg-white">Siguiente →</button>
      </div>
    </section>
  );
};
