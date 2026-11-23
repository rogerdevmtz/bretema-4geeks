import { categories } from "@/data/stays";

export const CategoryBar = ({ active, onSelect }: { active: string; onSelect: (category: string) => void }) => (
  <div role="group" aria-label="Categorías" className="flex gap-2 overflow-x-auto px-0.5 py-2">
    {categories.map(({ label, icon }) => (
      <button key={label} type="button" aria-pressed={active === label} onClick={() => onSelect(label)}
        className={`flex shrink-0 cursor-pointer items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium md:px-4 ${active === label ? "border-moss bg-moss text-white" : "border-line hover:bg-white"}`}>
        <span aria-hidden>{icon}</span>{label}
      </button>
    ))}
  </div>
);
