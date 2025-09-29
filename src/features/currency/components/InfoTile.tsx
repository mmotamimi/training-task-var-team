import Loading from '../../shared/components/Loading'
import styles from './InfoTile.module.css'

type Props = {
  title: string
  /** e.g. "3.35 (0.69%)" */
  value?: string
  loading?: boolean
  error?: string | null
}

export default function InfoTile({ title, value, loading, error }: Props) {
  return (
    <section className={styles.tile}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
      </div>

      <div className={styles.body}>
        {loading ? (
          <Loading full label="Updating rate…" variant="dots" />
        ) : error ? (
          <div className={styles.error} role="alert">
            {error}
          </div>
        ) : (
          <div className={styles.value}>{value ?? '—'}</div>
        )}
      </div>
    </section>
  )
}
