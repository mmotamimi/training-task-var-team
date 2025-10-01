export type SymbolsMap = Record<string, string>

// open.er-api.com responses
export type ERAResponse = {
  result: 'success' | 'error'
  base_code: string
  time_last_update_utc: string
  time_next_update_utc: string
  rates: Record<string, number>
}

// For consistency with your code:
export type LatestResp = {
  base: string
  date: string
  rates: Record<string, number>
}

// Timeseries not available on the free open endpoint.
// We'll return a shaped object so the rest of the app compiles.
export type TimeseriesResp = {
  base: string
  start_date: string
  end_date: string
  rates: Record<string, Record<string, number>>
}

export type Props = {
  title: string
  value?: string
  loading?: boolean
  error?: string | null
}
