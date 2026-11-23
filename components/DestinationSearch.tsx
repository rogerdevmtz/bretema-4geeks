import Link from "next/link";

export const DestinationSearch = ({ query, onChange }: { query: string; onChange: (query: string) => void }) => (
  <div role="search" className="flex items-center gap-2 rounded-full border border-line bg-white p-1">
    <label htmlFor="destination" className="sr-only">Buscar destino o alojamiento</label>
    <input id="destination" type="search" placeholder="Destino o alojamiento" value={query}
      onChange={(event) => onChange(event.target.value)}
      className="min-h-10 min-w-0 flex-1 rounded-full px-3 text-sm" />
    <Link href={{ pathname: "/catalog", query: query ? { q: query } : {} }}
      className="rounded-full bg-moss px-4 py-2.5 text-sm font-semibold text-white hover:bg-ink">Buscar</Link>
  </div>
);
