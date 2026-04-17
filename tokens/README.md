# 🪙 ROOTS LIFE — Design Tokens

Sistema de tokens consolidado. Tres formatos listos para consumir según la herramienta que uses.

## Archivos

| Archivo | Formato | Para qué |
|---|---|---|
| `design-tokens.json` | W3C Design Tokens Community Group | Fuente de verdad. Consumible por Style Dictionary, Tokens Studio, Figma plugins. |
| `tailwind.preset.js` | Tailwind CSS preset | Drop-in para `tailwind.config.js`. Incluye clases `text-display-hero`, `text-h1`, `text-button`, `text-stamp`. |
| `tokens.css` | CSS variables | Consumo directo en cualquier stack (Vite, Next, HTML plano). Incluye reset mínimo y clases utilitarias. |

## Fuentes documentales

El JSON es la consolidación de:

- [`../BRIEF-ROOTS-LIFE.md`](../BRIEF-ROOTS-LIFE.md) — brief de marca
- [`../DESIGN-SYSTEM-COLORS.md`](../DESIGN-SYSTEM-COLORS.md) — sistema de color
- [`../DESIGN-SYSTEM-TYPOGRAPHY.md`](../DESIGN-SYSTEM-TYPOGRAPHY.md) — sistema tipográfico
- [`../DESIGN-SYSTEM-SPACING.md`](../DESIGN-SYSTEM-SPACING.md) — sistema de spacing

## Capas (jerarquía de tokens)

1. **Primitivos** (`color.ink.900`, `space.4`, `fontSize.base`) — valores raw.
2. **Semánticos** (`semantic.bg.default`, `semantic.action.primary.bg`) — referencian primitivos.
3. **Composite** (`textStyle.h1`, `textStyle.stamp`) — bundles listos para aplicar.

**Regla:** los componentes consumen **semánticos o composite**, nunca primitivos directos.

## Uso — Tailwind

```js
// tailwind.config.js
module.exports = {
  presets: [require('./tokens/tailwind.preset.js')],
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
};
```

Después en JSX:

```jsx
<button className="bg-ink-900 text-paper-100 px-6 py-4 text-button hover:bg-ink-800">
  Agregar al carrito
</button>

<h1 className="text-display-hero text-ink-900">ROOTS LIFE</h1>

<span className="text-stamp text-ink-500">Chubut · Patagonia · ESTD 2024</span>
```

## Uso — CSS variables

```html
<link rel="stylesheet" href="/tokens/tokens.css">
```

```css
.product-card {
  background: var(--color-bg-elevated);
  padding: var(--inset-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.product-card__title {
  font-family: var(--font-body);
  font-size: var(--text-xl);
  font-weight: var(--fw-extrabold);
  color: var(--color-text);
  margin-bottom: var(--stack-sm);
}
```

## Uso — Style Dictionary (para generar otros formatos)

```bash
npm install -D style-dictionary
```

```js
// style-dictionary.config.js
module.exports = {
  source: ['tokens/design-tokens.json'],
  platforms: {
    css:  { transformGroup: 'css',  buildPath: 'build/css/',  files: [{ destination: 'tokens.css', format: 'css/variables' }] },
    js:   { transformGroup: 'js',   buildPath: 'build/js/',   files: [{ destination: 'tokens.js',  format: 'javascript/es6' }] },
    ios:  { transformGroup: 'ios',  buildPath: 'build/ios/',  files: [{ destination: 'Tokens.swift', format: 'ios-swift/class.swift' }] },
  },
};
```

## Actualización de tokens

Los `.md` del directorio padre son la documentación legible. El JSON es el código. **Si cambiás un token:**

1. Editá el `.md` correspondiente (colors / typography / spacing).
2. Reflejá el cambio en `design-tokens.json` + `tailwind.preset.js` + `tokens.css`.
3. Bumpeá `$metadata.version` en el JSON.

## Fuentes tipográficas

- **Poppins** → cargar desde Google Fonts (`wght@400;500;800`).
- **Kobe** → self-hosted. Guardar `Kobe-Regular.woff2` y `Kobe-Bold.woff2` en `/public/fonts/` (o equivalente). El `@font-face` se declara por separado, no viene en estos tokens.
