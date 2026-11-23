import Image from "next/image";
import Link from "next/link";
import { currency } from "@/data/stays";
import type { Stay } from "@/types/stay";

export const StayCard = ({ stay }: { stay: Stay }) => (
  <article className="min-w-0">
    <Link href={`/rooms/${stay.id}`} className="group flex h-full flex-col rounded-2xl">
      <div className="relative aspect-[5/4] shrink-0 overflow-hidden rounded-2xl bg-line">
        <Image src={`/stays/${stay.images[0]}.jpg`} alt="" fill sizes="(max-width: 767px) 94vw, (max-width: 1100px) 48vw, 30vw" className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.035]" />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-ink">{stay.category}</span>
      </div>
      <div className="flex flex-1 flex-col gap-2 px-0.5 pt-3">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-[1.05rem] font-bold leading-tight group-hover:underline">{stay.title}</h3>
            <span className="shrink-0 px-0.5 py-0.5 text-sm font-semibold text-ink" aria-label={`Valoración ${stay.rating} de 5`}>★ {stay.rating.toFixed(2).replace(".", ",")}</span>
          </div>
          <p className="mt-1 text-sm text-ink/75">{stay.location} · Hasta {stay.maxGuests} huéspedes</p>
        </div>
        <p className="mt-auto pt-1 text-sm tabular-nums"><strong>{currency(stay.price)}</strong> <span className="text-ink/75">/ noche</span></p>
      </div>
    </Link>
  </article>
);