import type { ERALatest, LatestResp, TimeseriesResp, SymbolsMap } from './types'

const ERA_BASE = 'https://open.er-api.com/v6'
const HOST_BASE = 'https://api.exchangerate.host'
const KEY = import.meta.env.VITE_EXHOST_KEY as string | undefined

/** Simple querystring helper */
function qs(obj: Record<string, string | number | undefined>) {
  const p = new URLSearchParams()
  for (const [k, v] of Object.entries(obj)) {
    if (v !== undefined && v !== null) p.append(k, String(v))
  }
  return p.toString()
}

/** Fallback list — ExchangeRate-API(open) has no symbols endpoint */
const FALLBACK_SYMBOLS: SymbolsMap = {
  USD: 'United States Dollar',
  EUR: 'Euro',
  ILS: 'Israeli New Shekel',
  GBP: 'British Pound Sterling',
  JPY: 'Japanese Yen',
  CHF: 'Swiss Franc',
  AUD: 'Australian Dollar',
  CAD: 'Canadian Dollar',
  CNY: 'Chinese Yuan',
  SEK: 'Swedish Krona',
  NOK: 'Norwegian Krone',
  DKK: 'Danish Krone',
  PLN: 'Polish Złoty',
  TRY: 'Turkish Lira',
  SAR: 'Saudi Riyal',
  AED: 'UAE Dirham',
  EGP: 'Egyptian Pound',
  JOD: 'Jordanian Dinar',
  MAD: 'Moroccan Dirham',
  PKR: 'Pakistani Rupee',
}

export async function getSymbols(): Promise<SymbolsMap> {
  if (!KEY) return FALLBACK_SYMBOLS
  try {
    const url = `${HOST_BASE}/symbols?${qs({ access_key: KEY })}`
    const res = await fetch(url, { cache: 'no-store' })
    const data = await res.json()
    if (data?.success === false) throw new Error(data?.error?.info || 'symbols error')
    const map: SymbolsMap = {}
    Object.values<any>(data.symbols ?? {}).forEach((s: any) => (map[s.code] = s.description))
    return Object.keys(map).length ? map : FALLBACK_SYMBOLS
  } catch {
    return FALLBACK_SYMBOLS
  }
}

/** Live (latest) via ExchangeRate-API (open) */
export async function getLatest(base: string): Promise<LatestResp> {
  const res = await fetch(`${ERA_BASE}/latest/${encodeURIComponent(base)}`, { cache: 'no-store' })
  const j = (await res.json()) as ERALatest
  if (j.result !== 'success') throw new Error('ExchangeRate-API error')
  const iso = new Date(j.time_last_update_utc).toISOString().slice(0, 10)
  return { base: j.base_code, date: iso, rates: j.rates }
}

/** History/time-series via exchangerate.host /timeframe (with key) */
export async function getTimeseries(
  base: string,
  symbol: string,
  start: string,
  end: string,
): Promise<TimeseriesResp> {
  if (!KEY) throw new Error('Missing VITE_EXHOST_KEY')

  // Ask for symbol, and (if base ≠ USD) also the base to compute cross rate
  const currencies = base === 'USD' ? symbol : `${symbol},${base}`

  const url = `${HOST_BASE}/timeframe?${qs({
    access_key: KEY,
    start_date: start,
    end_date: end,
    currencies, // NOTE: /timeframe uses "currencies", not "symbols"
  })}`

  console.info('[timeframe] GET', url)

  const res = await fetch(url, { cache: 'no-store' })
  const data = await res.json()

  if (!res.ok || data?.success === false) {
    const msg = data?.error?.info || data?.error?.type || 'timeframe fetch failed'
    throw new Error(msg)
  }

  // Two possible shapes seen in the wild:
  // 1) data.quotes[date]["USDILS"] style with data.source = "USD"
  // 2) data.rates[date]["ILS"] style (already based on requested base)
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

    // Shape (2): rates[date][symbol]
    if (typeof day[symbol] === 'number' && (data.rates || src === base)) {
      pairRate = day[symbol]
    } else {
      // Shape (1): quotes[date]["USDILS"] etc. Derive cross if needed.
      const directKey = `${src}${symbol}` // e.g., USDILS
      const baseKey = `${src}${base}`     // e.g., USDNOK
      if (base === src) {
        // direct USD→symbol
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
