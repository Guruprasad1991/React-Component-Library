import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: { label: 'Accept terms and conditions' },
}

export const WithDescription: Story = {
  args: {
    label: 'Marketing emails',
    description: 'Get updates on new features and tips.',
  },
}

export const Checked: Story = {
  args: { label: 'Checked by default', defaultChecked: true },
}

export const Indeterminate: Story = {
  args: { label: 'Select all (partial)', indeterminate: true },
}

export const WithError: Story = {
  args: { label: 'I agree to the terms', error: 'You must accept to continue.' },
}

export const Disabled: Story = {
  args: { label: 'Disabled option', disabled: true },
}

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Checkbox label="Email notifications"  defaultChecked />
      <Checkbox label="Push notifications" />
      <Checkbox label="SMS notifications" />
      <Checkbox label="Weekly digest" defaultChecked />
    </div>
  ),
}