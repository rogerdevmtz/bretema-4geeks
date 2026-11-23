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
        <section aria-labelledby="estancias" className="pt-4 md:pt-6">
          <div className="border-b border-line pb-3">
            <CategoryBar active={category} onSelect={setCategory} />
          </div>
          <div className="mb-5 mt-5 flex flex-wrap items-end justify-between gap-3 md:mb-6 md:mt-7">
            <div>
              <h1 id="estancias" className="text-pretty text-3xl font-bold tracking-tight md:text-4xl">{category === "Todas" ? "Estancias en Galicia" : `Estancias · ${category}`}</h1>
              {loaded !== null && <p aria-live="polite" className="mt-1 text-sm text-ink/70">{visible.length} {visible.length === 1 ? "alojamiento" : "alojamientos"}</p>}
            </div>
            <Link href="/catalog" className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line px-4 text-sm font-semibold text-moss hover:border-moss hover:bg-paper">
              Ver catálogo <span aria-hidden>→</span>
            </Link>
          </div>
          <div aria-busy={loaded === null}>
            {loaded === null ? <p role="status" className="rounded-xl border border-line bg-white/50 p-5 text-sm">Cargando alojamientos…</p> : <StayGrid stays={visible} />}
          </div>
        </section>
      </main>
    </>
  );
};
