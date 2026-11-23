"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { currency, stays } from "@/data/stays";
import type { Stay } from "@/types/stay";
import { Amenities } from "./Amenities";
import { BookingCard } from "./BookingCard";
import { Gallery } from "./Gallery";
import { HostInfo } from "./HostInfo";
import { RoomHeading } from "./RoomHeading";

export const RoomView = ({ id }: { id: string }) => {
  const [stay, setStay] = useState<Stay | null | undefined>(undefined);
  useEffect(() => {
    const timer = window.setTimeout(() => setStay(stays.find((item) => item.id === id) ?? null), 600);
    return () => window.clearTimeout(timer);
  }, [id]);

  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 md:pb-16 pt-6 md:px-10 md:pt-9">
      <Link href="/catalog" className="mb-5 inline-block text-sm font-semibold text-moss hover:underline">← Volver al catálogo</Link>
      {stay === undefined && <p role="status">Cargando alojamiento…</p>}
      {stay === null && <h1 className="font-serif text-4xl">Alojamiento no disponible</h1>}
      {stay && <>
        <RoomHeading stay={stay} />
        <Gallery images={stay.images} title={stay.title} />
        <div className="mt-8 grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
          <div className="min-w-0 space-y-7">
            <HostInfo host={stay.host} />
            <section>
              <h2 className="font-serif text-2xl font-semibold">Sobre el alojamiento</h2>
              <p className="mt-2 max-w-xl leading-relaxed text-ink/80">{stay.description}</p>
            </section>
            <Amenities items={stay.amenities} />
          </div>
          <BookingCard price={stay.price} maxGuests={stay.maxGuests} />
        </div>
        <div className="fixed inset-x-0 bottom-0 z-20 flex items-center justify-between gap-4 border-t border-line bg-white px-5 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
          <p className="text-sm"><strong className="text-lg">{currency(stay.price)}</strong> / noche</p>
          <Link href="#reserva" className="rounded-full bg-moss px-5 py-3 text-sm font-semibold text-white">Ver reserva</Link>
        </div>
      </>}
    </div>
  );
};
