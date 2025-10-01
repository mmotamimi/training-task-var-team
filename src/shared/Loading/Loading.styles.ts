import { css, keyframes } from '@emotion/css'

/* Animations */
const spin = keyframes({
  to: { transform: 'rotate(360deg)' },
})

const bounce = keyframes({
  '0%, 80%, 100%': { transform: 'translateY(0)', opacity: 0.45 },
  '40%': { transform: 'translateY(-6px)', opacity: 1 },
})

export const createStyles = () => {
  return {
    wrap: css({
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--muted)',
      fontWeight: 600,
    }),

    full: css({
      display: 'grid',
      width: '100%',
      minHeight: 160,
      placeContent: 'center',
      justifyItems: 'center',
      rowGap: 10,
    }),

    overlay: css({
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeContent: 'center',
      justifyItems: 'center',
      rowGap: 10,
      borderRadius: 'inherit',
      background: 'rgba(255,255,255,.6)',
      backdropFilter: 'saturate(140%) blur(6px)',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,.4)',
      zIndex: 5,
    }),

    ring: css({
      '--size': '28px',
      '--thickness': '5px',
      width: 'var(--size)',
      height: 'var(--size)',
      borderRadius: '50%',
      background:
        'conic-gradient(var(--g1,#6366f1), var(--g2,#22d3ee), var(--g3,#a78bfa), var(--g1,#6366f1))',
      WebkitMask:
        'radial-gradient(farthest-side,#0000 calc(100% - var(--thickness)), #000 0)',
      mask: 'radial-gradient(farthest-side,#0000 calc(100% - var(--thickness)), #000 0)',
      animation: `${spin} 1.05s linear infinite`,
      position: 'relative',

      '&::before': {
        content: '""',
        position: 'absolute',
        inset: -10,
        borderRadius: '50%',
        background:
          'radial-gradient(closest-side, color-mix(in oklab, var(--g2) 30%, transparent), transparent 70%)',
        filter: 'blur(8px)',
        opacity: 0.6,
        pointerEvents: 'none',
      },

      '@media (prefers-reduced-motion: reduce)': {
        animation: 'none',
      },
    }),

    dots: css({
      display: 'inline-flex',
      gap: 6,

      '& i': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--ink)',
        opacity: 0.45,
        animation: `${bounce} .9s infinite ease-in-out`,

        '@media (prefers-reduced-motion: reduce)': {
          animation: 'none',
        },

        '&:nth-child(2)': { animationDelay: '.12s' },
        '&:nth-child(3)': { animationDelay: '.24s' },
      },
    }),

    text: css({
      fontSize: '.95rem',
    }),
  }
}
