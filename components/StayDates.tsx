"use client";
import { useState } from "react";
import { DayPicker, type DateRange } from "react-day-picker";
import { es } from "react-day-picker/locale";

const midnight = (date: Date) => Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
const formatDate = (date?: Date) => date?.toLocaleDateString("es-ES", {
  day: "numeric", month: "short", year: "numeric",
});
const fields = [{ key: "from", label: "Llegada" }, { key: "to", label: "Salida" }] as const;
type Field = typeof fields[number]["key"];

export const countNights = (range: DateRange | undefined) =>
  range?.from && range.to ? (midnight(range.to) - midnight(range.from)) / 86_400_000 : 0;

export const StayDates = ({ range, onChange }: { range: DateRange | undefined; onChange: (range: DateRange | undefined) => void }) => {
  const [field, setField] = useState<Field>();
  const [month, setMonth] = useState(() => new Date());
  const arrival = range?.from;
  const firstAvailable = field === "to" && arrival
    ? new Date(arrival.getFullYear(), arrival.getMonth(), arrival.getDate() + 1)
    : new Date();

  const open = (requested: Field) => {
    const nextField = requested === "to" && !range?.from ? "from" : requested;
    setMonth(range?.[nextField] ?? range?.from ?? new Date());
    setField(nextField);
  };

  const select = (date: Date) => {
    if (field === "to" && range?.from) {
      onChange({ from: range.from, to: date });
      return;
    }
    const to = range?.to && midnight(range.to) > midnight(date) ? range.to : undefined;
    onChange({ from: date, to });
    if (!to) setField("to");
  };

  return (
    <div className="min-w-0">
      <div className="grid grid-cols-2 divide-x divide-line overflow-hidden rounded-xl border border-line bg-paper/55">
        {fields.map(({ key, label }) => (
          <button key={key} type="button" onClick={() => open(key)}
            aria-expanded={field === key} aria-controls="calendario-reserva"
            className="min-w-0 cursor-pointer px-3 py-2.5 text-left hover:bg-white focus-visible:outline-offset-[-3px] aria-expanded:bg-moss/10">
            <span className="block text-xs font-bold uppercase tracking-wide text-moss">{label}</span>
            <span className="mt-1 block text-sm font-semibold">{formatDate(range?.[key]) ?? "Añadir fecha"}</span>
          </button>
        ))}
      </div>
      <div id="calendario-reserva" hidden={!field} className="@container mt-2 rounded-xl border border-line p-3">
        {field && <>
          <p role="status" className="text-sm font-semibold">{field === "from" ? "Elige la fecha de llegada" : "Elige la fecha de salida"}</p>
          <DayPicker aria-label="Fechas de estancia" className="mt-2 [--rdp-accent-color:#174739] [--rdp-day-width:min(2rem,14cqw)] [--rdp-day-height:2rem] [--rdp-day_button-width:var(--rdp-day-width)] [--rdp-day_button-height:2rem]"
            mode="single" required locale={es} month={month} onMonthChange={setMonth} selected={range?.[field]}
            onSelect={select} disabled={{ before: firstAvailable }}
          />
          <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
            {range?.from && <button type="button" onClick={() => { onChange(undefined); setField("from"); }} className="cursor-pointer text-sm font-semibold text-moss underline">Borrar fechas</button>}
            <button type="button" onClick={() => setField(undefined)} className="ml-auto cursor-pointer rounded-lg bg-moss px-4 py-2 text-sm font-semibold text-white">Listo</button>
          </div>
        </>}
      </div>
    </div>
  );
};
