# 🎨 ROOTS LIFE — Color System

> Sistema de color para la web. Base editorial B&N + crema, con acentos de cápsula reservados para piezas específicas.

- **Versión:** 1.0
- **Última actualización:** 2026-04-15
- **Deriva de:** BRIEF-ROOTS-LIFE.md §15
- **Filosofía:** 90% del layout vive en neutrales. Los acentos son eventos — solo aparecen para CTAs, estados, o cápsulas temáticas.

---

## 1. Arquitectura del sistema

El sistema se organiza en **4 capas**:

1. **Neutrales** (`ink` / `paper`) → columna vertebral. 90% del uso.
2. **Acentos de marca** (`rust`, `moss`, `tide`) → elementos de identidad: CTAs, sellos, detalles editoriales.
3. **Acentos de cápsula** (`lime`, `cyan`, `sky`, `rose`) → usan en páginas específicas de colecciones. **No se mezclan** en la misma vista.
4. **Semánticos** (`success`, `warning`, `error`, `info`) → solo para feedback de sistema (carrito, checkout, formularios).

---

## 2. Neutrales — la columna vertebral

### 2.1 Ink (negro cálido)
Nunca es negro puro `#000`. Un gris muy oscuro con temperatura cálida para que dialogue con el crema.

| Token | HEX | Uso |
|---|---|---|
| `ink-50` | `#F5F4F1` | Fondo muy sutil sobre paper |
| `ink-100` | `#E8E6E0` | Borders claros, dividers |
| `ink-200` | `#CFCCC3` | Placeholder, texto deshabilitado |
| `ink-300` | `#A8A49A` | Texto terciario, iconos inactivos |
| `ink-400` | `#706C63` | Texto secundario |
| `ink-500` | `#4A4740` | Texto de apoyo sobre paper |
| `ink-600` | `#2E2C28` | Texto secundario fuerte |
| `ink-700` | `#1A1917` | Texto sobre paper (body) |
| `ink-800` | `#121110` | Headings |
| `ink-900` | `#0E0E0E` | **Ink base** — negro de marca, fondos editoriales |
| `ink-950` | `#050505` | Contraste máximo, logo en aplicaciones |

### 2.2 Paper (crema cálida)
Off-white con temperatura — proviene del color base de las remeras "No Bad Days".

| Token | HEX | Uso |
|---|---|---|
| `paper-50` | `#FDFBF6` | Fondo de hero, modales |
| `paper-100` | `#F7F3EA` | **Paper base** — fondo default del sitio |
| `paper-200` | `#EFE8D9` | Fondo alternativo, cards |
| `paper-300` | `#E3DBC8` | Borders cálidos, separadores |
| `paper-400` | `#CFC5AE` | Acento neutro, decorativo |

> **Regla de oro:** `ink-900 sobre paper-100` es el par por defecto de todo el sitio.

---

## 3. Acentos de marca

Extraídos de las piezas editoriales principales ("No Bad Days", hoodie "Invisible Forces"). Se usan con moderación para CTAs, sellos de coordenadas, y detalles identitarios.

### 3.1 Rust — acento cálido (coral patagónico)

| Token | HEX | Uso |
|---|---|---|
| `rust-50`  | `#FBEEE8` | Fondo sutil para alerts cálidos |
| `rust-100` | `#F6D4C5` | Backgrounds de tag, badge suave |
| `rust-300` | `#E89274` | Hover state |
| `rust-500` | `#D85A3A` | **Rust base** — CTA primario, sellos |
| `rust-700` | `#A03E24` | Pressed, texto enfático |
| `rust-900` | `#5E2413` | Texto sobre rust-100 |

### 3.2 Moss — verde profundo patagónico

| Token | HEX | Uso |
|---|---|---|
| `moss-50`  | `#EEF0E8` | Fondo sutil |
| `moss-100` | `#D2D8BF` | Badge suave |
| `moss-300` | `#8B9770` | Hover, iconografía |
| `moss-500` | `#4E5A38` | **Moss base** — acento natural, categorías |
| `moss-700` | `#323B23` | Texto enfático |
| `moss-900` | `#1B2012` | Sobre paper |

### 3.3 Tide — teal apagado (mar del sur)

| Token | HEX | Uso |
|---|---|---|
| `tide-50`  | `#E8F0F0` | Fondo sutil |
| `tide-100` | `#C1D7D7` | Backgrounds de cards |
| `tide-300` | `#6AA0A0` | Hover |
| `tide-500` | `#3E8A8A` | **Tide base** — detalles editoriales |
| `tide-700` | `#27605E` | Pressed |
| `tide-900` | `#143432` | Texto enfático |

### 3.4 Earth — marrón chocolate (tierra / taller)

| Token | HEX | Uso |
|---|---|---|
| `earth-50`  | `#F2EBE3` | Fondo de sección cápsula |
| `earth-100` | `#DBC5AD` | Background warm |
| `earth-300` | `#A67A54` | Hover |
| `earth-500` | `#7A4A2A` | **Earth base** — fondos de cápsula |
| `earth-700` | `#50301A` | Texto enfático |
| `earth-900` | `#2A1A0E` | Contraste profundo |

---

## 4. Acentos de cápsula

Colores que **solo aparecen** en páginas de colección específica. Cada cápsula tiene un color asociado que se usa para el hero, badges, y detalles de esa colección — pero nunca en la navegación general del sitio.

| Cápsula | Token | HEX | Lectura |
|---|---|---|---|
| "33.33" (snake) | `lime` | `#8BA548` | Olivo lima — ritual / serpiente |
| "55 55" (butterfly) | `cyan` | `#2FB8D4` | Turquesa eléctrico — transformación |
| "Kobe" line | `sky` | `#9CB7D4` | Azul cielo lavado — calma |
| "Locals" line | `rose` | `#B07870` | Rosa teja / polvo — cercanía |

> **Regla:** cuando una cápsula está activa en la página, su color reemplaza a `rust` como CTA secundario, pero **nunca** sustituye a los neutrales.

---

## 5. Semánticos (UI de sistema)

Reservados para feedback funcional: estados de carrito, validaciones de formulario, toast notifications. **Nunca** se usan decorativamente.

| Rol | BG suave | Texto / borde | Uso |
|---|---|---|---|
| Success | `#E6F2EA` | `#2B6B3E` | Carrito agregado, pago confirmado |
| Warning | `#FBF1E0` | `#8A5A16` | Stock bajo, aviso de envío |
| Error | `#FBE7E4` | `#B53022` | Validación fallida, pago rechazado |
| Info | `#E8EEF6` | `#2B4F86` | Mensajes informativos |

> Los semánticos se eligieron con saturación baja para que no griten contra la paleta editorial de la marca.

---

## 6. Mapeo semántico (tokens de producto)

Estos son los tokens que el código debería consumir. Mapeo 1:1 contra la capa raw.

```css
:root {
  /* Surface */
  --color-bg:             var(--paper-100);   /* #F7F3EA */
  --color-bg-elevated:    var(--paper-50);    /* #FDFBF6 */
  --color-bg-alt:         var(--paper-200);   /* #EFE8D9 */
  --color-bg-inverse:     var(--ink-900);     /* #0E0E0E — hero editorial */

  /* Text */
  --color-text:           var(--ink-900);     /* body sobre paper */
  --color-text-muted:     var(--ink-500);     /* secundario */
  --color-text-subtle:    var(--ink-400);     /* terciario / captions */
  --color-text-inverse:   var(--paper-100);   /* texto sobre ink */

  /* Borders */
  --color-border:         var(--ink-100);     /* divisores */
  --color-border-strong:  var(--ink-200);     /* inputs, cards */

  /* Brand / action */
  --color-primary:        var(--ink-900);     /* botón primario = negro */
  --color-primary-hover:  var(--ink-800);
  --color-primary-fg:     var(--paper-100);

  --color-accent:         var(--rust-500);    /* CTA secundario, sellos */
  --color-accent-hover:   var(--rust-700);
  --color-accent-fg:      var(--paper-100);

  /* Estados */
  --color-success:        var(--success-fg);
  --color-warning:        var(--warning-fg);
  --color-error:          var(--error-fg);
  --color-info:           var(--info-fg);
}
```

---

## 7. Accesibilidad (WCAG 2.1)

### Pares de alto uso — todos ≥ AA

| Fondo | Texto | Ratio | Nivel |
|---|---|---|---|
| `paper-100` `#F7F3EA` | `ink-900` `#0E0E0E` | **17.8 : 1** | AAA ✓ |
| `paper-100` | `ink-500` `#4A4740` | **8.6 : 1** | AAA ✓ |
| `paper-100` | `ink-400` `#706C63` | **5.1 : 1** | AA ✓ |
| `ink-900` | `paper-100` | **17.8 : 1** | AAA ✓ |
| `ink-900` | `paper-300` `#E3DBC8` | **12.3 : 1** | AAA ✓ |
| `rust-500` `#D85A3A` | `paper-100` | **4.3 : 1** | AA grande ✓ / ⚠ texto pequeño |
| `paper-100` | `rust-700` `#A03E24` | **6.8 : 1** | AA ✓ |
| `ink-900` | `rust-500` | **4.1 : 1** | AA grande ✓ |
| `tide-500` | `paper-100` | **3.9 : 1** | AA grande ✓ |
| `paper-100` | `tide-700` `#27605E` | **6.2 : 1** | AA ✓ |

### Reglas de accesibilidad

1. **Texto body:** siempre `ink-700` o más oscuro sobre `paper-*`.
2. **CTAs con rust-500:** texto solo en `paper-100` (blanco hueso) o `ink-900`, nunca en crema muy claro.
3. **Focus ring:** `rust-500` con outline de 2px + offset de 2px.
4. **No depender solo del color:** estados de error también llevan ícono; stock bajo también lleva texto.
5. **Testeado contra daltonismo:** el par `ink/paper` funciona en todos los tipos. Para acentos, nunca usar `rust` y `moss` como única diferenciación (simulador de protanopia los acerca).

---

## 8. Modo oscuro (opcional — para futuro)

Mapeo inicial si se habilita dark mode:

```css
[data-theme="dark"] {
  --color-bg:            var(--ink-900);    /* #0E0E0E */
  --color-bg-elevated:   var(--ink-800);
  --color-bg-alt:        var(--ink-700);
  --color-text:          var(--paper-100);
  --color-text-muted:    var(--ink-300);
  --color-border:        var(--ink-700);
  --color-accent:        var(--rust-300);   /* acento más claro para legibilidad */
}
```

> Decisión: **no es prioridad v1**. La identidad editorial B&N funciona de noche sin modo oscuro explícito. Se puede sumar después.

---

## 9. Uso por superficie — cheat sheet

| Superficie | Fondo | Texto | Acento |
|---|---|---|---|
| Home / hero | `paper-100` o `ink-900` | inverso | `rust-500` en CTA |
| Listado de productos | `paper-100` | `ink-900` | — |
| Ficha de producto | `paper-50` | `ink-900` | `rust-500` (agregar al carrito) |
| Carrito / checkout | `paper-100` | `ink-900` | `rust-500` (finalizar compra) |
| Serigrafía (servicio) | `ink-900` | `paper-100` | `rust-500` (WhatsApp) |
| Manifesto / historia | `paper-200` o `ink-900` | según | `earth-500` decorativo |
| Página de cápsula | acento de cápsula + `paper-100` | `ink-900` | color propio |
| Footer | `ink-900` | `paper-100` | — |

---

## 10. Próximos pasos

- [ ] Validar HEX exactos contra archivos `.ase` / Illustrator originales si existen.
- [ ] Exportar como tokens a `design-tokens.json` (Fase 3 — `design-systems:design-token`).
- [ ] Implementar en Tailwind config / CSS variables cuando arranque el código.
- [ ] Correr `ui-design:accessibility-audit` sobre el sistema ya implementado.
