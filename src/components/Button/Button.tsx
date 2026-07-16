import React from 'react'
import type { Size, Variant } from '../../types/common'
import styles from './Button.module.css'

// ─── Props ────────────────────────────────────────────────

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:   Variant
  size?:      Size
  loading?:   boolean
  fullWidth?: boolean
  startIcon?: React.ReactNode
  endIcon?:   React.ReactNode
}

// Component
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant   = 'primary',
      size      = 'md',
      loading   = false,
      fullWidth = false,
      startIcon,
      endIcon,
      disabled,
      children,
      className,
      ...rest
    },
    ref,
  ) => {

    // Build class string from active props
    const classes = [
      styles.button,
      styles[variant],
      styles[size],
      fullWidth ? styles.fullWidth : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        aria-busy={loading}
        {...rest}
      >
        {loading && (
          <span className={styles.spinner} aria-hidden="true" />
        )}

        {!loading && startIcon && (
          <span aria-hidden="true">{startIcon}</span>
        )}

        {children}

        {!loading && endIcon && (
          <span aria-hidden="true">{endIcon}</span>
        )}
      </button>
    )
  },
)

Button.displayName = 'Button'