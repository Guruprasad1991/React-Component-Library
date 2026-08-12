# Component Architecture Specification

## 1. System overview

The component library is built as a lightweight set of React primitives that expose a small, predictable API while staying easy to theme and extend.

The current structure is:

- Public package entry: `index.ts`
- Library source: `src/index.ts`
- Component implementations: `src/components/*`
- Shared theme tokens: `src/styles/tokens.css`
- Shared type definitions: `src/types/common.ts`

## 2. Architectural principles

1. Small, composable building blocks
   - Each component owns its own visual behavior and basic state logic.
   - Components are intentionally opinionated but not over-abstracted.

2. Token-first styling
   - Colors, spacing, typography, radius, and motion are defined as CSS custom properties.
   - Components consume tokens instead of hard-coded values.

3. Type-safe public API
   - Props are declared in TypeScript interfaces.
   - Shared `Size` and `Variant` types define component-level variants consistently.

4. Accessible form controls
   - Inputs and checkboxes use labels, `aria-invalid`, `aria-describedby`, and role patterns where appropriate.
   - State changes such as loading, required, and error messaging are exposed in the component API.

## 3. Component responsibilities

### Button

File: `src/components/Button/Button.tsx`

Purpose:

- Primary interaction element for actions, confirmation, or destructive actions.

Public props:

- `variant`: `primary | secondary | danger | outline | ghost`
- `size`: `sm | md | lg`
- `loading`: disables interaction and announces busy state
- `fullWidth`: expands to available width
- `startIcon`, `endIcon`: decoration without changing base semantics

Behavior:

- Uses `forwardRef` to support ref forwarding.
- Combines CSS module classes from the component variant and size.
- Applies `aria-busy` when loading.
- Disables button interaction when `disabled` or `loading` is active.

### Input

File: `src/components/Input/Input.tsx`

Purpose:

- Single-field text input with label, helper text, and validation error support.

Public props:

- `label`
- `required`
- `helperText`
- `error`
- `size`: `sm | md | lg`
- `startAdornment`, `endAdornment`

Behavior:

- Generates a stable internal id when none is passed.
- Connects labels to inputs with `htmlFor` and `id`.
- Exposes validation messaging via `role="alert"` and `aria-describedby`.
- Supports decorative prefix/suffix content without interrupting the field’s semantics.

### Checkbox

File: `src/components/Checkbox/Checkbox.tsx`

Purpose:

- Selection state with label, description, and optional indeterminate state.

Public props:

- `label`
- `description`
- `helperText`
- `error`
- `size`: `sm | md | lg`
- `indeterminate`

Behavior:

- Keeps the native checkbox element for semantics and form participation.
- Manages `indeterminate` state through a ref effect.
- Supports validation and helper messaging consistent with Input.
- Preserves the checkbox label and description block as a single accessible unit.

## 4. Shared design contract

All components should follow the same structural rules:

- Use a single root wrapper for layout.
- Keep visual states driven by CSS classes and token variables.
- Expose the minimum public API required for use cases.
- Ensure accessibility semantics are not lost when adding visual enhancements.
- Prefer composition over complex conditional props.

## 5. Suggested extension pattern

When adding a new component, keep the pattern below:

1. Define props in a TypeScript interface.
2. Create the component in its own folder.
3. Use a CSS Module file for styling.
4. Reference shared tokens from `src/styles/tokens.css`.
5. Export the component and prop type through `src/components/index.ts` and the root `index.ts`.

## 6. Future architecture recommendations

To grow the library without creating inconsistent patterns, the next layer should include:

- semantic token aliases such as `--color-surface-primary` and `--color-text-muted`
- a shared spacing scale and typography scale documented with named examples
- simple layout primitives such as `Stack`, `Inline`, and `FieldGroup`
- optional theme providers for brand switching and dark mode support

This keeps the current library lightweight while preserving a clear path toward a more formal design system.
