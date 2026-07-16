import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    loading:   { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    disabled:  { control: 'boolean' },
    onClick:   { action: 'clicked' },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {}

export const Secondary: Story = {
  args: { variant: 'secondary' },
}

export const Danger: Story = {
  args: { variant: 'danger' },
}

export const Outline: Story = {
  args: { variant: 'outline' },
}

export const Ghost: Story = {
  args: { variant: 'ghost' },
}

export const Small: Story = {
  args: { size: 'sm' },
}

export const Large: Story = {
  args: { size: 'lg' },
}

export const Loading: Story = {
  args: { loading: true },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const FullWidth: Story = {
  args: { fullWidth: true },
}

export const WithIcons: Story = {
  args: {
    startIcon: '★',
    endIcon: '→',
    children: 'With Icons',
  },
}
