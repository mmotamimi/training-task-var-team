import { css } from "@emotion/css";

export const createStyles = () => {
  return {
    grow: css({
      flex: "1 1 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }),

    center: css({
      width: "100%",
      maxWidth: "560px",
      backgroundColor: "#fff",
      borderRadius: "8px",
    }),

    navButton: css({
      fontWeight: 600,
    }),
  };
};
