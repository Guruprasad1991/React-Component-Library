# Token Structure Specification

## 1. Token strategy

The library uses CSS custom properties as its foundational token layer. This gives the project a single source of truth for colors, spacing, typography, radius, shadows, and motion.

The current tokens live in `src/styles/tokens.css` and follow a pragmatic foundation-first structure:

- foundation tokens: raw values and scales
- semantic aliases: usage-based names
- component tokens: component-specific values when needed

## 2. Current token set

### Color tokens

The project defines a neutral scale and brand/status colors:

- `--color-primary`
- `--color-primary-hover`
- `--color-primary-light`
- `--color-danger`
- `--color-danger-hover`
- `--color-gray-100` through `--color-gray-900`
- `--color-white`

These values support primary actions, neutral surfaces, destructive states, and form surfaces.

### Spacing tokens

```css
--space-1: 0.25rem;
--space-2: 0.5rem;
--space-3: 0.75rem;
--space-4: 1rem;
--space-6: 1.5rem;
```

Use spacing tokens for internal padding, vertical rhythm, and compact layout decision-making. Avoid raw numbers in component CSS when a spacing token already exists.

### Typography tokens

```css
--font-family-base: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-md: 1rem;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--line-height-tight: 1.25;
--line-height-normal: 1.5;
```

These values define the base text hierarchy for labels, helper text, and control content.

### Radius and shadow tokens

```css
--radius-sm: 0.25rem;
--radius-md: 0.375rem;

--shadow-focus: 0 0 0 3px rgba(37, 99, 235, 0.3);
--shadow-focus-danger: 0 0 0 3px rgba(220, 38, 38, 0.3);
```

These tokens inform control corners and focus ring treatments.

### Motion tokens

```css
--transition-fast: 120ms ease;
--transition-base: 200ms ease;
```

Use these tokens for hover, focus, and state transitions to keep interaction behavior coherent.

## 3. Recommended naming pattern

Use tokens in a consistent naming hierarchy:

- `color-*` for raw color values
- `space-*` for spacing
- `font-*` for typography
- `radius-*` for rounding
- `shadow-*` for elevation/focus styles
- `transition-*` for animation timing

This keeps the token system readable while maintaining a clear relationship to actual CSS custom properties.

## 4. Component token usage guidance

When a component requires a more specific value, prefer a component-level alias built from the foundation tokens, for example:

- `button-background-primary`
- `input-border-default`
- `checkbox-label-color`
- `field-error-text-color`

The general rule is:

- foundation tokens: global and reusable
- semantic aliases: easier to read in component CSS
- component tokens: a narrow escape hatch for a single component only

## 5. Example override

```css
:root {
  --color-primary: #7c3aed;
  --color-primary-hover: #6d28d9;
  --font-family-base: "Inter", sans-serif;
  --radius-md: 0.5rem;
}
```

This lets consumers rebrand the library without editing component source files.

## 6. Extension roadmap

The current token model can be expanded into a more complete design token architecture with:

- semantic color tokens like `--color-surface-default`
- success/warning/info state colors
- a full size scale for spacing beyond the current 5-step set
- breakpoint tokens for responsive design
- z-index tokens for layering rules
