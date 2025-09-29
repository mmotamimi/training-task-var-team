import styles from './RangeButtons.module.css'
import type { RangeKey } from '../hooks/useTimeseries'

const LABELS: Record<RangeKey, string> = { '24h': 'last 24 hours', '7d': 'last 7 days', '1m': 'last month' }

export default function RangeButtons({
  value,
  onChange,
}: { value: RangeKey; onChange: (v: RangeKey) => void }) {
  return (
    <nav className={styles.ranges}>
      {(Object.keys(LABELS) as RangeKey[]).map((k) => (
        <button
          key={k}
          className={`${styles.btn} ${value === k ? styles.active : ''}`}
          onClick={() => onChange(k)}
        >
          {LABELS[k]}
        </button>
      ))}
    </nav>
  )
}
