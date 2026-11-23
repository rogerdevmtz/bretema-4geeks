"use client";
import { DayPicker, type DateRange } from "react-day-picker";
import { es } from "react-day-picker/locale";

const midnight = (date: Date) => Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());

export const countNights = (range: DateRange | undefined) =>
  range?.from && range.to ? (midnight(range.to) - midnight(range.from)) / 86_400_000 : 0;

export const StayDates = ({ range, onChange }: { range: DateRange | undefined; onChange: (range: DateRange | undefined) => void }) => {
  const label = (date?: Date) => date?.toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" });
  return (
    <div className="my-5 min-w-0">
      <details className="@container rounded-lg border border-line p-3">
        <summary className="cursor-pointer text-sm font-semibold">
          {range?.from ? `${label(range.from)} → ${label(range.to) ?? "Elegir salida"}` : "Elegir entrada y salida"}
        </summary>
        <DayPicker aria-label="Fechas de estancia" className="mt-3 [--rdp-accent-color:#174739] [--rdp-day-width:min(2rem,14cqw)] [--rdp-day-height:2rem] [--rdp-day_button-width:var(--rdp-day-width)] [--rdp-day_button-height:2rem]"
          mode="range" locale={es} selected={range} onSelect={onChange} min={1} excludeDisabled disabled={{ before: new Date() }} />
        {range?.from && <button type="button" onClick={() => onChange(undefined)} className="mt-3 cursor-pointer text-sm font-semibold text-moss underline">Borrar fechas</button>}
      </details>
    </div>
  );
};
