import type { Stay } from "@/types/stay";

export const HostInfo = ({ host }: { host: Stay["host"] }) => (
  <section aria-label="Anfitrión" className="flex items-center gap-4 border-y border-line py-5">
    <span aria-hidden className="grid size-12 place-items-center rounded-full bg-moss font-serif text-xl text-white">{host.name[0]}</span>
    <div><h2 className="font-semibold">Anfitrión: {host.name}</h2><p className="text-sm text-ink/75">{host.years} años recibiendo huéspedes</p></div>
  </section>
);
