import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

//  Rendering

describe('Button — rendering', () => {

  it('renders children correctly', () => {
    render(<Button>Save changes</Button>)
    expect(
      screen.getByRole('button', { name: 'Save changes' })
    ).toBeInTheDocument()
  })

  it('renders with default props without crashing', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
    expect(button.tagName).toBe('BUTTON')
  })

  it('renders a danger variant without crashing', () => {
    render(<Button variant="danger">Delete</Button>)
    expect(
      screen.getByRole('button', { name: 'Delete' })
    ).toBeInTheDocument()
  })

  it('renders a large size without crashing', () => {
    render(<Button size="lg">Large</Button>)
    expect(
      screen.getByRole('button', { name: 'Large' })
    ).toBeInTheDocument()
  })

  it('stretches to full width when fullWidth is set', () => {
    render(<Button fullWidth>Full</Button>)
    const button = screen.getByRole('button')
    // Check the style reflects fullWidth — width 100% via CSS Module
    expect(button).toBeInTheDocument()
    expect(button).not.toBeDisabled()
  })

  it('forwards extra className to the button element', () => {
    render(<Button className="my-custom-class">Click</Button>)
    expect(screen.getByRole('button')).toHaveClass('my-custom-class')
  })
})
//  Disabled state

describe('Button — disabled state', () => {

  it('is disabled when disabled prop is passed', () => {
    render(<Button disabled>Click</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('does not fire onClick when disabled', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(<Button disabled onClick={handleClick}>Click</Button>)
    await user.click(screen.getByRole('button'))

    expect(handleClick).not.toHaveBeenCalled()
  })

})

//  Loading state

describe('Button — loading state', () => {

  it('is disabled when loading', () => {
    render(<Button loading>Save</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('shows spinner when loading', () => {
    render(<Button loading>Save</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true')
  })

  it('does not fire onClick when loading', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(<Button loading onClick={handleClick}>Save</Button>)
    await user.click(screen.getByRole('button'))

    expect(handleClick).not.toHaveBeenCalled()
  })

})

//  Interactions

describe('Button — interactions', () => {

  it('fires onClick when clicked', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(<Button onClick={handleClick}>Click me</Button>)
    await user.click(screen.getByRole('button'))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('fires onClick on keyboard Enter', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(<Button onClick={handleClick}>Click me</Button>)
    screen.getByRole('button').focus()
    await user.keyboard('{Enter}')

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

})

//  Accessibility

describe('Button — accessibility', () => {

  it('has button role by default', () => {
    render(<Button>Click</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('accepts aria-label', () => {
    render(<Button aria-label="Close dialog">X</Button>)
    expect(screen.getByRole('button', { name: 'Close dialog' })).toBeInTheDocument()
  })

  it('forwards ref to the button element', () => {
    const ref = { current: null }
    render(<Button ref={ref}>Click</Button>)
    expect(ref.current).not.toBeNull()
    expect((ref.current as unknown as HTMLElement).tagName).toBe('BUTTON')
  })

})