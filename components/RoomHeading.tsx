import type { Stay } from "@/types/stay";

export const RoomHeading = ({ stay }: { stay: Stay }) => (
  <header className="mb-5 md:mb-6">
    <p className="text-xs font-semibold uppercase tracking-widest text-moss">{stay.category} · {stay.location}</p>
    <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight md:text-5xl">{stay.title}</h1>
    <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
      <strong className="rounded-full bg-paper px-2.5 py-1 text-moss">★ {stay.rating.toFixed(2).replace(".", ",")}</strong>
      <span>{stay.reviews} reseñas · Hasta {stay.maxGuests} huéspedes</span>
    </div>
  </header>
);
