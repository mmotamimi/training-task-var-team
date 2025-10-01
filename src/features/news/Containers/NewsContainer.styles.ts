import { css } from "@emotion/css";

export const createStyles = () => ({
  page: css({
    padding: '1rem',
    maxWidth: 1200,
    margin: '0 auto',
  }),
  controls: css({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1rem',
    '& input, & select': {
      padding: '0.5rem 0.75rem',
      fontSize: 14,
      border: '1px solid #ccc',
      borderRadius: 6,
      outline: 'none',
      transition: 'border 0.2s, box-shadow 0.2s',
    },
    '& input:focus, & select:focus': {
      borderColor: 'black',
      boxShadow: '0 0 0 2px rgba(0,0,0,0.1)',
    },
  }),
  dateRange: css({
    margin: '0.5rem 0 1rem 0',
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    '& label': {
      display: 'flex',
      flexDirection: 'column',
      fontSize: 14,
    },
    '& input[type="date"]': {
      padding: '0.5rem 0.75rem',
      fontSize: 14,
      border: '1px solid #ccc',
      borderRadius: 6,
      outline: 'none',
    },
    '& input[type="date"]:focus': {
      borderColor: 'black',
      boxShadow: '0 0 0 2px rgba(0,0,0,0.1)',
    },
  }),
  buttonsContainer: css({
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
  }),
  button: css({
    marginTop: '0.5rem',
    padding: '0.6rem 1.2rem',
    '&:hover': {
      backgroundColor: '#333',
      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    },
  }),
});