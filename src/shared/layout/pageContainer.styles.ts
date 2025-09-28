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
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 32px 0;
  text-align: center;
`;

export const actions = css`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;
