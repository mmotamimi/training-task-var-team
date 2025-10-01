import { useEffect, useState } from 'react'
import { getLatest } from '../services/currencyService'

export function useLatest(base: string, quote: string) {
  const [rate, setRate] = useState<number | undefined>(undefined)
  const [date, setDate] = useState<string>('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let ignore = false
    setLoading(true)
    getLatest(base)
      .then((d) => { if (!ignore) { setRate(d.rates?.[quote]); setDate(d.date) } })
      .catch(() => { if (!ignore) { setRate(undefined); setDate('') } })
      .finally(() => !ignore && setLoading(false))
    return () => { ignore = true }
  }, [base, quote])

  return { rate, date, loading }
}
