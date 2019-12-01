import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const globalStyles = css`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
  }
  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 40px 1fr 40px;
  }
`;

export const Header = styled.header`
  background: #b60808;
  padding: 10px;
`;

export const Body = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  padding: 10px;
  box-shadow: 2px 2px 8px 0 rgba(128, 128, 128, 0.44);
`;

export const Footer = styled.footer`
  text-align: right;
  padding: 10px;
  background: #b60808;
`;
