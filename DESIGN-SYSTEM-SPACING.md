# 📐 ROOTS LIFE — Spacing System

> Ritmo y espacio para la web. Base 4px, escala geométrica, tokens semánticos.

- **Versión:** 1.0
- **Última actualización:** 2026-04-15
- **Base:** 4px (`0.25rem`)
- **Deriva de:** DESIGN-SYSTEM-COLORS.md, DESIGN-SYSTEM-TYPOGRAPHY.md

---

## 1. Filosofía

Dos ritmos coexisten en el sitio:

- **Editorial** → aire generoso en hero, manifiesto, páginas de historia. El espacio vale como estética.
- **Comercial** → densidad controlada en catálogo, ficha de producto y carrito. El espacio sirve a la decisión de compra.

**Regla:** usar siempre la escala. Nunca valores arbitrarios como `13px` o `22px`.

---

## 2. Escala base (4px)

| Token | px | rem | Uso típico |
|---|---|---|---|
| `space-0`   | 0   | 0      | Reset |
| `space-px`  | 1   | —      | Hairlines, borders finos |
| `space-0.5` | 2   | 0.125  | Micro-ajuste óptico |
| `space-1`   | 4   | 0.25   | Gap mínimo entre iconos y texto |
| `space-2`   | 8   | 0.5    | Padding de badge, gap interno |
| `space-3`   | 12  | 0.75   | Entre label y input |
| `space-4`   | 16  | 1      | **Unidad más usada** — padding de card, gap entre párrafos |
| `space-5`   | 20  | 1.25   | Padding vertical de botón lg |
| `space-6`   | 24  | 1.5    | Entre elementos dentro de una sección |
| `space-8`   | 32  | 2      | Padding de contenedor, entre cards |
| `space-10`  | 40  | 2.5    | Margen entre bloques relacionados |
| `space-12`  | 48  | 3      | Separación entre secciones (mobile) |
| `space-16`  | 64  | 4      | Separación entre secciones (tablet) |
| `space-20`  | 80  | 5      | Separación entre secciones (desktop) |
| `space-24`  | 96  | 6      | Hero padding, editorial breathing |
| `space-32`  | 128 | 8      | Separación entre bloques mayores |
| `space-40`  | 160 | 10     | Hero vertical extremo |
| `space-48`  | 192 | 12     | Editorial XL |

> La escala mezcla el ritmo de 4 y 8. Para layout dominan los múltiplos de 8 (8, 16, 24, 32…); para detalles finos se baja a 4 o 2.

---

## 3. Tokens semánticos (lo que el código consume)

### 3.1 Inset (padding interno de contenedores)

| Rol | Valor | Uso |
|---|---|---|
| `inset-xs` | `space-2` (8) | Badge, chip, label |
| `inset-sm` | `space-3` (12) | Botón pequeño, input compacto |
| `inset-md` | `space-4` (16) | Card básica, input estándar |
| `inset-lg` | `space-6` (24) | Card de producto, modal |
| `inset-xl` | `space-8` (32) | Contenedor de sección, panel de carrito |
| `inset-2xl` | `space-12` (48) | Hero, editorial container |

### 3.2 Stack (espacio vertical entre elementos apilados)

| Rol | Valor | Uso |
|---|---|---|
| `stack-xs` | `space-1` (4) | Entre label y campo |
| `stack-sm` | `space-2` (8) | Entre líneas de metadata |
| `stack-md` | `space-4` (16) | Entre párrafos |
| `stack-lg` | `space-6` (24) | Entre elementos de un grupo |
| `stack-xl` | `space-10` (40) | Entre grupos de una sección |
| `stack-2xl` | `space-16` (64) | Entre secciones (default) |
| `stack-3xl` | `space-24` (96) | Entre bloques editoriales grandes |

### 3.3 Inline (espacio horizontal entre elementos en línea)

| Rol | Valor | Uso |
|---|---|---|
| `inline-xs` | `space-1` (4) | Entre icono y su texto (tight) |
| `inline-sm` | `space-2` (8) | Entre icono y texto (default) |
| `inline-md` | `space-4` (16) | Entre items de nav |
| `inline-lg` | `space-6` (24) | Entre grupos de nav, entre CTAs |

### 3.4 Gap de grid / flex

| Rol | Valor | Uso |
|---|---|---|
| `gap-tight`  | `space-2` (8) | Chips, tags |
| `gap-sm`     | `space-4` (16) | Grid denso (admin, checkout) |
| `gap-md`     | `space-6` (24) | **Grid de productos (default)** |
| `gap-lg`     | `space-8` (32) | Grid editorial |
| `gap-xl`     | `space-12` (48) | Grid de manifiesto / historias |

---

## 4. Contenedores y anchos

### 4.1 Anchos máximos

| Token | px | Uso |
|---|---|---|
| `container-prose-narrow` | 512 | Columna editorial angosta |
| `container-prose`        | 672 | Columna de texto largo (~65ch) |
| `container-md`           | 960 | Contenido estándar |
| `container-lg`           | 1200 | **Container default del sitio** |
| `container-xl`           | 1440 | Hero, grid de productos wide |
| `container-full`         | 100% | Bleed total (imágenes de fondo, hero) |

### 4.2 Padding lateral del viewport (gutter)

| Breakpoint | Gutter | Max container |
|---|---|---|
| Mobile (<640)    | `space-4` (16)  | 100% |
| Tablet (≥640)    | `space-6` (24)  | 100% |
| Laptop (≥1024)   | `space-8` (32)  | `container-lg` (1200) |
| Desktop (≥1280)  | `space-12` (48) | `container-lg` (1200) |
| Wide (≥1440)     | `space-16` (64) | `container-xl` (1440) |

```css
.container {
  width: 100%;
  max-width: var(--container-lg);
  margin-inline: auto;
  padding-inline: var(--space-4);
}
@media (min-width: 640px)  { .container { padding-inline: var(--space-6); } }
@media (min-width: 1024px) { .container { padding-inline: var(--space-8); } }
@media (min-width: 1280px) { .container { padding-inline: var(--space-12); } }
```

---

## 5. Ritmo vertical entre secciones

Clave para que la web respire sin perder densidad comercial.

| Contexto | Mobile | Tablet | Desktop |
|---|---|---|---|
| Entre secciones (default) | `space-12` (48) | `space-16` (64) | `space-20` (80) |
| Secciones editoriales     | `space-16` (64) | `space-24` (96) | `space-32` (128) |
| Secciones de catálogo     | `space-10` (40) | `space-12` (48) | `space-16` (64) |
| Dentro de una sección     | `space-6` (24)  | `space-8` (32)  | `space-10` (40) |
| Hero padding vertical     | `space-16` (64) | `space-24` (96) | `space-32` (128) |

---

## 6. Spacing por componente (cheat sheet)

### Botón

| Tamaño | Padding Y | Padding X | Gap icono |
|---|---|---|---|
| sm | `space-2` (8)  | `space-3` (12) | `space-1` (4) |
| md | `space-3` (12) | `space-5` (20) | `space-2` (8) |
| lg | `space-4` (16) | `space-6` (24) | `space-2` (8) |

### Input / Textarea

- Padding: `space-3` (12) vertical × `space-4` (16) horizontal
- Stack label → input: `stack-xs` (4)
- Stack input → helper text: `stack-xs` (4)
- Stack entre fields: `stack-md` (16)

### Card de producto

- Inset: `space-4` (16) en mobile, `space-6` (24) en desktop
- Stack imagen → título: `stack-md` (16)
- Stack título → precio: `stack-xs` (4)
- Stack precio → CTA: `stack-sm` (8)

### Grid de catálogo

- Columnas: 2 (mobile) → 3 (tablet) → 4 (desktop)
- Gap: `gap-md` (24) en mobile/tablet, `gap-lg` (32) en desktop
- Margen inferior tras grid: `stack-2xl` (64)

### Carrito (drawer o página)

- Inset del drawer: `space-6` (24)
- Stack entre items: `stack-lg` (24)
- Stack line-items internos: `stack-sm` (8)
- Separación total → subtotal: `stack-xl` (40)

### Ficha de producto

- Hero split (imagen / info): `gap-lg` (32) en desktop
- Stack título → precio: `stack-md` (16)
- Stack precio → variantes: `stack-lg` (24)
- Stack selector talla → cantidad: `stack-md` (16)
- Stack cantidad → CTA: `stack-lg` (24)
- Stack CTA → stamp/detalle: `stack-xl` (40)

### Footer

- Padding vertical: `space-16` (64) desktop, `space-12` (48) mobile
- Gap entre columnas: `gap-lg` (32)
- Stack entre links: `stack-sm` (8)

---

## 7. Densidad (modos opcionales)

Para vistas específicas podés bajar o subir un escalón completo:

| Modo | Aplicación | Regla |
|---|---|---|
| **Compact**   | Checkout, carrito denso | Restar un step a todos los stack/inset |
| **Comfortable** | Default | Valores base |
| **Spacious** | Manifiesto, historias, editorial | Sumar un step a stack/inset principales |

```css
[data-density="compact"]   { --stack-md: var(--space-3); --inset-md: var(--space-3); }
[data-density="spacious"]  { --stack-md: var(--space-6); --inset-md: var(--space-6); }
```

---

## 8. Breakpoints (alineados con tipografía)

| Nombre | min-width | Uso |
|---|---|---|
| `sm` | 640px   | Tablet portrait |
| `md` | 768px   | Tablet landscape |
| `lg` | 1024px  | Laptop |
| `xl` | 1280px  | Desktop |
| `2xl` | 1440px | Desktop wide |

---

## 9. Tokens CSS — listos para copiar

```css
:root {
  /* Base scale (4px) */
  --space-0:    0;
  --space-px:   1px;
  --space-0-5:  0.125rem;  /* 2 */
  --space-1:    0.25rem;   /* 4 */
  --space-2:    0.5rem;    /* 8 */
  --space-3:    0.75rem;   /* 12 */
  --space-4:    1rem;      /* 16 */
  --space-5:    1.25rem;   /* 20 */
  --space-6:    1.5rem;    /* 24 */
  --space-8:    2rem;      /* 32 */
  --space-10:   2.5rem;    /* 40 */
  --space-12:   3rem;      /* 48 */
  --space-16:   4rem;      /* 64 */
  --space-20:   5rem;      /* 80 */
  --space-24:   6rem;      /* 96 */
  --space-32:   8rem;      /* 128 */
  --space-40:   10rem;     /* 160 */
  --space-48:   12rem;     /* 192 */

  /* Semantic — Inset */
  --inset-xs:   var(--space-2);
  --inset-sm:   var(--space-3);
  --inset-md:   var(--space-4);
  --inset-lg:   var(--space-6);
  --inset-xl:   var(--space-8);
  --inset-2xl:  var(--space-12);

  /* Semantic — Stack */
  --stack-xs:   var(--space-1);
  --stack-sm:   var(--space-2);
  --stack-md:   var(--space-4);
  --stack-lg:   var(--space-6);
  --stack-xl:   var(--space-10);
  --stack-2xl:  var(--space-16);
  --stack-3xl:  var(--space-24);

  /* Semantic — Inline */
  --inline-xs:  var(--space-1);
  --inline-sm:  var(--space-2);
  --inline-md:  var(--space-4);
  --inline-lg:  var(--space-6);

  /* Semantic — Gap */
  --gap-tight:  var(--space-2);
  --gap-sm:     var(--space-4);
  --gap-md:     var(--space-6);
  --gap-lg:     var(--space-8);
  --gap-xl:     var(--space-12);

  /* Containers */
  --container-prose-narrow: 32rem;   /* 512 */
  --container-prose:        42rem;   /* 672 */
  --container-md:           60rem;   /* 960 */
  --container-lg:           75rem;   /* 1200 */
  --container-xl:           90rem;   /* 1440 */

  /* Breakpoints (para JS / container queries) */
  --bp-sm:  40em;   /* 640 */
  --bp-md:  48em;   /* 768 */
  --bp-lg:  64em;   /* 1024 */
  --bp-xl:  80em;   /* 1280 */
  --bp-2xl: 90em;   /* 1440 */
}
```

---

## 10. Reglas de oro

1. **Siempre usá la escala.** Si necesitás algo entre dos valores, subí al siguiente — no inventes.
2. **Múltiplos de 8 dominan el layout.** El 4 es para detalles finos (iconos, badges).
3. **Relacionado = menos espacio.** Distinto = más. La jerarquía se lee por distancia.
4. **Aire editorial ≠ aire de catálogo.** Respetá la densidad por contexto.
5. **Gutter crece con el viewport.** No dejes el container pegado al borde en desktop.
6. **Consistente dentro del componente.** Si un card usa `inset-lg`, todas sus variantes también.
7. **Body en columna angosta.** `container-prose` (672px) máximo para párrafo largo.

---

## 11. Próximos pasos

- [ ] Exportar todo el Design System (colores + tipografía + spacing) como `design-tokens.json` (siguiente — `design-systems:design-token`).
- [ ] Definir sistema de elevación/sombras si se necesita (probablemente mínimo, la estética es flat).
- [ ] Definir radii (border-radius) — probablemente `0 | 2 | 4 | 8 | 999px` para estética editorial plana.
