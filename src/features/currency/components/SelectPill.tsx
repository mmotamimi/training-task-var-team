import styles from './SelectPill.module.css'
import { useMemo } from 'react'

export default function SelectPill({
  value,
  onChange,
  symbols,
}: {
  value: string
  onChange: (v: string) => void
  symbols: Record<string, string>
}) {
  const entries = useMemo(
    () => Object.entries(symbols).sort(([a], [b]) => a.localeCompare(b)),
    [symbols],
  )
  return (
    <select className={styles.pill} value={value} onChange={(e) => onChange(e.target.value)}>
      {entries.map(([code, name]) => (
        <option key={code} value={code}>
          {code} — {name}
        </option>
      ))}
    </select>
  )
}
