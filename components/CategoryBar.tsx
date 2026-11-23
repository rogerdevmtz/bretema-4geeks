import { categories } from "@/data/stays";

export const CategoryBar = ({ active, onSelect }: { active: string; onSelect: (category: string) => void }) => (
  <div role="group" aria-label="Categorías" className="flex gap-2 overflow-x-auto px-1 py-1 md:gap-4">
    {categories.map(({ label, icon }) => (
      <button key={label} type="button" aria-pressed={active === label} onClick={() => onSelect(label)}
        className={`flex min-h-16 min-w-[4.65rem] shrink-0 cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border px-3 text-xs font-semibold md:min-w-24 md:px-5 ${active === label ? "border-moss/30 bg-moss/10 text-moss" : "border-transparent bg-white text-ink/75 hover:bg-paper"}`}>
        <span aria-hidden className="text-xl leading-none">{icon}</span>{label}
      </button>
    ))}
  </div>
);
