import { useEffect, useMemo, useState } from 'react'
import { getTimeseries } from '../services/currencyService';

function fmt(d: Date) { return d.toISOString().slice(0, 10) }
function daysAgo(n: number) { const d = new Date(); d.setDate(d.getDate() - n); return d }

export type RangeKey = '24h' | '7d' | '1m'

export function useTimeseries(base: string, quote: string, range: RangeKey) {
  const [data, setData] = useState<Array<{ date: string; value: number }>>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Compute dates outside the effect so they become dependencies
  const { start, end } = useMemo(() => {
    switch (range) {
      case '24h': return { start: fmt(daysAgo(2)),  end: fmt(daysAgo(0)) } // API is daily
      case '7d':  return { start: fmt(daysAgo(7)),  end: fmt(daysAgo(0)) }
      case '1m':  return { start: fmt(daysAgo(30)), end: fmt(daysAgo(0)) }
    }
  }, [range])

  useEffect(() => {
    const ctrl = new AbortController()
    setLoading(true)
    setError(null)

    getTimeseries(base, quote, start, end)
      .then((ts) => {
        if (ctrl.signal.aborted) return
        const points = Object.entries(ts.rates ?? {})
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([date, map]) => ({ date, value: (map as any)[quote] }))
          .filter((p) => typeof p.value === 'number')
        setData(points)
      })
      .catch((e) => {
        if (ctrl.signal.aborted) return
        setData([])
        setError(e?.message ?? 'Failed to load timeseries')
      })
      .finally(() => {
        if (!ctrl.signal.aborted) setLoading(false)
      })

    return () => ctrl.abort()
  }, [base, quote, start, end])

  return { data, loading, error, start, end }
}
