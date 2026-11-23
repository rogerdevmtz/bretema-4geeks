import { categories } from "@/data/stays";

export const CategoryBar = ({ active, onSelect }: { active: string; onSelect: (category: string) => void }) => (
  <div role="group" aria-label="Categorías" className="flex gap-2 overflow-x-auto px-1 py-2 md:gap-3">
    {categories.map(({ label, icon }) => (
      <button key={label} type="button" aria-pressed={active === label} onClick={() => onSelect(label)}
        className={`flex min-h-12 shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 text-sm font-semibold md:px-5 ${active === label ? "border-moss bg-moss text-white" : "border-line bg-white/60 text-moss hover:bg-white"}`}>
        <span aria-hidden className="text-xl leading-none">{icon}</span>{label}
      </button>
    ))}
  </div>
);
