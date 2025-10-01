import { css } from '@emotion/css'

export const createStyles = () => {
  return {
    page: css({
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }),

    grid: css({
      display: 'grid',
      gap: 24,
      gridTemplateColumns: '2fr 1fr',
      gridAutoRows: 'min-content',
      margin: '24px 0 36px',

      '@media (max-width: 1024px)': {
        gridTemplateColumns: '1fr',
      },
    }),

    leftCol: css({
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    }),

    rightCol: css({
      position: 'relative',

      '@media (max-width: 1024px)': {
        order: -1, // converter first on mobile
      },
    }),

    fullRow: css({
      gridColumn: '1 / -1',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    }),

    updated: css({
      color: 'var(--muted)',
      fontSize: '.9rem',
    }),

    footer: css({
      marginTop: 'auto',
      borderTop: '1px solid var(--border)',
      background: 'var(--panel)',
      color: 'var(--muted)',
    }),
  }
}
