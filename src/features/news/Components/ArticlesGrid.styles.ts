import { css } from "@emotion/css";

export const createStyles = () => ({
    loadMoreContainer: css({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
  }),
  loadMoreBtn: css({
    marginTop: '1rem',
    padding: '0.6rem 1.2rem',
    width: '30%',
    '&:hover': {
      backgroundColor: '#333',
    },
  }),
});
