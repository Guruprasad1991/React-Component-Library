# react-component-library-guru

A lightweight React component library built with TypeScript and CSS Modules.

## Installation

```bash
npm install react-component-library-guru
```

## Setup

Import styles once at your app root:

```tsx
import "react-component-library-guru/dist/style.css";
```

## Components

### Button

```tsx
import { Button } from 'react-component-library-guru'

<Button variant="primary">Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="danger">Delete</Button>
<Button variant="outline">Learn more</Button>
<Button variant="ghost">Dismiss</Button>

<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

<Button loading>Saving...</Button>
<Button disabled>Unavailable</Button>
<Button fullWidth>Submit</Button>
```

| Prop        | Type                                                 | Default   |
| ----------- | ---------------------------------------------------- | --------- |
| `variant`   | `primary \| secondary \| danger \| outline \| ghost` | `primary` |
| `size`      | `sm \| md \| lg`                                     | `md`      |
| `loading`   | `boolean`                                            | `false`   |
| `fullWidth` | `boolean`                                            | `false`   |
| `startIcon` | `ReactNode`                                          | —         |
| `endIcon`   | `ReactNode`                                          | —         |

---

### Input

```tsx
import { Input } from 'react-component-library-guru'

<Input label="Email" placeholder="you@example.com" />
<Input label="Username" helperText="Letters and numbers only." />
<Input label="Email" error="Invalid email address." />
<Input label="Name" required />
<Input label="Field" disabled />
```

| Prop             | Type             | Default |
| ---------------- | ---------------- | ------- |
| `label`          | `string`         | —       |
| `size`           | `sm \| md \| lg` | `md`    |
| `error`          | `string`         | —       |
| `helperText`     | `string`         | —       |
| `required`       | `boolean`        | `false` |
| `startAdornment` | `ReactNode`      | —       |
| `endAdornment`   | `ReactNode`      | —       |

---

### Checkbox

```tsx
import { Checkbox } from 'react-component-library-guru'

<Checkbox label="Accept terms" />
<Checkbox label="Remember me" defaultChecked />
<Checkbox label="Select all" indeterminate />
<Checkbox label="Newsletter" description="Weekly updates via email." />
<Checkbox label="Agree" error="This field is required." />
```

| Prop            | Type             | Default |
| --------------- | ---------------- | ------- |
| `label`         | `string`         | —       |
| `description`   | `string`         | —       |
| `size`          | `sm \| md \| lg` | `md`    |
| `error`         | `string`         | —       |
| `indeterminate` | `boolean`        | `false` |

---

## Theming

Override CSS variables to customise the look:

```css
:root {
  --color-primary: #7c3aed;
  --font-family-base: "Inter", sans-serif;
  --radius-md: 0.5rem;
}
```

## Requirements

- React >= 18.0.0

## License

MIT © [Guruprasad](https://github.com/Guruprasad1991)
