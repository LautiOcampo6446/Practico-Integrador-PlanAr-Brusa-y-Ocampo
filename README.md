# PlanAR

## Integrantes

- [Nombre Integrante 1]
- [Nombre Integrante 2]

## Descripción

PlanAR es una aplicación web para descubrir eventos, recitales, ferias y actividades culturales. Permite a los usuarios explorar eventos disponibles, reservar su lugar y filtrar por categorías, todo desde el navegador sin necesidad de instalación.

## Tecnologías utilizadas

- HTML5
- CSS3 (Flexbox, efectos hover, variables CSS)
- JavaScript (DOM manipulation, arrays)
- Git / GitHub

## Funcionalidades desarrolladas

- **Página de eventos (`eventos.html`):** muestra tres tarjetas de eventos con nombre, fecha y lugar.
- **Reservar lugar:** al presionar el botón, aparece un mensaje dentro de la página confirmando la reserva (sin usar `alert`).
- **Mostrar categorías:** muestra un array `["Conciertos", "Ferias", "Deportes"]` renderizado dinámicamente con JavaScript.
- **Volver al inicio:** botón que redirige a `index.html`.

## Tabla de Registro de Errores (QA)

| N° | Error encontrado | Pasos para reproducirlo | Resultado esperado | Solución aplicada |
|----|-----------------|-------------------------|--------------------|-------------------|
| 1  |                 | 1. <br>2. <br>3.        |                    |                   |
| 2  |                 | 1. <br>2. <br>3.        |                    |                   |
| 3  |                 | 1. <br>2. <br>3.        |                    |                   |

## Diseño de Arquitectura

```
┌──────────────┐        ┌──────────────┐        ┌───────────────┐
│   Usuario    │──────▶ │  Navegador   │──────▶ │   Internet    │
│              │◀────── │  Web         │◀────── │               │
└──────────────┘        └──────────────┘        └───────┬───────┘
                                                         │
                                                         ▼
                                                ┌───────────────┐
                                                │ Reverse Proxy │
                                                │  (Nginx)      │
                                                └───────┬───────┘
                                                         │
                                                         ▼
                                                ┌───────────────┐
                                                │    Servidor   │
                                                │  PlanAR       │
                                                │ (index.html / │
                                                │ eventos.html) │
                                                └───────────────┘
```

**Flujo:** El usuario abre el navegador → hace una solicitud HTTP → viaja por Internet → llega al Reverse Proxy (que actúa de intermediario y redirige el tráfico) → llega al servidor donde están alojados los archivos de PlanAR → el servidor devuelve los archivos HTML/CSS/JS → el navegador los renderiza para el usuario.
