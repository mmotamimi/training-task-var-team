import type { Theme } from "@mui/material";
import { css } from "@emotion/css";

export const createStyles = (theme:Theme) => {
  return {
    iconBox: css({
      fontSize: 60,
      color: theme.palette.error.main,
      textAlign: "center",
    }),
    messageText: css({
      marginBottom: theme.spacing(3),
      color: theme.palette.text.secondary
    }),

  }
}