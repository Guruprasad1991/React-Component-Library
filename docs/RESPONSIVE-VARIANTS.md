# Responsive Variant Strategy

## 1. Current library model

The current library already exposes size variants at the component level:

- Button: `sm | md | lg`
- Input: `sm | md | lg`
- Checkbox: `sm | md | lg`

These size variants provide the base layer for responsive design without requiring a separate layout framework.

## 2. Design intent

The component API is designed so that a product can adjust control density based on context, such as:

- compact forms in narrow layouts
- full-size controls in dense dashboards
- larger controls for touch-first surfaces

This pattern works well for the library’s current scope because the interface is a set of form controls rather than a complete layout system.

## 3. Recommended responsive rules

### Small screens

Use compact controls when vertical space is limited and forms are stacked.

- prefer `size="sm"` on Button, Input, and Checkbox in mobile form layouts
- use `fullWidth` when actions should span the available width
- avoid deep multi-column arrangements in compact spaces

### Tablet and desktop layouts

Use the default `md` size as the most balanced baseline for standard forms.

- primary actions may use `md` by default
- secondary or utility actions can remain compact
- field groupings can use consistent spacing without changing component apis

### Large or touch-first surfaces

Use `lg` for:

- command centers
- dashboards with larger tap targets
- accessibility-focused interfaces

## 4. Breakpoint recommendation

The library does not yet define explicit CSS breakpoint tokens, but the design system should eventually adopt a simple scale such as:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

This can be represented as tokens such as:

```css
--breakpoint-sm: 40rem;
--breakpoint-md: 48rem;
--breakpoint-lg: 64rem;
--breakpoint-xl: 80rem;
```

## 5. Suggested usage pattern

```tsx
<Button size="sm" fullWidth>Save</Button>
<Input size="md" label="Email" />
<Checkbox size="sm" label="Remember me" />
```

A responsive app may map these size choices to viewport conditions:

```tsx
const isCompact = window.innerWidth < 640

<Button size={isCompact ? 'sm' : 'md'}>Continue</Button>
```

## 6. Future direction

As the library grows, the design system should add:

- explicit responsive token values for breakpoints
- layout primitives for stacking and alignment
- a pattern for variant respondence at the component level instead of only at the screen level
- optional controlled `density` prop for components when more complex interfaces need it

This keeps responsive design adaptive, consistent, and easy to reason about without overloading every component with ad hoc props.
