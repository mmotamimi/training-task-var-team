import { css } from '@emotion/css'

export const createStyles = () => {
  return {
    card: css({
      background: 'var(--panel)',
      border: '1px solid var(--border)',
      borderRadius: 16,
      boxShadow: 'var(--shadow)',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      position: 'sticky',
      top: 24,

      '@media (max-width:1024px)': {
        position: 'static',
      },
    }),

    row: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
    }),

    label: css({
      color: 'var(--muted)',
      textTransform: 'lowercase',
    }),
  }
}
