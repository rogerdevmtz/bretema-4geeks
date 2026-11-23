"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { matches, stays } from "@/data/stays";
import { StayGrid } from "./StayGrid";
import { StayMap } from "./StayMap";

export const CatalogView = ({ query }: { query: string }) => {
  const [order, setOrder] = useState("asc");
  const results = useMemo(() => stays.filter((stay) => matches(stay, query)), [query]);
  const visible = [...results]
    .sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);
  return (
    <div className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-14">
      <Link href="/" className="text-sm font-semibold text-moss hover:underline">← Volver al inicio</Link>
      <h1 className="mt-4 break-words font-serif text-5xl tracking-tight md:text-6xl">{query ? `Estancias para «${query}»` : "Estancias en Galicia"}</h1>
      <div className="my-6 flex flex-wrap items-center justify-between gap-3 border-y border-line py-4">
        <p role="status" className="text-sm font-semibold">{visible.length} {visible.length === 1 ? "alojamiento" : "alojamientos"}</p>
        <label className="flex items-center gap-2 text-sm">Ordenar por
          <select value={order} onChange={(event) => setOrder(event.target.value)} className="rounded-md border border-line bg-white p-2">
            <option value="asc">Precio ascendente</option>
            <option value="desc">Precio descendente</option>
          </select>
        </label>
      </div>
      <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
        <section aria-label="Resultados"><StayGrid stays={visible} compact /></section>
        <StayMap stays={results} />
      </div>
    </div>
  );
};
