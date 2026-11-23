"use client";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { StayDates, countNights } from "./StayDates";
import { currency } from "@/data/stays";

export const BookingCard = ({ price, maxGuests }: { price: number; maxGuests: number }) => {
  const [guests, setGuests] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [dates, setDates] = useState<DateRange>();
  const nights = countNights(dates);

  const changeDates = (range: DateRange | undefined) => {
    setDates(range);
    setConfirmed(false);
  };

  const changeGuests = (delta: number) => {
    setGuests((current) => Math.min(maxGuests, Math.max(1, current + delta)));
    setConfirmed(false);
  };

  return (
    <aside id="reserva" aria-label="Reserva de demostración" className="scroll-mt-5 rounded-2xl border border-line bg-white p-5 shadow-[0_6px_22px_#23272410] md:sticky md:top-6 md:p-4 xl:p-7">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-moss">Reserva de demostración</p>
      <h2 className="text-3xl font-bold tracking-tight">{currency(price)} <span className="font-sans text-sm font-normal">/ noche</span></h2>
      <div className="mt-5"><StayDates range={dates} onChange={changeDates} /></div>
      <div className="mb-5 mt-2 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line px-3 py-3">
        <div><p className="text-sm font-semibold">Huéspedes</p><p className="text-xs text-ink/75">Máximo {maxGuests} personas</p></div>
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Quitar huésped" disabled={guests === 1} onClick={() => changeGuests(-1)} className="size-9 cursor-pointer rounded-full border border-line disabled:cursor-default disabled:opacity-35">−</button>
          <output aria-live="polite" className="w-5 text-center">{guests}</output>
          <button type="button" aria-label="Añadir huésped" disabled={guests === maxGuests} onClick={() => changeGuests(1)} className="size-9 cursor-pointer rounded-full border border-line disabled:cursor-default disabled:opacity-35">+</button>
        </div>
      </div>
      {nights > 0 && <p role="status" className="mb-4 flex justify-between gap-2 border-t border-line pt-3 text-sm">
        <span>{nights} {nights === 1 ? "noche" : "noches"}</span><strong>Total: {currency(nights * price)}</strong>
      </p>}
      <button type="button" disabled={!!dates?.from && nights === 0} onClick={() => setConfirmed(true)} className="w-full cursor-pointer rounded-full bg-ember px-4 py-3 text-sm font-semibold text-white hover:bg-ink disabled:cursor-default disabled:opacity-50">Simular reserva</button>
      {confirmed && <p role="status" className="mt-3 text-sm text-moss">Simulación completada para {guests} {guests === 1 ? "huésped" : "huéspedes"}.</p>}
    </aside>
  );
};
