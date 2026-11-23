import type { Stay } from "@/types/stay";

export const categories = [
  { label: "Todas", icon: "⌂" }, { label: "Costa", icon: "≈" },
  { label: "Bosque", icon: "♧" }, { label: "Pueblo", icon: "◇" },
];

export const stays: Stay[] = [
  { id: "luz-de-marea", title: "Casa Luz de Marea", location: "Muxía, Costa da Morte", category: "Costa", price: 148, rating: 4.93, reviews: 38, images: ["mar", "interior", "loft"], host: { name: "Antía", years: 3 }, amenities: ["Cocina", "Wi-Fi", "Terraza", "Aparcamiento"], maxGuests: 4, description: "Una casa para desayunar despacio, seguir el sendero hacia el mar y volver al caer la tarde." },
  { id: "entre-carballos", title: "Refugio Entre Carballos", location: "O Courel, Lugo", category: "Bosque", price: 109, rating: 4.87, reviews: 24, images: ["refugio", "loft", "interior"], host: { name: "Xoán", years: 5 }, amenities: ["Chimenea", "Cocina", "Jardín", "Aparcamiento"], maxGuests: 3, description: "Un refugio de montaña con jardín y espacio para leer junto al fuego tras una ruta por el valle." },
  { id: "casa-do-patio", title: "Casa do Patio", location: "Allariz, Ourense", category: "Pueblo", price: 89, rating: 4.81, reviews: 19, images: ["casa", "loft", "interior"], host: { name: "Iria", years: 2 }, amenities: ["Cocina", "Wi-Fi", "Patio", "Lavadora"], maxGuests: 2, description: "Una casa tranquila para salir a pie al casco histórico, parar en el mercado y volver al patio." },
  { id: "casa-da-fraga", title: "Casa da Fraga", location: "Pontedeume, A Coruña", category: "Bosque", price: 125, rating: 4.90, reviews: 31, images: ["bosque", "interior", "loft"], host: { name: "Noa", years: 4 }, amenities: ["Wi-Fi", "Jardín", "Cocina", "Aparcamiento"], maxGuests: 5, description: "Un punto de partida para caminar a orillas del Eume y preparar una cena en familia al volver." },
];

export const currency = (price: number) => new Intl.NumberFormat("es-ES", {
  style: "currency", currency: "EUR", maximumFractionDigits: 0,
}).format(price);

const normalize = (text: string) => text.toLocaleLowerCase("es").normalize("NFD").replace(/\p{M}/gu, "");

export const matches = (stay: Stay, query: string) =>
  normalize([stay.title, stay.location, stay.category].join(" ")).includes(normalize(query.trim()));
