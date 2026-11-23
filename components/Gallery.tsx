"use client";
import Image from "next/image";
import { useState } from "react";

export const Gallery = ({ images, title }: { images: string[]; title: string }) => {
  const [index, setIndex] = useState(0);
  const move = (delta: number) => setIndex((current) => (current + images.length + delta) % images.length);
  const controls = "grid size-10 cursor-pointer place-items-center rounded-full bg-paper text-lg font-semibold text-ink shadow-sm hover:bg-white";

  return (
    <section aria-label="Galería de fotos" className="grid gap-2 md:grid-cols-[minmax(0,1.75fr)_minmax(0,1fr)]">
      <div className="relative isolate aspect-[4/3] overflow-hidden rounded-2xl bg-line md:aspect-[1.85]">
        <Image src={`/stays/${images[index]}.jpg`} alt={`${title} · imagen ilustrativa ${index + 1}`} fill sizes="(max-width: 767px) 94vw, 720px" className="object-cover" />
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 md:inset-x-4 md:bottom-4">
          <button type="button" aria-label="Foto anterior" onClick={() => move(-1)} className={controls}>←</button>
          <p aria-live="polite" className="rounded-full bg-ink/90 px-3 py-2 text-sm text-white">{index + 1} / {images.length}</p>
          <button type="button" aria-label="Foto siguiente" onClick={() => move(1)} className={controls}>→</button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 md:grid-cols-1 md:grid-rows-3" role="group" aria-label="Vistas previas">
        {images.map((photo, position) => (
          <button key={photo} type="button" aria-label={`Mostrar foto ${position + 1}`} aria-pressed={position === index}
            onClick={() => setIndex(position)}
            className="relative aspect-[2] cursor-pointer overflow-hidden rounded-xl bg-line opacity-75 hover:opacity-100 aria-pressed:opacity-100 aria-pressed:ring-2 aria-pressed:ring-moss aria-pressed:ring-offset-2 md:aspect-auto">
            <Image src={`/stays/${photo}.jpg`} alt="" fill sizes="(max-width: 767px) 30vw, 270px" className="object-cover" />
          </button>
        ))}
      </div>
    </section>
  );
};