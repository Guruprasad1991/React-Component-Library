import React from 'react'
import type { Size } from '../../types/common'
import styles from './Checkbox.module.css'

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  label?:          string
  description?:    string
  helperText?:     string
  error?:          string
  size?:           Size
  indeterminate?:  boolean
}

let idCounter = 0
const generateId = () => `checkbox-${++idCounter}`

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      description,
      helperText,
      error,
      size = 'md',
      indeterminate = false,
      disabled,
      id: externalId,
      className,
      ...rest
    },
    ref,
  ) => {
    const internalRef = React.useRef<HTMLInputElement>(null)
    const resolvedRef = (ref as React.RefObject<HTMLInputElement>) ?? internalRef
    const id          = React.useMemo(() => externalId ?? generateId(), [externalId])
    const errorId     = `${id}-error`

    React.useEffect(() => {
      if (resolvedRef.current) {
        resolvedRef.current.indeterminate = indeterminate
      }
    }, [indeterminate, resolvedRef])

    const wrapperClasses = [
      styles.labelWrapper,
      styles[size],
      disabled ? styles.disabled : '',
      error    ? styles.error    : '',
      className ?? '',
    ].filter(Boolean).join(' ')

    return (
      <div className={styles.wrapper}>
        <label htmlFor={id} className={wrapperClasses}>
          <input
            ref={resolvedRef}
            id={id}
            type="checkbox"
            className={styles.nativeCheckbox}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            {...rest}
          />

          <span className={styles.checkboxControl} aria-hidden="true">
            <svg className={styles.checkmark} viewBox="0 0 12 12" fill="none">
              <polyline
                points="1.5,6 4.5,9 10.5,3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={styles.dash} />
          </span>

          {(label || description) && (
            <span className={styles.labelText}>
              {label && <span className={styles.label}>{label}</span>}
              {description && <span className={styles.description}>{description}</span>}
            </span>
          )}
        </label>

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

Checkbox.displayName = 'Checkbox'