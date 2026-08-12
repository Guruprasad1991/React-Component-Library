# Design Token and Component Addition Checklist

Use this checklist for every new component or design-system update.

## 1. Architecture checklist

- [ ] The component has a single, clear responsibility.
- [ ] Public props are defined with TypeScript interfaces.
- [ ] The component uses a dedicated folder with its own source and styles.
- [ ] The component exports through the library entry points.
- [ ] Accessible HTML semantics are preserved.
- [ ] State handling is explicit: default, hover/focus, disabled, loading, error, selected.
- [ ] The component follows the library’s composition pattern instead of introducing deep prop nesting.

## 2. Token checklist

- [ ] Colors come from CSS custom properties in `src/styles/tokens.css`.
- [ ] Spacing uses existing `--space-*` values instead of hard-coded numbers.
- [ ] Typography uses `--font-*` values rather than ad hoc font declarations.
- [ ] Radius is derived from `--radius-*` tokens.
- [ ] Focus rings use the provided shadow tokens.
- [ ] Motion uses `--transition-*` values.
- [ ] New tokens are documented and named consistently.

## 3. Responsive and variant checklist

- [ ] The component supports the standard size variants (`sm`, `md`, `lg`) when relevant.
- [ ] Density choices are intentional and consistent with the library’s design system.
- [ ] The component remains usable on compact screens.
- [ ] Full-width or layout-aware variants are considered if the component is action-oriented.
- [ ] Any new responsive behavior is documented in the component story or design notes.

## 4. Documentation checklist

- [ ] The component has a Storybook story with key states.
- [ ] The public API is visible in autodocs or equivalent docs.
- [ ] Important variants and states are demoed.
- [ ] Accessibility notes are included when needed.
- [ ] Any token overrides or customizations are documented.

## 5. Review sign-off

Before merging a component:

- [ ] Design intent is clear and consistent with the design system.
- [ ] Token usage is aligned to the shared values.
- [ ] Accessibility and responsive behavior have been reviewed.
- [ ] Storybook examples cover the default and edge states.
