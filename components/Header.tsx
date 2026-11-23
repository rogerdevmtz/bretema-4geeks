import type { ReactNode } from "react";
import Link from "next/link";

export const Header = ({ search }: { search?: ReactNode }) => (
  <header className="border-b border-line bg-white">
    <a href="#contenido" className="sr-only focus:not-sr-only">Saltar al contenido</a>
    <div className="relative mx-auto flex max-w-7xl items-center flex-wrap justify-between gap-x-4 gap-y-3 px-5 py-4 md:px-10">
      <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-[-0.06em] text-moss">
        <span aria-hidden className="grid size-8 place-items-center rounded-[0.8rem] bg-moss text-lg text-white">≈</span>Brétema
      </Link>
      <div className="order-last w-full md:order-none md:w-auto md:flex-1 md:max-w-md">
        {search ?? <Link href="/#destination" className="flex min-h-12 items-center justify-between gap-3 rounded-2xl border border-line bg-paper px-4 text-sm font-semibold text-ink hover:border-moss sm:rounded-full">
          Busca tu próxima estancia <span aria-hidden className="text-base text-moss">→</span>
        </Link>}
      </div>
      <nav aria-label="Principal" className="flex items-center gap-4 text-sm font-semibold md:gap-8">
        <Link href="/" className="hidden hover:underline sm:inline">Inicio</Link>
        <Link href="/catalog" className="hover:underline">Catálogo</Link>
        <details className="group">
          <summary aria-label="Menú de usuario" className="flex size-9 cursor-pointer list-none items-center justify-center rounded-full border border-line group-open:bg-white [&::-webkit-details-marker]:hidden">
            <span aria-hidden>☰</span>
          </summary>
          <div className="absolute right-5 top-full z-10 grid min-w-40 gap-3 rounded-lg border border-line bg-paper p-4 shadow-lg md:right-10">
            <Link href="/">Inicio</Link><Link href="/catalog">Catálogo</Link>
          </div>
        </details>
      </nav>
    </div>
  </header>
);
