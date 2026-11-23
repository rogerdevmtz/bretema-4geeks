"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { currency, stayCoordinates } from "@/data/stays";
import type { Stay } from "@/types/stay";

export const StayMap = ({ stays }: { stays: Stay[] }) => {
  const container = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<string>();
  const [error, setError] = useState(false);
  const active = stays.find((stay) => stay.id === selected);

  useEffect(() => {
    const element = container.current;
    if (!element || stays.length === 0) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;

    void import("leaflet").then((L) => {
      if (disposed) return;
      const map = L.map(element, { scrollWheelZoom: false, fadeAnimation: false, zoomAnimation: false }).setView([42.85, -8.25], 8);
      cleanup = () => map.remove();
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const coordinates = stays.map((stay) => {
        const point = stayCoordinates[stay.id];
        // Only the numeric price enters the generated marker markup.
        L.marker(point, {
          title: stay.title,
          alt: stay.title,
          icon: L.divIcon({
            className: "",
            html: `<span class="inline-block rounded-full border-2 border-white bg-moss px-2 py-1 text-xs font-bold whitespace-nowrap text-white shadow-md">${currency(stay.price)}</span>`,
            iconSize: [52, 28],
            iconAnchor: [26, 14],
          }),
        }).on("click", () => setSelected(stay.id)).addTo(map);
        return point;
      });
      map.fitBounds(L.latLngBounds(coordinates), { padding: [38, 38], maxZoom: 12 });
    }).catch(() => { if (!disposed) setError(true); });

    return () => { disposed = true; cleanup?.(); };
  }, [stays]);

  return (
    <aside id="mapa" aria-label="Mapa interactivo de alojamientos" className="min-w-0 scroll-mt-5 overflow-hidden rounded-2xl border border-line bg-white shadow-sm md:sticky md:top-6">
      <h2 className="flex items-center gap-2 border-b border-line px-4 py-3 font-serif text-xl font-semibold"><span aria-hidden className="text-moss">◈</span> Mapa de Galicia</h2>
      {stays.length > 0 && <div ref={container} aria-label="Mapa de alojamientos de demostración" className="relative isolate z-0 h-80 bg-line md:h-[min(70vh,39rem)]" />}
      <div className="px-4 py-3 text-sm">
        {error && <p role="status">El mapa no está disponible en este momento.</p>}
        {active ? <Link className="font-semibold text-moss underline" href={`/rooms/${active.id}`}>{active.title} · {currency(active.price)} / noche</Link>
          : <p>{stays.length ? "Selecciona un marcador para ver el alojamiento." : "No hay alojamientos que mostrar en el mapa."}</p>}
      </div>
    </aside>
  );
};
