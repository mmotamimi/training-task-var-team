// currencies.ts

import type { SymbolsMap } from "./types";


/**
 * A fallback list of commonly used currency codes and descriptions.
 * Used when the API fails to provide symbols.
 */
export const FALLBACK_SYMBOLS: SymbolsMap = {
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
