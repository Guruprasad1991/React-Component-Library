import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: { label: 'Email address', placeholder: 'you@example.com' },
}

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'guruprasad',
    helperText: 'Only letters, numbers, and underscores.',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    error: 'Please enter a valid email address.',
  },
}

export const Required: Story = {
  args: { label: 'Full name', placeholder: 'Guruprasad', required: true },
}

export const Disabled: Story = {
  args: { label: 'Read-only field', value: 'Cannot be changed', disabled: true },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '320px' }}>
      <Input label="Small"  placeholder="Small input"  size="sm" />
      <Input label="Medium" placeholder="Medium input" size="md" />
      <Input label="Large"  placeholder="Large input"  size="lg" />
    </div>
  ),
}