# react-component-library-guru 

A lightweight React component library built with TypeScript and CSS Modules.

Link : https://guruprasad1991.github.io/React-Component-Library/

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

## Design system docs

The project now includes architecture and usage documentation for the component system:

- [docs/README.md](docs/README.md)
- [docs/COMPONENT-ARCHITECTURE.md](docs/COMPONENT-ARCHITECTURE.md)
- [docs/TOKEN-STRUCTURE.md](docs/TOKEN-STRUCTURE.md)
- [docs/RESPONSIVE-VARIANTS.md](docs/RESPONSIVE-VARIANTS.md)
- [docs/COMPONENT-PATTERNS.md](docs/COMPONENT-PATTERNS.md)

## GitHub Pages deployment

This project is set up to publish the component library as a Storybook site on GitHub Pages.

### Local build

```bash
npm run build-storybook
```

### GitHub Pages workflow

The repo includes a GitHub Actions workflow that:

1. installs dependencies
2. builds Storybook
3. publishes the generated `storybook-static` output to GitHub Pages

To enable it in GitHub:

1. push the repo to GitHub
2. open the repository settings
3. go to Pages
4. set the source to "GitHub Actions"

Then every push to the default branch will publish the Storybook docs automatically.

## Requirements

- React >= 18.0.0

## License

MIT © [Guruprasad](https://github.com/Guruprasad1991)
