import { css } from '@emotion/css'

export const createStyles = () => {
  return {
    card: css({
      background: 'var(--panel)',
      border: '1px solid var(--border)',
      borderRadius: 16,
      boxShadow: 'var(--shadow)',
      padding: 16,
      width: '100%',
    }),

    head: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 6,
    }),

    title: css({
      margin: 0,
      fontSize: 20,
      fontWeight: 800,
      letterSpacing: 0.2,
    }),

    subtitle: css({
      fontSize: 12,
      color: 'var(--muted)',
      marginLeft: 6,
      fontWeight: 600,
    }),

    box: css({
      position: 'relative',
      height: 380,
      border: '1px dashed rgba(17,24,39,.06)',
      borderRadius: 12,
      background: '#fff',
      overflow: 'hidden',
    }),

    state: css({
      height: '100%',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--muted)',
      fontWeight: 700,
    }),
  }
}
