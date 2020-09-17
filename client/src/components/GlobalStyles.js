import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    color: ${(props) => props.theme.textPrimary};
    overscroll-behavior: none;
  }

  h2 {
    font-size: inherit;
    font-weight: 500;
    line-height: 1.6;
  }
`;

export default GlobalStyles;
