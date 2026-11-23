"use client";
import { useState } from "react";
import { currency } from "@/data/stays";

export const BookingCard = ({ price, maxGuests }: { price: number; maxGuests: number }) => {
  const [guests, setGuests] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  const changeGuests = (delta: number) => {
    setGuests((current) => Math.min(maxGuests, Math.max(1, current + delta)));
    setConfirmed(false);
  };

  return (
    <aside aria-label="Reserva de demostración" className="rounded-2xl border border-line bg-white p-5 md:sticky md:top-6 md:p-7">
      <h2 className="font-serif text-3xl font-semibold">{currency(price)} <span className="font-sans text-sm font-normal">/ noche</span></h2>
      <div className="my-5 flex flex-wrap items-center justify-between gap-3 border-y border-line py-4">
        <div><p className="text-sm font-semibold">Huéspedes</p><p className="text-xs text-ink/75">Máximo {maxGuests} personas</p></div>
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Quitar huésped" disabled={guests === 1} onClick={() => changeGuests(-1)} className="size-9 cursor-pointer rounded-full border border-line disabled:cursor-default disabled:opacity-35">−</button>
          <output aria-live="polite" className="w-5 text-center">{guests}</output>
          <button type="button" aria-label="Añadir huésped" disabled={guests === maxGuests} onClick={() => changeGuests(1)} className="size-9 cursor-pointer rounded-full border border-line disabled:cursor-default disabled:opacity-35">+</button>
        </div>
      </div>
      <button type="button" onClick={() => setConfirmed(true)} className="w-full cursor-pointer rounded-lg bg-moss px-4 py-3 text-sm font-semibold text-white hover:bg-ink">Simular reserva</button>
      {confirmed && <p role="status" className="mt-3 text-sm text-moss">Simulación completada para {guests} {guests === 1 ? "huésped" : "huéspedes"}.</p>}
    </aside>
  );
};
