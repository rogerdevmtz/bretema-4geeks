import Image from "next/image";
import Link from "next/link";
import { currency } from "@/data/stays";
import type { Stay } from "@/types/stay";

export const StayCard = ({ stay }: { stay: Stay }) => (
  <article className="min-w-0">
    <Link href={`/rooms/${stay.id}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm motion-safe:transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-line">
        <Image src={`/stays/${stay.images[0]}.jpg`} alt="" fill sizes="(max-width: 767px) 94vw, (max-width: 1100px) 48vw, 30vw" className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.035]" />
        <span className="absolute left-3 top-3 rounded-lg bg-paper px-2.5 py-1.5 text-xs font-semibold text-moss">{stay.category}</span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-xl font-semibold leading-tight group-hover:underline">{stay.title}</h3>
            <span className="shrink-0 rounded-md bg-paper px-1.5 py-1 text-xs font-semibold text-moss" aria-label={`Valoración ${stay.rating} de 5`}>★ {stay.rating.toFixed(2).replace(".", ",")}</span>
          </div>
          <p className="mt-1 text-sm text-ink/75">{stay.location}</p>
        </div>
        <p className="mt-auto border-t border-line pt-3 text-sm"><strong>{currency(stay.price)}</strong> <span className="text-ink/75">/ noche</span></p>
      </div>
    </Link>
  </article>
);