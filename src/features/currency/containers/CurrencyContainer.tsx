import { useMemo, useState } from 'react'
import InfoTile from '../components/InfoTile'
import RangeButtons from '../components/RangeButtons'
import ChartCard from '../components/ChartCard'
import ConverterCard from '../components/ConverterCard'
import { useSymbols } from '../hooks/useSymbols'
import { useLatest } from '../hooks/useLatest'
import { useTimeseries, type RangeKey } from '../hooks/useTimeseries'
import styles from './CurrencyContainer.module.css'
import Topbar from '../components/Topbar'

export default function CurrencyContainer(){
  const symbols = useSymbols()
  const [base, setBase] = useState('USD')
  const [quote, setQuote] = useState('ILS')
  const [range, setRange] = useState<RangeKey>('1m')

  const { rate, date, loading: latestLoading } = useLatest(base, quote)
  const { data: series, loading: tsLoading } = useTimeseries(base, quote, range)

  const pct = useMemo(() => {
    if (series.length < 2) return null
    const first = series[0].value, last = series.at(-1)!.value
    return ((last-first)/first)*100
  }, [series])

  return (
    <div className={styles.page}>
      <Topbar />
      <main className="container">
        <section className={styles.grid}>
          <div className={styles.leftCol}>
            <InfoTile
              title={`${base} to ${quote}`}
              value={rate!=null ? `${rate.toFixed(2)} (${pct==null?'—':pct.toFixed(2)+'%'})` : '—'}
              loading={latestLoading}
            />
            <RangeButtons value={range} onChange={setRange} />
          </div>

          <aside className={styles.rightCol}>
            <ConverterCard
              base={base} quote={quote}
              onBaseChange={setBase} onQuoteChange={setQuote}
              symbols={symbols}
            />
          </aside>

          <div className={styles.fullRow}>
            <ChartCard title={`${base}/${quote} trend`} subtitle="daily" data={series} loading={tsLoading}/>
            <div className={styles.updated}>Updated: {date || '—'}</div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <span>© {new Date().getFullYear()} $ex — Demo</span>
        </div>
      </footer>
    </div>
  )
}
