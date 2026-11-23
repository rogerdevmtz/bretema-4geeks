# Brétema

Proyecto académico para 4Geeks. Explora alojamientos ficticios en Galicia, compara resultados y simula una reserva.

## Ejecutar en local

Requisitos: Node.js 20.9 o superior y npm.

```sh
npm ci
npm run dev
```

Abre http://localhost:3000. Para comprobar el proyecto, ejecuta `npm run lint`, `npx tsc --noEmit` y `npm run build`.

## Rutas

- `/` — búsqueda instantánea, categorías y carga simulada.
- `/catalog` — resultados reutilizando las tarjetas, orden por precio y vista previa del mapa.
- `/rooms/[id]` — galería, ficha, anfitrión, servicios y simulación de reserva.

Next.js 16, React, TypeScript, App Router y Tailwind CSS. La especificación de las vistas está en [context.md](context.md). Los valores, nombres y reseñas son ficticios. Las fotos son ilustrativas y proceden de Unsplash. No se realizan reservas reales.

## Fotografías

[Casa junto al mar](https://images.unsplash.com/photo-1499793983690-e29da59ef1c2) · [Refugio](https://images.unsplash.com/photo-1510798831971-661eb04b3739) · [Casa y jardín](https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8) · [Casa en el bosque](https://images.unsplash.com/photo-1449844908441-8829872d2607) · [Interior](https://images.unsplash.com/photo-1449247709967-d4461a6a6103) · [Salón](https://images.unsplash.com/photo-1600210492486-724fe5c67fb0).
