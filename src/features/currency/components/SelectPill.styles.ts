import { css } from '@emotion/css'

export const createStyles = () => {
  return {
    pill: css({
      appearance: 'none',
      background: '#f9fafb',
      border: '1px solid #e5e7eb',
      borderRadius: 999,
      padding: '8px 12px',
      minWidth: 140,
      fontWeight: 600,
      color: '#111827',
      cursor: 'pointer',
    }),
  }
}
