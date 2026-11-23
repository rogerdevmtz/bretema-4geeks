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

## Criterios de evaluación de 4Geeks

| Criterio | Dónde comprobarlo |
| --- | --- |
| 1. Contexto del producto, usuario y componentes | [context.md](context.md), en la raíz. |
| 2. Proyecto nuevo con Next.js 16, React, TypeScript, Tailwind y App Router | [package.json](package.json), [app](app), [postcss.config.mjs](postcss.config.mjs). |
| 3. Tres rutas navegables | Inicio `/`, catálogo `/catalog` y ficha `/rooms/[id]`. |
| 4. Navegación interna sin recargar | `Link` en la cabecera, la búsqueda, las tarjetas y el enlace de regreso al catálogo. |
| 5. Diseño mobile-first a 375 px y escritorio desde 768 px | Inicio en una columna, catálogo con mapa debajo y ficha en flujo vertical. En escritorio, cuadrículas y columnas secundarias. |
| 6. Tarjeta reutilizada | Inicio y catálogo componen `StayGrid`, que renderiza `StayCard`. |
| 7. Al menos tres usos de `useState` | Búsqueda y categoría en Inicio, orden en Catálogo, foto activa y huéspedes en la ficha. |
| 8. Carga visible simulada con `useEffect` en dos vistas | `HomeView` y `RoomView` programan la carga y cancelan el temporizador al desmontarse. |
| 9. Cinco secciones de la ficha | Galería, cabecera con reseñas y ubicación, anfitrión, servicios y reserva. |
| 10. Componentes separados y enfocados | [components](components). Cada componente tiene su archivo y queda por debajo de 80 líneas. |
| 11. Componentes funcionales declarados con `const` | Componentes en `components` y puntos de entrada en `app`. |
| 12. Tipos para alojamientos y fichas | [Stay](types/stay.ts) tipa tanto los datos de listado como los de detalle. |
| 13. Utilidades de Tailwind para los estilos | Clases de utilidad en JSX y tokens compartidos en [globals.css](app/globals.css). |
| 14. Evidencia del flujo de visión a especificación | [context.md](context.md) documenta referencias, observaciones a 375 px, prompt, componentes, props y disposición. |

La rúbrica base admite una vista previa del mapa. El mapa interactivo y el selector de fechas son ampliaciones opcionales.
