"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { stays } from "@/data/stays";
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
    <div className="mx-auto max-w-7xl px-5 pb-16 pt-6 md:px-10 md:pt-9">
      <Link href="/catalog" className="mb-5 inline-block text-sm font-semibold text-moss hover:underline">← Volver al catálogo</Link>
      {stay === undefined && <p role="status">Cargando alojamiento…</p>}
      {stay === null && <h1 className="font-serif text-4xl">Alojamiento no disponible</h1>}
      {stay && <>
        <Gallery images={stay.images} title={stay.title} />
        <div className="mt-8 grid items-start gap-8 md:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
          <div className="space-y-7"><RoomHeading stay={stay} /><HostInfo host={stay.host} /><Amenities items={stay.amenities} /></div>
          <BookingCard price={stay.price} maxGuests={stay.maxGuests} />
        </div>
      </>}
    </div>
  );
};
