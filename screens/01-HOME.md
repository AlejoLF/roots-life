# 🏠 Home — ROOTS LIFE

> Especificación completa de la pantalla principal. Mobile-first, editorial, orientada a conversión sin perder voz de marca.

- **Versión:** 1.0
- **Fecha:** 2026-04-15
- **Deriva de:** BRIEF-ROOTS-LIFE.md · tokens/design-tokens.json

---

## 1. Intención de la pantalla

La Home tiene **3 trabajos** en este orden:

1. **Identidad en 2 segundos** — quien llega desde Instagram tiene que sentir la voz de la marca antes de scrollear.
2. **Llevar al catálogo** — la conversión principal es "ver productos / comprar".
3. **Exponer narrativa de cápsula + origen** — la marca vende símbolos, no remeras; el storytelling es clave.

**No** es una home que pide hacer todo. Carrito y checkout viven en otras pantallas. La Home dispara deseo.

---

## 2. Arquitectura general (secciones en orden)

```
┌─────────────────────────────────────┐
│ 1. HEADER (sticky, translúcido)      │
├─────────────────────────────────────┤
│ 2. HERO — editorial B&N              │ ← Display Kobe + CTA + stamp
├─────────────────────────────────────┤
│ 3. MANIFESTO STRIP (1 línea)         │ ← "Real clothes. Real stories."
├─────────────────────────────────────┤
│ 4. CÁPSULA ACTUAL (destacado)        │ ← Hero secundario de la colección
├─────────────────────────────────────┤
│ 5. GRID DE PRODUCTOS (destacados)    │ ← 4-8 cards
├─────────────────────────────────────┤
│ 6. STORY STRIP (foto antigua)        │ ← Patagonia, origen, link a /historia
├─────────────────────────────────────┤
│ 7. SERIGRAFÍA (banda horizontal)     │ ← CTA WhatsApp, secundario
├─────────────────────────────────────┤
│ 8. INSTAGRAM FEED (6 tiles)          │ ← Conexión con el canal principal
├─────────────────────────────────────┤
│ 9. FOOTER                            │
└─────────────────────────────────────┘
                              [WhatsApp FAB fijo]
```

---

## 3. Layout grid

### Container

- Max width: `container-lg` (1200px) por defecto.
- Hero y Story Strip usan `container-xl` (1440px) o **full-bleed** (100vw).
- Padding lateral: `space-4` mobile → `space-8` laptop → `space-12` desktop.

### Columnas

| Breakpoint | Cols | Gutter |
|---|---|---|
| Mobile (<640) | 4 | `space-4` (16) |
| Tablet (≥640) | 8 | `space-6` (24) |
| Laptop (≥1024) | 12 | `space-8` (32) |

Grid de productos: 2 cols mobile → 3 tablet → 4 laptop.

---

## 4. Sección por sección

### 4.1 Header (sticky)

**Comportamiento:**
- Altura: 64px mobile / 80px desktop.
- Al cargar: fondo transparente sobre el hero oscuro (texto `paper-100`).
- Al scrollear >40px: fondo `paper-100` con `shadow-sm` y texto `ink-900`.
- Transición: `duration-normal` + `ease-standard`.

**Contenido mobile:**
```
[≡]       [ROOTS LIFE logo]       [🛒 (2)]
```

**Contenido desktop:**
```
[LOGO]  SHOP  CÁPSULAS  HISTORIA  SERIGRAFÍA       [IG] [🛒 (2)]
```

**Tokens:**
- Logo: SVG `ROOTS LIFE` (usa `paper-100` sobre hero, `ink-900` scrolled).
- Nav links: `text-nav-link` (Poppins ExtraBold 14px · tracking 0.06em · uppercase).
- Separación nav items: `inline-lg` (24px).
- Carrito: icono 24px + badge redondo con contador en `rust-500` / `paper-100`.

**Accesibilidad:**
- Header tiene `role="banner"`.
- Menú mobile abre drawer lateral (ver pantalla aparte).
- Focus visible en tab: outline 2px `rust-500` offset 2px.

---

### 4.2 Hero — editorial B&N

**Intención:** dar el golpe de marca. Un diseñador abriendo desde IG tiene que pensar "esto tiene identidad".

**Layout:**

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│                                                      │
│              ROOTS LIFE                              │  ← display-hero
│                                                      │
│     Indumentaria nacida en el sur                    │  ← body-lg paper-300
│                                                      │
│     [VER COLECCIÓN →]                                │  ← button primary
│                                                      │
│                                                      │
│     CHUBUT · PATAGONIA · ESTD 2024                   │  ← stamp
└──────────────────────────────────────────────────────┘
```

**Fondo:** `ink-900` (#0E0E0E).

**Opción A (recomendada para v1):** fondo oscuro sólido con **halftone overlay sutil** (trama de puntos `paper-100` al 4% de opacidad) que hace eco del recurso identitario de las remeras.

**Opción B:** usar `Comodoro Rivadavia - cerro - foto antigua.png` como fondo con overlay `ink-900` al 72%. Da contexto geográfico pero pisa la tipografía — usar solo si la foto se recorta bien a pantalla completa.

**Alto:** 85vh mobile, 90vh desktop (mínimo 720px).

**Tokens concretos:**

| Elemento | Token | Valor |
|---|---|---|
| Fondo | `--color-bg-inverse` | `#0E0E0E` |
| Título | `.text-display-hero` | Kobe 44→76px · uppercase |
| Color título | `--color-text-inverse` | `#F7F3EA` |
| Subtítulo | `.text-body-lg` | Poppins 18px |
| Color subtítulo | `--paper-300` | `#E3DBC8` (levemente apagado) |
| Stack título→subtítulo | `--stack-md` | 16px |
| Stack subtítulo→CTA | `--stack-lg` | 24px |
| Stack CTA→stamp | `--stack-2xl` | 64px |
| CTA | Botón primary-inverse | ver §5 componentes |
| Stamp | `.text-stamp` · `--paper-400` | 12px · 0.1em tracking |

**Alineación:** centrado horizontal en mobile, centrado o bottom-left en desktop (más editorial).

**Animación al entrar (opcional):**
- Título: fade + translate Y 20px → 0, `duration-slow` + `ease-decelerate`, delay 100ms.
- Subtítulo: ídem con delay 250ms.
- CTA: ídem con delay 400ms.
- Stamp: fade simple con delay 600ms.

---

### 4.3 Manifesto strip

Una línea corta que actúa como pausa respirada entre el hero y el producto.

```
─────────────────────────────────────────────────────
     Real clothes. Real stories. Desde el sur.
─────────────────────────────────────────────────────
```

**Tokens:**
- Fondo: `--color-bg` (paper-100).
- Padding vertical: `--space-16` (64) mobile, `--space-24` (96) desktop.
- Texto: `.text-display-xl` pero en tamaño reducido — **Kobe 36→60px** centrado.
- Color: `--color-text` (ink-900).
- Ancho máximo: `--container-prose` (672px).

**Opcional:** línea divisoria arriba y abajo (`border-top/bottom: 1px solid var(--color-border)`) para enmarcar la franja.

---

### 4.4 Cápsula actual (destacado narrativo)

Se destaca **una** cápsula/colección activa. Formato editorial tipo revista.

**Layout desktop (split):**

```
┌──────────────────────┬──────────────────────────────┐
│                      │  SOUTH COAST SERIES          │  ← caption ink-400
│                      │                              │
│    [Imagen full      │  NO BAD DAYS                 │  ← h1 (display-lg)
│     producto o       │                              │
│     lifestyle]       │  Cuatro piezas nacidas en la │  ← body-lg
│                      │  costa del sur. Serigrafía a │
│                      │  3 tintas.                   │
│                      │                              │
│                      │  [EXPLORAR CÁPSULA →]        │  ← button
└──────────────────────┴──────────────────────────────┘
```

**Layout mobile (stacked):**

```
┌────────────────────────┐
│                        │
│  [Imagen full 4:5]     │
│                        │
├────────────────────────┤
│  SOUTH COAST SERIES    │
│  NO BAD DAYS           │
│  Cuatro piezas...      │
│  [EXPLORAR CÁPSULA →]  │
└────────────────────────┘
```

**Tokens:**
- Container: full-bleed (100vw).
- Fondo: `--paper-200` (#EFE8D9) — fondo alternativo cálido que diferencia de la manifesto strip.
- Split desktop: 50/50, gap 0 (las dos mitades se tocan).
- Imagen: ratio 4:5 mobile, 1:1 o 3:4 desktop.
- Padding interno lado derecho: `--inset-2xl` (48px).
- Caption "SOUTH COAST SERIES": `.text-caption` · color `--ink-500`.
- Título cápsula: `.text-display-lg` (Kobe, uppercase).
- Body: `.text-body-lg` · `--ink-700` · `max-width: 28rem`.
- Stack caption→título: `--stack-sm` (8).
- Stack título→body: `--stack-md` (16).
- Stack body→CTA: `--stack-lg` (24).

**Regla de rotación:** esta sección se actualiza cada vez que sale una cápsula nueva. Dato desde CMS / archivo config.

---

### 4.5 Grid de productos destacados

**Layout:**
- Título sección arriba: `Lo más nuevo` · `.text-h2` · alineado izquierda.
- Link opcional "Ver todo →" alineado a derecha en desktop.
- Grid debajo: 2 cols mobile / 3 cols tablet / 4 cols laptop.
- Gap: `--gap-md` (24).
- 8 productos en desktop (2 filas de 4), 6 en tablet, 4 en mobile (+ link "Ver todo").

**Card de producto:**

```
┌────────────────────┐
│                    │
│   [Imagen 4:5]     │  ← fondo paper-200, imagen con ligero padding
│                    │
├────────────────────┤
│ REMERA · 22 22     │  ← caption · text-xs uppercase muted
│ Pegasus            │  ← h5 extrabold
│ $24.000            │  ← body-strong
└────────────────────┘
```

**Tokens:**
- Card fondo: `--color-bg` (transparente sobre la página).
- Imagen: ratio 4:5, fondo `--paper-200` para dar respiro, object-fit cover.
- Padding texto: `--inset-sm` (12) top.
- Stack caption→título: `--stack-xs` (4).
- Stack título→precio: `--stack-xs` (4).
- Hover (desktop): imagen escala 1.03, `duration-slow` `ease-standard`. Título cambia a `--rust-500`.
- Focus: ring `rust-500` 2px + offset 2px.
- Toda la card es `<a>` (una única región clickeable).

**Accesibilidad:**
- Alt text obligatorio con nombre de producto + contexto ("Remera Pegasus — cápsula 22 22").
- Precio en `<span aria-label="Precio: 24 mil pesos">$24.000</span>` o similar.

---

### 4.6 Story strip — origen patagónico

Sección editorial que usa la **foto antigua de Comodoro Rivadavia**. Conecta marca con lugar.

**Layout full-bleed:**

```
┌──────────────────────────────────────────────────────┐
│ [Foto antigua B&N de Comodoro — cerro/campo]         │
│                                                      │
│                        ┌──────────────────┐          │
│                        │ DESDE EL SUR     │          │  ← display-xl paper
│                        │                  │          │
│                        │ Nacimos en       │          │  ← body-lg
│                        │ Comodoro         │          │
│                        │ Rivadavia...     │          │
│                        │                  │          │
│                        │ [NUESTRA         │          │  ← button ghost inverse
│                        │  HISTORIA →]     │          │
│                        └──────────────────┘          │
└──────────────────────────────────────────────────────┘
```

**Tokens:**
- Imagen: `Comodoro Rivadavia - cerro - foto antigua.png` como background, `object-fit: cover`, posición bottom center.
- Overlay: gradiente `linear-gradient(180deg, rgba(14,14,14,0.2) 0%, rgba(14,14,14,0.75) 100%)` para asegurar contraste en la parte baja donde vive el texto.
- Alto: 60vh mobile, 70vh desktop, mínimo 500px.
- Texto: alineado a derecha en desktop, centrado en mobile.
- Título: `.text-display-xl` · `--paper-100`.
- Body: `.text-body-lg` · `--paper-200`.
- CTA: botón **ghost inverse** (borde `paper-100`, texto `paper-100`, fondo transparente).

**Regla de respeto:** no recortar demasiado la foto — la composición histórica (cerro + construcción baja) es parte de la narrativa.

---

### 4.7 Serigrafía — banda horizontal (secundaria)

Mención breve, no invasiva. Deriva a WhatsApp.

**Layout:**

```
┌──────────────────────────────────────────────────────┐
│  TALLER DE SERIGRAFÍA                                │
│  ¿Querés estampar tu propia idea? Trabajamos         │
│  sobre pedido desde el sur.                          │
│                                                      │
│  [HABLAR POR WHATSAPP →]                             │
└──────────────────────────────────────────────────────┘
```

**Tokens:**
- Fondo: `--ink-900` (oscuro, para crear contraste con las secciones claras).
- Texto: `--paper-100`.
- Padding vertical: `--space-20` (80) desktop, `--space-12` (48) mobile.
- Caption "TALLER DE SERIGRAFÍA": `.text-caption` · `--paper-300`.
- Título: `.text-h2` (Kobe) · `--paper-100`.
- Body: `.text-body` · `--paper-200` · max-width 42rem.
- CTA: botón accent (`rust-500` bg, `paper-100` fg). Abre `https://wa.me/549XXX...?text=...` con mensaje prellenado.

**Mensaje WhatsApp prellenado (ejemplo):**
```
Hola! Quiero cotizar un trabajo de serigrafía con ROOTS.
```

---

### 4.8 Instagram feed

Conexión con el canal principal. 6 tiles de imágenes recientes + CTA a seguir.

**Layout:**

```
SEGUINOS EN INSTAGRAM                      @rootslife.ar →

┌─────┬─────┬─────┬─────┬─────┬─────┐
│ IG  │ IG  │ IG  │ IG  │ IG  │ IG  │
└─────┴─────┴─────┴─────┴─────┴─────┘
```

**Tokens:**
- Título: `.text-h3` izquierda · link "@rootslife.ar →" a la derecha.
- Grid: 3 cols mobile · 6 cols desktop · gap `--gap-tight` (8).
- Tiles: aspect-ratio 1:1, object-fit cover.
- Hover (desktop): imagen desatura levemente (`filter: grayscale(30%)`).

**Técnica:** v1 puede ser **estático** (6 imágenes curadas por Alejo, actualización manual). Si después se quiere, se suma integración vía IG Graph API o un servicio tipo Taggbox.

---

### 4.9 Footer

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  ROOTS LIFE           CATÁLOGO         AYUDA         │
│  [logo]               Remeras          Envíos        │
│                       Buzos            Cambios       │
│  Real clothes.        Cápsulas         Talles        │
│  Real stories.        Ver todo         Contacto      │
│                                                      │
│  ─────────────────────────────────────────────────   │
│                                                      │
│  CHUBUT · PATAGONIA · ESTD 2024     [IG]  [WSP]      │
│                                                      │
│  © 2026 ROOTS LIFE. Todos los derechos reservados.   │
└──────────────────────────────────────────────────────┘
```

**Tokens:**
- Fondo: `--ink-900`.
- Texto: `--paper-200` (muted).
- Headers columna: `.text-h6` · `--paper-100`.
- Links: `.text-body-sm` · `--paper-300` · hover `--paper-100`.
- Stamp: `.text-stamp` · `--paper-400`.
- Padding vertical: `--space-16` (64) mobile, `--space-20` (80) desktop.
- Divider: `1px solid var(--color-border-inverse)`.

---

### 4.10 Elementos flotantes

#### WhatsApp FAB (floating action button)

Siempre visible, excepto sobre la sección de Serigrafía (para no duplicar).

**Especificaciones:**
- Posición: `fixed; bottom: 24px; right: 24px;`
- Tamaño: 56×56px.
- Fondo: **verde WhatsApp oficial** `#25D366` (única excepción de la paleta — es un reconocimiento de marca externa).
- Icono: logo WhatsApp blanco, 28px.
- Sombra: `--shadow-lg`.
- Border-radius: `--radius-full`.
- Z-index: `--z-sticky` (200).
- Aparición: delay 1.5s al cargar, fade + scale-in con `duration-slow`.
- Accesibilidad: `aria-label="Contactar por WhatsApp"`.

#### IG link (en header, no flotante)

Icono 20px en el header, a la izquierda del carrito. No flotante (se accede vía header y footer).

---

## 5. Componentes — tokens específicos

### 5.1 Botón primary (hero CTA, "Agregar al carrito")

```css
.btn-primary {
  background: var(--color-primary);        /* ink-900 */
  color: var(--color-primary-fg);           /* paper-100 */
  padding: var(--space-4) var(--space-6);   /* 16 × 24 */
  border: 0;
  border-radius: var(--radius-sm);          /* 4px — plano, editorial */
  font: inherit;
  /* composite */
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--fw-extrabold);
  letter-spacing: var(--tr-wide);
  text-transform: uppercase;
  line-height: var(--lh-tight);
  transition: background var(--duration-normal) var(--ease-standard);
}
.btn-primary:hover  { background: var(--color-primary-hover); }
.btn-primary:focus-visible { outline: 2px solid var(--rust-500); outline-offset: 2px; }
```

### 5.2 Botón accent (Serigrafía · WhatsApp)

Mismo que primary pero con `--color-accent` (rust-500) como fondo.

### 5.3 Botón ghost inverse (Story strip)

```css
.btn-ghost-inverse {
  background: transparent;
  color: var(--paper-100);
  border: 2px solid var(--paper-100);
  padding: calc(var(--space-4) - 2px) calc(var(--space-6) - 2px);
  /* tipografía idéntica al primary */
}
.btn-ghost-inverse:hover {
  background: var(--paper-100);
  color: var(--ink-900);
}
```

---

## 6. Responsive — reglas por breakpoint

| Sección | Mobile (<640) | Tablet (640-1024) | Desktop (≥1024) |
|---|---|---|---|
| Header | 64px · hamburger | 72px · hamburger | 80px · nav completo |
| Hero | 85vh · centrado | 90vh · centrado | 90vh · bottom-left |
| Manifesto | 64px vertical | 80px | 96px |
| Cápsula | stacked imagen→texto | split 50/50 compacto | split 50/50 con aire |
| Grid productos | 2 cols | 3 cols | 4 cols |
| Story strip | 60vh | 65vh | 70vh |
| Serigrafía | centrado 48px vert | 64px | 80px |
| IG grid | 3 cols | 6 cols | 6 cols |
| Footer | 1 columna apilada | 2 columnas | 3 columnas |
| WhatsApp FAB | 48×48 · bottom-16 right-16 | 56×56 | 56×56 |

---

## 7. Accesibilidad (WCAG 2.1 AA mínimo)

- **Contraste:** todos los pares verificados en DESIGN-SYSTEM-COLORS §7. Hero `paper-100` sobre `ink-900` = AAA.
- **Landmarks:** `<header>`, `<main>`, `<nav>`, `<footer>` explícitos.
- **Skip link:** al inicio del `<main>`, visible en focus, texto "Saltar al contenido".
- **Keyboard:** orden de foco lógico, todos los elementos interactivos tabulables.
- **Focus visible:** ring `rust-500` 2px con offset 2px en todo elemento focuseable.
- **Alt text:** toda imagen con alt descriptivo; las decorativas con `alt=""`.
- **Movimiento reducido:**
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```
- **Idioma:** `<html lang="es-AR">`.

---

## 8. Performance

- **LCP candidato:** imagen del hero (si se usa foto). Precargar con `<link rel="preload" as="image">`.
- **Fonts:** `font-display: swap` para Kobe y Poppins.
- **Imágenes:** `<picture>` con `srcset` (AVIF → WebP → JPG fallback). Lazy-load para todo lo que esté debajo del fold.
- **IG feed:** placeholder estático en SSR, cargar imágenes reales con `loading="lazy"`.
- **Meta:** objetivo Lighthouse ≥90 en Performance, ≥95 en Accessibility, ≥95 en SEO.

---

## 9. SEO

**Meta base:**
```html
<title>ROOTS LIFE · Indumentaria urbana desde la Patagonia</title>
<meta name="description" content="Remeras y buzos gráficos nacidos en Comodoro Rivadavia. Ropa real para gente real.">
<meta property="og:title" content="ROOTS LIFE">
<meta property="og:description" content="Indumentaria urbana desde la Patagonia.">
<meta property="og:image" content="/og/home.jpg">
<meta property="og:locale" content="es_AR">
```

**Structured data:** `Organization` + `Store` schema.org en JSON-LD.

**Palabras clave naturalizadas:** streetwear argentino, remeras gráficas, Patagonia, Comodoro Rivadavia, ropa urbana.

---

## 10. Dark mode

**Decisión:** la Home ya vive con secciones oscuras (hero + serigrafía + footer), lo que le da carácter editorial "dark-friendly" sin necesidad de un toggle explícito en v1.

Si en el futuro se suma modo oscuro de sistema:
- Invertir paper ↔ ink en secciones claras.
- Hero y Story Strip se mantienen iguales (ya son oscuros).
- Cápsula y Grid pasan a fondo `--ink-900`, texto `--paper-100`.

Ver mapeo completo en `DESIGN-SYSTEM-COLORS.md §8`.

---

## 11. Datos / contenido necesario

Para que los desarrolladores / Stitch generen esta pantalla, Alejo tiene que proveer:

### Textos
- [ ] Tagline del hero (opción base: "Indumentaria nacida en el sur").
- [ ] Nombre de la cápsula actual a destacar (ej: "No Bad Days — South Coast Series").
- [ ] Descripción corta de la cápsula (2 líneas).
- [ ] 1 párrafo para el Story Strip (origen en Comodoro).
- [ ] Mensaje prellenado del WhatsApp de serigrafía.
- [ ] Handle oficial de Instagram.

### Imágenes
- [ ] 1 imagen hero editorial (puede ser la foto antigua con overlay, o un producto en contexto).
- [ ] 1 imagen para la cápsula destacada (producto o lifestyle).
- [ ] Imágenes de los 8 productos destacados + datos (nombre, cápsula, precio).
- [ ] 6 imágenes curadas para el feed de IG.

### Números / config
- [ ] Número de WhatsApp (formato internacional: `5492974XXXXXXX`).
- [ ] URL de Instagram.

---

## 12. Próximos pasos

- [ ] Revisar spec con Alejo y ajustar copy / tokens.
- [ ] Diseñar las 4 pantallas restantes:
  - `02-CATALOGO.md` — listado de productos
  - `03-FICHA-PRODUCTO.md`
  - `04-CARRITO.md`
  - `05-SERIGRAFIA.md` (landing del servicio)
- [ ] Opcional: diseñar también `06-HISTORIA.md` (manifesto / quiénes somos).
- [ ] Auditar responsive con `ui-design:responsive-audit`.
- [ ] Validar heurística con `prototyping-testing:heuristic-evaluation`.
