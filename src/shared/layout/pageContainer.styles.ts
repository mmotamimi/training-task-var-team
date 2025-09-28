import { css } from "@emotion/css";

export const pageRoot = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const content = css`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 16px;
`;

export const hero = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const actions = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: clamp(10rem, 6vw, 48px);

  & .MuiIconButton-root {
    font-size: 80px;
  }
`;
