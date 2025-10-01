import { css } from '@emotion/css'

export const createStyles = () => {
  return {
    ranges: css({
      display: 'inline-flex',
      border: '1px solid var(--border)',
      borderRadius: 12,
      background: 'var(--panel)',
      boxShadow: 'var(--shadow)',
      padding: 4,
    }),

    btn: css({
      border: 'none',
      background: 'transparent',
      padding: '10px 16px',
      borderRadius: 10,
      cursor: 'pointer',
      color: 'var(--muted)',
      fontWeight: 600,

      '&:hover': {
        color: 'var(--ink)',
      },
    }),

    active: css({
      background: '#111827',
      color: '#fff',
    }),
  }
}
