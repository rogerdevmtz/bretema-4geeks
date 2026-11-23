"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { matches, stays } from "@/data/stays";
import { StayGrid } from "./StayGrid";
import { StayMap } from "./StayMap";

export const CatalogView = ({ query }: { query: string }) => {
  const [order, setOrder] = useState("asc");
  const [amenity, setAmenity] = useState("");
  const results = useMemo(() => stays.filter((stay) => matches(stay, query) && (!amenity || stay.amenities.includes(amenity))), [query, amenity]);
  const visible = [...results]
    .sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);
  return (
    <div className="mx-auto max-w-[96rem] px-5 pb-16 pt-6 md:px-10 md:pt-9">
      <nav aria-label="Ruta del catálogo" className="flex items-center gap-2 text-sm text-ink/75">
        <Link href="/" className="font-semibold text-moss hover:underline">Inicio</Link><span aria-hidden>/</span><span aria-current="page">Catálogo</span>
      </nav>
      <h1 className="mt-3 break-words text-3xl font-bold tracking-tight md:text-[2.65rem]">{query ? `Estancias para «${query}»` : "Estancias en Galicia"}</h1>
      <div aria-label="Filtrar por servicio" role="group" className="mt-5 flex gap-2 overflow-x-auto px-1 py-2">
        {["", "Wi-Fi", "Cocina", "Aparcamiento", "Jardín", "Terraza"].map((item) => (
          <button key={item} type="button" aria-pressed={amenity === item} onClick={() => setAmenity(item)}
            className="min-h-10 shrink-0 cursor-pointer rounded-full border border-line bg-white px-4 text-sm font-medium text-ink hover:border-moss aria-pressed:border-moss aria-pressed:bg-moss aria-pressed:text-white">
            {item || "Todos los servicios"}
          </button>
        ))}
      </div>
      <div className="my-5 flex flex-wrap items-center justify-between gap-3 border-y border-line bg-white py-3 md:my-6">
        <p role="status" className="text-sm font-semibold">{visible.length} {visible.length === 1 ? "alojamiento" : "alojamientos"}</p>
        <label className="flex items-center gap-2 text-sm">Ordenar por
          <select value={order} onChange={(event) => setOrder(event.target.value)} className="min-h-10 rounded-lg border border-line bg-paper px-2 text-ink">
            <option value="asc">Precio ascendente</option>
            <option value="desc">Precio descendente</option>
          </select>
        </label>
        {visible.length > 0 && <Link href="#mapa" className="inline-flex min-h-10 items-center rounded-lg border border-line px-3 text-sm font-semibold text-moss hover:bg-paper md:hidden">Ver mapa ↓</Link>}
      </div>
      <div className="grid items-start gap-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] xl:gap-8">
        <section aria-label="Resultados"><StayGrid stays={visible} compact /></section>
        <StayMap stays={results} />
      </div>
    </div>
  );
};
