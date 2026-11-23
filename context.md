# Brétema · Contexto del proyecto

Brétema es una demo de alojamientos vacacionales en Galicia. La persona usuaria busca una escapada, explora por destino o entorno, compara precios y valora qué casa admite a su grupo. Todos los anuncios y sus datos son de demostración.

## Especificación previa a la implementación

Punto de partida móvil: 375 px. A partir de 768 px, se amplían las cuadrículas y se colocan el mapa y la reserva en columnas secundarias. El lenguaje visual propio combina fondos cálidos, verde bosque y titulares serif.

| Vista | Composición móvil y componentes | Props principales |
| --- | --- | --- |
| Inicio | `Header` con búsqueda encima de la portada. `CategoryBar` encima de `StayGrid` en una columna. | `DestinationSearch(query, onChange)`, `CategoryBar(active, onSelect)`, `StayGrid(stays)`, `StayCard(stay)`. |
| Catálogo | Cabecera con recuento y ordenación, `StayGrid` y `StayMap` debajo. En escritorio el mapa queda a la derecha. | `CatalogView(query)`, `StayGrid(stays)`, `StayMap(stays)`. |
| Detalle | Enlace al catálogo, `Gallery`, `RoomHeading`, `HostInfo`, `Amenities` y `BookingCard`. En escritorio la reserva queda a la derecha del contenido. | `RoomView(id)`, `Gallery(images, title)`, `RoomHeading(stay)`, `HostInfo(host)`, `Amenities(items)`, `BookingCard(price, maxGuests)`, `StayDates(range, onChange)`. |

Referencias funcionales: [inicio de Airbnb](https://www.airbnb.com/), [resultados de Galicia](https://www.airbnb.com/galicia-spain/stays) y [ficha de alojamiento](https://www.airbnb.com/rooms/43698932). Se usan como referencia de arquitectura de información y del recorrido entre vistas. La marca, los textos y la composición de Brétema son propios.

Prompt de análisis: «A 375 px, enumera los componentes de cada vista, indica las props mínimas y explica su relación en el layout móvil y cómo se reorganizarían desde 768 px. Conserva las interacciones y crea una identidad visual propia».

## Observaciones de las referencias a 375 px

- Inicio: la búsqueda se coloca antes del descubrimiento y las categorías se recorren horizontalmente. Brétema conserva ese orden y usa una portada editorial.
- Catálogo: la referencia regional sitúa el destino y la búsqueda antes de las recomendaciones. Brétema abre directamente con el recuento y el control de precio exigidos por la rúbrica.
- Ficha: la foto encabeza el recorrido móvil y la información continúa debajo. Brétema usa una galería con controles visibles y separa el anfitrión, los servicios y la reserva.
