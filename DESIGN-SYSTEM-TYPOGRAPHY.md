# ✒️ ROOTS LIFE — Typography System

> Escala tipográfica editorial para la web. Dos familias, un ratio, reglas claras.

- **Versión:** 1.0
- **Última actualización:** 2026-04-15
- **Deriva de:** BRIEF-ROOTS-LIFE.md §8

---

## 1. Familias

| Rol | Fuente | Pesos en uso | Origen |
|---|---|---|---|
| **Display / marca** | **Kobe** | Regular · Bold | Tipografía de la identidad (logo, remeras, hoodies "Kobe") |
| **UI / cuerpo** | **Poppins** | Regular (400) · Medium (500) · ExtraBold (800) | Secundaria. Usada ya en la marca en ExtraBold para titulares |

### Provisión de fuentes

```html
<!-- Poppins desde Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;800&display=swap" rel="stylesheet">
```

```css
/* Kobe — self-hosted (no está en Google Fonts) */
@font-face {
  font-family: 'Kobe';
  src: url('/fonts/Kobe-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'Kobe';
  src: url('/fonts/Kobe-Bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
```

### Fallback stack

```css
--font-display: 'Kobe', 'Poppins', 'Helvetica Neue', Arial, sans-serif;
--font-body:    'Poppins', system-ui, -apple-system, 'Segoe UI', sans-serif;
```

---

## 2. Escala modular

**Ratio: 1.25 (Major Third)** — escalado controlado, editorial, sin saltos bruscos.
**Base: 16px** (1rem).

| Token | px | rem | Ratio | Uso principal |
|---|---|---|---|---|
| `text-xs`     | 12 | 0.75 | 0.75× | Legales, captions, fine print |
| `text-sm`     | 14 | 0.875 | 0.875× | UI secundario, metadata, sellos |
| `text-base`   | 16 | 1.00 | 1× | Body estándar — **mínimo legible** |
| `text-md`     | 18 | 1.125 | 1.125× | Body largo, párrafos editoriales |
| `text-lg`     | 20 | 1.25 | 1.25× | Subtítulos, lead de sección |
| `text-xl`     | 24 | 1.50 | 1.5× | H4 — titulares de card |
| `text-2xl`    | 30 | 1.875 | 1.875× | H3 — titulares de sección |
| `text-3xl`    | 38 | 2.375 | 2.375× | H2 — titulares de categoría |
| `text-4xl`    | 48 | 3.00 | 3× | H1 — título de página |
| `text-5xl`    | 60 | 3.75 | 3.75× | Display — hero secundario |
| `text-6xl`    | 76 | 4.75 | 4.75× | **Display hero** — home / landing |
| `text-7xl`    | 96 | 6.00 | 6× | Display XL — piezas editoriales, cápsulas |

---

## 3. Roles semánticos (tokens de producto)

Lo que el código consume. Cada rol define fuente + tamaño + peso + line-height + tracking.

### 3.1 Display (Kobe)

| Rol | Fuente | Tamaño | Peso | Line-height | Tracking | Transform |
|---|---|---|---|---|---|---|
| `display-hero`     | Kobe | `text-6xl` (76) | 700 | 1.0   | -0.02em | uppercase |
| `display-xl`       | Kobe | `text-5xl` (60) | 700 | 1.05  | -0.015em | uppercase |
| `display-lg`       | Kobe | `text-4xl` (48) | 700 | 1.1   | -0.01em | uppercase |

> **Display = Kobe siempre, uppercase siempre.** Es la voz de la marca. Se usa en hero de home, hero de cápsula, y piezas editoriales.

### 3.2 Headings (Kobe o Poppins ExtraBold — ver regla)

| Rol | Fuente | Tamaño | Peso | Line-height | Tracking | Transform |
|---|---|---|---|---|---|---|
| `h1` | Kobe | `text-4xl` (48) | 700 | 1.1 | -0.01em | uppercase |
| `h2` | Kobe | `text-3xl` (38) | 700 | 1.15 | -0.005em | uppercase |
| `h3` | Poppins | `text-2xl` (30) | 800 (ExtraBold) | 1.2 | -0.005em | none |
| `h4` | Poppins | `text-xl` (24) | 800 (ExtraBold) | 1.25 | 0 | none |
| `h5` | Poppins | `text-lg` (20) | 800 (ExtraBold) | 1.3 | 0 | none |
| `h6` | Poppins | `text-base` (16) | 800 (ExtraBold) | 1.4 | 0.02em | uppercase |

> **Regla de cruce:** Kobe vive en H1 y H2 (la "voz grande"). De H3 para abajo, Poppins ExtraBold toma el relevo para mejor legibilidad a tamaños chicos.

### 3.3 Body (Poppins)

| Rol | Fuente | Tamaño | Peso | Line-height | Tracking |
|---|---|---|---|---|---|
| `body-lg`      | Poppins | `text-md` (18)   | 400 | 1.6  | 0 |
| `body`         | Poppins | `text-base` (16) | 400 | 1.6  | 0 |
| `body-sm`      | Poppins | `text-sm` (14)   | 400 | 1.5  | 0 |
| `body-strong`  | Poppins | `text-base` (16) | 500 | 1.6  | 0 |

### 3.4 UI / Interfaz (Poppins)

| Rol | Fuente | Tamaño | Peso | Line-height | Tracking | Transform |
|---|---|---|---|---|---|---|
| `button-lg`   | Poppins | `text-base` (16) | 800 | 1.1 | 0.04em  | uppercase |
| `button`      | Poppins | `text-sm` (14)   | 800 | 1.1 | 0.04em  | uppercase |
| `button-sm`   | Poppins | `text-xs` (12)   | 800 | 1.1 | 0.06em  | uppercase |
| `label`       | Poppins | `text-sm` (14)   | 500 | 1.4 | 0.02em  | none |
| `nav-link`    | Poppins | `text-sm` (14)   | 800 | 1.1 | 0.06em  | uppercase |
| `input`       | Poppins | `text-base` (16) | 400 | 1.4 | 0       | none |
| `caption`     | Poppins | `text-xs` (12)   | 500 | 1.4 | 0.04em  | uppercase |
| `stamp`       | Poppins | `text-xs` (12)   | 800 | 1   | 0.1em   | uppercase |

> **`stamp`** = el "sello de coordenadas" de la marca (`CHUBUT · PATAGONIA · ESTD 2024`). Usarlo en footer, ficha de producto, hero.

---

## 4. Responsive — ajustes por breakpoint

Los tamaños declarados son **desktop**. En mobile se reducen para no romper el layout:

| Rol | Desktop (≥1024px) | Tablet (≥768px) | Mobile (<768px) |
|---|---|---|---|
| `display-hero` | 76 | 60 | 44 |
| `display-xl`   | 60 | 48 | 36 |
| `display-lg`   | 48 | 38 | 32 |
| `h1`           | 48 | 38 | 30 |
| `h2`           | 38 | 30 | 24 |
| `h3`           | 30 | 24 | 20 |
| `h4`           | 24 | 20 | 18 |
| `body-lg`      | 18 | 18 | 16 |
| `body`         | 16 | 16 | 16 |

> **Body nunca baja de 16px.** Es el piso de legibilidad.

### Clamp recomendado (fluid type)

Para display y H1 podés usar `clamp()` y saltear media queries:

```css
.display-hero { font-size: clamp(2.75rem, 6vw + 1rem, 4.75rem); } /* 44px → 76px */
.h1           { font-size: clamp(1.875rem, 3vw + 1rem, 3rem); }   /* 30px → 48px */
```

---

## 5. Reglas de uso

### Combinaciones permitidas

- ✓ Kobe display + Poppins body (pareja base)
- ✓ Kobe H1 + Poppins ExtraBold H3 como "gancho" editorial
- ✓ Stamp en uppercase tracking 0.1em sobre hero oscuro con `paper-100`

### Evitar

- ✗ Kobe en body largo (se vuelve difícil de leer en párrafo)
- ✗ Poppins ExtraBold en párrafos (solo para énfasis de 1–3 palabras)
- ✗ Mezclar más de **dos pesos de Kobe** en una misma vista
- ✗ Kobe en minúsculas (la marca siempre lo usa en caps o title case editorial)
- ✗ Tracking cerrado (`-0.02em`) en tamaños menores a 30px — rompe legibilidad

### Largo de línea

- Body: **60–75 caracteres** por línea ideal
- Display: **30–50 caracteres** (más ancho rompe la intención)
- Usá `max-width` en rem sobre columnas de texto:

```css
.prose { max-width: 42rem; }      /* 672px — ~65ch */
.prose-narrow { max-width: 32rem; } /* 512px — columna editorial */
```

---

## 6. Tokens CSS — listos para copiar

```css
:root {
  /* Familias */
  --font-display: 'Kobe', 'Poppins', Helvetica, sans-serif;
  --font-body:    'Poppins', system-ui, sans-serif;

  /* Escala (rem) */
  --text-xs:   0.75rem;   /* 12 */
  --text-sm:   0.875rem;  /* 14 */
  --text-base: 1rem;      /* 16 */
  --text-md:   1.125rem;  /* 18 */
  --text-lg:   1.25rem;   /* 20 */
  --text-xl:   1.5rem;    /* 24 */
  --text-2xl:  1.875rem;  /* 30 */
  --text-3xl:  2.375rem;  /* 38 */
  --text-4xl:  3rem;      /* 48 */
  --text-5xl:  3.75rem;   /* 60 */
  --text-6xl:  4.75rem;   /* 76 */
  --text-7xl:  6rem;      /* 96 */

  /* Pesos */
  --fw-regular:   400;
  --fw-medium:    500;
  --fw-bold:      700;    /* Kobe bold */
  --fw-extrabold: 800;    /* Poppins extrabold */

  /* Line heights */
  --lh-none:    1;
  --lh-tight:   1.1;
  --lh-snug:    1.2;
  --lh-normal:  1.4;
  --lh-relaxed: 1.6;

  /* Tracking */
  --tr-tighter: -0.02em;
  --tr-tight:   -0.01em;
  --tr-normal:  0;
  --tr-wide:    0.04em;
  --tr-wider:   0.06em;
  --tr-widest:  0.1em;
}
```

### Clases utilitarias

```css
.display-hero {
  font-family: var(--font-display);
  font-size: clamp(2.75rem, 6vw + 1rem, var(--text-6xl));
  font-weight: var(--fw-bold);
  line-height: var(--lh-none);
  letter-spacing: var(--tr-tighter);
  text-transform: uppercase;
}

.h1 {
  font-family: var(--font-display);
  font-size: clamp(1.875rem, 3vw + 1rem, var(--text-4xl));
  font-weight: var(--fw-bold);
  line-height: var(--lh-tight);
  letter-spacing: var(--tr-tight);
  text-transform: uppercase;
}

.h3 {
  font-family: var(--font-body);
  font-size: var(--text-2xl);
  font-weight: var(--fw-extrabold);
  line-height: var(--lh-snug);
  letter-spacing: var(--tr-tight);
}

.body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--fw-regular);
  line-height: var(--lh-relaxed);
}

.button {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--fw-extrabold);
  line-height: var(--lh-tight);
  letter-spacing: var(--tr-wide);
  text-transform: uppercase;
}

.stamp {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--fw-extrabold);
  line-height: var(--lh-none);
  letter-spacing: var(--tr-widest);
  text-transform: uppercase;
}
```

---

## 7. Ejemplos de composición

### Hero de home

```
[display-hero]     ROOTS LIFE
[body-lg]          Indumentaria urbana nacida en el sur.
[button]           VER COLECCIÓN →
[stamp]            CHUBUT · PATAGONIA · ESTD 2024
```

### Ficha de producto

```
[caption]   REMERA · SOUTH COAST SERIES
[h2]        No Bad Days
[body]      Descripción breve del producto y su historia...
[h5]        $24.000
[button-lg] AGREGAR AL CARRITO
```

### Manifiesto / editorial

```
[display-xl] DESDE EL SUR
[body-lg]    Párrafo editorial largo que usa Poppins Regular 18px
             con line-height generoso y max-width contenido para
             mantener líneas legibles...
[stamp]      REAL CLOTHES · REAL STORIES
```

---

## 8. Accesibilidad

- **Body mínimo 16px** siempre — nunca 14px para párrafo largo.
- **Line-height 1.5+** en body para cumplir WCAG AAA de espacio entre líneas.
- **Tracking positivo en caps** (mínimo `0.02em`) para evitar que Kobe uppercase se vea apretada.
- **Contraste:** ver DESIGN-SYSTEM-COLORS §7. El par default `ink-900` sobre `paper-100` garantiza AAA en todos los tamaños.
- **Focus ring visible** en links y botones con outline de 2px (no solo cambio de color).
- **Escalado del usuario:** todo en `rem` — el zoom del navegador funciona correctamente.

---

## 9. Próximos pasos

- [ ] Conseguir los archivos `.woff2` de Kobe y guardarlos en `/fonts/`.
- [ ] Spacing system (siguiente — `ui-design:spacing-system`).
- [ ] Exportar todo a `design-tokens.json` al cerrar la Fase 3.
