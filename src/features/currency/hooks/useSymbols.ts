import { useEffect, useState } from 'react'
import type { SymbolsMap } from '../models/types'
import { getSymbols } from '../services/currencyService'

export function useSymbols() {
  const [symbols, setSymbols] = useState<SymbolsMap>({})
  useEffect(() => { getSymbols().then(setSymbols).catch(() => setSymbols({})) }, [])
  return symbols
}
