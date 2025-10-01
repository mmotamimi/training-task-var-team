import { css } from '@emotion/css'

export const createStyles = () => {
  return {
    tile: css({
      background: 'linear-gradient(180deg,#eef2ff,#000000)',
      border: '1px solid var(--border)',
      borderRadius: 16,
      boxShadow: 'var(--shadow)',
      padding: 18,
      minHeight: 160,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
    }),

    title: css({
      fontWeight: 700,
      color: 'var(--ink)',
      marginBottom: 8,
    }),

    value: css({
      fontSize: 28,
      fontWeight: 700,
    }),

    error: css({
      color: 'red',
      fontWeight: 600,
    }),
  }
}
