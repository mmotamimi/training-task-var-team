import type { ERAResponse, LatestResp, SymbolsMap, TimeseriesResp } from '../models/types'
import { FALLBACK_SYMBOLS } from '../models/currencies'
import { eraApi, hostApi } from '../api/exchangeApi'

const KEY = import.meta.env.VITE_EXHOST_KEY as string | undefined

/** Convert object to query string */
function toQueryString(obj: Record<string, string | number | undefined>) {
  const params = new URLSearchParams()
  for (const [k, v] of Object.entries(obj)) {
    if (v !== undefined && v !== null) params.append(k, String(v))
  }
  return params.toString()
}

export async function getSymbols(): Promise<SymbolsMap> {
  if (!KEY) return FALLBACK_SYMBOLS
  try {
    const res = await hostApi.get(`/symbols?${toQueryString({ access_key: KEY })}`)
    const data = res.data
    if (data?.success === false) throw new Error(data?.error?.info || 'symbols error')
    const map: SymbolsMap = {}
    Object.values<any>(data.symbols ?? {}).forEach((s: any) => {
      map[s.code] = s.description
    })
    return Object.keys(map).length ? map : FALLBACK_SYMBOLS
  } catch {
    return FALLBACK_SYMBOLS
  }
}

export async function getLatest(base: string): Promise<LatestResp> {
  const res = await eraApi.get(`/latest/${encodeURIComponent(base)}`)
  const j = res.data as ERAResponse
  if (j.result !== 'success') throw new Error('ExchangeRate-API error')
  const iso = new Date(j.time_last_update_utc).toISOString().slice(0, 10)
  return { base: j.base_code, date: iso, rates: j.rates }
}

export async function getTimeseries(
  base: string,
  symbol: string,
  start: string,
  end: string,
): Promise<TimeseriesResp> {
  if (!KEY) throw new Error('Missing VITE_EXHOST_KEY')
  const currencies = base === 'USD' ? symbol : `${symbol},${base}`
  const url = `/timeframe?${toQueryString({
    access_key: KEY,
    start_date: start,
    end_date: end,
    currencies,
  })}`

  const res = await hostApi.get(url)
  const data = res.data
  if (data?.success === false) {
    const msg = data?.error?.info || data?.error?.type || 'timeframe fetch failed'
    throw new Error(msg)
  }

  const src: string = data.source || 'USD'
  const container: Record<string, any> = data.quotes || data.rates || {}

  const out: TimeseriesResp = {
    base,
    start_date: data.start_date,
    end_date: data.end_date,
    rates: {},
  }

  for (const [date, row] of Object.entries(container)) {
    const day = row as Record<string, number>
    let pairRate: number | undefined

    if (typeof day[symbol] === 'number' && (data.rates || src === base)) {
      pairRate = day[symbol]
    } else {
      const directKey = `${src}${symbol}`
      const baseKey = `${src}${base}`
      if (base === src) {
        const v = day[directKey]
        if (typeof v === 'number') pairRate = v
      } else {
        const usdToSym = day[directKey]
        const usdToBase = day[baseKey]
        if (typeof usdToSym === 'number' && typeof usdToBase === 'number') {
          pairRate = usdToSym / usdToBase
        }
      }
    }

    if (typeof pairRate === 'number') {
      out.rates[date] = { [symbol]: pairRate }
    }
  }

  return out
}
