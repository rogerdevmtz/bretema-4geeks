import Link from "next/link";

export const DestinationSearch = ({ query, onChange }: { query: string; onChange: (query: string) => void }) => (
  <div role="search" className="flex items-center gap-2 rounded-2xl border border-line bg-white p-1 shadow-sm focus-within:border-moss sm:rounded-full">
    <label htmlFor="destination" className="sr-only">Buscar destino o alojamiento</label>
    <span aria-hidden className="ml-3 block size-3 shrink-0 rounded-full border-2 border-moss after:block after:h-1.5 after:w-0.5 after:translate-x-[9px] after:translate-y-[7px] after:-rotate-45 after:bg-moss" />
    <input id="destination" type="search" placeholder="Destino o alojamiento" value={query}
      onChange={(event) => onChange(event.target.value)}
      className="min-h-11 min-w-0 flex-1 scroll-mt-6 rounded-full px-2 text-sm font-medium" />
    <Link href={{ pathname: "/catalog", query: query ? { q: query } : {} }}
      className="rounded-full bg-ember px-4 py-2.5 text-sm font-semibold text-white hover:bg-ink">Buscar</Link>
  </div>
);
