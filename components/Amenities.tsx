const icons: Record<string, string> = { Cocina: "♨", "Wi-Fi": "◉", Terraza: "☀", Aparcamiento: "Ⓟ", Chimenea: "♨", Jardín: "♧", Patio: "◇", Lavadora: "◌" };

export const Amenities = ({ items }: { items: string[] }) => (
  <section>
    <h2 className="mb-4 font-serif text-2xl font-semibold">Servicios</h2>
    <ul className="grid grid-cols-2 gap-3">
      {items.map((item) => <li key={item} className="flex items-center gap-2 rounded-lg border border-line p-3 text-sm"><span aria-hidden className="text-lg text-moss">{icons[item]}</span>{item}</li>)}
    </ul>
  </section>
);
