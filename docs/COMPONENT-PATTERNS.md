# Component Patterns and Usage Guidance

## 1. Form field pattern

The library’s input and checkbox components follow a consistent field pattern:

- label
- control
- helper text or validation message
- optional description block for nested context

This pattern is useful for forms that need clarity without visual clutter.

## 2. Validation pattern

A good validation experience includes:

- a clear label
- a field-level error message
- `aria-invalid` on the control
- `role="alert"` on the message when it is critical

Examples from this project:

- `Input` uses `helperText` or `error`
- `Checkbox` keeps the same pattern for validation consistency

## 3. State pattern

Each component should clearly communicate its interaction states:

- default
- hover/focus
- disabled
- loading
- error
- selected/checked/indeterminate

The current library implements most of these states via CSS Modules and HTML attributes, while preserving native semantics where possible.

## 4. Composition pattern

The library favors composition over deep prop nesting.

Examples:

- `Button` composes icon slots with `startIcon` and `endIcon`
- `Input` composes adornments with `startAdornment` and `endAdornment`
- `Checkbox` composes label text and description in a single accessible block

This pattern keeps each component flexible without adding excessive complexity.

## 5. Accessibility pattern

The project’s components are built around accessibility fundamentals:

- visible labels for inputs and checkboxes
- `htmlFor` + `id` linkage
- descriptive status messaging
- focus styling via CSS variable-driven rings
- native form elements for semantics and browser support

## 6. Pattern checklist for new components

Before adding a component, confirm that it follows these rules:

- has a clear component purpose
- exposes the smallest useful prop set
- uses token-based design values
- includes accessible default behavior
- supports a default state, interactive state, and disabled state
- exposes consistent validation messaging when appropriate

## 7. Example usage patterns

```tsx
<Input
  label="Email address"
  placeholder="you@example.com"
  helperText="We will only use this for account updates."
/>

<Checkbox
  label="Newsletter"
  description="Get product updates and release notes."
/>

<Button variant="primary" size="md" loading>
  Saving...
</Button>
```

This pattern keeps the component ecosystem predictable and easy for application developers to adopt.
