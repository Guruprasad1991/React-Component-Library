import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from './Input'

describe('Input — rendering', () => {

  it('renders without crashing', () => {
    render(<Input />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders label when provided', () => {
    render(<Input label="Email" />)
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('associates label with input', () => {
    render(<Input label="Email" />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('renders required indicator when required', () => {
    render(<Input label="Email" required />)
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  it('renders helper text when provided', () => {
    render(<Input helperText="Enter your email" />)
    expect(screen.getByText('Enter your email')).toBeInTheDocument()
  })

})

describe('Input — error state', () => {

  it('renders error message', () => {
    render(<Input error="Invalid email" />)
    expect(screen.getByText('Invalid email')).toBeInTheDocument()
  })

  it('hides helper text when error is shown', () => {
    render(<Input helperText="Helper" error="Error message" />)
    expect(screen.queryByText('Helper')).not.toBeInTheDocument()
    expect(screen.getByText('Error message')).toBeInTheDocument()
  })

  it('sets aria-invalid when error is present', () => {
    render(<Input error="Invalid" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

})

describe('Input — interactions', () => {

  it('accepts user input', async () => {
    const user = userEvent.setup()
    render(<Input label="Email" />)
    const input = screen.getByLabelText('Email')
    await user.type(input, 'hello@example.com')
    expect(input).toHaveValue('hello@example.com')
  })

  it('calls onChange when typing', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<Input onChange={handleChange} />)
    await user.type(screen.getByRole('textbox'), 'abc')
    expect(handleChange).toHaveBeenCalled()
  })

  it('is disabled when disabled prop is set', () => {
    render(<Input disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

})

describe('Input — accessibility', () => {

  it('forwards ref to input element', () => {
    const ref = { current: null }
    render(<Input ref={ref} />)
    expect(ref.current).not.toBeNull()
  })

  it('passes through aria-label', () => {
    render(<Input aria-label="Search" />)
    expect(screen.getByRole('textbox', { name: 'Search' })).toBeInTheDocument()
  })

})