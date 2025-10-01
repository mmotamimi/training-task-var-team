

import Loading from '../../../shared/Loading/Loading'
import type { Props } from '../models/types'
import { createStyles } from './InfoTile.styles'



export default function InfoTile({ title, value, loading, error }: Props) {
  const styles = createStyles()

  return (
    <section className={styles.tile}>
      <span className={styles.title}>{title}</span>
      {loading ? (
        <Loading full label="Updating rate…" variant="dots" />
      ) : error ? (
        <div className={styles.error} role="alert">
          {error}
        </div>
      ) : (
        <div className={styles.value}>{value ?? '—'}</div>
      )}
    </section>
  )
}
