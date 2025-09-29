import styles from './ConverterCard.module.css'
import SelectPill from './SelectPill'

export default function ConverterCard({
  base, quote, onBaseChange, onQuoteChange, symbols,
}: {
  base: string; quote: string;
  onBaseChange: (v: string) => void;
  onQuoteChange: (v: string) => void;
  symbols: Record<string, string>;
}) {
  return (
    <aside className={styles.card}>
      <div className={styles.row}>
        <label className={styles.label}>from</label>
        <SelectPill value={base} onChange={onBaseChange} symbols={symbols} />
      </div>
      <div className={styles.row}>
        <label className={styles.label}>to</label>
        <SelectPill value={quote} onChange={onQuoteChange} symbols={symbols} />
      </div>
    </aside>
  )
}
