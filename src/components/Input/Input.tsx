import React from 'react'
import type { Size } from '../../types/common'
import styles from './Input.module.css'

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?:          string
  required?:       boolean
  helperText?:     string
  error?:          string
  size?:           Size
  startAdornment?: React.ReactNode
  endAdornment?:   React.ReactNode
}

let idCounter = 0
const generateId = () => `input-${++idCounter}`

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      required,
      helperText,
      error,
      size = 'md',
      startAdornment,
      endAdornment,
      id: externalId,
      disabled,
      className,
      ...rest
    },
    ref,
  ) => {
    const id      = React.useMemo(() => externalId ?? generateId(), [externalId])
    const errorId = `${id}-error`

    const inputClasses = [
      styles.input,
      styles[size],
      error              ? styles.inputError        : '',
      startAdornment     ? styles.hasStartAdornment  : '',
      endAdornment       ? styles.hasEndAdornment    : '',
      className          ?? '',
    ].filter(Boolean).join(' ')

    return (
      <div className={styles.wrapper}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
            {required && <span className={styles.required} aria-hidden="true">*</span>}
          </label>
        )}

        <div className={styles.inputWrapper}>
          {startAdornment && (
            <span className={styles.startAdornment} aria-hidden="true">
              {startAdornment}
            </span>
          )}

          <input
            ref={ref}
            id={id}
            className={inputClasses}
            disabled={disabled}
            required={required}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            {...rest}
          />

          {endAdornment && (
            <span className={styles.endAdornment} aria-hidden="true">
              {endAdornment}
            </span>
          )}
        </div>

        {error && (
          <span id={errorId} className={styles.errorText} role="alert">
            {error}
          </span>
        )}

        {!error && helperText && (
          <span className={styles.helperText}>{helperText}</span>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'