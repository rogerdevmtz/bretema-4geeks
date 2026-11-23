import type { Stay } from "@/types/stay";

export const RoomHeading = ({ stay }: { stay: Stay }) => (
  <header>
    <p className="text-xs font-semibold uppercase tracking-widest text-moss">{stay.category} · {stay.location}</p>
    <h1 className="mt-2 font-serif text-4xl tracking-tight md:text-6xl">{stay.title}</h1>
    <p className="mt-3 text-sm"><strong>★ {stay.rating.toFixed(2).replace(".", ",")}</strong> · {stay.reviews} reseñas · Hasta {stay.maxGuests} huéspedes</p>
    <p className="mt-4 max-w-xl text-ink/80">{stay.description}</p>
  </header>
);
