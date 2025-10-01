import { css } from "@emotion/css";

export const createStyles = () => {
  return {
    pageRoot: css({
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    }),

    content: css({
      width: "100%",
      maxWidth: 1200,
      margin: "0 auto",
      padding: "24px 16px",
    }),

    hero: css({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "80vh",
    }),

    actions: css({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "clamp(10rem, 6vw, 48px)",

      "& .MuiIconButton-root": {
        fontSize: 80,
      },
    }),
  };
};
