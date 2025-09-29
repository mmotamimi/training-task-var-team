import styles from './Loading.module.css'
import React from 'react'

type Variant = 'ring' | 'dots'

type Props = {
  label?: string
  full?: boolean        // centered block that reserves space
  overlay?: boolean     // glass overlay covering parent
  variant?: Variant     // 'ring' | 'dots'
  size?: number         // ring size px
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
          <i /><i /><i />
        </span>
      )}
      {label && <span className={styles.text}>{label}</span>}
    </div>
  )
}
