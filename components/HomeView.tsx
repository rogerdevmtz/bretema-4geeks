"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { matches, stays } from "@/data/stays";
import type { Stay } from "@/types/stay";
import { CategoryBar } from "./CategoryBar";
import { StayGrid } from "./StayGrid";

export const HomeView = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todas");
  const [loaded, setLoaded] = useState<Stay[] | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(stays), 700);
    return () => window.clearTimeout(timer);
  }, []);

  const visible = (loaded ?? []).filter((stay) =>
    matches(stay, query) && (category === "Todas" || stay.category === category));

  return (
    <div className="mx-auto max-w-7xl px-5 pb-16 pt-5 md:px-10 md:pt-8">
      <section className="grid overflow-hidden rounded-2xl bg-moss text-white md:grid-cols-[1.08fr_1fr]">
        <div className="px-6 py-9 md:px-12 md:py-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100">Alojamientos en Galicia</p>
          <h1 className="max-w-sm font-serif text-5xl leading-[0.98] tracking-tight md:text-6xl">Tu próxima escapada empieza aquí</h1>
          <p className="mt-4 max-w-xs text-sm text-emerald-50 md:text-base">Encuentra una casa junto al mar, en el bosque o en un pueblo gallego.</p>
          <div className="mt-6 flex max-w-md flex-wrap items-center gap-2 rounded-xl bg-paper p-2 text-ink sm:flex-nowrap">
            <label htmlFor="destination" className="sr-only">Buscar destino o alojamiento</label>
            <input id="destination" type="search" placeholder="Destino o alojamiento" value={query} onChange={(event) => setQuery(event.target.value)}
              className="min-h-10 min-w-0 flex-1 rounded-md px-2 text-sm" />
            <Link href={{ pathname: "/catalog", query: query ? { q: query } : {} }} className="rounded-lg bg-moss px-3 py-2.5 text-sm font-semibold text-white hover:bg-ink">Buscar</Link>
          </div>
        </div>
        <div className="relative min-h-40 bg-emerald-950 md:min-h-full">
          <Image src="/stays/mar.jpg" alt="Casa de vacaciones rodeada de vegetación" fill preload sizes="(max-width: 767px) 92vw, 50vw" className="object-cover object-center" />
        </div>
      </section>
      <section className="mt-9 md:mt-12">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
          <h2 className="font-serif text-3xl font-semibold md:text-4xl">Explora las estancias</h2>
          <Link href="/catalog" className="text-sm font-semibold text-moss underline underline-offset-4">Ver catálogo</Link>
        </div>
        <CategoryBar active={category} onSelect={setCategory} />
        <div className="mt-4" aria-busy={loaded === null}>
          {loaded === null ? <p role="status">Cargando alojamientos…</p> : <StayGrid stays={visible} />}
        </div>
      </section>
    </div>
  );
};
