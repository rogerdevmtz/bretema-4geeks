import type { Stay } from "@/types/stay";
import { StayCard } from "./StayCard";

export const StayGrid = ({ stays, compact = false }: { stays: Stay[]; compact?: boolean }) =>
  stays.length ? (
    <div className={`grid gap-x-5 gap-y-8 md:grid-cols-2 ${compact ? "" : "xl:grid-cols-4"}`}>
      {stays.map((stay) => <StayCard key={stay.id} stay={stay} />)}
    </div>
  ) : <p role="status" className="rounded-lg border border-line p-5">No encontramos alojamientos con esos filtros.</p>;
