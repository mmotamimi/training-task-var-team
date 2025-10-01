import React from 'react'
import { createStyles } from './Loading.styles'

type Variant = 'ring' | 'dots'

type Props = {
  label?: string
  full?: boolean
  overlay?: boolean
  variant?: Variant
  size?: number
  className?: string
}

export default function Loading({
  label = 'Loading…',
  full,
  overlay,
  variant = 'ring',
  size = 28,
  className,
}: Props) {
  const styles = createStyles()

  const cls = [
    styles.wrap,
    full ? styles.full : '',
    overlay ? styles.overlay : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={cls} role="status" aria-live="polite" aria-busy="true">
      {variant === 'ring' ? (
        <span
          className={styles.ring}
          style={{ ['--size' as any]: `${size}px` } as React.CSSProperties}
        />
      ) : (
        <span className={styles.dots} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      )}
      {label && <span className={styles.text}>{label}</span>}
    </div>
  )
}
