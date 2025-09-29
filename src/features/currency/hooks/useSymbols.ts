import { useEffect, useState } from 'react'
import { getSymbols } from '../api/api'
import type { SymbolsMap } from '../api/types'

export function useSymbols() {
  const [symbols, setSymbols] = useState<SymbolsMap>({})
  useEffect(() => { getSymbols().then(setSymbols).catch(() => setSymbols({})) }, [])
  return symbols
}
