import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Checkbox } from './Checkbox'

describe('Checkbox — rendering', () => {

  it('renders without crashing', () => {
    render(<Checkbox />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('renders label when provided', () => {
    render(<Checkbox label="Accept terms" />)
    expect(screen.getByText('Accept terms')).toBeInTheDocument()
  })

  it('renders description when provided', () => {
    render(<Checkbox label="Newsletter" description="Weekly updates" />)
    expect(screen.getByText('Weekly updates')).toBeInTheDocument()
  })

  it('renders helper text', () => {
    render(<Checkbox helperText="Required field" />)
    expect(screen.getByText('Required field')).toBeInTheDocument()
  })

})

describe('Checkbox — state', () => {

  it('is unchecked by default', () => {
    render(<Checkbox label="Accept" />)
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('is checked when defaultChecked is set', () => {
    render(<Checkbox label="Accept" defaultChecked />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('is disabled when disabled prop is set', () => {
    render(<Checkbox label="Accept" disabled />)
    expect(screen.getByRole('checkbox')).toBeDisabled()
  })

  it('toggles when clicked', async () => {
    const user = userEvent.setup()
    render(<Checkbox label="Accept" />)
    const checkbox = screen.getByRole('checkbox')
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

})

describe('Checkbox — error state', () => {

  it('renders error message', () => {
    render(<Checkbox error="Required" />)
    expect(screen.getByText('Required')).toBeInTheDocument()
  })

  it('sets aria-invalid when error is present', () => {
    render(<Checkbox error="Required" />)
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('hides helper text when error is shown', () => {
    render(<Checkbox helperText="Helper" error="Error" />)
    expect(screen.queryByText('Helper')).not.toBeInTheDocument()
    expect(screen.getByText('Error')).toBeInTheDocument()
  })

})

describe('Checkbox — accessibility', () => {

  it('forwards ref to checkbox element', () => {
    const ref = { current: null }
    render(<Checkbox ref={ref} />)
    expect(ref.current).not.toBeNull()
  })

  it('calls onChange when toggled', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<Checkbox label="Accept" onChange={handleChange} />)
    await user.click(screen.getByRole('checkbox'))
    expect(handleChange).toHaveBeenCalled()
  })

})