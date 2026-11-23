"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { matches, stays } from "@/data/stays";
import type { Stay } from "@/types/stay";
import { Header } from "./Header";
import { DestinationSearch } from "./DestinationSearch";
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
    <>
      <Header search={<DestinationSearch query={query} onChange={setQuery} />} />
      <main id="contenido" className="mx-auto max-w-7xl px-5 pb-16 md:px-10">
        <section className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4 border-b border-line py-6 md:py-9">
          <div>
            <h1 className="font-serif text-5xl leading-none tracking-tight md:text-7xl">Escapadas en Galicia</h1>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink/80 md:text-base">Casas frente al mar, entre bosques y en pueblos para recorrer a pie.</p>
          </div>
          <Link href="/catalog" className="inline-flex min-h-10 items-center gap-3 rounded-lg border border-moss/30 px-4 text-sm font-semibold text-moss hover:bg-moss hover:text-white">
            Explorar catálogo <span aria-hidden>→</span>
          </Link>
        </section>
        <section className="mt-4 md:mt-6">
          <CategoryBar active={category} onSelect={setCategory} />
          <div className="mb-4 mt-4 flex flex-wrap items-end justify-between gap-2 md:mb-5 md:mt-6">
            <h2 className="font-serif text-2xl font-semibold md:text-3xl">{category === "Todas" ? "Estancias para tu próxima escapada" : `Estancias · ${category}`}</h2>
            {loaded !== null && <p aria-live="polite" className="text-sm text-ink/75">{visible.length} {visible.length === 1 ? "alojamiento" : "alojamientos"}</p>}
          </div>
          <div aria-busy={loaded === null}>
            {loaded === null ? <p role="status" className="rounded-xl border border-line bg-white/50 p-5 text-sm">Cargando alojamientos…</p> : <StayGrid stays={visible} />}
          </div>
        </section>
      </main>
    </>
  );
};
