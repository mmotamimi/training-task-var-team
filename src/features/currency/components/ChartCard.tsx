import Loading from '../../shared/components/Loading';
import styles from './ChartCard.module.css';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'

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
        {loading && <Loading overlay label="Fetching chart…" variant="ring" size={34} />}

        {error && !loading && (
          <div className={styles.state} role="alert">
            {error}
          </div>
        )}

        {isEmpty && (
          <div className={styles.state}>No data</div>
        )}

        {!loading && !error && data.length > 0 && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" minTickGap={24} />
              <YAxis domain={['auto', 'auto']} />
              <Tooltip />
              <Line type="monotone" dataKey="value" dot={{ r: 3 }} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </section>
  )
}
