"use client";
import Image from "next/image";
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
        <section className="relative isolate mt-5 flex min-h-[17rem] items-end overflow-hidden rounded-3xl bg-ink px-6 py-8 text-white md:mt-7 md:min-h-[23rem] md:px-12 md:py-11">
          <Image src="/stays/bosque.jpg" alt="" fill sizes="(max-width: 767px) 100vw, 1200px" className="-z-20 object-cover object-[center_60%]" fetchPriority="high" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-[#10251e] via-[#10251e]/75 to-[#10251e]/10" />
          <div className="max-w-lg">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-100">Estancias en Galicia</p>
            <h1 className="font-serif text-[2.7rem] leading-[1.02] tracking-tight md:text-[4.6rem]">Tu próxima escapada, a tu ritmo.</h1>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/90 md:max-w-sm md:text-base">Explora casas junto al mar, refugios de bosque y pueblos para descubrir a pie.</p>
            <Link href="/catalog" className="mt-5 inline-flex min-h-11 items-center gap-3 rounded-full bg-white px-5 text-sm font-semibold text-ink hover:bg-paper">
              Explorar catálogo <span aria-hidden>→</span>
            </Link>
          </div>
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
