import Image from "next/image";
import Link from "next/link";
import { currency } from "@/data/stays";
import type { Stay } from "@/types/stay";

export const StayCard = ({ stay }: { stay: Stay }) => (
  <article className="min-w-0">
    <Link href={`/rooms/${stay.id}`} className="group block rounded-xl">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-line">
        <Image src={`/stays/${stay.images[0]}.jpg`} alt="" fill sizes="(max-width: 767px) 94vw, (max-width: 1100px) 48vw, 30vw" className="object-cover motion-safe:transition-transform motion-safe:group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-paper px-3 py-1 text-xs font-semibold">{stay.category}</span>
      </div>
      <div className="flex items-start justify-between gap-2 pt-3">
        <h3 className="font-serif text-xl font-semibold group-hover:underline">{stay.title}</h3>
        <span className="shrink-0 text-sm" aria-label={`Valoración ${stay.rating} de 5`}>★ {stay.rating.toFixed(2).replace(".", ",")}</span>
      </div>
      <p className="text-sm text-ink/75">{stay.location}</p>
      <p className="mt-2 text-sm"><strong>{currency(stay.price)}</strong> / noche</p>
    </Link>
  </article>
);