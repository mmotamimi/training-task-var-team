
import { LineChart } from '@mui/x-charts/LineChart'
import { createStyles } from './ChartCard.styles'
import Loading from '../../../shared/Loading/Loading';

type Datum = { date: string; value: number }

export default function ChartCard({
  title,
  subtitle,
  data,
  loading,
  error,
}: {
  title: string
  subtitle?: string
  data: Datum[]
  loading?: boolean
  error?: string | null
}) {
  const styles = createStyles()
  const isEmpty = !loading && !error && data.length === 0

  return (
    <section className={styles.card}>
      <div className={styles.head}>
        <h3 className={styles.title}>
          {title}
          {subtitle ? <span className={styles.subtitle}> {subtitle}</span> : null}
        </h3>
      </div>

      <div className={styles.box}>
        {loading && (
          <Loading overlay label="Fetching chart…" variant="ring" size={34} />
        )}

        {error && !loading && (
          <div className={styles.state} role="alert">
            {error}
          </div>
        )}

        {isEmpty && <div className={styles.state}>No data</div>}

        {!loading && !error && data.length > 0 && (
          <LineChart
            xAxis={[{ data: data.map((d) => d.date), scaleType: 'point' }]}
            series={[{ data: data.map((d) => d.value), label: 'Value' }]}
            width={500}
            height={300}
            grid={{ horizontal: true, vertical: false }}
          />
        )}
      </div>
    </section>
  )
}
