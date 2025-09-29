import styles from './Topbar.module.css'

export default function Topbar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.brand}>
        <span className={styles.coin}>$</span>
        <span className={styles.coin}>€</span>
        <span className={styles.coin}>¥</span>
      </div>
      <button className={styles.menu} aria-label="menu">
        <span /><span /><span />
      </button>
    </header>
  )
}
